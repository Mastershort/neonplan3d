// The sun's arc over the house and the house's shadow on the ground (see sun-shadow.ts for the shadow's shape).
// Both are built only when the sun has moved a little: the shadow is drawn once into a small texture and lies on
// the ground as one quad. The arc is a glowing strand coloured like the light of the day (red at dawn and dusk,
// warm white at noon), bright where the sun has been and faint ahead; the sun is an orb with a crown of rays, a
// compass ring lies on the ground around the house, and sunrise and sunset stand at the strand's ends.

import {
  AdditiveBlending,
  CanvasTexture,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  LinearFilter,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  NoBlending,
  NormalBlending,
  OrthographicCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  Sprite,
  SpriteMaterial,
  BufferGeometry as Geometry,
  Vector3,
  WebGLRenderTarget,
  type Blending,
  type WebGLRenderer,
} from "three";
import type { Vec2 } from "../model.ts";
import { triangulate } from "./geo.ts";

/** Texture pixels per metre of shadow (soft edges come from the texture's own smoothing). */
const PX_PER_M = 8;
const MAX_PX = 1024;
/** Sides of the strand's tube. */
const SIDES = 6;

type V3 = [number, number, number];

/** What the arc is drawn from (all positions in the scene). */
export interface ArcInput {
  /** The sun's way today, sunrise to sunset: where, when and how high. */
  points: { at: V3; t: number; elevation: number }[];
  now: number;
  /** The full hours on the way. */
  hours: V3[];
  /** Sunrise and sunset: time text, place. */
  labels: { text: string; at: V3; rising: boolean }[];
  /** The sun now (null below the horizon). */
  sun: V3 | null;
  /** The compass ring on the ground: middle, radius, the plan's north (radians clockwise from up), N E S W letters. */
  ring: { center: V3; r: number; north: number; letters: [string, string, string, string] };
  /** A size unit (metres) the strand, dots and labels scale with. */
  size: number;
  /** 0…1 (clouds take some of it). */
  fade: number;
  /** A light look: solid warm colours instead of glow. */
  light: boolean;
}

export class SunFx {
  /** Lives in the scene: the shadow on the ground and the arc in the sky. */
  readonly group = new Group();
  private shadow: Mesh;
  private target: WebGLRenderTarget | null = null;
  /** Everything of the arc, rebuilt as a whole. */
  private arc = new Group();
  private glow = glowTexture();
  private textures: CanvasTexture[] = [];

