export type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
// export type Concat<T extends any[], U extends any[]> = [...T, ...U];

// js

function concat(a, b) {
  return [...a, ...b];
}
