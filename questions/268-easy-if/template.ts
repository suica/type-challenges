type If<C extends boolean, T, F> = C extends false ? F : T
