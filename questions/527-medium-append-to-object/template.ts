type AppendToObject<T, U extends keyof any, V> = { [x in ((keyof T) | U)]: x extends keyof T ? T[x] : V }
