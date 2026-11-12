// Fun pack "pets": cats, dogs (five breeds, small to large) and rabbits that live in the 3D house. Each walks through
// the doors from room to room (the walk's floor map finds the way) and rests at its own kind of places only: a cat in
// its bed or cave, by the scratching tree, or – walking up from the front and jumping – on a real sofa, armchair or
// bed; a dog in its bed or basket, or on the floor in front of the sofa; both visit the bowls. Nothing else (an
// aquarium, a cage) is theirs. At night they sleep curled up. They are drawn only while they move; resting costs
// nothing. three.js comes from the 3D bundle (passed in).

import type * as THREE from "three";
import type { Building, Floor, Furniture, Pet, Vec2 } from "../model.ts";
import type { FloorMap, Obstacle } from "../viewer/walk.ts";

/** The three.js classes the pets need, lent by the 3D bundle (it has no ready-made spheres or boxes: shapes are made here). */
export type FunLib = Pick<typeof THREE, "Group" | "Mesh" | "MeshBasicMaterial" | "CanvasTexture" | "Color" | "PlaneGeometry" | "BufferGeometry" | "Float32BufferAttribute"> & { DoubleSide: typeof THREE.DoubleSide };

/** The parts of NeonPlan's viewer the pets live in (reached at run time). */
export interface PetViewer {
  floorMap: Map<string, { group: THREE.Group; floor: Floor }>;
  invalidate(): void;
  /** A decoration moved: a frame soon (on the tablet level at its slower pace, none while it rests). */
  animate(): void;
  /** The tablet level, and whether its decorative animations rest (nobody touched the view for a while). */
  readonly low: boolean;
  readonly resting: boolean;
}

export interface PetsContext {
  lib: FunLib;
  FloorMap: typeof FloorMap;
  viewer: PetViewer;
  building: Building;
  pets: readonly Pet[];
  /** Whether it is night (the sun below the horizon). */
  night: () => boolean;
  /** Height of an item's bottom on its floor (an aquarium on a sideboard). */
  base: (floor: Floor, f: Furniture) => number;
  /** Doors their contact reports shut: the pets go round them (doors without a sensor count as open). */
  closedDoors?: () => ReadonlySet<string>;
}

export interface PetsController {
  update(building: Building, pets: readonly Pet[]): void;
  dispose(): void;
}

/**
 * Simple round solids as triangle lists, shaded lighter on top and darker below (the materials are unlit, so the
 * shading is in the vertex colours: it gives the animals their soft, round look).
 */
function shapes(lib: FunLib) {
  const geo = (pos: number[]) => {
    const g = new lib.BufferGeometry();
    g.setAttribute("position", new lib.Float32BufferAttribute(pos, 3));
    let lo = Infinity;
    let hi = -Infinity;
    for (let i = 1; i < pos.length; i += 3) {
      lo = Math.min(lo, pos[i]);
      hi = Math.max(hi, pos[i]);
    }
    const col: number[] = [];
    for (let i = 0; i < pos.length; i += 3) {
      const k = hi > lo ? (pos[i + 1] - lo) / (hi - lo) : 1;
      const c = 0.66 + 0.34 * k;
      col.push(c, c, c);
    }
    g.setAttribute("color", new lib.Float32BufferAttribute(col, 3));
    g.computeBoundingSphere();
    return g;
  };
  /** A ring-based solid round the y axis: radius per height (bottom to top), n sides. */
  const lathe = (rings: [number, number][], n: number) => {
    const pos: number[] = [];
    for (let i = 0; i < rings.length - 1; i++) {
      const [r0, y0] = rings[i];
      const [r1, y1] = rings[i + 1];
      for (let k = 0; k < n; k++) {
        const a0 = (k / n) * Math.PI * 2;
        const a1 = ((k + 1) / n) * Math.PI * 2;
        const p = (r: number, y: number, a: number) => [Math.cos(a) * r, y, Math.sin(a) * r];
        pos.push(...p(r0, y0, a0), ...p(r1, y1, a0), ...p(r1, y1, a1), ...p(r0, y0, a0), ...p(r1, y1, a1), ...p(r0, y0, a1));
      }
    }
    return geo(pos);
  };
  const sphere = (n: number) => lathe(Array.from({ length: n / 2 + 1 }, (_, i): [number, number] => [Math.sin((i / (n / 2)) * Math.PI) * 0.5, -Math.cos((i / (n / 2)) * Math.PI) * 0.5]), n);
  return {
    /** A unit sphere (diameter 1): scale it to an ellipsoid. */
    ball: sphere(14),
    cylinder: (rTop: number, rBottom: number, h: number, n = 8) => lathe([[0, -h / 2], [rBottom, -h / 2], [rTop, h / 2], [0, h / 2]], n),
    cone: (r: number, h: number, n = 8) => lathe([[0, -h / 2], [r, -h / 2], [0, h / 2]], n),
  };
}

const FURS: Record<string, [string, string]> = {
  orange: ["#e0954a", "#fbe6cf"],
  tabby: ["#a8865d", "#e8d6bb"],
  black: ["#2c2c33", "#5a5a66"],
  white: ["#f1f1f4", "#e6e1e4"],
  grey: ["#9097a3", "#d9dce2"],
  brown: ["#7d5536", "#d4a97c"],
  calico: ["#f4f0e8", "#e09045"],
  golden: ["#e3b46b", "#f7e3bd"],
  cream: ["#efe0c4", "#fff6e6"],
};

/** The look of a kind (or a dog's breed): body length/width/height, legs, head, snout, ears, tail, speed (m/s). */
interface Look {
  len: number;
  wid: number;
  hi: number;
  leg: number;
  head: number;
  snout: number;
  ears: "cat" | "bunny" | "floppy" | "pointy";
  tail: "cat" | "dog" | "curl" | "bushy" | "pom";
  speed: number;
}

