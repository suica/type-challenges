type InclusiveSplit<S extends string, P extends string> = S extends `${infer A}${P}${infer C}` ? [A, P, ...InclusiveSplit<C, P>] : [S]
type CapitalizeWords<S extends string> = CapitalizeWordsWithSep<CapitalizeWordsWithSep<CapitalizeWordsWithSep<S, '.'>, ' '>, ','>
type CapitalizeWordsWithSep<S extends string, Sep extends string> = CapitalizeWordsHelper<InclusiveSplit<S, Sep>>
type CapitalizeWordsHelper<T extends string[]> = T['length'] extends 0 ? '' :
    T extends [infer First, ...infer R] ?
        (First extends string ?
            (R extends string[] ? `${Capitalize<First>}${CapitalizeWordsHelper<R>}` : never)
            : never)
        : ''
type c = CapitalizeWords<'foo bar'>
