enum Comparison {
    Greater,
    Equal,
    Lower,
}

type NotPositive<S extends number> = S extends 0 ? true : (Absolute<S> extends `${S}` ? false : true)

type NatLT<A extends number, B extends number, cur extends any[] = []> =
    A extends B ? false :
        `${cur['length']}` extends Absolute<B> ? false :
            `${cur['length']}` extends Absolute<A> ? true :
                NatLT<A, B, [...cur, 1]>

type Comparator<A extends number, B extends number> =
    A extends B ?
        Comparison.Equal :
        (([NotPositive<A>, NotPositive<B>] extends [true, true] ? (NatLT<A, B> extends true ? false : true) :
            ([NotPositive<A>, NotPositive<B>] extends [true, false] ? true :
                NotPositive<B> extends true ? false : NatLT<A, B>)
            ) extends true ?
            Comparison.Lower :
            Comparison.Greater)
