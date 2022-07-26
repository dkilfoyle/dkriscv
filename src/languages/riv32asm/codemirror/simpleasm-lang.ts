import {
  foldInside,
  delimitedIndent,
  foldNodeProp,
  indentNodeProp,
  LanguageSupport,
  LRLanguage,
} from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";
// import { parser } from "./parser.js";
import { parser } from "./SimpleASM";

import { completeFromList } from "@codemirror/autocomplete";

let parserWithMetadata = parser.configure({
  props: [
    styleTags({
      Section: t.controlKeyword,
      // Id: t.typeName,
      "( )": t.paren,
      // Register: t.string,
      Immediate: t.number,
      Label: t.function(t.definition(t.variableName)),
      Register: t.typeName,
      LineComment: t.lineComment,
      BlockComment: t.blockComment,
    }),
    indentNodeProp.add({
      Block: delimitedIndent({ closing: "}" }),
    }),
    foldNodeProp.add({
      Block: foldInside,
    }),
  ],
});

export const simpleASMLanguage = LRLanguage.define({
  parser: parserWithMetadata,
  languageData: {
    commentTokens: { line: ";" },
  },
});

export const simpleASMCompletion = simpleASMLanguage.data.of({
  autocomplete: completeFromList([
    { label: "defun", type: "keyword" },
    { label: "defvar", type: "keyword" },
    { label: "let", type: "keyword" },
    { label: "cons", type: "function" },
    { label: "car", type: "function" },
    { label: "cdr", type: "function" },
  ]),
});

export function simpleASM() {
  return new LanguageSupport(simpleASMLanguage, [simpleASMCompletion]);
}
