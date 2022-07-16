// Generated from c:\code\dkriscv\src\languages\riv32asm\parser\SimpleASM.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./SimpleASMParser";
import { LinesContext } from "./SimpleASMParser";
import { LineContext } from "./SimpleASMParser";
import { DirectiveContext } from "./SimpleASMParser";
import { SectionContext } from "./SimpleASMParser";
import { GlobalContext } from "./SimpleASMParser";
import { AlignContext } from "./SimpleASMParser";
import { DataContext } from "./SimpleASMParser";
import { LabelContext } from "./SimpleASMParser";
import { InstructionContext } from "./SimpleASMParser";
import { PseudoContext } from "./SimpleASMParser";
import { EnvironmentContext } from "./SimpleASMParser";
import { RtypeContext } from "./SimpleASMParser";
import { ItypeContext } from "./SimpleASMParser";
import { StypeContext } from "./SimpleASMParser";
import { BtypeContext } from "./SimpleASMParser";
import { JtypeContext } from "./SimpleASMParser";
import { UtypeContext } from "./SimpleASMParser";
import { OffsetContext } from "./SimpleASMParser";
import { RegisterContext } from "./SimpleASMParser";
import { ImmediateContext } from "./SimpleASMParser";
import { NumlistContext } from "./SimpleASMParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleASMParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SimpleASMVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SimpleASMParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.lines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLines?: (ctx: LinesContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.global`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal?: (ctx: GlobalContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.align`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlign?: (ctx: AlignContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData?: (ctx: DataContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.pseudo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudo?: (ctx: PseudoContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.environment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnvironment?: (ctx: EnvironmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.rtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRtype?: (ctx: RtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.itype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItype?: (ctx: ItypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.stype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStype?: (ctx: StypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.btype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBtype?: (ctx: BtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.jtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJtype?: (ctx: JtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.utype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUtype?: (ctx: UtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset?: (ctx: OffsetContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.register`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister?: (ctx: RegisterContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.immediate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImmediate?: (ctx: ImmediateContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleASMParser.numlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumlist?: (ctx: NumlistContext) => Result;
}

