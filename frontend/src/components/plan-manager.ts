// ⚙ Settings → Floor plans in the editor: every plan with its size, a new one (empty, a copy, from a file), names,
// icons and the order, the bin (30 days) and the plan Live Presence works on. The main plan cannot be deleted.
import { css, html, LitElement, nothing } from "lit";
import { createPlan, deletePlan, MAIN_PLAN, orderPlans, restorePlan, setLocatePlan, updatePlan, type PlanEntry } from "../api.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { Building } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import { parseExport } from "../transfer.ts";
import type { HomeAssistant } from "../types.ts";
import { planIcon, planLabel } from "./plan-picker.ts";
import "./site-editor.ts";

/** Icons to choose from: buildings people have on a property, and places further away. */
export const PLAN_ICONS = ["🏠", "🏡", "🏘️", "🏢", "🏬", "🏨", "🏚️", "🛖", "🏕️", "🏖️", "⛰️", "🌳", "🚗", "🔧", "🐴", "🐔", "🏭", "⛪"];
const TRASH_DAYS = 30;

export class Fp3dPlanManager extends LitElement {
  static properties = {
    hass: { attribute: false },
    plans: { attribute: false },
    trash: { attribute: false },
    current: { attribute: false },
    locatePlan: { attribute: false },
    _name: { state: true },
    _from: { state: true },
    _busy: { state: true },
    _iconFor: { state: true },
    _error: { state: true },
  };

  declare hass: HomeAssistant;
  declare plans: PlanEntry[];
  declare trash: PlanEntry[];
  declare current: string;
  declare locatePlan: string;
  /** The new plan's name and where it comes from ("" empty, a plan id: a copy, "file": a file). */
  declare _name: string;
  declare _from: string;
  declare _busy: boolean;
  /** The plan whose icon row is open. */
  declare _iconFor: string | null;
  declare _error: string | null;

