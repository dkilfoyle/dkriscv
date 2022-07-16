// Generated from c:\code\dkriscv\src\languages\riv32asm\parser\SimpleASM.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleASMParser`.
 */
export interface SimpleASMListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SimpleASMParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.global`.
	 * @param ctx the parse tree
	 */
	enterGlobal?: (ctx: GlobalContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.global`.
	 * @param ctx the parse tree
	 */
	exitGlobal?: (ctx: GlobalContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.align`.
	 * @param ctx the parse tree
	 */
	enterAlign?: (ctx: AlignContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.align`.
	 * @param ctx the parse tree
	 */
	exitAlign?: (ctx: AlignContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.data`.
	 * @param ctx the parse tree
	 */
	enterData?: (ctx: DataContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.data`.
	 * @param ctx the parse tree
	 */
	exitData?: (ctx: DataContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.pseudo`.
	 * @param ctx the parse tree
	 */
	enterPseudo?: (ctx: PseudoContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.pseudo`.
	 * @param ctx the parse tree
	 */
	exitPseudo?: (ctx: PseudoContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.environment`.
	 * @param ctx the parse tree
	 */
	enterEnvironment?: (ctx: EnvironmentContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.environment`.
	 * @param ctx the parse tree
	 */
	exitEnvironment?: (ctx: EnvironmentContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.rtype`.
	 * @param ctx the parse tree
	 */
	enterRtype?: (ctx: RtypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.rtype`.
	 * @param ctx the parse tree
	 */
	exitRtype?: (ctx: RtypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.itype`.
	 * @param ctx the parse tree
	 */
	enterItype?: (ctx: ItypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.itype`.
	 * @param ctx the parse tree
	 */
	exitItype?: (ctx: ItypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.stype`.
	 * @param ctx the parse tree
	 */
	enterStype?: (ctx: StypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.stype`.
	 * @param ctx the parse tree
	 */
	exitStype?: (ctx: StypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.btype`.
	 * @param ctx the parse tree
	 */
	enterBtype?: (ctx: BtypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.btype`.
	 * @param ctx the parse tree
	 */
	exitBtype?: (ctx: BtypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.jtype`.
	 * @param ctx the parse tree
	 */
	enterJtype?: (ctx: JtypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.jtype`.
	 * @param ctx the parse tree
	 */
	exitJtype?: (ctx: JtypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.utype`.
	 * @param ctx the parse tree
	 */
	enterUtype?: (ctx: UtypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.utype`.
	 * @param ctx the parse tree
	 */
	exitUtype?: (ctx: UtypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.offset`.
	 * @param ctx the parse tree
	 */
	enterOffset?: (ctx: OffsetContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.offset`.
	 * @param ctx the parse tree
	 */
	exitOffset?: (ctx: OffsetContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.register`.
	 * @param ctx the parse tree
	 */
	enterRegister?: (ctx: RegisterContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.register`.
	 * @param ctx the parse tree
	 */
	exitRegister?: (ctx: RegisterContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.immediate`.
	 * @param ctx the parse tree
	 */
	enterImmediate?: (ctx: ImmediateContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.immediate`.
	 * @param ctx the parse tree
	 */
	exitImmediate?: (ctx: ImmediateContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleASMParser.numlist`.
	 * @param ctx the parse tree
	 */
	enterNumlist?: (ctx: NumlistContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleASMParser.numlist`.
	 * @param ctx the parse tree
	 */
	exitNumlist?: (ctx: NumlistContext) => void;
}

