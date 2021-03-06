import { AstFunctionDeclaration } from "../../languages/simpleC/parser/astNodes";
import { ScopeStack } from "../../languages/simpleC/parser/scopeStack";
import { WORD_SIZE } from "./ASMGenerator";

export interface LocalScope {
  FP: number; // the SP at the entry point of the block
  SP: number; // positive or negative offset from *local* FP
  // if the scope is at function level then
  // a. stack grows positive from 0(FP) for function arguments
  // b. stack grows negative from -8(FP) for function locals
  // otherwise stack grows negative from 0(FP)
}

export interface LocalVariable {
  spoffset?: number;
  fpoffset: number;
  size: number;
}

export class LocalScopeStack extends ScopeStack<LocalVariable, LocalScope> {
  pushFunctionParams(node: AstFunctionDeclaration) {
    // FP+8    Arg2
    // FP+4    Arg1
    // FP+0 -> Arg0
    node.params.forEach((p, i) => {
      this.newSymbol(p.id, { fpoffset: i * WORD_SIZE, size: WORD_SIZE });
    });
  }
  pushLocal(name: string, size: number) {
    // myfun() {
    //   int x = 10;
    //   int y = 5;
    //   while (x>0) {
    //     int z = 2;
    //     x = x - 1;
    //     print_int(x);
    //   }
    // }
    // FP+0  Arg0
    // FP-4  CallerFP
    // FP-8  RA             BlockFP =-8 (enterFunction FP=-8)
    // FP-12 Local0         BlockSP =-4  offset=-8-4=-12           int x = 10;
    // FP-16 Local1         BlockSP =-8  offset=-8-8=-16           int y = 5;
    //                        BlockFP = -16 (enterBlock FP = topFP + topSP = -8 + -8 = -16)
    // FP-20   Local0         BlockSP = -4  offset=-16-4=-20       int z = 2;
    const top = this.top();
    top.context.SP -= size;
    const localVar = { spoffset: top.context.SP, fpoffset: top.context.FP + top.context.SP, size };
    this.newSymbol(name, localVar);
    return localVar;
  }
  popLocal() {
    const top = this.top();
    const lastKey = Object.keys(top.entries)[Object.keys(top.entries).length - 1];
    top.context.SP += this.getLocalVarOffset(lastKey).size;
    delete top.entries[lastKey];
  }
  getLocalVarOffset(id: string) {
    const [found, localVar] = this.getSymbol(id);
    if (!found) throw new Error();
    return localVar;
  }
  enterFunction(name: string) {
    // FP: is the SP (relative to function FP) at block entry.
    // It will be -2*WORD_SIZE after the AR has been pushed
    return this.enterScope(`function ${name}`, { FP: -2 * WORD_SIZE, SP: 0 });
  }
  enterBlock(name: string) {
    const parentContext = this.top().context;
    this.enterScope(name, { FP: parentContext.FP + parentContext.SP, SP: 0 });
  }
}
