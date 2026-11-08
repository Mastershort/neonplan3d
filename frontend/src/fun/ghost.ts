// Fun pack "Halloween": a little ghost that floats through the house now and then. It shows up in a room of a floor
// that is shown, glides through a few rooms (right through the walls, it is a ghost), bobbing and swaying, and fades
// away again – more often at night. Between its rounds nothing moves, so nothing is drawn: it costs nothing then.

import type * as THREE from "three";
import type { Building, Floor } from "../model.ts";
import { centroid } from "../model.ts";
import type { FunLib, PetViewer } from "./pets.ts";

export interface GhostContext {
  lib: FunLib;
  viewer: PetViewer;
  building: Building;
  /** Whether it is night (the sun below the horizon): the ghost comes more often then. */
  night: () => boolean;
}

export interface GhostController {
  update(building: Building): void;
  dispose(): void;
}

const SPEED = 0.9;
/** About 80 cm tall: still easy to spot in the house view. */
const SIZE = 2.0;
/** Its hem floats about 20 cm above the floor (the hem lies 0.32 below its middle, scaled). */
const HEIGHT = 0.2 + 0.32 * SIZE;
const FADE = 0.8;

/** A body of revolution from (radius, height) rings; `wave` ripples the lowest ring (the ghost's hem). */
function lathe(lib: FunLib, rings: [number, number][], n: number, wave = 0): THREE.BufferGeometry {
  const pos: number[] = [];
  const at = (r: number, y: number, a: number, i: number): number[] => [Math.cos(a) * r, y + (i === 0 ? Math.sin(a * 6) * wave : 0), Math.sin(a) * r];
  for (let i = 0; i < rings.length - 1; i++) {
    const [r0, y0] = rings[i];
    const [r1, y1] = rings[i + 1];
    for (let k = 0; k < n; k++) {
      const a0 = (k / n) * Math.PI * 2;
      const a1 = ((k + 1) / n) * Math.PI * 2;
      pos.push(...at(r0, y0, a0, i), ...at(r1, y1, a0, i + 1), ...at(r1, y1, a1, i + 1), ...at(r0, y0, a0, i), ...at(r1, y1, a1, i + 1), ...at(r0, y0, a1, i));
    }
  }
  const g = new lib.BufferGeometry();
  g.setAttribute("position", new lib.Float32BufferAttribute(pos, 3));
  return g;
}

function buildGhost(lib: FunLib) {
  const root = new lib.Group();
  // the sheet: a dome on top, the cloth widening down to a wavy hem
  const profile: [number, number][] = [[0.24, -0.32], [0.22, -0.1], [0.2, 0.08]];
  for (let i = 1; i <= 6; i++) {
    const t = (i / 6) * (Math.PI / 2);
    profile.push([Math.cos(t) * 0.2, 0.08 + Math.sin(t) * 0.2]);
  }
  const bodyMat = new lib.MeshBasicMaterial({ color: new lib.Color("#eef6ff"), transparent: true, opacity: 0, depthWrite: false, side: lib.DoubleSide, forceSinglePass: true });
  const body = new lib.Mesh(lathe(lib, profile, 18, 0.035), bodyMat);
  // a soft glow around it
  const haloMat = new lib.MeshBasicMaterial({ color: new lib.Color("#7fe8ff"), transparent: true, opacity: 0, depthWrite: false, side: lib.DoubleSide, forceSinglePass: true });
  const halo = new lib.Mesh(lathe(lib, profile.map(([r, y]): [number, number] => [r * 1.25 + 0.02, y * 1.12]), 14, 0.04), haloMat);
  // eyes and an "o" mouth on the front (+z)
  const faceMat = new lib.MeshBasicMaterial({ color: new lib.Color("#141826"), transparent: true, opacity: 0, depthWrite: false });
  const eye = lathe(lib, [[0, -0.03], [0.022, -0.02], [0.026, 0], [0.022, 0.02], [0, 0.03]], 8);
  const face: THREE.Mesh[] = [];
  for (const x of [-0.07, 0.07]) {
    const e = new lib.Mesh(eye, faceMat);
    e.position.set(x, 0.17, 0.18);
    e.scale.set(1, 1.25, 0.5);
    face.push(e);
  }
  const mouth = new lib.Mesh(eye, faceMat);
  mouth.position.set(0, 0.08, 0.2);
  mouth.scale.set(0.9, 0.8, 0.5);
  face.push(mouth);
  // two little arms
  const arm = lathe(lib, [[0, -0.05], [0.035, -0.03], [0.04, 0.02], [0, 0.05]], 8);
  for (const x of [-0.22, 0.22]) {
    const a = new lib.Mesh(arm, bodyMat);
    a.position.set(x, 0.0, 0.03);
    a.rotation.z = x < 0 ? 0.9 : -0.9;
    root.add(a);
  }
  root.add(halo, body, ...face);
  // a ghost shows through the walls: drawn last, over everything
  for (const m of [bodyMat, haloMat, faceMat]) m.depthTest = false;
  halo.renderOrder = 20;
  body.renderOrder = 21;
  for (const f of face) f.renderOrder = 22;
  root.scale.setScalar(SIZE);
  root.visible = false;
  return { root, mats: [bodyMat, haloMat, faceMat], opacity: [0.82, 0.18, 0.9] };
}

