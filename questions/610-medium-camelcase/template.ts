type MyCamelCase<S extends string> = S extends `${infer A}-${infer B}${infer C}` ?
    (B extends Capitalize<B> ? `${A}-${MyCamelCase<`${B}${C}`>}`
        : `${A}${Capitalize<B>}${MyCamelCase<C>}`) : S
