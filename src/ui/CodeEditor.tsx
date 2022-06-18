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
import { RangeSetBuilder } from "@codemirror/state";

import { ViewPlugin, DecorationSet, ViewUpdate } from "@codemirror/view";

export interface RangeMapEntry {
  left: [number, number];
  right: [number, number];
}
export type RangeMap = RangeMapEntry[];

const baseTheme = EditorView.baseTheme({
  "&light .cm-zebraStripe": { backgroundColor: "#d4fafa" },
  "&dark .cm-zebraStripe": { backgroundColor: "#1a2727" },
});

let lexer: Lexer, parser: SimpleCParser | SimpleASMParser, builder: SimpleASMAstBuilder | SimpleCAstBuilder, tokenStream: CommonTokenStream;

export const CodeEditor = (props: {
  lang: string;
  code: string;
  highlightRange: [number, number];
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

  function rangeDeco(view: EditorView) {
    const stripe = Decoration.line({
      attributes: { class: "cm-zebraStripe" },
    });
    let builder = new RangeSetBuilder<Decoration>();
    for (let { from, to } of view.visibleRanges) {
      for (let pos = from; pos <= to; ) {
        let line = view.state.doc.lineAt(pos);
        console.log(pos, props.highlightRange[0], props.highlightRange[1]);
        if (pos >= props.highlightRange[0] && pos <= props.highlightRange[1]) builder.add(line.from, line.from, stripe);
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
        // if (update.docChanged || update.viewportChanged)
        this.decorations = rangeDeco(update.view);
        console.log(this.decorations);
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
      height="100%"
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
