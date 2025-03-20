// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SimpleLangLexer extends antlr.Lexer {
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
    public static readonly INT = 13;
    public static readonly BOOL = 14;
    public static readonly WS = 15;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'*'", "'/'", "'+'", "'-'", "'<'", "'<='", "'>'", "'>='", 
        "'&&'", "'||'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "INT", "BOOL", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "INT", "BOOL", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SimpleLangLexer._ATN, SimpleLangLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SimpleLang.g4"; }

    public get literalNames(): (string | null)[] { return SimpleLangLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangLexer.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangLexer.ruleNames; }

    public get serializedATN(): number[] { return SimpleLangLexer._serializedATN; }

    public get channelNames(): string[] { return SimpleLangLexer.channelNames; }

    public get modeNames(): string[] { return SimpleLangLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,15,82,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,
        7,13,2,14,7,14,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
        5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,11,
        1,12,4,12,61,8,12,11,12,12,12,62,1,13,1,13,1,13,1,13,1,13,1,13,1,
        13,1,13,1,13,3,13,74,8,13,1,14,4,14,77,8,14,11,14,12,14,78,1,14,
        1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,
        23,12,25,13,27,14,29,15,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,84,
        0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
        1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
        1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,1,31,
        1,0,0,0,3,33,1,0,0,0,5,35,1,0,0,0,7,37,1,0,0,0,9,39,1,0,0,0,11,41,
        1,0,0,0,13,44,1,0,0,0,15,46,1,0,0,0,17,49,1,0,0,0,19,52,1,0,0,0,
        21,55,1,0,0,0,23,57,1,0,0,0,25,60,1,0,0,0,27,73,1,0,0,0,29,76,1,
        0,0,0,31,32,5,42,0,0,32,2,1,0,0,0,33,34,5,47,0,0,34,4,1,0,0,0,35,
        36,5,43,0,0,36,6,1,0,0,0,37,38,5,45,0,0,38,8,1,0,0,0,39,40,5,60,
        0,0,40,10,1,0,0,0,41,42,5,60,0,0,42,43,5,61,0,0,43,12,1,0,0,0,44,
        45,5,62,0,0,45,14,1,0,0,0,46,47,5,62,0,0,47,48,5,61,0,0,48,16,1,
        0,0,0,49,50,5,38,0,0,50,51,5,38,0,0,51,18,1,0,0,0,52,53,5,124,0,
        0,53,54,5,124,0,0,54,20,1,0,0,0,55,56,5,40,0,0,56,22,1,0,0,0,57,
        58,5,41,0,0,58,24,1,0,0,0,59,61,7,0,0,0,60,59,1,0,0,0,61,62,1,0,
        0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,26,1,0,0,0,64,65,5,116,0,0,65,
        66,5,114,0,0,66,67,5,117,0,0,67,74,5,101,0,0,68,69,5,102,0,0,69,
        70,5,97,0,0,70,71,5,108,0,0,71,72,5,115,0,0,72,74,5,101,0,0,73,64,
        1,0,0,0,73,68,1,0,0,0,74,28,1,0,0,0,75,77,7,1,0,0,76,75,1,0,0,0,
        77,78,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,81,6,
        14,0,0,81,30,1,0,0,0,4,0,62,73,78,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangLexer.__ATN) {
            SimpleLangLexer.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangLexer._serializedATN);
        }

        return SimpleLangLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangLexer.literalNames, SimpleLangLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}