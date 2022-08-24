import type { Equal, Expect } from "@type-challenges/utils";
import type { MyExclude } from "./tempelate";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

type t1 = Exclude<"a" | "b" | "c", "a">;
