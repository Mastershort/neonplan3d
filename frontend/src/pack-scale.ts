// Free sizes with fixed parts: a pack item's parts are fractions of its size, so a stretched sofa would get thick
// arms and fat legs. A part may say which of its measures stay as they are (`fix`: "w", "d", "h" or any of them
// together). Then, per axis, the item has a fixed zone at each end (the fixed parts anchored there) and a middle
// that stretches: legs and arms keep their size and their distance from the item's edge, the seat between them
// grows. Parts without `fix` on an axis move with the stretch, so a cushion between fixed arms spans exactly the
// space the arms leave. A fixed zone grows from an edge through the fixed parts that sit at it or lean on each
// other (a plinth, the bottom shelf on it, legs just inside an arm); a fixed part standing free in the middle (a
// drawer's handle, a door's handle) keeps its size but travels with the stretch – otherwise the zone reached up to
// the topmost handle and only the top drawer grew (#801). In height a part only joins the top zone when it
// touches the top (a table top, a cabinet's top slab), because furniture grows upwards; across and in depth one
// centred in the middle stays centred. Pure logic, used by the viewer, the preview and the wall view.

import type { PackItem, PackPart } from "./packs.ts";

type Axis = "w" | "d" | "h";
type Anchor = "lo" | "hi" | "mid" | "free";

interface AxisMap {
  s0: number;
  s: number;
  /** Fixed zone at the low end (left, back, bottom) and at the high end, in metres of the default size. */
  lo: number;
  hi: number;
  /** Where each fixed part belongs. */
  side: Map<PackPart, Anchor>;
}

/** A part's extent along an axis, in metres from the item's low edge at the default size. */
function extent(p: PackPart, axis: Axis, s0: number): [number, number] {
  if (axis === "w") return [(p.x - p.w / 2 + 0.5) * s0, (p.x + p.w / 2 + 0.5) * s0];
  if (axis === "d") return [(p.z - p.d / 2 + 0.5) * s0, (p.z + p.d / 2 + 0.5) * s0];
  return [p.y * s0, (p.y + p.h) * s0];
}

const fixes = (p: PackPart, axis: Axis) => !!p.fix && p.fix.includes(axis);

function axisMap(parts: readonly PackPart[], axis: Axis, s0: number, s: number): AxisMap {
  const side = new Map<PackPart, Anchor>();
  const fixed = parts.filter((p) => fixes(p, axis)).map((p) => ({ p, e: extent(p, axis, s0) }));
  // a part this close to a zone (or to its edge) still leans on it: legs a few centimetres inside the edge
  const gap = Math.min(0.05, 0.1 * s0);
  for (const { p, e } of fixed) if (axis !== "h" && Math.abs((e[0] + e[1]) / 2 - s0 / 2) < 1e-6) side.set(p, "mid");
  // the zones grow from each edge through the fixed parts that sit at it or on each other
  let lo = 0;
  for (let grew = true; grew; ) {
    grew = false;
    for (const { p, e } of fixed) {
      if (side.has(p) || e[0] > lo + (lo === 0 ? gap : 0.001)) continue;
      // in height the bottom zone takes everything standing on the floor that does not touch the top
      if (axis === "h" && e[1] >= s0 - 0.01 && e[0] > 0.01) continue;
      side.set(p, "lo");
      lo = Math.max(lo, e[1]);
      grew = true;
    }
  }
  let hi = 0;
  for (let grew = true; grew; ) {
    grew = false;
    for (const { p, e } of fixed) {
      if (side.has(p) || s0 - e[1] > hi + (hi > 0 ? 0.001 : axis === "h" ? 0.01 : gap)) continue;
      side.set(p, "hi");
      hi = Math.max(hi, s0 - e[0]);
      grew = true;
    }
  }
  for (const { p } of fixed) if (!side.has(p)) side.set(p, "free");
  // no room for the fixed zones (a very small item, or zones that meet): everything scales as before
  if (lo + hi > Math.min(s0, s) - 0.01) return { s0, s, lo: 0, hi: 0, side };
  return { s0, s, lo, hi, side };
}

