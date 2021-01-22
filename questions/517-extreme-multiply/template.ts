// a solution that doesn't fully utilize the sum type... and contains some too deep instantiation errors.
// @ts-expect-error
type Multiply<A extends string | number | bigint, B extends string | number | bigint> = ReduceSum<MultiplyArrayWith<`${A}`, ReverseStringToArray<`${B}`>>>;
type ReverseStringToArray<S extends string, R extends any[] = []> = S extends `${infer A}${infer B}` ? ReverseStringToArray<B, [A, ...R]> : R
type Repeat<Long extends string, Digit extends string, Counter extends any[] = [], R extends string[] = []> =
    Digit extends '0' ?
        '0' :
        (`${Counter['length']}` extends `${Digit}` ?
            R :
            (Repeat<Long, Digit, [...Counter, 1], [...R, Long]>));
type PaddingRight<S extends [string, number], Counter extends any[] = [], Times extends number = S[1]> = `${Counter['length']}` extends `${Times}` ? S[0] :
    (S[0] extends '0' ? '0' : `${PaddingRight<S, [1, ...Counter]>}0`);
type MultiplyArrayWith<Long extends string, Arr extends string[], Counter extends any[] = [], R extends string[] = []> =
// @ts-expect-error
    Arr[0] extends undefined ? R : MultiplyArrayWith<Long, Next<Arr>, [...Counter, 1], [...R, PaddingRight<[ReduceSum<Repeat<Long, Arr[0]>>, Counter['length']]>]>
// @ts-expect-error
type ReduceSum<T extends string[], R extends string = '0'> = T[0] extends undefined ? R : ReduceSum<Next<T>, Sum<R, T[0]>>
