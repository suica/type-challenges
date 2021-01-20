type Trim<S extends string> = S extends `${Blank}${infer R}` ? Trim<R> : (S extends `${infer L}${Blank}` ? Trim<L> : S)
