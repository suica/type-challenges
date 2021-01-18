type _TupleToUnion<T extends any[]> = T extends [...(infer A), infer C] ? (unknown extends C ? never : C | _TupleToUnion<A>) : T;
type TupleToUnion<T extends any[]> = T extends [infer A, ...(infer C)] ? (unknown extends A ? never : A | TupleToUnion<C>) : never;
