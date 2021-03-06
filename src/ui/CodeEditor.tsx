import { lintGutter, linter } from "@codemirror/lint";
import { minimalSetup, basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { CharStreams, CommonTokenStream, Lexer } from "antlr4ts";
import { useEffect, useRef, useState } from "react";
import { simpleC } from "../languages/simpleC/codemirror/simplec-lang";
import { Decoration } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";

import { ViewPlugin, DecorationSet, ViewUpdate } from "@codemirror/view";
import { immerable } from "immer";
import { breakpointEffect, breakpointGutter } from "./breakpoint";
import { DocPosition } from "../utils/antlr";
import { SimpleASMLexer } from "../languages/riv32asm/parser/antlr/SimpleASMLexer";
import { SimpleASMParser } from "../languages/riv32asm/parser/antlr/SimpleASMParser";
import { SimpleASMAstBuilder } from "../languages/riv32asm/parser/astBuilder";
import { ASMRootNode } from "../languages/riv32asm/parser/astNodes";
import { SimpleCLexer } from "../languages/simpleC/parser/antlr/SimpleCLexer";
import { SimpleCParser } from "../languages/simpleC/parser/antlr/SimpleCParser";
import { SimpleCAstBuilder } from "../languages/simpleC/parser/astBuilder";
import { AstCNode } from "../languages/simpleC/parser/astNodes";
import { ErrorListener } from "../languages/simpleC/parser/ErrorListener";

export interface HighlightRange extends DocPosition {
  col: string;
  filename?: string;
}

export interface RangeMapEntry {
  left: HighlightRange;
  right: HighlightRange;
  name?: string;
}
export type RangeMap = RangeMapEntry[];

export class CodeHighlightInfo {
  [immerable] = true;
  pc: HighlightRange;
  code: HighlightRange[];
  constructor() {
    this.pc = { startLine: 0, endLine: 0, col: "transpartent" };
    this.code = [];
  }
  toArray() {
    return [...this.code, this.pc];
  }
}

const baseTheme = EditorView.baseTheme({
  "&light .cm-zebraStripe": { backgroundColor: "#d4fafa" },
  "&dark .cm-zebraStripe": { backgroundColor: "#1a2727" },
});

let lexer: Lexer,
  parser: SimpleCParser | SimpleASMParser,
  builder: SimpleASMAstBuilder | SimpleCAstBuilder,
  tokenStream: CommonTokenStream;

export const CodeEditor = (props: {
  lang: string;
  code: string;
  highlightRanges: CodeHighlightInfo;
  updateAst: (root: ASMRootNode | AstCNode) => void;
  updatePos: (pos: number) => void;
  updateBreakpoints?: (pos: number, on: boolean) => void;
}) => {
  const lintCode = linter((view: EditorView) => {
    switch (props.lang) {
      case "simpleC":
        lexer = new SimpleCLexer(CharStreams.fromString(view.state.sliceDoc()));
        tokenStream = new CommonTokenStream(lexer);
        parser = new SimpleCParser(tokenStream);
        builder = new SimpleCAstBuilder();
        break;
      case "simpleASM":
        lexer = new SimpleASMLexer(CharStreams.fromString(view.state.sliceDoc()));
        tokenStream = new CommonTokenStream(lexer);
        parser = new SimpleASMParser(tokenStream);
        builder = new SimpleASMAstBuilder();
        break;
      default:
        throw new Error("supported lang");
    }
    const errorListener = new ErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const doc = view.state.doc;
    let tree = parser.program();

    if (errorListener.errors.length === 0 && codeChanged) {
      const ast = builder.visit(tree);
      props.updateAst(ast);
    }

    setCodeChanged(false);

    return errorListener.errors.map((e) => {
      return {
        from: doc.line(e.line).from + e.charPositionInLine,
        to:
          doc.line(e.line).from +
          e.charPositionInLine +
          (e.offendingSymbol ? e.offendingSymbol.text.length : 1),
        message: e.msg,
        severity: "error",
      };
    });
  });

  useEffect(() => {
    if (cmCodeRef.current.view && cmCodeRef.current.state) {
      const { view, state } = cmCodeRef.current;
      if (
        props.highlightRanges.pc.startLine &&
        props.highlightRanges.pc.startLine < state.doc.lines
      )
        view.dispatch({
          effects: EditorView.scrollIntoView(
            state.doc.line(props.highlightRanges.pc.startLine).from,
            { y: "center" }
          ),
        });
    }
  }, [props.highlightRanges.pc]);

  function rangeDeco(view: EditorView) {
    const stripe = (col) => Decoration.line({ attributes: { style: `background: ${col}` } });
    // Decoration.line({ class: "cm-zebraStripe" });
    let builder = new RangeSetBuilder<Decoration>();
    const ranges = props.highlightRanges.toArray();
    if (ranges.length)
      for (let { from, to } of view.visibleRanges) {
        for (let pos = from; pos <= to; ) {
          let line = view.state.doc.lineAt(pos);
          for (let { startLine, endLine, col } of ranges) {
            // let highlightStartLine = view.state.doc.lineAt(startPos).number;
            // let highlightEndLine = view.state.doc.lineAt(endPos).number;
            if (line.number >= startLine && line.number <= endLine)
              builder.add(line.from, line.from, stripe(col));
          }
          pos = line.to + 1;
        }
      }
    return builder.finish();
  }

  const rangeHighlighter = ViewPlugin.fromClass(
    class {
      decorations: DecorationSet;

      constructor(view: EditorView) {
        this.decorations = rangeDeco(view);
      }

      update(update: ViewUpdate) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = rangeDeco(update.view);
        }
      }
    },
    {
      decorations: (v) => v.decorations,
    }
  );

  const cmCodeRef = useRef<ReactCodeMirrorRef>({});
  const [codeChanged, setCodeChanged] = useState(false);

  const extensions = [basicSetup, lintCode, lintGutter(), simpleC(), rangeHighlighter];
  if (props.updateBreakpoints) extensions.push(breakpointGutter);

  return (
    <CodeMirror
      ref={cmCodeRef}
      value={props.code}
      extensions={extensions}
      onChange={(value, viewUpdate) => {
        setCodeChanged(true);
      }}
      onUpdate={(viewUpdate) => {
        if (viewUpdate.selectionSet) {
          const pos = viewUpdate.transactions[0]?.selection.ranges[0].from;
          props.updatePos(viewUpdate.state.doc.lineAt(pos).number);
        } else if (viewUpdate.transactions.length && viewUpdate.transactions[0].effects.length) {
          const effect = viewUpdate.transactions[0].effects[0];
          if (effect.is(breakpointEffect)) {
            props?.updateBreakpoints(
              viewUpdate.state.doc.lineAt(effect.value.pos).number,
              effect.value.on
            );
          }
        }
      }}
    />
  );
};
