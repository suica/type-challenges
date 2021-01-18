type MyReadonly2<T, K extends keyof T = keyof T> = T & { readonly [x in K]: T[x]}
