// The sun's arc over the house and the house's shadow on the ground (see sun-shadow.ts for the shadow's shape).
// Both are built only when the sun has moved a little: the shadow is drawn once into a small texture and lies on
// the ground as one quad, the arc is a line with a dot per hour and the times of sunrise and sunset at its ends.

import {
  AdditiveBlending,
  CanvasTexture,
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
  WebGLRenderTarget,
  type WebGLRenderer,
} from "three";
import type { Vec2 } from "../model.ts";
import { triangulate } from "./geo.ts";

/** Texture pixels per metre of shadow (soft edges come from the texture's own smoothing). */
const PX_PER_M = 12;
const MAX_PX = 1024;

export class SunFx {
  /** Lives in the scene: the shadow on the ground and the arc in the sky. */
  readonly group = new Group();
  private shadow: Mesh;
  private target: WebGLRenderTarget | null = null;
  private arc: LineSegments;
  private ticks: Points;
  private dot: Points;
  /** The glow every dot is drawn with (round and soft, not a square). */
  private glow = glowTexture();
  private labels: Sprite[] = [];

  constructor() {
    this.shadow = new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    );
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.visible = false;
    this.arc = new LineSegments(new Geometry(), new LineBasicMaterial({ color: 0xffc46b, transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false }));
    this.ticks = new Points(new Geometry(), new PointsMaterial({ color: 0xffc46b, map: this.glow, size: 1, transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false }));
    this.dot = new Points(new Geometry(), new PointsMaterial({ color: 0xffe6a0, map: this.glow, size: 1, transparent: true, opacity: 1, blending: AdditiveBlending, depthWrite: false }));
    for (const o of [this.arc, this.ticks, this.dot]) {
      o.visible = false;
      o.frustumCulled = false;
      o.renderOrder = 6;
    }
    this.group.add(this.shadow, this.arc, this.ticks, this.dot);
  }

  /**
   * Draws the shadow: `tris` (x, z per corner) darken, `holes` (the house's own floor, which the shadow must not
   * cover) stay clear; it lies at height `y` with the given strength.
   */
  setShadow(renderer: WebGLRenderer, tris: readonly number[], box: [number, number, number, number], holes: Vec2[][], y: number, opacity: number): void {
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
    (this.shadow.material as MeshBasicMaterial).opacity = opacity;
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

  /** The arc through `points` (world positions), a dot at `hours`, and labels (text at a position) at its ends. */
  setArc(points: [number, number, number][], hours: [number, number, number][], labels: { text: string; at: [number, number, number] }[], size: number, opacity: number, light = false): void {
    // glowing on the dark looks; a solid warm orange on the light ones (a glow would vanish there)
    for (const m of [this.arc.material, this.ticks.material, this.dot.material] as (LineBasicMaterial | PointsMaterial)[]) {
      m.blending = light ? NormalBlending : AdditiveBlending;
      m.color.set(light ? 0xe07b00 : m === this.dot.material ? 0xffe6a0 : 0xffc46b);
      m.needsUpdate = true;
    }
    const seg: number[] = [];
    for (let i = 1; i < points.length; i++) seg.push(...points[i - 1], ...points[i]);
    this.arc.geometry.dispose();
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(seg, 3));
    this.arc.geometry = g;
    (this.arc.material as LineBasicMaterial).opacity = 0.55 * opacity;
    this.ticks.geometry.dispose();
    const t = new Geometry();
    t.setAttribute("position", new Float32BufferAttribute([...points.flat(), ...hours.flat(), ...hours.flat()], 3));
    this.ticks.geometry = t;
    (this.ticks.material as PointsMaterial).size = size * 0.9;
    (this.ticks.material as PointsMaterial).opacity = 0.8 * opacity;
    this.arc.visible = seg.length > 0 && opacity > 0.01;
    this.ticks.visible = hours.length > 0 && opacity > 0.01;
    this.disposeLabels();
    for (const l of labels) {
      const sprite = textSprite(l.text, light);
      sprite.position.set(...l.at);
      sprite.scale.set(size * 5, size * 1.9, 1);
      (sprite.material as SpriteMaterial).opacity = 0.85 * opacity;
      sprite.renderOrder = 6;
      this.labels.push(sprite);
      this.group.add(sprite);
    }
  }

  /** True until an arc is set (or after it was hidden): the arc is built only once a day. */
  get arcEmpty(): boolean {
    return !this.arc.visible;
  }

  /** The sun now, a bright dot on the arc (null: below the horizon). */
  setSunDot(at: [number, number, number] | null, size: number, opacity: number): void {
    this.dot.geometry.dispose();
    const g = new Geometry();
    if (at) g.setAttribute("position", new Float32BufferAttribute(at, 3));
    this.dot.geometry = g;
    const mat = this.dot.material as PointsMaterial;
    mat.size = size * 4;
    mat.opacity = opacity;
    this.dot.visible = !!at && opacity > 0.01;
  }

  hideArc(): void {
    this.arc.visible = false;
    this.ticks.visible = false;
    this.dot.visible = false;
    this.disposeLabels();
  }

  private disposeLabels(): void {
    for (const s of this.labels) {
      this.group.remove(s);
      (s.material as SpriteMaterial).map?.dispose();
      (s.material as SpriteMaterial).dispose();
    }
    this.labels = [];
  }

  dispose(): void {
    this.disposeLabels();
    this.target?.dispose();
    this.glow.dispose();
    for (const o of [this.shadow, this.arc, this.ticks, this.dot]) {
      o.geometry.dispose();
      (o.material as MeshBasicMaterial).dispose();
    }
  }
}

/** A round soft glow, white in the middle (the points take its shape instead of a square). */
function glowTexture(): CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.25, "rgba(255,255,255,0.8)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new CanvasTexture(canvas);
}

/** A short warm text (a time) that always faces the camera. */
function textSprite(text: string, light: boolean): Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext("2d")!;
  ctx.font = "600 56px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = light ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 196, 107, 0.9)";
  ctx.shadowBlur = 14;
  ctx.fillStyle = light ? "#b35f00" : "#ffe2a8";
  ctx.fillText(text, 128, 50);
  const tex = new CanvasTexture(canvas);
  return new Sprite(new SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false }));
}
