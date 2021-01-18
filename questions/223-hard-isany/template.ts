type IsAny<T> = (T extends 1 & string ? true : false) extends false ? false : true
type a = IsAny<any>
type b = IsAny<unknown>
