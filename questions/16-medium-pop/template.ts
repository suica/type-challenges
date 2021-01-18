type Pop<T extends any[]> = T extends [...(infer A), infer C] ? A : never
