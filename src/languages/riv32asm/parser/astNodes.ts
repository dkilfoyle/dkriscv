import { SymbolTable } from "./astBuilder";
import { Instruction } from "./Instruction";

export interface ASMRootNode {
  instructions: Instruction[];
  symbols: SymbolTable;
  labels: SymbolTable;
  dataSection: DataSection;
}

export class DataSection {
  data!: Uint8Array;
  pointer!: number;
  constructor() {
    this.reset();
  }
  reset() {
    this.data = new Uint8Array(1024);
    this.pointer = 0;
  }
  pushByte(x: number) {
    this.data[this.pointer++] = x & 0xff;
  }
  pushString(x: string) {
    for (let i = 0; i < x.length; i++) {
      this.pushByte(x.charCodeAt(i));
    }
  }
  pushWord(x: number) {
    this.pushByte(x);
    this.pushByte(x >> 8);
    this.pushByte(x >> 16);
    this.pushByte(x >> 24);
  }
  getBytes() {
    return this.data.slice(0, this.pointer);
  }
}
