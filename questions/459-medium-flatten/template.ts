type Flatten<T extends readonly any[]> = T extends [infer A, ...infer C] ? [...(A extends Array<unknown> ? Flatten<A> : [A]), ...Flatten<C>] : T
