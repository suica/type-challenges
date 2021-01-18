type Chainable<T = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & { [x in TupleToUnion<[K]>]: V }>
    get(): T
}
