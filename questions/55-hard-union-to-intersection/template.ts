// A wrong solution, but don't know why

// import {Permutation} from "../296-medium-permutation/template";
// type TupleToIntersection<T> = T extends [infer First, ...infer Rest] ? First & TupleToIntersection<Rest> : unknown
// export type UnionToIntersection<U> = Permutation<U> extends infer A ?[A, TupleToIntersection<A>] : never;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
