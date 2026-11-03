// Card templates – shown in the editor's ⚙ Settings → Card templates. A dashboard card set up once here (with the
// card's own visual editor); a wall tablet only picks it (`template: kueche_fire`) and follows every change made here,
// as the plan reaches every open card. "Reload screens" lets the tablets load their page again (after an update).
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { reloadScreens } from "../api.ts";
import { renameTemplate, templateId, type CardConfig } from "../card-config.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { loadCardEditor } from "../load-card-editor.ts";
import type { Building, CardTemplate } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

const CARD_TYPE = "custom:neonplan3d-card";
const PREVIEW_KEY = "neonplan3d.template_preview";

/** The dashboard card as the preview uses it. */
type PreviewCard = HTMLElement & { setConfig(c: CardConfig): void; hass?: HomeAssistant; preview?: boolean };

function readPreviewPref(): boolean {
  try {
    return localStorage.getItem(PREVIEW_KEY) !== "0";
  } catch {
    return true;
  }
}

export class Fp3dCardTemplates extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    admin: { type: Boolean },
    edit: { attribute: false },
    _selected: { state: true },
    _ready: { state: true },
    _note: { state: true },
    _preview: { state: true },
    _reloading: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null;
  declare admin: boolean;
  /** Changes the plan (the editor's own change, so it can be undone and is saved). */
  declare edit: ((fn: (b: Building) => void) => void) | null;
  /** The template open below the list. */
  private declare _selected: string | null;
  /** The card editor's bundle is loaded. */
  private declare _ready: boolean;
  private declare _note: string | null;
  /** The live preview of the card next to the form (one more 3D view while the dialog is open; can be switched off). */
  private declare _preview: boolean;
  /** "Reload" was sent a moment ago (the tablets take a few seconds): the buttons wait and say so. */
  private declare _reloading: boolean;
  private previewCard: PreviewCard | null = null;
  private previewKey = "";
  /** What the card editor shows now (as text): a template changed elsewhere (undo) is handed to it again. */
  private shown = "";
  private noteTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    super();
    this.building = null;
    this.admin = false;
    this.edit = null;
    this._selected = null;
    this._ready = false;
    this._note = null;
    this._preview = readPreviewPref();
    this._reloading = false;
  }

  /** The preview: the real dashboard card with the template's options, at a fixed height (the main bundle defines it). */
  private previewOf(tpl: CardTemplate) {
    if (!this._preview || !customElements.get("neonplan3d-card")) return nothing;
    if (!this.previewCard) {
      this.previewCard = document.createElement("neonplan3d-card") as PreviewCard;
      this.previewCard.preview = true;
    }
    const key = JSON.stringify(tpl.config);
    if (key !== this.previewKey) {
      this.previewKey = key;
      try {
        this.previewCard.setConfig({ ...tpl.config, type: CARD_TYPE, height: 380, fill: false, fullscreen_button: false });
      } catch {
        // an option the card refuses: the form shows it, the preview keeps the last good one
      }
    }
    if (this.hass) this.previewCard.hass = this.hass;
    return this.previewCard;
  }

  private togglePreview(): void {
    this._preview = !this._preview;
    if (!this._preview) this.previewCard = null;
    this.previewKey = "";
    try {
      localStorage.setItem(PREVIEW_KEY, this._preview ? "1" : "0");
    } catch {
      // no storage: on for the next time
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    void loadCardEditor().then(
      () => (this._ready = true),
      () => (this._note = this.t("card_templates_no_editor")),
    );
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private get templates(): CardTemplate[] {
    return this.building?.card_templates ?? [];
  }

  private get current(): CardTemplate | undefined {
    const list = this.templates;
    return list.find((x) => x.id === this._selected) ?? list[0];
  }

  private editTemplates(fn: (list: CardTemplate[]) => void): void {
    this.edit?.((b) => {
      const list = b.card_templates ?? [];
      fn(list);
      if (list.length) b.card_templates = list;
      else delete b.card_templates;
    });
  }

  private add(from?: CardTemplate): void {
    const name = from ? this.t("card_template_copy_name", { name: from.name }) : this.t("card_template_new_name");
    const id = templateId(name, this.templates.map((x) => x.id));
    this.editTemplates((list) => list.push({ id, name, config: from ? structuredClone(from.config) : {} }));
    this._selected = id;
  }

  private deleteTemplate(tpl: CardTemplate): void {
    if (!confirm(this.t("card_template_delete_ask", { name: tpl.name }))) return;
    this.editTemplates((list) => list.splice(list.findIndex((x) => x.id === tpl.id), 1));
    this._selected = null;
  }

  private note(text: string): void {
    this._note = text;
    clearTimeout(this.noteTimer);
    this.noteTimer = setTimeout(() => (this._note = null), 5000);
  }

  private async reload(ids: string[]): Promise<void> {
    if (!this.hass || this._reloading) return;
    this._reloading = true;
    try {
      await reloadScreens(this.hass, ids);
      this.note(this.t("card_template_reloaded"));
      // the tablets reload within about five seconds: until then another tap would only reload them again
      setTimeout(() => (this._reloading = false), 8000);
    } catch {
      this._reloading = false;
      this.note(this.t("card_template_reload_failed"));
    }
  }

  /** The ids a tablet may name this template by (its own and the earlier ones). */
  private idsOf(tpl: CardTemplate): string[] {
    return [tpl.id, ...(tpl.aliases ?? [])];
  }

  /** The card editor shows the open template; again when it changed from outside (undo, another browser). */
  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    const tpl = this.current;
    const el = this.renderRoot.querySelector("neonplan3d-card-editor") as (HTMLElement & { setConfig?: (c: CardConfig) => void }) | null;
    if (!tpl || !el?.setConfig) return;
    const key = JSON.stringify([tpl.id, tpl.config]);
    if (key === this.shown) return;
    this.shown = key;
    el.setConfig({ type: CARD_TYPE, ...tpl.config });
  }

  private changed(tpl: CardTemplate, e: CustomEvent<{ config: CardConfig }>): void {
    // the dashboard's card dialog is not here: the change stays in NeonPlan's editor
    e.stopPropagation();
    const { type: _type, template: _template, ...config } = e.detail.config;
    this.shown = JSON.stringify([tpl.id, config]);
    this.editTemplates((list) => {
      const x = list.find((y) => y.id === tpl.id);
      if (x) x.config = config;
    });
  }

  protected render() {
    const list = this.templates;
    const tpl = this.current;
    const admin = this.admin;
    return html`<div class="fp3d-tpl">
      <p class="fp3d-sub">${this.t("card_templates_intro")}</p>
      <div class="fp3d-tpl-list">
        ${list.map(
          (x) => html`<button class="fp3d-chip" aria-pressed=${x.id === tpl?.id} @click=${() => (this._selected = x.id)}>${x.name || x.id}</button>`,
        )}
        ${admin ? html`<button class="fp3d-btn" @click=${() => this.add()}>+ ${this.t("card_template_new")}</button>` : nothing}
      </div>
      ${!list.length ? html`<p class="fp3d-sub">${this.t("card_templates_empty")}</p>` : nothing}
      ${tpl ? this.renderTemplate(tpl, admin) : nothing}
      ${admin
        ? html`<div class="fp3d-tpl-reload">
            <button class="fp3d-btn" ?disabled=${this._reloading} @click=${() => void this.reload([])}>
              ⟳ ${this.t(this._reloading ? "card_template_reloading" : "card_template_reload_all")}
            </button>
            <span class="fp3d-sub">${this.t("card_template_reload_hint")}</span>
          </div>`
        : nothing}
      ${this._note ? html`<p class="fp3d-tpl-note" role="status">${this._note}</p>` : nothing}
    </div>`;
  }

  private renderTemplate(tpl: CardTemplate, admin: boolean) {
    const yaml = `type: ${CARD_TYPE}\ntemplate: ${tpl.id}`;
    return html`<div class="fp3d-tpl-card">
      <div class="fp3d-tpl-head">
        <label class="fp3d-field fp3d-tpl-name"
          >${this.t("card_template_name")}
          <input
            type="text"
            maxlength="80"
            .value=${tpl.name}
            ?disabled=${!admin}
            @change=${(e: Event) => {
              const name = (e.target as HTMLInputElement).value.trim();
              if (!name) return;
              let id = tpl.id;
              this.editTemplates((list) => (id = renameTemplate(list, tpl.id, name)?.id ?? id));
              this._selected = id;
              this.shown = "";
            }}
          />
        </label>
        ${admin
          ? html`<button class="fp3d-btn" @click=${() => this.add(tpl)}>${this.t("card_template_duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteTemplate(tpl)}>${this.t("delete")}</button>`
          : nothing}
      </div>
      <label class="fp3d-field"
        >${this.t("card_template_where")}
        <select
          ?disabled=${!admin}
          @change=${(e: Event) => {
            const area = (e.target as HTMLSelectElement).value;
            this.editTemplates((list) => {
              const x = list.find((y) => y.id === tpl.id);
              if (!x) return;
              if (area) x.config = { ...x.config, voice_area: area };
              else {
                const { voice_area: _area, ...rest } = x.config;
                x.config = rest;
              }
            });
          }}
        >
          <option value="" ?selected=${!tpl.config.voice_area}>${this.t("card_voice_area_none")}</option>
          ${Object.values(this.hass?.areas ?? {})
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((a) => html`<option value=${a.area_id} ?selected=${a.area_id === tpl.config.voice_area}>${a.name}</option>`)}
        </select>
        <span class="fp3d-sub">${this.t("card_template_where_hint")}</span>
      </label>
      <div class="fp3d-tpl-use">
        <span class="fp3d-sub">${this.t("card_template_use")}</span>
        <pre>${yaml}</pre>
        <div class="fp3d-tpl-row">
          <button class="fp3d-btn" @click=${() => void navigator.clipboard?.writeText(yaml).then(() => this.note(this.t("card_template_copied")), () => undefined)}>${this.t("card_template_copy")}</button>
          ${admin
            ? html`<button class="fp3d-btn" ?disabled=${this._reloading} @click=${() => void this.reload(this.idsOf(tpl))}>
                ⟳ ${this.t(this._reloading ? "card_template_reloading" : "card_template_reload")}
              </button>`
            : nothing}
        </div>
      </div>
      <div class="fp3d-tpl-split ${this._preview ? "" : "fp3d-tpl-nopreview"}">
        <div class="fp3d-tpl-preview">
          <div class="fp3d-tpl-row">
            <b>${this.t("card_template_preview")}</b>
            <button class="fp3d-btn" @click=${() => this.togglePreview()}>${this.t(this._preview ? "card_template_preview_off" : "card_template_preview_on")}</button>
          </div>
          ${this.previewOf(tpl)}
        </div>
        ${this._ready
          ? html`<neonplan3d-card-editor
              class="fp3d-tpl-form"
              embedded
              ?inert=${!admin}
              .hass=${this.hass}
              .building=${this.building}
              @config-changed=${(e: CustomEvent<{ config: CardConfig }>) => this.changed(tpl, e)}
            ></neonplan3d-card-editor>`
          : html`<p class="fp3d-sub">${this.t("loading")}</p>`}
      </div>
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        color-scheme: dark;
      }
      .fp3d-tpl {
        display: grid;
        gap: 12px;
      }
      .fp3d-tpl-list,
      .fp3d-tpl-row,
      .fp3d-tpl-reload {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
      }
      .fp3d-tpl-card {
        display: grid;
        gap: 12px;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
      }
      .fp3d-tpl-head {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: end;
      }
      .fp3d-tpl-name {
        flex: 1;
        min-width: 160px;
      }
      .fp3d-tpl-use {
        display: grid;
        gap: 6px;
      }
      pre {
        margin: 0;
        padding: 8px 10px;
        border-radius: 8px;
        background: rgba(4, 8, 18, 0.6);
        border: 1px solid var(--fp3d-line);
        font-size: 13px;
        white-space: pre-wrap;
        user-select: all;
      }
      /* the preview on the left (it stays in sight while the form scrolls), the form on the right */
      .fp3d-tpl-split {
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
        gap: 16px;
        align-items: start;
      }
      .fp3d-tpl-split.fp3d-tpl-nopreview {
        grid-template-columns: auto minmax(0, 1fr);
      }
      .fp3d-tpl-preview {
        position: sticky;
        top: 0;
        display: grid;
        gap: 8px;
        z-index: 1;
      }
      .fp3d-tpl-preview .fp3d-tpl-row {
        justify-content: space-between;
      }
      .fp3d-tpl-preview neonplan3d-card {
        display: block;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid var(--fp3d-line);
      }
      @media (max-width: 900px) {
        .fp3d-tpl-split,
        .fp3d-tpl-split.fp3d-tpl-nopreview {
          grid-template-columns: 1fr;
        }
        .fp3d-tpl-preview {
          position: static;
        }
      }
      /* the card editor follows Home Assistant's colours: here it takes NeonPlan's, fields dark and clear like the editor's */
      .fp3d-tpl-form {
        --primary-text-color: var(--fp3d-text);
        --secondary-text-color: var(--fp3d-soft);
        --divider-color: rgba(120, 190, 255, 0.35);
        --card-background-color: #0a1324;
        --primary-color: var(--fp3d-accent);
        --fp3d-field-hover: rgba(55, 224, 255, 0.08);
        color-scheme: dark;
      }
      .fp3d-tpl-note {
        margin: 0;
        color: var(--fp3d-accent);
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
      }
    `,
  ];
}

if (!customElements.get("fp3d-card-templates")) customElements.define("fp3d-card-templates", Fp3dCardTemplates);
