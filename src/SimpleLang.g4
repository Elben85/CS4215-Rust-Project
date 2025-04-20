grammar SimpleLang;

prog
    : statement* EOF;

mutable
    : 'mut';

statement
    : emptyStatement
    | item
    | letStatement
    | expressionStatement
    ;

emptyStatement: ';';

item: function;

// LET STATEMENT
// NOTE: the let statement is a simplificition without ref, pattern matching, and outer attributes
// https://doc.rust-lang.org/reference/statements.html#let-statements
letStatement
    : 'let' mutable? IDENTIFIER (':' type)? ('=' expression)? ';'
    ;


expressionStatement
    : expressionWithBlock (';')? 
    | expressionWithoutBlock ';' 
    ;

// NOTE: operator precedence matters
// https://doc.rust-lang.org/reference/expressions.html

expression
    : expressionWithBlock
    | expressionWithoutBlock
    ;

// The following is to prevent left recursion from binary operation
expressionWithoutBlock
    : binop 
    | breakExpression
    | continueExpression
    | returnExpression
    ;

primary
    : primitive 
    | bracket 
    | accessIdentifier 
    | unop 
    | assignmentExpressions
    | closureExpression
    | callExpression
    ;

// CALL EXPRESSION
callExpression
    : callExpression '(' callParams? ')'
    | callExpressionTerminal '(' callParams? ')'
    ;

callExpressionTerminal
    : bracket
    | accessIdentifier
    | expressionWithBlock
    ;

// UNARY OPERATOR
unop
    : negationExpression
    | dereferenceExpression
    | borrowExpression
    ;

negationExpression: op=('-'|'!') binopTerminals;

// For now only allows dereference and borrows for variables
dereferenceExpression: '*' (dereferenceExpression | accessIdentifier);

borrowExpression
    : '&' (mutable)? accessIdentifier
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
    : FLOAT
    | BOOL
    | STRING
    ;

accessIdentifier
    : IDENTIFIER
    ;

bracket
    : '(' expression ')'
    ;

// ASSIGNMENTS
assignmentExpressions
    : accessIdentifier '=' expression
    | dereferenceExpression '=' expression
    ;

expressionWithBlock
    : blockExpression
    | ifExpression
    | loopExpression
    ;

// BLOCK EXPRESSION
blockExpression
    : 
    '{' blockBody '}'
    ;

blockBody
    : statement* expressionWithoutBlock?
    ;

// IF ELSE
ifExpression
    : 'if' expression blockExpression ('else' ifExpressionAlternative)?
    ;

ifExpressionAlternative
    : blockExpression | ifExpression
    ;

// WHILE LOOPS
// In case we want to add other type of loops
loopExpression: predicateLoopExpression;

predicateLoopExpression
    : 'while' expression blockExpression
    ;

breakExpression
    : 'break'
    ;

continueExpression 
    : 'continue'
    ;


// FUNCTIONS
closureExpression 
    : ('||' | '|' functionParameters?'|') (expression | '->' type blockExpression)
    ;

function
    : 'fn' IDENTIFIER '(' functionParameters? ')' functionReturnType? ( blockExpression | ';' )
    ;

// Self parameter not implemented
functionParameters
    : functionParam (',' functionParam)* ','?
    ;

// Simple case
functionParam
    : functionParamPattern ':' type 
    ;

functionParamPattern
    : IDENTIFIER
    ;

functionReturnType
    : '->' type
    ;

returnExpression
    : 'return' expression?
    ;

callParams
    : expression ( ',' expression )* ','?
    ;

functionType
    : 'fn' '(' functionTypeParams? ')' functionReturnType?
    ;

functionTypeParams
    : type (',' type)* ','?
    ;

type
    : functionType
    | pointerType
    | BASETYPE 
    ;

pointerType
    : '&' (mutable)? type
    ;

// PRIMITIVES / LEAF NODES
FLOAT: [0-9]+('.'[0-9]+)?;
BOOL: 'true' | 'false';
STRING
    : '"' (~["\r\n])* '"'
    ;
BASETYPE:  'bool' | 'f64' | 'String';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;