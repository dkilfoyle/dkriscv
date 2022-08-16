// Generated from c:\code\dkriscv\src\languages\simpleC\parser\SimpleC.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UnaryExpressionContext } from "./SimpleCParser";
import { BinaryExpressionContext } from "./SimpleCParser";
import { TernaryExpressionContext } from "./SimpleCParser";
import { ConstantExpressionContext } from "./SimpleCParser";
import { FunctionCallExpressionContext } from "./SimpleCParser";
import { ListExpressionContext } from "./SimpleCParser";
import { VariableExpressionContext } from "./SimpleCParser";
import { BracketExpressionContext } from "./SimpleCParser";
import { NumberExpressionContext } from "./SimpleCParser";
import { BoolExpressionContext } from "./SimpleCParser";
import { NullExpressionContext } from "./SimpleCParser";
import { StringExpressionContext } from "./SimpleCParser";
import { ProgramContext } from "./SimpleCParser";
import { ReplContext } from "./SimpleCParser";
import { FunTypeContext } from "./SimpleCParser";
import { ParamContext } from "./SimpleCParser";
import { ParamListContext } from "./SimpleCParser";
import { ReturnBlockContext } from "./SimpleCParser";
import { FunctionDeclContext } from "./SimpleCParser";
import { StatementContext } from "./SimpleCParser";
import { CompoundStatementContext } from "./SimpleCParser";
import { StatementsContext } from "./SimpleCParser";
import { ReturnStatementContext } from "./SimpleCParser";
import { VariableDeclarationContext } from "./SimpleCParser";
import { VarTypeContext } from "./SimpleCParser";
import { InitDeclaratorListContext } from "./SimpleCParser";
import { InitDeclaratorContext } from "./SimpleCParser";
import { DimensionsContext } from "./SimpleCParser";
import { AssignmentContext } from "./SimpleCParser";
import { FunctionCallContext } from "./SimpleCParser";
import { IfStatementContext } from "./SimpleCParser";
import { ElseStatContext } from "./SimpleCParser";
import { SwitchStatementContext } from "./SimpleCParser";
import { CaseStatementContext } from "./SimpleCParser";
import { DefaultCaseContext } from "./SimpleCParser";
import { BreakStatementContext } from "./SimpleCParser";
import { ForStatementContext } from "./SimpleCParser";
import { ForInitialContext } from "./SimpleCParser";
import { WhileStatementContext } from "./SimpleCParser";
import { PrintfStatementContext } from "./SimpleCParser";
import { IdListContext } from "./SimpleCParser";
import { ExprListContext } from "./SimpleCParser";
import { ExpressionContext } from "./SimpleCParser";
import { ConstantValueContext } from "./SimpleCParser";
import { ListContext } from "./SimpleCParser";
import { IndexesContext } from "./SimpleCParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SimpleCVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryExpression?: (ctx: BinaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpression?: (ctx: ListExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableExpression?: (ctx: VariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bracketExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketExpression?: (ctx: BracketExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpression?: (ctx: BoolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullExpression?: (ctx: NullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.repl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepl?: (ctx: ReplContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.funType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunType?: (ctx: FunTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.returnBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnBlock?: (ctx: ReturnBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.varType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarType?: (ctx: VarTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.initDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.dimensions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimensions?: (ctx: DimensionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.elseStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStat?: (ctx: ElseStatContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.caseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatement?: (ctx: CaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.defaultCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultCase?: (ctx: DefaultCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.forInitial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInitial?: (ctx: ForInitialContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.printfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintfStatement?: (ctx: PrintfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.idList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdList?: (ctx: IdListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.exprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprList?: (ctx: ExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantValue?: (ctx: ConstantValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleCParser.indexes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexes?: (ctx: IndexesContext) => Result;
}

