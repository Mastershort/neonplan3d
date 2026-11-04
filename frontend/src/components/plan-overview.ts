// "All floor plans": a tile per plan with what is going on there – lights on, open windows and doors, the warmth,
// warnings with their room. A tap opens the plan. Plain tiles, no 3D work: fine on old wall tablets.
import { css, html, LitElement, nothing } from "lit";
import { alertText } from "../alerts.ts";
import type { PlanEntry } from "../api.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import type { Building } from "../model.ts";
import { planSummary } from "../plan-summary.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import { planIcon, planLabel } from "./plan-picker.ts";

export class Fp3dPlanOverview extends LitElement {
  static properties = {
    hass: { attribute: false },
    plans: { attribute: false },
    buildings: { attribute: false },
    current: { attribute: false },
  };

  declare hass: HomeAssistant;
  declare plans: PlanEntry[];
  /** The buildings of the plans (by id); a plan still loading shows its name only. */
  declare buildings: ReadonlyMap<string, Building>;
  declare current: string;

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private fire(name: string, detail: unknown = {}): void {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  protected render() {
    const unit = String(this.hass?.config?.unit_system?.temperature ?? "°C");
    return html`<div class="fp3d-po-veil" @click=${(e: Event) => e.target === e.currentTarget && this.fire("close")}>
      <section class="fp3d-po" role="dialog" aria-label=${this.t("plan_all")}>
        <header>
          <h2>${this.t("plan_all")}</h2>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${() => this.fire("close")}>✕</button>
        </header>
        <div class="fp3d-po-grid">
          ${this.plans.map((p) => {
            const b = this.buildings.get(p.id);
            const s = b && this.hass ? planSummary(this.hass, b) : null;
            return html`<button class="fp3d-po-tile ${s?.alerts.length ? "fp3d-po-alert" : ""} ${p.id === this.current ? "fp3d-po-current" : ""}" @click=${() => this.fire("plan-pick", { plan: p.id })}>
              <span class="fp3d-po-head"><span class="fp3d-po-icon">${planIcon(p)}</span><strong>${planLabel(this.hass, this.plans, p.id)}</strong></span>
              ${s
                ? html`<span class="fp3d-po-facts">
                      <span>${this.t(s.rooms === 1 ? "floor_rooms_one" : "floor_rooms", { n: s.rooms })}</span>
                      <span title=${this.t("plan_lights_on")}>💡 ${s.lightsOn}</span>
                      ${s.open ? html`<span title=${this.t("plan_open_now")}>${this.t("plan_open_n", { n: s.open })}</span>` : nothing}
                      ${s.playing ? html`<span>♪ ${s.playing}</span>` : nothing}
                      ${s.temp !== null ? html`<span>🌡 ${formatNumber(this.hass, s.temp, 1)} ${unit}</span>` : nothing}
                    </span>
                    ${s.alerts.slice(0, 3).map((a) => html`<span class="fp3d-po-warn">⚠ ${alertText(this.hass, b!, a)}</span>`)}`
                : html`<span class="fp3d-po-facts">…</span>`}
            </button>`;
          })}
        </div>
      </section>
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-po-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(0, 0, 0, 0.55);
      }
      .fp3d-po {
        width: min(920px, 100%);
        max-height: 90vh;
        overflow: auto;
        padding: 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
      }
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      h2 {
        margin: 0;
        font-family: var(--fp3d-title-font);
        font-size: 20px;
      }
      .fp3d-po-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 12px;
      }
      .fp3d-po-tile {
        display: grid;
        align-content: start;
        gap: 8px;
        min-height: 120px;
        padding: 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-po-tile:hover,
      .fp3d-po-current {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 18px -6px var(--fp3d-accent);
      }
      .fp3d-po-alert {
        border-color: var(--fp3d-alert, #ff4d6d);
        box-shadow: 0 0 20px -6px var(--fp3d-alert, #ff4d6d);
      }
      .fp3d-po-head {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-po-icon {
        font-size: 24px;
      }
      .fp3d-po-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .fp3d-po-warn {
        color: var(--fp3d-alert, #ff4d6d);
        font-size: 13px;
        font-weight: 600;
      }
    `,
  ];
}

if (!customElements.get("fp3d-plan-overview")) customElements.define("fp3d-plan-overview", Fp3dPlanOverview);
