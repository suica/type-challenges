> Please follow the template and fill the info. A PR will be auto-generated and always reflect on your changes.
>
> Detailed solution/guide is not required, but please be sure the challenge is solvable.

## Info

Basic info of your challenge questions,

```yaml
difficulty: extreme
title: Range
tags: infer, array
```

## Question

<!--question-start-->

Recursion depth in type system is one of the limitations of TypeScript, the number is around 45.

*We need to go deeper*.

In this challenge, you are given one start index and one end index, by which a range of natural numbers is sliced. You should develop a technique that enables you to do recursion deeper than the original limitation, because both start index and end index vary from 0 to 200.

<!--question-end-->

## Template

This is the template for challengers to start the coding. Basically, you just need to change the name of your generic/function and leave to implementation `any`.

```ts
type InclusiveRange<Start extends number,End extends number> = any

```

## Test Cases

Provide some test cases for your challenge, you can use some utils from `@type-challenges/utils` for asserting.

```ts
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'
type cases = [
  Expect<Equal<true, true>>
]
```
