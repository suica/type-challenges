type IsAny<T> = (T extends 1 & string ? true : false) extends false ? false : true
