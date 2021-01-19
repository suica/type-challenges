const deleteSymbol = Symbol();
type MarkAsDeleteSymbol<T> = { [x in keyof T]-?: Partial<Pick<T, x>> extends Pick<T, x> ? typeof deleteSymbol : T[x] }
type GetDeletedKeys<T> = keyof T extends infer x ? (x extends keyof MarkAsDeleteSymbol<T> ? (MarkAsDeleteSymbol<T>[x] extends typeof deleteSymbol ? never : x) : 1) : 2
type GetRequired<T> = GetDeletedKeys<T> extends keyof T ? Pick<T, GetDeletedKeys<T>> : never

// 这里用到了一个非常重要的模式：marked object to keys
