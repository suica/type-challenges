import {Equal} from "@type-challenges/utils";
export type Permutation<U, P = U> = Equal<U, never> extends true ? [] : (P extends infer A ? ([...Permutation<Exclude<U, A>> extends never ? [] : Permutation<Exclude<U, A>>, A]) : never)
