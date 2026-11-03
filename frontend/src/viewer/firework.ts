// The New Year's firework of the fun pack "Winter & Christmas": neon rockets burst over the house, their sparks fall
// and fade. One set of points for every spark (no new geometry while it flies), drawn additively over the scene.
import { AdditiveBlending, BufferAttribute, BufferGeometry, Points, PointsMaterial } from "three";
import { dotTexture } from "./snow.ts";

const SPARKS = 90;
const BURSTS = 6;
const N = SPARKS * BURSTS;
const COLOURS: [number, number, number][] = [
  [0.22, 0.88, 1],
  [1, 0.3, 0.75],
  [1, 0.8, 0.25],
  [0.45, 1, 0.5],
  [0.7, 0.45, 1],
];

export class Firework {
  readonly points: Points;
  private pos = new Float32Array(N * 3);
  private col = new Float32Array(N * 3);
  private vel = new Float32Array(N * 3);
  private age = new Float32Array(BURSTS).fill(99);
  private tint: [number, number, number][] = Array.from({ length: BURSTS }, () => COLOURS[0]);
  private next = 0;
  private wait = 0;

  private box: { x0: number; z0: number; x1: number; z1: number; top: number };

  /** Bursts fall within the box (x, z), 3–6 m above the height `top`. */
  constructor(box: { x0: number; z0: number; x1: number; z1: number; top: number }) {
    this.box = box;
    const g = new BufferGeometry();
    g.setAttribute("position", new BufferAttribute(this.pos, 3));
    g.setAttribute("color", new BufferAttribute(this.col, 3));
    const m = new PointsMaterial({ size: 0.35, vertexColors: true, transparent: true, depthWrite: false, blending: AdditiveBlending, sizeAttenuation: true, map: dotTexture() });
    this.points = new Points(g, m);
    this.points.frustumCulled = false;
    this.points.renderOrder = 30;
  }

  /** One burst: its sparks start at a point over the house and fly out in a ball. */
  private burst(i: number): void {
    const b = this.box;
    const cx = b.x0 + Math.random() * (b.x1 - b.x0);
    const cz = b.z0 + Math.random() * (b.z1 - b.z0);
    const cy = b.top + 3 + Math.random() * 3;
    this.age[i] = 0;
    this.tint[i] = COLOURS[Math.floor(Math.random() * COLOURS.length)];
    for (let k = 0; k < SPARKS; k++) {
      const j = (i * SPARKS + k) * 3;
      // a point on a sphere, a little faster for some sparks
      const u = Math.random() * 2 - 1;
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      const speed = 3.2 + Math.random() * 1.6;
      this.pos[j] = cx;
      this.pos[j + 1] = cy;
      this.pos[j + 2] = cz;
      this.vel[j] = r * Math.cos(a) * speed;
      this.vel[j + 1] = u * speed + 0.6;
      this.vel[j + 2] = r * Math.sin(a) * speed;
    }
  }

  /** Moves everything on by `dt` seconds; a new burst about every 0.7 s. */
  step(dt: number): void {
    const t = Math.min(0.05, Math.max(0, dt));
    this.wait -= t;
    if (this.wait <= 0) {
      this.burst(this.next);
      this.next = (this.next + 1) % BURSTS;
      this.wait = 0.45 + Math.random() * 0.6;
    }
    for (let i = 0; i < BURSTS; i++) {
      this.age[i] += t;
      const life = this.age[i];
      // bright at the bang, then fading over two seconds; a spent burst is dark
      const k = life > 2.2 ? 0 : Math.max(0, 1 - life / 2.2) ** 1.4;
      const [r, g, bl] = this.tint[i];
      for (let s = 0; s < SPARKS; s++) {
        const j = (i * SPARKS + s) * 3;
        if (life < 2.2) {
          // drag and gravity
          this.vel[j] *= 1 - 1.2 * t;
          this.vel[j + 1] = this.vel[j + 1] * (1 - 1.2 * t) - 2.4 * t;
          this.vel[j + 2] *= 1 - 1.2 * t;
          this.pos[j] += this.vel[j] * t;
          this.pos[j + 1] += this.vel[j + 1] * t;
          this.pos[j + 2] += this.vel[j + 2] * t;
        }
        this.col[j] = r * k;
        this.col[j + 1] = g * k;
        this.col[j + 2] = bl * k;
      }
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
  }

  dispose(): void {
    this.points.geometry.dispose();
    (this.points.material as PointsMaterial).dispose();
  }
}
