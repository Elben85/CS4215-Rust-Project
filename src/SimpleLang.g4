grammar SimpleLang;

prog
    : EOF
    | statement prog;

statement: expression ';';

// NOTE: operator precedence
// https://doc.rust-lang.org/reference/expressions.html

expression
    : expression op=('*'|'/') expression  // Note: Reordered for proper precedence
    | expression op=('+'|'-') expression
    | expression op=('<'|'<='|'>'|'>=') expression
    | expression '&&' expression
    | expression '||' expression
    | INT
    | BOOL
    | '(' expression ')'
    ;

INT: [0-9]+;
BOOL: 'true' | 'false';
WS: [ \t\r\n]+ -> skip;