const LOOKS: Record<string, Look> = {
  cat: { len: 0.32, wid: 0.17, hi: 0.16, leg: 0.09, head: 0.115, snout: 0, ears: "cat", tail: "cat", speed: 0.55 },
  rabbit: { len: 0.27, wid: 0.19, hi: 0.17, leg: 0.04, head: 0.09, snout: 0, ears: "bunny", tail: "pom", speed: 0.6 },
  dachshund: { len: 0.48, wid: 0.14, hi: 0.14, leg: 0.07, head: 0.105, snout: 0.08, ears: "floppy", tail: "dog", speed: 0.7 },
  pug: { len: 0.3, wid: 0.21, hi: 0.18, leg: 0.1, head: 0.13, snout: 0.02, ears: "floppy", tail: "curl", speed: 0.55 },
  terrier: { len: 0.32, wid: 0.16, hi: 0.16, leg: 0.13, head: 0.11, snout: 0.06, ears: "pointy", tail: "dog", speed: 0.8 },
  labrador: { len: 0.56, wid: 0.23, hi: 0.23, leg: 0.24, head: 0.14, snout: 0.09, ears: "floppy", tail: "dog", speed: 0.85 },
  shepherd: { len: 0.62, wid: 0.23, hi: 0.25, leg: 0.3, head: 0.14, snout: 0.11, ears: "pointy", tail: "bushy", speed: 0.9 },
};

const lookOf = (pet: Pet): Look => (pet.kind === "dog" ? (LOOKS[pet.breed ?? "labrador"] ?? LOOKS.labrador) : LOOKS[pet.kind]);

interface Model {
  root: THREE.Group;
  body: THREE.Group;
  legs: THREE.Group[];
  tail: THREE.Group;
  head: THREE.Group;
  eyes: THREE.Group[];
  zzz: THREE.Mesh;
}

/** A round, friendly animal in the colours of its fur: big head, dark eyes with a shine, a little nose. */
export function buildModel(lib: FunLib, pet: Pet): Model {
  const S = shapes(lib);
  const L = lookOf(pet);
  const [main, second] = FURS[pet.fur] ?? FURS.orange;
  const m1 = new lib.MeshBasicMaterial({ color: main, vertexColors: true });
  const m2 = new lib.MeshBasicMaterial({ color: second, vertexColors: true });
  const earMat = new lib.MeshBasicMaterial({ color: new lib.Color(main).multiplyScalar(0.78), vertexColors: true });
  const paw = new lib.MeshBasicMaterial({ color: new lib.Color(main).lerp(new lib.Color(second), 0.6), vertexColors: true });
  const dark = new lib.MeshBasicMaterial({ color: "#16161c" });
  const shine = new lib.MeshBasicMaterial({ color: "#ffffff" });
  const nose = new lib.MeshBasicMaterial({ color: pet.kind === "dog" ? "#1d1d22" : "#f08aa0" });
  const ball = (mat: THREE.Material, sx: number, sy: number, sz: number, x = 0, y = 0, z = 0) => {
    const m = new lib.Mesh(S.ball, mat);
    m.scale.set(sx, sy, sz);
    m.position.set(x, y, z);
    return m;
  };
  const root = new lib.Group();
  const body = new lib.Group();
  root.add(body);
  const cy = L.leg + L.hi / 2;
  // the body: a soft ellipsoid, the chest and belly lighter
  body.add(ball(m1, L.wid, L.hi, L.len, 0, cy, 0), ball(m2, L.wid * 0.78, L.hi * 0.72, L.len * 0.55, 0, cy - L.hi * 0.12, L.len * 0.16));
  // stubby legs with light paws, pivot at the hip
  const legs: THREE.Group[] = [];
  const lr = Math.min(0.04, L.wid * 0.17);
  for (const [x, z] of [
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, -1],
  ]) {
    const g = new lib.Group();
    const hip = L.leg + L.hi * 0.25;
    g.position.set(x * L.wid * 0.27, hip, z * L.len * 0.3);
    const leg = new lib.Mesh(S.cylinder(lr * 0.9, lr, hip, 8), m1);
    leg.position.y = -hip / 2;
    g.add(leg, ball(paw, lr * 2.3, lr * 1.4, lr * 2.6, 0, -hip + lr * 0.6, lr * 0.3));
    body.add(g);
    legs.push(g);
  }
  // the head: big and round, raised at the front
  const head = new lib.Group();
  const h = L.head;
  head.position.set(0, L.leg + L.hi * 0.9 + h * 0.45, L.len / 2 + h * 0.45);
  head.add(ball(m1, h * 2.15, h * 1.95, h * 1.95));
  // muzzle: a dog's snout forward, a cat's and rabbit's small cheeks, and the nose
  const sn = Math.max(0.025, L.snout);
  head.add(ball(m2, h * 1.05, h * 0.8, sn * 1.6 + h * 0.5, 0, -h * 0.32, h * 0.72 + sn * 0.45));
  head.add(ball(nose, h * 0.28, h * 0.2, h * 0.2, 0, -h * 0.12, h * 0.95 + sn * 1.1));
  const eyes: THREE.Group[] = [];
  for (const side of [-1, 1]) {
    // the eyes: dark, round, with a shine (closed when sleeping)
    const e = new lib.Group();
    e.position.set(side * h * 0.42, h * 0.12, h * 0.82);
    e.add(ball(dark, h * 0.34, h * 0.38, h * 0.2), ball(shine, h * 0.11, h * 0.11, h * 0.08, side * -h * 0.05, h * 0.08, h * 0.08));
    head.add(e);
    eyes.push(e);
    if (L.ears === "cat") {
      const ear = new lib.Mesh(S.cone(h * 0.4, h * 0.75, 4), m1);
      ear.position.set(side * h * 0.55, h * 0.88, -h * 0.05);
      ear.rotation.set(0, Math.PI / 4, side * -0.35);
      const inner = new lib.Mesh(S.cone(h * 0.22, h * 0.45, 4), nose);
      inner.position.set(side * h * 0.53, h * 0.84, h * 0.06);
      inner.rotation.set(0, Math.PI / 4, side * -0.35);
      head.add(ear, inner);
    } else if (L.ears === "bunny") {
      const ear = ball(m1, h * 0.5, h * 2.2, h * 0.3, side * h * 0.35, h * 1.6, -h * 0.15);
      ear.rotation.z = side * -0.18;
      const inner = ball(nose, h * 0.26, h * 1.6, h * 0.1, side * h * 0.35, h * 1.6, -h * 0.02);
      inner.rotation.z = side * -0.18;
      head.add(ear, inner);
    } else if (L.ears === "floppy") {
      const ear = ball(earMat, h * 0.35, h * 1.1, h * 0.75, side * h * 0.98, -h * 0.15, -h * 0.05);
      ear.rotation.z = side * 0.25;
      head.add(ear);
    } else {
      const ear = new lib.Mesh(S.cone(h * 0.32, h * 0.95, 6), m1);
      ear.position.set(side * h * 0.5, h * 1.0, -h * 0.1);
      ear.rotation.z = side * -0.2;
      head.add(ear);
    }
  }
  body.add(head);
  // the tail, pivot at its root
  const tail = new lib.Group();
  tail.position.set(0, L.leg + L.hi * 0.7, -L.len / 2 + 0.01);
  if (L.tail === "pom") tail.add(ball(m2, 0.08, 0.08, 0.08));
  else if (L.tail === "curl") tail.add(ball(m1, 0.07, 0.07, 0.06, 0, 0.03, -0.01));
  else {
    const tl = L.tail === "cat" ? 0.28 : L.tail === "bushy" ? 0.26 : 0.18;
    const thick = L.tail === "bushy" ? 0.045 : L.tail === "cat" ? 0.024 : 0.022;
    if (L.tail === "bushy") tail.add(ball(m1, thick * 2, tl, thick * 2, 0, tl / 2, 0));
    else {
      const t = new lib.Mesh(S.cylinder(thick * 0.75, thick, tl, 8), m1);
      t.position.y = tl / 2;
      tail.add(t);
    }
    if (L.tail === "cat") tail.add(ball(m1, thick * 1.8, thick * 1.8, thick * 1.8, 0, tl, 0));
  }
  body.add(tail);
  // "z Z" over a sleeping pet, on a card tilted towards the usual view from above
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 64;
  const g = c.getContext("2d")!;
  g.fillStyle = "#cfe9ff";
  g.font = "bold 40px system-ui, sans-serif";
  g.fillText("z", 20, 52);
  g.font = "bold 54px system-ui, sans-serif";
  g.fillText("Z", 58, 46);
  const zzz = new lib.Mesh(new lib.PlaneGeometry(0.3, 0.15), new lib.MeshBasicMaterial({ map: new lib.CanvasTexture(c), transparent: true, depthWrite: false, side: lib.DoubleSide, forceSinglePass: true }));
  zzz.rotation.x = -0.7;
  zzz.position.set(0, L.hi + h * 2 + 0.12, 0);
  zzz.visible = false;
  root.add(zzz);
  return { root, body, legs, tail, head, eyes, zzz };
}

