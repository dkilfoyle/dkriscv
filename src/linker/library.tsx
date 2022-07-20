import { CharStreams, CommonTokenStream } from "antlr4ts";
import { MCGenerator } from "../assemblers/riscv/MCGenerator";
import { SimpleASMLexer } from "../languages/riv32asm/parser/antlr/SimpleASMLexer";
import { SimpleASMParser } from "../languages/riv32asm/parser/antlr/SimpleASMParser";
import { SimpleASMAstBuilder } from "../languages/riv32asm/parser/astBuilder";
import { ASMRootNode } from "../languages/riv32asm/parser/astNodes";
import { ErrorListener } from "../languages/simpleC/parser/ErrorListener";

interface LibraryEntry {
  include: boolean;
  source: string;
  asmAst?: ASMRootNode;
}
export type Library = Record<string, LibraryEntry>;

export const library: Library = {
  mul: {
    include: false,
    source: "",
  },
  div: {
    include: false,
    source: "",
  },
};

Object.keys(library).map((filename) => {
  const file = require("./lib/" + filename + ".s");
  return fetch(file)
    .then((response) => response.text())
    .then((txt) => {
      library[filename].source = txt;
      const lexer = new SimpleASMLexer(CharStreams.fromString(txt));
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new SimpleASMParser(tokenStream);
      const builder = new SimpleASMAstBuilder();
      const errorListener = new ErrorListener();
      const assembler = new MCGenerator();

      lexer.removeErrorListeners();
      lexer.addErrorListener(errorListener);
      parser.removeErrorListeners();
      parser.addErrorListener(errorListener);

      let tree = parser.program();
      if (errorListener.errors.length === 0) {
        library[filename].asmAst = builder.visit(tree);
      } else console.log(errorListener.errors);
    });
});
