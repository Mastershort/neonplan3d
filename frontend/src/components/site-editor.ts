// ⚙ → Floor plans → Property: where the other buildings stand beside the main one. A view from above with every
// building's outline; drag one to move it, turn it in steps, tick whether it stands on the property at all (a
// holiday flat far away does not). The main plan stays where it is: the others are placed around it.
import { css, html, LitElement, svg } from "lit";
import { fetchBuilding, MAIN_PLAN, updatePlan, type PlanEntry, type PlanSite } from "../api.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { normalizeBuilding, type Building, type Vec2 } from "../model.ts";
import { placePoint } from "../site.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import { planIcon, planLabel } from "./plan-picker.ts";

const GRID = 0.5;
const NOWHERE: PlanSite = { on: false, x: 0, y: 0, rot: 0 };

export class Fp3dSiteEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    plans: { attribute: false },
    _buildings: { state: true },
    _drag: { state: true },
    _sel: { state: true },
  };

  declare hass: HomeAssistant;
  declare plans: PlanEntry[];
  private declare _buildings: Map<string, Building>;
  /** A building being dragged: its plan and where it stands now (saved when let go). */
  private declare _drag: { plan: string; site: PlanSite; from: Vec2; start: PlanSite } | null;
  private declare _sel: string | null;
  private asked = new Set<string>();

  constructor() {
    super();
    this.plans = [];
    this._buildings = new Map();
    this._drag = null;
    this._sel = null;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected willUpdate(): void {
    for (const p of this.plans) {
      if (this.asked.has(p.id) || !this.hass) continue;
      this.asked.add(p.id);
      void fetchBuilding(this.hass, p.id).then(
        (res) => (this._buildings = new Map(this._buildings).set(p.id, normalizeBuilding(res.building))),
        () => undefined,
      );
    }
  }

  private siteOf(p: PlanEntry): PlanSite {
    if (this._drag?.plan === p.id) return this._drag.site;
    if (p.id === MAIN_PLAN) return { on: true, x: 0, y: 0, rot: 0 };
    return p.site ?? NOWHERE;
  }

  /** The outline of a plan where it stands: its rooms of every floor. */
  private shapes(p: PlanEntry): Vec2[][] {
    const b = this._buildings.get(p.id);
    if (!b) return [];
    const site = this.siteOf(p);
    return b.floors.flatMap((f) => [...f.rooms.map((r) => r.points), ...(p.id === MAIN_PLAN ? (f.outdoor ?? []).map((a) => a.points) : [])]).map((pts) => pts.map((q) => placePoint(q, site)));
  }

  private async save(plan: string, site: PlanSite): Promise<void> {
    await updatePlan(this.hass, plan, { site });
    this.dispatchEvent(new CustomEvent("plans-changed", { bubbles: true, composed: true }));
  }

  /** A newly placed building stands right of everything there is. */
  private firstPlace(p: PlanEntry): PlanSite {
    const xs = this.plans.filter((q) => q.id !== p.id && this.siteOf(q).on).flatMap((q) => this.shapes(q).flat().map((v) => v[0]));
    return { on: true, x: Math.ceil((xs.length ? Math.max(...xs) : 0) + 3), y: 0, rot: 0 };
  }

  private toPlan(e: PointerEvent): Vec2 | null {
    const svgEl = this.renderRoot.querySelector("svg");
    const m = svgEl?.getScreenCTM();
    if (!svgEl || !m) return null;
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
    return [pt.x, pt.y];
  }

  private onDown(e: PointerEvent, p: PlanEntry): void {
    if (p.id === MAIN_PLAN) return;
    const at = this.toPlan(e);
    if (!at) return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    const site = this.siteOf(p);
    this._sel = p.id;
    this._drag = { plan: p.id, site, from: at, start: site };
  }

  private onMove(e: PointerEvent): void {
    const d = this._drag;
    const at = d ? this.toPlan(e) : null;
    if (!d || !at) return;
    const snap = (v: number) => Math.round(v / GRID) * GRID;
    this._drag = { ...d, site: { ...d.start, x: snap(d.start.x + at[0] - d.from[0]), y: snap(d.start.y + at[1] - d.from[1]) } };
  }

  private onUp(): void {
    const d = this._drag;
    if (!d) return;
    this._drag = null;
    if (d.site.x !== d.start.x || d.site.y !== d.start.y) void this.save(d.plan, d.site);
  }

  protected render() {
    const shown = this.plans.filter((p) => this.siteOf(p).on);
    const pts = shown.flatMap((p) => this.shapes(p).flat());
    const xs = pts.map((v) => v[0]);
    const zs = pts.map((v) => v[1]);
    const pad = 4;
    const box = pts.length ? [Math.min(...xs) - pad, Math.min(...zs) - pad, Math.max(...xs) - Math.min(...xs) + 2 * pad, Math.max(...zs) - Math.min(...zs) + 2 * pad] : [-10, -10, 20, 20];
    return html`<p class="fp3d-hint">${this.t("site_intro")}</p>
      <svg viewBox=${box.join(" ")} @pointermove=${(e: PointerEvent) => this.onMove(e)} @pointerup=${() => this.onUp()} @pointercancel=${() => this.onUp()}>
        ${shown.map((p) => {
          const shapes = this.shapes(p);
          const all = shapes.flat();
          const cx = all.length ? all.reduce((a, v) => a + v[0], 0) / all.length : 0;
          const cz = all.length ? all.reduce((a, v) => a + v[1], 0) / all.length : 0;
          return svg`<g class=${`b ${p.id === MAIN_PLAN ? "main" : ""} ${p.id === this._sel ? "sel" : ""}`} @pointerdown=${(e: PointerEvent) => this.onDown(e, p)}>
            ${shapes.map((s) => svg`<polygon points=${s.map((v) => v.join(",")).join(" ")}></polygon>`)}
            <text x=${cx} y=${cz} font-size=${Math.max(0.6, box[2] / 45)}>${planIcon(p)} ${planLabel(this.hass, this.plans, p.id)}</text>
          </g>`;
        })}
      </svg>
      <ul class="fp3d-site-list">
        ${this.plans
          .filter((p) => p.id !== MAIN_PLAN)
          .map((p) => {
            const site = this.siteOf(p);
            return html`<li class=${p.id === this._sel ? "sel" : ""}>
              <label class="fp3d-site-on"
                ><input
                  type="checkbox"
                  .checked=${site.on}
                  @change=${(e: Event) => {
                    const on = (e.target as HTMLInputElement).checked;
                    this._sel = p.id;
                    void this.save(p.id, on ? (p.site ? { ...p.site, on: true } : this.firstPlace(p)) : { ...site, on: false });
                  }}
                />${planIcon(p)} ${planLabel(this.hass, this.plans, p.id)}</label
              >
              ${site.on
                ? html`<span class="fp3d-site-turn">
                    <button class="fp3d-btn" title=${this.t("site_turn_left")} @click=${() => void this.save(p.id, { ...site, rot: (site.rot + 345) % 360 })}>↺</button>
                    <span>${Math.round(site.rot)}°</span>
                    <button class="fp3d-btn" title=${this.t("site_turn_right")} @click=${() => void this.save(p.id, { ...site, rot: (site.rot + 15) % 360 })}>↻</button>
                    <button class="fp3d-btn" title=${this.t("site_turn_90")} @click=${() => void this.save(p.id, { ...site, rot: (site.rot + 90) % 360 })}>90°</button>
                  </span>`
                : html`<span class="fp3d-muted">${this.t("site_elsewhere")}</span>`}
            </li>`;
          })}
      </ul>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: grid;
        gap: 8px;
      }
      .fp3d-hint,
      .fp3d-muted {
        margin: 0;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      svg {
        width: 100%;
        height: 320px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.03);
        touch-action: none;
      }
      .b polygon {
        fill: rgba(127, 127, 127, 0.15);
        stroke: var(--fp3d-muted);
        stroke-width: 0.08;
      }
      .b:not(.main) {
        cursor: grab;
      }
      .b:not(.main) polygon {
        fill: rgba(0, 229, 255, 0.12);
        stroke: var(--fp3d-accent);
      }
      .b.sel polygon {
        fill: rgba(0, 229, 255, 0.3);
        stroke-width: 0.14;
      }
      text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        dominant-baseline: middle;
        pointer-events: none;
      }
      .fp3d-site-list {
        display: grid;
        gap: 6px;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .fp3d-site-list li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-site-list li.sel {
        border-color: var(--fp3d-accent);
      }
      .fp3d-site-on {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-site-turn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
    `,
  ];
}

if (!customElements.get("fp3d-site-editor")) customElements.define("fp3d-site-editor", Fp3dSiteEditor);
