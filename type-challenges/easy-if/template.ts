export type If<C extends boolean, T, F> = C extends true ? T : F;

//js

function IF(c, t, f) {
  return c ? t : f;
}

// null 严格模式 非严格模式区别
// type-compatibility
