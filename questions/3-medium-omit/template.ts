type _Exclude<T, K> = T extends K ? never : T
type MyOmit<T, K extends keyof T> = { [x in _Exclude<keyof T, K>]: x extends K ? never : T[x] }
