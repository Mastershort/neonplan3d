// The floor plan picker in the panel's header and the editor (shown once there are several plans): the plan shown,
// a list of all with their size, and for admins "new plan" and "manage plans".
import { css, html, LitElement, nothing } from "lit";
import { MAIN_PLAN, type PlanEntry } from "../api.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

/** The icon a plan is shown with (its own, else a house). */
export const planIcon = (p: Pick<PlanEntry, "icon"> | undefined) => p?.icon || "🏠";

/** The name a plan is shown with: its own, else the main plan's word (and "?" for one not known). */
export function planLabel(hass: HomeAssistant | undefined, plans: readonly PlanEntry[], id: string): string {
  const entry = plans.find((p) => p.id === id);
  return entry?.name || (id === MAIN_PLAN ? translate(hass, "plan_main") : "?");
}

export class Fp3dPlanPicker extends LitElement {
  static properties = {
    hass: { attribute: false },
    plans: { attribute: false },
    current: { attribute: false },
    admin: { type: Boolean },
    /** Warnings per plan (a water alarm in the garden house shows at its name). */
    alerts: { attribute: false },
    site: { type: Boolean },
    hasSite: { type: Boolean },
    _open: { state: true },
  };

  declare hass: HomeAssistant;
  declare plans: PlanEntry[];
  declare current: string;
  declare admin: boolean;
  declare alerts: ReadonlyMap<string, number> | null;
  /** The property view is shown; some plan stands on the property (the entry is offered). */
  declare site: boolean;
  declare hasSite: boolean;
  declare _open: boolean;

  constructor() {
    super();
    this.plans = [];
    this.current = MAIN_PLAN;
    this.admin = false;
    this.alerts = null;
    this.site = false;
    this.hasSite = false;
    this._open = false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private fire(name: string, detail: unknown = {}): void {
    this._open = false;
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  private readonly close = (e: Event) => {
    if (!e.composedPath().includes(this)) this._open = false;
  };

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("pointerdown", this.close);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("pointerdown", this.close);
  }

  protected render() {
    const cur = this.plans.find((p) => p.id === this.current);
    // warnings elsewhere show on the button, so they are seen without opening the list
    const elsewhere = [...(this.alerts ?? new Map())].filter(([id, n]) => id !== this.current && n > 0).reduce((s, [, n]) => s + n, 0);
    return html`<button
        class="fp3d-pp-btn"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        title=${this.t("plan_pick")}
        @click=${() => (this._open = !this._open)}
      >
        <span class="fp3d-pp-icon">${this.site ? "🏘" : planIcon(cur)}</span>
        <span class="fp3d-pp-name">${this.site ? this.t("plan_site") : planLabel(this.hass, this.plans, this.current)}</span>
        ${elsewhere ? html`<span class="fp3d-pp-alert" title=${this.t("plan_alerts_elsewhere", { n: elsewhere })}>${elsewhere}</span>` : nothing}
        <span class="fp3d-pp-caret">▾</span>
      </button>
      ${this._open
        ? html`<div class="fp3d-pp-menu" role="listbox">
            ${this.plans.map(
              (p) => html`<button role="option" aria-selected=${!this.site && p.id === this.current} @click=${() => this.fire("plan-pick", { plan: p.id })}>
                <span class="fp3d-pp-icon">${planIcon(p)}</span>
                <span class="fp3d-pp-name">${planLabel(this.hass, this.plans, p.id)}</span>
                ${this.alerts?.get(p.id) ? html`<span class="fp3d-pp-alert">${this.alerts.get(p.id)}</span>` : nothing}
                <span class="fp3d-pp-size">${this.t(p.rooms === 1 ? "floor_rooms_one" : "floor_rooms", { n: p.rooms })}</span>
              </button>`,
            )}
            ${this.hasSite
              ? html`<button role="option" aria-selected=${this.site} @click=${() => this.fire("plan-site")}>
                  <span class="fp3d-pp-icon">🏘</span><span class="fp3d-pp-name">${this.t("plan_site")}</span>
                </button>`
              : nothing}
            ${this.plans.length > 1
              ? html`<button class="fp3d-pp-extra" @click=${() => this.fire("plan-overview")}>▦ ${this.t("plan_all")}</button>`
              : nothing}
            ${this.admin
              ? html`<hr />
                  <button class="fp3d-pp-extra" @click=${() => this.fire("plan-new")}>＋ ${this.t("plan_new")}</button>
                  <button class="fp3d-pp-extra" @click=${() => this.fire("plan-manage")}>⚙ ${this.t("plan_manage")}</button>`
              : nothing}
          </div>`
        : nothing}`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        position: relative;
        display: inline-block;
        min-width: 0;
      }
      .fp3d-pp-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        max-width: 260px;
        min-height: 36px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-pp-btn:hover,
      .fp3d-pp-btn[aria-expanded="true"] {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pp-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-pp-caret {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-pp-alert {
        min-width: 18px;
        padding: 0 5px;
        border-radius: 9px;
        background: var(--fp3d-alert, #ff4d6d);
        color: #fff;
        font-size: 11.5px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
      }
      .fp3d-pp-menu {
        position: absolute;
        z-index: 20;
        top: calc(100% + 6px);
        left: 0;
        display: grid;
        min-width: 240px;
        max-width: min(340px, 90vw);
        max-height: 60vh;
        overflow: auto;
        padding: 6px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      }
      .fp3d-pp-menu button {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 40px;
        padding: 6px 10px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-pp-menu button:hover,
      .fp3d-pp-menu button[aria-selected="true"] {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-pp-menu .fp3d-pp-name {
        flex: 1;
      }
      .fp3d-pp-size {
        color: var(--fp3d-muted);
        font-size: 12px;
        white-space: nowrap;
      }
      .fp3d-pp-extra {
        color: var(--fp3d-muted) !important;
      }
      hr {
        width: 100%;
        margin: 4px 0;
        border: 0;
        border-top: 1px solid var(--fp3d-line);
      }
    `,
  ];
}

if (!customElements.get("fp3d-plan-picker")) customElements.define("fp3d-plan-picker", Fp3dPlanPicker);
