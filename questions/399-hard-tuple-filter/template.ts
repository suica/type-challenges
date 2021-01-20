import {Equal} from "@type-challenges/utils";
type ShouldBeFiltered<From, F> = Equal<From, F> extends true ?
    (Equal<F, never> extends true ? true : false) : (From extends F ? true : false)
type FilterHelper<T extends any[], F, R extends any[]> = T extends [infer A, ...infer B] ? (
    ShouldBeFiltered<A, F> extends true ? FilterHelper<B, F, R> : FilterHelper<B, F, [...R, A]>
    ) : R;
export type FilterOut<T extends any[], F> = FilterHelper<T, F, []>
