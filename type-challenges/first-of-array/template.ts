// export type First<T extends any[]> = T extends [] ? never : T[0];
// export type First<T extends any[]> = T["length"] extends 0 ? never: T[0]
// export type First<T extends any[]> = T[0] extends T[number] ? never : T[0]
export type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

const first = (arr) => {
  return arr[0];
};

// 1. extends类型条件判断
// 2. 获取tuple 的 length属性
// 3. extends union 判断的规则
// 4. inter 的使用 推断
const first2 = (arr) => {
  const [first, ...rest] = arr;
  return first ? first : "never";
};

// 如果arr[]是空数组，那么arr[0]是undefined
