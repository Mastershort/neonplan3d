// "Anflug aus dem All" (an option, off by default): when the view opens, a neon globe turns to the home's place,
// a beam marks it, the view dives in – and the 3D camera comes down from high above onto the house. A tap skips it.
// Drawn on a 2D canvas over the stage; nothing of it stays once it is done.
import { LitElement, css, html } from "lit";

const DEG = Math.PI / 180;

/** Orthographic globe: a point (lat, lon) as seen with the globe turned to (lat0, lon0); null on the far side. */
export function globePoint(lat: number, lon: number, lat0: number, lon0: number): [number, number] | null {
  const p = lat * DEG;
  const l = (lon - lon0) * DEG;
  const p0 = lat0 * DEG;
  const cosc = Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l);
  if (cosc < 0) return null;
  return [Math.cos(p) * Math.sin(l), Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l)];
}

const ease = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Timeline (ms): the globe turns, then dives in; the 3D flight starts while it dives, the canvas fades out. */
export const FLYIN = { turn: 1500, dive: 1300, fade: 600 };

export class Fp3dFlyin extends LitElement {
  static properties = { lat: { type: Number }, lon: { type: Number } };
  declare lat: number;
  declare lon: number;
  private raf = 0;
  private t0 = 0;
  private dove = false;
  private ended = false;

  constructor() {
    super();
    this.lat = 50;
    this.lon = 10;
  }

  firstUpdated(): void {
    this.t0 = performance.now();
    const loop = () => {
      if (this.ended) return;
      this.draw(performance.now() - this.t0);
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    cancelAnimationFrame(this.raf);
  }

  /** Skip: the 3D flight still finishes, quickly. */
  private skip = () => this.finish(true);

  private finish(skipped: boolean): void {
    if (this.ended) return;
    this.ended = true;
    cancelAnimationFrame(this.raf);
    if (!this.dove) this.dispatchEvent(new CustomEvent("flyin-dive", { detail: { fast: true } }));
    this.dispatchEvent(new CustomEvent("flyin-done", { detail: { skipped } }));
  }

  private draw(ms: number): void {
    const canvas = this.renderRoot.querySelector("canvas");
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    // one pixel per CSS pixel: the globe is soft anyway, and a full high-resolution canvas each frame made it stutter
    const dpr = 1;
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    const { turn, dive, fade } = FLYIN;
    if (ms > turn + dive * 0.55 && !this.dove) {
      this.dove = true;
      this.dispatchEvent(new CustomEvent("flyin-dive", { detail: { fast: false } }));
    }
    if (ms > turn + dive + fade) return this.finish(false);
    ctx.clearRect(0, 0, w, h);
    // deep space behind, fading out at the end so the house shows through
    const out = ms < turn + dive ? 0 : (ms - turn - dive) / fade;
    ctx.globalAlpha = 1 - out;
    ctx.fillStyle = "#02040a";
    ctx.fillRect(0, 0, w, h);
    // the globe turns from a quarter round to the home's place
    const k = ease(ms / turn);
    const lon0 = this.lon - 100 * (1 - k);
    const lat0 = this.lat * k;
    // then it grows towards the place
    const d = ms < turn ? 0 : ease((ms - turn) / dive);
    const base = Math.min(w, h) * 0.32;
    const r = base * Math.pow(14, d);
    const home = globePoint(this.lat, this.lon, lat0, lon0);
    // keep the home under the middle while diving in
    const cx = w / 2 - (home ? home[0] * r * d : 0);
    const cy = h / 2 + (home ? home[1] * r * d : 0);
    // the planet: a dark disc with a cyan rim (the glow only where it is, not over the whole picture)
    if (r < Math.max(w, h)) {
      const glow = ctx.createRadialGradient(cx, cy, r * 0.95, cx, cy, r * 1.25);
      glow.addColorStop(0, "rgba(62,232,255,0.35)");
      glow.addColorStop(1, "rgba(62,232,255,0)");
      ctx.fillStyle = glow;
      const g = r * 1.25;
      const x0 = Math.max(0, cx - g);
      const y0 = Math.max(0, cy - g);
      ctx.fillRect(x0, y0, Math.min(w, cx + g) - x0, Math.min(h, cy + g) - y0);
    }
    ctx.fillStyle = "#06101f";
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    // the grid of latitudes and longitudes
    ctx.strokeStyle = `rgba(62,232,255,${0.5 * (1 - d * 0.7)})`;
    ctx.lineWidth = Math.max(1, dpr);
    const line = (pts: [number, number][]) => {
      let on = false;
      ctx.beginPath();
      for (const [la, lo] of pts) {
        const p = globePoint(la, lo, lat0, lon0);
        if (!p) {
          on = false;
          continue;
        }
        const x = cx + p[0] * r;
        const y = cy - p[1] * r;
        if (on) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
        on = true;
      }
      ctx.stroke();
    };
    // the grid fades while diving in; once it is faint it is left out
    if (d < 0.8) {
      for (let la = -75; la <= 75; la += 15) line(Array.from({ length: 73 }, (_, i) => [la, i * 5 - 180] as [number, number]));
      for (let lo = -180; lo < 180; lo += 15) line(Array.from({ length: 37 }, (_, i) => [i * 5 - 90, lo] as [number, number]));
    }
    // the home: a pulsing point and a beam up into space
    if (home) {
      const x = cx + home[0] * r;
      const y = cy - home[1] * r;
      const pulse = 0.5 + 0.5 * Math.sin(ms / 140);
      const beam = ctx.createLinearGradient(x, y, x, y - h * 0.35);
      beam.addColorStop(0, `rgba(255,95,210,${0.8 * k})`);
      beam.addColorStop(1, "rgba(255,95,210,0)");
      ctx.fillStyle = beam;
      ctx.fillRect(x - 2 * dpr, y - h * 0.35, 4 * dpr, h * 0.35);
      ctx.fillStyle = `rgba(255,95,210,${0.9 * k})`;
      ctx.beginPath();
      ctx.arc(x, y, (4 + 3 * pulse) * dpr, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(255,95,210,${0.6 * k * (1 - pulse)})`;
      ctx.beginPath();
      ctx.arc(x, y, (8 + 16 * pulse) * dpr, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  render() {
    return html`<canvas @pointerdown=${this.skip} aria-hidden="true"></canvas>`;
  }

  static styles = css`
    :host {
      position: absolute;
      inset: 0;
      z-index: 30;
      cursor: pointer;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `;
}

if (!customElements.get("fp3d-flyin")) customElements.define("fp3d-flyin", Fp3dFlyin);
