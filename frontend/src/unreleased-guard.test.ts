// Guard: an add-on on the UNRELEASED list must not show anywhere public – not in the manuals, the README, the
// changelog or the roadmap. CI fails as soon as one of these texts names it (it happened once: Pool Pro showed
// for two releases). Releasing an add-on means taking it off UNRELEASED first.

import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { UNRELEASED } from "./features.ts";

const ROOT = join(import.meta.dirname, "..", "..");
const PUBLIC = ["README.md", "CHANGELOG.md", "ROADMAP.md", "docs/manual.md", "docs/anleitung.md"];

/** The names users would read for each gated add-on (case-insensitive). */
const NAMES: Record<string, RegExp> = {
  pool: /pool\s*pro|pro_pool|pool-modul|pool module/i,
  diagnostics: /diagnostics_report|debug[- ]daten|nutzungs- und fehlerberichte|usage and error reports/i,
  locate: /\bortung\b|raumortung|bluetooth[- ]ortung|\blocating\b|room locating/i,
  fun_winter: /winter\s*(&|und|and)\s*(weihnachten|christmas)|fun_winter|adventskranz|advent wreath/i,
  // the room bar at the bottom (not the floor and room chips at the top, which older texts call the room bar too)
  room_bar: /raum-leiste|room_bar|no room bar|room bar at the bottom|front of the room bar/i,
};

test("unreleased add-ons are named in no public text", () => {
  for (const feature of UNRELEASED) {
    const name = NAMES[feature];
    assert.ok(name, `add a public name pattern for the unreleased add-on "${feature}" to NAMES`);
    for (const file of PUBLIC) {
      const text = readFileSync(join(ROOT, file), "utf8");
      const lines = text.split("\n").map((line, i) => [i + 1, line] as const).filter(([, line]) => name.test(line));
      assert.deepEqual(lines, [], `${file} names the unreleased add-on "${feature}" (lines ${lines.map(([n]) => n).join(", ")})`);
    }
  }
});

test("Pool Pro stays unreleased until it is released on purpose", () => {
  assert.ok(UNRELEASED.includes("pool" as never), "Pool Pro left the UNRELEASED list – only do that when Torsten releases it");
});

test("no local test harness and nothing private is tracked by git", () => {
  // frontend/_*.mjs are local screenshot and probe scripts (they name private modules and local paths); private/ is
  // never public. Both slipped into a merge commit once.
  let tracked: string[];
  try {
    tracked = execSync("git ls-files", { cwd: ROOT, encoding: "utf8" }).split("\n");
  } catch {
    return; // not a git checkout (a release archive): nothing to check
  }
  const bad = tracked.filter((f) => /^frontend\/_[^/]+\.(m?js|mts|ts)$/.test(f) || f.startsWith("private/"));
  assert.deepEqual(bad, [], `tracked by git but must stay local: ${bad.join(", ")}`);
});
