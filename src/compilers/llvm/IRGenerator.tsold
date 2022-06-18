import { ParserRuleContext } from "antlr4ts";
import llvm from "llvm-bindings";
import { threadId } from "worker_threads";
import { AstAssignment, AstBinaryExpression, AstBlock, AstConstExpression, AstExpression, AstFunctionCall, AstFunctionDeclaration, AstIf, AstNode, AstPrintf, AstRepl, AstReturn, AstStatement, AstVariableDeclaration, AstVariableExpression, AstWhile } from "../../languages/simpleC/nodes";
import { ScopeStack } from "../../languages/simpleC/scopeStack";

export class IRGenerator {
  context: llvm.LLVMContext;
  module: llvm.Module;
  builder: llvm.IRBuilder;
  scopes: ScopeStack<llvm.Value, llvm.BasicBlock>;
  currentFunction: llvm.Function;

  constructor() {
  }
  
  reset() {
    this.context = new llvm.LLVMContext();
    this.module = new llvm.Module('demo', this.context);
    this.builder = new llvm.IRBuilder(this.context);
  }

  codegen(root:AstNode) {
    if (!(root instanceof AstRepl)) throw new Error();
    this.reset();
    this.scopes = new ScopeStack<llvm.Value, llvm.BasicBlock>();
    this.visitRepl(root);
    if (llvm.verifyModule(this.module)) console.error("module verify fail");
    return this.module.print();
  }

  
  getLLVMType(type: string) {
    switch (type) {
      case "int" : return this.builder.getInt32Ty();
      case "void" : return this.builder.getVoidTy();
      case "bool" : return this.builder.getInt1Ty();
      case "string" : return this.builder.getInt8PtrTy();
      default: throw new Error("Unsupported type");
    }
  }

  createEntryBlockAlloca(type: llvm.Type, name: string) {
    const builder = new llvm.IRBuilder(this.currentFunction.getEntryBlock());
    const arraySize = undefined;
    return builder.CreateAlloca(type, null, name);
  }

  createBlock(parent:llvm.Function, name:string="entry") {
    const block = llvm.BasicBlock.Create(this.context, name, parent);
    this.builder.SetInsertPoint(block);
    this.scopes.enterScope("block", block);
    return block;
  }

  visitRepl(node: AstRepl) {
    this.scopes.reset();

    // create printf prototype
    const printfuntype = llvm.FunctionType.get(this.builder.getInt32Ty(), [this.builder.getInt8PtrTy()], true);
    const printfun = llvm.Function.Create(printfuntype, llvm.Function.LinkageTypes.ExternalLinkage, "printf", this.module);

    node.functions.forEach(funDecl => this.visitFunctionDeclaration(funDecl));
  }

  visitFunctionDeclaration(node: AstFunctionDeclaration) {
    if (!node.body) {
      // TODO: extern function
      return;
    }

    let funReturnType = this.getLLVMType(node.signature.returnType);
    const args = node.signature.paramTypes.map(p => this.getLLVMType(p));

    const funType = llvm.FunctionType.get(funReturnType, args, false);
    const fun = llvm.Function.Create(funType, llvm.Function.LinkageTypes.ExternalLinkage, node.id, this.module);
    this.currentFunction = fun;

    const block = this.createBlock(fun);
    const res = this.visitBlock(node.body);
    this.scopes.disposeScope();

    if (llvm.verifyFunction(fun)) console.error("verify function failed")
  }

  visitBlock(node: AstBlock) {
    let res;
    for (let i = 0; i < node.body.length; i++) {
      res = this.visitStatement(node.body[i]);
    }
    return res;
  }

  visitStatement(node: AstStatement) {
    if (node instanceof AstAssignment)
      return this.visitAssignment(node);
    else if (node instanceof AstVariableDeclaration)
      return this.visitVariableDeclaration(node)
    else if (node instanceof AstReturn)
      return this.visitReturn(node);
    else if (node instanceof AstFunctionCall)
      return this.visitFunctionCall(node);
    else if (node instanceof AstPrintf)
      return this.visitPrintf(node);
    else if (node instanceof AstIf)
      return this.visitIf(node);
    else if (node instanceof AstBlock)
      return this.visitBlock(node);
    else if (node instanceof AstWhile)
      return this.visitWhile(node);
    else throw new Error();
  }

  visitFunctionCall(node: AstFunctionCall) {
    // const params = node.params.map
    // if (node.funDecl.id == "printf") return this.printf("hello");
    console.error("IRthis.visitFunctionCall not implemented")
  }

