type Desc<D, M, C> = {
    data?: () => D;
    methods?: M & ThisType<D & M & { [x in keyof C]: C[x] extends (...args: any[]) => any ? ReturnType<C[x]> : never }>;
    computed?: C & ThisType<D & M>;
}

declare function SimpleVue<D, M, C>(options: Desc<D, M, C>): D & M & C

declare function alert(a: any): void;
