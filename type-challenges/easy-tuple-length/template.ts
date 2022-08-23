export type Length<T extends readonly any[]> = T["length"];

function Length(arr: []) {
  if (!Array.isArray(arr)) return;
  return arr.length;
}

// tuple => arr
// type => const
