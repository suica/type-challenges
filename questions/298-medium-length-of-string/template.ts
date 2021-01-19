type LengthOfString<S extends string> = LengthHelper<S>['length']
type LengthHelper<T extends string> =
    T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}${infer J}${infer K}${infer L}${infer O}` ? [A, B, C, D, E, F, G, H, I, J, K, L, ...LengthHelper<O>] :
        // T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}${infer J}${infer K}${infer L}` ? [A, B, C, D, E, F, G, H, I, J, K, ...LengthHelper<L>] :
            // T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}${infer J}${infer K}` ? [A, B, C, D, E, F, G, H, I, J, ...LengthHelper<K>] :
            //     T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}${infer J}` ? [A, B, C, D, E, F, G, H, I, ...LengthHelper<J>] :
                    T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}` ? [A, B, C, D, E, F, G, H, ...LengthHelper<I>] :
                        // T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}` ? [A, B, C, D, E, F, G, ...LengthHelper<H>] :
        //                     T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}` ? [A, B, C, D, E, F, ...LengthHelper<G>] :
        //                         T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}` ? [A, B, C, D, E, ...LengthHelper<F>] :
        //                             T extends `${infer A}${infer B}${infer C}${infer D}${infer E}` ? [A, B, C, D, ...LengthHelper<E>] :
                                        T extends `${infer A}${infer B}${infer C}${infer D}` ? [A, B, C, ...LengthHelper<D>] :
        //                                     T extends `${infer A}${infer B}${infer C}` ? [A, B, ...LengthHelper<C>] :
                                                T extends `${infer A}${infer B}` ? [A, ...LengthHelper<B>] : [];
