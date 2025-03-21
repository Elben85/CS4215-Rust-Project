grammar SimpleLang;

prog
    : statement* EOF;

statement
    : ';' #EmptyStatement
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
    ;

INT: [0-9]+;
BOOL: 'true' | 'false';
WS: [ \t\r\n]+ -> skip;