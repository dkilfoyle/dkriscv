import { ParserRuleContext } from "antlr4ts";
import { ScopeStack } from "./scopeStack";
import {
  AllowedTypes,
  ArraySignature,
  FunctionSignature,
  Signature,
  VariableSignature,
} from "./signature";
import { sprintf } from "sprintf-js";
import { DocPosition, getEmptyDocPosition } from "../../../utils/antlr";

export const errorNodes: AstCNode[] = [];
let globalReturnResult: string | number | boolean; // todo better method
const globalAstScopeStack = new ScopeStack<Instance, void>();

// const debugging = true;
// const debug = (msg: string, res?: string | number | boolean) => {
//   if (debugging) console.log(msg, res ? res : "");
// };

const getJavascriptType = (x: any) => {
  if (typeof x === "number") return "int";
  if (typeof x === "boolean") return "bool";
  if (typeof x === "string") return "string";
  return "unknown";
};

export abstract class Instance {
  constructor(public id: string, public type: AllowedTypes) {
    this.id = id;
    this.type = type;
  }
  abstract getValue(index?: number): string | number | boolean;
  abstract setValue(newValue: string | number | boolean, index?: number);
}

export class ErrorInstance extends Instance {
  constructor() {
    super("error", "void");
  }
  getValue() {
    return 0;
  }
  setValue() {}
}

