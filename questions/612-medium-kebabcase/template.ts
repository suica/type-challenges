type Clear<S extends string> = S extends '-' ? S : (S extends `-${infer A}` ? A : S);
type KebabCase<S extends string, R extends string = ''> = Clear<S extends `${infer A}${infer B}` ?
    (IsUpperCase<A> extends true ? KebabCase<B, `${R}-${Lowercase<A>}`> : KebabCase<B, `${R}${A}`>)
    : `${R}${S}`>;

type IsUpperCase<S extends string> = S extends Uppercase<S> ?
    (S extends Lowercase<S> ? false : true) : false;
