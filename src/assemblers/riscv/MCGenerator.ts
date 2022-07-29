import { SymbolTable } from "../../languages/riv32asm/parser/astBuilder";
import { ASMRootNode } from "../../languages/riv32asm/parser/astNodes";
import { Instruction } from "../../languages/riv32asm/parser/Instruction";
import { library } from "../../linker/library";
import { RangeMap } from "../../utils/antlr";

export class MCGenerator {
  rangeMap: RangeMap;
  symbols: Record<string, SymbolTable>;
  textStart: number;
  memWords: number[];

  reset() {
    this.rangeMap = [];
    this.symbols = { globals: {} };
    this.textStart = 0;
    this.memWords = [];
  }

  encode(root: ASMRootNode, filename: string, symbols: SymbolTable) {
    this.textStart = this.memWords.length * 4;

    if (this.textStart % 4) {
      console.error(`textStart ${this.textStart} is not 4 byte aligned for ${filename}`);
      throw new Error();
    }
    console.log(
      `Encoding ${filename}: textStart: ${this.textStart}, instructions: ${root.instructions.length}, data: ${root.dataSection.pointer}`,
      symbols
    );

    // encode each instruction and add encoded value to bytecodes
    // map the machinecode position to asm source position
    root.instructions.forEach((ins, i) => {
      this.memWords.push(ins.encode(this.textStart + i * 4, symbols));
      this.rangeMap.push({
        left: { ...ins.pos, col: "red", filename },
        right: { startLine: this.textStart / 4 + i, endLine: this.textStart / 4 + i, col: "blue" },
      });
    });

    // add datasection to end of textsection
    console.log("pushing data:", root.dataSection.getWords());
    this.memWords.push(...root.dataSection.getWords());
    console.log(this.memWords.length);
  }

  addSymbols(root: ASMRootNode, filename: string) {
    const dataStart = this.textStart + root.instructions.length * 4;

    this.symbols[filename] = {};

    // add textstart offset to each label(memory pointer)
    this.symbols[filename] = Object.keys(root.labels).reduce((acc, label) => {
      acc[label] = root.labels[label] + this.textStart;
      return acc;
    }, this.symbols[filename]);

    // add datastart offset to each symbol (variable) value(memory pointer)
    this.symbols[filename] = Object.keys(root.symbols).reduce((acc, symbol) => {
      acc[symbol] = root.symbols[symbol] + dataStart;
      return acc;
    }, this.symbols[filename]);

    root.globals.forEach((g) => (this.symbols.globals[g] = this.symbols[filename][g]));

    // update the textStart pointer
    this.textStart = dataStart + root.dataSection.pointer;
  }

  assemble(root: ASMRootNode) {
    this.reset();

    const linked: { filename: string; ast: ASMRootNode }[] = [
      { filename: "src", ast: root },
      ...Object.keys(library)
        .filter((lib) => library[lib].include)
        .map((lib) => ({ filename: lib, ast: library[lib].asmAst })),
    ];

    // build the combined symbol table for src and all necessary libraries
    linked.forEach((f) => this.addSymbols(f.ast, f.filename));
    console.log("Combined symbol table: ", this.symbols);

    // encode instructions and datasections using the symbol table, this will generate memWords
    linked.forEach((f) => {
      const fSymbols = { ...this.symbols[f.filename], ...this.symbols.globals };
      this.encode(f.ast, f.filename, fSymbols);
    });

    return { instructions: root.instructions, memWords: this.memWords, rangeMap: this.rangeMap };
  }

  // printSymbols() {
  //   Object.entries(this.symbols).forEach((symbol) => {
  //     const [name, offset] = symbol;
  //     console.log(
  //       `${name.padStart(20, " ")} : ${offset.toString().padStart(4, " ")} = 0x${offset.toString(
  //         16
  //       )}`
  //     );
  //   });
  // }

  // printStatements() {
  //   this.instructions.forEach((ins, i) => {
  //     console.log(
  //       `0x${(i * 4).toString(16).padStart(3, "0")} ${ins.formatMachineCode()} ${ins
  //         .formatInstruction()
  //         .padStart(37, " ")}`
  //     );
  //   });
  // }
}
