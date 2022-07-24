import {
  foldInside,
  delimitedIndent,
  foldNodeProp,
  indentNodeProp,
  LanguageSupport,
  LRLanguage,
} from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";
import { parser } from "./parser.js";

import { completeFromList } from "@codemirror/autocomplete";

let parserWithMetadata = parser.configure({
  props: [
    styleTags({
      Identifier: t.variableName,
      Number: t.number,
      Boolean: t.bool,
      String: t.string,
      Comment: t.lineComment,
      "( )": t.paren,
      "{ }": t.paren,
      "for while if else switch": t.controlKeyword,
      Keyword: t.keyword,
      Assignment: t.arithmeticOperator,
      Operator: t.bitwiseOperator,
    }),
    indentNodeProp.add({
      Block: delimitedIndent({ closing: "}" }),
    }),
    foldNodeProp.add({
      Block: foldInside,
    }),
  ],
});

export const simpleCLanguage = LRLanguage.define({
  parser: parserWithMetadata,
  languageData: {
    commentTokens: { line: ";" },
  },
});

export const simpleCCompletion = simpleCLanguage.data.of({
  autocomplete: completeFromList([
    { label: "defun", type: "keyword" },
    { label: "defvar", type: "keyword" },
    { label: "let", type: "keyword" },
    { label: "cons", type: "function" },
    { label: "car", type: "function" },
    { label: "cdr", type: "function" },
  ]),
});

export function simpleC() {
  return new LanguageSupport(simpleCLanguage, [simpleCCompletion]);
}
