type ToNumberHelper<S extends string, R extends any[] = []> = `${R['length']}` extends S ? R['length'] : ToNumberHelper<S, [1, ...R]>;
type ToNumber<S extends string> = ToNumberHelper<S>
