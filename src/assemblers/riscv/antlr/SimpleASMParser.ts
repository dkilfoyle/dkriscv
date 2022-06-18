// Generated from c:\code\dkriscv\src\assemblers\riscv\SimpleASM.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SimpleASMListener } from "./SimpleASMListener";
import { SimpleASMVisitor } from "./SimpleASMVisitor";


export class SimpleASMParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly REG = 80;
	public static readonly INT = 81;
	public static readonly HEX = 82;
	public static readonly BIN = 83;
	public static readonly ID = 84;
	public static readonly String = 85;
	public static readonly Comment = 86;
	public static readonly Space = 87;
	public static readonly RULE_program = 0;
	public static readonly RULE_lines = 1;
	public static readonly RULE_line = 2;
	public static readonly RULE_directive = 3;
	public static readonly RULE_section = 4;
	public static readonly RULE_global = 5;
	public static readonly RULE_align = 6;
	public static readonly RULE_data = 7;
	public static readonly RULE_label = 8;
	public static readonly RULE_instruction = 9;
	public static readonly RULE_pseudo = 10;
	public static readonly RULE_environment = 11;
	public static readonly RULE_rtype = 12;
	public static readonly RULE_itype = 13;
	public static readonly RULE_stype = 14;
	public static readonly RULE_btype = 15;
	public static readonly RULE_jtype = 16;
	public static readonly RULE_utype = 17;
	public static readonly RULE_offset = 18;
	public static readonly RULE_register = 19;
	public static readonly RULE_immediate = 20;
	public static readonly RULE_numlist = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "lines", "line", "directive", "section", "global", "align", 
		"data", "label", "instruction", "pseudo", "environment", "rtype", "itype", 
		"stype", "btype", "jtype", "utype", "offset", "register", "immediate", 
		"numlist",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'section'", "'.text'", "'.data'", "'.rodata'", "'.bss'", "'.global'", 
		"'.globl'", "'.align'", "':'", "'.string'", "'.ascii'", "'.asciiz'", "'.byte'", 
		"'.word'", "'la'", "','", "'li'", "'mv'", "'not'", "'seqz'", "'sltz'", 
		"'sgtz'", "'beqz'", "'bnez'", "'blez'", "'bgez'", "'bltz'", "'bgtz'", 
		"'bgt'", "'ble'", "'bgtu'", "'bltu'", "'j'", "'jal'", "'jr'", "'jalr'", 
		"'ret'", "'call'", "'ecall'", "'add'", "'sub'", "'xor'", "'or'", "'and'", 
		"'sll'", "'srl'", "'sra'", "'slt'", "'su'", "'addi'", "'xori'", "'andi'", 
		"'ori'", "'slli'", "'srli'", "'srai'", "'slti'", "'sltiu'", "'lb'", "'lh'", 
		"'lw'", "'('", "')'", "'sb'", "'sh'", "'sw'", "'beq'", "'bne'", "'blt'", 
		"'bge'", "'bgeu'", "'lui'", "'auipc'", "'zero'", "'ra'", "'sp'", "'gp'", 
		"'tp'", "'fp'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "REG", "INT", "HEX", "BIN", "ID", "String", 
		"Comment", "Space",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleASMParser._LITERAL_NAMES, SimpleASMParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleASMParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimpleASM.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleASMParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleASMParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimpleASMParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimpleASMParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.lines();
			this.state = 45;
			this.match(SimpleASMParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lines(): LinesContext {
		let _localctx: LinesContext = new LinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleASMParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__0) | (1 << SimpleASMParser.T__1) | (1 << SimpleASMParser.T__2) | (1 << SimpleASMParser.T__3) | (1 << SimpleASMParser.T__4) | (1 << SimpleASMParser.T__5) | (1 << SimpleASMParser.T__6) | (1 << SimpleASMParser.T__7) | (1 << SimpleASMParser.T__14) | (1 << SimpleASMParser.T__16) | (1 << SimpleASMParser.T__17) | (1 << SimpleASMParser.T__18) | (1 << SimpleASMParser.T__19) | (1 << SimpleASMParser.T__20) | (1 << SimpleASMParser.T__21) | (1 << SimpleASMParser.T__22) | (1 << SimpleASMParser.T__23) | (1 << SimpleASMParser.T__24) | (1 << SimpleASMParser.T__25) | (1 << SimpleASMParser.T__26) | (1 << SimpleASMParser.T__27) | (1 << SimpleASMParser.T__28) | (1 << SimpleASMParser.T__29) | (1 << SimpleASMParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SimpleASMParser.T__31 - 32)) | (1 << (SimpleASMParser.T__32 - 32)) | (1 << (SimpleASMParser.T__33 - 32)) | (1 << (SimpleASMParser.T__34 - 32)) | (1 << (SimpleASMParser.T__35 - 32)) | (1 << (SimpleASMParser.T__36 - 32)) | (1 << (SimpleASMParser.T__37 - 32)) | (1 << (SimpleASMParser.T__38 - 32)) | (1 << (SimpleASMParser.T__39 - 32)) | (1 << (SimpleASMParser.T__40 - 32)) | (1 << (SimpleASMParser.T__41 - 32)) | (1 << (SimpleASMParser.T__42 - 32)) | (1 << (SimpleASMParser.T__43 - 32)) | (1 << (SimpleASMParser.T__44 - 32)) | (1 << (SimpleASMParser.T__45 - 32)) | (1 << (SimpleASMParser.T__46 - 32)) | (1 << (SimpleASMParser.T__47 - 32)) | (1 << (SimpleASMParser.T__48 - 32)) | (1 << (SimpleASMParser.T__49 - 32)) | (1 << (SimpleASMParser.T__50 - 32)) | (1 << (SimpleASMParser.T__51 - 32)) | (1 << (SimpleASMParser.T__52 - 32)) | (1 << (SimpleASMParser.T__53 - 32)) | (1 << (SimpleASMParser.T__54 - 32)) | (1 << (SimpleASMParser.T__55 - 32)) | (1 << (SimpleASMParser.T__56 - 32)) | (1 << (SimpleASMParser.T__57 - 32)) | (1 << (SimpleASMParser.T__58 - 32)) | (1 << (SimpleASMParser.T__59 - 32)) | (1 << (SimpleASMParser.T__60 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SimpleASMParser.T__63 - 64)) | (1 << (SimpleASMParser.T__64 - 64)) | (1 << (SimpleASMParser.T__65 - 64)) | (1 << (SimpleASMParser.T__66 - 64)) | (1 << (SimpleASMParser.T__67 - 64)) | (1 << (SimpleASMParser.T__68 - 64)) | (1 << (SimpleASMParser.T__69 - 64)) | (1 << (SimpleASMParser.T__70 - 64)) | (1 << (SimpleASMParser.T__71 - 64)) | (1 << (SimpleASMParser.T__72 - 64)) | (1 << (SimpleASMParser.ID - 64)))) !== 0)) {
				{
				{
				this.state = 47;
				this.line();
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimpleASMParser.RULE_line);
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.data();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 54;
				this.directive();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 55;
				this.instruction();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 56;
				this.label();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimpleASMParser.RULE_directive);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__0:
			case SimpleASMParser.T__1:
			case SimpleASMParser.T__2:
			case SimpleASMParser.T__3:
			case SimpleASMParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.section();
				}
				break;
			case SimpleASMParser.T__5:
			case SimpleASMParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.global();
				}
				break;
			case SimpleASMParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
				this.align();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public section(): SectionContext {
		let _localctx: SectionContext = new SectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimpleASMParser.RULE_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleASMParser.T__0) {
				{
				this.state = 64;
				this.match(SimpleASMParser.T__0);
				}
			}

			this.state = 67;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__1) | (1 << SimpleASMParser.T__2) | (1 << SimpleASMParser.T__3) | (1 << SimpleASMParser.T__4))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global(): GlobalContext {
		let _localctx: GlobalContext = new GlobalContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SimpleASMParser.RULE_global);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			_la = this._input.LA(1);
			if (!(_la === SimpleASMParser.T__5 || _la === SimpleASMParser.T__6)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 70;
			this.match(SimpleASMParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public align(): AlignContext {
		let _localctx: AlignContext = new AlignContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimpleASMParser.RULE_align);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(SimpleASMParser.T__7);
			this.state = 73;
			this.immediate();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data(): DataContext {
		let _localctx: DataContext = new DataContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SimpleASMParser.RULE_data);
		let _la: number;
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				_localctx._name = this.match(SimpleASMParser.ID);
				this.state = 76;
				this.match(SimpleASMParser.T__8);
				this.state = 77;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__9) | (1 << SimpleASMParser.T__10) | (1 << SimpleASMParser.T__11))) !== 0))) {
					_localctx._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 78;
				this.match(SimpleASMParser.String);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				_localctx._name = this.match(SimpleASMParser.ID);
				this.state = 80;
				this.match(SimpleASMParser.T__8);
				this.state = 81;
				_localctx._type = this.match(SimpleASMParser.T__12);
				this.state = 82;
				this.numlist();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 83;
				_localctx._name = this.match(SimpleASMParser.ID);
				this.state = 84;
				this.match(SimpleASMParser.T__8);
				this.state = 85;
				_localctx._type = this.match(SimpleASMParser.T__13);
				this.state = 86;
				this.numlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SimpleASMParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(SimpleASMParser.ID);
			this.state = 90;
			this.match(SimpleASMParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SimpleASMParser.RULE_instruction);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.pseudo();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 93;
				this.environment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 94;
				this.rtype();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 95;
				this.itype();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 96;
				this.stype();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 97;
				this.utype();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 98;
				this.jtype();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 99;
				this.btype();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudo(): PseudoContext {
		let _localctx: PseudoContext = new PseudoContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SimpleASMParser.RULE_pseudo);
		let _la: number;
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				_localctx._op = this.match(SimpleASMParser.T__14);
				this.state = 103;
				_localctx._rd = this.register();
				this.state = 104;
				this.match(SimpleASMParser.T__15);
				this.state = 105;
				_localctx._symbol = this.match(SimpleASMParser.ID);
				}
				break;
			case SimpleASMParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				_localctx._op = this.match(SimpleASMParser.T__16);
				this.state = 108;
				_localctx._rd = this.register();
				this.state = 109;
				this.match(SimpleASMParser.T__15);
				this.state = 110;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__17:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 112;
				_localctx._op = this.match(SimpleASMParser.T__17);
				this.state = 113;
				_localctx._rd = this.register();
				this.state = 114;
				this.match(SimpleASMParser.T__15);
				this.state = 115;
				_localctx._rs1 = this.register();
				}
				break;
			case SimpleASMParser.T__18:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 117;
				_localctx._op = this.match(SimpleASMParser.T__18);
				this.state = 118;
				_localctx._rd = this.register();
				this.state = 119;
				this.match(SimpleASMParser.T__15);
				this.state = 120;
				_localctx._rs1 = this.register();
				}
				break;
			case SimpleASMParser.T__19:
			case SimpleASMParser.T__20:
			case SimpleASMParser.T__21:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 122;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__19) | (1 << SimpleASMParser.T__20) | (1 << SimpleASMParser.T__21))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 123;
				_localctx._rd = this.register();
				this.state = 124;
				this.match(SimpleASMParser.T__15);
				this.state = 125;
				_localctx._rs1 = this.register();
				}
				break;
			case SimpleASMParser.T__22:
			case SimpleASMParser.T__23:
			case SimpleASMParser.T__24:
			case SimpleASMParser.T__25:
			case SimpleASMParser.T__26:
			case SimpleASMParser.T__27:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 127;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__22) | (1 << SimpleASMParser.T__23) | (1 << SimpleASMParser.T__24) | (1 << SimpleASMParser.T__25) | (1 << SimpleASMParser.T__26) | (1 << SimpleASMParser.T__27))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 128;
				_localctx._rs1 = this.register();
				this.state = 129;
				this.match(SimpleASMParser.T__15);
				this.state = 130;
				this.offset();
				}
				break;
			case SimpleASMParser.T__28:
			case SimpleASMParser.T__29:
			case SimpleASMParser.T__30:
			case SimpleASMParser.T__31:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 132;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (SimpleASMParser.T__28 - 29)) | (1 << (SimpleASMParser.T__29 - 29)) | (1 << (SimpleASMParser.T__30 - 29)) | (1 << (SimpleASMParser.T__31 - 29)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 133;
				_localctx._rs1 = this.register();
				this.state = 134;
				this.match(SimpleASMParser.T__15);
				this.state = 135;
				_localctx._rs2 = this.register();
				this.state = 136;
				this.match(SimpleASMParser.T__15);
				this.state = 137;
				this.offset();
				}
				break;
			case SimpleASMParser.T__32:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 139;
				_localctx._op = this.match(SimpleASMParser.T__32);
				this.state = 140;
				this.offset();
				}
				break;
			case SimpleASMParser.T__33:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 141;
				_localctx._op = this.match(SimpleASMParser.T__33);
				this.state = 142;
				this.offset();
				}
				break;
			case SimpleASMParser.T__34:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 143;
				_localctx._op = this.match(SimpleASMParser.T__34);
				this.state = 144;
				_localctx._rs1 = this.register();
				}
				break;
			case SimpleASMParser.T__35:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 145;
				_localctx._op = this.match(SimpleASMParser.T__35);
				this.state = 146;
				_localctx._rs1 = this.register();
				}
				break;
			case SimpleASMParser.T__36:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 147;
				_localctx._op = this.match(SimpleASMParser.T__36);
				}
				break;
			case SimpleASMParser.T__37:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 148;
				_localctx._op = this.match(SimpleASMParser.T__37);
				this.state = 149;
				this.offset();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public environment(): EnvironmentContext {
		let _localctx: EnvironmentContext = new EnvironmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SimpleASMParser.RULE_environment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(SimpleASMParser.T__38);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rtype(): RtypeContext {
		let _localctx: RtypeContext = new RtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimpleASMParser.RULE_rtype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleASMParser.T__39 - 40)) | (1 << (SimpleASMParser.T__40 - 40)) | (1 << (SimpleASMParser.T__41 - 40)) | (1 << (SimpleASMParser.T__42 - 40)) | (1 << (SimpleASMParser.T__43 - 40)) | (1 << (SimpleASMParser.T__44 - 40)) | (1 << (SimpleASMParser.T__45 - 40)) | (1 << (SimpleASMParser.T__46 - 40)) | (1 << (SimpleASMParser.T__47 - 40)) | (1 << (SimpleASMParser.T__48 - 40)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 155;
			_localctx._rd = this.register();
			this.state = 156;
			this.match(SimpleASMParser.T__15);
			this.state = 157;
			_localctx._rs1 = this.register();
			this.state = 158;
			this.match(SimpleASMParser.T__15);
			this.state = 159;
			_localctx._rs2 = this.register();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itype(): ItypeContext {
		let _localctx: ItypeContext = new ItypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SimpleASMParser.RULE_itype);
		let _la: number;
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__49:
			case SimpleASMParser.T__50:
			case SimpleASMParser.T__51:
			case SimpleASMParser.T__52:
			case SimpleASMParser.T__53:
			case SimpleASMParser.T__54:
			case SimpleASMParser.T__55:
			case SimpleASMParser.T__56:
			case SimpleASMParser.T__57:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (SimpleASMParser.T__49 - 50)) | (1 << (SimpleASMParser.T__50 - 50)) | (1 << (SimpleASMParser.T__51 - 50)) | (1 << (SimpleASMParser.T__52 - 50)) | (1 << (SimpleASMParser.T__53 - 50)) | (1 << (SimpleASMParser.T__54 - 50)) | (1 << (SimpleASMParser.T__55 - 50)) | (1 << (SimpleASMParser.T__56 - 50)) | (1 << (SimpleASMParser.T__57 - 50)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 162;
				_localctx._rd = this.register();
				this.state = 163;
				this.match(SimpleASMParser.T__15);
				this.state = 164;
				_localctx._rs1 = this.register();
				this.state = 165;
				this.match(SimpleASMParser.T__15);
				this.state = 166;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__58:
			case SimpleASMParser.T__59:
			case SimpleASMParser.T__60:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 168;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SimpleASMParser.T__58 - 59)) | (1 << (SimpleASMParser.T__59 - 59)) | (1 << (SimpleASMParser.T__60 - 59)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 169;
				_localctx._rd = this.register();
				this.state = 170;
				this.match(SimpleASMParser.T__15);
				this.state = 171;
				this.immediate();
				this.state = 172;
				this.match(SimpleASMParser.T__61);
				this.state = 173;
				_localctx._rs1 = this.register();
				this.state = 174;
				this.match(SimpleASMParser.T__62);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stype(): StypeContext {
		let _localctx: StypeContext = new StypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SimpleASMParser.RULE_stype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SimpleASMParser.T__63 - 64)) | (1 << (SimpleASMParser.T__64 - 64)) | (1 << (SimpleASMParser.T__65 - 64)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 179;
			_localctx._rs2 = this.register();
			this.state = 180;
			this.match(SimpleASMParser.T__15);
			this.state = 181;
			this.immediate();
			this.state = 182;
			this.match(SimpleASMParser.T__61);
			this.state = 183;
			_localctx._rs1 = this.register();
			this.state = 184;
			this.match(SimpleASMParser.T__62);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public btype(): BtypeContext {
		let _localctx: BtypeContext = new BtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SimpleASMParser.RULE_btype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === SimpleASMParser.T__31 || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SimpleASMParser.T__66 - 67)) | (1 << (SimpleASMParser.T__67 - 67)) | (1 << (SimpleASMParser.T__68 - 67)) | (1 << (SimpleASMParser.T__69 - 67)) | (1 << (SimpleASMParser.T__70 - 67)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 187;
			_localctx._rs1 = this.register();
			this.state = 188;
			this.match(SimpleASMParser.T__15);
			this.state = 189;
			_localctx._rs2 = this.register();
			this.state = 190;
			this.match(SimpleASMParser.T__15);
			this.state = 191;
			this.immediate();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jtype(): JtypeContext {
		let _localctx: JtypeContext = new JtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SimpleASMParser.RULE_jtype);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__35:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				_localctx._op = this.match(SimpleASMParser.T__35);
				this.state = 194;
				_localctx._rd = this.register();
				this.state = 195;
				this.match(SimpleASMParser.T__15);
				this.state = 196;
				this.immediate();
				this.state = 197;
				this.match(SimpleASMParser.T__61);
				this.state = 198;
				_localctx._rs1 = this.register();
				this.state = 199;
				this.match(SimpleASMParser.T__62);
				}
				break;
			case SimpleASMParser.T__33:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				_localctx._op = this.match(SimpleASMParser.T__33);
				this.state = 202;
				_localctx._rd = this.register();
				this.state = 203;
				this.match(SimpleASMParser.T__15);
				this.state = 204;
				this.offset();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public utype(): UtypeContext {
		let _localctx: UtypeContext = new UtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SimpleASMParser.RULE_utype);
		try {
			this.state = 218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__71:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				_localctx._op = this.match(SimpleASMParser.T__71);
				this.state = 209;
				_localctx._rd = this.register();
				this.state = 210;
				this.match(SimpleASMParser.T__15);
				this.state = 211;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__72:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				_localctx._op = this.match(SimpleASMParser.T__72);
				this.state = 214;
				_localctx._rd = this.register();
				this.state = 215;
				this.match(SimpleASMParser.T__15);
				this.state = 216;
				this.immediate();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offset(): OffsetContext {
		let _localctx: OffsetContext = new OffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SimpleASMParser.RULE_offset);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.INT:
			case SimpleASMParser.HEX:
			case SimpleASMParser.BIN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 220;
				this.immediate();
				}
				break;
			case SimpleASMParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.match(SimpleASMParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public register(): RegisterContext {
		let _localctx: RegisterContext = new RegisterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SimpleASMParser.RULE_register);
		let _la: number;
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__73:
			case SimpleASMParser.T__74:
			case SimpleASMParser.T__75:
			case SimpleASMParser.T__76:
			case SimpleASMParser.T__77:
			case SimpleASMParser.T__78:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SimpleASMParser.T__73 - 74)) | (1 << (SimpleASMParser.T__74 - 74)) | (1 << (SimpleASMParser.T__75 - 74)) | (1 << (SimpleASMParser.T__76 - 74)) | (1 << (SimpleASMParser.T__77 - 74)) | (1 << (SimpleASMParser.T__78 - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case SimpleASMParser.REG:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 225;
				this.match(SimpleASMParser.REG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public immediate(): ImmediateContext {
		let _localctx: ImmediateContext = new ImmediateContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SimpleASMParser.RULE_immediate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			_la = this._input.LA(1);
			if (!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (SimpleASMParser.INT - 81)) | (1 << (SimpleASMParser.HEX - 81)) | (1 << (SimpleASMParser.BIN - 81)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numlist(): NumlistContext {
		let _localctx: NumlistContext = new NumlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SimpleASMParser.RULE_numlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.immediate();
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleASMParser.T__15) {
				{
				{
				this.state = 231;
				this.match(SimpleASMParser.T__15);
				this.state = 232;
				this.immediate();
				}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Y\xF1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x07\x033\n\x03\f\x03\x0E\x036\v\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04<\n\x04\x03\x05\x03\x05\x03\x05\x05\x05" +
		"A\n\x05\x03\x06\x05\x06D\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\tZ\n\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\vg\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x99\n\f\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB3\n\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xD1\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x05\x13\xDD\n\x13\x03\x14\x03\x14\x05\x14\xE1\n\x14\x03\x15\x03" +
		"\x15\x05\x15\xE5\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17" +
		"\xEC\n\x17\f\x17\x0E\x17\xEF\v\x17\x03\x17\x02\x02\x02\x18\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02" +
		"\x0F\x03\x02\x04\x07\x03\x02\b\t\x03\x02\f\x0E\x03\x02\x16\x18\x03\x02" +
		"\x19\x1E\x03\x02\x1F\"\x03\x02*3\x03\x024<\x03\x02=?\x03\x02BD\x04\x02" +
		"\"\"EI\x03\x02LQ\x03\x02SU\x02\xFC\x02.\x03\x02\x02\x02\x044\x03\x02\x02" +
		"\x02\x06;\x03\x02\x02\x02\b@\x03\x02\x02\x02\nC\x03\x02\x02\x02\fG\x03" +
		"\x02\x02\x02\x0EJ\x03\x02\x02\x02\x10Y\x03\x02\x02\x02\x12[\x03\x02\x02" +
		"\x02\x14f\x03\x02\x02\x02\x16\x98\x03\x02\x02\x02\x18\x9A\x03\x02\x02" +
		"\x02\x1A\x9C\x03\x02\x02\x02\x1C\xB2\x03\x02\x02\x02\x1E\xB4\x03\x02\x02" +
		"\x02 \xBC\x03\x02\x02\x02\"\xD0\x03\x02\x02\x02$\xDC\x03\x02\x02\x02&" +
		"\xE0\x03\x02\x02\x02(\xE4\x03\x02\x02\x02*\xE6\x03\x02\x02\x02,\xE8\x03" +
		"\x02\x02\x02./\x05\x04\x03\x02/0\x07\x02\x02\x030\x03\x03\x02\x02\x02" +
		"13\x05\x06\x04\x0221\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x02" +
		"45\x03\x02\x02\x025\x05\x03\x02\x02\x0264\x03\x02\x02\x027<\x05\x10\t" +
		"\x028<\x05\b\x05\x029<\x05\x14\v\x02:<\x05\x12\n\x02;7\x03\x02\x02\x02" +
		";8\x03\x02\x02\x02;9\x03\x02\x02\x02;:\x03\x02\x02\x02<\x07\x03\x02\x02" +
		"\x02=A\x05\n\x06\x02>A\x05\f\x07\x02?A\x05\x0E\b\x02@=\x03\x02\x02\x02" +
		"@>\x03\x02\x02\x02@?\x03\x02\x02\x02A\t\x03\x02\x02\x02BD\x07\x03\x02" +
		"\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\t\x02\x02" +
		"\x02F\v\x03\x02\x02\x02GH\t\x03\x02\x02HI\x07V\x02\x02I\r\x03\x02\x02" +
		"\x02JK\x07\n\x02\x02KL\x05*\x16\x02L\x0F\x03\x02\x02\x02MN\x07V\x02\x02" +
		"NO\x07\v\x02\x02OP\t\x04\x02\x02PZ\x07W\x02\x02QR\x07V\x02\x02RS\x07\v" +
		"\x02\x02ST\x07\x0F\x02\x02TZ\x05,\x17\x02UV\x07V\x02\x02VW\x07\v\x02\x02" +
		"WX\x07\x10\x02\x02XZ\x05,\x17\x02YM\x03\x02\x02\x02YQ\x03\x02\x02\x02" +
		"YU\x03\x02\x02\x02Z\x11\x03\x02\x02\x02[\\\x07V\x02\x02\\]\x07\v\x02\x02" +
		"]\x13\x03\x02\x02\x02^g\x05\x16\f\x02_g\x05\x18\r\x02`g\x05\x1A\x0E\x02" +
		"ag\x05\x1C\x0F\x02bg\x05\x1E\x10\x02cg\x05$\x13\x02dg\x05\"\x12\x02eg" +
		"\x05 \x11\x02f^\x03\x02\x02\x02f_\x03\x02\x02\x02f`\x03\x02\x02\x02fa" +
		"\x03\x02\x02\x02fb\x03\x02\x02\x02fc\x03\x02\x02\x02fd\x03\x02\x02\x02" +
		"fe\x03\x02\x02\x02g\x15\x03\x02\x02\x02hi\x07\x11\x02\x02ij\x05(\x15\x02" +
		"jk\x07\x12\x02\x02kl\x07V\x02\x02l\x99\x03\x02\x02\x02mn\x07\x13\x02\x02" +
		"no\x05(\x15\x02op\x07\x12\x02\x02pq\x05*\x16\x02q\x99\x03\x02\x02\x02" +
		"rs\x07\x14\x02\x02st\x05(\x15\x02tu\x07\x12\x02\x02uv\x05(\x15\x02v\x99" +
		"\x03\x02\x02\x02wx\x07\x15\x02\x02xy\x05(\x15\x02yz\x07\x12\x02\x02z{" +
		"\x05(\x15\x02{\x99\x03\x02\x02\x02|}\t\x05\x02\x02}~\x05(\x15\x02~\x7F" +
		"\x07\x12\x02\x02\x7F\x80\x05(\x15\x02\x80\x99\x03\x02\x02\x02\x81\x82" +
		"\t\x06\x02\x02\x82\x83\x05(\x15\x02\x83\x84\x07\x12\x02\x02\x84\x85\x05" +
		"&\x14\x02\x85\x99\x03\x02\x02\x02\x86\x87\t\x07\x02\x02\x87\x88\x05(\x15" +
		"\x02\x88\x89\x07\x12\x02\x02\x89\x8A\x05(\x15\x02\x8A\x8B\x07\x12\x02" +
		"\x02\x8B\x8C\x05&\x14\x02\x8C\x99\x03\x02\x02\x02\x8D\x8E\x07#\x02\x02" +
		"\x8E\x99\x05&\x14\x02\x8F\x90\x07$\x02\x02\x90\x99\x05&\x14\x02\x91\x92" +
		"\x07%\x02\x02\x92\x99\x05(\x15\x02\x93\x94\x07&\x02\x02\x94\x99\x05(\x15" +
		"\x02\x95\x99\x07\'\x02\x02\x96\x97\x07(\x02\x02\x97\x99\x05&\x14\x02\x98" +
		"h\x03\x02\x02\x02\x98m\x03\x02\x02\x02\x98r\x03\x02\x02\x02\x98w\x03\x02" +
		"\x02\x02\x98|\x03\x02\x02\x02\x98\x81\x03\x02\x02\x02\x98\x86\x03\x02" +
		"\x02\x02\x98\x8D\x03\x02\x02\x02\x98\x8F\x03\x02\x02\x02\x98\x91\x03\x02" +
		"\x02\x02\x98\x93\x03\x02\x02\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02" +
		"\x02\x02\x99\x17\x03\x02\x02\x02\x9A\x9B\x07)\x02\x02\x9B\x19\x03\x02" +
		"\x02\x02\x9C\x9D\t\b\x02\x02\x9D\x9E\x05(\x15\x02\x9E\x9F\x07\x12\x02" +
		"\x02\x9F\xA0\x05(\x15\x02\xA0\xA1\x07\x12\x02\x02\xA1\xA2\x05(\x15\x02" +
		"\xA2\x1B\x03\x02\x02\x02\xA3\xA4\t\t\x02\x02\xA4\xA5\x05(\x15\x02\xA5" +
		"\xA6\x07\x12\x02\x02\xA6\xA7\x05(\x15\x02\xA7\xA8\x07\x12\x02\x02\xA8" +
		"\xA9\x05*\x16\x02\xA9\xB3\x03\x02\x02\x02\xAA\xAB\t\n\x02\x02\xAB\xAC" +
		"\x05(\x15\x02\xAC\xAD\x07\x12\x02\x02\xAD\xAE\x05*\x16\x02\xAE\xAF\x07" +
		"@\x02\x02\xAF\xB0\x05(\x15\x02\xB0\xB1\x07A\x02\x02\xB1\xB3\x03\x02\x02" +
		"\x02\xB2\xA3\x03\x02\x02\x02\xB2\xAA\x03\x02\x02\x02\xB3\x1D\x03\x02\x02" +
		"\x02\xB4\xB5\t\v\x02\x02\xB5\xB6\x05(\x15\x02\xB6\xB7\x07\x12\x02\x02" +
		"\xB7\xB8\x05*\x16\x02\xB8\xB9\x07@\x02\x02\xB9\xBA\x05(\x15\x02\xBA\xBB" +
		"\x07A\x02\x02\xBB\x1F\x03\x02\x02\x02\xBC\xBD\t\f\x02\x02\xBD\xBE\x05" +
		"(\x15\x02\xBE\xBF\x07\x12\x02\x02\xBF\xC0\x05(\x15\x02\xC0\xC1\x07\x12" +
		"\x02\x02\xC1\xC2\x05*\x16\x02\xC2!\x03\x02\x02\x02\xC3\xC4\x07&\x02\x02" +
		"\xC4\xC5\x05(\x15\x02\xC5\xC6\x07\x12\x02\x02\xC6\xC7\x05*\x16\x02\xC7" +
		"\xC8\x07@\x02\x02\xC8\xC9\x05(\x15\x02\xC9\xCA\x07A\x02\x02\xCA\xD1\x03" +
		"\x02\x02\x02\xCB\xCC\x07$\x02\x02\xCC\xCD\x05(\x15\x02\xCD\xCE\x07\x12" +
		"\x02\x02\xCE\xCF\x05&\x14\x02\xCF\xD1\x03\x02\x02\x02\xD0\xC3\x03\x02" +
		"\x02\x02\xD0\xCB\x03\x02\x02\x02\xD1#\x03\x02\x02\x02\xD2\xD3\x07J\x02" +
		"\x02\xD3\xD4\x05(\x15\x02\xD4\xD5\x07\x12\x02\x02\xD5\xD6\x05*\x16\x02" +
		"\xD6\xDD\x03\x02\x02\x02\xD7\xD8\x07K\x02\x02\xD8\xD9\x05(\x15\x02\xD9" +
		"\xDA\x07\x12\x02\x02\xDA\xDB\x05*\x16\x02\xDB\xDD\x03\x02\x02\x02\xDC" +
		"\xD2\x03\x02\x02\x02\xDC\xD7\x03\x02\x02\x02\xDD%\x03\x02\x02\x02\xDE" +
		"\xE1\x05*\x16\x02\xDF\xE1\x07V\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF" +
		"\x03\x02\x02\x02\xE1\'\x03\x02\x02\x02\xE2\xE5\t\r\x02\x02\xE3\xE5\x07" +
		"R\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02\x02\x02\xE5)\x03\x02" +
		"\x02\x02\xE6\xE7\t\x0E\x02\x02\xE7+\x03\x02\x02\x02\xE8\xED\x05*\x16\x02" +
		"\xE9\xEA\x07\x12\x02\x02\xEA\xEC\x05*\x16\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE-\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\x0F4;@CYf\x98\xB2\xD0\xDC" +
		"\xE0\xE4\xED";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleASMParser.__ATN) {
			SimpleASMParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleASMParser._serializedATN));
		}

		return SimpleASMParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public lines(): LinesContext {
		return this.getRuleContext(0, LinesContext);
	}
	public EOF(): TerminalNode { return this.getToken(SimpleASMParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_program; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinesContext extends ParserRuleContext {
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_lines; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitLines) {
			return visitor.visitLines(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public data(): DataContext | undefined {
		return this.tryGetRuleContext(0, DataContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_line; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public section(): SectionContext | undefined {
		return this.tryGetRuleContext(0, SectionContext);
	}
	public global(): GlobalContext | undefined {
		return this.tryGetRuleContext(0, GlobalContext);
	}
	public align(): AlignContext | undefined {
		return this.tryGetRuleContext(0, AlignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_directive; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitDirective) {
			return visitor.visitDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_section; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterSection) {
			listener.enterSection(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitSection) {
			listener.exitSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitSection) {
			return visitor.visitSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SimpleASMParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_global; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterGlobal) {
			listener.enterGlobal(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitGlobal) {
			listener.exitGlobal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitGlobal) {
			return visitor.visitGlobal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlignContext extends ParserRuleContext {
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_align; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterAlign) {
			listener.enterAlign(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitAlign) {
			listener.exitAlign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitAlign) {
			return visitor.visitAlign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: Token;
	public String(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.String, 0); }
	public ID(): TerminalNode { return this.getToken(SimpleASMParser.ID, 0); }
	public numlist(): NumlistContext | undefined {
		return this.tryGetRuleContext(0, NumlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_data; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterData) {
			listener.enterData(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitData) {
			listener.exitData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitData) {
			return visitor.visitData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SimpleASMParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_label; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public pseudo(): PseudoContext | undefined {
		return this.tryGetRuleContext(0, PseudoContext);
	}
	public environment(): EnvironmentContext | undefined {
		return this.tryGetRuleContext(0, EnvironmentContext);
	}
	public rtype(): RtypeContext | undefined {
		return this.tryGetRuleContext(0, RtypeContext);
	}
	public itype(): ItypeContext | undefined {
		return this.tryGetRuleContext(0, ItypeContext);
	}
	public stype(): StypeContext | undefined {
		return this.tryGetRuleContext(0, StypeContext);
	}
	public utype(): UtypeContext | undefined {
		return this.tryGetRuleContext(0, UtypeContext);
	}
	public jtype(): JtypeContext | undefined {
		return this.tryGetRuleContext(0, JtypeContext);
	}
	public btype(): BtypeContext | undefined {
		return this.tryGetRuleContext(0, BtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_instruction; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoContext extends ParserRuleContext {
	public _op!: Token;
	public _rd!: RegisterContext;
	public _symbol!: Token;
	public _rs1!: RegisterContext;
	public _rs2!: RegisterContext;
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.ID, 0); }
	public immediate(): ImmediateContext | undefined {
		return this.tryGetRuleContext(0, ImmediateContext);
	}
	public offset(): OffsetContext | undefined {
		return this.tryGetRuleContext(0, OffsetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_pseudo; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterPseudo) {
			listener.enterPseudo(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitPseudo) {
			listener.exitPseudo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitPseudo) {
			return visitor.visitPseudo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnvironmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_environment; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterEnvironment) {
			listener.enterEnvironment(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitEnvironment) {
			listener.exitEnvironment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitEnvironment) {
			return visitor.visitEnvironment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RtypeContext extends ParserRuleContext {
	public _op!: Token;
	public _rd!: RegisterContext;
	public _rs1!: RegisterContext;
	public _rs2!: RegisterContext;
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_rtype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterRtype) {
			listener.enterRtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitRtype) {
			listener.exitRtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitRtype) {
			return visitor.visitRtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItypeContext extends ParserRuleContext {
	public _op!: Token;
	public _rd!: RegisterContext;
	public _rs1!: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_itype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterItype) {
			listener.enterItype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitItype) {
			listener.exitItype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitItype) {
			return visitor.visitItype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StypeContext extends ParserRuleContext {
	public _op!: Token;
	public _rs2!: RegisterContext;
	public _rs1!: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_stype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterStype) {
			listener.enterStype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitStype) {
			listener.exitStype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitStype) {
			return visitor.visitStype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BtypeContext extends ParserRuleContext {
	public _op!: Token;
	public _rs1!: RegisterContext;
	public _rs2!: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_btype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterBtype) {
			listener.enterBtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitBtype) {
			listener.exitBtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitBtype) {
			return visitor.visitBtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JtypeContext extends ParserRuleContext {
	public _op!: Token;
	public _rd!: RegisterContext;
	public _rs1!: RegisterContext;
	public immediate(): ImmediateContext | undefined {
		return this.tryGetRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public offset(): OffsetContext | undefined {
		return this.tryGetRuleContext(0, OffsetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_jtype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterJtype) {
			listener.enterJtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitJtype) {
			listener.exitJtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitJtype) {
			return visitor.visitJtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UtypeContext extends ParserRuleContext {
	public _op!: Token;
	public _rd!: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext {
		return this.getRuleContext(0, RegisterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_utype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterUtype) {
			listener.enterUtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitUtype) {
			listener.exitUtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitUtype) {
			return visitor.visitUtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	public immediate(): ImmediateContext | undefined {
		return this.tryGetRuleContext(0, ImmediateContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_offset; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterOffset) {
			listener.enterOffset(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitOffset) {
			listener.exitOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitOffset) {
			return visitor.visitOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegisterContext extends ParserRuleContext {
	public REG(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.REG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_register; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterRegister) {
			listener.enterRegister(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitRegister) {
			listener.exitRegister(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitRegister) {
			return visitor.visitRegister(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImmediateContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.HEX, 0); }
	public BIN(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.BIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_immediate; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterImmediate) {
			listener.enterImmediate(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitImmediate) {
			listener.exitImmediate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitImmediate) {
			return visitor.visitImmediate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumlistContext extends ParserRuleContext {
	public immediate(): ImmediateContext[];
	public immediate(i: number): ImmediateContext;
	public immediate(i?: number): ImmediateContext | ImmediateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImmediateContext);
		} else {
			return this.getRuleContext(i, ImmediateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_numlist; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterNumlist) {
			listener.enterNumlist(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitNumlist) {
			listener.exitNumlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitNumlist) {
			return visitor.visitNumlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


