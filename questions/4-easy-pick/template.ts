type MyPick<T, K extends keyof T> = { [x in K] : T[x] };
