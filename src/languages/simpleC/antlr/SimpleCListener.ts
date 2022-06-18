// Generated from c:\code\dkriscv\src\languages\simpleC\SimpleC.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { UnaryExpressionContext } from "./SimpleCParser";
import { BinaryExpressionContext } from "./SimpleCParser";
import { TernaryExpressionContext } from "./SimpleCParser";
import { ConstantExpressionContext } from "./SimpleCParser";
import { FunctionCallExpressionContext } from "./SimpleCParser";
import { VariableExpressionContext } from "./SimpleCParser";
import { BracketExpressionContext } from "./SimpleCParser";
import { NumberExpressionContext } from "./SimpleCParser";
import { BoolExpressionContext } from "./SimpleCParser";
import { NullExpressionContext } from "./SimpleCParser";
import { StringExpressionContext } from "./SimpleCParser";
import { ProgramContext } from "./SimpleCParser";
import { ReplContext } from "./SimpleCParser";
import { FunTypeContext } from "./SimpleCParser";
import { FunctionDeclContext } from "./SimpleCParser";
import { ParamContext } from "./SimpleCParser";
import { ParamListContext } from "./SimpleCParser";
import { ReturnBlockContext } from "./SimpleCParser";
import { StatementContext } from "./SimpleCParser";
import { CompoundStatementContext } from "./SimpleCParser";
import { StatementsContext } from "./SimpleCParser";
import { ReturnStatementContext } from "./SimpleCParser";
import { VarTypeContext } from "./SimpleCParser";
import { VariableDeclarationContext } from "./SimpleCParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleCParser`.
 */
export interface SimpleCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `unaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBinaryExpression?: (ctx: BinaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBinaryExpression?: (ctx: BinaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `constantExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `constantExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `variableExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterVariableExpression?: (ctx: VariableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `variableExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitVariableExpression?: (ctx: VariableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bracketExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBracketExpression?: (ctx: BracketExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketExpression`
	 * labeled alternative in `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBracketExpression?: (ctx: BracketExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `boolExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	enterBoolExpression?: (ctx: BoolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `boolExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	exitBoolExpression?: (ctx: BoolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nullExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	enterNullExpression?: (ctx: NullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `nullExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	exitNullExpression?: (ctx: NullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `stringExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpression`
	 * labeled alternative in `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.repl`.
	 * @param ctx the parse tree
	 */
	enterRepl?: (ctx: ReplContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.repl`.
	 * @param ctx the parse tree
	 */
	exitRepl?: (ctx: ReplContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.funType`.
	 * @param ctx the parse tree
	 */
	enterFunType?: (ctx: FunTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.funType`.
	 * @param ctx the parse tree
	 */
	exitFunType?: (ctx: FunTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.returnBlock`.
	 * @param ctx the parse tree
	 */
	enterReturnBlock?: (ctx: ReturnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.returnBlock`.
	 * @param ctx the parse tree
	 */
	exitReturnBlock?: (ctx: ReturnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.varType`.
	 * @param ctx the parse tree
	 */
	enterVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.varType`.
	 * @param ctx the parse tree
	 */
	exitVarType?: (ctx: VarTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	enterInitDeclarator?: (ctx: InitDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	exitInitDeclarator?: (ctx: InitDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.dimensions`.
	 * @param ctx the parse tree
	 */
	enterDimensions?: (ctx: DimensionsContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.dimensions`.
	 * @param ctx the parse tree
	 */
	exitDimensions?: (ctx: DimensionsContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.elseStat`.
	 * @param ctx the parse tree
	 */
	enterElseStat?: (ctx: ElseStatContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.elseStat`.
	 * @param ctx the parse tree
	 */
	exitElseStat?: (ctx: ElseStatContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	enterCaseStatement?: (ctx: CaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	exitCaseStatement?: (ctx: CaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.defaultCase`.
	 * @param ctx the parse tree
	 */
	enterDefaultCase?: (ctx: DefaultCaseContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.defaultCase`.
	 * @param ctx the parse tree
	 */
	exitDefaultCase?: (ctx: DefaultCaseContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.forInitial`.
	 * @param ctx the parse tree
	 */
	enterForInitial?: (ctx: ForInitialContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.forInitial`.
	 * @param ctx the parse tree
	 */
	exitForInitial?: (ctx: ForInitialContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.printfStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintfStatement?: (ctx: PrintfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.printfStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintfStatement?: (ctx: PrintfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.idList`.
	 * @param ctx the parse tree
	 */
	enterIdList?: (ctx: IdListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.idList`.
	 * @param ctx the parse tree
	 */
	exitIdList?: (ctx: IdListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	enterConstantValue?: (ctx: ConstantValueContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.constantValue`.
	 * @param ctx the parse tree
	 */
	exitConstantValue?: (ctx: ConstantValueContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleCParser.indexes`.
	 * @param ctx the parse tree
	 */
	enterIndexes?: (ctx: IndexesContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleCParser.indexes`.
	 * @param ctx the parse tree
	 */
	exitIndexes?: (ctx: IndexesContext) => void;
}

