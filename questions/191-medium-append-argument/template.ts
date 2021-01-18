type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never
type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
