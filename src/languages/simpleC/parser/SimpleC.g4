grammar SimpleC;

program: repl EOF;
repl: functionDecl* statements;

funType: varType | 'void';
functionDecl:
	funType Identifier '(' paramList? ')' '{' returnBlock '}';
param: varType Identifier;
paramList: param (',' param)*;
returnBlock: statement* ('return' expression ';')?;

// Statements

statement:
	variableDeclaration ';'
	| assignment ';'
	| functionCall ';'
	| ifStatement
	| switchStatement
	| forStatement
	| whileStatement
	| compoundStatement
	| printfStatement
	| returnStatement;

compoundStatement: '{' statements '}';
statements: statement*;

returnStatement: 'return' expression? ';';

varType: 'int' | 'string';
variableDeclaration: varType initDeclaratorList;
initDeclaratorList: initDeclarator (',' initDeclarator)*;
initDeclarator: Identifier dimensions* ('=' expression)?;
dimensions: '[' Number ']';

assignment: expression '=' expression;

functionCall: Identifier '(' exprList? ')';

ifStatement: 'if' '(' expression ')' statement elseStat?;
elseStat: 'else' statement;

switchStatement:
	'switch' '(' expression ')' '{' caseStatement* defaultCase? '}';
caseStatement:
	'case' constantValue ':' statements breakStatement?;
defaultCase: 'default' ':' statements;
breakStatement: 'break;';

forStatement:
	'for' '(' forInitial ';' expression ';' assignment ')' statement;
forInitial: variableDeclaration | assignment;

whileStatement: 'while' '(' expression ')' statement;

printfStatement: 'printf' '(' String (',' expression)* ')' ';';

// Expressions

idList: Identifier ( ',' Identifier)*;
exprList: expression ( ',' expression)*;

expression:
	op = '-' expression										# unaryExpression
	| op = '!' expression									# unaryExpression
	| <assoc = right> expression op = '^' expression		# binaryExpression
	| expression op = ('*' | '/' | '%') expression			# binaryExpression
	| expression op = ('+' | '-') expression				# binaryExpression
	| expression op = ('>=' | '<=' | '>' | '<') expression	# binaryExpression
	| expression op = ('==' | '!=') expression				# binaryExpression
	| expression op = '&&' expression						# binaryExpression
	| expression op = '||' expression						# binaryExpression
	| expression op = '?' expression ':' expression			# ternaryExpression
	| constantValue											# constantExpression
	| functionCall											# functionCallExpression
	| Identifier indexes?									# variableExpression
	| '(' expression ')'									# bracketExpression;

constantValue:
	Number				# numberExpression
	| Bool				# boolExpression
	| 'null'			# nullExpression
	| String indexes?	# stringExpression;

list: '[' exprList? ']';
indexes: ( '[' expression ']')+;
Bool: 'true' | 'false';
Number: Int ( '.' Digit*)?;
Identifier: [a-zA-Z_] [a-zA-Z_0-9]*;

String:
	["] (~["\r\n\\] | '\\' ~[\r\n])* ["]
	| ['] ( ~['\r\n\\] | '\\' ~[\r\n])* ['];
Comment: ( '//' ~[\r\n]* | '/*' .*? '*/') -> skip;
Space: [ \t\r\n\u000C] -> skip;
fragment Int: [1-9] Digit* | '0';

fragment Digit: [0-9];