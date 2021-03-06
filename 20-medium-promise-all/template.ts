declare function PromiseAll<T extends unknown[]>(
  params: readonly [...T]
): Promise<{
  [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
}>

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
