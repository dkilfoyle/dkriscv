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
import { parser } from "./SimpleC2";

import { completeFromList } from "@codemirror/autocomplete";

let parserWithMetadata = parser.configure({
  props: [
    styleTags({
      "for while do if else switch return break continue default case": t.controlKeyword,
      "int void": t.typeName,
      BooleanLiteral: t.bool,
      VariableName: t.variableName,
      "CallExpression/VariableName TaggedTemplateExpression/VariableName": t.function(
        t.variableName
      ),
      VariableDefinition: t.definition(t.variableName),
      "CallExpression/MemberExpression/PropertyName": t.function(t.propertyName),
      "FunctionDeclaration/VariableDefinition": t.function(t.definition(t.variableName)),
      UpdateOp: t.updateOperator,
      LineComment: t.lineComment,
      BlockComment: t.blockComment,
      Number: t.number,
      String: t.string,
      ArithOp: t.arithmeticOperator,
      LogicOp: t.logicOperator,
      BitOp: t.bitwiseOperator,
      CompareOp: t.compareOperator,
      RegExp: t.regexp,
      Equals: t.definitionOperator,
      Arrow: t.function(t.punctuation),
      ": Spread": t.punctuation,
      "( )": t.paren,
      "[ ]": t.squareBracket,
      "{ }": t.brace,
      ".": t.derefOperator,
      ", ;": t.separator,

      TypeName: t.typeName,
      TypeDefinition: t.definition(t.typeName),
      "type enum interface implements namespace module declare": t.definitionKeyword,
      "abstract global Privacy readonly override": t.modifier,
      "is keyof unique infer": t.operatorKeyword,

      JSXAttributeValue: t.attributeValue,
      JSXText: t.content,
      "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": t.angleBracket,
      "JSXIdentifier JSXNameSpacedName": t.tagName,
      "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": t.attributeName,
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
