type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}

type Helper<T extends string, R extends string[] = []> = T extends `${infer A}%${infer B}${infer Rest}` ? B extends keyof ControlsMap ? Helper<Rest, [...R, ControlsMap[B]]> : Helper<Rest, R> : R
type ParsePrintFormat<T extends string> = Helper<T>

type b = ParsePrintFormat<'Hello %s: score is %d.'>
