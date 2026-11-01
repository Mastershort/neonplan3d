import assert from "node:assert/strict";
import { test } from "node:test";
import { markPrintSeen, PRINT_URL, printDot, printSeen } from "./print.ts";

test("the print dot shows for supporters only, until they have opened the extensions page", () => {
  assert.equal(printDot(true, false), true);
  assert.equal(printDot(true, true), false);
  assert.equal(printDot(false, false), false);
  assert.equal(printDot(false, true), false);
});

test("opening the extensions page is remembered; without storage there is no dot", () => {
  const store = new Map<string, string>();
  const fake = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };
  const before = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  try {
    Object.defineProperty(globalThis, "localStorage", { value: fake, configurable: true, writable: true });
    assert.equal(printSeen(), false);
    markPrintSeen();
    assert.equal(printSeen(), true);
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      get() {
        throw new Error("blocked");
      },
    });
    assert.equal(printSeen(), true);
    assert.doesNotThrow(() => markPrintSeen());
  } finally {
    if (before) Object.defineProperty(globalThis, "localStorage", before);
    else delete (globalThis as { localStorage?: unknown }).localStorage;
  }
});

test("the print site is linked without any code in the address", () => {
  assert.equal(PRINT_URL, "https://print.mastershort.de/");
});
