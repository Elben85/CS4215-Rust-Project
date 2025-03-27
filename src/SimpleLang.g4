grammar SimpleLang;

prog
    : statement* EOF;

mutable
    : 'mut';

statement
    : emptyStatement
    | letStatement
    | expressionStatement
    ;

emptyStatement: ';';

// LET STATEMENT
// NOTE: the let statement is a simplificition without ref, pattern matching, and outer attributes
// https://doc.rust-lang.org/reference/statements.html#let-statements
letStatement
    : 'let' mutable? IDENTIFIER (':' TYPE)? ('=' expression)? ';'
    ;


expressionStatement
    : expressionWithoutBlock ';'
    | expressionWithBlock (';')?
    ;

// NOTE: operator precedence matters
// https://doc.rust-lang.org/reference/expressions.html

expression
    : expressionWithoutBlock
    | expressionWithBlock
    ;

// The following is to prevent left recursion from binary operation
expressionWithoutBlock
    : binop 
    ;

primary: primitive | bracket | accessIdentifier | unop;

unop
    : op=('-'|'!') binopTerminals
    ;

// binop terminals are all expressions without binop
binopTerminals: primary | expressionWithBlock;

// This is to prevent left recursion, note this needs to be done in reverse operator precedence
binop: logicalOr;

logicalOr: logicalAnd ('||' logicalAnd)*;

logicalAnd: comparison ('&&' comparison)*;

// NOTE: comparison requires parantheses, hence the design
comparison:  additionSubstraction (op=('<'|'<='|'>'|'>='|'=='|'!=') additionSubstraction)?;

additionSubstraction: multiplicationDivision (op=('+'|'-') multiplicationDivision)*;

multiplicationDivision: binopTerminals (op=('*'|'/'|'%') binopTerminals)*;

primitive
    : INT 
    | BOOL
    ;

accessIdentifier
    : IDENTIFIER
    ;

bracket
    : '(' expression ')'
    ;

expressionWithBlock
    : blockExpression
    ;

// Block expression
blockExpression
    : 
    '{' blockBody '}'
    ;

blockBody
    : statement* expressionWithoutBlock?
    ;

INT: [0-9]+;
BOOL: 'true' | 'false';
TYPE: 'bool' | 'i64';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;