/** A place a pet likes: where it lies (and how high), where it walks to first (to jump up from the front), which way it faces. */
interface Spot {
  p: Vec2;
  y: number;
  /** In front of the sofa or bed: walked to, then jumped from. */
  approach: Vec2 | null;
  face: number | null;
  sleep: boolean;
  /** A short visit standing (the bowls), no lying down. */
  visit?: boolean;
}

/** The item's own name: a pack item's id after the pack ("pack:mastershort.pets:cat_bed" → "cat_bed"). */
const itemOf = (type: string) => type.slice(type.lastIndexOf(":") + 1).toLowerCase();
const SOFA = /^(sofa|armchair|chesterfield|corner_(left|right|sofa))|sofa/;
const BED = /^bed(_|$)/;
const CAT_HOME = /^(cat_bed|cat_cave|cat_tree)$/;
const DOG_HOME = /^(dog_bed|dog_basket|dog_house)$/;
const BOWLS = /^(bowls|pet_feeder|water_fountain)$/;

/** A rug on the floor: its rectangle (centre, half sizes, turn) and its top. */
interface Rug {
  x: number;
  z: number;
  hw: number;
  hd: number;
  a: number;
  top: number;
}

/** Rugs and mats of a floor (a built-in rug or a pack's, "rug"/"carpet"/"mat" in its name, at most 6 cm high). */
/**
 * The furniture the pets walk around: whatever stands on the floor and is higher than a rug or a dog bed – sofas,
 * tables, cabinets, beds. Lamps, rugs and what hangs on a wall stay out (a place on the sofa is still reached, with a
 * hop at the end).
 */
function obstaclesOf(floor: Floor, base: (floor: Floor, f: Furniture) => number): Obstacle[] {
  return floor.furniture
    .filter((f) => f.h >= 0.25 && base(floor, f) < 0.3 && !/lamp|light|leuchte|rug|carpet|teppich|(^|_)mat($|_)|parking|stellplatz/.test(itemOf(f.type)))
    .map((f) => {
      const a = (f.rotation * Math.PI) / 180;
      return { c: [f.x, f.z] as Vec2, u: [Math.cos(a), Math.sin(a)] as Vec2, hw: f.w / 2, hd: f.d / 2 };
    });
}

/**
 * Where the pets can walk on a floor: through the doors between two rooms that are not reported shut. They live
 * indoors – the front door, a garage door and a floor-length window are no ways for them: the shortest way from room
 * to room led round the outside of the house, through the closed garage door, hedges and fences (#1047).
 */
export function petMap(Maps: typeof FloorMap, plan: Building, floor: Floor, shut: ReadonlySet<string>, obstacles: readonly Obstacle[]): FloorMap {
  const doors = floor.openings.filter((o) => o.type === "door" && !shut.has(o.id));
  const map = new Maps(plan, { ...floor, openings: doors }, obstacles);
  const outer = new Set(map.doors.filter((d) => !(map.roomAt(d.p[0]) && map.roomAt(d.p[1]))).map((d) => d.id));
  return outer.size ? new Maps(plan, { ...floor, openings: doors.filter((o) => !outer.has(o.id)) }, obstacles) : map;
}

