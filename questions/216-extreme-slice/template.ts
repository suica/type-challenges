type NumberToArray<N extends number | string, R extends any[] = []> = `${R['length']}` extends `${N}` ? R : NumberToArray<N, [...R, 1]>;
type IsNegative<N extends number> = `${N}` extends `-${infer A}` ? true : false;
type ArrayIndexEqual<Arr extends any[], PositiveIndex extends any[], PossibleNegativeIndex extends number, L extends number = Arr['length']> =
    (IsNegative<PossibleNegativeIndex> extends true ?
        ([...NumberToArray<Absolute<PossibleNegativeIndex>>, ...NumberToArray<PositiveIndex['length']>] extends NumberToArray<L> ?
            true :
            false) :
        PositiveIndex['length'] extends PossibleNegativeIndex ?
            true :
            false)
type SliceHelper<Arr extends any[], Start extends number, End extends number, ShouldInclude extends boolean = false, i extends any[] = [], R extends any[] = [], ShortArr extends any[] = Arr> =
    ShortArr extends [] ? R :
        (ArrayIndexEqual<Arr, i, End> extends true ?
            R :
            (ShouldInclude extends true ?
                SliceHelper<Arr, Start, End, true, [...i, 1], [...R, ShortArr[0]], Next<ShortArr>> :
                (ArrayIndexEqual<Arr, i, Start> extends true ?
                    SliceHelper<Arr, Start, End, true, i, R, ShortArr> :
                    SliceHelper<Arr, Start, End, ShouldInclude, [...i, 1], R, Next<ShortArr>>)))
type Slice<Arr extends any[], Start extends number | null = null, End extends number | null = null, ShouldInclude extends boolean = false> = Start extends number ?
    (End extends number ?
        SliceHelper<Arr, Start, End> :
        SliceHelper<Arr, Start, Arr['length']>) :
    Arr
