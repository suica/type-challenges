type TupleToObject<T extends readonly any[]> = {[x in TupleToUnion<T>]:x}
