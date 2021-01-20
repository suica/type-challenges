import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyCamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<MyCamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<MyCamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<MyCamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<MyCamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<MyCamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<MyCamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<MyCamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<MyCamelCase<'-'>, '-'>>,
  Expect<Equal<MyCamelCase<''>, ''>>,
  Expect<Equal<MyCamelCase<'😎'>, '😎'>>,
]
