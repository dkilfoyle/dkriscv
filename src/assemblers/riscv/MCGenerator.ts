import { RangeMap } from "../../ui/CodeEditor";
import { ASMRootNode, DataSection, SymbolTable } from "./builder";
import { Instruction } from "./Instruction";

export class MCGenerator {
  instructions: Instruction[];
  symbols: SymbolTable;
  dataSection: DataSection;
  rangeMap: RangeMap;

  reset() {
    this.rangeMap = [];
  }

  codegen(root: ASMRootNode) {
    this.reset();
    this.instructions = root.instructions;
    this.symbols = root.symbols;
    this.dataSection = root.dataSection;

    this.instructions.forEach((ins, i) => {
      ins.encode(i, this.symbols);
      this.rangeMap.push({ left: ins.pos, right: [i, i] });
    });

    Object.keys(this.symbols).forEach((symName, i) => {
      const instNum = this.symbols[symName] / 4;
      if (instNum < this.instructions.length) {
        const inst = this.instructions[instNum];
        this.rangeMap.push({ left: inst.pos, right: [instNum, instNum] });
      }
    });

    return { instructions: this.instructions, rangeMap: this.rangeMap };
  }

  printSymbols() {
    Object.entries(this.symbols).forEach((symbol) => {
      const [name, offset] = symbol;
      console.log(`${name.padStart(20, " ")} : ${offset.toString().padStart(4, " ")} = 0x${offset.toString(16)}`);
    });
  }

  printStatements() {
    this.instructions.forEach((ins, i) => {
      console.log(`0x${(i * 4).toString(16).padStart(3, "0")} ${ins.formatMachineCode()} ${ins.formatInstruction().padStart(37, " ")}`);
    });
  }
}