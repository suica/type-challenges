export type _Capitalize<S extends string> = S extends `${infer First}${infer R}` ? `${Uppercase<First>}${R}` : S
