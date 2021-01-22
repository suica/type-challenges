type ArbitraryFunction = (...args: any) => any;
type ToFunction<T> = T extends ArbitraryFunction ? T : never
type ToClass<T> = T extends new (...args: any[]) => any ? T : never
type FunctionTupleToReturnTypeUnion<T extends any[], R extends any = never> = T[0] extends undefined ? R : FunctionTupleToReturnTypeUnion<Next<T>, R | ReturnType<ToFunction<T[0]>>>
type TransformToProps<P> = {
    [x in keyof P]: P[x] extends ArbitraryFunction ?
        ReturnType<P[x]> :
        (P[x] extends { type: infer A } ?
            (A extends ArbitraryFunction ?
                ReturnType<A> :
                (A extends [...infer T] ? FunctionTupleToReturnTypeUnion<T> :
                    InstanceType<ToClass<A>>)) :
            any)
}
type VueBasicPropsDesc<D, M, C, P> = {
    props?: P;
    data?: (this: TransformToProps<P>) => D;
    methods?: M & ThisType<D & M & { [x in keyof C]: C[x] extends (...args: any[]) => any ? ReturnType<C[x]> : never } & TransformToProps<P>>;
    computed?: C & ThisType<D & M>;
}

declare function VueBasicProps<D, M, C, P>(options: VueBasicPropsDesc<D, M, C, P>): P
