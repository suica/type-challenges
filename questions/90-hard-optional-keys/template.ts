type OptionalKeys<T> = Exclude<keyof T,GetDeletedKeys<T>>
