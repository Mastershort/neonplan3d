/**
 * Finishes: a placed item's own wood, fabric, front and carcass colour in the homely styles (the neon looks draw
 * every item in their own colours). They replace the palette roles an item is built from ("wood", "fabric" and
 * "cushion", "front" and "white"), so they work for the built-in furniture and for every pack item alike. A pack part
 * in another colour ("#rrggbb", or a role like "dark") can name the finish it follows (its `finish`) and keeps its
 * colour without one.
 * Pure data, shared by the editor (swatches) and the 3D bundle (colours).
 *
 * Fronts and carcass (#1177): door and drawer fronts are "front" parts, the carcass is "white". The front finish
 * colours both as long as no carcass ("body") finish is set – that is how a front finish always looked; a carcass
 * finish takes the "white" parts over.
 */
import type { Furniture } from "./model.ts";
import type { PackItem } from "./packs.ts";

export type FinishRole = "wood" | "fabric" | "front" | "body";
export const FINISH_ROLES: readonly FinishRole[] = ["wood", "fabric", "front", "body"];

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
  body: [
    { id: "white", hex: "#edebe7" },
    { id: "cream", hex: "#e9dfc8" },
    { id: "grey", hex: "#9ea3a8" },
    { id: "oak_light", hex: "#c9a375" },
    { id: "walnut", hex: "#6b4a32" },
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
  // the worktop slab of a kitchen run, an island or a worktop on its own takes the wood finish
  kitchen: ["wood"],
  island: ["wood"],
  worktop: ["wood"],
  stairs: ["wood"],
  stairs_u: ["wood"],
};

/** The roles an item can take a finish for (empty: none, e.g. a device). */
export function finishRolesOf(type: string, pack: PackItem | null): FinishRole[] {
  if (!pack) return [...(BUILTIN[type] ?? [])];
  const used = new Set<string>();
  for (const p of pack.parts) {
    // a lamp's glowing parts shine in its light's colour: no finish reaches them
    if (pack.light && p.glow) continue;
    used.add(p.color);
    if (p.top) used.add(p.top);
    if (p.finish) used.add(`finish:${p.finish}`);
  }
  const out: FinishRole[] = [];
  if (used.has("wood") || used.has("finish:wood")) out.push("wood");
  if (used.has("fabric") || used.has("cushion") || used.has("finish:fabric")) out.push("fabric");
  const front = used.has("front") || used.has("finish:front");
  if (front || used.has("white")) out.push("front");
  // a carcass of its own only where fronts and carcass are told apart (or a part asks for it)
  if ((front && used.has("white")) || used.has("finish:body")) out.push("body");
  return out;
}

/** The palette roles a finish colours: what a placed item's finish gives each of them ("#rrggbb"). */
export type FinishTarget = "wood" | "fabric" | "front" | "white";

/**
 * The colours a placed item's finish gives the palette roles. "front" parts take the front finish; "white" parts the
 * carcass finish, or the front finish while there is none (a finish of an older plan keeps its look).
 */
export function finishTargets(f: Pick<Furniture, "finish">): Partial<Record<FinishTarget, string>> {
  const out: Partial<Record<FinishTarget, string>> = {};
  const wood = finishHex(f, "wood");
  const fabric = finishHex(f, "fabric");
  const front = finishHex(f, "front");
  const body = finishHex(f, "body") ?? front;
  if (wood) out.wood = wood;
  if (fabric) out.fabric = fabric;
  if (front) out.front = front;
  if (body) out.white = body;
  return out;
}

/** The palette role a pack part's own `finish` follows ("body" is the carcass: the "white" parts). */
export function finishTargetOf(role: FinishRole): FinishTarget {
  return role === "body" ? "white" : role;
}

/** The colour a placed item takes for a role, or null for the look's own. */
export function finishHex(f: Pick<Furniture, "finish">, role: FinishRole): string | null {
  const h = f.finish?.[role];
  return typeof h === "string" && /^#[0-9a-f]{6}$/i.test(h) ? h : null;
}
