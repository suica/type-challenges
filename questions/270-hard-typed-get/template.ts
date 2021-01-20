type Split<S extends string, P extends string> = S extends `${infer A}${P}${infer C}` ? [A, ...Split<C, P>] : [S]
type GetHelper<D, K extends any[]> =
    K['length'] extends 0 ? D : (
        K[0] extends keyof D ? (
            (K extends [infer A, ...infer B] ?
                GetHelper<D[K[0]], B>
                : never)
            ) : never)
type Get<T, K extends string> = GetHelper<T, Split<K, '.'>>
