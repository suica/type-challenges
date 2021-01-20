type GetTypeBySpec<S extends string> = S extends `${infer A}${infer B}` ? (A extends 'd' ? number : string) : never;
type FormatHelper<T extends string> = T extends `${infer A}%${infer B}${infer C}` ? [GetTypeBySpec<B>, ...FormatHelper<C>] : []
type TypeTupleToFunction<T, R> =
    T extends any[] ?
        T extends [infer A, ...infer B] ?
            (a: A) => TypeTupleToFunction<B, R>
            : R
        : R;
type Format<T extends string> = TypeTupleToFunction<FormatHelper<T>, string>;
