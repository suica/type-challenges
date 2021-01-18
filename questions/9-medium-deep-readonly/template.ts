type DeepReadonly<T> = T extends Function ? T : (T extends {} ? { readonly [x in keyof T]: DeepReadonly<T[x]> } : T)