export class VariableInstance extends Instance {
  constructor(id: string, type: AllowedTypes, public value?: string | number | boolean) {
    super(id, type);
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  setValue(newValue: string | number | boolean) {
    if (getJavascriptType(newValue) !== this.type) throw new Error();
    this.value = newValue;
  }
}

export class ArrayInstance extends Instance {
  value;
  constructor(id: string, type: AllowedTypes, length: number) {
    super(id, type);
    if (type === "int") this.value = new Array<number>(length);
    else if (type === "bool") this.value = new Array<boolean>(length);
    else if (type === "string") this.value = new Array<string>(length);
    else throw new Error();
  }
  getValue(index?: number) {
    if (index) {
      if (index < 0 || index > this.value.length - 1) throw new Error();
      return this.value[index];
    } else return this.value;
  }
  setValue(newValue: string | number | boolean, index: number) {
    if (getJavascriptType(newValue) !== this.type) return new Error();
    if (index < 0 || index > this.value.length - 1) throw new Error();
    this.value[index] = newValue;
  }
}

// ========================= base nodes

// class ExecuteResult {
//   parent: AstNode;
//   returnType: AllowedTypes;
//   returnValue: number | boolean | string;
//   constructor(parent:AstNode, returnType: AllowedTypes, returnValue?: number | boolean | string) {
//     this.parent = parent;
//     this.returnType = returnType;
//     this.returnValue = returnValue;
//   }
// }

export class AstCNode {
  pos: DocPosition;
  constructor(ctx?: ParserRuleContext) {
    if (ctx) {
      this.pos = {
        startLine: ctx.start.line,
        startCol: ctx.start.charPositionInLine,
        endLine: ctx.stop.line,
        endCol: ctx.stop.charPositionInLine,
      };
    } else {
      this.pos = getEmptyDocPosition();
    }
  }
  indent(n: number, s: string, nl: boolean = false) {
    return s
      .split("\n")
      .filter((line) => line !== "")
      .map((line) => " ".repeat(n) + line)
      .join("\n");
  }
  toString(indent: number = 0) {
    return this.indent(indent, "AstNode(unimpl)");
  }
  toCode() {
    return "toCode unimplemented";
  }
  isNull() {
    return false;
  }
  execute(): number | boolean | string {
    return "unimplemented";
  }
}

export class AstNull extends AstCNode {
  toString(indent = 0) {
    return this.indent(indent, "AstNull()");
  }
  isNull() {
    return true;
  }
  execute() {
    return "null";
  }
}

export class AstError extends AstCNode {
  errorMsg: string;
  constructor(ctx: ParserRuleContext, msg: string) {
    super(ctx);
    this.errorMsg = msg;
    errorNodes.push(this);
  }
  toString(indent = 0) {
    return this.indent(indent, `Error(${this.errorMsg})`);
  }
  toCode() {
    return "error";
  }
  execute() {
    // debug("AstError...")
    return "error";
  }
  returnType() {
    return "error";
  }
}

export class AstRepl extends AstCNode {
  functions: AstFunctionDeclaration[];
  constructor(ctx: ParserRuleContext, functions: AstFunctionDeclaration[]) {
    super(ctx);
    this.functions = functions;
  }
  toString() {
    return (
      this.functions.map((funct) => funct.toString()).join("\n") +
      "\n" +
      this.getMainFunction().body.toString()
    );
  }
  toCode() {
    return "repl.toCode unimplemented";
  }
  getMainFunction() {
    return this.functions[this.functions.length - 1];
  }
  execute() {
    // debug("AstRepl...")
    globalAstScopeStack.reset();
    const res = this.getMainFunction().body.execute();
    // debug("AstRepl result:", res);
    return res;
  }
}

// =================== statement nodes

export class AstBlock extends AstCNode {
  body: AstStatement[];
  returnExpression: AstExpression;
  constructor(ctx: ParserRuleContext, body: AstStatement[], returnExpression?: AstExpression) {
    super(ctx);
    this.body = body;
    this.returnExpression = returnExpression;
  }
  toString(indent: number = 0) {
    return this.indent(
      indent,
      `Block(
${this.body.map((node) => node.toString(2)).join("\n")}
${this.returnExpression ? "  return " + this.returnExpression.toString() : ""}
)`
    );
  }
  toCode() {
    return "block.toCode unimplemented";
  }
  execute() {
    // debug("AstBlock...")
    globalAstScopeStack.enterScope("block");
    for (let i = 0; i < this.body.length; i++) {
      let res = this.body[i].execute();
      if (res === "return") return "return";
    }
    const res = this.returnExpression ? this.returnExpression.execute() : "void";
    globalAstScopeStack.disposeScope();
    // debug("AstBlock result:", res)
    return res;
  }
}

export class AstStatement extends AstCNode {}

export class AstAssignment extends AstStatement {
  lhsVariable: AstVariableExpression;
  rhsExpression: AstExpression;
  constructor(
    ctx: ParserRuleContext,
    lhsVariable: AstVariableExpression,
    rhsExpression: AstExpression
  ) {
    super(ctx);
    this.lhsVariable = lhsVariable;
    this.rhsExpression = rhsExpression;
  }
  toString(indent: number) {
    return this.indent(
      indent,
      `Assignment(${this.lhsVariable.toString()} = ${this.rhsExpression.toString()})`
    );
  }
  toCode() {
    return `${this.lhsVariable.toCode()} = ${this.rhsExpression.toCode()}`;
  }
  execute() {
    // debug("AstAssignment...")
    this.lhsVariable.setValue(this.rhsExpression.execute());
    return "void";
  }
}

export class AstFunctionCall extends AstStatement {
  funDecl: AstFunctionDeclaration;
  params: AstExpression[];
  constructor(ctx: ParserRuleContext, funDecl: AstFunctionDeclaration, params: AstExpression[]) {
    super(ctx);
    this.funDecl = funDecl;
    this.params = params;
  }
  toString(indent = 0) {
    return this.indent(
      indent,
      `Call(${this.funDecl.id}, ${this.params.map((param) => param.toString()).join(",")})`
    );
  }
  toCode() {
    return `${this.funDecl.id}(${this.params.map((param) => param.toCode()).join(",")})`;
  }
  returnType() {
    return this.funDecl.signature.returnType;
  }
  execute() {
    // debug(`AstFunctionCall(${this.funDecl.id})`)
    if (this.funDecl.id === "assert") {
      let res = this.params[0].execute();
      console.log(`assert(${this.params[0].toString()}) is ${res}`);
      // debug("AstFunctionCall result: ", res)
      return res;
    } else if (this.funDecl.id === "printf") {
      console.log("stdout: ", this.params[0].execute());
      return "void";
    } else if (this.funDecl.id === "print") {
      console.log("stdout: ", this.params[0].execute(), this.params[1].execute());
      return "void";
    } else {
      if (this.params.length !== this.funDecl.params.length)
        throw new Error("functional call parameter mismatch");
      globalAstScopeStack.enterScope(this.funDecl.id);

      this.funDecl.params.forEach((funDeclParam, i) => {
        const paramValue = this.params[i].execute(); // calculate now incase references current value
        funDeclParam.execute(); // push an instance onto the scope stack
        funDeclParam.getInstance().setValue(paramValue);
      });

      let res = this.funDecl.execute();
      globalAstScopeStack.disposeScope();
      // debug("--Result: ", res);
      return res === "return" ? globalReturnResult : res;
    }
  }
  // codegen() {
  //   const calleeF = module.getFunction(this.funDecl.id);
  //   if (!calleeF) throw new Error();

