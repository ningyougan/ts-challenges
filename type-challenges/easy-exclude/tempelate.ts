export type MyExclude<T, U> = T extends U ? never : T;

function MyExclude(T: any[], U: any[]) {
  return T.filter((i) => !U.includes(i));
}