  visitVariableDeclaration(node: AstVariableDeclaration) {
    // todo: Re SSA should be 
    const type = this.getLLVMType(node.signature.returnType);
    const alloc = this.createEntryBlockAlloca(type, node.id);
    this.scopes.newSymbol(node.id, alloc);
    if (node.initialExpression)
      this.visitAssignment(
        new AstAssignment(
          null,
          new AstVariableExpression(null, node),
          node.initialExpression
        )
      );
    return alloc;
  }

  visitAssignment(node: AstAssignment) {
    let [found, x] = this.scopes.getSymbol(node.lhsVariable.declaration.id);
    if (!found) throw new Error();
    const rhs = this.visitExpression(node.rhsExpression);
    return this.builder.CreateStore(rhs, x);
  }

  visitReturn(node: AstReturn) {
    return this.builder.CreateRet(this.visitExpression(node.returnExpression));
  }

  visitVariableExpression(node: AstVariableExpression) {
    let [found, x] = this.scopes.getSymbol(node.declaration.id);
    if (!found) throw new Error();
    return this.builder.CreateLoad(this.getLLVMType(node.returnType()), x);
  }

  visitPrintf(node: AstPrintf) {
    const vargs = node.args.map(arg => this.visitExpression(arg));
    this.builder.CreateCall(this.module.getFunction("printf"), [this.builder.CreateGlobalStringPtr(node.format.replace("\\n", "\x0a")), ...vargs], "printfcall")
  }

  visitIfBranch(node: AstStatement, destination: llvm.BasicBlock, continuation: llvm.BasicBlock) {
    this.builder.SetInsertPoint(destination);
    if (node) this.visitStatement(node);
    if (!this.builder.GetInsertBlock().getTerminator()) this.builder.CreateBr(continuation);
  }

  visitIf(node: AstIf) {
    const condition = this.visitExpression(node.ifExpression);
    const thenBlock = llvm.BasicBlock.Create(this.context, "then", this.currentFunction);
    const elseBlock = llvm.BasicBlock.Create(this.context, "else", this.currentFunction);
    const endBlock = llvm.BasicBlock.Create(this.context, "endif", this.currentFunction);
    this.builder.CreateCondBr(condition, thenBlock, elseBlock);
    this.visitIfBranch(node.thenBlock, thenBlock, endBlock);
    this.visitIfBranch(node.elseBlock, elseBlock, endBlock);
    this.builder.SetInsertPoint(endBlock);
  }

  visitWhile(node: AstWhile) {
    const condition = llvm.BasicBlock.Create(this.context, "while.cond", this.currentFunction);
    const body = llvm.BasicBlock.Create(this.context, "while.body");
    const end = llvm.BasicBlock.Create(this.context, "while.end");

    this.builder.CreateBr(condition);
    this.builder.SetInsertPoint(condition);
    const conditionValue = this.visitExpression(node.testExpression);
    this.builder.CreateCondBr(conditionValue, body, end);

    this.currentFunction.addBasicBlock(body);
    this.builder.SetInsertPoint(body);

    if (node.block instanceof AstBlock)
      this.visitBlock(node.block);
    else
      this.visitStatement(node.block);

    if (!this.builder.GetInsertBlock().getTerminator()) {
      this.builder.CreateBr(condition);
    }

    this.currentFunction.addBasicBlock(end);
    this.builder.SetInsertPoint(end);
  }

  // Expressions

  visitExpression(node: AstExpression) {
    if (node instanceof AstConstExpression)
      return this.visitConstExpression(node);
    else if (node instanceof AstBinaryExpression)
      return this.visitBinaryExpression(node);
    else if (node instanceof AstVariableExpression)
      return this.visitVariableExpression(node);
    else throw new Error();
  }

  visitConstExpression(node: AstConstExpression) {
    // return llvm.ConstantInt.get(this.context, node.value);
    if (node.returnType() == "int")
      return this.builder.getInt32(node.value);
    else if (node.returnType() == "string") {
      const str = node.value as string;
      const ptr = this.builder.CreateGlobalStringPtr(str+"\\00") as llvm.Constant;
      const length = llvm.ConstantInt.get(this.context, node.value.length);
    }
  }

  visitBinaryExpression(node: AstBinaryExpression) {
    switch (node.op) {
      case "+" : return this.builder.CreateAdd(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      case "-" : return this.builder.CreateSub(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      case "==": return this.builder.CreateICmpEQ(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      case "<" : return this.builder.CreateICmpSLT(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      case "<=": return this.builder.CreateICmpSLE(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      case ">" : return this.builder.CreateICmpSGT(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      case ">=": return this.builder.CreateICmpSGE(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      default: throw new Error();
    }
  }
}