// @ts-expect-error
type LengthOfString<S extends string> = LengthHelper<S>['length']
type LengthHelper<T extends string> = T extends `${infer A}${infer B}`?[A,...LengthHelper<B>]:[];
