// 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 00
// {       funct7     } {     rs2    } {     rs1    } {  f3  } {      rd    } {      opcode      }   R Type
// {             imm[11:0]           } {     rs1    } {  f3  } {      rd    } {      opcode      }   I Type
// {     imm[11:5]    } {     rs2    } {     rs1    } {  f3  } {  imm[4:0]  } {      opcode      }   S Type

import { getBits, maskBits } from "../../utils/bits";
import { SymbolTable } from "./builder";

// prettier-ignore
export const operations = {
  //       fmt  opcode     f3   f7
  add:   [ "R", 0b0110011, 0x0, 0x00 ], // __ rd, rs1, rs2 
  sub:   [ "R", 0b0110011, 0x0, 0x20 ], // __ rd, rs1, rs2
  xor:   [ "R", 0b0110011, 0x4, 0x00 ], // __ rd, rs1, rs2
  or:    [ "R", 0b0110011, 0x6, 0x00 ], // __ rd, rs1, rs2
  and:   [ "R", 0b0110011, 0x7, 0x00 ], // __ rd, rs1, rs2
  sll:   [ "R", 0b0110011, 0x1, 0x00 ], // __ rd, rs1, rs2
  srl:   [ "R", 0b0110011, 0x5, 0x00 ], // __ rd, rs1, rs2
  sra:   [ "R", 0b0110011, 0x5, 0x20 ], // __ rd, rs1, rs2
  slt:   [ "R", 0b0110011, 0x2, 0x00 ], // __ rd, rs1, rs2
  sltu:  [ "R", 0b0110011, 0x3, 0x00 ], // __ rd, rs1, rs2
  addi:  [ "I", 0b0010011, 0x0,      ], // __ rd, rs1, imm
  xori:  [ "I", 0b0010011, 0x4,      ], // __ rd, rs1, imm
  ori:   [ "I", 0b0010011, 0x6,      ], // __ rd, rs1, imm
  andi:  [ "I", 0b0010011, 0x7,      ], // __ rd, rs1, imm
  slli:  [ "I", 0b0010011, 0x1,      ], // __ rd, rs1, imm
  srli:  [ "I", 0b0010011, 0x5,      ], // __ rd, rs1, imm
  srai:  [ "I", 0b0010011, 0x5,      ], // __ rd, rs1, imm
  slti:  [ "I", 0b0010011, 0x2,      ], // __ rd, rs1, imm
  sltiu: [ "I", 0b0010011, 0x3,      ], // __ rd, rs1, imm
  lb:    [ "I", 0b0000011, 0x0,      ], // l__ rd, rs1, imm
  lh:    [ "I", 0b0000011, 0x1,      ], // l__ rd, rs1, imm
  lw:    [ "I", 0b0000011, 0x2,      ], // l__ rd, rs1, imm
  lbu:   [ "I", 0b0000011, 0x4,      ], // l__ rd, rs1, imm
  lhu:   [ "I", 0b0000011, 0x5,      ], // l__ rd, rs1, imm
  sb:    [ "S", 0b0100011, 0x0,      ], // s_  rs1, rs2, imm
  sh:    [ "S", 0b0100011, 0x1,      ], // s_  rs1, rs2, imm
  sw:    [ "S", 0b0100011, 0x2,      ], // s_  rs1, rs2, imm
  beq:   [ "B", 0b1100011, 0x0,      ], // b__ rs1, rs2, imm 
  bne:   [ "B", 0b1100011, 0x1,      ], // b__ rs1, rs2, imm
  blt:   [ "B", 0b1100011, 0x4,      ], // b__ rs1, rs2, imm
  bge:   [ "B", 0b1100011, 0x5,      ], // b__ rs1, rs2, imm
  bltu:  [ "B", 0b1100011, 0x6,      ], // b__ rs1, rs2, imm
  bgeu:  [ "B", 0b1100011, 0x7,      ], // b__ rs1, rs2, imm
  jal:   [ "J", 0b1101111,           ], // jal rd, imm
  jalr:  [ "I", 0b1100111, 0x0,      ], // jalr rd, rs1, imm
  lui:   [ "U", 0b0110111,           ],
  auipc: [ "U", 0b0010111,           ],
  ecall: [ "I", 0b1110011, 0x0,      ]
}

const instructionFields = {
  all: maskBits(0, 31),
  opcode: maskBits(0, 6),
  funct3: maskBits(12, 14),
  funct5: maskBits(27, 13),
  funct7: maskBits(25, 31),
  rd: maskBits(7, 11),
  rs1: maskBits(15, 19),
  rs2: maskBits(20, 24),
  rs3: maskBits(27, 31),
  imm_11_0: maskBits(20, 31),
  imm_4_0: maskBits(7, 11),
  imm_11_5: maskBits(25, 31),
  imm_11b: maskBits(7),
  imm_4_1: maskBits(8, 11),
  imm_10_5: maskBits(25, 30),
  imm_12: maskBits(31),
  imm_31_12: maskBits(12, 31),
  imm_19_12: maskBits(12, 19),
  imm_11j: maskBits(20),
  imm_10_1: maskBits(21, 30),
  imm_20: maskBits(31),
};

