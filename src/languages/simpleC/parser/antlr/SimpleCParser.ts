// Generated from c:\code\dkriscv\src\languages\simpleC\SimpleC.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly RULE_functionDecl = 3;
	public static readonly RULE_param = 4;
	public static readonly RULE_paramList = 5;
	public static readonly RULE_returnBlock = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_compoundStatement = 8;
	public static readonly RULE_statements = 9;
	public static readonly RULE_returnStatement = 10;
	public static readonly RULE_varType = 11;
	public static readonly RULE_variableDeclaration = 12;
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
		"program", "repl", "funType", "functionDecl", "param", "paramList", "returnBlock", 
		"statement", "compoundStatement", "statements", "returnStatement", "varType", 
		"variableDeclaration", "initDeclaratorList", "initDeclarator", "dimensions", 
		"assignment", "functionCall", "ifStatement", "elseStat", "switchStatement", 
		"caseStatement", "defaultCase", "breakStatement", "forStatement", "forInitial", 
		"whileStatement", "printfStatement", "idList", "exprList", "expression", 
		"constantValue", "list", "indexes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'('", "')'", "'{'", "'}'", "','", "'return'", "';'", 
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimpleCParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.funType();
			this.state = 84;
			this.match(SimpleCParser.Identifier);
			this.state = 85;
			this.match(SimpleCParser.T__1);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__8 || _la === SimpleCParser.T__9) {
				{
				this.state = 86;
				this.paramList();
				}
			}

			this.state = 89;
			this.match(SimpleCParser.T__2);
			this.state = 90;
			this.match(SimpleCParser.T__3);
			this.state = 91;
			this.returnBlock();
			this.state = 92;
			this.match(SimpleCParser.T__4);
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
		this.enterRule(_localctx, 8, SimpleCParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.varType();
			this.state = 95;
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
		this.enterRule(_localctx, 10, SimpleCParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.param();
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__5) {
				{
				{
				this.state = 98;
				this.match(SimpleCParser.T__5);
				this.state = 99;
				this.param();
				}
				}
				this.state = 104;
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
		this.enterRule(_localctx, 12, SimpleCParser.RULE_returnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 105;
					this.statement();
					}
					}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__6) {
				{
				this.state = 111;
				this.match(SimpleCParser.T__6);
				this.state = 112;
				this.expression(0);
				this.state = 113;
				this.match(SimpleCParser.T__7);
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
				this.match(SimpleCParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.assignment();
				this.state = 121;
				this.match(SimpleCParser.T__7);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.functionCall();
				this.state = 124;
				this.match(SimpleCParser.T__7);
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
			this.match(SimpleCParser.T__3);
			this.state = 136;
			this.statements();
			this.state = 137;
			this.match(SimpleCParser.T__4);
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__1) | (1 << SimpleCParser.T__3) | (1 << SimpleCParser.T__6) | (1 << SimpleCParser.T__8) | (1 << SimpleCParser.T__9) | (1 << SimpleCParser.T__13) | (1 << SimpleCParser.T__15) | (1 << SimpleCParser.T__20) | (1 << SimpleCParser.T__21) | (1 << SimpleCParser.T__22) | (1 << SimpleCParser.T__23) | (1 << SimpleCParser.T__24))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleCParser.T__39 - 40)) | (1 << (SimpleCParser.Bool - 40)) | (1 << (SimpleCParser.Number - 40)) | (1 << (SimpleCParser.Identifier - 40)) | (1 << (SimpleCParser.String - 40)))) !== 0)) {
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
			this.match(SimpleCParser.T__6);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__1) | (1 << SimpleCParser.T__23) | (1 << SimpleCParser.T__24))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleCParser.T__39 - 40)) | (1 << (SimpleCParser.Bool - 40)) | (1 << (SimpleCParser.Number - 40)) | (1 << (SimpleCParser.Identifier - 40)) | (1 << (SimpleCParser.String - 40)))) !== 0)) {
				{
				this.state = 146;
				this.expression(0);
				}
			}

			this.state = 149;
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
	public varType(): VarTypeContext {
		let _localctx: VarTypeContext = new VarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SimpleCParser.RULE_varType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimpleCParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.varType();
			this.state = 154;
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
			while (_la === SimpleCParser.T__5) {
				{
				{
				this.state = 157;
				this.match(SimpleCParser.T__5);
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.expression(0);
			this.state = 180;
			this.match(SimpleCParser.T__10);
			this.state = 181;
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
			this.state = 183;
			this.match(SimpleCParser.Identifier);
			this.state = 184;
			this.match(SimpleCParser.T__1);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__1) | (1 << SimpleCParser.T__23) | (1 << SimpleCParser.T__24))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleCParser.T__39 - 40)) | (1 << (SimpleCParser.Bool - 40)) | (1 << (SimpleCParser.Number - 40)) | (1 << (SimpleCParser.Identifier - 40)) | (1 << (SimpleCParser.String - 40)))) !== 0)) {
				{
				this.state = 185;
				this.exprList();
				}
			}

			this.state = 188;
			this.match(SimpleCParser.T__2);
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
			this.state = 190;
			this.match(SimpleCParser.T__13);
			this.state = 191;
			this.match(SimpleCParser.T__1);
			this.state = 192;
			this.expression(0);
			this.state = 193;
			this.match(SimpleCParser.T__2);
			this.state = 194;
			this.statement();
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 195;
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
			this.state = 198;
			this.match(SimpleCParser.T__14);
			this.state = 199;
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
			this.state = 201;
			this.match(SimpleCParser.T__15);
			this.state = 202;
			this.match(SimpleCParser.T__1);
			this.state = 203;
			this.expression(0);
			this.state = 204;
			this.match(SimpleCParser.T__2);
			this.state = 205;
			this.match(SimpleCParser.T__3);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__16) {
				{
				{
				this.state = 206;
				this.caseStatement();
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__18) {
				{
				this.state = 212;
				this.defaultCase();
				}
			}

			this.state = 215;
			this.match(SimpleCParser.T__4);
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
			this.state = 217;
			this.match(SimpleCParser.T__16);
			this.state = 218;
			this.constantValue();
			this.state = 219;
			this.match(SimpleCParser.T__17);
			this.state = 220;
			this.statements();
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleCParser.T__19) {
				{
				this.state = 221;
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
			this.state = 224;
			this.match(SimpleCParser.T__18);
			this.state = 225;
			this.match(SimpleCParser.T__17);
			this.state = 226;
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
			this.state = 228;
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
			this.state = 230;
			this.match(SimpleCParser.T__20);
			this.state = 231;
			this.match(SimpleCParser.T__1);
			this.state = 232;
			this.forInitial();
			this.state = 233;
			this.match(SimpleCParser.T__7);
			this.state = 234;
			this.expression(0);
			this.state = 235;
			this.match(SimpleCParser.T__7);
			this.state = 236;
			this.assignment();
			this.state = 237;
			this.match(SimpleCParser.T__2);
			this.state = 238;
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
			this.state = 242;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleCParser.T__8:
			case SimpleCParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.variableDeclaration();
				}
				break;
			case SimpleCParser.T__1:
			case SimpleCParser.T__23:
			case SimpleCParser.T__24:
			case SimpleCParser.T__39:
			case SimpleCParser.Bool:
			case SimpleCParser.Number:
			case SimpleCParser.Identifier:
			case SimpleCParser.String:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
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
			this.state = 244;
			this.match(SimpleCParser.T__21);
			this.state = 245;
			this.match(SimpleCParser.T__1);
			this.state = 246;
			this.expression(0);
			this.state = 247;
			this.match(SimpleCParser.T__2);
			this.state = 248;
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
			this.state = 250;
			this.match(SimpleCParser.T__22);
			this.state = 251;
			this.match(SimpleCParser.T__1);
			this.state = 252;
			this.match(SimpleCParser.String);
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__5) {
				{
				{
				this.state = 253;
				this.match(SimpleCParser.T__5);
				this.state = 254;
				this.expression(0);
				}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 260;
			this.match(SimpleCParser.T__2);
			this.state = 261;
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
	public idList(): IdListContext {
		let _localctx: IdListContext = new IdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SimpleCParser.RULE_idList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(SimpleCParser.Identifier);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__5) {
				{
				{
				this.state = 264;
				this.match(SimpleCParser.T__5);
				this.state = 265;
				this.match(SimpleCParser.Identifier);
				}
				}
				this.state = 270;
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
			this.state = 271;
			this.expression(0);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleCParser.T__5) {
				{
				{
				this.state = 272;
				this.match(SimpleCParser.T__5);
				this.state = 273;
				this.expression(0);
				}
				}
				this.state = 278;
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
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 280;
				(_localctx as UnaryExpressionContext)._op = this.match(SimpleCParser.T__23);
				this.state = 281;
				this.expression(14);
				}
				break;

			case 2:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 282;
				(_localctx as UnaryExpressionContext)._op = this.match(SimpleCParser.T__24);
				this.state = 283;
				this.expression(13);
				}
				break;

			case 3:
				{
				_localctx = new ConstantExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				this.constantValue();
				}
				break;

			case 4:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 285;
				this.functionCall();
				}
				break;

			case 5:
				{
				_localctx = new VariableExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 286;
				this.match(SimpleCParser.Identifier);
				this.state = 288;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 287;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new BracketExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 290;
				this.match(SimpleCParser.T__1);
				this.state = 291;
				this.expression(0);
				this.state = 292;
				this.match(SimpleCParser.T__2);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 325;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 323;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 296;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 297;
						(_localctx as BinaryExpressionContext)._op = this.match(SimpleCParser.T__25);
						this.state = 298;
						this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 299;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 300;
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
						this.state = 301;
						this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 302;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 303;
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
						this.state = 304;
						this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 305;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 306;
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
						this.state = 307;
						this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 308;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 309;
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
						this.state = 310;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 311;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 312;
						(_localctx as BinaryExpressionContext)._op = this.match(SimpleCParser.T__36);
						this.state = 313;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 314;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 315;
						(_localctx as BinaryExpressionContext)._op = this.match(SimpleCParser.T__37);
						this.state = 316;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleCParser.RULE_expression);
						this.state = 317;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 318;
						(_localctx as TernaryExpressionContext)._op = this.match(SimpleCParser.T__38);
						this.state = 319;
						this.expression(0);
						this.state = 320;
						this.match(SimpleCParser.T__17);
						this.state = 321;
						this.expression(6);
						}
						break;
					}
					}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
			this.state = 335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleCParser.Number:
				_localctx = new NumberExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 328;
				this.match(SimpleCParser.Number);
				}
				break;
			case SimpleCParser.Bool:
				_localctx = new BoolExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
				this.match(SimpleCParser.Bool);
				}
				break;
			case SimpleCParser.T__39:
				_localctx = new NullExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 330;
				this.match(SimpleCParser.T__39);
				}
				break;
			case SimpleCParser.String:
				_localctx = new StringExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 331;
				this.match(SimpleCParser.String);
				this.state = 333;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 332;
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
			this.state = 337;
			this.match(SimpleCParser.T__11);
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleCParser.T__1) | (1 << SimpleCParser.T__23) | (1 << SimpleCParser.T__24))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SimpleCParser.T__39 - 40)) | (1 << (SimpleCParser.Bool - 40)) | (1 << (SimpleCParser.Number - 40)) | (1 << (SimpleCParser.Identifier - 40)) | (1 << (SimpleCParser.String - 40)))) !== 0)) {
				{
				this.state = 338;
				this.exprList();
				}
			}

			this.state = 341;
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
			this.state = 347;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 343;
					this.match(SimpleCParser.T__11);
					this.state = 344;
					this.expression(0);
					this.state = 345;
					this.match(SimpleCParser.T__12);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 349;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u0162\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03K\n\x03\f\x03\x0E\x03N\v\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04T\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05Z\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07g\n\x07\f\x07\x0E\x07" +
		"j\v\x07\x03\b\x07\bm\n\b\f\b\x0E\bp\v\b\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"v\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x88\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\v\x07\v\x8F\n\v\f\v\x0E\v\x92\v\v\x03\f\x03\f\x05\f\x96\n\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07" +
		"\x0F\xA2\n\x0F\f\x0F\x0E\x0F\xA5\v\x0F\x03\x10\x03\x10\x07\x10\xA9\n\x10" +
		"\f\x10\x0E\x10\xAC\v\x10\x03\x10\x03\x10\x05\x10\xB0\n\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\xBD\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\xC7\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\xD2\n\x16\f\x16\x0E\x16\xD5" +
		"\v\x16\x03\x16\x05\x16\xD8\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\xE1\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\xF5\n\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x07\x1D\u0102\n\x1D\f\x1D\x0E\x1D\u0105\v\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u010D\n\x1E\f\x1E\x0E\x1E\u0110\v\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0115\n\x1F\f\x1F\x0E\x1F\u0118\v\x1F" +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0123\n \x03 \x03 " +
		"\x03 \x03 \x05 \u0129\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x07 \u0146\n \f \x0E \u0149\v \x03!\x03!\x03!\x03" +
		"!\x03!\x05!\u0150\n!\x05!\u0152\n!\x03\"\x03\"\x05\"\u0156\n\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x06#\u015E\n#\r#\x0E#\u015F\x03#\x02\x02\x03>$" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"\x02\x07\x03\x02\v\f\x03\x02\x1D\x1F\x04\x02\x1A\x1A  \x03\x02!$\x03\x02" +
		"%&\x02\u0170\x02F\x03\x02\x02\x02\x04L\x03\x02\x02\x02\x06S\x03\x02\x02" +
		"\x02\bU\x03\x02\x02\x02\n`\x03\x02\x02\x02\fc\x03\x02\x02\x02\x0En\x03" +
		"\x02\x02\x02\x10\x87\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\x90\x03" +
		"\x02\x02\x02\x16\x93\x03\x02\x02\x02\x18\x99\x03\x02\x02\x02\x1A\x9B\x03" +
		"\x02\x02\x02\x1C\x9E\x03\x02\x02\x02\x1E\xA6\x03\x02\x02\x02 \xB1\x03" +
		"\x02\x02\x02\"\xB5\x03\x02\x02\x02$\xB9\x03\x02\x02\x02&\xC0\x03\x02\x02" +
		"\x02(\xC8\x03\x02\x02\x02*\xCB\x03\x02\x02\x02,\xDB\x03\x02\x02\x02.\xE2" +
		"\x03\x02\x02\x020\xE6\x03\x02\x02\x022\xE8\x03\x02\x02\x024\xF4\x03\x02" +
		"\x02\x026\xF6\x03\x02\x02\x028\xFC\x03\x02\x02\x02:\u0109\x03\x02\x02" +
		"\x02<\u0111\x03\x02\x02\x02>\u0128\x03\x02\x02\x02@\u0151\x03\x02\x02" +
		"\x02B\u0153\x03\x02\x02\x02D\u015D\x03\x02\x02\x02FG\x05\x04\x03\x02G" +
		"H\x07\x02\x02\x03H\x03\x03\x02\x02\x02IK\x05\b\x05\x02JI\x03\x02\x02\x02" +
		"KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02" +
		"NL\x03\x02\x02\x02OP\x05\x14\v\x02P\x05\x03\x02\x02\x02QT\x05\x18\r\x02" +
		"RT\x07\x03\x02\x02SQ\x03\x02\x02\x02SR\x03\x02\x02\x02T\x07\x03\x02\x02" +
		"\x02UV\x05\x06\x04\x02VW\x07-\x02\x02WY\x07\x04\x02\x02XZ\x05\f\x07\x02" +
		"YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x07\x05\x02" +
		"\x02\\]\x07\x06\x02\x02]^\x05\x0E\b\x02^_\x07\x07\x02\x02_\t\x03\x02\x02" +
		"\x02`a\x05\x18\r\x02ab\x07-\x02\x02b\v\x03\x02\x02\x02ch\x05\n\x06\x02" +
		"de\x07\b\x02\x02eg\x05\n\x06\x02fd\x03\x02\x02\x02gj\x03\x02\x02\x02h" +
		"f\x03\x02\x02\x02hi\x03\x02\x02\x02i\r\x03\x02\x02\x02jh\x03\x02\x02\x02" +
		"km\x05\x10\t\x02lk\x03\x02\x02\x02mp\x03\x02\x02\x02nl\x03\x02\x02\x02" +
		"no\x03\x02\x02\x02ou\x03\x02\x02\x02pn\x03\x02\x02\x02qr\x07\t\x02\x02" +
		"rs\x05> \x02st\x07\n\x02\x02tv\x03\x02\x02\x02uq\x03\x02\x02\x02uv\x03" +
		"\x02\x02\x02v\x0F\x03\x02\x02\x02wx\x05\x1A\x0E\x02xy\x07\n\x02\x02y\x88" +
		"\x03\x02\x02\x02z{\x05\"\x12\x02{|\x07\n\x02\x02|\x88\x03\x02\x02\x02" +
		"}~\x05$\x13\x02~\x7F\x07\n\x02\x02\x7F\x88\x03\x02\x02\x02\x80\x88\x05" +
		"&\x14\x02\x81\x88\x05*\x16\x02\x82\x88\x052\x1A\x02\x83\x88\x056\x1C\x02" +
		"\x84\x88\x05\x12\n\x02\x85\x88\x058\x1D\x02\x86\x88\x05\x16\f\x02\x87" +
		"w\x03\x02\x02\x02\x87z\x03\x02\x02\x02\x87}\x03\x02\x02\x02\x87\x80\x03" +
		"\x02\x02\x02\x87\x81\x03\x02\x02\x02\x87\x82\x03\x02\x02\x02\x87\x83\x03" +
		"\x02\x02\x02\x87\x84\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x86\x03" +
		"\x02\x02\x02\x88\x11\x03\x02\x02\x02\x89\x8A\x07\x06\x02\x02\x8A\x8B\x05" +
		"\x14\v\x02\x8B\x8C\x07\x07\x02\x02\x8C\x13\x03\x02\x02\x02\x8D\x8F\x05" +
		"\x10\t\x02\x8E\x8D\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03" +
		"\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x15\x03\x02\x02\x02\x92\x90\x03" +
		"\x02\x02\x02\x93\x95\x07\t\x02\x02\x94\x96\x05> \x02\x95\x94\x03\x02\x02" +
		"\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07\n\x02" +
		"\x02\x98\x17\x03\x02\x02\x02\x99\x9A\t\x02\x02\x02\x9A\x19\x03\x02\x02" +
		"\x02\x9B\x9C\x05\x18\r\x02\x9C\x9D\x05\x1C\x0F\x02\x9D\x1B\x03\x02\x02" +
		"\x02\x9E\xA3\x05\x1E\x10\x02\x9F\xA0\x07\b\x02\x02\xA0\xA2\x05\x1E\x10" +
		"\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02" +
		"\x02\xA3\xA4\x03\x02\x02\x02\xA4\x1D\x03\x02\x02\x02\xA5\xA3\x03\x02\x02" +
		"\x02\xA6\xAA\x07-\x02\x02\xA7\xA9\x05 \x11\x02\xA8\xA7\x03\x02\x02\x02" +
		"\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02" +
		"\xAB\xAF\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x07\r\x02\x02" +
		"\xAE\xB0\x05> \x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0" +
		"\x1F\x03\x02\x02\x02\xB1\xB2\x07\x0E\x02\x02\xB2\xB3\x07,\x02\x02\xB3" +
		"\xB4\x07\x0F\x02\x02\xB4!\x03\x02\x02\x02\xB5\xB6\x05> \x02\xB6\xB7\x07" +
		"\r\x02\x02\xB7\xB8\x05> \x02\xB8#\x03\x02\x02\x02\xB9\xBA\x07-\x02\x02" +
		"\xBA\xBC\x07\x04\x02\x02\xBB\xBD\x05<\x1F\x02\xBC\xBB\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x07\x05\x02\x02" +
		"\xBF%\x03\x02\x02\x02\xC0\xC1\x07\x10\x02\x02\xC1\xC2\x07\x04\x02\x02" +
		"\xC2\xC3\x05> \x02\xC3\xC4\x07\x05\x02\x02\xC4\xC6\x05\x10\t\x02\xC5\xC7" +
		"\x05(\x15\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\'\x03" +
		"\x02\x02\x02\xC8\xC9\x07\x11\x02\x02\xC9\xCA\x05\x10\t\x02\xCA)\x03\x02" +
		"\x02\x02\xCB\xCC\x07\x12\x02\x02\xCC\xCD\x07\x04\x02\x02\xCD\xCE\x05>" +
		" \x02\xCE\xCF\x07\x05\x02\x02\xCF\xD3\x07\x06\x02\x02\xD0\xD2\x05,\x17" +
		"\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02" +
		"\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02" +
		"\x02\xD6\xD8\x05.\x18\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02" +
		"\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x07\x07\x02\x02\xDA+\x03\x02\x02" +
		"\x02\xDB\xDC\x07\x13\x02\x02\xDC\xDD\x05@!\x02\xDD\xDE\x07\x14\x02\x02" +
		"\xDE\xE0\x05\x14\v\x02\xDF\xE1\x050\x19\x02\xE0\xDF\x03\x02\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1-\x03\x02\x02\x02\xE2\xE3\x07\x15\x02\x02\xE3" +
		"\xE4\x07\x14\x02\x02\xE4\xE5\x05\x14\v\x02\xE5/\x03\x02\x02\x02\xE6\xE7" +
		"\x07\x16\x02\x02\xE71\x03\x02\x02\x02\xE8\xE9\x07\x17\x02\x02\xE9\xEA" +
		"\x07\x04\x02\x02\xEA\xEB\x054\x1B\x02\xEB\xEC\x07\n\x02\x02\xEC\xED\x05" +
		"> \x02\xED\xEE\x07\n\x02\x02\xEE\xEF\x05\"\x12\x02\xEF\xF0\x07\x05\x02" +
		"\x02\xF0\xF1\x05\x10\t\x02\xF13\x03\x02\x02\x02\xF2\xF5\x05\x1A\x0E\x02" +
		"\xF3\xF5\x05\"\x12\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF3\x03\x02\x02\x02" +
		"\xF55\x03\x02\x02\x02\xF6\xF7\x07\x18\x02\x02\xF7\xF8\x07\x04\x02\x02" +
		"\xF8\xF9\x05> \x02\xF9\xFA\x07\x05\x02\x02\xFA\xFB\x05\x10\t\x02\xFB7" +
		"\x03\x02\x02\x02\xFC\xFD\x07\x19\x02\x02\xFD\xFE\x07\x04\x02\x02\xFE\u0103" +
		"\x07.\x02\x02\xFF\u0100\x07\b\x02\x02\u0100\u0102\x05> \x02\u0101\xFF" +
		"\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02" +
		"\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03" +
		"\x02\x02\x02\u0106\u0107\x07\x05\x02\x02\u0107\u0108\x07\n\x02\x02\u0108" +
		"9\x03\x02\x02\x02\u0109\u010E\x07-\x02\x02\u010A\u010B\x07\b\x02\x02\u010B" +
		"\u010D\x07-\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u0110\x03\x02\x02" +
		"\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F;\x03" +
		"\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0116\x05> \x02\u0112\u0113" +
		"\x07\b\x02\x02\u0113\u0115\x05> \x02\u0114\u0112\x03\x02\x02\x02\u0115" +
		"\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02" +
		"\x02\x02\u0117=\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A" +
		"\b \x01\x02\u011A\u011B\x07\x1A\x02\x02\u011B\u0129\x05> \x10\u011C\u011D" +
		"\x07\x1B\x02\x02\u011D\u0129\x05> \x0F\u011E\u0129\x05@!\x02\u011F\u0129" +
		"\x05$\x13\x02\u0120\u0122\x07-\x02\x02\u0121\u0123\x05D#\x02\u0122\u0121" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0129\x03\x02\x02\x02" +
		"\u0124\u0125\x07\x04\x02\x02\u0125\u0126\x05> \x02\u0126\u0127\x07\x05" +
		"\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128\u0119\x03\x02\x02\x02\u0128" +
		"\u011C\x03\x02\x02\x02\u0128\u011E\x03\x02\x02\x02\u0128\u011F\x03\x02" +
		"\x02\x02\u0128\u0120\x03\x02\x02\x02\u0128\u0124\x03\x02\x02\x02\u0129" +
		"\u0147\x03\x02\x02\x02\u012A\u012B\f\x0E\x02\x02\u012B\u012C\x07\x1C\x02" +
		"\x02\u012C\u0146\x05> \x0E\u012D\u012E\f\r\x02\x02\u012E\u012F\t\x03\x02" +
		"\x02\u012F\u0146\x05> \x0E\u0130\u0131\f\f\x02\x02\u0131\u0132\t\x04\x02" +
		"\x02\u0132\u0146\x05> \r\u0133\u0134\f\v\x02\x02\u0134\u0135\t\x05\x02" +
		"\x02\u0135\u0146\x05> \f\u0136\u0137\f\n\x02\x02\u0137\u0138\t\x06\x02" +
		"\x02\u0138\u0146\x05> \v\u0139\u013A\f\t\x02\x02\u013A\u013B\x07\'\x02" +
		"\x02\u013B\u0146\x05> \n\u013C\u013D\f\b\x02\x02\u013D\u013E\x07(\x02" +
		"\x02\u013E\u0146\x05> \t\u013F\u0140\f\x07\x02\x02\u0140\u0141\x07)\x02" +
		"\x02\u0141\u0142\x05> \x02\u0142\u0143\x07\x14\x02\x02\u0143\u0144\x05" +
		"> \b\u0144\u0146\x03\x02\x02\x02\u0145\u012A\x03\x02\x02\x02\u0145\u012D" +
		"\x03\x02\x02\x02\u0145\u0130\x03\x02\x02\x02\u0145\u0133\x03\x02\x02\x02" +
		"\u0145\u0136\x03\x02\x02\x02\u0145\u0139\x03\x02\x02\x02\u0145\u013C\x03" +
		"\x02\x02\x02\u0145\u013F\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147" +
		"\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148?\x03\x02\x02" +
		"\x02\u0149\u0147\x03\x02\x02\x02\u014A\u0152\x07,\x02\x02\u014B\u0152" +
		"\x07+\x02\x02\u014C\u0152\x07*\x02\x02\u014D\u014F\x07.\x02\x02\u014E" +
		"\u0150\x05D#\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02" +
		"\u0150\u0152\x03\x02\x02\x02\u0151\u014A\x03\x02\x02\x02\u0151\u014B\x03" +
		"\x02\x02\x02\u0151\u014C\x03\x02\x02\x02\u0151\u014D\x03\x02\x02\x02\u0152" +
		"A\x03\x02\x02\x02\u0153\u0155\x07\x0E\x02\x02\u0154\u0156\x05<\x1F\x02" +
		"\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03" +
		"\x02\x02\x02\u0157\u0158\x07\x0F\x02\x02\u0158C\x03\x02\x02\x02\u0159" +
		"\u015A\x07\x0E\x02\x02\u015A\u015B\x05> \x02\u015B\u015C\x07\x0F\x02\x02" +
		"\u015C\u015E\x03\x02\x02\x02\u015D\u0159\x03\x02\x02\x02\u015E\u015F\x03" +
		"\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"E\x03\x02\x02\x02\x1FLSYhnu\x87\x90\x95\xA3\xAA\xAF\xBC\xC6\xD3\xD7\xE0" +
		"\xF4\u0103\u010E\u0116\u0122\u0128\u0145\u0147\u014F\u0151\u0155\u015F";
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


