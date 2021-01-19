type TupleToFunction<T extends any[], Q> = T extends [infer F, ...(infer R)] ? (a: F) => TupleToFunction<R, Q> : Q;

declare function Currying<T extends any[], R>(fn: (...rest: T) => R): TupleToFunction<T, R>
