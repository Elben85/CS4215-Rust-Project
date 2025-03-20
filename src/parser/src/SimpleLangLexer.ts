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
    public static readonly T__12 = 13;
    public static readonly INT = 14;
    public static readonly BOOL = 15;
    public static readonly WS = 16;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'*'", "'/'", "'+'", "'-'", "'<'", "'<='", "'>'", "'>='", 
        "'&&'", "'||'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "INT", "BOOL", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "INT", "BOOL", "WS",
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
        4,0,16,86,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,
        7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
        1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,
        10,1,11,1,11,1,12,1,12,1,13,4,13,65,8,13,11,13,12,13,66,1,14,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,78,8,14,1,15,4,15,81,8,15,
        11,15,12,15,82,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,
        8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,2,1,0,48,57,
        3,0,9,10,13,13,32,32,88,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
        1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
        1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,
        1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,35,1,0,0,0,5,37,
        1,0,0,0,7,39,1,0,0,0,9,41,1,0,0,0,11,43,1,0,0,0,13,45,1,0,0,0,15,
        48,1,0,0,0,17,50,1,0,0,0,19,53,1,0,0,0,21,56,1,0,0,0,23,59,1,0,0,
        0,25,61,1,0,0,0,27,64,1,0,0,0,29,77,1,0,0,0,31,80,1,0,0,0,33,34,
        5,59,0,0,34,2,1,0,0,0,35,36,5,42,0,0,36,4,1,0,0,0,37,38,5,47,0,0,
        38,6,1,0,0,0,39,40,5,43,0,0,40,8,1,0,0,0,41,42,5,45,0,0,42,10,1,
        0,0,0,43,44,5,60,0,0,44,12,1,0,0,0,45,46,5,60,0,0,46,47,5,61,0,0,
        47,14,1,0,0,0,48,49,5,62,0,0,49,16,1,0,0,0,50,51,5,62,0,0,51,52,
        5,61,0,0,52,18,1,0,0,0,53,54,5,38,0,0,54,55,5,38,0,0,55,20,1,0,0,
        0,56,57,5,124,0,0,57,58,5,124,0,0,58,22,1,0,0,0,59,60,5,40,0,0,60,
        24,1,0,0,0,61,62,5,41,0,0,62,26,1,0,0,0,63,65,7,0,0,0,64,63,1,0,
        0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,28,1,0,0,0,68,69,
        5,116,0,0,69,70,5,114,0,0,70,71,5,117,0,0,71,78,5,101,0,0,72,73,
        5,102,0,0,73,74,5,97,0,0,74,75,5,108,0,0,75,76,5,115,0,0,76,78,5,
        101,0,0,77,68,1,0,0,0,77,72,1,0,0,0,78,30,1,0,0,0,79,81,7,1,0,0,
        80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,84,1,
        0,0,0,84,85,6,15,0,0,85,32,1,0,0,0,4,0,66,77,82,1,6,0,0
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