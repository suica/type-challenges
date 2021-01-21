type DigitStringToArray<S extends string, R extends any[] = []> =
    S extends '' ? R : (`${R['length']}` extends S ? R : DigitStringToArray<S, [...R, 1]>)
type Mod10<T extends any[]> = T extends [infer A1, infer A2, infer A3, infer A4, infer A5, infer A6, infer A7, infer A8, infer A9, infer A10, ...infer R] ? [R, [1]] : [T, []]
type NumberStringToArray<S extends string> = S extends `${infer L}${infer R}` ? [DigitStringToArray<L>, ...NumberStringToArray<R>] : DigitStringToArray<S>
type ArrayToDigitString<T extends any[], R extends string = ''> = T[0] extends undefined ? R : ArrayToDigitString<Next<ToAnyArray<T>>, `${R}${T[0]['length']}`>;
type ReverseString<S extends string, R extends string = ''> = S extends `${infer A}${infer B}` ? ReverseString<B, `${A}${R}`> : R
type SumHelper<A extends any[], B extends any[], R extends any[] = [], K extends any[] = []> =
    A[0] extends undefined ?
        (B[0] extends undefined ?
            (K extends [1] ? [[1], ...R] : R)
            : SumHelper<B, A, R, K>)
        :
        (B[0] extends undefined ? SumHelper<Next<A>, [], [Mod10<[...K, ...A[0]]>[0], ...R], Mod10<[...K, ...A[0]]>[1]> :
            (SumHelper<Next<A>, Next<B>, [Mod10<[...K, ...A[0], ...B[0]]>[0], ...R], Mod10<[...K, ...A[0], ...B[0]]>[1]>)
            )
type Next<T extends any[]> = T extends [infer A, ...infer R] ? R : []
type ToAnyArray<T> = T extends any[] ? T : never
type Sum<A extends string | number | bigint, B extends string | number | bigint> = ArrayToDigitString<SumHelper<NumberStringToArray<ReverseString<`${A}`>>, NumberStringToArray<ReverseString<`${B}`>>>>