/** Where a point of the default item lands in the stretched one (metres from the low edge). */
function map(x: number, m: AxisMap): number {
  if (m.s === m.s0) return x;
  if (x <= m.lo) return x;
  if (x >= m.s0 - m.hi) return x + (m.s - m.s0);
  const mid0 = m.s0 - m.lo - m.hi;
  if (mid0 <= 0) return (x * m.s) / m.s0;
  return m.lo + ((x - m.lo) * (m.s - m.lo - m.hi)) / mid0;
}

/** A fixed part keeps its size and its distance from its edge; one in the middle stays centred; a free one travels with the stretch. */
function keep(p: PackPart, e0: number, e1: number, m: AxisMap): [number, number] {
  if (m.lo === 0 && m.hi === 0 && m.s !== m.s0 && !fixedRoom(m)) return [map(e0, m), map(e1, m)];
  const a = m.side.get(p) ?? "lo";
  const size = e1 - e0;
  if (a === "mid") return [m.s / 2 - size / 2, m.s / 2 + size / 2];
  if (a === "free") {
    const c = map((e0 + e1) / 2, m);
    return [c - size / 2, c + size / 2];
  }
  if (a === "lo") return [e0, e1];
  return [e0 + (m.s - m.s0), e1 + (m.s - m.s0)];
}

/** Whether the map still has room for fixed parts (false once axisMap fell back to plain scaling). */
function fixedRoom(m: AxisMap): boolean {
  return m.lo > 0 || m.hi > 0;
}

/** The item's parts for a size other than its default, as fractions of that size; the parts themselves when nothing is fixed. */
export function fitParts(item: PackItem, w: number, d: number, h: number): PackPart[] {
  const [w0, d0, h0] = item.size;
  if (!item.parts.some((p) => p.fix) || (Math.abs(w - w0) < 1e-3 && Math.abs(d - d0) < 1e-3 && Math.abs(h - h0) < 1e-3)) return item.parts;
  const maps: Record<Axis, AxisMap> = { w: axisMap(item.parts, "w", w0, w), d: axisMap(item.parts, "d", d0, d), h: axisMap(item.parts, "h", h0, h) };
  // an axis whose fixed zones found no room scales plainly, fixed parts included
  const plain: Record<Axis, boolean> = { w: !fixedRoom(maps.w) && item.parts.some((p) => fixes(p, "w")), d: !fixedRoom(maps.d) && item.parts.some((p) => fixes(p, "d")), h: !fixedRoom(maps.h) && item.parts.some((p) => fixes(p, "h")) };
  return item.parts.map((p) => {
    const span = (axis: Axis): [number, number] => {
      const m = maps[axis];
      const [e0, e1] = extent(p, axis, m.s0);
      return fixes(p, axis) && !plain[axis] ? keep(p, e0, e1, m) : [map(e0, m), map(e1, m)];
    };
    const [x0, x1] = span("w");
    const [z0, z1] = span("d");
    const [y0, y1] = span("h");
    const q: PackPart = { ...p, x: (x0 + x1) / 2 / w - 0.5, w: (x1 - x0) / w, z: (z0 + z1) / 2 / d - 0.5, d: (z1 - z0) / d, y: y0 / h, h: (y1 - y0) / h };
    if (p.shape === "loft") {
      // the top rectangle follows the bottom: on a fixed axis it shifts with it, on a free one it stretches like it
      const top = (axis: Axis, c: number | undefined, size: number | undefined, bc: number, bs: number): [number, number] => {
        const m = maps[axis];
        const tc = c ?? bc;
        const ts = size ?? bs;
        const e0 = (tc - ts / 2 + 0.5) * m.s0;
        const e1 = (tc + ts / 2 + 0.5) * m.s0;
        if (!fixes(p, axis) || plain[axis]) return [map(e0, m), map(e1, m)];
        const [b0, b1] = extent(p, axis, m.s0);
        const [n0] = keep(p, b0, b1, m);
        const shift = n0 - b0;
        return [e0 + shift, e1 + shift];
      };
      const [tx0, tx1] = top("w", p.tx, p.tw, p.x, p.w);
      const [tz0, tz1] = top("d", p.tz, p.td, p.z, p.d);
      q.tx = (tx0 + tx1) / 2 / w - 0.5;
      q.tw = (tx1 - tx0) / w;
      q.tz = (tz0 + tz1) / 2 / d - 0.5;
      q.td = (tz1 - tz0) / d;
    }
    return q;
  });
}