export function startGhost(ctx: GhostContext): GhostController {
  const { lib, viewer } = ctx;
  let plan = ctx.building;
  const ghost = buildGhost(lib);
  let host: THREE.Group | null = null;
  let raf = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let disposed = false;

  const wait = (first = false) => {
    clearTimeout(timer);
    if (disposed) return;
    const night = ctx.night();
    const s = first ? 6 + Math.random() * 8 : night ? 25 + Math.random() * 35 : 70 + Math.random() * 80;
    timer = setTimeout(fly, s * 1000);
  };

  /** A round: a floor that is shown, a few rooms of it, through them and away. */
  function fly() {
    if (disposed) return;
    const shown = [...viewer.floorMap.values()].filter((f) => f.group.visible && f.floor.rooms.some((r) => r.points.length >= 3));
    const pick = shown[Math.floor(Math.random() * shown.length)];
    if (!pick) return wait();
    const floor: Floor = plan.floors.find((f) => f.id === pick.floor.id) ?? pick.floor;
    const rooms = floor.rooms.filter((r) => r.points.length >= 3);
    const stops = Array.from({ length: Math.min(4, Math.max(2, rooms.length)) }, () => centroid(rooms[Math.floor(Math.random() * rooms.length)].points));
    // start and end a little outside the first and last room, so it drifts in and out
    const path = stops.map(([x, z]) => [x + (Math.random() - 0.5) * 0.8, z + (Math.random() - 0.5) * 0.8] as [number, number]);
    if (path.length < 2 || Math.hypot(path[1][0] - path[0][0], path[1][1] - path[0][1]) < 0.5) path.push([path[0][0] + 2, path[0][1] + 1.5]);
    const lens = path.slice(1).map((p, i) => Math.hypot(p[0] - path[i][0], p[1] - path[i][1]));
    const total = lens.reduce((a, b) => a + b, 0);
    const duration = Math.max(6, total / SPEED);
    host?.remove(ghost.root);
    host = pick.group;
    host.add(ghost.root);
    ghost.root.visible = true;
    const t0 = performance.now();
    const step = (now: number) => {
      if (disposed) return;
      const t = (now - t0) / 1000;
      if (t >= duration || !pick.group.visible) {
        ghost.root.visible = false;
        viewer.invalidate();
        // its floor was hidden mid-round (another floor opened): it comes back soon on one that is shown
        return wait(t < duration);
      }
      // where along the path: eased in and out
      let d = (t / duration) * total;
      let i = 0;
      while (i < lens.length - 1 && d > lens[i]) d -= lens[i++];
      const k = lens[i] ? Math.min(1, d / lens[i]) : 1;
      const a = path[i];
      const b = path[i + 1] ?? a;
      const x = a[0] + (b[0] - a[0]) * k;
      const z = a[1] + (b[1] - a[1]) * k;
      ghost.root.position.set(x, HEIGHT + Math.sin(t * 2.2) * 0.08, z);
      ghost.root.rotation.y = Math.atan2(b[0] - a[0], b[1] - a[1]);
      ghost.root.rotation.z = Math.sin(t * 1.6) * 0.12;
      const fade = Math.min(1, t / FADE, (duration - t) / FADE);
      ghost.mats.forEach((m, j) => (m.opacity = ghost.opacity[j] * fade));
      // on the tablet level at its slower pace (and not at all while the view rests)
      viewer.animate();
      // the tablet level draws it about 5 times a second: it moves on as often
      if (viewer.low) timer = setTimeout(() => (raf = requestAnimationFrame(step)), 180);
      else raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  wait(true);
  return {
    update(building: Building) {
      plan = building;
      // the floors were built anew: the ghost waits for its next round
      if (host && ![...viewer.floorMap.values()].some((f) => f.group === host)) {
        cancelAnimationFrame(raf);
        host = null;
        ghost.root.visible = false;
        wait(true);
      }
    },
    dispose() {
      disposed = true;
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      host?.remove(ghost.root);
      viewer.invalidate();
    },
  };
}
