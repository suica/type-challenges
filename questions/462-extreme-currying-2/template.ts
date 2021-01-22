declare function DynamicParamsCurrying<T extends any, P extends any[]>(fn: (...args: [...P]) => T): CurringHelper<[], P, T>
type CurringHelper<Old extends any[], Total extends any[], Ret> = Old['length'] extends Total['length'] ? Ret : <New extends any[]>(...args: New) => CurringHelper<[...Old, ...New], Total, Ret>
