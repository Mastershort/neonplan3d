// What a module's lines become on the stage: pieces of the flow layer (the energy cables' look), coloured along the
// line. Pure, shared by the 3D view and its tests.

import type { ScenePiece } from "./modules.ts";

type Rgb = [number, number, number];
type Line = Extract<ScenePiece, { kind: "line" }>;

/** A piece of the flow layer (floor coordinates), as the viewer takes it. */
export interface LineFlow {
  floorId: string;
  a: [number, number, number];
  b: [number, number, number];
  /** Length from the line's start to a (m): the light runs on across the corners. */
  dist: number;
  power: number;
  color: Rgb;
  width?: number;
  /** Drawn as a solid pipe with a dark edge instead of a glowing cable. */
  pipe?: boolean;
  /** Shown only in the house view (hidden while a floor is opened). */
  house?: boolean;
  /** Shown only while a floor is opened (hidden in the house view). */
  floor?: boolean;
}

/** The points of a small curve through the values in a box of w × h (SVG coordinates, the lowest value at the bottom). */
export function sparkPoints(values: readonly number[], w: number, h: number): string {
  const vs = values.filter((v) => Number.isFinite(v));
  if (vs.length < 2) return "";
  const lo = Math.min(...vs);
  const hi = Math.max(...vs);
  const span = hi - lo || 1;
  const r = (v: number) => Math.round(v * 10) / 10;
  return vs.map((v, i) => `${r((i / (vs.length - 1)) * w)},${r(h - 1 - ((v - lo) / span) * (h - 2))}`).join(" ");
}

/** The colour at a share t (0..1) of the way along a line whose colours stand at its points (or one for all). */
function colorAt(colors: readonly Rgb[], t: number): Rgb {
  if (!colors.length) return [0.25, 0.7, 1];
  if (colors.length === 1) return colors[0];
  const x = Math.min(1, Math.max(0, t)) * (colors.length - 1);
  const i = Math.min(colors.length - 2, Math.floor(x));
  const k = x - i;
  const [p, q] = [colors[i], colors[i + 1]];
  return [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, p[2] + (q[2] - p[2]) * k];
}

/**
 * The flow pieces of a module's lines: one per straight piece, each in the colour of its middle. With one colour per
 * point the colour changes at the points; otherwise the colours spread evenly over the line's length.
 */
export function lineFlows(lines: readonly Line[]): LineFlow[] {
  const out: LineFlow[] = [];
  for (const l of lines) {
    const pts = l.points;
    if (pts.length < 2) continue;
    const lens: number[] = [];
    let total = 0;
    for (let i = 1; i < pts.length; i++) {
      const len = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]);
      lens.push(len);
      total += len;
    }
    if (total < 0.01) continue;
    const perPoint = l.colors.length === pts.length;
    let dist = 0;
    for (let i = 1; i < pts.length; i++) {
      const len = lens[i - 1];
      if (len < 0.005) continue;
      const color = perPoint ? colorAt([l.colors[i - 1], l.colors[i]], 0.5) : colorAt(l.colors, (dist + len / 2) / total);
      out.push({
        floorId: l.floorId,
        a: [...pts[i - 1]],
        b: [...pts[i]],
        dist,
        power: Math.max(0, l.flow),
        color,
        ...(l.width ? { width: Math.min(3, Math.max(0.5, l.width)) } : {}),
        ...(l.look === "pipe" ? { pipe: true } : {}),
        ...(l.views === "house" ? { house: true } : l.views === "floor" ? { floor: true } : {}),
      });
      dist += len;
    }
  }
  return out;
}

/** A module marker's icon: its path when it is a plain SVG path (letters, digits, signs), else none. */
/** A module's emoji for a marker: a few characters, nothing that could be markup; else null. */
export function markerEmoji(e: string | undefined): string | null {
  if (!e) return null;
  return [...e].length <= 4 && !/[<>&"'\\\sA-Za-z0-9]/.test(e) ? e : null;
}

export function markerPath(path: string | undefined): string | null {
  return path && path.length < 2000 && /^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(path) ? path : null;
}

/** A card's parts without the minor ones (the tablet level, a narrow screen). */
export function majorOnly<T extends { minor?: boolean }>(items: readonly T[] | undefined, compact: boolean): T[] {
  return (items ?? []).filter((i) => !compact || !i.minor);
}
