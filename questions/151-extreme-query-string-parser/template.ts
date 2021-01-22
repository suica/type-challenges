type Uniq<T extends any[], R extends any[] = [], Temp extends any = {}> = T[0] extends undefined ? R : (T[0] extends keyof Temp ? Uniq<Next<T>, R, Temp> : Uniq<Next<T>, [...R, T[0]], Temp & { [x in T[0]]: true }>);
type UnBoxArrayIfSingle<T extends any[]> = T['length'] extends 1 ? T[0] : T;
type ParseQueryString<S extends string, O = ParseQueryStringHelper<Split<S, '&'>>> = S extends '' ? {} : { [x in keyof O]: UnBoxArrayIfSingle<Uniq<ToAnyArray<O[x]>>> }
type ParseAsKV<S extends string, Ha extends string[] = Split<S, '='>> = Ha[1] extends undefined ? [Ha[0], true] : [Ha[0], Ha[1]]
type AppendToObjectInArray<T, K extends keyof any, V> = { [x in ((keyof T) | K)]: x extends keyof T ? (x extends K ? [...ToAnyArray<T[x]>, V] : T[x]) : [V] }
type ParseQueryStringHelper<S extends string[], R extends any = {}> = S[0] extends undefined ? R : ParseQueryStringHelper<Next<S>, AppendToObjectInArray<R, ParseAsKV<S[0]>[0], ParseAsKV<S[0]>[1]>>
