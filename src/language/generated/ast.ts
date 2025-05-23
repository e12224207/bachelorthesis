/******************************************************************************
 * This file was generated by langium-cli 3.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from 'langium';
import { AbstractAstReflection } from 'langium';

export const MiniProbTerminals = {
    INT_PREFIX: /[su][1-9][0-9]{0,8}/,
    BOOL: /(true|false)/,
    PROB_QUERY: /probabilistic query:.*;/,
    FORMULA: /formula\s?=\s?.*;/,
    ID: /(?!(true|false)|[su][1-9][0-9]*)[a-zA-Z_][a-zA-Z0-9_\.\:\~]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    INT: /[0-9]+/,
    WS: /\s+/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/,
};

export type MiniProbTerminalNames = keyof typeof MiniProbTerminals;

export type MiniProbKeywordNames = 
    | "!"
    | "!="
    | "#include"
    | "%"
    | "&"
    | "&&"
    | "("
    | ")"
    | "*"
    | "+"
    | ","
    | "-"
    | "/"
    | ":"
    | ";"
    | "<"
    | "<="
    | "="
    | "=="
    | ">"
    | ">="
    | "Bernoulli"
    | "Uniform"
    | "["
    | "]"
    | "bool"
    | "catch"
    | "else"
    | "if"
    | "observe"
    | "program:"
    | "query"
    | "throw"
    | "try"
    | "while"
    | "{"
    | "||"
    | "}";

export type MiniProbTokenNames = MiniProbTerminalNames | MiniProbKeywordNames;

export type DeclOrParam = Decl | Param;

export const DeclOrParam = 'DeclOrParam';

export function isDeclOrParam(item: unknown): item is DeclOrParam {
    return reflection.isInstance(item, DeclOrParam);
}

export type Expression = BinaryExpression | BoolLiteral | IntLiteral | LogicalNegation | Lval | ProbabilisticAssignment;

export const Expression = 'Expression';

export function isExpression(item: unknown): item is Expression {
    return reflection.isInstance(item, Expression);
}

export type Stmt = Assignment | FuncCall | IfThenElse | Observation | Query | TryCatch | While;

export const Stmt = 'Stmt';

export function isStmt(item: unknown): item is Stmt {
    return reflection.isInstance(item, Stmt);
}

export type Type = IntType;

export const Type = 'Type';

export function isType(item: unknown): item is Type {
    return reflection.isInstance(item, Type);
}

export interface Arg extends AstNode {
    readonly $container: ArgList;
    readonly $type: 'Arg';
    expression: Expression;
}

export const Arg = 'Arg';

export function isArg(item: unknown): item is Arg {
    return reflection.isInstance(item, Arg);
}

export interface ArgList extends AstNode {
    readonly $container: FuncCall;
    readonly $type: 'ArgList';
    arguments: Array<Arg>;
}

export const ArgList = 'ArgList';

export function isArgList(item: unknown): item is ArgList {
    return reflection.isInstance(item, ArgList);
}

export interface Assignment extends AstNode {
    readonly $container: Block;
    readonly $type: 'Assignment';
    distribution?: Distribution;
    expression?: Expression;
    leftValue: Lval;
}

export const Assignment = 'Assignment';

export function isAssignment(item: unknown): item is Assignment {
    return reflection.isInstance(item, Assignment);
}

export interface BinaryExpression extends AstNode {
    readonly $container: Arg | Assignment | BinaryExpression | Distribution | IfThenElse | LogicalNegation | Lval | Observation | ProbChoice | ProbabilisticAssignment | While;
    readonly $type: 'BinaryExpression';
    left: Expression;
    operator: '!=' | '%' | '&&' | '*' | '+' | '-' | '/' | '<' | '<=' | '==' | '>' | '>=' | '||';
    right: Expression;
}

export const BinaryExpression = 'BinaryExpression';

export function isBinaryExpression(item: unknown): item is BinaryExpression {
    return reflection.isInstance(item, BinaryExpression);
}

export interface Block extends AstNode {
    readonly $container: Func | IfThenElse | TryCatch | While;
    readonly $type: 'Block';
    statements: Array<Stmt>;
}

export const Block = 'Block';

export function isBlock(item: unknown): item is Block {
    return reflection.isInstance(item, Block);
}

export interface BoolLiteral extends AstNode {
    readonly $container: Arg | Assignment | BinaryExpression | Distribution | IfThenElse | LogicalNegation | Lval | Observation | ProbChoice | ProbabilisticAssignment | While;
    readonly $type: 'BoolLiteral';
    literal: boolean;
}

export const BoolLiteral = 'BoolLiteral';

export function isBoolLiteral(item: unknown): item is BoolLiteral {
    return reflection.isInstance(item, BoolLiteral);
}

export interface Decl extends AstNode {
    readonly $container: Func | Program;
    readonly $type: 'Decl';
    names: Array<string>;
    type: Type;
}

export const Decl = 'Decl';

export function isDecl(item: unknown): item is Decl {
    return reflection.isInstance(item, Decl);
}

export interface Distribution extends AstNode {
    readonly $container: Assignment;
    readonly $type: 'Distribution';
    lower?: Expression;
    name: 'Bernoulli' | 'Uniform';
    p?: Expression;
    q?: Expression;
    upper?: Expression;
}

export const Distribution = 'Distribution';

export function isDistribution(item: unknown): item is Distribution {
    return reflection.isInstance(item, Distribution);
}

export interface FileImport extends AstNode {
    readonly $container: Program;
    readonly $type: 'FileImport';
    file: string;
}

export const FileImport = 'FileImport';

export function isFileImport(item: unknown): item is FileImport {
    return reflection.isInstance(item, FileImport);
}

export interface Func extends AstNode {
    readonly $container: Program;
    readonly $type: 'Func';
    body: Block;
    declarations: Array<Decl>;
    name: string;
    params?: ParamList;
}

export const Func = 'Func';

export function isFunc(item: unknown): item is Func {
    return reflection.isInstance(item, Func);
}

export interface FuncCall extends AstNode {
    readonly $container: Block | Query;
    readonly $type: 'FuncCall';
    argumentList?: ArgList;
    ref: Reference<Func>;
}

export const FuncCall = 'FuncCall';

export function isFuncCall(item: unknown): item is FuncCall {
    return reflection.isInstance(item, FuncCall);
}

export interface IfThenElse extends AstNode {
    readonly $container: Block;
    readonly $type: 'IfThenElse';
    condition: Expression;
    elseBlock?: Block;
    thenBlock?: Block;
}

export const IfThenElse = 'IfThenElse';

export function isIfThenElse(item: unknown): item is IfThenElse {
    return reflection.isInstance(item, IfThenElse);
}

export interface IntegerLiteral extends AstNode {
    readonly $container: IntLiteral;
    readonly $type: 'IntegerLiteral';
    sign?: '+' | '-';
    suffix: string;
    value: number;
}

export const IntegerLiteral = 'IntegerLiteral';

export function isIntegerLiteral(item: unknown): item is IntegerLiteral {
    return reflection.isInstance(item, IntegerLiteral);
}

export interface IntLiteral extends AstNode {
    readonly $container: Arg | Assignment | BinaryExpression | Distribution | IfThenElse | LogicalNegation | Lval | Observation | ProbChoice | ProbabilisticAssignment | While;
    readonly $type: 'IntLiteral';
    literal: IntegerLiteral;
}

export const IntLiteral = 'IntLiteral';

export function isIntLiteral(item: unknown): item is IntLiteral {
    return reflection.isInstance(item, IntLiteral);
}

export interface IntType extends AstNode {
    readonly $type: 'IntArray' | 'IntType';
    prefix: string;
}

export const IntType = 'IntType';

export function isIntType(item: unknown): item is IntType {
    return reflection.isInstance(item, IntType);
}

export interface LogicalNegation extends AstNode {
    readonly $container: Arg | Assignment | BinaryExpression | Distribution | IfThenElse | LogicalNegation | Lval | Observation | ProbChoice | ProbabilisticAssignment | While;
    readonly $type: 'LogicalNegation';
    operand: Expression;
    operator: '!';
}

export const LogicalNegation = 'LogicalNegation';

export function isLogicalNegation(item: unknown): item is LogicalNegation {
    return reflection.isInstance(item, LogicalNegation);
}

export interface Lval extends AstNode {
    readonly $container: Arg | Assignment | BinaryExpression | Distribution | IfThenElse | LogicalNegation | Lval | Observation | ProbChoice | ProbabilisticAssignment | While;
    readonly $type: 'Lval';
    index?: Expression;
    ref: Reference<DeclOrParam>;
}

export const Lval = 'Lval';

export function isLval(item: unknown): item is Lval {
    return reflection.isInstance(item, Lval);
}

export interface Observation extends AstNode {
    readonly $container: Block;
    readonly $type: 'Observation';
    condition: Expression;
}

export const Observation = 'Observation';

export function isObservation(item: unknown): item is Observation {
    return reflection.isInstance(item, Observation);
}

export interface Param extends AstNode {
    readonly $container: ParamList;
    readonly $type: 'Param';
    byRef: boolean;
    name: string;
    type: Type;
}

export const Param = 'Param';

export function isParam(item: unknown): item is Param {
    return reflection.isInstance(item, Param);
}

export interface ParamList extends AstNode {
    readonly $container: Func;
    readonly $type: 'ParamList';
    parameters: Array<Param>;
}

export const ParamList = 'ParamList';

export function isParamList(item: unknown): item is ParamList {
    return reflection.isInstance(item, ParamList);
}

export interface ProbabilisticAssignment extends AstNode {
    readonly $container: Arg | Assignment | BinaryExpression | Distribution | IfThenElse | LogicalNegation | Lval | Observation | ProbChoice | ProbabilisticAssignment | While;
    readonly $type: 'ProbabilisticAssignment';
    fallbacks: Array<Expression>;
    head: Expression;
    probabilities: Array<ProbChoice>;
}

export const ProbabilisticAssignment = 'ProbabilisticAssignment';

export function isProbabilisticAssignment(item: unknown): item is ProbabilisticAssignment {
    return reflection.isInstance(item, ProbabilisticAssignment);
}

export interface ProbChoice extends AstNode {
    readonly $container: ProbabilisticAssignment;
    readonly $type: 'ProbChoice';
    denominator: Expression;
    numerator: Expression;
}

export const ProbChoice = 'ProbChoice';

export function isProbChoice(item: unknown): item is ProbChoice {
    return reflection.isInstance(item, ProbChoice);
}

export interface Program extends AstNode {
    readonly $type: 'Program';
    declarations: Array<Decl>;
    fileImports: Array<FileImport>;
    formula?: string;
    functions: Array<Func>;
    probabilisticQuery?: string;
}

export const Program = 'Program';

export function isProgram(item: unknown): item is Program {
    return reflection.isInstance(item, Program);
}

export interface Query extends AstNode {
    readonly $container: Block;
    readonly $type: 'Query';
    function: FuncCall;
}

export const Query = 'Query';

export function isQuery(item: unknown): item is Query {
    return reflection.isInstance(item, Query);
}

export interface TryCatch extends AstNode {
    readonly $container: Block;
    readonly $type: 'TryCatch';
    catchBlock?: Block;
    tryBlock?: Block;
}

export const TryCatch = 'TryCatch';

export function isTryCatch(item: unknown): item is TryCatch {
    return reflection.isInstance(item, TryCatch);
}

export interface While extends AstNode {
    readonly $container: Block;
    readonly $type: 'While';
    condition: Expression;
    whileBlock?: Block;
}

export const While = 'While';

export function isWhile(item: unknown): item is While {
    return reflection.isInstance(item, While);
}

export interface IntArray extends IntType {
    readonly $type: 'IntArray';
    size: number;
}

export const IntArray = 'IntArray';

export function isIntArray(item: unknown): item is IntArray {
    return reflection.isInstance(item, IntArray);
}

export type MiniProbAstType = {
    Arg: Arg
    ArgList: ArgList
    Assignment: Assignment
    BinaryExpression: BinaryExpression
    Block: Block
    BoolLiteral: BoolLiteral
    Decl: Decl
    DeclOrParam: DeclOrParam
    Distribution: Distribution
    Expression: Expression
    FileImport: FileImport
    Func: Func
    FuncCall: FuncCall
    IfThenElse: IfThenElse
    IntArray: IntArray
    IntLiteral: IntLiteral
    IntType: IntType
    IntegerLiteral: IntegerLiteral
    LogicalNegation: LogicalNegation
    Lval: Lval
    Observation: Observation
    Param: Param
    ParamList: ParamList
    ProbChoice: ProbChoice
    ProbabilisticAssignment: ProbabilisticAssignment
    Program: Program
    Query: Query
    Stmt: Stmt
    TryCatch: TryCatch
    Type: Type
    While: While
}

export class MiniProbAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return [Arg, ArgList, Assignment, BinaryExpression, Block, BoolLiteral, Decl, DeclOrParam, Distribution, Expression, FileImport, Func, FuncCall, IfThenElse, IntArray, IntLiteral, IntType, IntegerLiteral, LogicalNegation, Lval, Observation, Param, ParamList, ProbChoice, ProbabilisticAssignment, Program, Query, Stmt, TryCatch, Type, While];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case Assignment:
            case FuncCall:
            case IfThenElse:
            case Observation:
            case Query:
            case TryCatch:
            case While: {
                return this.isSubtype(Stmt, supertype);
            }
            case BinaryExpression:
            case BoolLiteral:
            case IntLiteral:
            case LogicalNegation:
            case Lval:
            case ProbabilisticAssignment: {
                return this.isSubtype(Expression, supertype);
            }
            case Decl:
            case Param: {
                return this.isSubtype(DeclOrParam, supertype);
            }
            case IntArray: {
                return this.isSubtype(IntType, supertype);
            }
            case IntType: {
                return this.isSubtype(Type, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'FuncCall:ref': {
                return Func;
            }
            case 'Lval:ref': {
                return DeclOrParam;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case Arg: {
                return {
                    name: Arg,
                    properties: [
                        { name: 'expression' }
                    ]
                };
            }
            case ArgList: {
                return {
                    name: ArgList,
                    properties: [
                        { name: 'arguments', defaultValue: [] }
                    ]
                };
            }
            case Assignment: {
                return {
                    name: Assignment,
                    properties: [
                        { name: 'distribution' },
                        { name: 'expression' },
                        { name: 'leftValue' }
                    ]
                };
            }
            case BinaryExpression: {
                return {
                    name: BinaryExpression,
                    properties: [
                        { name: 'left' },
                        { name: 'operator' },
                        { name: 'right' }
                    ]
                };
            }
            case Block: {
                return {
                    name: Block,
                    properties: [
                        { name: 'statements', defaultValue: [] }
                    ]
                };
            }
            case BoolLiteral: {
                return {
                    name: BoolLiteral,
                    properties: [
                        { name: 'literal', defaultValue: false }
                    ]
                };
            }
            case Decl: {
                return {
                    name: Decl,
                    properties: [
                        { name: 'names', defaultValue: [] },
                        { name: 'type' }
                    ]
                };
            }
            case Distribution: {
                return {
                    name: Distribution,
                    properties: [
                        { name: 'lower' },
                        { name: 'name' },
                        { name: 'p' },
                        { name: 'q' },
                        { name: 'upper' }
                    ]
                };
            }
            case FileImport: {
                return {
                    name: FileImport,
                    properties: [
                        { name: 'file' }
                    ]
                };
            }
            case Func: {
                return {
                    name: Func,
                    properties: [
                        { name: 'body' },
                        { name: 'declarations', defaultValue: [] },
                        { name: 'name' },
                        { name: 'params' }
                    ]
                };
            }
            case FuncCall: {
                return {
                    name: FuncCall,
                    properties: [
                        { name: 'argumentList' },
                        { name: 'ref' }
                    ]
                };
            }
            case IfThenElse: {
                return {
                    name: IfThenElse,
                    properties: [
                        { name: 'condition' },
                        { name: 'elseBlock' },
                        { name: 'thenBlock' }
                    ]
                };
            }
            case IntegerLiteral: {
                return {
                    name: IntegerLiteral,
                    properties: [
                        { name: 'sign' },
                        { name: 'suffix' },
                        { name: 'value' }
                    ]
                };
            }
            case IntLiteral: {
                return {
                    name: IntLiteral,
                    properties: [
                        { name: 'literal' }
                    ]
                };
            }
            case IntType: {
                return {
                    name: IntType,
                    properties: [
                        { name: 'prefix' }
                    ]
                };
            }
            case LogicalNegation: {
                return {
                    name: LogicalNegation,
                    properties: [
                        { name: 'operand' },
                        { name: 'operator' }
                    ]
                };
            }
            case Lval: {
                return {
                    name: Lval,
                    properties: [
                        { name: 'index' },
                        { name: 'ref' }
                    ]
                };
            }
            case Observation: {
                return {
                    name: Observation,
                    properties: [
                        { name: 'condition' }
                    ]
                };
            }
            case Param: {
                return {
                    name: Param,
                    properties: [
                        { name: 'byRef', defaultValue: false },
                        { name: 'name' },
                        { name: 'type' }
                    ]
                };
            }
            case ParamList: {
                return {
                    name: ParamList,
                    properties: [
                        { name: 'parameters', defaultValue: [] }
                    ]
                };
            }
            case ProbabilisticAssignment: {
                return {
                    name: ProbabilisticAssignment,
                    properties: [
                        { name: 'fallbacks', defaultValue: [] },
                        { name: 'head' },
                        { name: 'probabilities', defaultValue: [] }
                    ]
                };
            }
            case ProbChoice: {
                return {
                    name: ProbChoice,
                    properties: [
                        { name: 'denominator' },
                        { name: 'numerator' }
                    ]
                };
            }
            case Program: {
                return {
                    name: Program,
                    properties: [
                        { name: 'declarations', defaultValue: [] },
                        { name: 'fileImports', defaultValue: [] },
                        { name: 'formula' },
                        { name: 'functions', defaultValue: [] },
                        { name: 'probabilisticQuery' }
                    ]
                };
            }
            case Query: {
                return {
                    name: Query,
                    properties: [
                        { name: 'function' }
                    ]
                };
            }
            case TryCatch: {
                return {
                    name: TryCatch,
                    properties: [
                        { name: 'catchBlock' },
                        { name: 'tryBlock' }
                    ]
                };
            }
            case While: {
                return {
                    name: While,
                    properties: [
                        { name: 'condition' },
                        { name: 'whileBlock' }
                    ]
                };
            }
            case IntArray: {
                return {
                    name: IntArray,
                    properties: [
                        { name: 'prefix' },
                        { name: 'size' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    properties: []
                };
            }
        }
    }
}

export const reflection = new MiniProbAstReflection();