function rugsOf(floor: Floor): Rug[] {
  return floor.furniture
    .filter((f) => /rug|carpet|teppich|(^|_)mat($|_)/.test(itemOf(f.type)) && f.h <= 0.06)
    .map((f) => ({ x: f.x, z: f.z, hw: f.w / 2, hd: f.d / 2, a: (f.rotation * Math.PI) / 180, top: f.h + 0.006 }));
}

/** How high the floor is at a point: on a rug its top, else 0. */
function rugTop(rugs: readonly Rug[], p: Vec2): number {
  let top = 0;
  for (const r of rugs) {
    const dx = p[0] - r.x;
    const dz = p[1] - r.z;
    const u = dx * Math.cos(r.a) + dz * Math.sin(r.a);
    const v = -dx * Math.sin(r.a) + dz * Math.cos(r.a);
    if (Math.abs(u) <= r.hw && Math.abs(v) <= r.hd) top = Math.max(top, r.top);
  }
  return top;
}

/** Whether a point lies in a polygon (even-odd). */
function pointIn(p: Vec2, poly: readonly Vec2[]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** Favourite places on a floor, only the ones of its kind (an aquarium or a cage never is one). */
function spotsFor(floor: Floor, kind: Pet["kind"], map: FloorMap): Spot[] {
  const out: Spot[] = [];
  const along = (f: Furniture, k: number): Vec2 => {
    const a = (f.rotation * Math.PI) / 180;
    return [f.x - Math.sin(a) * k, f.z + Math.cos(a) * k];
  };
  // facing the furniture's front (into the room)
  const facing = (f: Furniture) => {
    const [fx, fz] = along(f, 1);
    return Math.atan2(fx - f.x, fz - f.z);
  };
  for (const f of floor.furniture) {
    const t = itemOf(f.type);
    const own = kind === "cat" ? CAT_HOME.test(t) : kind === "dog" ? DOG_HOME.test(t) : false;
    if (own) {
      // in its bed or cave; by the scratching tree; in front of the dog house
      const p = t === "cat_tree" || t === "dog_house" ? along(f, f.d / 2 + 0.3) : ([f.x, f.z] as Vec2);
      out.push({ p, y: t === "cat_tree" || t === "dog_house" ? 0 : 0.06, approach: null, face: facing(f), sleep: true });
    } else if (BOWLS.test(t) && kind !== "rabbit") out.push({ p: along(f, f.d / 2 + 0.25), y: 0, approach: null, face: facing(f) + Math.PI, sleep: false, visit: true });
    else if ((SOFA.test(t) || BED.test(t)) && !t.includes("bunk") && !t.startsWith("dog") && !t.startsWith("cat")) {
      const bed = BED.test(t) || t === "sofa_bed";
      // which side is the front: some models are built the other way round – the front is the side that lies
      // free in the room (the back usually stands at a wall), else the side towards the room's middle
      const free = (s: number) => {
        const q = along(f, s * (f.d / 2 + 0.35));
        return !map.blocked(q) && !!map.roomAt(q);
      };
      let side = 1;
      if (!free(1) && free(-1)) side = -1;
      else if (free(1) === free(-1)) {
        const room = floor.rooms.find((r) => r.points.length >= 3 && r.points.length && pointIn([f.x, f.z], r.points));
        if (room) {
          const cx = room.points.reduce((s, p) => s + p[0], 0) / room.points.length;
          const cz = room.points.reduce((s, p) => s + p[1], 0) / room.points.length;
          const d = (s: number) => {
            const q = along(f, s);
            return Math.hypot(q[0] - cx, q[1] - cz);
          };
          if (d(-1) < d(1)) side = -1;
        }
      }
      const front = along(f, side * (f.d / 2 + 0.35));
      const face = facing(f) + (side < 0 ? Math.PI : 0);
      if (kind === "cat") {
        // on the seat (a little to the front of the middle, not the back rest), a little above it rather than in it
        const seat = bed ? Math.min(0.58, f.h * 0.64) : Math.min(0.5, f.h * 0.58);
        out.push({ p: along(f, bed ? 0 : side * f.d * 0.12), y: seat, approach: front, face, sleep: bed });
      } else out.push({ p: along(f, side * (f.d / 2 + (kind === "dog" ? 0.5 : 0.35))), y: 0, approach: null, face: face + (kind === "dog" ? Math.PI / 2 : 0), sleep: bed });
    } else if (t === "rug") out.push({ p: [f.x, f.z], y: 0, approach: null, face: null, sleep: false });
  }
  return out;
}

/**
 * A staircase between two floors: the way up in the lower floor's coordinates, from the foot (on the lower floor) over
 * the steps (and a landing) to where one steps off on the upper floor; heights relative to the lower floor.
 */
interface Link {
  lower: string;
  upper: string;
  /** The steps (and landing), foot to top. */
  pts: [number, number, number][];
  /** Where one may step on below and step off above: in front, else beside (a stair often stands against a wall). */
  foot: Vec2[];
  top: Vec2[];
}

/** The way up a stair in its own coordinates (front +z is the foot, the top at the back), heights 0 … 1 of the rise. */
function stairWay(item: string, w: number, d: number): [number, number, number][] | null {
  const out = 0.35;
  if (item === "stairs_u") {
    // built-in U-stair: up the left half to the landing at the back, across, back up the right half towards the front
    const fw = (w - Math.min(0.12, w * 0.06)) / 2;
    const landing = Math.min(fw, d * 0.45);
    const xa = -w / 2 + fw / 2;
    const xb = w / 2 - fw / 2;
    const zl = -d / 2 + landing / 2;
    return [[xa, d / 2 + out, 0], [xa, d / 2, 0], [xa, zl, 0.5], [xb, zl, 0.5], [xb, d / 2 - 0.15, 1], [xb, d / 2 + out, 1]];
  }
  if (item === "u_shape" || item === "u_open_winder") return [[0.6, 1.5 + out, 0], [0.6, 1.5, 0], [0.6, -1.05, 0.5], [-0.6, -1.05, 0.5], [-0.6, 1.4, 1], [-0.6, 1.4 + out, 1]];
  if (item === "l_shape") return [[0.6, 1.3 + out, 0], [0.6, 1.3, 0], [0.6, -0.8, 0.5], [0.1, -0.8, 0.5], [-1.1, -0.8, 1], [-1.1 - out, -0.8, 1]];
  if (item === "spiral") {
    // round the post, counter-clockwise from the front
    const way: [number, number, number][] = [];
    for (let i = 0; i <= 12; i++) {
      const a = ((-90 + (i * 300) / 12) * Math.PI) / 180;
      way.push([Math.cos(a) * 0.45, Math.sin(a) * 0.45, i / 12]);
    }
    const a0 = (-90 * Math.PI) / 180;
    const a1 = (210 * Math.PI) / 180;
    return [[Math.cos(a0) * 1.0, Math.sin(a0) * 1.0, 0], ...way, [Math.cos(a1) * 1.0, Math.sin(a1) * 1.0, 1]];
  }
  if (item === "winder_bottom") {
    // on from the right side, round the inner corner over the winders, then straight up
    const zt = d / 2 - w;
    const turn: [number, number, number][] = [0.25, 0.5, 0.75].map((k) => {
      const phi = (k * Math.PI) / 2;
      return [w / 2 - Math.sin(phi) * (w / 2), zt + Math.cos(phi) * (w / 2), (k * 3) / 14];
    });
    return [[w / 2 + out, zt + w / 2, 0], [w / 2, zt + w / 2, 0], ...turn, [0, zt, 3 / 14], [0, -d / 2, 1], [0, -d / 2 - out, 1]];
  }
  if (item === "corner_bottom") {
    // up the side steps onto the landing, round the corner, straight up on the left
    const xs = -w / 2 + 0.5;
    const zl = d / 2 - 0.5;
    return [[w / 2 + out, zl, 0], [w / 2, zl, 0], [xs + 0.3, zl, 3 / 14], [xs, zl, 4 / 14], [xs, d / 2 - 1, 4 / 14], [xs, -d / 2, 1], [xs, -d / 2 - out, 1]];
  }
  if (item === "stairs" || item === "straight" || item === "straight_open" || item === "floating" || item === "space_saver") return [[0, d / 2 + out, 0], [0, d / 2, 0], [0, -d / 2, 1], [0, -d / 2 - out, 1]];
  return null;
}

/** Every staircase that joins a floor to the one above it (built-in stairs and the stairs pack's). */
function stairLinks(b: Building): Link[] {
  const floors = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3)).sort((x, y) => x.elevation - y.elevation);
  const out: Link[] = [];
  for (let i = 0; i < floors.length - 1; i++) {
    const lower = floors[i];
    const upper = floors[i + 1];
    const rise = upper.elevation - lower.elevation;
    for (const f of lower.furniture) {
      const way = stairWay(itemOf(f.type), f.w, f.d);
      if (!way) continue;
      const a = (f.rotation * Math.PI) / 180;
      const m = f.mirror ? -1 : 1;
      const W = (x: number, z: number): Vec2 => [f.x + x * m * Math.cos(a) - z * Math.sin(a), f.z + x * m * Math.sin(a) + z * Math.cos(a)];
      const pts = way.map(([x, z, t]): [number, number, number] => {
        const [wx, wz] = W(x, z);
        return [wx, t * rise, wz];
      });
      // the way's first and last points step off the stair; beside them, the first and last step from the side
      const z0 = way[1][1];
      const z1 = way[way.length - 2][1];
      const side = f.w / 2 + 0.35;
      out.push({
        lower: lower.id,
        upper: upper.id,
        pts: pts.slice(1, -1),
        // (beside: at the first steps, a little up the stair, where a wall in front leaves room)
        foot: [[pts[0][0], pts[0][2]], ...[0, -0.35, -0.7].flatMap((k) => [W(-side, z0 + k), W(side, z0 + k)])],
        top: [[pts[pts.length - 1][0], pts[pts.length - 1][2]], ...[0, 0.35, 0.7].flatMap((k) => [W(-side, z1 + k), W(side, z1 + k)])],
      });
    }
  }
  return out;
}

