type StringToUnion<T extends string> = T extends `${infer A}${infer B}` ? A | StrintToUnion<B> : never
