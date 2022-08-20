export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

function tupleToObject(array: []) {
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

// 1. 返回一个对象
// 2. 遍历一个array T[number]
// const let js
// type interface

// 1. typeof
// 2. 字面量类型
