import { Equal } from "@type-challenges/utils";
export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

// 1. 用递归实现数组
// 2. ts 模块化规范

// function Includes(list, key) {
//   function _(list, key) {
//     if (list.length == 0) return false;
//     const [first, ...rest] = list;

//     if (first == key) {
//       return true;
//     } else {
//       return _(rest, key);
//     }
//   }
//   return _(list, key);
// }
