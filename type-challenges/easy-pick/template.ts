export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

function MyPick(todo, keys) {
  const obj = {};

  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });

  return obj;
}

/* 
1. 返回一个对象
2. 遍历foreach mapped
3. todo[key] 取值indexed
4. 看看 key 在不在todo 里面
  1. keyof lookup
  2. extends 条件约束
 */
