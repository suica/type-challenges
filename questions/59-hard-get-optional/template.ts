type GetOptional<T> = GetDeletedKeys<T> extends keyof T ? Omit<T, GetDeletedKeys<T>> : never