type Mode = "walk" | "rest" | "sleep" | "stand" | "climb";

/** The water of the pets pack's aquariums: its share of the item's width, depth and height (bottom, top). */
const TANKS: Record<string, { w: number; d: number; y0: number; y1: number; fish: number }> = {
  aquarium: { w: 0.78 / 0.8, d: 0.33 / 0.35, y0: 0.08 / 0.5, y1: 0.4 / 0.5, fish: 4 },
  aquarium_large: { w: 1.18 / 1.2, d: 0.43 / 0.45, y0: 0.84 / 1.4, y1: 1.24 / 1.4, fish: 7 },
};
const FISH_COLORS = ["#ff8c3a", "#ffd23f", "#3fe0ff", "#ff5d8f", "#9b7bff", "#7dff9b", "#ff6a3d"];

interface Fish {
  g: THREE.Group;
  y: number;
  amp: number;
  speed: number;
  phase: number;
}

interface Animal {
  pet: Pet;
  look: Look;
  model: Model;
  floorId: string;
  map: FloorMap;
  spots: Spot[];
  rooms: Floor["rooms"];
  pos: Vec2;
  y: number;
  heading: number;
  path: Vec2[];
  /** Where the way ends: the spot (a cat then jumps up onto it). */
  goal: Spot | null;
  /** The spot it lies on now (to jump down from it towards the front). */
  on: Spot | null;
  /** The favourite place it went to last (not the same one again right away). */
  last?: Spot | null;
  mode: Mode;
  until: number;
  phase: number;
  /** A jump up or down: from one point and height to another, then lying, resting or walking on. */
  jump: { from: [number, number, number]; to: [number, number, number]; t: number; then: Mode } | null;
  /** Bound for the stairs: walking to their foot (or top), then up (or down) the steps. */
  stairs: { link: Link; up: boolean } | null;
  /** Where it steps onto the stairs. */
  stairsEntry?: Vec2 | null;
  /** On the steps: the way left (lower floor's coordinates) and the floor it ends on. */
  climb: { pts: [number, number, number][]; to: string } | null;
}

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const angleTo = (from: number, to: number) => {
  let d = to - from;
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d < -Math.PI) d += 2 * Math.PI;
  return d;
};

