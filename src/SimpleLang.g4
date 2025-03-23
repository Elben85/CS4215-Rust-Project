grammar SimpleLang;

prog
    : statement* EOF;

mutable
    : 'mut';

statement
    : ';' #EmptyStatement

    // LET STATEMENT
    // NOTE: the let statement is a simplificition without ref, pattern matching, and outer attributes
    // https://doc.rust-lang.org/reference/statements.html#let-statements
    | 'let' mutable? IDENTIFIER (: TYPE)? ('=' expression)? #LetStatement
    | expression ';' #ExpressionStatement
    ;

// NOTE: operator precedence matters
// https://doc.rust-lang.org/reference/expressions.html


// Note: Reordered for proper precedence
expression
    : expression op=('*'|'/') expression #Binop
    | expression op=('+'|'-') expression #Binop
    | expression op=('<'|'<='|'>'|'>=') expression #Binop
    | expression '&&' expression #Binop
    | expression '||' expression #Binop
    | INT #Primitive
    | BOOL #Primitive
    | '(' expression ')' #bracket
    | IDENTIFIER # AccessIdentifier
    ;

INT: [0-9]+;
BOOL: 'true' | 'false';
TYPE: 'bool' | 'i64';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;