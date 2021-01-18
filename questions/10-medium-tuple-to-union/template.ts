type TupleToUnion<T extends any[]> = T extends [...(infer A), infer C] ? (unknown extends C ? never : C | TupleToUnion<A>) : T;
