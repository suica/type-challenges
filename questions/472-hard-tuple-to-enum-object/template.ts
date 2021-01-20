type ToString<A extends any> = A extends string ? `${A}` : never;
type EnumHelperCount<T extends readonly any[], Switch extends boolean, Count extends any[] = []> =
    [...T] extends [infer A, ...infer B] ? AppendToObject<EnumHelperCount<B, Switch, [...Count, 1]>, Capitalize<ToString<A>>, Switch extends true ? Count['length'] : A> : {}
type Enum<T extends readonly string[], N extends boolean = false> = Readonly<EnumHelperCount<T, N>>
