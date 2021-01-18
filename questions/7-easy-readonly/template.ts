type MyReadonly<T> = { readonly [x in keyof T]: T[x] }
