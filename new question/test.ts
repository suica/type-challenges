// type RepeatString<S extends string, Times extends string, R extends string = '', Counter extends any[] = []> = `${Counter['length']}` extends Times ? R : RepeatString<S, Times, `${R}${S}`, [...Counter, 1]>;
// type PrimeFactors = [2, 3, 5, 7];
// type MyNext<T extends any[]> = T extends [infer A, ...infer R] ? R : []
//
// type GetPrimeStrings<T extends number[], R extends string = '',F extends string = `${T[0]}`> = T[0] extends undefined ? R : (RepeatString<'1',F> extends infer A?GetPrimeStrings<MyNext<T>,`${ToString<A> | ''}${R}`> : never );
// type B = GetPrimeStrings<PrimeFactors>
type State = [number, number, any[], any[]];
type Generate<T extends [number, number, any[], any[]], Limit extends number = T[0], Target extends number = T[1], Counter extends any[] = T[2], R extends any[] = T[3]> =
    R['length'] extends Target ? [Limit, Target, Counter, R] :
        (Counter['length'] extends Limit ? [Limit, Target, [], R] :
            Generate<[Limit, Target, [...Counter, 1], [...R, R['length']]]>);

// type IterateForTimes<FunctionCallingConfig extends State, IterConfig extends State, R extends State> =
//     IterConfig[Target] extends IterConfig[Counter] ? R :
//         IterateForTimes<FunctionCallingConfig, [IterConfig[Limit], IterConfig[Target], IterConfig[Counter], IterConfig[Result]], R>;

// type IterateForTimes<FunctionCallingConfig extends State, Target extends number, Counter extends any[] = []> =
//     Counter['length'] extends Target ?
//         Generate<FunctionCallingConfig> :
//         (IterateForTimes<FunctionCallingConfig, Target, [...Counter, 1]> extends infer R ? Generate<ToState<R>> : never);



type ToState<T> = T extends State ? T : never
type Iterate<InitState extends State, Target extends number, Counter extends any[] = []> = Counter['length'] extends Target ?
    Generate<InitState> :
    ( Iterate<State, Target, [...Counter, 1]> extends infer A ? Generate<ToState<A>> : never )

// type c = Generate<Generate<Generate<Generate<Generate<[22, 200, [], []]>>>>>
// type d = IterateForTimes<[22, 200, [1], []], 1, [1,]>
type c = Iterate<[22, 200, [], []], 1>

// Generate<FunctionCallingConfig>;
// Generate<[S[0], S[1], S[2], S[3]]>
// type C = Generate<Generate<Generate<Generate<Generate<Generate<[22, 200, [], []]>>>>>>

// extends [infer Limit, infer Target, infer Counter, infer R] ? Generate<[Limit, Target, [], ToAnyArray<R>]> : never

// type Digit = 0 | 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9
// type W<T = `${Digit}${Digit}${Digit}`> = T extends `${infer A}62${infer C}` ? `${A}62${C}` : never

// type UnionToTuple<T, Term = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never> = Equal<T, never> extends true ? [] : [...UnionToTuple<Exclude<T, Term>>, Term]
//
// import {Equal, Expect} from '@type-challenges/utils'
//
// type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]
//
// type cases = [
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
//     Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
// ]

// type D = ((()=>1) & (()=>true)) | ((()=>true) & (()=>1))

// // TS4.0+
// type Push<T extends any[], V> = [...T, V];
//
// // TS4.1+
// type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
//     true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>
//
// type abc = 'a' | 'b' | 'c';
// type t = TuplifyUnion<abc>;
// type w = TuplifyUnion<W>['length'];
// type k = LastOf<'a' | never>;

// type Times10<T extends any[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];
// type StringToDigit<S extends string, Counter extends any[] = []> = `${Counter['length']}` extends S ? Counter : StringToDigit<S, [...Counter, 1]>;
// type ParseHelper<S extends string, Result extends any[] = []> = S extends "" ? Result['length'] :
//     (S extends `${infer A}${infer B}` ? ParseHelper<B, [...Times10<Result>, ...StringToDigit<A>]> : never)
// type ParseIntegerString<S extends string> = ParseHelper<S>;
//
// type A = ParseIntegerString<'115'>
