/**
 * Finishes: a placed item's own wood, fabric and front colour in the homely styles (the neon looks draw every
 * item in their own colours). They replace the palette roles an item is built from ("wood", "fabric" and
 * "cushion", "white"), so they work for the built-in furniture and for every pack item alike. Pure data, shared
 * by the editor (swatches) and the 3D bundle (colours).
 */
import type { Furniture } from "./model.ts";
import type { PackItem } from "./packs.ts";

export type FinishRole = "wood" | "fabric" | "front";
export const FINISH_ROLES: readonly FinishRole[] = ["wood", "fabric", "front"];

/** The swatches of each role: a short id and its colour. */
export const FINISH_SWATCHES: Record<FinishRole, readonly { id: string; hex: string }[]> = {
  wood: [
    { id: "oak_light", hex: "#c9a375" },
    { id: "oak", hex: "#a67a52" },
    { id: "walnut", hex: "#6b4a32" },
    { id: "white", hex: "#ece8e1" },
    { id: "grey", hex: "#8c8f94" },
    { id: "black", hex: "#2e2e31" },
  ],
  fabric: [
    { id: "grey", hex: "#8e97a5" },
    { id: "anthracite", hex: "#4a4f58" },
    { id: "beige", hex: "#cbb89a" },
    { id: "blue", hex: "#4a6a9a" },
    { id: "green", hex: "#5d7d5a" },
    { id: "rust", hex: "#a5583a" },
    { id: "mustard", hex: "#c9a03a" },
    { id: "rose", hex: "#c99aa0" },
  ],
  front: [
    { id: "white", hex: "#edebe7" },
    { id: "cream", hex: "#e9dfc8" },
    { id: "grey", hex: "#9ea3a8" },
    { id: "sage", hex: "#9fae96" },
    { id: "blue", hex: "#5d7590" },
    { id: "black", hex: "#34363a" },
  ],
};

/** Built-in furniture and the roles it is drawn with (read from its builder; devices keep their own colours). */
const BUILTIN: Record<string, readonly FinishRole[]> = {
  sofa: ["fabric", "wood"],
  sofa_l: ["fabric", "wood"],
  sofa_u: ["fabric", "wood"],
  armchair: ["fabric", "wood"],
  bed: ["fabric", "wood", "front"],
  bunk_bed: ["wood", "front"],
  chair: ["fabric", "wood"],
  bench: ["fabric", "wood"],
  corner_bench: ["fabric", "wood"],
  stool: ["fabric", "wood"],
  bar_stool: ["fabric"],
  office_chair: ["fabric"],
  rug: ["fabric"],
  table: ["wood"],
  table_round: ["wood"],
  coffee_table: ["wood"],
  desk: ["wood"],
  shelf: ["wood"],
  sideboard: ["wood"],
  dresser: ["wood"],
  coat_rack: ["wood"],
  stairs: ["wood"],
  stairs_u: ["wood"],
};

/** The roles an item can take a finish for (empty: none, e.g. a device). */
export function finishRolesOf(type: string, pack: PackItem | null): FinishRole[] {
  if (!pack) return [...(BUILTIN[type] ?? [])];
  const used = new Set(pack.parts.flatMap((p) => [p.color, p.top]));
  const out: FinishRole[] = [];
  if (used.has("wood")) out.push("wood");
  if (used.has("fabric") || used.has("cushion")) out.push("fabric");
  if (used.has("white")) out.push("front");
  return out;
}

/** The colour a placed item takes for a role, or null for the look's own. */
export function finishHex(f: Pick<Furniture, "finish">, role: FinishRole): string | null {
  const h = f.finish?.[role];
  return typeof h === "string" && /^#[0-9a-f]{6}$/i.test(h) ? h : null;
}