  constructor() {
    super();
    this.plans = [];
    this.trash = [];
    this.current = MAIN_PLAN;
    this.locatePlan = MAIN_PLAN;
    this._name = "";
    this._from = "";
    this._busy = false;
    this._iconFor = null;
    this._error = null;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private fire(name: string, detail: unknown = {}): void {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  /** A change went to the backend: the list comes again (the subscription brings it too, this is quicker). */
  private async run(task: () => Promise<unknown>): Promise<void> {
    this._busy = true;
    this._error = null;
    try {
      await task();
      this.fire("plans-changed");
    } catch (err) {
      this._error = String((err as { message?: string })?.message ?? err);
    } finally {
      this._busy = false;
    }
  }

  private async create(file?: File): Promise<void> {
    const name = this._name.trim() || this.t("plan_new_name", { n: this.plans.length + 1 });
    let building: Building | undefined;
    if (file) {
      try {
        building = parseExport(await file.text());
      } catch (err) {
        const code = (err as Error).message;
        this._error = code === "not_json" ? this.t("import_error_not_json") : code === "not_plan" ? this.t("import_error_not_plan") : code;
        return;
      }
    }
    const copyOf = this._from && this._from !== "file" ? this._from : undefined;
    await this.run(async () => {
      const id = await createPlan(this.hass, name, { copyOf, building });
      this._name = "";
      this._from = "";
      // the new plan opens at once: one draws or adjusts it next
      this.fire("plan-pick", { plan: id });
    });
  }

  private move(id: string, by: number): void {
    const ids = this.plans.map((p) => p.id);
    const i = ids.indexOf(id);
    const j = i + by;
    if (i < 0 || j < 0 || j >= ids.length) return;
    [ids[i], ids[j]] = [ids[j], ids[i]];
    void this.run(() => orderPlans(this.hass, ids));
  }

  private trashPlan(p: PlanEntry): void {
    if (!confirm(this.t("plan_delete_confirm", { name: planLabel(this.hass, this.plans, p.id), days: TRASH_DAYS }))) return;
    void this.run(async () => {
      await deletePlan(this.hass, p.id);
      if (p.id === this.current) this.fire("plan-pick", { plan: MAIN_PLAN });
    });
  }

  private daysLeft(p: PlanEntry): number {
    const gone = (p.deleted_at ?? Date.now() / 1000) + TRASH_DAYS * 86400;
    return Math.max(0, Math.ceil((gone - Date.now() / 1000) / 86400));
  }

  protected render() {
    const label = (id: string) => planLabel(this.hass, this.plans, id);
    return html`<div class="fp3d-pm">
      <p class="fp3d-hint">${this.t("plans_intro")}</p>
      <ul class="fp3d-pm-list">
        ${this.plans.map(
          (p, i) => html`<li class=${p.id === this.current ? "fp3d-pm-current" : ""}>
            <button class="fp3d-pm-icon" title=${this.t("plan_icon")} @click=${() => (this._iconFor = this._iconFor === p.id ? null : p.id)}>${planIcon(p)}</button>
            <input
              class="fp3d-pm-name"
              .value=${p.name ?? ""}
              placeholder=${p.id === MAIN_PLAN ? this.t("plan_main") : ""}
              maxlength="60"
              aria-label=${this.t("plan_name")}
              @change=${(e: Event) => {
                const name = (e.target as HTMLInputElement).value.trim();
                void this.run(() => updatePlan(this.hass, p.id, { name: name || (p.id === MAIN_PLAN ? null : label(p.id)) }));
              }}
            />
            <span class="fp3d-pm-size">${this.t("plan_size", { floors: p.floors, rooms: p.rooms })}${p.id === MAIN_PLAN ? "" : html` · <code title=${this.t("plan_id_hint")}>${p.id}</code>`}</span>
            <span class="fp3d-pm-actions">
              <button class="fp3d-btn" title=${this.t("plan_up")} ?disabled=${i === 0 || this._busy} @click=${() => this.move(p.id, -1)}>↑</button>
              <button class="fp3d-btn" title=${this.t("plan_down")} ?disabled=${i === this.plans.length - 1 || this._busy} @click=${() => this.move(p.id, 1)}>↓</button>
              ${p.id === this.current
                ? html`<span class="fp3d-pm-open">${this.t("plan_shown")}</span>`
                : html`<button class="fp3d-btn" @click=${() => this.fire("plan-pick", { plan: p.id })}>${this.t("plan_open")}</button>`}
              ${p.id === MAIN_PLAN
                ? nothing
                : html`<button class="fp3d-btn fp3d-pm-del" title=${this.t("plan_delete")} ?disabled=${this._busy} @click=${() => this.trashPlan(p)}>🗑</button>`}
            </span>
            ${this._iconFor === p.id
              ? html`<div class="fp3d-pm-icons">
                  ${PLAN_ICONS.map(
                    (icon) => html`<button
                      class="fp3d-btn"
                      aria-pressed=${planIcon(p) === icon}
                      @click=${() => {
                        this._iconFor = null;
                        void this.run(() => updatePlan(this.hass, p.id, { icon }));
                      }}
                    >
                      ${icon}
                    </button>`,
                  )}
                </div>`
              : nothing}
          </li>`,
        )}
      </ul>

      <h4>${this.t("plan_new")}</h4>
      <div class="fp3d-pm-new">
        <input
          .value=${this._name}
          maxlength="60"
          placeholder=${this.t("plan_new_placeholder")}
          aria-label=${this.t("plan_name")}
          @input=${(e: Event) => (this._name = (e.target as HTMLInputElement).value)}
        />
        <select aria-label=${this.t("plan_from")} @change=${(e: Event) => (this._from = (e.target as HTMLSelectElement).value)}>
          <option value="" ?selected=${this._from === ""}>${this.t("plan_from_empty")}</option>
          ${this.plans.map((p) => html`<option value=${p.id} ?selected=${this._from === p.id}>${this.t("plan_from_copy", { name: label(p.id) })}</option>`)}
          <option value="file" ?selected=${this._from === "file"}>${this.t("plan_from_file")}</option>
        </select>
        ${this._from === "file"
          ? html`<label class="fp3d-btn fp3d-primary"
              >${this.t("plan_create")}<input
                type="file"
                accept=".json,application/json"
                hidden
                ?disabled=${this._busy}
                @change=${(e: Event) => {
                  const input = e.target as HTMLInputElement;
                  const file = input.files?.[0];
                  input.value = "";
                  if (file) void this.create(file);
                }}
            /></label>`
          : html`<button class="fp3d-btn fp3d-primary" ?disabled=${this._busy} @click=${() => void this.create()}>${this.t("plan_create")}</button>`}
      </div>
      ${this._error ? html`<p class="fp3d-pm-error">${this._error}</p>` : nothing}

      ${this.plans.length > 1
        ? html`<h4>${this.t("plan_site")}</h4>
            <fp3d-site-editor .hass=${this.hass} .plans=${this.plans}></fp3d-site-editor>`
        : nothing}

      ${this.plans.length > 1
        ? html`<h4>${this.t("plan_locate")}</h4>
            <p class="fp3d-hint">${this.t("plan_locate_hint")}</p>
            <select
              aria-label=${this.t("plan_locate")}
              @change=${(e: Event) => void this.run(() => setLocatePlan(this.hass, (e.target as HTMLSelectElement).value))}
            >
              ${this.plans.map((p) => html`<option value=${p.id} ?selected=${p.id === this.locatePlan}>${planIcon(p)} ${label(p.id)}</option>`)}
            </select>`
        : nothing}

      ${this.trash.length
        ? html`<h4>${this.t("plan_trash")}</h4>
            <ul class="fp3d-pm-list fp3d-pm-trash">
              ${this.trash.map(
                (p) => html`<li>
                  <span class="fp3d-pm-icon">${planIcon(p)}</span>
                  <span class="fp3d-pm-name">${p.name ?? "?"}</span>
                  <span class="fp3d-pm-size">${this.t("plan_trash_days", { n: this.daysLeft(p) })}</span>
                  <span class="fp3d-pm-actions"
                    ><button class="fp3d-btn" ?disabled=${this._busy} @click=${() => void this.run(() => restorePlan(this.hass, p.id))}>${this.t("plan_restore")}</button></span
                  >
                </li>`,
              )}
            </ul>`
        : nothing}
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-pm {
        display: grid;
        gap: 10px;
      }
      input,
      select {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        min-width: 0;
      }
      .fp3d-hint {
        margin: 0;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      h4 {
        margin: 8px 0 0;
        font-size: 14px;
      }
      .fp3d-pm-list {
        display: grid;
        gap: 6px;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .fp3d-pm-list li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-pm-current {
        border-color: var(--fp3d-accent) !important;
      }
      .fp3d-pm-icon {
        width: 36px;
        height: 36px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        font-size: 20px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pm-name {
        flex: 1;
        min-width: 120px;
      }
      .fp3d-pm-size {
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-pm-actions {
        display: flex;
        gap: 4px;
        margin-left: auto;
      }
      .fp3d-pm-actions button {
        min-width: 34px;
        min-height: 32px;
      }
      .fp3d-pm-open {
        align-self: center;
        padding: 0 6px;
        color: var(--fp3d-accent);
        font-size: 12.5px;
      }
      .fp3d-pm-icons {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        width: 100%;
      }
      .fp3d-pm-icons button {
        width: 38px;
        height: 38px;
        font-size: 20px;
      }
      .fp3d-pm-icons button[aria-pressed="true"] {
        outline: 2px solid var(--fp3d-accent);
      }
      .fp3d-pm-new {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .fp3d-pm-new input {
        flex: 1;
        min-width: 160px;
      }
      .fp3d-pm-error {
        margin: 0;
        color: var(--fp3d-alert, #ff4d6d);
      }
    `,
  ];
}

if (!customElements.get("fp3d-plan-manager")) customElements.define("fp3d-plan-manager", Fp3dPlanManager);
