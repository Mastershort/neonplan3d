// The real sky behind the house: colours that follow the sun (night, blue hour, sunset, day), stars that turn with
// the night, the moon in its real phase and – with the weather outside – clouds that drift with the wind. Drawn on a
// plain 2D canvas behind the 3D canvas: the house is not rendered again for it, and on the tablet level it is a still
// picture that is only redrawn when the view turns.
import { Vector3, type PerspectiveCamera } from "three";

const DEG = Math.PI / 180;

export interface SkyInput {
  /** The sun (degrees above the horizon, clockwise from north) or null when no place is known. */
  sun: { elevation: number; azimuth: number } | null;
  /** The plan's north (degrees). */
  north: number;
  /** Cloud cover 0…1 and wind 0…1 (only with the weather outside; otherwise 0). */
  cloud: number;
  wind: number;
  /** "full": the sky paints its own colours (light and natural looks); "overlay": only stars, moon, glow and clouds over the look's own sky (neon). */
  mode: "full" | "overlay";
  date: Date;
}

type RGB = [number, number, number];

const mixC = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a})`;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Day factor from the sun's elevation: 0 at night (below −8°), 1 by day (above 10°). */
export function dayLight(elevation: number | null): number {
  if (elevation === null) return 0;
  return clamp01((elevation + 8) / 18);
}

/** How much the sunset glows: strongest with the sun just at the horizon, none at noon or deep night. */
export function sunsetGlow(elevation: number | null): number {
  if (elevation === null) return 0;
  return clamp01(1 - Math.abs(elevation - 1) / 9);
}

/** Zenith and horizon colour for the sun's elevation, greyed by clouds. */
export function skyColors(elevation: number | null, cloud: number): { zenith: RGB; horizon: RGB } {
  const day = dayLight(elevation);
  const glow = sunsetGlow(elevation);
  const night: [RGB, RGB] = [
    [6, 10, 24],
    [18, 26, 52],
  ];
  const noon: [RGB, RGB] = [
    [58, 118, 205],
    [170, 206, 240],
  ];
  let zenith = mixC(night[0], noon[0], day);
  let horizon = mixC(night[1], noon[1], day);
  // the blue hour and the sunset: violet up high, warm along the horizon
  zenith = mixC(zenith, [70, 60, 120], glow * 0.35);
  horizon = mixC(horizon, [246, 150, 92], glow * 0.7);
  // clouds grey the whole sky
  const grey: RGB = mixC([30, 34, 44], [168, 176, 188], day);
  return { zenith: mixC(zenith, grey, cloud * 0.75), horizon: mixC(horizon, grey, cloud * 0.6) };
}

/** The moon's phase on a date: 0 new moon, 0.5 full moon, back to 1 (a synodic month of 29.53 days). */
export function moonPhase(date: Date): number {
  const known = Date.UTC(2000, 0, 6, 18, 14); // a new moon
  const days = (date.getTime() - known) / 86_400_000;
  const p = (days / 29.530588853) % 1;
  return p < 0 ? p + 1 : p;
}

/** A fixed field of stars (azimuth, elevation in degrees, size, twinkle phase), the same on every start. */
export function starField(count: number, seed = 7): { az: number; el: number; size: number; tw: number }[] {
  let s = seed >>> 0;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const out: { az: number; el: number; size: number; tw: number }[] = [];
  for (let i = 0; i < count; i++) {
    // evenly over the dome: more stars near the horizon than straight up would give with a plain random elevation
    const el = Math.asin(0.05 + 0.95 * rnd()) / DEG;
    out.push({ az: rnd() * 360, el, size: rnd() < 0.08 ? 1.8 : 0.6 + rnd() * 0.8, tw: rnd() * Math.PI * 2 });
  }
  return out;
}

/** A fixed set of cloud banks (azimuth, elevation, size); how many show depends on the cloud cover. */
export function cloudBanks(count: number, seed = 11): { az: number; el: number; w: number; h: number }[] {
  let s = seed >>> 0;
  const rnd = () => ((s = (s * 1103515245 + 12345) >>> 0) / 4294967296);
  return Array.from({ length: count }, () => ({ az: rnd() * 360, el: 6 + rnd() * 26, w: 14 + rnd() * 22, h: 3 + rnd() * 4 }));
}

const STARS = starField(170);
const CLOUDS = cloudBanks(26);

export class SkyLayer {
  readonly canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private input: SkyInput | null = null;
  private timer: ReturnType<typeof setInterval> | undefined;
  private t0 = performance.now();
  private v = new Vector3();

  private camera: PerspectiveCamera;
  private still: () => boolean;
  private ground: () => number | null;

  /** `ground`: how far down the picture (0 top … 1 bottom) the far edge of a drawn neighbourhood lies, or null. */
  constructor(camera: PerspectiveCamera, still: () => boolean, ground: () => number | null = () => null) {
    this.camera = camera;
    this.still = still;
    this.ground = ground;
    this.canvas = document.createElement("canvas");
    this.canvas.className = "fp3d-sky";
    this.canvas.setAttribute("aria-hidden", "true");
    this.ctx = this.canvas.getContext("2d");
  }

  /** What to show (null hides the sky: an own backdrop, the blueprint look, or switched off). */
  set(input: SkyInput | null): void {
    this.input = input;
    this.canvas.hidden = !input;
    this.animate();
    this.draw();
  }

  /** Called when the view turned or the stage changed size. */
  viewChanged(): void {
    if (this.input) this.draw();
  }

  dispose(): void {
    clearInterval(this.timer);
    this.canvas.remove();
  }

  /** Twinkling stars and drifting clouds: a few pictures per second, never on the tablet level or in a hidden tab. */
  private animate(): void {
    const moving = !!this.input && !this.still() && (this.input.cloud > 0.05 || dayLight(this.input.sun?.elevation ?? null) < 0.4);
    if (moving && !this.timer) {
      this.timer = setInterval(() => {
        if (!document.hidden) this.draw();
      }, 125);
    } else if (!moving && this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  /**
   * The dome on the screen. NeonPlan looks down on the house, so the true horizon mostly lies above the picture: the
   * sky is laid behind the house instead – it turns with the camera (azimuth across the width) and the horizon sits in
   * the lower part of the picture, a little higher the flatter the view. Over a look's own background (overlay) it
   * sits about the middle, so sun, moon and stars stand above the house rather than over the ground before it.
   */
  private frame(h: number, overlay: boolean): { lookAz: number; horizonY: number } {
    const d = this.camera.getWorldDirection(this.v);
    const lookAz = Math.atan2(d.x, -d.z) / DEG;
    const down = Math.asin(Math.min(1, Math.max(-1, -d.y)));
    const k = Math.min(1, Math.max(0, down / (Math.PI / 2)));
    // the neighbourhood from the map reaches further than the house: the horizon lies beyond its far edge, so sun,
    // moon and clouds stand over it rather than between its streets (#1203)
    const edge = this.ground();
    const horizonY = Math.min(h * (overlay ? 0.42 + 0.2 * k : 0.6 + 0.3 * k), edge === null ? Infinity : edge * h);
    return { lookAz, horizonY };
  }

  /** A direction in the sky (degrees) on the screen, or null outside the picture's 110° across. */
  private onScreen(az: number, el: number, w: number, frame: { lookAz: number; horizonY: number }, north: number): [number, number] | null {
    let diff = (((az + north - frame.lookAz) % 360) + 540) % 360 - 180;
    const half = 55;
    if (Math.abs(diff) > half + 10) return null;
    const x = w / 2 + (diff / half) * (w / 2);
    const y = frame.horizonY - (Math.max(-5, el) / 75) * frame.horizonY;
    return [x, y];
  }

  private draw(): void {
    const ctx = this.ctx;
    const input = this.input;
    if (!ctx || !input) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
    ctx.clearRect(0, 0, w, h);
    const t = (performance.now() - this.t0) / 1000;
    const el = input.sun?.elevation ?? null;
    const day = dayLight(el);
    const glow = sunsetGlow(el);
    const fr = this.frame(h, input.mode === "overlay");
    const horizonY = fr.horizonY;
    if (input.mode === "full") {
      const { zenith, horizon } = skyColors(el, input.cloud);
      const g = ctx.createLinearGradient(0, 0, 0, Math.max(1, horizonY));
      g.addColorStop(0, css(zenith));
      g.addColorStop(1, css(horizon));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, Math.max(0, horizonY));
      // below the horizon: the haze of the far ground
      const below = ctx.createLinearGradient(0, horizonY, 0, h);
      below.addColorStop(0, css(horizon));
      below.addColorStop(1, css(mixC(horizon, [20, 24, 30], 0.55 + 0.25 * (1 - day))));
      ctx.fillStyle = below;
      ctx.fillRect(0, Math.max(0, horizonY), w, h);
    }
    // by day over the look's own background: a light haze over the horizon, so the day shows in neon too
    if (input.mode === "overlay" && day > 0.05) {
      // daylight from above and a brighter haze along the horizon
      const end = horizonY + h * 0.08;
      const g = ctx.createLinearGradient(0, 0, 0, end);
      const a = day * (1 - input.cloud * 0.4);
      g.addColorStop(0, `rgba(90,175,255,${0.34 * a})`);
      g.addColorStop(0.45, `rgba(80,165,255,${0.12 * a})`);
      g.addColorStop(0.85, `rgba(130,205,255,${0.3 * a})`);
      g.addColorStop(1, "rgba(130,205,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, end);
    }
    // the sun by day: a bright core with a wide halo where it really stands (dimmed behind clouds)
    if (input.sun && el !== null && el > -1 && input.cloud < 0.9) {
      const p = this.onScreen(input.sun.azimuth, Math.max(1, el), w, fr, input.north);
      if (p && p[1] < horizonY) {
        const a = Math.min(1, day * 1.4) * (1 - input.cloud * 0.8);
        const halo = Math.max(w, h) * 0.3;
        const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], halo);
        g.addColorStop(0, `rgba(255,236,180,${0.45 * a})`);
        g.addColorStop(0.12, `rgba(255,214,140,${0.22 * a})`);
        g.addColorStop(1, "rgba(255,200,120,0)");
        ctx.fillStyle = g;
        ctx.fillRect(p[0] - halo, p[1] - halo, halo * 2, halo * 2);
        ctx.fillStyle = `rgba(255,248,225,${0.9 * a})`;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 9 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // the sunset's glow around the sun, low over the horizon
    if (input.sun && glow > 0.02) {
      const p = this.onScreen(input.sun.azimuth, Math.max(-2, input.sun.elevation), w, fr, input.north);
      if (p) {
        const r = Math.max(w, h) * 0.55;
        const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], r);
        const a = glow * (input.mode === "full" ? 0.55 : 0.35) * (1 - input.cloud * 0.7);
        g.addColorStop(0, `rgba(255,170,95,${a})`);
        g.addColorStop(0.4, `rgba(255,120,90,${a * 0.45})`);
        g.addColorStop(1, "rgba(255,120,90,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
    }
    // stars: they come out after sunset and turn with the night (15° an hour)
    // between the clouds some stars still show (fully covered, a night sky would be plain black)
    const starsOut = clamp01((0.45 - day) / 0.35) * (1 - input.cloud * 0.6);
    if (starsOut > 0.02) {
      const turn = ((input.date.getHours() + input.date.getMinutes() / 60) * 15) % 360;
      const still = this.still();
      for (const s of STARS) {
        const p = this.onScreen(s.az + turn, s.el, w, fr, input.north);
        if (!p || p[1] > horizonY) continue;
        const tw = still ? 0.9 : 0.7 + 0.3 * Math.sin(t * 1.7 + s.tw);
        const a = Math.min(1, starsOut * tw * (0.6 + 0.4 * Math.min(1, s.el / 20)));
        const r = (s.size + 0.6) * dpr;
        ctx.fillStyle = `rgba(230,238,255,${a})`;
        ctx.beginPath();
        ctx.arc(p[0], p[1], r / 2 + 0.3, 0, Math.PI * 2);
        ctx.fill();
        // the bright ones get a soft glow
        if (s.size > 1.5) {
          const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 3);
          g.addColorStop(0, `rgba(190,215,255,${a * 0.45})`);
          g.addColorStop(1, "rgba(190,215,255,0)");
          ctx.fillStyle = g;
          ctx.fillRect(p[0] - r * 3, p[1] - r * 3, r * 6, r * 6);
        }
      }
    }
    // the moon in its real phase: as far round from the sun as its phase says (full moon opposite it), high in the picture
    if (input.sun && day < 0.5 && input.cloud < 0.97) {
      const phase = moonPhase(input.date);
      const p = this.onScreen((input.sun.azimuth + phase * 360) % 360, 40 + 0.3 * Math.min(40, Math.max(0, -input.sun.elevation)), w, fr, input.north);
      if (p && p[1] < horizonY) this.drawMoon(ctx, p[0], p[1], 11 * dpr, phase, (1 - day * 1.8) * (1 - input.cloud * 0.6));
    }
    // clouds: soft banks that drift with the wind (only with the weather outside)
    if (input.cloud > 0.04) {
      const n = Math.round(CLOUDS.length * Math.min(1, input.cloud * 1.15));
      const drift = (t * (0.4 + input.wind * 2.5)) % 360;
      // by night the clouds are lit faintly by the moon and the town, so they show on the dark sky
      const tone: RGB = mixC([92, 104, 138], [236, 240, 246], day);
      const lit: RGB = mixC(tone, [255, 176, 120], glow * 0.6);
      for (let i = 0; i < n; i++) {
        const c = CLOUDS[i];
        const p = this.onScreen(c.az + drift, c.el, w, fr, input.north);
        if (!p || p[1] > horizonY + 4 * dpr) continue;
        // the size on the screen: how far a few degrees reach there
        const q = this.onScreen(c.az + drift + c.w / 2, c.el, w, fr, input.north);
        const rx = q ? Math.max(20, Math.abs(q[0] - p[0])) : 60 * dpr;
        const ry = rx * (c.h / c.w) * 1.6;
        const a = (input.mode === "full" ? 0.55 : day < 0.3 ? 0.42 : 0.32) * Math.min(1, input.cloud * 1.3);
        for (let k = -1; k <= 1; k++) {
          const cx = p[0] + k * rx * 0.45;
          const cy = p[1] - Math.abs(k) * ry * -0.15;
          const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rx * (k === 0 ? 0.75 : 0.55));
          g.addColorStop(0, css(lit, a));
          g.addColorStop(1, css(lit, 0));
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.ellipse(cx, cy, rx * (k === 0 ? 0.75 : 0.55), ry, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }

  /** The moon: a pale disc with the dark part of its phase cut away (lit from the right while it waxes). */
  private drawMoon(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, phase: number, alpha: number): void {
    if (alpha <= 0.02) return;
    const lit = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2); // 0 new … 1 full
    ctx.save();
    // a soft halo, brighter towards full moon
    const halo = ctx.createRadialGradient(x, y, r * 0.8, x, y, r * 4);
    halo.addColorStop(0, `rgba(200,215,255,${0.18 * lit * alpha})`);
    halo.addColorStop(1, "rgba(200,215,255,0)");
    ctx.fillStyle = halo;
    ctx.fillRect(x - r * 4, y - r * 4, r * 8, r * 8);
    // the dark disc faintly, then the lit part
    ctx.fillStyle = `rgba(120,130,160,${0.18 * alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(236,240,250,${0.92 * alpha})`;
    ctx.beginPath();
    const waxing = phase < 0.5;
    // the lit limb: a half circle on the lit side, closed by an ellipse whose width follows the phase
    const k = Math.cos(phase * Math.PI * 2); // 1 new … −1 full
    if (waxing) {
      ctx.arc(x, y, r, -Math.PI / 2, Math.PI / 2, false);
      ctx.ellipse(x, y, Math.abs(k) * r, r, 0, Math.PI / 2, -Math.PI / 2, k > 0);
    } else {
      ctx.arc(x, y, r, Math.PI / 2, -Math.PI / 2, false);
      ctx.ellipse(x, y, Math.abs(k) * r, r, 0, -Math.PI / 2, Math.PI / 2, k > 0);
    }
    ctx.fill();
    ctx.restore();
  }
}
