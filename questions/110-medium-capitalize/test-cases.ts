import { Equal, Expect } from '@type-challenges/utils'
import {_Capitalize} from "./template";

type cases = [
  Expect<Equal<_Capitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<_Capitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<_Capitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<_Capitalize<''>, ''>>,
]