  //   if (calleeF.arg_size() !== this.funDecl.params.length) throw new Error();

  //   const args = this.funDecl.params.map(p => p.codegen());
  //   return builder.CreateCall(calleeF, args, "calltmp");
  // }
}

export class AstIf extends AstStatement {
  ifExpression: AstExpression;
  thenBlock: AstStatement;
  elseBlock: AstStatement;
  constructor(
    ctx: ParserRuleContext,
    ifExpression: AstExpression,
    thenBlock: AstStatement,
    elseBlock?: AstStatement
  ) {
    super(ctx);
    this.ifExpression = ifExpression;
    this.thenBlock = thenBlock;
    this.elseBlock = elseBlock;
  }
  toString(indent = 0, isElse = false) {
    return this.indent(
      indent,
      `if ${this.ifExpression.toString()} {
${this.thenBlock.toString(2)}
}`
    );
  }
  toCode(indent = 0, isElse = false) {
    return `if (${this.ifExpression.toCode()})`;
  }
  execute() {
    const test = this.ifExpression.execute();
    return test ? this.thenBlock.execute() : this.elseBlock ? this.elseBlock.execute() : "void";
  }
}

export class AstCase extends AstCNode {
  caseConstant: AstConstExpression;
  statements: AstBlock;
  hasBreak: boolean;
  constructor(
    ctx: ParserRuleContext,
    caseConstant: AstConstExpression,
    statements: AstBlock,
    hasBreak: boolean
  ) {
    super(ctx);
    this.caseConstant = caseConstant;
    this.statements = statements;
    this.hasBreak = hasBreak;
  }
  toString(indent = 0) {
    return this.indent(
      indent,
      `case ${this.caseConstant.toString()} : ${this.statements.toString()}`
    );
  }
  toCode() {
    return "";
  }
  execute() {
    this.statements.execute();
    return "void";
  }
}

export class AstSwitch extends AstStatement {
  switchExpression: AstExpression;
  cases: AstCase[];
  defaultStatements: AstBlock;
  constructor(
    ctx: ParserRuleContext,
    switchExpression: AstExpression,
    cases: AstCase[],
    defaultStatements?: AstBlock
  ) {
    super(ctx);
    this.switchExpression = switchExpression;
    this.cases = cases;
    this.defaultStatements = defaultStatements;
  }
  toString(indent = 0) {
    return this.indent(
      indent,
      `switch (${this.switchExpression.toString()}) {
${this.cases.map((c) => c.toString(2) + "\n").join("\n")}
  default: ${this.defaultStatements ? this.defaultStatements.toString() : "none"}
}
`
    );
  }
  toCode() {
    return `switch (${this.switchExpression.toCode()})`;
  }
  execute() {
    const lhs = this.switchExpression.execute();
    let didBreak = false;
    for (let i = 0; i < this.cases.length; i++) {
      if (this.cases[i].caseConstant.execute() === lhs) {
        this.cases[i].execute();
        if (this.cases[i].hasBreak) {
          didBreak = true;
          break;
        }
      }
    }
    if (!didBreak && this.defaultStatements) this.defaultStatements.execute();
    return "void";
  }
}

export class AstFor extends AstStatement {
  initialAssignment: AstStatement;
  testExpression: AstExpression;
  updateAssignement: AstStatement;
  block;
  constructor(
    ctx: ParserRuleContext,
    initialAssignment: AstStatement,
    testExpression: AstExpression,
    updateAssignement: AstStatement,
    block: AstStatement
  ) {
    super(ctx);
    this.initialAssignment = initialAssignment;
    this.testExpression = testExpression;
    this.updateAssignement = updateAssignement;
    this.block = block;
  }
  toString(indent = 0) {
    return this.indent(
      indent,
      `for (${this.initialAssignment.toString()} ; ${this.testExpression.toString()} ; ${this.updateAssignement.toString()} )
${this.block.toString(2)}`
    );
  }
  toCode() {
    return `for (${this.initialAssignment.toCode()} ; ${this.testExpression.toCode()} ; ${this.updateAssignement.toCode()} )`;
  }
  execute() {
    this.initialAssignment.execute();
    while (this.testExpression.execute()) {
      this.block.execute();
      this.updateAssignement.execute();
    }
    return "void";
  }
}

export class AstWhile extends AstStatement {
  testExpression: AstExpression;
  block: AstStatement;
  constructor(ctx: ParserRuleContext, testExpression: AstExpression, block: AstStatement) {
    super(ctx);
    this.testExpression = testExpression;
    this.block = block;
  }
  toString(indent = 0) {
    return this.indent(
      indent,
      `while (${this.testExpression.toString()})
${this.block.toString(2)}`
    );
  }
  toCode() {
    return `while (${this.testExpression.toCode()}`;
  }
  execute() {
    while (this.testExpression.execute()) {
      this.block.execute();
    }
    return "void";
  }
}

export class AstReturn extends AstStatement {
  returnExpression;
  constructor(ctx: ParserRuleContext, returnExpression: AstExpression) {
    super(ctx);
    this.returnExpression = returnExpression;
  }
  toString(indent = 0) {
    return this.indent(indent, `return ${this.returnExpression.toString()}`);
  }
  toCode() {
    return `return ${this.returnExpression.toString()}`;
  }
  execute() {
    globalReturnResult = this.returnExpression.execute();
    return "return";
  }
}

export class AstPrintf extends AstStatement {
  format: string;
  args: AstExpression[];
  constructor(ctx: ParserRuleContext, format: string, args: AstExpression[]) {
    super(ctx);
    this.format = format;
    this.args = args;
  }
  toString(indent = 0) {
    return this.indent(
      indent,
      `printf("${this.format}", ${this.args.map((arg) => arg.toString()).join(",")}`
    );
  }
  toCode() {
    return `printf("${this.format}", ${this.args.map((arg) => arg.toString()).join(",")}`;
  }
  execute() {
    console.log(
      sprintf(
        this.format,
        this.args.map((arg) => arg.execute())
      )
    );
    return "void";
  }
}

// ====================== Expression nodes

export class AstExpression extends AstCNode {
  returnType() {
    return "unknown";
  }
}

export class AstErrorExpression extends AstCNode {
  msg: string;
  constructor(ctx: ParserRuleContext, msg: string) {
    super(ctx);
    this.msg = msg;
    errorNodes.push(this);
  }
  returnType() {
    return "error";
  }
}

export class AstUnaryExpression extends AstExpression {
  rhs: AstExpression;
  op: string;
  constructor(ctx: ParserRuleContext, op: string, rhs: AstExpression) {
    super(ctx);
    this.op = op;
    this.rhs = rhs;
  }
  toString(indent: number = 0) {
    return this.indent(indent, `Op(${this.op} ${this.rhs.toString()})`);
  }
  toCode() {
    return `${this.op}${this.rhs.toCode()}`;
  }
  returnType() {
    if (this.op === "-") return "int";
    if (this.op === "!") return "bool";
    return "unknown";
  }
  execute() {
    if (this.op === "-") {
      const rhsRes = Number(this.rhs.execute());
      return rhsRes * -1;
    }
    if (this.op === "!") {
      const rhsRes = Boolean(this.rhs.execute());
      return !rhsRes;
    }
    throw new Error();
  }
}

export class AstBinaryExpression extends AstExpression {
  lhs: AstExpression;
  rhs: AstExpression;
  op: string;
  constructor(ctx: ParserRuleContext, op: string, lhs: AstExpression, rhs: AstExpression) {
    super(ctx);
    this.op = op;
    this.lhs = lhs;
    this.rhs = rhs;
  }
  toString(indent: number = 0) {
    return this.indent(indent, `Op(${this.lhs.toString()} ${this.op} ${this.rhs.toString()})`);
  }
  toCode() {
    return `${this.lhs.toCode()} ${this.op} ${this.rhs.toCode()}`;
  }
  returnType() {
    if (["+", "-", "*", "/", "%", "^", "=="].includes(this.op)) return "int"; // TODO - should check type of LHS and RHS to see if int or float
    if (["<=", "<", ">=", ">", "==", "!=", "&&", "||"].includes(this.op)) return "bool";
    return "unknown";
  }
  execute() {
    const lhsRes = Number(this.lhs.execute());
    const rhsRes = Number(this.rhs.execute());
    switch (this.op) {
      case "^":
        return lhsRes ** rhsRes;
      case "+":
        return lhsRes + rhsRes;
      case "-":
        return lhsRes - rhsRes;
      case "*":
        return lhsRes * rhsRes;
      case "/":
        return lhsRes / rhsRes;
      case "%":
        return lhsRes % rhsRes;
      case "<":
        return lhsRes < rhsRes;
      case ">":
        return lhsRes > rhsRes;
      case "<=":
        return lhsRes <= rhsRes;
      case ">=":
        return lhsRes >= rhsRes;
      case "===":
        return lhsRes === rhsRes;
      case "!==":
        return lhsRes !== rhsRes;
      case "&&":
        return Boolean(lhsRes && rhsRes);
      case "||":
        return Boolean(lhsRes || rhsRes);
      default:
        throw new Error();
    }
  }
}

export class AstTernaryExpression extends AstExpression {
  ifE: AstExpression;
  thenE: AstExpression;
  elseE: AstExpression;
  constructor(
    ctx: ParserRuleContext,
    ifE: AstExpression,
    thenE: AstExpression,
    elseE: AstExpression
  ) {
    super(ctx);
    this.ifE = ifE;
    this.thenE = thenE;
    this.elseE = elseE;
  }
  toString(indent: number = 0) {
    return this.indent(
      indent,
      `?(${this.ifE.toString()} ? ${this.thenE.toString()} : ${this.elseE.toString()})`
    );
  }
  toCode() {
    return `?(${this.ifE.toCode()} ? ${this.thenE.toCode()} : ${this.elseE.toCode()})`;
  }
  returnType() {
    return this.thenE.returnType();
  }
  execute() {
    const test = this.ifE.execute();
    return test ? this.thenE.execute() : this.elseE.execute();
  }
}

export class AstConstExpression extends AstExpression {
  value: number | boolean | string | null;
  valueType: "int" | "bool" | "string" | "null";
  constructor(
    ctx: ParserRuleContext,
    value: number | boolean | string | null,
    valueType: "int" | "bool" | "string" | "null"
  ) {
    super(ctx);
    this.value = value;
    this.valueType = valueType;
  }
  toString() {
    return `Const(${this.value})`;
  }
  toCode() {
    return `${this.value}`;
  }
  returnType() {
    return this.valueType;
  }
  execute() {
    return this.value;
  }
}

export class AstListExpression extends AstExpression {
  expressions: AstExpression[];
  constructor(ctx: ParserRuleContext, expressions: AstExpression[]) {
    super(ctx);
    this.expressions = expressions;
  }
  returnType() {
    if (this.expressions.length) return this.expressions[0].returnType() + "[]";
    else return "unknown[]";
  }
}

export class AstVariableExpression extends AstExpression {
  declaration: AstIdentifierDeclaration;
  indexExpressions: AstExpression[];
  constructor(
    ctx: ParserRuleContext,
    declaration: AstIdentifierDeclaration,
    indexExpressions?: AstExpression[]
  ) {
    super(ctx);
    this.declaration = declaration;
    if (indexExpressions && !(declaration instanceof AstArrayDeclaration))
      throw new Error("indexing variable that is not an array");
    this.indexExpressions = indexExpressions;
  }
  getIndexString() {
    return this.indexExpressions ? "[" + this.getIndexValues().join(",") + "]" : "";
  }
  toString(indent = 0) {
    return this.indent(indent, `Variable(${this.declaration.id + this.getIndexString()})`);
  }
  toCode() {
    return this.declaration.id;
  }
  returnType() {
    if (this.indexExpressions)
      return this.declaration.signature.returnType.substring(
        0,
        this.declaration.signature.returnType.length - 2
      );
    else return this.declaration.signature.returnType;
  }
  getIndexValues() {
    if (this.indexExpressions) {
      const arrayIndexes = this.indexExpressions.map((x, i) => {
        const xn = Number(x.execute());
        if (xn < 0 || xn >= this.declaration.signature.dimensions[i])
          throw new Error("array index out of bounds");
        return xn;
      });
      return arrayIndexes;
    } else return [];
  }
  setValue(newValue: string | number | boolean) {
    if (this.indexExpressions) {
      this.declaration.getInstance().setValue(newValue, this.getIndexValues()[0]);
    } else this.declaration.getInstance().setValue(newValue);
  }
  execute() {
    if (this.indexExpressions)
      return this.declaration.getInstance().getValue(this.getIndexValues()[0]);
    else return this.declaration.getInstance().getValue();
  }
}

export class AstBracketExpression extends AstExpression {
  expr: AstExpression;
  constructor(ctx: ParserRuleContext, expr: AstExpression) {
    super(ctx);
    this.expr = expr;
  }
  toString(indent = 0) {
    return this.indent(indent, `Bracket(${this.expr.toString()})`);
  }
  toCode() {
    return `(${this.expr.toCode()})`;
  }
  returnType() {
    return this.expr.returnType();
  }
}

// ============================== Named declarations (on stack)

export abstract class AstIdentifierDeclaration extends AstCNode {
  id: string;
  signature: Signature;
  constructor(ctx: ParserRuleContext, id: string) {
    super(ctx);
    this.id = id;
    this.signature = new Signature("void");
  }
  abstract getInstance(): Instance;
}

export class AstVariableDeclaration extends AstIdentifierDeclaration {
  initialExpression: AstExpression;
  signature: VariableSignature;
  constructor(
    ctx: ParserRuleContext,
    id: string,
    type: AllowedTypes,
    initialExpression?: AstExpression
  ) {
    super(ctx, id);
    this.signature = new VariableSignature(type);
    this.initialExpression = initialExpression;
  }
  toString(indent: number = 0) {
    return this.indent(indent, `VariableDeclaration(${this.signature.returnType}: ${this.id})`);
  }
  toCode() {
    const initstr = this.initialExpression ? ` = ${this.initialExpression.toCode()}` : "";
    return `${this.signature.returnType} ${this.id}${initstr}`;
  }
  getInstance() {
    const [found, x] = globalAstScopeStack.getSymbol(this.id);
    if (found) return x as VariableInstance;
    else throw new Error(`variable instance ${this.id} not in scope`);
  }
  execute() {
    // push an instance of this variable onto the stack
    globalAstScopeStack.newSymbol(
      this.id,
      new VariableInstance(this.id, this.signature.returnType, this.initialExpression?.execute())
    );
    return "void";
  }
}

export class AstArrayDeclaration extends AstIdentifierDeclaration {
  signature: ArraySignature;
  initialExpression: AstListExpression;
  constructor(
    ctx: ParserRuleContext,
    id: string,
    type: AllowedTypes,
    dimensions: number[],
    initialExpression?: AstListExpression
  ) {
    super(ctx, id);
    this.signature = new ArraySignature(type, dimensions);
    this.initialExpression = initialExpression;
  }
  toString(indent: number = 0) {
    return this.indent(
      indent,
      `ArrayDeclaration(${this.signature.returnType}[${this.signature.dimensions.join(":")}]: ${
        this.id
      })`
    );
  }
  getInstance() {
    const [found, x] = globalAstScopeStack.getSymbol(this.id);
    if (found) return x as ArrayInstance;
    else throw new Error(`Array instance ${this.id} not in scope`);
  }
  execute() {
    // push an instance of this variable onto the stack
    globalAstScopeStack.newSymbol(
      this.id,
      new ArrayInstance(this.id, this.signature.returnType, this.signature.dimensions[0])
    ); // TODO: implement multidimensional array
    return "void";
  }
}

export class AstFunctionDeclaration extends AstIdentifierDeclaration {
  params: AstVariableDeclaration[];
  body: AstBlock;
  signature: FunctionSignature;
  constructor(
    ctx: ParserRuleContext,
    returnType: AllowedTypes | "void",
    id: string,
    params: AstVariableDeclaration[],
    body?: AstBlock
  ) {
    super(ctx, id);
    this.params = params;
    this.body = body;
    this.signature = new FunctionSignature(
      returnType,
      params.map((param) => param.signature.returnType)
    );
  }
  toString(indent = 0) {
    if (!this.body) return ""; // stdlib
    return this.indent(
      indent,
      `Function(${this.id}, ${this.params.map((param) => param.toString()).join(",")})
${this.body ? this.body.toString(2) : "  StdLib"}
)`
    );
  }
  getInstance() {
    return new ErrorInstance();
  }
  execute() {
    if (this.body) return this.body.execute();
  }
}

// export class AstUndeclaredError extends AstIdentifierDeclaration {
//   getInstance() {
//     return new ErrorInstance();
//   }
//   toString(indent = 0) {
//     return this.indent(indent, `Symbol ${this.id} undeclared`);
//   }
// }