  constructor() {
    this.shadow = new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    );
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.visible = false;
    this.arc.visible = false;
    this.group.add(this.shadow, this.arc);
  }

  /**
   * Draws the shadow: `tris` (x, z per corner) darken, `holes` (the house's own floor, which the shadow must not
   * cover) stay clear; it lies at height `y` in `color` with the given strength.
   */
  setShadow(renderer: WebGLRenderer, tris: readonly number[], box: [number, number, number, number], holes: Vec2[][], y: number, opacity: number, color = 0x000000): void {
    const [x0, z0, x1, z1] = [box[0] - 0.5, box[1] - 0.5, box[2] + 0.5, box[3] + 0.5];
    const w = Math.min(MAX_PX, Math.max(32, Math.ceil((x1 - x0) * PX_PER_M)));
    const h = Math.min(MAX_PX, Math.max(32, Math.ceil((z1 - z0) * PX_PER_M)));
    if (!this.target || this.target.width !== w || this.target.height !== h) {
      this.target?.dispose();
      this.target = new WebGLRenderTarget(w, h, { minFilter: LinearFilter, magFilter: LinearFilter, depthBuffer: false });
      const mat = this.shadow.material as MeshBasicMaterial;
      mat.map = this.target.texture;
      mat.needsUpdate = true;
    }
    // drawn from above: the plan's z runs down the picture (y = -z), so the texture lies on the ground the right way
    const scene = new Scene();
    const flat = (pts: readonly number[]) => {
      const p = new Float32Array((pts.length / 2) * 3);
      for (let i = 0, j = 0; i < pts.length; i += 2, j += 3) p.set([pts[i], -pts[i + 1], 0], j);
      const g = new Geometry();
      g.setAttribute("position", new Float32BufferAttribute(p, 3));
      return g;
    };
    const dark = new Mesh(flat(tris), new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide }));
    const clearPts: number[] = [];
    for (const poly of holes) for (const t of triangulate(poly)) for (const k of t) clearPts.push(poly[k][0], poly[k][1]);
    const clear = new Mesh(flat(clearPts), new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, blending: NoBlending, side: DoubleSide }));
    clear.renderOrder = 1;
    scene.add(dark, clear);
    const camera = new OrthographicCamera(x0, x1, -z0, -z1, 0.1, 10);
    camera.position.z = 1;
    const before = renderer.getRenderTarget();
    renderer.setRenderTarget(this.target);
    renderer.clear();
    renderer.render(scene, camera);
    renderer.setRenderTarget(before);
    for (const m of [dark, clear]) {
      m.geometry.dispose();
      (m.material as MeshBasicMaterial).dispose();
    }
    this.shadow.scale.set(x1 - x0, z1 - z0, 1);
    this.shadow.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
    const mat = this.shadow.material as MeshBasicMaterial;
    mat.opacity = opacity;
    mat.color.set(color);
    this.shadow.visible = opacity > 0.01;
  }

  hideShadow(): void {
    this.shadow.visible = false;
  }

  /** Shows or hides the shadow without drawing it again (it belongs to the whole-house view). */
  showShadow(on: boolean): void {
    const mat = this.shadow.material as MeshBasicMaterial;
    this.shadow.visible = on && !!mat.map && mat.opacity > 0.01;
  }

  /** The arc, the sun and the compass ring, built anew. */
  setArc(a: ArcInput): void {
    this.clearArc();
    if (a.fade <= 0.01 || a.points.length < 2) return;
    const blending = a.light ? NormalBlending : AdditiveBlending;
    const tube = (radius: number, opacity: number) => {
      const g = tubeGeometry(
        a.points.map((p) => p.at),
        radius,
        a.points.map((p) => dayColor(p.elevation, a.light).multiplyScalar(p.t <= a.now ? 1 : a.light ? 0.75 : 0.5)),
      );
      const m = new Mesh(g, new MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: opacity * a.fade, blending, depthWrite: false }));
      m.renderOrder = 6;
      return m;
    };
    // the strand and, on the dark looks, its soft halo
    this.arc.add(tube(a.size * 0.09, a.light ? 0.95 : 1));
    if (!a.light) this.arc.add(tube(a.size * 0.3, 0.22));
    // a bead per hour, brighter where the sun has passed
    const beads = new Points(
      geometry(a.hours.flat()),
      new PointsMaterial({ color: a.light ? 0xd06a00 : 0xffd98a, map: this.glow, size: a.size * 0.55, transparent: true, opacity: a.fade, blending, depthWrite: false }),
    );
    beads.renderOrder = 6;
    this.arc.add(beads);
    // the sun: an orb with a crown of rays
    if (a.sun) {
      const orb = this.sprite(sunTexture(a.light), a.size * 5, a.size * 5, a.fade, blending);
      orb.position.set(...a.sun);
      this.arc.add(orb);
    }
    // sunrise and sunset: little tags at the strand's ends
    for (const l of a.labels) {
      const tag = this.sprite(tagTexture(`${l.rising ? "↑" : "↓"} ${l.text}`, a.light), a.size * 5.2, a.size * 1.7, a.fade, NormalBlending, true);
      tag.position.set(...l.at);
      this.arc.add(tag);
    }
    this.buildRing(a);
    this.arc.visible = true;
  }

  /** The compass ring on the ground: a circle with a tick every 15°, longer ones at the four directions, and their letters. */
  private buildRing(a: ArcInput): void {
    const { center, r, north, letters } = a.ring;
    const y = center[1] + 0.03;
    const at = (deg: number, rr: number): V3 => {
      const t = north + (deg * Math.PI) / 180;
      return [center[0] + Math.sin(t) * rr, y, center[2] - Math.cos(t) * rr];
    };
    const seg: number[] = [];
    for (let d = 0; d < 360; d += 3) seg.push(...at(d, r), ...at(d + 3, r));
    for (let d = 0; d < 360; d += 15) seg.push(...at(d, r), ...at(d, r * (d % 90 === 0 ? 0.93 : 0.97)));
    const ring = new LineSegments(
      geometry(seg),
      new LineBasicMaterial({ color: a.light ? 0x8a6a3a : 0xffc46b, transparent: true, opacity: (a.light ? 0.45 : 0.32) * a.fade, blending: a.light ? NormalBlending : AdditiveBlending, depthWrite: false }),
    );
    ring.renderOrder = 6;
    this.arc.add(ring);
    letters.forEach((text, i) => {
      const s = this.sprite(letterTexture(text, i === 0, a.light), a.size * 1.6, a.size * 1.6, a.fade, NormalBlending, true);
      s.position.set(...at(i * 90, r * 1.07));
      s.position.y += a.size * 0.6;
      this.arc.add(s);
    });
  }

  private sprite(tex: CanvasTexture, w: number, h: number, opacity: number, blending: Blending, front = false): Sprite {
    this.textures.push(tex);
    const s = new Sprite(new SpriteMaterial({ map: tex, transparent: true, opacity, blending, depthWrite: false, depthTest: !front }));
    s.scale.set(w, h, 1);
    s.renderOrder = 6;
    return s;
  }

  hideArc(): void {
    this.clearArc();
  }

  private clearArc(): void {
    for (const o of [...this.arc.children]) {
      this.arc.remove(o);
      const m = o as Mesh;
      m.geometry?.dispose();
      (m.material as MeshBasicMaterial).dispose();
    }
    for (const t of this.textures) t.dispose();
    this.textures = [];
    this.arc.visible = false;
  }

  dispose(): void {
    this.clearArc();
    this.target?.dispose();
    this.glow.dispose();
    this.shadow.geometry.dispose();
    (this.shadow.material as MeshBasicMaterial).dispose();
  }
}

