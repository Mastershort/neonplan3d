// Pool Pro: pipes as real tubes – grey PVC with rounded bends, sleeves at the joints, blue ball valves (the
// lever along the pipe when open, across it when closed) and sight glasses showing the water's colour. Shaded
// by hand into the vertex colours (the material is unlit).

import { Color } from "three";
import type { P3 } from "../geometry/runs.ts";
import { roundCorners } from "../geometry/runs.ts";
import type { GeoBuffer } from "./geo.ts";

export interface PipeTube {
  floorId: string;
  /** The pipe's path (floor coordinates, y up from the floor); the corners are rounded here. */
  points: P3[];
  radius: number;
  /** The water inside while it flows (the sight glasses show it), else null. */
  water: [number, number, number] | null;
  fittings: PipeFittingView[];
}

export interface PipeFittingView {
  kind: "valve" | "sight" | "sleeve";
  p: P3;
  /** The pipe's direction there. */
  dir: P3;
  open?: boolean;
}

const PVC = new Color(0x737b85);
const SLEEVE = new Color(0x4a4f56);
const LEVER = new Color(0x2f8cff);
const BRASS = new Color(0x3c4148);
const LIGHT: P3 = norm([0.35, 0.85, 0.4]);
const SIDES = 10;

function norm(v: P3): P3 {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

function cross(a: P3, b: P3): P3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

/** Two unit vectors across a direction (the tube's ring). */
function across(dir: P3): [P3, P3] {
  const ref: P3 = Math.abs(dir[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
  const u = norm(cross(dir, ref));
  return [u, norm(cross(dir, u))];
}

function shade(c: Color, n: P3): Color {
  const k = 0.5 + 0.5 * Math.max(0, n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2]);
  return c.clone().multiplyScalar(k);
}

/** A cylinder from a to b (open ends: the next piece or a cap closes them). */
function cylinder(buf: GeoBuffer, a: P3, b: P3, r: number, col: Color, caps = false): void {
  const dir = norm([b[0] - a[0], b[1] - a[1], b[2] - a[2]]);
  const [u, v] = across(dir);
  const ring = (c: P3, i: number): { p: number[]; n: P3 } => {
    const t = (i / SIDES) * Math.PI * 2;
    const n: P3 = [u[0] * Math.cos(t) + v[0] * Math.sin(t), u[1] * Math.cos(t) + v[1] * Math.sin(t), u[2] * Math.cos(t) + v[2] * Math.sin(t)];
    return { p: [c[0] + n[0] * r, c[1] + n[1] * r, c[2] + n[2] * r], n };
  };
  for (let i = 0; i < SIDES; i++) {
    const a0 = ring(a, i);
    const a1 = ring(a, i + 1);
    const b0 = ring(b, i);
    const b1 = ring(b, i + 1);
    // wound so the outside faces out (the material draws front faces only)
    buf.tri(a0.p, b1.p, b0.p, shade(col, a0.n), shade(col, b1.n), shade(col, b0.n));
    buf.tri(a0.p, a1.p, b1.p, shade(col, a0.n), shade(col, a1.n), shade(col, b1.n));
    if (caps) {
      buf.tri([...a], a1.p, a0.p, shade(col, [-dir[0], -dir[1], -dir[2]]));
      buf.tri([...b], b0.p, b1.p, shade(col, dir));
    }
  }
}

/** A box along `dir` (length l) and across it (w wide along `side`, t thick), centred at c. */
function bar(buf: GeoBuffer, c: P3, dir: P3, side: P3, l: number, w: number, t: number, col: Color): void {
  const up = norm(cross(dir, side));
  const corner = (x: number, y: number, z: number): number[] => [
    c[0] + dir[0] * x * l + side[0] * y * w + up[0] * z * t,
    c[1] + dir[1] * x * l + side[1] * y * w + up[1] * z * t,
    c[2] + dir[2] * x * l + side[2] * y * w + up[2] * z * t,
  ];
  const faces: [P3, number[][]][] = [];
  for (const [n, s] of [
    [dir, 0.5],
    [[-dir[0], -dir[1], -dir[2]] as P3, -0.5],
  ] as const)
    faces.push([n, [corner(s, -0.5, -0.5), corner(s, 0.5, -0.5), corner(s, 0.5, 0.5), corner(s, -0.5, 0.5)]]);
  for (const [n, s] of [
    [side, 0.5],
    [[-side[0], -side[1], -side[2]] as P3, -0.5],
  ] as const)
    faces.push([n, [corner(-0.5, s, -0.5), corner(0.5, s, -0.5), corner(0.5, s, 0.5), corner(-0.5, s, 0.5)]]);
  for (const [n, s] of [
    [up, 0.5],
    [[-up[0], -up[1], -up[2]] as P3, -0.5],
  ] as const)
    faces.push([n, [corner(-0.5, -0.5, s), corner(0.5, -0.5, s), corner(0.5, 0.5, s), corner(-0.5, 0.5, s)]]);
  for (const [n, q] of faces) {
    const k = shade(col, n);
    // both windings: the material draws one side only
    buf.tri(q[0], q[1], q[2], k);
    buf.tri(q[0], q[2], q[3], k);
    buf.tri(q[0], q[2], q[1], k);
    buf.tri(q[0], q[3], q[2], k);
  }
}

/** One pipe: its tube with rounded bends, the sleeves, valves and sight glasses. */
export function pushPipeTube(buf: GeoBuffer, t: PipeTube): void {
  if (t.points.length < 2) return;
  const r = t.radius;
  const path = roundCorners(t.points, r * 2.2, 4);
  for (let i = 1; i < path.length; i++) {
    const [a, b] = [path[i - 1], path[i]];
    if (Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]) < 1e-4) continue;
    // under the ground the pipe is darker (it shows through the lawn only faintly anyway)
    const col = a[1] < -0.02 && b[1] < -0.02 ? PVC.clone().multiplyScalar(0.55) : PVC;
    cylinder(buf, a, b, r, col, i === 1 || i === path.length - 1);
  }
  for (const f of t.fittings) {
    const half = (l: number): [P3, P3] => [
      [f.p[0] - f.dir[0] * l, f.p[1] - f.dir[1] * l, f.p[2] - f.dir[2] * l],
      [f.p[0] + f.dir[0] * l, f.p[1] + f.dir[1] * l, f.p[2] + f.dir[2] * l],
    ];
    if (f.kind === "sleeve") {
      const [a, b] = half(0.03);
      cylinder(buf, a, b, r * 1.22, SLEEVE, true);
    } else if (f.kind === "sight") {
      const [a, b] = half(0.08);
      cylinder(buf, a, b, r * 1.08, t.water ? new Color(...t.water).multiplyScalar(0.9) : new Color(0x9fd6e8), true);
      for (const end of half(0.08)) {
        const [p, q] = [
          [end[0] - f.dir[0] * 0.02, end[1] - f.dir[1] * 0.02, end[2] - f.dir[2] * 0.02] as P3,
          [end[0] + f.dir[0] * 0.02, end[1] + f.dir[1] * 0.02, end[2] + f.dir[2] * 0.02] as P3,
        ];
        cylinder(buf, p, q, r * 1.3, SLEEVE, true);
      }
    } else {
      // ball valve: a fat body with sleeves, the stem and the blue lever
      const [a, b] = half(0.055);
      cylinder(buf, a, b, r * 1.4, BRASS, true);
      // the lever points away from the wall side: up for a level pipe, sideways for a riser
      const [u] = across(f.dir);
      const up: P3 = Math.abs(f.dir[1]) > 0.9 ? u : [0, 1, 0];
      const stem: P3 = [f.p[0] + up[0] * r * 2, f.p[1] + up[1] * r * 2, f.p[2] + up[2] * r * 2];
      cylinder(buf, [f.p[0] + up[0] * r * 1.3, f.p[1] + up[1] * r * 1.3, f.p[2] + up[2] * r * 1.3], stem, r * 0.35, BRASS, true);
      const along = f.open === false ? norm(cross(f.dir, up)) : f.dir;
      const side = norm(cross(along, up));
      const tip: P3 = [stem[0] + along[0] * 0.045, stem[1] + along[1] * 0.045, stem[2] + along[2] * 0.045];
      bar(buf, tip, along, side, 0.1, 0.028, 0.012, LEVER);
    }
  }
}
