// or declare const sym : unique symbol;
const sym = Symbol();
type DeepObjectToUniq<O extends any, prefix extends string = '', Root = O> = O extends number ? O :
    (O extends object ?
        { [x in keyof O]: DeepObjectToUniq<O[x], `${ToString<x>}${prefix}`, Root> }
        : never) & {
    readonly [sym]?: [Root, prefix];
};
