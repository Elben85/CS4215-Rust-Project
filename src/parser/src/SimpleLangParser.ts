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
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly INT = 28;
    public static readonly BOOL = 29;
    public static readonly TYPE = 30;
    public static readonly IDENTIFIER = 31;
    public static readonly WS = 32;
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
    public static readonly RULE_negationExpression = 10;
    public static readonly RULE_dereferenceExpression = 11;
    public static readonly RULE_borrowExpression = 12;
    public static readonly RULE_binopTerminals = 13;
    public static readonly RULE_binop = 14;
    public static readonly RULE_logicalOr = 15;
    public static readonly RULE_logicalAnd = 16;
    public static readonly RULE_comparison = 17;
    public static readonly RULE_additionSubstraction = 18;
    public static readonly RULE_multiplicationDivision = 19;
    public static readonly RULE_primitive = 20;
    public static readonly RULE_accessIdentifier = 21;
    public static readonly RULE_bracket = 22;
    public static readonly RULE_assignmentExpressions = 23;
    public static readonly RULE_expressionWithBlock = 24;
    public static readonly RULE_blockExpression = 25;
    public static readonly RULE_blockBody = 26;
    public static readonly RULE_ifExpression = 27;
    public static readonly RULE_ifExpressionAlternative = 28;
    public static readonly RULE_loopExpression = 29;
    public static readonly RULE_predicateLoopExpression = 30;

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'-'", "'!'", "'*'", 
        "'&'", "'||'", "'&&'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", 
        "'+'", "'/'", "'%'", "'('", "')'", "'{'", "'}'", "'if'", "'else'", 
        "'while'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "INT", "BOOL", "TYPE", "IDENTIFIER", 
        "WS"
    ];
    public static readonly ruleNames = [
        "prog", "mutable", "statement", "emptyStatement", "letStatement", 
        "expressionStatement", "expression", "expressionWithoutBlock", "primary", 
        "unop", "negationExpression", "dereferenceExpression", "borrowExpression", 
        "binopTerminals", "binop", "logicalOr", "logicalAnd", "comparison", 
        "additionSubstraction", "multiplicationDivision", "primitive", "accessIdentifier", 
        "bracket", "assignmentExpressions", "expressionWithBlock", "blockExpression", 
        "blockBody", "ifExpression", "ifExpressionAlternative", "loopExpression", 
        "predicateLoopExpression",
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
            this.state = 65;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3131048908) !== 0)) {
                {
                {
                this.state = 62;
                this.statement();
                }
                }
                this.state = 67;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 68;
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
            this.state = 70;
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
            this.state = 75;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 72;
                this.emptyStatement();
                }
                break;
            case SimpleLangParser.T__2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 73;
                this.letStatement();
                }
                break;
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__6:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__20:
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 74;
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
            this.state = 77;
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
            this.state = 79;
            this.match(SimpleLangParser.T__2);
            this.state = 81;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 80;
                this.mutable();
                }
            }

            this.state = 83;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 86;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 84;
                this.match(SimpleLangParser.T__3);
                this.state = 85;
                this.match(SimpleLangParser.TYPE);
                }
            }

            this.state = 90;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 88;
                this.match(SimpleLangParser.T__4);
                this.state = 89;
                this.expression();
                }
            }

            this.state = 92;
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
            this.state = 101;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 94;
                this.expressionWithBlock();
                this.state = 96;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 95;
                    this.match(SimpleLangParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 98;
                this.expressionWithoutBlock();
                this.state = 99;
                this.match(SimpleLangParser.T__1);
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
            this.state = 105;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 103;
                this.expressionWithBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 104;
                this.expressionWithoutBlock();
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
            this.state = 107;
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
            this.state = 114;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 109;
                this.primitive();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 110;
                this.bracket();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 111;
                this.accessIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 112;
                this.unop();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 113;
                this.assignmentExpressions();
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
    public unop(): UnopContext {
        let localContext = new UnopContext(this.context, this.state);
        this.enterRule(localContext, 18, SimpleLangParser.RULE_unop);
        try {
            this.state = 119;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__6:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 116;
                this.negationExpression();
                }
                break;
            case SimpleLangParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 117;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.T__8:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 118;
                this.borrowExpression();
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
    public negationExpression(): NegationExpressionContext {
        let localContext = new NegationExpressionContext(this.context, this.state);
        this.enterRule(localContext, 20, SimpleLangParser.RULE_negationExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 121;
            localContext._op = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 7)) {
                localContext._op = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 122;
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
    public dereferenceExpression(): DereferenceExpressionContext {
        let localContext = new DereferenceExpressionContext(this.context, this.state);
        this.enterRule(localContext, 22, SimpleLangParser.RULE_dereferenceExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            this.match(SimpleLangParser.T__7);
            this.state = 127;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__7:
                {
                this.state = 125;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                {
                this.state = 126;
                this.accessIdentifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public borrowExpression(): BorrowExpressionContext {
        let localContext = new BorrowExpressionContext(this.context, this.state);
        this.enterRule(localContext, 24, SimpleLangParser.RULE_borrowExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 129;
            this.match(SimpleLangParser.T__8);
            this.state = 131;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 130;
                this.mutable();
                }
            }

            this.state = 133;
            this.accessIdentifier();
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
        this.enterRule(localContext, 26, SimpleLangParser.RULE_binopTerminals);
        try {
            this.state = 137;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__6:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__20:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 135;
                this.primary();
                }
                break;
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 136;
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
        this.enterRule(localContext, 28, SimpleLangParser.RULE_binop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 139;
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
        this.enterRule(localContext, 30, SimpleLangParser.RULE_logicalOr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 141;
            this.logicalAnd();
            this.state = 146;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 142;
                    this.match(SimpleLangParser.T__9);
                    this.state = 143;
                    this.logicalAnd();
                    }
                    }
                }
                this.state = 148;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
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
        this.enterRule(localContext, 32, SimpleLangParser.RULE_logicalAnd);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 149;
            this.comparison();
            this.state = 154;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 150;
                    this.match(SimpleLangParser.T__10);
                    this.state = 151;
                    this.comparison();
                    }
                    }
                }
                this.state = 156;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
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
        this.enterRule(localContext, 34, SimpleLangParser.RULE_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 157;
            this.additionSubstraction();
            this.state = 160;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 158;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 258048) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 159;
                this.additionSubstraction();
                }
                break;
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
        this.enterRule(localContext, 36, SimpleLangParser.RULE_additionSubstraction);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 162;
            this.multiplicationDivision();
            this.state = 167;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 163;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 6 || _la === 18)) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 164;
                    this.multiplicationDivision();
                    }
                    }
                }
                this.state = 169;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
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
        this.enterRule(localContext, 38, SimpleLangParser.RULE_multiplicationDivision);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.binopTerminals();
            this.state = 175;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 171;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1573120) !== 0))) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 172;
                    this.binopTerminals();
                    }
                    }
                }
                this.state = 177;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
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
        this.enterRule(localContext, 40, SimpleLangParser.RULE_primitive);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 178;
            _la = this.tokenStream.LA(1);
            if(!(_la === 28 || _la === 29)) {
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
        this.enterRule(localContext, 42, SimpleLangParser.RULE_accessIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 180;
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
        this.enterRule(localContext, 44, SimpleLangParser.RULE_bracket);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 182;
            this.match(SimpleLangParser.T__20);
            this.state = 183;
            this.expression();
            this.state = 184;
            this.match(SimpleLangParser.T__21);
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
    public assignmentExpressions(): AssignmentExpressionsContext {
        let localContext = new AssignmentExpressionsContext(this.context, this.state);
        this.enterRule(localContext, 46, SimpleLangParser.RULE_assignmentExpressions);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.accessIdentifier();
            this.state = 187;
            this.match(SimpleLangParser.T__4);
            this.state = 188;
            this.expression();
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
        this.enterRule(localContext, 48, SimpleLangParser.RULE_expressionWithBlock);
        try {
            this.state = 193;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 190;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 191;
                this.ifExpression();
                }
                break;
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 192;
                this.loopExpression();
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
    public blockExpression(): BlockExpressionContext {
        let localContext = new BlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 50, SimpleLangParser.RULE_blockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 195;
            this.match(SimpleLangParser.T__22);
            this.state = 196;
            this.blockBody();
            this.state = 197;
            this.match(SimpleLangParser.T__23);
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
        this.enterRule(localContext, 52, SimpleLangParser.RULE_blockBody);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 199;
                    this.statement();
                    }
                    }
                }
                this.state = 204;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3131048896) !== 0)) {
                {
                this.state = 205;
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
    public ifExpression(): IfExpressionContext {
        let localContext = new IfExpressionContext(this.context, this.state);
        this.enterRule(localContext, 54, SimpleLangParser.RULE_ifExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.match(SimpleLangParser.T__24);
            this.state = 209;
            this.expression();
            this.state = 210;
            this.blockExpression();
            this.state = 213;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 211;
                this.match(SimpleLangParser.T__25);
                this.state = 212;
                this.ifExpressionAlternative();
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
    public ifExpressionAlternative(): IfExpressionAlternativeContext {
        let localContext = new IfExpressionAlternativeContext(this.context, this.state);
        this.enterRule(localContext, 56, SimpleLangParser.RULE_ifExpressionAlternative);
        try {
            this.state = 217;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 215;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 216;
                this.ifExpression();
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
    public loopExpression(): LoopExpressionContext {
        let localContext = new LoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 58, SimpleLangParser.RULE_loopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 219;
            this.predicateLoopExpression();
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
    public predicateLoopExpression(): PredicateLoopExpressionContext {
        let localContext = new PredicateLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 60, SimpleLangParser.RULE_predicateLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 221;
            this.match(SimpleLangParser.T__26);
            this.state = 222;
            this.expression();
            this.state = 223;
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

    public static readonly _serializedATN: number[] = [
        4,1,32,226,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,5,0,64,8,0,10,0,12,0,
        67,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,3,2,76,8,2,1,3,1,3,1,4,1,4,3,
        4,82,8,4,1,4,1,4,1,4,3,4,87,8,4,1,4,1,4,3,4,91,8,4,1,4,1,4,1,5,1,
        5,3,5,97,8,5,1,5,1,5,1,5,3,5,102,8,5,1,6,1,6,3,6,106,8,6,1,7,1,7,
        1,8,1,8,1,8,1,8,1,8,3,8,115,8,8,1,9,1,9,1,9,3,9,120,8,9,1,10,1,10,
        1,10,1,11,1,11,1,11,3,11,128,8,11,1,12,1,12,3,12,132,8,12,1,12,1,
        12,1,13,1,13,3,13,138,8,13,1,14,1,14,1,15,1,15,1,15,5,15,145,8,15,
        10,15,12,15,148,9,15,1,16,1,16,1,16,5,16,153,8,16,10,16,12,16,156,
        9,16,1,17,1,17,1,17,3,17,161,8,17,1,18,1,18,1,18,5,18,166,8,18,10,
        18,12,18,169,9,18,1,19,1,19,1,19,5,19,174,8,19,10,19,12,19,177,9,
        19,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,
        24,1,24,1,24,3,24,194,8,24,1,25,1,25,1,25,1,25,1,26,5,26,201,8,26,
        10,26,12,26,204,9,26,1,26,3,26,207,8,26,1,27,1,27,1,27,1,27,1,27,
        3,27,214,8,27,1,28,1,28,3,28,218,8,28,1,29,1,29,1,30,1,30,1,30,1,
        30,1,30,0,0,31,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,0,5,1,0,6,7,1,0,12,17,2,0,
        6,6,18,18,2,0,8,8,19,20,1,0,28,29,223,0,65,1,0,0,0,2,70,1,0,0,0,
        4,75,1,0,0,0,6,77,1,0,0,0,8,79,1,0,0,0,10,101,1,0,0,0,12,105,1,0,
        0,0,14,107,1,0,0,0,16,114,1,0,0,0,18,119,1,0,0,0,20,121,1,0,0,0,
        22,124,1,0,0,0,24,129,1,0,0,0,26,137,1,0,0,0,28,139,1,0,0,0,30,141,
        1,0,0,0,32,149,1,0,0,0,34,157,1,0,0,0,36,162,1,0,0,0,38,170,1,0,
        0,0,40,178,1,0,0,0,42,180,1,0,0,0,44,182,1,0,0,0,46,186,1,0,0,0,
        48,193,1,0,0,0,50,195,1,0,0,0,52,202,1,0,0,0,54,208,1,0,0,0,56,217,
        1,0,0,0,58,219,1,0,0,0,60,221,1,0,0,0,62,64,3,4,2,0,63,62,1,0,0,
        0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,
        1,0,0,0,68,69,5,0,0,1,69,1,1,0,0,0,70,71,5,1,0,0,71,3,1,0,0,0,72,
        76,3,6,3,0,73,76,3,8,4,0,74,76,3,10,5,0,75,72,1,0,0,0,75,73,1,0,
        0,0,75,74,1,0,0,0,76,5,1,0,0,0,77,78,5,2,0,0,78,7,1,0,0,0,79,81,
        5,3,0,0,80,82,3,2,1,0,81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,
        83,86,5,31,0,0,84,85,5,4,0,0,85,87,5,30,0,0,86,84,1,0,0,0,86,87,
        1,0,0,0,87,90,1,0,0,0,88,89,5,5,0,0,89,91,3,12,6,0,90,88,1,0,0,0,
        90,91,1,0,0,0,91,92,1,0,0,0,92,93,5,2,0,0,93,9,1,0,0,0,94,96,3,48,
        24,0,95,97,5,2,0,0,96,95,1,0,0,0,96,97,1,0,0,0,97,102,1,0,0,0,98,
        99,3,14,7,0,99,100,5,2,0,0,100,102,1,0,0,0,101,94,1,0,0,0,101,98,
        1,0,0,0,102,11,1,0,0,0,103,106,3,48,24,0,104,106,3,14,7,0,105,103,
        1,0,0,0,105,104,1,0,0,0,106,13,1,0,0,0,107,108,3,28,14,0,108,15,
        1,0,0,0,109,115,3,40,20,0,110,115,3,44,22,0,111,115,3,42,21,0,112,
        115,3,18,9,0,113,115,3,46,23,0,114,109,1,0,0,0,114,110,1,0,0,0,114,
        111,1,0,0,0,114,112,1,0,0,0,114,113,1,0,0,0,115,17,1,0,0,0,116,120,
        3,20,10,0,117,120,3,22,11,0,118,120,3,24,12,0,119,116,1,0,0,0,119,
        117,1,0,0,0,119,118,1,0,0,0,120,19,1,0,0,0,121,122,7,0,0,0,122,123,
        3,26,13,0,123,21,1,0,0,0,124,127,5,8,0,0,125,128,3,22,11,0,126,128,
        3,42,21,0,127,125,1,0,0,0,127,126,1,0,0,0,128,23,1,0,0,0,129,131,
        5,9,0,0,130,132,3,2,1,0,131,130,1,0,0,0,131,132,1,0,0,0,132,133,
        1,0,0,0,133,134,3,42,21,0,134,25,1,0,0,0,135,138,3,16,8,0,136,138,
        3,48,24,0,137,135,1,0,0,0,137,136,1,0,0,0,138,27,1,0,0,0,139,140,
        3,30,15,0,140,29,1,0,0,0,141,146,3,32,16,0,142,143,5,10,0,0,143,
        145,3,32,16,0,144,142,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,
        147,1,0,0,0,147,31,1,0,0,0,148,146,1,0,0,0,149,154,3,34,17,0,150,
        151,5,11,0,0,151,153,3,34,17,0,152,150,1,0,0,0,153,156,1,0,0,0,154,
        152,1,0,0,0,154,155,1,0,0,0,155,33,1,0,0,0,156,154,1,0,0,0,157,160,
        3,36,18,0,158,159,7,1,0,0,159,161,3,36,18,0,160,158,1,0,0,0,160,
        161,1,0,0,0,161,35,1,0,0,0,162,167,3,38,19,0,163,164,7,2,0,0,164,
        166,3,38,19,0,165,163,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,
        168,1,0,0,0,168,37,1,0,0,0,169,167,1,0,0,0,170,175,3,26,13,0,171,
        172,7,3,0,0,172,174,3,26,13,0,173,171,1,0,0,0,174,177,1,0,0,0,175,
        173,1,0,0,0,175,176,1,0,0,0,176,39,1,0,0,0,177,175,1,0,0,0,178,179,
        7,4,0,0,179,41,1,0,0,0,180,181,5,31,0,0,181,43,1,0,0,0,182,183,5,
        21,0,0,183,184,3,12,6,0,184,185,5,22,0,0,185,45,1,0,0,0,186,187,
        3,42,21,0,187,188,5,5,0,0,188,189,3,12,6,0,189,47,1,0,0,0,190,194,
        3,50,25,0,191,194,3,54,27,0,192,194,3,58,29,0,193,190,1,0,0,0,193,
        191,1,0,0,0,193,192,1,0,0,0,194,49,1,0,0,0,195,196,5,23,0,0,196,
        197,3,52,26,0,197,198,5,24,0,0,198,51,1,0,0,0,199,201,3,4,2,0,200,
        199,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,
        206,1,0,0,0,204,202,1,0,0,0,205,207,3,14,7,0,206,205,1,0,0,0,206,
        207,1,0,0,0,207,53,1,0,0,0,208,209,5,25,0,0,209,210,3,12,6,0,210,
        213,3,50,25,0,211,212,5,26,0,0,212,214,3,56,28,0,213,211,1,0,0,0,
        213,214,1,0,0,0,214,55,1,0,0,0,215,218,3,50,25,0,216,218,3,54,27,
        0,217,215,1,0,0,0,217,216,1,0,0,0,218,57,1,0,0,0,219,220,3,60,30,
        0,220,59,1,0,0,0,221,222,5,27,0,0,222,223,3,12,6,0,223,224,3,50,
        25,0,224,61,1,0,0,0,23,65,75,81,86,90,96,101,105,114,119,127,131,
        137,146,154,160,167,175,193,202,206,213,217
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

    private static readonly decisionsToDFA = SimpleLangParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
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
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitProg) {
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
        if(listener.enterMutable) {
             listener.enterMutable(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMutable) {
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
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitStatement) {
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
        if(listener.enterEmptyStatement) {
             listener.enterEmptyStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitEmptyStatement) {
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
        if(listener.enterLetStatement) {
             listener.enterLetStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLetStatement) {
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
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpressionStatement) {
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
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpression) {
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
        if(listener.enterExpressionWithoutBlock) {
             listener.enterExpressionWithoutBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpressionWithoutBlock) {
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
    public assignmentExpressions(): AssignmentExpressionsContext | null {
        return this.getRuleContext(0, AssignmentExpressionsContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primary;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPrimary) {
             listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPrimary) {
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
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public negationExpression(): NegationExpressionContext | null {
        return this.getRuleContext(0, NegationExpressionContext);
    }
    public dereferenceExpression(): DereferenceExpressionContext | null {
        return this.getRuleContext(0, DereferenceExpressionContext);
    }
    public borrowExpression(): BorrowExpressionContext | null {
        return this.getRuleContext(0, BorrowExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_unop;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterUnop) {
             listener.enterUnop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitUnop) {
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


export class NegationExpressionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public binopTerminals(): BinopTerminalsContext {
        return this.getRuleContext(0, BinopTerminalsContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_negationExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterNegationExpression) {
             listener.enterNegationExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitNegationExpression) {
             listener.exitNegationExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitNegationExpression) {
            return visitor.visitNegationExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DereferenceExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dereferenceExpression(): DereferenceExpressionContext | null {
        return this.getRuleContext(0, DereferenceExpressionContext);
    }
    public accessIdentifier(): AccessIdentifierContext | null {
        return this.getRuleContext(0, AccessIdentifierContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_dereferenceExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterDereferenceExpression) {
             listener.enterDereferenceExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitDereferenceExpression) {
             listener.exitDereferenceExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitDereferenceExpression) {
            return visitor.visitDereferenceExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BorrowExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public accessIdentifier(): AccessIdentifierContext {
        return this.getRuleContext(0, AccessIdentifierContext)!;
    }
    public mutable(): MutableContext | null {
        return this.getRuleContext(0, MutableContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_borrowExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBorrowExpression) {
             listener.enterBorrowExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBorrowExpression) {
             listener.exitBorrowExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBorrowExpression) {
            return visitor.visitBorrowExpression(this);
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
        if(listener.enterBinopTerminals) {
             listener.enterBinopTerminals(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBinopTerminals) {
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
        if(listener.enterBinop) {
             listener.enterBinop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBinop) {
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
        if(listener.enterLogicalOr) {
             listener.enterLogicalOr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLogicalOr) {
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
        if(listener.enterLogicalAnd) {
             listener.enterLogicalAnd(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLogicalAnd) {
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
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitComparison) {
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
        if(listener.enterAdditionSubstraction) {
             listener.enterAdditionSubstraction(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAdditionSubstraction) {
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
        if(listener.enterMultiplicationDivision) {
             listener.enterMultiplicationDivision(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMultiplicationDivision) {
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
        if(listener.enterPrimitive) {
             listener.enterPrimitive(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPrimitive) {
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
        if(listener.enterAccessIdentifier) {
             listener.enterAccessIdentifier(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAccessIdentifier) {
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
        if(listener.enterBracket) {
             listener.enterBracket(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBracket) {
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


export class AssignmentExpressionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public accessIdentifier(): AccessIdentifierContext {
        return this.getRuleContext(0, AccessIdentifierContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_assignmentExpressions;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAssignmentExpressions) {
             listener.enterAssignmentExpressions(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAssignmentExpressions) {
             listener.exitAssignmentExpressions(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExpressions) {
            return visitor.visitAssignmentExpressions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionWithBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public loopExpression(): LoopExpressionContext | null {
        return this.getRuleContext(0, LoopExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionWithBlock;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpressionWithBlock) {
             listener.enterExpressionWithBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpressionWithBlock) {
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
        if(listener.enterBlockExpression) {
             listener.enterBlockExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBlockExpression) {
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
        if(listener.enterBlockBody) {
             listener.enterBlockBody(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBlockBody) {
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


export class IfExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public ifExpressionAlternative(): IfExpressionAlternativeContext | null {
        return this.getRuleContext(0, IfExpressionAlternativeContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_ifExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIfExpression) {
             listener.enterIfExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIfExpression) {
             listener.exitIfExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIfExpression) {
            return visitor.visitIfExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExpressionAlternativeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_ifExpressionAlternative;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIfExpressionAlternative) {
             listener.enterIfExpressionAlternative(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIfExpressionAlternative) {
             listener.exitIfExpressionAlternative(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIfExpressionAlternative) {
            return visitor.visitIfExpressionAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public predicateLoopExpression(): PredicateLoopExpressionContext {
        return this.getRuleContext(0, PredicateLoopExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_loopExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLoopExpression) {
             listener.enterLoopExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLoopExpression) {
             listener.exitLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLoopExpression) {
            return visitor.visitLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_predicateLoopExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPredicateLoopExpression) {
             listener.enterPredicateLoopExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPredicateLoopExpression) {
             listener.exitPredicateLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPredicateLoopExpression) {
            return visitor.visitPredicateLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
