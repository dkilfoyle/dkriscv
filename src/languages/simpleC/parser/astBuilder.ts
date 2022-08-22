import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ASMRootNode } from "../../riv32asm/parser/astNodes";
import {
  AssignmentContext,
  BinaryExpressionContext,
  BoolExpressionContext,
  BracketExpressionContext,
  CompoundStatementContext,
  ConstantValueContext,
  ExpressionContext,
  ForStatementContext,
  FunctionCallContext,
  FunctionDeclContext,
  IfStatementContext,
  ListExpressionContext,
  NullExpressionContext,
  NumberExpressionContext,
  ParamContext,
  PrintfStatementContext,
  ProgramContext,
  ReplContext,
  ReturnBlockContext,
  ReturnStatementContext,
  StatementContext,
  StatementsContext,
  StringExpressionContext,
  SwitchStatementContext,
  TernaryExpressionContext,
  UnaryExpressionContext,
  VariableDeclarationContext,
  VariableExpressionContext,
  WhileStatementContext,
} from "./antlr/SimpleCParser";
import { SimpleCVisitor } from "./antlr/SimpleCVisitor";
import {
  AstArrayDeclaration,
  AstAssignment,
  AstBinaryExpression,
  AstBlock,
  AstCase,
  AstConstExpression,
  AstError,
  AstErrorExpression,
  AstExpression,
  AstFunctionCall,
  AstFunctionDeclaration,
  AstIdentifierDeclaration,
  AstIf,
  AstCNode,
  AstNull,
  AstPrintf,
  AstRepl,
  AstReturn,
  AstStatement,
  AstSwitch,
  AstTernaryExpression,
  AstUnaryExpression,
  AstVariableDeclaration,
  AstVariableExpression,
  AstWhile,
  AstListExpression,
} from "./astNodes";
import { ScopeStack } from "./scopeStack";
import { AllowedTypes, SimpleCType } from "./signature";

export interface AstBuildResult {
  root: AstCNode | ASMRootNode;
  errors: AstError[];
}

