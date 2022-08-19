export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function readonly(obj: Object) {
  const result = {};

  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }
  return result;
}

// 1. 返回一个对象
// 2. 遍历 obj (js对象 ts接口) in -> mapped keyof -> lookup
// 3. 加上 readonly 关键字
// 4. 通过key来获取obj(接口) 里面的值
