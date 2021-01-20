type CamelCaseHelper<S extends any[]> = S extends [infer A, ...infer B] ? `${Capitalize<ToString<A>>}${CamelCaseHelper<B>}` : '';
type CamelCase<S extends string> = Uncapitalize<CamelCaseHelper<Split<Lowercase<S>, '_'>>>
