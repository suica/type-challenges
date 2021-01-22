import {Equal} from "@type-challenges/utils";

type Mark<T> = { [x in keyof T]: Equal<{ - readonly [k in x]: T[k] }, { [k in x]: T[k] }> extends false ? x : never }
export type GetReadonlyKeys<T> = NonNullable<Mark<T>[keyof Mark<T>]>;