function geometry(flat: number[]): Geometry {
  const g = new Geometry();
  g.setAttribute("position", new Float32BufferAttribute(flat, 3));
  return g;
}

/** The colour of the daylight at a height of the sun: deep red-orange at the horizon, warm white high up. */
function dayColor(elevation: number, light: boolean): Color {
  const k = Math.min(1, Math.max(0, elevation / 35));
  const low = new Color(light ? 0xd2401a : 0xff4a2a);
  const mid = new Color(light ? 0xe07b00 : 0xffa53a);
  const high = new Color(light ? 0xf0a000 : 0xfff2c8);
  return k < 0.4 ? low.lerp(mid, k / 0.4) : mid.lerp(high, (k - 0.4) / 0.6);
}

/** A tube along the points with a colour per point (a few sides, enough for a thin strand). */
function tubeGeometry(pts: V3[], radius: number, colors: Color[]): Geometry {
  const pos: number[] = [];
  const col: number[] = [];
  const index: number[] = [];
  const up = new Vector3(0, 1, 0);
  for (let i = 0; i < pts.length; i++) {
    const p = new Vector3(...pts[i]);
    const prev = new Vector3(...pts[Math.max(0, i - 1)]);
    const next = new Vector3(...pts[Math.min(pts.length - 1, i + 1)]);
    const t = next.sub(prev).normalize();
    const n = new Vector3().crossVectors(t, up);
    if (n.lengthSq() < 1e-6) n.set(1, 0, 0);
    n.normalize();
    const b = new Vector3().crossVectors(n, t).normalize();
    for (let k = 0; k < SIDES; k++) {
      const a = (k / SIDES) * Math.PI * 2;
      const v = p.clone().addScaledVector(n, Math.cos(a) * radius).addScaledVector(b, Math.sin(a) * radius);
      pos.push(v.x, v.y, v.z);
      col.push(colors[i].r, colors[i].g, colors[i].b);
    }
    if (i === 0) continue;
    for (let k = 0; k < SIDES; k++) {
      const a0 = (i - 1) * SIDES + k;
      const a1 = (i - 1) * SIDES + ((k + 1) % SIDES);
      const b0 = i * SIDES + k;
      const b1 = i * SIDES + ((k + 1) % SIDES);
      index.push(a0, b0, b1, a0, b1, a1);
    }
  }
  const g = new Geometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new Float32BufferAttribute(col, 3));
  g.setIndex(index);
  return g;
}

function canvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return [c, c.getContext("2d")!];
}

/** A round soft glow, white in the middle (the beads take its shape instead of a square). */
function glowTexture(): CanvasTexture {
  const [c, ctx] = canvas(64, 64);
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.25, "rgba(255,255,255,0.8)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new CanvasTexture(c);
}

/** The sun: a bright core, a warm corona and twelve soft rays. */
function sunTexture(light: boolean): CanvasTexture {
  const [c, ctx] = canvas(256, 256);
  ctx.translate(128, 128);
  // rays
  for (let i = 0; i < 12; i++) {
    ctx.save();
    ctx.rotate((i / 12) * Math.PI * 2);
    const long = i % 2 === 0 ? 124 : 92;
    const g = ctx.createLinearGradient(0, 0, 0, -long);
    g.addColorStop(0, light ? "rgba(240,140,0,0.75)" : "rgba(255,214,140,0.7)");
    g.addColorStop(1, "rgba(255,170,60,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(-7, 0);
    ctx.lineTo(0, -long);
    ctx.lineTo(7, 0);
    ctx.fill();
    ctx.restore();
  }
  // corona and core
  const corona = ctx.createRadialGradient(0, 0, 0, 0, 0, 80);
  corona.addColorStop(0, light ? "rgba(255,190,60,0.95)" : "rgba(255,236,190,1)");
  corona.addColorStop(0.3, light ? "rgba(245,150,20,0.8)" : "rgba(255,190,90,0.75)");
  corona.addColorStop(1, "rgba(255,140,40,0)");
  ctx.fillStyle = corona;
  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = light ? "#fff3cf" : "#fffaf0";
  ctx.beginPath();
  ctx.arc(0, 0, 22, 0, Math.PI * 2);
  ctx.fill();
  return new CanvasTexture(c);
}

/** A rounded tag with a time (sunrise or sunset). */
function tagTexture(text: string, light: boolean): CanvasTexture {
  const [c, ctx] = canvas(320, 104);
  ctx.font = "600 52px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const w = Math.min(304, ctx.measureText(text).width + 56);
  const x = (320 - w) / 2;
  ctx.beginPath();
  // no roundRect on old Fire-tablet WebViews: a plain box there
  if (typeof ctx.roundRect === "function") ctx.roundRect(x, 10, w, 84, 42);
  else ctx.rect(x, 10, w, 84);
  ctx.fillStyle = light ? "rgba(255,248,236,0.92)" : "rgba(20,12,4,0.72)";
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = light ? "rgba(224,123,0,0.9)" : "rgba(255,196,107,0.85)";
  ctx.stroke();
  ctx.fillStyle = light ? "#a34f00" : "#ffe2a8";
  ctx.fillText(text, 160, 54);
  return new CanvasTexture(c);
}

/** A compass letter on the ground ring; north stands out. */
function letterTexture(text: string, north: boolean, light: boolean): CanvasTexture {
  const [c, ctx] = canvas(96, 96);
  ctx.font = `${north ? 800 : 600} 64px system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = light ? "rgba(255,255,255,0.9)" : north ? "rgba(255,90,60,0.9)" : "rgba(255,196,107,0.8)";
  ctx.shadowBlur = 12;
  ctx.fillStyle = north ? (light ? "#c0301a" : "#ff6a4a") : light ? "#7a5a2a" : "#ffd9a0";
  ctx.fillText(text, 48, 52);
  return new CanvasTexture(c);
}
