type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

// 类型是具有某一种标签的所有物件的(可为无穷)集合
// 两个类型的并可以看成是两个无穷集的并
// 两个object的字段并可以写成
// type a = keyof (Foo & Bar) // 'name'|'age'|'gender'
// 两个object的字段交可以写成
// type b = keyof (Foo | Bar) // 'name'|'age'
// 因此只需要从并中剔除交就得到了对称差
// type c = Exclude<a, b>

type Foo = {
    name: string
    age: string
}
type Bar = {
    name: string
    age: string
    gender: number
}
type test0 = Diff<Foo, Bar>   // { gender: number }
