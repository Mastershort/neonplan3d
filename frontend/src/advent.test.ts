import assert from "node:assert/strict";
import { test } from "node:test";
import { adventCandles } from "./packs.ts";

test("Advent candles: one more each Sunday of Advent, all four until 6 January, none the rest of the year", () => {
  const on = (y: number, m: number, d: number, h = 12) => adventCandles(new Date(y, m - 1, d, h));
  // 2026: 24 December is a Thursday – the Sundays of Advent are 29 November, 6, 13 and 20 December
  assert.deepEqual([on(2026, 11, 28), on(2026, 11, 29, 0), on(2026, 12, 5), on(2026, 12, 6), on(2026, 12, 13), on(2026, 12, 20), on(2026, 12, 31)], [0, 1, 1, 2, 3, 4, 4]);
  assert.deepEqual([on(2027, 1, 6), on(2027, 1, 7), on(2026, 7, 1)], [4, 0, 0]);
  // 2023: 24 December was itself the fourth Sunday of Advent
  assert.deepEqual([on(2023, 12, 2), on(2023, 12, 3), on(2023, 12, 23), on(2023, 12, 24)], [0, 1, 3, 4]);
});
