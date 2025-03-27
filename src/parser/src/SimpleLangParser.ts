// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SimpleLangListener } from "./SimpleLangListener.js";
import { SimpleLangVisitor } from "./SimpleLangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SimpleLangParser extends antlr.Parser {
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
    public static readonly INT = 24;
    public static readonly BOOL = 25;
    public static readonly TYPE = 26;
    public static readonly IDENTIFIER = 27;
    public static readonly WS = 28;
    public static readonly RULE_prog = 0;
    public static readonly RULE_mutable = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_emptyStatement = 3;
    public static readonly RULE_letStatement = 4;
    public static readonly RULE_expressionStatement = 5;
    public static readonly RULE_expression = 6;
    public static readonly RULE_expressionWithoutBlock = 7;
    public static readonly RULE_primary = 8;
    public static readonly RULE_unop = 9;
    public static readonly RULE_binopTerminals = 10;
    public static readonly RULE_binop = 11;
    public static readonly RULE_logicalOr = 12;
    public static readonly RULE_logicalAnd = 13;
    public static readonly RULE_comparison = 14;
    public static readonly RULE_additionSubstraction = 15;
    public static readonly RULE_multiplicationDivision = 16;
    public static readonly RULE_primitive = 17;
    public static readonly RULE_accessIdentifier = 18;
    public static readonly RULE_bracket = 19;
    public static readonly RULE_expressionWithBlock = 20;
    public static readonly RULE_blockExpression = 21;
    public static readonly RULE_blockBody = 22;

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'-'", "'!'", "'||'",
        "'&&'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'+'", "'*'",
        "'/'", "'%'", "'('", "')'", "'{'", "'}'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null,
        null, null, "INT", "BOOL", "TYPE", "IDENTIFIER", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "mutable", "statement", "emptyStatement", "letStatement",
        "expressionStatement", "expression", "expressionWithoutBlock", "primary",
        "unop", "binopTerminals", "binop", "logicalOr", "logicalAnd", "comparison",
        "additionSubstraction", "multiplicationDivision", "primitive", "accessIdentifier",
        "bracket", "expressionWithBlock", "blockExpression", "blockBody",
    ];

    public get grammarFileName(): string { return "SimpleLang.g4"; }
    public get literalNames(): (string | null)[] { return SimpleLangParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangParser.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangParser.ruleNames; }
    public get serializedATN(): number[] { return SimpleLangParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SimpleLangParser._ATN, SimpleLangParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SimpleLangParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 49;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 189792460) !== 0)) {
                    {
                        {
                            this.state = 46;
                            this.statement();
                        }
                    }
                    this.state = 51;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 52;
                this.match(SimpleLangParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mutable(): MutableContext {
        let localContext = new MutableContext(this.context, this.state);
        this.enterRule(localContext, 2, SimpleLangParser.RULE_mutable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 54;
                this.match(SimpleLangParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 4, SimpleLangParser.RULE_statement);
        try {
            this.state = 59;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SimpleLangParser.T__1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 56;
                        this.emptyStatement();
                    }
                    break;
                case SimpleLangParser.T__2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 57;
                        this.letStatement();
                    }
                    break;
                case SimpleLangParser.T__5:
                case SimpleLangParser.T__6:
                case SimpleLangParser.T__19:
                case SimpleLangParser.T__21:
                case SimpleLangParser.INT:
                case SimpleLangParser.BOOL:
                case SimpleLangParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 58;
                        this.expressionStatement();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emptyStatement(): EmptyStatementContext {
        let localContext = new EmptyStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, SimpleLangParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 61;
                this.match(SimpleLangParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letStatement(): LetStatementContext {
        let localContext = new LetStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, SimpleLangParser.RULE_letStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 63;
                this.match(SimpleLangParser.T__2);
                this.state = 65;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                        this.state = 64;
                        this.mutable();
                    }
                }

                this.state = 67;
                this.match(SimpleLangParser.IDENTIFIER);
                this.state = 70;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 4) {
                    {
                        this.state = 68;
                        this.match(SimpleLangParser.T__3);
                        this.state = 69;
                        this.match(SimpleLangParser.TYPE);
                    }
                }

                this.state = 74;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                        this.state = 72;
                        this.match(SimpleLangParser.T__4);
                        this.state = 73;
                        this.expression();
                    }
                }

                this.state = 76;
                this.match(SimpleLangParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, SimpleLangParser.RULE_expressionStatement);
        try {
            this.state = 85;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 78;
                        this.expressionWithoutBlock();
                        this.state = 79;
                        this.match(SimpleLangParser.T__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 81;
                        this.expressionWithBlock();
                        this.state = 83;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)) {
                            case 1:
                                {
                                    this.state = 82;
                                    this.match(SimpleLangParser.T__1);
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 12, SimpleLangParser.RULE_expression);
        try {
            this.state = 89;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 87;
                        this.expressionWithoutBlock();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 88;
                        this.expressionWithBlock();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext {
        let localContext = new ExpressionWithoutBlockContext(this.context, this.state);
        this.enterRule(localContext, 14, SimpleLangParser.RULE_expressionWithoutBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 91;
                this.binop();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 16, SimpleLangParser.RULE_primary);
        try {
            this.state = 97;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SimpleLangParser.INT:
                case SimpleLangParser.BOOL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 93;
                        this.primitive();
                    }
                    break;
                case SimpleLangParser.T__19:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 94;
                        this.bracket();
                    }
                    break;
                case SimpleLangParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 95;
                        this.accessIdentifier();
                    }
                    break;
                case SimpleLangParser.T__5:
                case SimpleLangParser.T__6:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 96;
                        this.unop();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unop(): UnopContext {
        let localContext = new UnopContext(this.context, this.state);
        this.enterRule(localContext, 18, SimpleLangParser.RULE_unop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 99;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if (!(_la === 6 || _la === 7)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 100;
                this.binopTerminals();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public binopTerminals(): BinopTerminalsContext {
        let localContext = new BinopTerminalsContext(this.context, this.state);
        this.enterRule(localContext, 20, SimpleLangParser.RULE_binopTerminals);
        try {
            this.state = 104;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SimpleLangParser.T__5:
                case SimpleLangParser.T__6:
                case SimpleLangParser.T__19:
                case SimpleLangParser.INT:
                case SimpleLangParser.BOOL:
                case SimpleLangParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 102;
                        this.primary();
                    }
                    break;
                case SimpleLangParser.T__21:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 103;
                        this.expressionWithBlock();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public binop(): BinopContext {
        let localContext = new BinopContext(this.context, this.state);
        this.enterRule(localContext, 22, SimpleLangParser.RULE_binop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 106;
                this.logicalOr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logicalOr(): LogicalOrContext {
        let localContext = new LogicalOrContext(this.context, this.state);
        this.enterRule(localContext, 24, SimpleLangParser.RULE_logicalOr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 108;
                this.logicalAnd();
                this.state = 113;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 8) {
                    {
                        {
                            this.state = 109;
                            this.match(SimpleLangParser.T__7);
                            this.state = 110;
                            this.logicalAnd();
                        }
                    }
                    this.state = 115;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logicalAnd(): LogicalAndContext {
        let localContext = new LogicalAndContext(this.context, this.state);
        this.enterRule(localContext, 26, SimpleLangParser.RULE_logicalAnd);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 116;
                this.comparison();
                this.state = 121;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 9) {
                    {
                        {
                            this.state = 117;
                            this.match(SimpleLangParser.T__8);
                            this.state = 118;
                            this.comparison();
                        }
                    }
                    this.state = 123;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparison(): ComparisonContext {
        let localContext = new ComparisonContext(this.context, this.state);
        this.enterRule(localContext, 28, SimpleLangParser.RULE_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 124;
                this.additionSubstraction();
                this.state = 127;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 64512) !== 0)) {
                    {
                        this.state = 125;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 64512) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 126;
                        this.additionSubstraction();
                    }
                }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public additionSubstraction(): AdditionSubstractionContext {
        let localContext = new AdditionSubstractionContext(this.context, this.state);
        this.enterRule(localContext, 30, SimpleLangParser.RULE_additionSubstraction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 129;
                this.multiplicationDivision();
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 6 || _la === 16) {
                    {
                        {
                            this.state = 130;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 6 || _la === 16)) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 131;
                            this.multiplicationDivision();
                        }
                    }
                    this.state = 136;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiplicationDivision(): MultiplicationDivisionContext {
        let localContext = new MultiplicationDivisionContext(this.context, this.state);
        this.enterRule(localContext, 32, SimpleLangParser.RULE_multiplicationDivision);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 137;
                this.binopTerminals();
                this.state = 142;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 917504) !== 0)) {
                    {
                        {
                            this.state = 138;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 917504) !== 0))) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 139;
                            this.binopTerminals();
                        }
                    }
                    this.state = 144;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitive(): PrimitiveContext {
        let localContext = new PrimitiveContext(this.context, this.state);
        this.enterRule(localContext, 34, SimpleLangParser.RULE_primitive);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 145;
                _la = this.tokenStream.LA(1);
                if (!(_la === 24 || _la === 25)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public accessIdentifier(): AccessIdentifierContext {
        let localContext = new AccessIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 36, SimpleLangParser.RULE_accessIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 147;
                this.match(SimpleLangParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bracket(): BracketContext {
        let localContext = new BracketContext(this.context, this.state);
        this.enterRule(localContext, 38, SimpleLangParser.RULE_bracket);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 149;
                this.match(SimpleLangParser.T__19);
                this.state = 150;
                this.expression();
                this.state = 151;
                this.match(SimpleLangParser.T__20);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionWithBlock(): ExpressionWithBlockContext {
        let localContext = new ExpressionWithBlockContext(this.context, this.state);
        this.enterRule(localContext, 40, SimpleLangParser.RULE_expressionWithBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 153;
                this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockExpression(): BlockExpressionContext {
        let localContext = new BlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 42, SimpleLangParser.RULE_blockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 155;
                this.match(SimpleLangParser.T__21);
                this.state = 156;
                this.blockBody();
                this.state = 157;
                this.match(SimpleLangParser.T__22);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockBody(): BlockBodyContext {
        let localContext = new BlockBodyContext(this.context, this.state);
        this.enterRule(localContext, 44, SimpleLangParser.RULE_blockBody);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 162;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 159;
                                this.statement();
                            }
                        }
                    }
                    this.state = 164;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                }
                this.state = 166;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 189792448) !== 0)) {
                    {
                        this.state = 165;
                        this.expressionWithoutBlock();
                    }
                }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4, 1, 28, 169, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
        6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
        2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
        7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 1, 0, 5, 0, 48, 8, 0, 10, 0, 12, 0, 51, 9, 0, 1, 0, 1, 0,
        1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 3, 2, 60, 8, 2, 1, 3, 1, 3, 1, 4, 1, 4, 3, 4, 66, 8, 4, 1, 4, 1,
        4, 1, 4, 3, 4, 71, 8, 4, 1, 4, 1, 4, 3, 4, 75, 8, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5,
        3, 5, 84, 8, 5, 3, 5, 86, 8, 5, 1, 6, 1, 6, 3, 6, 90, 8, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8,
        3, 8, 98, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 3, 10, 105, 8, 10, 1, 11, 1, 11, 1, 12, 1,
        12, 1, 12, 5, 12, 112, 8, 12, 10, 12, 12, 12, 115, 9, 12, 1, 13, 1, 13, 1, 13, 5, 13, 120,
        8, 13, 10, 13, 12, 13, 123, 9, 13, 1, 14, 1, 14, 1, 14, 3, 14, 128, 8, 14, 1, 15, 1, 15,
        1, 15, 5, 15, 133, 8, 15, 10, 15, 12, 15, 136, 9, 15, 1, 16, 1, 16, 1, 16, 5, 16, 141,
        8, 16, 10, 16, 12, 16, 144, 9, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19,
        1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 22, 5, 22, 161, 8, 22, 10, 22, 12, 22, 164,
        9, 22, 1, 22, 3, 22, 167, 8, 22, 1, 22, 0, 0, 23, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
        22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 0, 5, 1, 0, 6, 7, 1, 0, 10, 15, 2, 0, 6,
        6, 16, 16, 1, 0, 17, 19, 1, 0, 24, 25, 165, 0, 49, 1, 0, 0, 0, 2, 54, 1, 0, 0, 0, 4, 59, 1,
        0, 0, 0, 6, 61, 1, 0, 0, 0, 8, 63, 1, 0, 0, 0, 10, 85, 1, 0, 0, 0, 12, 89, 1, 0, 0, 0, 14, 91,
        1, 0, 0, 0, 16, 97, 1, 0, 0, 0, 18, 99, 1, 0, 0, 0, 20, 104, 1, 0, 0, 0, 22, 106, 1, 0, 0,
        0, 24, 108, 1, 0, 0, 0, 26, 116, 1, 0, 0, 0, 28, 124, 1, 0, 0, 0, 30, 129, 1, 0, 0, 0, 32,
        137, 1, 0, 0, 0, 34, 145, 1, 0, 0, 0, 36, 147, 1, 0, 0, 0, 38, 149, 1, 0, 0, 0, 40, 153,
        1, 0, 0, 0, 42, 155, 1, 0, 0, 0, 44, 162, 1, 0, 0, 0, 46, 48, 3, 4, 2, 0, 47, 46, 1, 0, 0,
        0, 48, 51, 1, 0, 0, 0, 49, 47, 1, 0, 0, 0, 49, 50, 1, 0, 0, 0, 50, 52, 1, 0, 0, 0, 51, 49,
        1, 0, 0, 0, 52, 53, 5, 0, 0, 1, 53, 1, 1, 0, 0, 0, 54, 55, 5, 1, 0, 0, 55, 3, 1, 0, 0, 0, 56,
        60, 3, 6, 3, 0, 57, 60, 3, 8, 4, 0, 58, 60, 3, 10, 5, 0, 59, 56, 1, 0, 0, 0, 59, 57, 1, 0,
        0, 0, 59, 58, 1, 0, 0, 0, 60, 5, 1, 0, 0, 0, 61, 62, 5, 2, 0, 0, 62, 7, 1, 0, 0, 0, 63, 65,
        5, 3, 0, 0, 64, 66, 3, 2, 1, 0, 65, 64, 1, 0, 0, 0, 65, 66, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0,
        67, 70, 5, 27, 0, 0, 68, 69, 5, 4, 0, 0, 69, 71, 5, 26, 0, 0, 70, 68, 1, 0, 0, 0, 70, 71,
        1, 0, 0, 0, 71, 74, 1, 0, 0, 0, 72, 73, 5, 5, 0, 0, 73, 75, 3, 12, 6, 0, 74, 72, 1, 0, 0, 0,
        74, 75, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77, 5, 2, 0, 0, 77, 9, 1, 0, 0, 0, 78, 79, 3, 14,
        7, 0, 79, 80, 5, 2, 0, 0, 80, 86, 1, 0, 0, 0, 81, 83, 3, 40, 20, 0, 82, 84, 5, 2, 0, 0, 83,
        82, 1, 0, 0, 0, 83, 84, 1, 0, 0, 0, 84, 86, 1, 0, 0, 0, 85, 78, 1, 0, 0, 0, 85, 81, 1, 0, 0,
        0, 86, 11, 1, 0, 0, 0, 87, 90, 3, 14, 7, 0, 88, 90, 3, 40, 20, 0, 89, 87, 1, 0, 0, 0, 89,
        88, 1, 0, 0, 0, 90, 13, 1, 0, 0, 0, 91, 92, 3, 22, 11, 0, 92, 15, 1, 0, 0, 0, 93, 98, 3, 34,
        17, 0, 94, 98, 3, 38, 19, 0, 95, 98, 3, 36, 18, 0, 96, 98, 3, 18, 9, 0, 97, 93, 1, 0, 0,
        0, 97, 94, 1, 0, 0, 0, 97, 95, 1, 0, 0, 0, 97, 96, 1, 0, 0, 0, 98, 17, 1, 0, 0, 0, 99, 100,
        7, 0, 0, 0, 100, 101, 3, 20, 10, 0, 101, 19, 1, 0, 0, 0, 102, 105, 3, 16, 8, 0, 103, 105,
        3, 40, 20, 0, 104, 102, 1, 0, 0, 0, 104, 103, 1, 0, 0, 0, 105, 21, 1, 0, 0, 0, 106, 107,
        3, 24, 12, 0, 107, 23, 1, 0, 0, 0, 108, 113, 3, 26, 13, 0, 109, 110, 5, 8, 0, 0, 110, 112,
        3, 26, 13, 0, 111, 109, 1, 0, 0, 0, 112, 115, 1, 0, 0, 0, 113, 111, 1, 0, 0, 0, 113, 114,
        1, 0, 0, 0, 114, 25, 1, 0, 0, 0, 115, 113, 1, 0, 0, 0, 116, 121, 3, 28, 14, 0, 117, 118,
        5, 9, 0, 0, 118, 120, 3, 28, 14, 0, 119, 117, 1, 0, 0, 0, 120, 123, 1, 0, 0, 0, 121, 119,
        1, 0, 0, 0, 121, 122, 1, 0, 0, 0, 122, 27, 1, 0, 0, 0, 123, 121, 1, 0, 0, 0, 124, 127, 3,
        30, 15, 0, 125, 126, 7, 1, 0, 0, 126, 128, 3, 30, 15, 0, 127, 125, 1, 0, 0, 0, 127, 128,
        1, 0, 0, 0, 128, 29, 1, 0, 0, 0, 129, 134, 3, 32, 16, 0, 130, 131, 7, 2, 0, 0, 131, 133,
        3, 32, 16, 0, 132, 130, 1, 0, 0, 0, 133, 136, 1, 0, 0, 0, 134, 132, 1, 0, 0, 0, 134, 135,
        1, 0, 0, 0, 135, 31, 1, 0, 0, 0, 136, 134, 1, 0, 0, 0, 137, 142, 3, 20, 10, 0, 138, 139,
        7, 3, 0, 0, 139, 141, 3, 20, 10, 0, 140, 138, 1, 0, 0, 0, 141, 144, 1, 0, 0, 0, 142, 140,
        1, 0, 0, 0, 142, 143, 1, 0, 0, 0, 143, 33, 1, 0, 0, 0, 144, 142, 1, 0, 0, 0, 145, 146, 7,
        4, 0, 0, 146, 35, 1, 0, 0, 0, 147, 148, 5, 27, 0, 0, 148, 37, 1, 0, 0, 0, 149, 150, 5, 20,
        0, 0, 150, 151, 3, 12, 6, 0, 151, 152, 5, 21, 0, 0, 152, 39, 1, 0, 0, 0, 153, 154, 3, 42,
        21, 0, 154, 41, 1, 0, 0, 0, 155, 156, 5, 22, 0, 0, 156, 157, 3, 44, 22, 0, 157, 158, 5,
        23, 0, 0, 158, 43, 1, 0, 0, 0, 159, 161, 3, 4, 2, 0, 160, 159, 1, 0, 0, 0, 161, 164, 1,
        0, 0, 0, 162, 160, 1, 0, 0, 0, 162, 163, 1, 0, 0, 0, 163, 166, 1, 0, 0, 0, 164, 162, 1,
        0, 0, 0, 165, 167, 3, 14, 7, 0, 166, 165, 1, 0, 0, 0, 166, 167, 1, 0, 0, 0, 167, 45, 1,
        0, 0, 0, 17, 49, 59, 65, 70, 74, 83, 85, 89, 97, 104, 113, 121, 127, 134, 142, 162,
        166
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangParser.__ATN) {
            SimpleLangParser.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangParser._serializedATN);
        }

        return SimpleLangParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangParser.literalNames, SimpleLangParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangParser.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangParser._ATN.decisionToState.map((ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index));
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_prog;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MutableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_mutable;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterMutable) {
            listener.enterMutable(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitMutable) {
            listener.exitMutable(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMutable) {
            return visitor.visitMutable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public emptyStatement(): EmptyStatementContext | null {
        return this.getRuleContext(0, EmptyStatementContext);
    }
    public letStatement(): LetStatementContext | null {
        return this.getRuleContext(0, LetStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_statement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_emptyStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public mutable(): MutableContext | null {
        return this.getRuleContext(0, MutableContext);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.TYPE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_letStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterLetStatement) {
            listener.enterLetStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitLetStatement) {
            listener.exitLetStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLetStatement) {
            return visitor.visitLetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionWithoutBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public binop(): BinopContext {
        return this.getRuleContext(0, BinopContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionWithoutBlock;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpressionWithoutBlock) {
            listener.enterExpressionWithoutBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpressionWithoutBlock) {
            listener.exitExpressionWithoutBlock(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithoutBlock) {
            return visitor.visitExpressionWithoutBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primitive(): PrimitiveContext | null {
        return this.getRuleContext(0, PrimitiveContext);
    }
    public bracket(): BracketContext | null {
        return this.getRuleContext(0, BracketContext);
    }
    public accessIdentifier(): AccessIdentifierContext | null {
        return this.getRuleContext(0, AccessIdentifierContext);
    }
    public unop(): UnopContext | null {
        return this.getRuleContext(0, UnopContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primary;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnopContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public binopTerminals(): BinopTerminalsContext {
        return this.getRuleContext(0, BinopTerminalsContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_unop;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterUnop) {
            listener.enterUnop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitUnop) {
            listener.exitUnop(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitUnop) {
            return visitor.visitUnop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BinopTerminalsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary(): PrimaryContext | null {
        return this.getRuleContext(0, PrimaryContext);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_binopTerminals;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterBinopTerminals) {
            listener.enterBinopTerminals(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBinopTerminals) {
            listener.exitBinopTerminals(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBinopTerminals) {
            return visitor.visitBinopTerminals(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BinopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalOr(): LogicalOrContext {
        return this.getRuleContext(0, LogicalOrContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_binop;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterBinop) {
            listener.enterBinop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBinop) {
            listener.exitBinop(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBinop) {
            return visitor.visitBinop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalOrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalAnd(): LogicalAndContext[];
    public logicalAnd(i: number): LogicalAndContext | null;
    public logicalAnd(i?: number): LogicalAndContext[] | LogicalAndContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalAndContext);
        }

        return this.getRuleContext(i, LogicalAndContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_logicalOr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterLogicalOr) {
            listener.enterLogicalOr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitLogicalOr) {
            listener.exitLogicalOr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLogicalOr) {
            return visitor.visitLogicalOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalAndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public comparison(): ComparisonContext[];
    public comparison(i: number): ComparisonContext | null;
    public comparison(i?: number): ComparisonContext[] | ComparisonContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComparisonContext);
        }

        return this.getRuleContext(i, ComparisonContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_logicalAnd;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterLogicalAnd) {
            listener.enterLogicalAnd(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitLogicalAnd) {
            listener.exitLogicalAnd(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLogicalAnd) {
            return visitor.visitLogicalAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additionSubstraction(): AdditionSubstractionContext[];
    public additionSubstraction(i: number): AdditionSubstractionContext | null;
    public additionSubstraction(i?: number): AdditionSubstractionContext[] | AdditionSubstractionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AdditionSubstractionContext);
        }

        return this.getRuleContext(i, AdditionSubstractionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_comparison;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdditionSubstractionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicationDivision(): MultiplicationDivisionContext[];
    public multiplicationDivision(i: number): MultiplicationDivisionContext | null;
    public multiplicationDivision(i?: number): MultiplicationDivisionContext[] | MultiplicationDivisionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicationDivisionContext);
        }

        return this.getRuleContext(i, MultiplicationDivisionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_additionSubstraction;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterAdditionSubstraction) {
            listener.enterAdditionSubstraction(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitAdditionSubstraction) {
            listener.exitAdditionSubstraction(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAdditionSubstraction) {
            return visitor.visitAdditionSubstraction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiplicationDivisionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public binopTerminals(): BinopTerminalsContext[];
    public binopTerminals(i: number): BinopTerminalsContext | null;
    public binopTerminals(i?: number): BinopTerminalsContext[] | BinopTerminalsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BinopTerminalsContext);
        }

        return this.getRuleContext(i, BinopTerminalsContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_multiplicationDivision;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterMultiplicationDivision) {
            listener.enterMultiplicationDivision(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitMultiplicationDivision) {
            listener.exitMultiplicationDivision(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMultiplicationDivision) {
            return visitor.visitMultiplicationDivision(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimitiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.BOOL, 0);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primitive;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterPrimitive) {
            listener.enterPrimitive(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitPrimitive) {
            listener.exitPrimitive(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPrimitive) {
            return visitor.visitPrimitive(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AccessIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_accessIdentifier;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterAccessIdentifier) {
            listener.enterAccessIdentifier(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitAccessIdentifier) {
            listener.exitAccessIdentifier(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAccessIdentifier) {
            return visitor.visitAccessIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BracketContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_bracket;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterBracket) {
            listener.enterBracket(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBracket) {
            listener.exitBracket(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBracket) {
            return visitor.visitBracket(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionWithBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionWithBlock;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpressionWithBlock) {
            listener.enterExpressionWithBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpressionWithBlock) {
            listener.exitExpressionWithBlock(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithBlock) {
            return visitor.visitExpressionWithBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockBody(): BlockBodyContext {
        return this.getRuleContext(0, BlockBodyContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_blockExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterBlockExpression) {
            listener.enterBlockExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBlockExpression) {
            listener.exitBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBlockExpression) {
            return visitor.visitBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_blockBody;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterBlockBody) {
            listener.enterBlockBody(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBlockBody) {
            listener.exitBlockBody(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBlockBody) {
            return visitor.visitBlockBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