type InstructionType = "I" | "R" | "S" | "B" | "J" | "U";

interface InstructionParameters {
  rs1?: number;
  rs2?: number;
  rd?: number;
  imm?: number;
  offset?: number | string;
  symbol?: string;
  macro?: "hi" | "lo";
}

export class Instruction {
  iType: InstructionType;
  opName: string;
  params: InstructionParameters;
  line: number;
  col: number;
  machineCode: number;

  constructor(opName: string, params: InstructionParameters, pos: [number, number]) {
    this.iType = operations[opName][0];
    this.opName = opName;
    this.params = params;
    this.line = pos[0];
    this.col = pos[1];
    this.machineCode = 0;
  }

  encode(index: number, symbols: SymbolTable) {
    // convert string offset to immediate
    // calculate machinecode

    if (typeof this.params.offset == "string") {
      this.params.imm = symbols[this.params.offset] - index * 4;
    }

    if (this.params.symbol) {
      this.params.imm = symbols[this.params.symbol] - (index - 1) * 4; // = symbol - PC
    }

    if (this.params.macro === "hi") {
      this.params.imm = ((this.params.imm >>> 12) + getBits(this.params.imm, 12, 11)) << 12;
      // la rd, symbol =>
      // auipc rd, delta[31:12] + delta[11] where delta = symbol - PC
      // addi rd, rd, delta[11:0]
    }

    const setCode = (code: number, field: string, value: number) => {
      const [lo, mask] = instructionFields[field];
      return (code & ~(mask << lo)) | ((value & mask) << lo);
    };

    const [, opcode, funct3, funct7] = operations[this.opName];

    let code = 0;
    code = setCode(code, "opcode", opcode);
    switch (this.iType) {
      case "I":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "imm_11_0", this.params.imm);
        break;
      case "R":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "funct7", funct7);
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "rs2", this.params.rs2);
        break;
      case "S":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "rs2", this.params.rs2);
        code = setCode(code, "imm_4_0", this.params.imm);
        code = setCode(code, "imm_11_5", this.params.imm >>> 5);
        break;
      case "B":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "rs2", this.params.rs2);
        code = setCode(code, "imm_11b", this.params.imm >>> 11);
        code = setCode(code, "imm_4_1", this.params.imm >>> 1);
        code = setCode(code, "imm_10_5", this.params.imm >>> 5);
        code = setCode(code, "imm_12", this.params.imm >>> 12);
        break;
      case "J":
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "imm_19_12", this.params.imm >>> 12);
        code = setCode(code, "imm_11j", this.params.imm >>> 11);
        code = setCode(code, "imm_10_1", this.params.imm >>> 1);
        code = setCode(code, "imm_20", this.params.imm >>> 20);
        break;
      case "U":
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "imm_31_12", this.params.imm >>> 12);
        break;
      default:
        throw new Error();
    }
    this.machineCode = code >>> 0;
  }

  formatMachineCode() {
    return "0x" + this.machineCode.toString(16).padStart(8, "0");
  }

  formatInstruction() {
    const xs = this.machineCode.toString(2).padStart(32, "0");
    switch (this.iType) {
      case "R":
      case "S":
      case "B":
        return (
          xs.slice(31 - 31, 31 - 25 + 1) +
          "_" +
          xs.slice(31 - 24, 31 - 20 + 1) +
          "_" +
          xs.slice(31 - 19, 31 - 15 + 1) +
          "_" +
          xs.slice(31 - 14, 31 - 12 + 1) +
          "_" +
          xs.slice(31 - 11, 31 - 7 + 1) +
          "_" +
          xs.slice(31 - 6, 31 - 0 + 1)
        );
      case "I":
        return (
          xs.slice(31 - 31, 31 - 20 + 1) +
          "_" +
          xs.slice(31 - 19, 31 - 15 + 1) +
          "_" +
          xs.slice(31 - 14, 31 - 12 + 1) +
          "_" +
          xs.slice(31 - 11, 31 - 7 + 1) +
          "_" +
          xs.slice(31 - 6, 31 - 0 + 1)
        );
      case "J":
      case "U":
        return xs.slice(31 - 31, 31 - 12 + 1) + "_" + xs.slice(31 - 11, 31 - 7 + 1) + "_" + xs.slice(31 - 6, 31 - 0 + 1);
      default:
        throw new Error();
    }
  }
}
