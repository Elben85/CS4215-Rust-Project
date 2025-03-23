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
    public static readonly INT = 17;
    public static readonly BOOL = 18;
    public static readonly TYPE = 19;
    public static readonly IDENTIFIER = 20;
    public static readonly WS = 21;
    public static readonly RULE_prog = 0;
    public static readonly RULE_mutable = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_expression = 3;

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "'='", "'*'", "'/'", "'+'", "'-'", 
        "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "INT", "BOOL", "TYPE", "IDENTIFIER", 
        "WS"
    ];
    public static readonly ruleNames = [
        "prog", "mutable", "statement", "expression",
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
            this.state = 11;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1474572) !== 0)) {
                {
                {
                this.state = 8;
                this.statement();
                }
                }
                this.state = 13;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 14;
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
            this.state = 16;
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
        let _la: number;
        try {
            this.state = 34;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__1:
                localContext = new EmptyStatementContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 18;
                this.match(SimpleLangParser.T__1);
                }
                break;
            case SimpleLangParser.T__2:
                localContext = new LetStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 19;
                this.match(SimpleLangParser.T__2);
                this.state = 21;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 20;
                    this.mutable();
                    }
                }

                this.state = 23;
                this.match(SimpleLangParser.IDENTIFIER);
                this.state = 25;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 24;
                    this.match(SimpleLangParser.TYPE);
                    }
                }

                this.state = 29;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 4) {
                    {
                    this.state = 27;
                    this.match(SimpleLangParser.T__3);
                    this.state = 28;
                    this.expression(0);
                    }
                }

                }
                break;
            case SimpleLangParser.T__14:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                localContext = new ExpressionStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 31;
                this.expression(0);
                this.state = 32;
                this.match(SimpleLangParser.T__1);
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

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, SimpleLangParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 44;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.INT:
                {
                localContext = new PrimitiveContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 37;
                this.match(SimpleLangParser.INT);
                }
                break;
            case SimpleLangParser.BOOL:
                {
                localContext = new PrimitiveContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 38;
                this.match(SimpleLangParser.BOOL);
                }
                break;
            case SimpleLangParser.T__14:
                {
                localContext = new BracketContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 39;
                this.match(SimpleLangParser.T__14);
                this.state = 40;
                this.expression(0);
                this.state = 41;
                this.match(SimpleLangParser.T__15);
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                {
                localContext = new AccessIdentifierContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 43;
                this.match(SimpleLangParser.IDENTIFIER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 63;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 61;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
                    case 1:
                        {
                        localContext = new BinopContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 46;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 47;
                        (localContext as BinopContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            (localContext as BinopContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 48;
                        this.expression(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BinopContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 49;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 50;
                        (localContext as BinopContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 7 || _la === 8)) {
                            (localContext as BinopContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 51;
                        this.expression(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new BinopContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 52;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 53;
                        (localContext as BinopContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7680) !== 0))) {
                            (localContext as BinopContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 54;
                        this.expression(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new BinopContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 55;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 56;
                        this.match(SimpleLangParser.T__12);
                        this.state = 57;
                        this.expression(7);
                        }
                        break;
                    case 5:
                        {
                        localContext = new BinopContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 58;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 59;
                        this.match(SimpleLangParser.T__13);
                        this.state = 60;
                        this.expression(6);
                        }
                        break;
                    }
                    }
                }
                this.state = 65;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 3:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 9);
        case 1:
            return this.precpred(this.context, 8);
        case 2:
            return this.precpred(this.context, 7);
        case 3:
            return this.precpred(this.context, 6);
        case 4:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,21,67,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,10,8,0,10,0,12,
        0,13,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,3,2,22,8,2,1,2,1,2,3,2,26,8,
        2,1,2,1,2,3,2,30,8,2,1,2,1,2,1,2,3,2,35,8,2,1,3,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,3,3,45,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,5,3,62,8,3,10,3,12,3,65,9,3,1,3,0,1,6,4,0,2,4,
        6,0,3,1,0,5,6,1,0,7,8,1,0,9,12,76,0,11,1,0,0,0,2,16,1,0,0,0,4,34,
        1,0,0,0,6,44,1,0,0,0,8,10,3,4,2,0,9,8,1,0,0,0,10,13,1,0,0,0,11,9,
        1,0,0,0,11,12,1,0,0,0,12,14,1,0,0,0,13,11,1,0,0,0,14,15,5,0,0,1,
        15,1,1,0,0,0,16,17,5,1,0,0,17,3,1,0,0,0,18,35,5,2,0,0,19,21,5,3,
        0,0,20,22,3,2,1,0,21,20,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,25,
        5,20,0,0,24,26,5,19,0,0,25,24,1,0,0,0,25,26,1,0,0,0,26,29,1,0,0,
        0,27,28,5,4,0,0,28,30,3,6,3,0,29,27,1,0,0,0,29,30,1,0,0,0,30,35,
        1,0,0,0,31,32,3,6,3,0,32,33,5,2,0,0,33,35,1,0,0,0,34,18,1,0,0,0,
        34,19,1,0,0,0,34,31,1,0,0,0,35,5,1,0,0,0,36,37,6,3,-1,0,37,45,5,
        17,0,0,38,45,5,18,0,0,39,40,5,15,0,0,40,41,3,6,3,0,41,42,5,16,0,
        0,42,45,1,0,0,0,43,45,5,20,0,0,44,36,1,0,0,0,44,38,1,0,0,0,44,39,
        1,0,0,0,44,43,1,0,0,0,45,63,1,0,0,0,46,47,10,9,0,0,47,48,7,0,0,0,
        48,62,3,6,3,10,49,50,10,8,0,0,50,51,7,1,0,0,51,62,3,6,3,9,52,53,
        10,7,0,0,53,54,7,2,0,0,54,62,3,6,3,8,55,56,10,6,0,0,56,57,5,13,0,
        0,57,62,3,6,3,7,58,59,10,5,0,0,59,60,5,14,0,0,60,62,3,6,3,6,61,46,
        1,0,0,0,61,49,1,0,0,0,61,52,1,0,0,0,61,55,1,0,0,0,61,58,1,0,0,0,
        62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,7,1,0,0,0,65,63,1,0,
        0,0,8,11,21,25,29,34,44,61,63
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
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class ExpressionStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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
export class EmptyStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
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
export class LetStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
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


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class PrimitiveContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.BOOL, 0);
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
export class AccessIdentifierContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
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
export class BracketContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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
export class BinopContext extends ExpressionContext {
    public _op?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
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
