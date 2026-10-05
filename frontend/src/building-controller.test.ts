import assert from "node:assert/strict";
import { test } from "node:test";
import { compareVersions } from "./building-controller.ts";

test("versions compare numerically, so 1.10.1 is newer than 1.9.2", () => {
  assert.ok(compareVersions("1.10.1", "1.9.2") > 0);
  assert.ok(compareVersions("1.9.2", "1.10.0") < 0);
  assert.equal(compareVersions("1.10.0", "1.10.0"), 0);
  assert.ok(compareVersions("2.0.0", "1.99.99") > 0);
});
