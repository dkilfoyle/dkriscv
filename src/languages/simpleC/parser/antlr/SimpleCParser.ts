// Generated from c:\code\dkriscv\src\languages\simpleC\parser\SimpleC.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SimpleCListener } from "./SimpleCListener";
import { SimpleCVisitor } from "./SimpleCVisitor";


export class SimpleCParser extends Parser {
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
	public static readonly Bool = 41;
	public static readonly Number = 42;
	public static readonly Identifier = 43;
	public static readonly String = 44;
	public static readonly Comment = 45;
	public static readonly Space = 46;
	public static readonly RULE_program = 0;
	public static readonly RULE_repl = 1;
	public static readonly RULE_funType = 2;
	public static readonly RULE_param = 3;
	public static readonly RULE_paramList = 4;
	public static readonly RULE_returnBlock = 5;
	public static readonly RULE_functionDecl = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_compoundStatement = 8;
	public static readonly RULE_statements = 9;
	public static readonly RULE_returnStatement = 10;
	public static readonly RULE_variableDeclaration = 11;
	public static readonly RULE_varType = 12;
	public static readonly RULE_initDeclaratorList = 13;
	public static readonly RULE_initDeclarator = 14;
	public static readonly RULE_dimensions = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_functionCall = 17;
	public static readonly RULE_ifStatement = 18;
	public static readonly RULE_elseStat = 19;
	public static readonly RULE_switchStatement = 20;
	public static readonly RULE_caseStatement = 21;
	public static readonly RULE_defaultCase = 22;
	public static readonly RULE_breakStatement = 23;
	public static readonly RULE_forStatement = 24;
	public static readonly RULE_forInitial = 25;
	public static readonly RULE_whileStatement = 26;
	public static readonly RULE_printfStatement = 27;
	public static readonly RULE_idList = 28;
	public static readonly RULE_exprList = 29;
	public static readonly RULE_expression = 30;
	public static readonly RULE_constantValue = 31;
	public static readonly RULE_list = 32;
	public static readonly RULE_indexes = 33;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "repl", "funType", "param", "paramList", "returnBlock", "functionDecl", 
		"statement", "compoundStatement", "statements", "returnStatement", "variableDeclaration", 
		"varType", "initDeclaratorList", "initDeclarator", "dimensions", "assignment", 
		"functionCall", "ifStatement", "elseStat", "switchStatement", "caseStatement", 
		"defaultCase", "breakStatement", "forStatement", "forInitial", "whileStatement", 
		"printfStatement", "idList", "exprList", "expression", "constantValue", 
		"list", "indexes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "','", "'return'", "';'", "'('", "')'", "'{'", "'}'", 
		"'int'", "'string'", "'='", "'['", "']'", "'if'", "'else'", "'switch'", 
		"'case'", "':'", "'default'", "'break;'", "'for'", "'while'", "'printf'", 
		"'-'", "'!'", "'^'", "'*'", "'/'", "'%'", "'+'", "'>='", "'<='", "'>'", 
		"'<'", "'=='", "'!='", "'&&'", "'||'", "'?'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "Bool", 
		"Number", "Identifier", "String", "Comment", "Space",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleCParser._LITERAL_NAMES, SimpleCParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleCParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimpleC.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleCParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleCParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimpleCParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimpleCParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.repl();
			this.state = 69;
			this.match(SimpleCParser.EOF);
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
	public repl(): ReplContext {
		let _localctx: ReplContext = new ReplContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleCParser.RULE_repl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 71;
					this.functionDecl();
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 77;
			this.statements();
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
	public funType(): FunTypeContext {
		let _localctx: FunTypeContext = new FunTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimpleCParser.RULE_funType);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleCParser.T__8:
			case SimpleCParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.varType();
				}
				break;
			case SimpleCParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.match(SimpleCParser.T__0);
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
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimpleCParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.varType();
			this.state = 84;
			this.match(SimpleCParser.Identifier);
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
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimpleCParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.param();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__1) {
				{
				{
				this.state = 87;
				this.match(SimpleCParser.T__1);
				this.state = 88;
				this.param();
				}
				}
				this.state = 93;
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
	public returnBlock(): ReturnBlockContext {
		let _localctx: ReturnBlockContext = new ReturnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SimpleCParser.RULE_returnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 94;
					this.statement();
					}
					}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__2) {
				{
				this.state = 100;
				this.match(SimpleCParser.T__2);
				this.state = 101;
				this.expression(0);
				this.state = 102;
				this.match(SimpleCParser.T__3);
				}
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimpleCParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.funType();
			this.state = 107;
			this.match(SimpleCParser.Identifier);
			this.state = 108;
			this.match(SimpleCParser.T__4);
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__8 || _la === SimpleCParser.T__9) {
				{
				this.state = 109;
				this.paramList();
				}
			}

			this.state = 112;
			this.match(SimpleCParser.T__5);
			this.state = 113;
			this.match(SimpleCParser.T__6);
			this.state = 114;
			this.returnBlock();
			this.state = 115;
			this.match(SimpleCParser.T__7);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SimpleCParser.RULE_statement);
		try {
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.variableDeclaration();
				this.state = 118;
				this.match(SimpleCParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.assignment();
				this.state = 121;
				this.match(SimpleCParser.T__3);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.functionCall();
				this.state = 124;
				this.match(SimpleCParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 126;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 127;
				this.switchStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 128;
				this.forStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 129;
				this.whileStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 130;
				this.compoundStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 131;
				this.printfStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 132;
				this.returnStatement();
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
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SimpleCParser.RULE_compoundStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(SimpleCParser.T__6);
			this.state = 136;
			this.statements();
			this.state = 137;
			this.match(SimpleCParser.T__7);
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
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SimpleCParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__2) | (1 << SimpleCParser.T__6) | (1 << SimpleCParser.T__8) | (1 << SimpleCParser.T__9) | (1 << SimpleCParser.T__13) | (1 << SimpleCParser.T__15) | (1 << SimpleCParser.T__20) | (1 << SimpleCParser.T__21) | (1 << SimpleCParser.T__22))) !== 0) || _la === SimpleCParser.Identifier) {
				{
				{
				this.state = 139;
				this.statement();
				}
				}
				this.state = 144;
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SimpleCParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(SimpleCParser.T__2);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__4) | (1 << SimpleCParser.T__11) | (1 << SimpleCParser.T__23) | (1 << SimpleCParser.T__24))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleCParser.T__39 - 40)) | (1 << (SimpleCParser.Bool - 40)) | (1 << (SimpleCParser.Number - 40)) | (1 << (SimpleCParser.Identifier - 40)) | (1 << (SimpleCParser.String - 40)))) !== 0)) {
				{
				this.state = 146;
				this.expression(0);
				}
			}

			this.state = 149;
			this.match(SimpleCParser.T__3);
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SimpleCParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.varType();
			this.state = 152;
			this.initDeclaratorList();
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
	public varType(): VarTypeContext {
		let _localctx: VarTypeContext = new VarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimpleCParser.RULE_varType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_la = this._input.LA(1);
			if (!(_la === SimpleCParser.T__8 || _la === SimpleCParser.T__9)) {
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
	public initDeclaratorList(): InitDeclaratorListContext {
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SimpleCParser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.initDeclarator();
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__1) {
				{
				{
				this.state = 157;
				this.match(SimpleCParser.T__1);
				this.state = 158;
				this.initDeclarator();
				}
				}
				this.state = 163;
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
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SimpleCParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(SimpleCParser.Identifier);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__11) {
				{
				{
				this.state = 165;
				this.dimensions();
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__10) {
				{
				this.state = 171;
				this.match(SimpleCParser.T__10);
				this.state = 172;
				this.expression(0);
				}
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
	public dimensions(): DimensionsContext {
		let _localctx: DimensionsContext = new DimensionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SimpleCParser.RULE_dimensions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(SimpleCParser.T__11);
			this.state = 176;
			this.match(SimpleCParser.Number);
			this.state = 177;
			this.match(SimpleCParser.T__12);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SimpleCParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(SimpleCParser.Identifier);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__11) {
				{
				this.state = 180;
				this.indexes();
				}
			}

			this.state = 183;
			this.match(SimpleCParser.T__10);
			this.state = 184;
			this.expression(0);
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SimpleCParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(SimpleCParser.Identifier);
			this.state = 187;
			this.match(SimpleCParser.T__4);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__4) | (1 << SimpleCParser.T__11) | (1 << SimpleCParser.T__23) | (1 << SimpleCParser.T__24))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleCParser.T__39 - 40)) | (1 << (SimpleCParser.Bool - 40)) | (1 << (SimpleCParser.Number - 40)) | (1 << (SimpleCParser.Identifier - 40)) | (1 << (SimpleCParser.String - 40)))) !== 0)) {
				{
				this.state = 188;
				this.exprList();
				}
			}

			this.state = 191;
			this.match(SimpleCParser.T__5);
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SimpleCParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(SimpleCParser.T__13);
			this.state = 194;
			this.match(SimpleCParser.T__4);
			this.state = 195;
			this.expression(0);
			this.state = 196;
			this.match(SimpleCParser.T__5);
			this.state = 197;
			this.statement();
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 198;
				this.elseStat();
				}
				break;
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
	public elseStat(): ElseStatContext {
		let _localctx: ElseStatContext = new ElseStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SimpleCParser.RULE_elseStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(SimpleCParser.T__14);
			this.state = 202;
			this.statement();
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
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SimpleCParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(SimpleCParser.T__15);
			this.state = 205;
			this.match(SimpleCParser.T__4);
			this.state = 206;
			this.expression(0);
			this.state = 207;
			this.match(SimpleCParser.T__5);
			this.state = 208;
			this.match(SimpleCParser.T__6);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__16) {
				{
				{
				this.state = 209;
				this.caseStatement();
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__18) {
				{
				this.state = 215;
				this.defaultCase();
				}
			}

			this.state = 218;
			this.match(SimpleCParser.T__7);
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
	public caseStatement(): CaseStatementContext {
		let _localctx: CaseStatementContext = new CaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SimpleCParser.RULE_caseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(SimpleCParser.T__16);
			this.state = 221;
			this.constantValue();
			this.state = 222;
			this.match(SimpleCParser.T__17);
			this.state = 223;
			this.statements();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__19) {
				{
				this.state = 224;
				this.breakStatement();
				}
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
	public defaultCase(): DefaultCaseContext {
		let _localctx: DefaultCaseContext = new DefaultCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SimpleCParser.RULE_defaultCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(SimpleCParser.T__18);
			this.state = 228;
			this.match(SimpleCParser.T__17);
			this.state = 229;
			this.statements();
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
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SimpleCParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(SimpleCParser.T__19);
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SimpleCParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(SimpleCParser.T__20);
			this.state = 234;
			this.match(SimpleCParser.T__4);
			this.state = 235;
			this.forInitial();
			this.state = 236;
			this.match(SimpleCParser.T__3);
			this.state = 237;
			this.expression(0);
			this.state = 238;
			this.match(SimpleCParser.T__3);
			this.state = 239;
			this.assignment();
			this.state = 240;
			this.match(SimpleCParser.T__5);
			this.state = 241;
			this.statement();
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
	public forInitial(): ForInitialContext {
		let _localctx: ForInitialContext = new ForInitialContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SimpleCParser.RULE_forInitial);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleCParser.T__8:
			case SimpleCParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 243;
				this.variableDeclaration();
				}
				break;
			case SimpleCParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 244;
				this.assignment();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SimpleCParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(SimpleCParser.T__21);
			this.state = 248;
			this.match(SimpleCParser.T__4);
			this.state = 249;
			this.expression(0);
			this.state = 250;
			this.match(SimpleCParser.T__5);
			this.state = 251;
			this.statement();
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
	public printfStatement(): PrintfStatementContext {
		let _localctx: PrintfStatementContext = new PrintfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SimpleCParser.RULE_printfStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(SimpleCParser.T__22);
			this.state = 254;
			this.match(SimpleCParser.T__4);
			this.state = 255;
			this.match(SimpleCParser.String);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__1) {
				{
				{
				this.state = 256;
				this.match(SimpleCParser.T__1);
				this.state = 257;
				this.expression(0);
				}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 263;
			this.match(SimpleCParser.T__5);
			this.state = 264;
			this.match(SimpleCParser.T__3);
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
	public idList(): IdListContext {
		let _localctx: IdListContext = new IdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SimpleCParser.RULE_idList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(SimpleCParser.Identifier);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__1) {
				{
				{
				this.state = 267;
				this.match(SimpleCParser.T__1);
				this.state = 268;
				this.match(SimpleCParser.Identifier);
				}
				}
				this.state = 273;
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
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SimpleCParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.expression(0);
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__1) {
				{
				{
				this.state = 275;
				this.match(SimpleCParser.T__1);
				this.state = 276;
				this.expression(0);
				}
				}
				this.state = 281;
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, SimpleCParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 283;
				(_localctx as UnaryExpressionContext)._op = this.match(SimpleCParser.T__23);
				this.state = 284;
				this.expression(15);
				}
				break;

			case 2:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 285;
				(_localctx as UnaryExpressionContext)._op = this.match(SimpleCParser.T__24);
				this.state = 286;
				this.expression(14);
				}
				break;

			case 3:
				{
				_localctx = new ConstantExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 287;
				this.constantValue();
				}
				break;

			case 4:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 288;
				this.functionCall();
				}
				break;

			case 5:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 289;
				this.list();
				this.state = 291;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 290;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new VariableExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 293;
				this.match(SimpleCParser.Identifier);
				this.state = 295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 294;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 7:
				{
				_localctx = new BracketExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 297;
				this.match(SimpleCParser.T__4);
				this.state = 298;
				this.expression(0);
				this.state = 299;
				this.match(SimpleCParser.T__5);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 332;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 330;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 303;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 304;
						(_localctx as BinaryExpressionContext)._op = this.match(SimpleCParser.T__25);
						this.state = 305;
						this.expression(13);
						}
						break;

					case 2:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 306;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 307;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__26) | (1 << SimpleCParser.T__27) | (1 << SimpleCParser.T__28))) !== 0))) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 308;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 309;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 310;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SimpleCParser.T__23 || _la === SimpleCParser.T__29)) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 311;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 312;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 313;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (SimpleCParser.T__30 - 31)) | (1 << (SimpleCParser.T__31 - 31)) | (1 << (SimpleCParser.T__32 - 31)) | (1 << (SimpleCParser.T__33 - 31)))) !== 0))) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 314;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 315;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 316;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SimpleCParser.T__34 || _la === SimpleCParser.T__35)) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 317;
						this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 318;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 319;
						(_localctx as BinaryExpressionContext)._op = this.match(SimpleCParser.T__36);
						this.state = 320;
						this.expression(9);
						}
						break;

					case 7:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 321;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 322;
						(_localctx as BinaryExpressionContext)._op = this.match(SimpleCParser.T__37);
						this.state = 323;
						this.expression(8);
						}
						break;

					case 8:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 324;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 325;
						(_localctx as TernaryExpressionContext)._op = this.match(SimpleCParser.T__38);
						this.state = 326;
						this.expression(0);
						this.state = 327;
						this.match(SimpleCParser.T__17);
						this.state = 328;
						this.expression(7);
						}
						break;
					}
					}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantValue(): ConstantValueContext {
		let _localctx: ConstantValueContext = new ConstantValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SimpleCParser.RULE_constantValue);
		try {
			this.state = 342;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleCParser.Number:
				_localctx = new NumberExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.match(SimpleCParser.Number);
				}
				break;
			case SimpleCParser.Bool:
				_localctx = new BoolExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 336;
				this.match(SimpleCParser.Bool);
				}
				break;
			case SimpleCParser.T__39:
				_localctx = new NullExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 337;
				this.match(SimpleCParser.T__39);
				}
				break;
			case SimpleCParser.String:
				_localctx = new StringExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 338;
				this.match(SimpleCParser.String);
				this.state = 340;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 339;
					this.indexes();
					}
					break;
				}
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SimpleCParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(SimpleCParser.T__11);
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__4) | (1 << SimpleCParser.T__11) | (1 << SimpleCParser.T__23) | (1 << SimpleCParser.T__24))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleCParser.T__39 - 40)) | (1 << (SimpleCParser.Bool - 40)) | (1 << (SimpleCParser.Number - 40)) | (1 << (SimpleCParser.Identifier - 40)) | (1 << (SimpleCParser.String - 40)))) !== 0)) {
				{
				this.state = 345;
				this.exprList();
				}
			}

			this.state = 348;
			this.match(SimpleCParser.T__12);
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
	public indexes(): IndexesContext {
		let _localctx: IndexesContext = new IndexesContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SimpleCParser.RULE_indexes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 350;
					this.match(SimpleCParser.T__11);
					this.state = 351;
					this.expression(0);
					this.state = 352;
					this.match(SimpleCParser.T__12);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 30:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u0169\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03K\n\x03\f\x03\x0E\x03N\v\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04T\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\\\n\x06\f\x06\x0E\x06_\v\x06\x03\x07" +
		"\x07\x07b\n\x07\f\x07\x0E\x07e\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07k\n\x07\x03\b\x03\b\x03\b\x03\b\x05\bq\n\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x88\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\v\x07\v\x8F\n\v\f\v\x0E\v\x92\v\v\x03\f\x03\f\x05\f\x96\n\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\xA2\n\x0F\f\x0F\x0E\x0F\xA5\v\x0F\x03\x10\x03\x10\x07\x10\xA9\n\x10\f" +
		"\x10\x0E\x10\xAC\v\x10\x03\x10\x03\x10\x05\x10\xB0\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\xB8\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x05\x13\xC0\n\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xCA\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\xD5" +
		"\n\x16\f\x16\x0E\x16\xD8\v\x16\x03\x16\x05\x16\xDB\n\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xE4\n\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\xF8" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0105\n\x1D\f\x1D\x0E\x1D\u0108\v\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0110\n\x1E\f" +
		"\x1E\x0E\x1E\u0113\v\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0118\n\x1F\f" +
		"\x1F\x0E\x1F\u011B\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 " +
		"\x05 \u0126\n \x03 \x03 \x05 \u012A\n \x03 \x03 \x03 \x03 \x05 \u0130" +
		"\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07" +
		" \u014D\n \f \x0E \u0150\v \x03!\x03!\x03!\x03!\x03!\x05!\u0157\n!\x05" +
		"!\u0159\n!\x03\"\x03\"\x05\"\u015D\n\"\x03\"\x03\"\x03#\x03#\x03#\x03" +
		"#\x06#\u0165\n#\r#\x0E#\u0166\x03#\x02\x02\x03>$\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02\x02\x07\x03\x02\v\f\x03" +
		"\x02\x1D\x1F\x04\x02\x1A\x1A  \x03\x02!$\x03\x02%&\x02\u017A\x02F\x03" +
		"\x02\x02\x02\x04L\x03\x02\x02\x02\x06S\x03\x02\x02\x02\bU\x03\x02\x02" +
		"\x02\nX\x03\x02\x02\x02\fc\x03\x02\x02\x02\x0El\x03\x02\x02\x02\x10\x87" +
		"\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\x90\x03\x02\x02\x02\x16\x93" +
		"\x03\x02\x02\x02\x18\x99\x03\x02\x02\x02\x1A\x9C\x03\x02\x02\x02\x1C\x9E" +
		"\x03\x02\x02\x02\x1E\xA6\x03\x02\x02\x02 \xB1\x03\x02\x02\x02\"\xB5\x03" +
		"\x02\x02\x02$\xBC\x03\x02\x02\x02&\xC3\x03\x02\x02\x02(\xCB\x03\x02\x02" +
		"\x02*\xCE\x03\x02\x02\x02,\xDE\x03\x02\x02\x02.\xE5\x03\x02\x02\x020\xE9" +
		"\x03\x02\x02\x022\xEB\x03\x02\x02\x024\xF7\x03\x02\x02\x026\xF9\x03\x02" +
		"\x02\x028\xFF\x03\x02\x02\x02:\u010C\x03\x02\x02\x02<\u0114\x03\x02\x02" +
		"\x02>\u012F\x03\x02\x02\x02@\u0158\x03\x02\x02\x02B\u015A\x03\x02\x02" +
		"\x02D\u0164\x03\x02\x02\x02FG\x05\x04\x03\x02GH\x07\x02\x02\x03H\x03\x03" +
		"\x02\x02\x02IK\x05\x0E\b\x02JI\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03" +
		"\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02NL\x03\x02\x02\x02OP\x05" +
		"\x14\v\x02P\x05\x03\x02\x02\x02QT\x05\x1A\x0E\x02RT\x07\x03\x02\x02SQ" +
		"\x03\x02\x02\x02SR\x03\x02\x02\x02T\x07\x03\x02\x02\x02UV\x05\x1A\x0E" +
		"\x02VW\x07-\x02\x02W\t\x03\x02\x02\x02X]\x05\b\x05\x02YZ\x07\x04\x02\x02" +
		"Z\\\x05\b\x05\x02[Y\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02" +
		"]^\x03\x02\x02\x02^\v\x03\x02\x02\x02_]\x03\x02\x02\x02`b\x05\x10\t\x02" +
		"a`\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02" +
		"dj\x03\x02\x02\x02ec\x03\x02\x02\x02fg\x07\x05\x02\x02gh\x05> \x02hi\x07" +
		"\x06\x02\x02ik\x03\x02\x02\x02jf\x03\x02\x02\x02jk\x03\x02\x02\x02k\r" +
		"\x03\x02\x02\x02lm\x05\x06\x04\x02mn\x07-\x02\x02np\x07\x07\x02\x02oq" +
		"\x05\n\x06\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02r" +
		"s\x07\b\x02\x02st\x07\t\x02\x02tu\x05\f\x07\x02uv\x07\n\x02\x02v\x0F\x03" +
		"\x02\x02\x02wx\x05\x18\r\x02xy\x07\x06\x02\x02y\x88\x03\x02\x02\x02z{" +
		"\x05\"\x12\x02{|\x07\x06\x02\x02|\x88\x03\x02\x02\x02}~\x05$\x13\x02~" +
		"\x7F\x07\x06\x02\x02\x7F\x88\x03\x02\x02\x02\x80\x88\x05&\x14\x02\x81" +
		"\x88\x05*\x16\x02\x82\x88\x052\x1A\x02\x83\x88\x056\x1C\x02\x84\x88\x05" +
		"\x12\n\x02\x85\x88\x058\x1D\x02\x86\x88\x05\x16\f\x02\x87w\x03\x02\x02" +
		"\x02\x87z\x03\x02\x02\x02\x87}\x03\x02\x02\x02\x87\x80\x03\x02\x02\x02" +
		"\x87\x81\x03\x02\x02\x02\x87\x82\x03\x02\x02\x02\x87\x83\x03\x02\x02\x02" +
		"\x87\x84\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x86\x03\x02\x02\x02" +
		"\x88\x11\x03\x02\x02\x02\x89\x8A\x07\t\x02\x02\x8A\x8B\x05\x14\v\x02\x8B" +
		"\x8C\x07\n\x02\x02\x8C\x13\x03\x02\x02\x02\x8D\x8F\x05\x10\t\x02\x8E\x8D" +
		"\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91" +
		"\x03\x02\x02\x02\x91\x15\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x95" +
		"\x07\x05\x02\x02\x94\x96\x05> \x02\x95\x94\x03\x02\x02\x02\x95\x96\x03" +
		"\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07\x06\x02\x02\x98\x17\x03" +
		"\x02\x02\x02\x99\x9A\x05\x1A\x0E\x02\x9A\x9B\x05\x1C\x0F\x02\x9B\x19\x03" +
		"\x02\x02\x02\x9C\x9D\t\x02\x02\x02\x9D\x1B\x03\x02\x02\x02\x9E\xA3\x05" +
		"\x1E\x10\x02\x9F\xA0\x07\x04\x02\x02\xA0\xA2\x05\x1E\x10\x02\xA1\x9F\x03" +
		"\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03" +
		"\x02\x02\x02\xA4\x1D\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xAA\x07" +
		"-\x02\x02\xA7\xA9\x05 \x11\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02" +
		"\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAF\x03\x02" +
		"\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x07\r\x02\x02\xAE\xB0\x05> \x02" +
		"\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\x1F\x03\x02\x02\x02" +
		"\xB1\xB2\x07\x0E\x02\x02\xB2\xB3\x07,\x02\x02\xB3\xB4\x07\x0F\x02\x02" +
		"\xB4!\x03\x02\x02\x02\xB5\xB7\x07-\x02\x02\xB6\xB8\x05D#\x02\xB7\xB6\x03" +
		"\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x07" +
		"\r\x02\x02\xBA\xBB\x05> \x02\xBB#\x03\x02\x02\x02\xBC\xBD\x07-\x02\x02" +
		"\xBD\xBF\x07\x07\x02\x02\xBE\xC0\x05<\x1F\x02\xBF\xBE\x03\x02\x02\x02" +
		"\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x07\b\x02\x02" +
		"\xC2%\x03\x02\x02\x02\xC3\xC4\x07\x10\x02\x02\xC4\xC5\x07\x07\x02\x02" +
		"\xC5\xC6\x05> \x02\xC6\xC7\x07\b\x02\x02\xC7\xC9\x05\x10\t\x02\xC8\xCA" +
		"\x05(\x15\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\'\x03" +
		"\x02\x02\x02\xCB\xCC\x07\x11\x02\x02\xCC\xCD\x05\x10\t\x02\xCD)\x03\x02" +
		"\x02\x02\xCE\xCF\x07\x12\x02\x02\xCF\xD0\x07\x07\x02\x02\xD0\xD1\x05>" +
		" \x02\xD1\xD2\x07\b\x02\x02\xD2\xD6\x07\t\x02\x02\xD3\xD5\x05,\x17\x02" +
		"\xD4\xD3\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02" +
		"\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02" +
		"\xD9\xDB\x05.\x18\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02" +
		"\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x07\n\x02\x02\xDD+\x03\x02\x02\x02\xDE" +
		"\xDF\x07\x13\x02\x02\xDF\xE0\x05@!\x02\xE0\xE1\x07\x14\x02\x02\xE1\xE3" +
		"\x05\x14\v\x02\xE2\xE4\x050\x19\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03" +
		"\x02\x02\x02\xE4-\x03\x02\x02\x02\xE5\xE6\x07\x15\x02\x02\xE6\xE7\x07" +
		"\x14\x02\x02\xE7\xE8\x05\x14\v\x02\xE8/\x03\x02\x02\x02\xE9\xEA\x07\x16" +
		"\x02\x02\xEA1\x03\x02\x02\x02\xEB\xEC\x07\x17\x02\x02\xEC\xED\x07\x07" +
		"\x02\x02\xED\xEE\x054\x1B\x02\xEE\xEF\x07\x06\x02\x02\xEF\xF0\x05> \x02" +
		"\xF0\xF1\x07\x06\x02\x02\xF1\xF2\x05\"\x12\x02\xF2\xF3\x07\b\x02\x02\xF3" +
		"\xF4\x05\x10\t\x02\xF43\x03\x02\x02\x02\xF5\xF8\x05\x18\r\x02\xF6\xF8" +
		"\x05\"\x12\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF85\x03" +
		"\x02\x02\x02\xF9\xFA\x07\x18\x02\x02\xFA\xFB\x07\x07\x02\x02\xFB\xFC\x05" +
		"> \x02\xFC\xFD\x07\b\x02\x02\xFD\xFE\x05\x10\t\x02\xFE7\x03\x02\x02\x02" +
		"\xFF\u0100\x07\x19\x02\x02\u0100\u0101\x07\x07\x02\x02\u0101\u0106\x07" +
		".\x02\x02\u0102\u0103\x07\x04\x02\x02\u0103\u0105\x05> \x02\u0104\u0102" +
		"\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02" +
		"\u0106\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\u0106\x03" +
		"\x02\x02\x02\u0109\u010A\x07\b\x02\x02\u010A\u010B\x07\x06\x02\x02\u010B" +
		"9\x03\x02\x02\x02\u010C\u0111\x07-\x02\x02\u010D\u010E\x07\x04\x02\x02" +
		"\u010E\u0110\x07-\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0113\x03" +
		"\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112" +
		";\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0119\x05> \x02\u0115" +
		"\u0116\x07\x04\x02\x02\u0116\u0118\x05> \x02\u0117\u0115\x03\x02\x02\x02" +
		"\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03" +
		"\x02\x02\x02\u011A=\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C" +
		"\u011D\b \x01\x02\u011D\u011E\x07\x1A\x02\x02\u011E\u0130\x05> \x11\u011F" +
		"\u0120\x07\x1B\x02\x02\u0120\u0130\x05> \x10\u0121\u0130\x05@!\x02\u0122" +
		"\u0130\x05$\x13\x02\u0123\u0125\x05B\"\x02\u0124\u0126\x05D#\x02\u0125" +
		"\u0124\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0130\x03\x02" +
		"\x02\x02\u0127\u0129\x07-\x02\x02\u0128\u012A\x05D#\x02\u0129\u0128\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u0130\x03\x02\x02\x02\u012B" +
		"\u012C\x07\x07\x02\x02\u012C\u012D\x05> \x02\u012D\u012E\x07\b\x02\x02" +
		"\u012E\u0130\x03\x02\x02\x02\u012F\u011C\x03\x02\x02\x02\u012F\u011F\x03" +
		"\x02\x02\x02\u012F\u0121\x03\x02\x02\x02\u012F\u0122\x03\x02\x02\x02\u012F" +
		"\u0123\x03\x02\x02\x02\u012F\u0127\x03\x02\x02\x02\u012F\u012B\x03\x02" +
		"\x02\x02\u0130\u014E\x03\x02\x02\x02\u0131\u0132\f\x0F\x02\x02\u0132\u0133" +
		"\x07\x1C\x02\x02\u0133\u014D\x05> \x0F\u0134\u0135\f\x0E\x02\x02\u0135" +
		"\u0136\t\x03\x02\x02\u0136\u014D\x05> \x0F\u0137\u0138\f\r\x02\x02\u0138" +
		"\u0139\t\x04\x02\x02\u0139\u014D\x05> \x0E\u013A\u013B\f\f\x02\x02\u013B" +
		"\u013C\t\x05\x02\x02\u013C\u014D\x05> \r\u013D\u013E\f\v\x02\x02\u013E" +
		"\u013F\t\x06\x02\x02\u013F\u014D\x05> \f\u0140\u0141\f\n\x02\x02\u0141" +
		"\u0142\x07\'\x02\x02\u0142\u014D\x05> \v\u0143\u0144\f\t\x02\x02\u0144" +
		"\u0145\x07(\x02\x02\u0145\u014D\x05> \n\u0146\u0147\f\b\x02\x02\u0147" +
		"\u0148\x07)\x02\x02\u0148\u0149\x05> \x02\u0149\u014A\x07\x14\x02\x02" +
		"\u014A\u014B\x05> \t\u014B\u014D\x03\x02\x02\x02\u014C\u0131\x03\x02\x02" +
		"\x02\u014C\u0134\x03\x02\x02\x02\u014C\u0137\x03\x02\x02\x02\u014C\u013A" +
		"\x03\x02\x02\x02\u014C\u013D\x03\x02\x02\x02\u014C\u0140\x03\x02\x02\x02" +
		"\u014C\u0143\x03\x02\x02\x02\u014C\u0146\x03\x02\x02\x02\u014D\u0150\x03" +
		"\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F" +
		"?\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0159\x07,\x02\x02" +
		"\u0152\u0159\x07+\x02\x02\u0153\u0159\x07*\x02\x02\u0154\u0156\x07.\x02" +
		"\x02\u0155\u0157\x05D#\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03" +
		"\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u0151\x03\x02\x02\x02\u0158" +
		"\u0152\x03\x02\x02\x02\u0158\u0153\x03\x02\x02\x02\u0158\u0154\x03\x02" +
		"\x02\x02\u0159A\x03\x02\x02\x02\u015A\u015C\x07\x0E\x02\x02\u015B\u015D" +
		"\x05<\x1F\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
		"\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x07\x0F\x02\x02\u015FC\x03\x02" +
		"\x02\x02\u0160\u0161\x07\x0E\x02\x02\u0161\u0162\x05> \x02\u0162\u0163" +
		"\x07\x0F\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u0160\x03\x02\x02\x02" +
		"\u0165\u0166\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03" +
		"\x02\x02\x02\u0167E\x03\x02\x02\x02!LS]cjp\x87\x90\x95\xA3\xAA\xAF\xB7" +
		"\xBF\xC9\xD6\xDA\xE3\xF7\u0106\u0111\u0119\u0125\u0129\u012F\u014C\u014E" +
		"\u0156\u0158\u015C\u0166";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleCParser.__ATN) {
			SimpleCParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleCParser._serializedATN));
		}

		return SimpleCParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public repl(): ReplContext {
		return this.getRuleContext(0, ReplContext);
	}
	public EOF(): TerminalNode { return this.getToken(SimpleCParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_program; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public functionDecl(): FunctionDeclContext[];
	public functionDecl(i: number): FunctionDeclContext;
	public functionDecl(i?: number): FunctionDeclContext | FunctionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclContext);
		} else {
			return this.getRuleContext(i, FunctionDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_repl; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterRepl) {
			listener.enterRepl(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitRepl) {
			listener.exitRepl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitRepl) {
			return visitor.visitRepl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunTypeContext extends ParserRuleContext {
	public varType(): VarTypeContext | undefined {
		return this.tryGetRuleContext(0, VarTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_funType; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterFunType) {
			listener.enterFunType(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitFunType) {
			listener.exitFunType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitFunType) {
			return visitor.visitFunType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(SimpleCParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_param; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_paramList; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnBlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_returnBlock; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterReturnBlock) {
			listener.enterReturnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitReturnBlock) {
			listener.exitReturnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitReturnBlock) {
			return visitor.visitReturnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public funType(): FunTypeContext {
		return this.getRuleContext(0, FunTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(SimpleCParser.Identifier, 0); }
	public returnBlock(): ReturnBlockContext {
		return this.getRuleContext(0, ReturnBlockContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public printfStatement(): PrintfStatementContext | undefined {
		return this.tryGetRuleContext(0, PrintfStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_statement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_statements; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext {
		return this.getRuleContext(0, InitDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_varType; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterVarType) {
			listener.enterVarType(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitVarType) {
			listener.exitVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitVarType) {
			return visitor.visitVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext[];
	public initDeclarator(i: number): InitDeclaratorContext;
	public initDeclarator(i?: number): InitDeclaratorContext | InitDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitDeclaratorContext);
		} else {
			return this.getRuleContext(i, InitDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitInitDeclaratorList) {
			return visitor.visitInitDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleCParser.Identifier, 0); }
	public dimensions(): DimensionsContext[];
	public dimensions(i: number): DimensionsContext;
	public dimensions(i?: number): DimensionsContext | DimensionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimensionsContext);
		} else {
			return this.getRuleContext(i, DimensionsContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensionsContext extends ParserRuleContext {
	public Number(): TerminalNode { return this.getToken(SimpleCParser.Number, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_dimensions; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterDimensions) {
			listener.enterDimensions(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitDimensions) {
			listener.exitDimensions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitDimensions) {
			return visitor.visitDimensions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleCParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_assignment; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleCParser.Identifier, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public elseStat(): ElseStatContext | undefined {
		return this.tryGetRuleContext(0, ElseStatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_elseStat; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterElseStat) {
			listener.enterElseStat(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitElseStat) {
			listener.exitElseStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitElseStat) {
			return visitor.visitElseStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public caseStatement(): CaseStatementContext[];
	public caseStatement(i: number): CaseStatementContext;
	public caseStatement(i?: number): CaseStatementContext | CaseStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseStatementContext);
		} else {
			return this.getRuleContext(i, CaseStatementContext);
		}
	}
	public defaultCase(): DefaultCaseContext | undefined {
		return this.tryGetRuleContext(0, DefaultCaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseStatementContext extends ParserRuleContext {
	public constantValue(): ConstantValueContext {
		return this.getRuleContext(0, ConstantValueContext);
	}
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_caseStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterCaseStatement) {
			listener.enterCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitCaseStatement) {
			listener.exitCaseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitCaseStatement) {
			return visitor.visitCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultCaseContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_defaultCase; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterDefaultCase) {
			listener.enterDefaultCase(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitDefaultCase) {
			listener.exitDefaultCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitDefaultCase) {
			return visitor.visitDefaultCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public forInitial(): ForInitialContext {
		return this.getRuleContext(0, ForInitialContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitialContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_forInitial; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterForInitial) {
			listener.enterForInitial(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitForInitial) {
			listener.exitForInitial(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitForInitial) {
			return visitor.visitForInitial(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintfStatementContext extends ParserRuleContext {
	public String(): TerminalNode { return this.getToken(SimpleCParser.String, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_printfStatement; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterPrintfStatement) {
			listener.enterPrintfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitPrintfStatement) {
			listener.exitPrintfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitPrintfStatement) {
			return visitor.visitPrintfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleCParser.Identifier);
		} else {
			return this.getToken(SimpleCParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_idList; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterIdList) {
			listener.enterIdList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitIdList) {
			listener.exitIdList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitIdList) {
			return visitor.visitIdList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_exprList; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterBinaryExpression) {
			listener.enterBinaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitBinaryExpression) {
			listener.exitBinaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitBinaryExpression) {
			return visitor.visitBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantExpressionContext extends ExpressionContext {
	public constantValue(): ConstantValueContext {
		return this.getRuleContext(0, ConstantValueContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListExpressionContext extends ExpressionContext {
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterListExpression) {
			listener.enterListExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitListExpression) {
			listener.exitListExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitListExpression) {
			return visitor.visitListExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleCParser.Identifier, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterVariableExpression) {
			listener.enterVariableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitVariableExpression) {
			listener.exitVariableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitVariableExpression) {
			return visitor.visitVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterBracketExpression) {
			listener.enterBracketExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitBracketExpression) {
			listener.exitBracketExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitBracketExpression) {
			return visitor.visitBracketExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_constantValue; }
	public copyFrom(ctx: ConstantValueContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberExpressionContext extends ConstantValueContext {
	public Number(): TerminalNode { return this.getToken(SimpleCParser.Number, 0); }
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterNumberExpression) {
			listener.enterNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitNumberExpression) {
			listener.exitNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolExpressionContext extends ConstantValueContext {
	public Bool(): TerminalNode { return this.getToken(SimpleCParser.Bool, 0); }
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterBoolExpression) {
			listener.enterBoolExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitBoolExpression) {
			listener.exitBoolExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitBoolExpression) {
			return visitor.visitBoolExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullExpressionContext extends ConstantValueContext {
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterNullExpression) {
			listener.enterNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitNullExpression) {
			listener.exitNullExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitNullExpression) {
			return visitor.visitNullExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ConstantValueContext {
	public String(): TerminalNode { return this.getToken(SimpleCParser.String, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_list; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexesContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleCParser.RULE_indexes; }
	// @Override
	public enterRule(listener: SimpleCListener): void {
		if (listener.enterIndexes) {
			listener.enterIndexes(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleCListener): void {
		if (listener.exitIndexes) {
			listener.exitIndexes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleCVisitor<Result>): Result {
		if (visitor.visitIndexes) {
			return visitor.visitIndexes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


