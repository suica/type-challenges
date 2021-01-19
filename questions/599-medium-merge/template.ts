type Merge<F, S> = { [x in keyof (F & S)]: x extends (keyof (F | S)) ? S[x] : (x extends keyof F ? F[x] : never) }

type Foo = {
    a: number;
    b: string;
};
type Bar = {
    b: number;
};

type a = Merge<Foo, Bar>
