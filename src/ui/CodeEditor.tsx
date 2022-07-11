import { lintGutter, linter } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { CharStreams, CommonTokenStream, Lexer } from "antlr4ts";
import { useEffect, useRef, useState } from "react";
import { SimpleASMLexer } from "../assemblers/riscv/antlr/SimpleASMLexer";
import { SimpleASMParser } from "../assemblers/riscv/antlr/SimpleASMParser";
import { ASMRootNode, SimpleASMAstBuilder } from "../assemblers/riscv/builder";
import { SimpleCLexer } from "../languages/simpleC/antlr/SimpleCLexer";
import { SimpleCParser } from "../languages/simpleC/antlr/SimpleCParser";
import { SimpleCAstBuilder } from "../languages/simpleC/builder";
import { ErrorListener } from "../languages/simpleC/ErrorListener";
import { AstNode } from "../languages/simpleC/nodes";
import { simpleC } from "../languages/simpleC/simplec-lang";
import { Decoration } from "@codemirror/view";
import { RangeSetBuilder, EditorSelection } from "@codemirror/state";

import { ViewPlugin, DecorationSet, ViewUpdate } from "@codemirror/view";
import { immerable } from "immer";

export type HighlightRange = { startPos: number; endPos: number; col: string };

export interface RangeMapEntry {
  left: HighlightRange;
  right: HighlightRange;
}
export type RangeMap = RangeMapEntry[];

export class CodeHighlightInfo {
  [immerable] = true;
  pc: HighlightRange;
  code: HighlightRange[];
  constructor() {
    this.pc = { startPos: 0, endPos: 0, col: "transpartent" };
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
  updateAst: (root: ASMRootNode | AstNode) => void;
  updatePos: (pos: number) => void;
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
        to: doc.line(e.line).from + e.charPositionInLine + e.offendingSymbol.text.length,
        message: e.msg,
        severity: "error",
      };
    });
  });

  useEffect(() => {
    if (cmCodeRef.current.view && cmCodeRef.current.state) {
      const { state, view } = cmCodeRef.current;
      view.dispatch({
        effects: EditorView.scrollIntoView(props.highlightRanges.pc.startPos, { y: "center" }),
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
          for (let { startPos, endPos, col } of ranges) {
            let highlightStartLine = view.state.doc.lineAt(startPos).number;
            let highlightEndLine = view.state.doc.lineAt(endPos).number;
            if (line.number >= highlightStartLine && line.number <= highlightEndLine)
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

  return (
    <CodeMirror
      ref={cmCodeRef}
      value={props.code}
      extensions={[lintCode, lintGutter(), simpleC(), rangeHighlighter, baseTheme]}
      onChange={(value, viewUpdate) => {
        setCodeChanged(true);
      }}
      onUpdate={(viewUpdate) => {
        if (viewUpdate.selectionSet) {
          props.updatePos(viewUpdate.transactions[0]?.selection.ranges[0].from);
        }
      }}
    />
  );
};