export class SimpleCAstBuilder
  extends AbstractParseTreeVisitor<AstCNode>
  implements SimpleCVisitor<AstCNode>
{
  scopeStack: ScopeStack<AstIdentifierDeclaration, void>;
  anonMax: number = 0;
  errors: AstError[];

  constructor() {
    super();
    this.scopeStack = new ScopeStack();
    this.errors = [];
  }

  reset() {
    this.errors = [];
  }

  addError(error: AstError) {
    this.errors.push(error);
    return error;
  }

  createStdLibFunction(ctx: ParserRuleContext, id: string, params: AstVariableDeclaration[]) {
    const funcDecl = new AstFunctionDeclaration(ctx, new SimpleCType("void"), id, params);
    this.scopeStack.setSymbol(id, funcDecl);
    return funcDecl;
  }

  createMainFunction(ctx: ParserRuleContext, body: AstBlock) {
    if (!(body.body[body.body.length - 1] instanceof AstReturn))
      body.body.push(new AstReturn(ctx, new AstConstExpression(ctx, 0, "int")));
    const main = new AstFunctionDeclaration(ctx, new SimpleCType("int"), "main", [], body);
    this.scopeStack.setSymbol("main", main);
    return main;
  }

  getAnonName() {
    return "anon" + this.anonMax++;
  }

  defaultResult() {
    return new AstNull();
  }

  aggregateResult(aggregate: AstCNode, nextResult: AstCNode) {
    return nextResult;
  }

  visitTree(tree: ParseTree): AstBuildResult {
    return {
      root: tree.accept(this),
      errors: this.errors,
    };
  }

  visitProgram(ctx: ProgramContext) {
    return this.visit(ctx.repl());
  }

  visitRepl(ctx: ReplContext) {
    const functions = [
      this.createStdLibFunction(ctx, "assert", [new AstVariableDeclaration(ctx, "test", "bool")]),
      this.createStdLibFunction(ctx, "print", [
        new AstVariableDeclaration(ctx, "msg", "string"),
        new AstVariableDeclaration(ctx, "val", "int"),
      ]),
      this.createStdLibFunction(ctx, "printf", [
        new AstVariableDeclaration(ctx, "format", "string"),
      ]), //, new AstVariableDeclaration(ctx, "val", "int")]),
      this.createStdLibFunction(ctx, "print_int", [
        new AstVariableDeclaration(ctx, "value", "int"),
      ]), //, new AstVariableDeclaration(ctx, "val", "int")]),
      this.createStdLibFunction(ctx, "print_string", [
        new AstVariableDeclaration(ctx, "value", "string"),
      ]), //, new AstVariableDeclaration(ctx, "val", "int")]),
      ...ctx.functionDecl().map((decl) => this.visitFunctionDecl(decl)),
    ];

    if (ctx.statements().childCount)
      functions.push(
        this.createMainFunction(ctx.statements(), this.visitStatements(ctx.statements()))
      );

    return new AstRepl(ctx, functions);
  }

  visitReturnBlock(ctx: ReturnBlockContext, name = "unnamedblock") {
    this.scopeStack.enterScope(name);
    const body = ctx.statement().map((statement) => this.visit(statement));
    const returnVal = ctx.expression() ? this.visitExpression(ctx.expression()) : undefined;
    this.scopeStack.disposeScope();
    return new AstBlock(ctx, body, returnVal);
  }

  visitStatements(ctx: StatementsContext) {
    const body = ctx.statement().map((statement) => this.visitStatement(statement));
    return new AstBlock(ctx, body);
  }

  visitCompoundStatement(ctx: CompoundStatementContext, name = "unnamedblock") {
    this.scopeStack.enterScope(name);
    const body = this.visitStatements(ctx.statements());
    this.scopeStack.disposeScope();
    return body;
  }

  // Expressions

  visitExpression(ctx: ExpressionContext) {
    return ctx.accept(this) as AstExpression;
  }

  visitConstantValue(ctx: ConstantValueContext) {
    return ctx.accept(this) as AstConstExpression;
  }

  visitUnaryExpression(ctx: UnaryExpressionContext) {
    const rhs = this.visitExpression(ctx.expression());
    const op = ctx._op.text;
    return new AstUnaryExpression(ctx, op, rhs);
  }

  visitBinaryExpression(ctx: BinaryExpressionContext) {
    const lhs = this.visitExpression(ctx.expression(0) as ExpressionContext);
    const rhs = this.visitExpression(ctx.expression(1) as ExpressionContext);
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }

  visitTernaryExpression(ctx: TernaryExpressionContext) {
    const ifE = this.visitExpression(ctx.expression(0) as ExpressionContext);
    const thenE = this.visitExpression(ctx.expression(1) as ExpressionContext);
    const elseE = this.visitExpression(ctx.expression(2) as ExpressionContext);
    return new AstTernaryExpression(ctx, ifE, thenE, elseE);
  }

  visitVariableExpression(ctx: VariableExpressionContext) {
    const id = ctx.Identifier().text;
    const [found, idNode] = this.scopeStack.getSymbol(id);
    if (!found) return this.addError(new AstError(ctx, `Variable ${id} is undeclared`));
    const indexes = ctx.indexes()
      ? ctx
          .indexes()
          .expression()
          .map((e) => this.visitExpression(e))
      : undefined;
    return new AstVariableExpression(ctx, idNode as AstVariableDeclaration, indexes);
  }

  visitListExpression(ctx: ListExpressionContext) {
    return new AstListExpression(
      ctx,
      ctx
        .list()
        .exprList()
        .expression()
        .map((e) => this.visitExpression(e))
    );
  }

  visitBracketExpression(ctx: BracketExpressionContext) {
    return this.visitExpression(ctx.expression());
  }

  visitNumberExpression(ctx: NumberExpressionContext) {
    const ret = ctx.Number().text;
    return new AstConstExpression(ctx, parseInt(ret), "int");
  }

  visitBoolExpression(ctx: BoolExpressionContext) {
    const b = ctx.Bool().text;
    return new AstConstExpression(ctx, b === "true", "bool");
  }

  visitStringExpression(ctx: StringExpressionContext) {
    const s = ctx.String().text;
    return new AstConstExpression(ctx, s.slice(1, s.length - 1), "string");
  }

  visitNullExpression(ctx: NullExpressionContext) {
    return new AstConstExpression(ctx, null, "int");
  }

  // statements

  visitStatement(ctx: StatementContext) {
    return this.visit(ctx.getChild(0)) as AstStatement;
  }

  visitReturnStatement(ctx: ReturnStatementContext) {
    return new AstReturn(
      ctx,
      ctx.expression() ? this.visitExpression(ctx.expression()) : undefined
    );
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext) {
    const varType = ctx.varType().text;
    const body: AstStatement[] = [];
    ctx
      .initDeclaratorList()
      .initDeclarator()
      .forEach((idctx) => {
        const id = idctx.Identifier().text;
        const node = idctx.dimensions().length
          ? new AstArrayDeclaration(
              idctx,
              id,
              varType as AllowedTypes,
              idctx
                .dimensions()
                .map((dimCtx) => (dimCtx.Number() ? Number(dimCtx.Number().text) : -1)),
              idctx.expression()
                ? this.visitListExpression(idctx.expression() as ListExpressionContext)
                : undefined
            )
          : new AstVariableDeclaration(
              idctx,
              id,
              varType as AllowedTypes,
              idctx.expression() ? this.visitExpression(idctx.expression()) : undefined
            );
        this.scopeStack.setSymbol(id, node);
        body.push(node);
      });

    return body.length === 1 ? body[0] : new AstBlock(ctx, body);
  }

  visitAssignment(ctx: AssignmentContext) {
    const lhs = this.visitVariableExpression(ctx);
    if (!(lhs instanceof AstVariableExpression))
      return this.addError(new AstError(ctx, `lhs of assignment is not a variable`));
    const rhs = this.visitExpression(ctx.expression());
    return new AstAssignment(ctx, lhs, rhs);
  }

  visitFunctionCall(ctx: FunctionCallContext) {
    const id = ctx.Identifier().text;
    let [found, decl] = this.scopeStack.getSymbol(id);
    if (!found) return this.addError(new AstError(ctx, `function ${id} does not exist`));

    const funDecl = decl as AstFunctionDeclaration;

    const params = ctx.exprList()
      ? ctx
          .exprList()
          .expression()
          .map((expr) => this.visit(expr) as AstExpression)
      : [];

    if (params.length !== funDecl.signature.paramTypes.length)
      return this.addError(new AstError(ctx, `function ${id} incorrect number of params`));

    params.forEach((param, i) => {
      if (param.returnType.toString() !== funDecl.signature.paramTypes[i].toString()) {
        debugger;
        return this.addError(
          new AstError(
            ctx,
            `Parameter type mismatch: ${param.returnType.toString()} != ${funDecl.signature.paramTypes[
              i
            ].toString()}`
          )
        );
      }
    });

    return new AstFunctionCall(ctx, funDecl, params);
  }

  visitIfStatement(ctx: IfStatementContext) {
    return new AstIf(
      ctx,
      this.visitExpression(ctx.expression()),
      this.visitStatement(ctx.statement()),
      ctx.elseStat() ? this.visitStatement(ctx.elseStat().statement()) : undefined
    );
  }

  visitSwitchStatement(ctx: SwitchStatementContext) {
    return new AstSwitch(
      ctx,
      this.visitExpression(ctx.expression()),
      ctx
        .caseStatement()
        .map(
          (cs) =>
            new AstCase(
              cs,
              this.visitConstantValue(cs.constantValue()),
              this.visitStatements(cs.statements()),
              cs.breakStatement() ? true : false
            )
        ),
      ctx.defaultCase() ? this.visitStatements(ctx.defaultCase().statements()) : undefined
    );
  }

  visitForStatement(ctx: ForStatementContext) {
    this.scopeStack.enterScope("for");
    let initialStatement = ctx.forInitial().variableDeclaration()
      ? this.visitVariableDeclaration(ctx.forInitial().variableDeclaration())
      : this.visitAssignment(ctx.forInitial().assignment());
    const testExpression = this.visitExpression(ctx.expression());
    const updateAssignment = this.visitAssignment(ctx.assignment());
    const block = this.visitStatement(ctx.statement());
    this.scopeStack.disposeScope();

    return new AstBlock(ctx, [
      initialStatement,
      new AstWhile(
        ctx,
        testExpression.returnType.toString() === "bool"
          ? testExpression
          : new AstErrorExpression(ctx.expression(), "for test expression must return bool"),
        new AstBlock(ctx, [block, updateAssignment])
      ),
    ]);

    // return new AstFor(ctx,
    //   initialStatement,
    //   testExpression.returnType() == 'bool' ? testExpression : new AstErrorExpression(ctx.expression(), "for test expression must return bool"),
    //   updateAssignment,
    //   block
    // );
  }

  visitWhileStatement(ctx: WhileStatementContext) {
    const testExpression = this.visitExpression(ctx.expression());
    const block = this.visitStatement(ctx.statement());
    return new AstWhile(
      ctx,
      testExpression.returnType.toString() === "bool"
        ? testExpression
        : new AstErrorExpression(ctx.expression(), "for test expression must return bool"),
      block
    );
  }

  visitPrintfStatement(ctx: PrintfStatementContext) {
    const format = ctx.String().text;
    return new AstPrintf(
      ctx,
      format.substring(1, format.length - 1),
      ctx.expression().map((e) => this.visitExpression(e))
    );
  }

  // Functions

  visitParam(ctx: ParamContext) {
    const paramType = ctx.varType().text;
    const id = ctx.Identifier().text;
    return new AstVariableDeclaration(ctx, id, paramType as AllowedTypes);
  }

  visitFunctionDecl(ctx: FunctionDeclContext) {
    const funType = ctx.funType().text as AllowedTypes;
    const id = ctx.Identifier().text;
    this.scopeStack.enterScope(`fun(${id})`);

    let params;
    if (ctx.paramList()) {
      params = ctx
        .paramList()
        .param()
        .map((param) => this.visitParam(param));
      params.forEach((param) => this.scopeStack.setSymbol(param.id, param));
    } else params = [];

    // push declaration onto the scope stack to allow for recursive calling within the body
    const funcDecl = new AstFunctionDeclaration(ctx, new SimpleCType(funType), id, params);
    this.scopeStack.setSymbol(id, funcDecl);

    const body = this.visitReturnBlock(ctx.returnBlock(), `fun(${id})body`);
    funcDecl.body = body;

    this.scopeStack.disposeScope(); // dispose param scope
    this.scopeStack.setSymbol(id, funcDecl); // add to the top level stack so can be found by external callers as well

    return funcDecl;
  }
}