export function startPets(ctx: PetsContext): PetsController {
  const { lib, viewer } = ctx;
  let animals: Animal[] = [];
  let raf = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let last = 0;
  let links: Link[] = [];
  let tanks: THREE.Group[] = [];
  let fishes: Fish[] = [];
  let fishTimer: ReturnType<typeof setInterval> | undefined;
  /** Per floor: its walk map, the rooms and the favourite places of each kind (made once per plan). */
  let floors = new Map<string, { floor: Floor; map: FloorMap; rooms: Floor["rooms"]; spots: Map<Pet["kind"], Spot[]>; rugs: Rug[] }>();
  let plan: Building = ctx.building;

  const floorInfo = (id: string) => {
    let info = floors.get(id);
    if (!info) {
      const floor = plan.floors.find((f) => f.id === id)!;
      info = { floor, map: petMap(ctx.FloorMap, plan, floor, ctx.closedDoors?.() ?? new Set<string>(), obstaclesOf(floor, ctx.base)), rooms: floor.rooms.filter((r) => r.points.length >= 3), spots: new Map(), rugs: rugsOf(floor) };
      floors.set(id, info);
    }
    return info;
  };

  /** Move an animal onto a floor: its map, rooms and places, and its model into that floor's group. */
  const toFloor = (a: Animal, id: string) => {
    const info = floorInfo(id);
    a.floorId = id;
    a.map = info.map;
    a.rooms = info.rooms;
    let spots = info.spots.get(a.pet.kind);
    if (!spots) info.spots.set(a.pet.kind, (spots = spotsFor(info.floor, a.pet.kind, info.map)));
    a.spots = spots;
    viewer.floorMap.get(id)?.group.add(a.model.root);
  };

  const floorFor = (b: Building, pet: Pet): Floor | undefined => {
    const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
    return withRooms.find((f) => f.id === pet.floor_id) ?? [...withRooms].sort((x, y) => Math.abs(x.elevation) - Math.abs(y.elevation))[0];
  };

  /** A random free place in a room. */
  const somewhere = (a: Animal): Vec2 => {
    const r = a.rooms[Math.floor(Math.random() * a.rooms.length)];
    const xs = r.points.map((p) => p[0]);
    const zs = r.points.map((p) => p[1]);
    for (let i = 0; i < 12; i++) {
      const p: Vec2 = [rnd(Math.min(...xs) + 0.4, Math.max(...xs) - 0.4), rnd(Math.min(...zs) + 0.4, Math.max(...zs) - 0.4)];
      if (a.map.roomAt(p) && !a.map.blocked(p)) return p;
    }
    return a.map.freeNear([(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2]);
  };

  let doorSig = "";
  /** A door opened or shut since: the floors' maps are made again (lazily), each pet takes its floor's new map. */
  const checkDoors = () => {
    const sig = [...(ctx.closedDoors?.() ?? [])].sort().join(",");
    if (sig === doorSig) return;
    doorSig = sig;
    floors = new Map();
    for (const x of animals) if (!x.climb) toFloor(x, x.floorId);
  };

  /** What next: at night to a sleeping place, by day to a favourite place or anywhere; then rest there a while. */
  const decide = (a: Animal, now: number) => {
    checkDoors();
    const night = ctx.night();
    const sleepers = a.spots.filter((s) => s.sleep);
    const choices: Spot[] = night && sleepers.length ? sleepers : a.spots;
    // up on the sofa: first down to its front
    const start: Vec2 = a.on?.approach ?? a.pos;
    // now and then up or down the stairs (at night it stays where it is)
    const here = links.filter((l) => l.lower === a.floorId || l.upper === a.floorId);
    if (here.length && !night && Math.random() < 0.22) {
      const link = here[Math.floor(Math.random() * here.length)];
      const up = link.lower === a.floorId;
      // the first way on that works: in front of the stair, else from either side
      let path: Vec2[] | null = null;
      let entry: Vec2 | null = null;
      for (const c of up ? link.foot : link.top) {
        if (a.map.blocked(c) || !a.map.roomAt(c)) continue;
        path = a.map.path(start, c);
        if (path) {
          entry = c;
          break;
        }
      }
      if (path && entry) {
        a.stairsEntry = entry;
        a.path = path;
        a.goal = null;
        a.stairs = { link, up };
        a.mode = "walk";
        if (a.on?.approach && a.y > 0.05) a.jump = { from: [a.pos[0], a.y, a.pos[1]], to: [a.on.approach[0], 0, a.on.approach[1]], t: 0, then: "walk" };
        a.on = null;
        return;
      }
    }
    for (let tries = 0; tries < 6; tries++) {
      const fav = choices.length && (night || Math.random() < 0.45) ? choices[Math.floor(Math.random() * choices.length)] : null;
      if (fav && (fav === a.on || (fav === a.last && choices.length > 1 && !night))) continue;
      const goal = fav ? (fav.approach ?? fav.p) : somewhere(a);
      const target = a.map.blocked(goal) ? a.map.freeNear(goal) : goal;
      const path = Math.hypot(target[0] - start[0], target[1] - start[1]) < 0.05 ? [] : a.map.path(start, target);
      if (!path) continue;
      a.path = path;
      a.goal = fav;
      if (fav) a.last = fav;
      a.stairs = null;
      a.mode = "walk";
      if (a.on?.approach && a.y > 0.05) a.jump = { from: [a.pos[0], a.y, a.pos[1]], to: [a.on.approach[0], 0, a.on.approach[1]], t: 0, then: "walk" };
      a.on = null;
      return;
    }
    a.mode = night ? "sleep" : "rest";
    a.until = now + rnd(20, 60) * 1000;
  };

  const pose = (a: Animal) => {
    const L = a.look;
    const lying = (a.mode === "rest" || a.mode === "sleep") && !a.jump;
    // on the floor (not up on a sofa or on the stairs) a rug lifts it to its top
    const lift = !a.climb && !a.jump && a.y < 0.05 ? rugTop(floors.get(a.floorId)?.rugs ?? [], a.pos) : 0;
    a.model.root.position.set(a.pos[0], a.y + lift, a.pos[1]);
    a.model.root.rotation.y = a.heading;
    // walking: legs swing, the head nods, the tail wags; lying like a loaf: legs tucked away, the tail round the side
    const moving = (a.mode === "walk" || a.mode === "climb") && !a.jump;
    const swing = moving ? Math.sin(a.phase) : 0;
    a.model.legs.forEach((l, i) => {
      l.rotation.x = lying ? 0 : (i === 0 || i === 3 ? swing : -swing) * 0.6;
      l.scale.y = lying ? 0.08 : 1;
    });
    const hop = a.pet.kind === "rabbit" && moving ? Math.abs(Math.sin(a.phase)) * 0.07 : 0;
    a.model.body.position.y = (lying ? -(L.leg + L.hi * 0.12) : 0) + hop;
    a.model.head.rotation.x = a.mode === "sleep" ? 0.45 : a.mode === "stand" ? 0.5 : lying ? 0.12 : Math.sin(a.phase * 2) * 0.04;
    if (lying) a.model.tail.rotation.set(-1.45, 0, 0.9);
    else a.model.tail.rotation.set(L.tail === "cat" ? -0.5 : -0.9, 0, Math.sin(a.phase * 0.7) * (moving ? 0.6 : 0.2));
    for (const e of a.model.eyes) e.scale.y = a.mode === "sleep" ? 0.12 : 1;
    a.model.zzz.visible = a.mode === "sleep";
  };

  /** At the end of the way: up onto the spot (a cat, from the front) facing the room, or a short stop at the bowls. */
  const arrive = (a: Animal, now: number) => {
    if (a.stairs) {
      // the steps: always in the lower floor's coordinates (its group), up or down
      const { link, up } = a.stairs;
      a.stairs = null;
      // step off where the other floor is free: in front, else beside the stair
      const other = floorInfo(up ? link.upper : link.lower).map;
      const offs = up ? link.top : link.foot;
      const off = offs.find((c) => !other.blocked(c) && other.roomAt(c)) ?? other.freeNear(offs[0]);
      const rise = link.pts[link.pts.length - 1][1];
      const steps = up ? link.pts : [...link.pts].reverse();
      const pts: [number, number, number][] = [...steps, [off[0], up ? rise : 0, off[1]]];
      const from = a.stairsEntry ?? a.pos;
      if (!up) toFloor(a, link.lower);
      a.pos = [from[0], from[1]];
      a.y = up ? 0 : rise;
      a.climb = { pts, to: up ? link.upper : link.lower };
      a.mode = "climb";
      return;
    }
    const s = a.goal;
    a.goal = null;
    if (s?.visit) {
      a.mode = "stand";
      a.until = now + rnd(4, 9) * 1000;
      if (s.face != null) a.heading = s.face;
      return;
    }
    const mode: Mode = ctx.night() ? "sleep" : "rest";
    a.until = now + (mode === "sleep" ? rnd(120, 400) : a.pet.kind === "cat" ? rnd(30, 120) : rnd(15, 60)) * 1000;
    a.on = s;
    if (s && s.y > 0.05 && s.approach) a.jump = { from: [a.pos[0], a.y, a.pos[1]], to: [s.p[0], s.y, s.p[1]], t: 0, then: mode };
    else {
      // a place on the floor that a table or a wall takes up (in front of a sofa with a coffee table): it lies down
      // where it got to, beside it, instead of inside the table (#1047)
      if (s && !(s.y <= 0.05 && a.map.blocked(s.p))) {
        a.pos = s.p;
        a.y = s.y;
      }
      if (s?.face != null) a.heading = s.face;
      a.mode = mode;
    }
  };

  const step = (a: Animal, dt: number, now: number): boolean => {
    if (a.jump) {
      const j = a.jump;
      j.t = Math.min(1, j.t + dt / 0.45);
      const k = j.t;
      a.pos = [j.from[0] + (j.to[0] - j.from[0]) * k, j.from[2] + (j.to[2] - j.from[2]) * k];
      a.y = j.from[1] + (j.to[1] - j.from[1]) * k + Math.sin(k * Math.PI) * 0.22;
      const dx = j.to[0] - j.from[0];
      const dz = j.to[2] - j.from[2];
      if (Math.hypot(dx, dz) > 0.02) a.heading = Math.atan2(dx, dz);
      if (k >= 1) {
        a.y = j.to[1];
        a.jump = null;
        a.mode = j.then;
        // up there: turn round to face the room
        if (j.then !== "walk" && a.on?.face != null) a.heading = a.on.face;
      }
      pose(a);
      return true;
    }
    if (a.mode === "climb" && a.climb) {
      const c = a.climb;
      const next = c.pts[0];
      if (!next) {
        // off the stairs: on the upper floor at its level, or back on the lower
        a.climb = null;
        a.y = 0;
        if (c.to !== a.floorId) toFloor(a, c.to);
        a.mode = "rest";
        a.until = now + rnd(1, 3) * 1000;
        pose(a);
        return true;
      }
      const dx = next[0] - a.pos[0];
      const dz = next[2] - a.pos[1];
      const dy = next[1] - a.y;
      const dist = Math.hypot(dx, dy, dz);
      if (Math.hypot(dx, dz) > 0.02) a.heading += angleTo(a.heading, Math.atan2(dx, dz)) * Math.min(1, dt * 8);
      const move = Math.min(dist, a.look.speed * 0.95 * dt);
      if (dist < 0.02) c.pts.shift();
      else {
        a.pos = [a.pos[0] + (dx / dist) * move, a.pos[1] + (dz / dist) * move];
        a.y += (dy / dist) * move;
        a.phase += dt * a.look.speed * 22;
      }
      pose(a);
      return true;
    }
    if (a.mode !== "walk") {
      if (now < a.until) return false;
      decide(a, now);
      pose(a);
      return (a.mode as Mode) === "walk";
    }
    const next = a.path[0];
    if (!next) {
      arrive(a, now);
      pose(a);
      return true;
    }
    const dx = next[0] - a.pos[0];
    const dz = next[1] - a.pos[1];
    const dist = Math.hypot(dx, dz);
    const turn = angleTo(a.heading, Math.atan2(dx, dz));
    a.heading += Math.sign(turn) * Math.min(Math.abs(turn), dt * 6);
    const move = Math.min(dist, a.look.speed * dt);
    if (dist < 0.02) a.path.shift();
    else {
      a.pos = [a.pos[0] + (dx / dist) * move, a.pos[1] + (dz / dist) * move];
      a.phase += dt * a.look.speed * 20;
    }
    pose(a);
    return true;
  };

  const tick = (now: number) => {
    raf = 0;
    // tablet level, nobody touched the view for a while: they hold still (nothing is drawn) until the next touch
    if (viewer.resting) {
      last = 0;
      timer = setTimeout(() => (raf = requestAnimationFrame(tick)), 1000);
      return;
    }
    // the tablet level draws them about 5 times a second: they step as often, so a step may be longer
    const dt = last ? Math.min(viewer.low ? 0.3 : 0.1, (now - last) / 1000) : 0;
    last = now;
    let active = false;
    for (const a of animals) if (step(a, dt, now)) active = true;
    if (active) viewer.animate();
    if (active && viewer.low) timer = setTimeout(() => (raf = requestAnimationFrame(tick)), 180);
    else if (active) raf = requestAnimationFrame(tick);
    else {
      // all of them rest: wake up when the first one wants to go on
      const wait = Math.max(500, Math.min(...animals.map((a) => a.until - performance.now()), 60000));
      last = 0;
      timer = setTimeout(() => (raf = requestAnimationFrame(tick)), wait);
    }
  };

  /**
   * Fish in the pets pack's aquariums: small, bright fish swimming to and fro behind the front glass (and the back),
   * as one sees them through it – the water itself is drawn solid. They move a few times a second only.
   */
  const buildFish = (b: Building) => {
    const S = shapes(lib);
    for (const floor of b.floors) {
      const fv = viewer.floorMap.get(floor.id);
      if (!fv) continue;
      for (const f of floor.furniture) {
        const spec = TANKS[itemOf(f.type)];
        if (!spec) continue;
        const tank = new lib.Group();
        tank.position.set(f.x, ctx.base(floor, f), f.z);
        tank.rotation.y = (-f.rotation * Math.PI) / 180;
        const halfW = (f.w * spec.w) / 2;
        const y0 = f.h * spec.y0;
        const y1 = f.h * spec.y1;
        for (let i = 0; i < spec.fish; i++) {
          const color = FISH_COLORS[(i * 3 + Math.round(f.x * 7)) % FISH_COLORS.length];
          const mat = new lib.MeshBasicMaterial({ color, vertexColors: true });
          const size = 0.035 + ((i * 37) % 10) / 400;
          for (const side of [1, -1]) {
            const g = new lib.Group();
            const body = new lib.Mesh(S.ball, mat);
            body.scale.set(size * 1.8, size, 0.004);
            const tail = new lib.Mesh(S.ball, mat);
            tail.scale.set(size * 0.7, size * 0.9, 0.004);
            tail.position.x = -size * 1.15;
            g.add(body, tail);
            g.position.z = side * ((f.d * spec.d) / 2 + 0.004);
            tank.add(g);
            fishes.push({ g, y: y0 + ((i + 0.5) / spec.fish) * (y1 - y0), amp: halfW - size * 2, speed: 0.25 + ((i * 53) % 10) / 30, phase: i * 1.7 + (side > 0 ? 0 : 0.6) });
          }
        }
        fv.group.add(tank);
        tanks.push(tank);
      }
    }
    const swim = () => {
      if (document.hidden || viewer.resting) return;
      const t = performance.now() / 1000;
      for (const fi of fishes) {
        const s = Math.sin(t * fi.speed + fi.phase);
        fi.g.position.x = fi.amp * s;
        fi.g.position.y = fi.y + Math.sin(t * fi.speed * 2.3 + fi.phase) * 0.012;
        // facing the way it swims
        fi.g.scale.x = Math.cos(t * fi.speed + fi.phase) >= 0 ? 1 : -1;
      }
      viewer.animate();
    };
    if (fishes.length) {
      swim();
      fishTimer = setInterval(swim, 160);
    }
  };

  const clear = () => {
    cancelAnimationFrame(raf);
    clearTimeout(timer);
    clearInterval(fishTimer);
    for (const a of animals) a.model.root.removeFromParent();
    for (const t of tanks) t.removeFromParent();
    animals = [];
    tanks = [];
    fishes = [];
  };

  const update = (b: Building, pets: readonly Pet[]) => {
    const before = new Map(animals.map((a) => [a.pet.id, a]));
    clear();
    plan = b;
    floors = new Map();
    links = stairLinks(b);
    for (const pet of pets) {
      // a pet that went up or down the stairs stays on that floor
      const prev = before.get(pet.id);
      const floor = (prev && prev.pet.floor_id === pet.floor_id ? b.floors.find((f) => f.id === prev.floorId) : undefined) ?? floorFor(b, pet);
      if (!floor || !viewer.floorMap.get(floor.id) || !floorInfo(floor.id).rooms.length) continue;
      const old = prev;
      const a: Animal = {
        pet,
        look: lookOf(pet),
        model: buildModel(lib, pet),
        floorId: floor.id,
        map: floorInfo(floor.id).map,
        spots: [],
        rooms: [],
        pos: [0, 0],
        y: 0,
        heading: old?.heading ?? rnd(0, Math.PI * 2),
        path: [],
        goal: null,
        on: null,
        mode: "rest",
        until: 0,
        phase: 0,
        jump: null,
        stairs: null,
        stairsEntry: null,
        climb: null,
      };
      toFloor(a, floor.id);
      // a pet already living here keeps its place (up on a sofa it starts in front of it)
      a.pos = old && old.floorId === floor.id && !old.climb ? (old.on?.approach ?? old.pos) : somewhere(a);
      pose(a);
      animals.push(a);
    }
    buildFish(b);
    last = 0;
    viewer.invalidate();
    if (animals.length) raf = requestAnimationFrame(tick);
  };

  update(ctx.building, ctx.pets);
  return { update, dispose: clear };
}
