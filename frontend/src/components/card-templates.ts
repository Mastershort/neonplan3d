// Card templates – shown in the editor's ⚙ Settings → Card templates. A dashboard card set up once here (with the
// card's own visual editor); a wall tablet only picks it (`template: kueche_fire`) and follows every change made here,
// as the plan reaches every open card. "Reload screens" lets the tablets load their page again (after an update).
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { listScreens, reloadScreen, reloadScreens, type OpenScreen } from "../api.ts";
import { FRONTEND_VERSION } from "../building-controller.ts";
import { editWorking, publishDraft, renameTemplate, setLive, templateId, workingConfig, type CardConfig } from "../card-config.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { loadCardEditor } from "../load-card-editor.ts";
import type { Building, CardTemplate } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

const CARD_TYPE = "custom:neonplan3d-card";
const PREVIEW_KEY = "neonplan3d.template_preview";
const SCREEN_KEY = "neonplan3d.template_screen";
/** Home Assistant's header above a dashboard: what "fill the screen" leaves of a screen's height. */
const HEADER = 56;

/** The screens the preview can stand for (a Fire HD 10 or 8, a Fire 7, a tablet upright, a phone). */
const SCREENS = {
  tablet: { w: 1280, h: 800, label: "card_template_screen_tablet" },
  small: { w: 1024, h: 600, label: "card_template_screen_small" },
  upright: { w: 800, h: 1280, label: "card_template_screen_upright" },
  phone: { w: 390, h: 844, label: "card_template_screen_phone" },
} as const satisfies Record<string, { w: number; h: number; label: I18nKey }>;
type ScreenSize = keyof typeof SCREENS;

function readScreen(): ScreenSize {
  try {
    const v = localStorage.getItem(SCREEN_KEY);
    return v && v in SCREENS ? (v as ScreenSize) : "tablet";
  } catch {
    return "tablet";
  }
}

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
    plan: { attribute: false },
    admin: { type: Boolean },
    edit: { attribute: false },
    _selected: { state: true },
    _ready: { state: true },
    _note: { state: true },
    _preview: { state: true },
    _reloading: { state: true },
    _scale: { state: true },
    _screen: { state: true },
    _open: { state: true },
    _big: { state: true },
    initial: { attribute: false },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null;
  /** The floor plan the templates belong to (null or "main": the first one). */
  declare plan: string | null;

  /** A template of another floor plan: its card names the plan too (its templates are looked up there). */
  private get planLine(): boolean {
    return !!this.plan && this.plan !== "main";
  }
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
  /** The preview is drawn at a wall tablet's size and shrunk to the column by this factor. */
  private declare _scale: number;
  /** Which screen the preview stands for. */
  private declare _screen: ScreenSize;
  /** The NeonPlan views open now (polled while this is open; null until the first answer or for an older backend). */
  private declare _open: OpenScreen[] | null;
  /** The preview over the dialog's whole width, the form below it. */
  private declare _big: boolean;
  private openTimer: ReturnType<typeof setInterval> | undefined;
  /** The template to open first (a link from the dashboard's card dialog names it). */
  declare initial: string | null;
  private stageObserver: ResizeObserver | null = null;
  private previewCard: PreviewCard | null = null;
  private previewKey = "";
  /** What the card editor shows now (as text): a template changed elsewhere (undo) is handed to it again. */
  private shown = "";
  private noteTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    super();
    this.plan = null;
    this.building = null;
    this.admin = false;
    this.edit = null;
    this._selected = null;
    this._ready = false;
    this._note = null;
    this._preview = readPreviewPref();
    this._reloading = false;
    this._scale = 0.5;
    this._screen = readScreen();
    this._open = null;
    this._big = false;
    this.initial = null;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.openTimer);
    this.openTimer = undefined;
    this.stageObserver?.disconnect();
    this.stageObserver = null;
  }

  /** The height the card has on the screen: its own, or the screen below the header with "fill". */
  private previewHeight(tpl: CardTemplate): number {
    const s = SCREENS[this._screen];
    const c = workingConfig(tpl);
    return c.fill ? s.h - HEADER : Math.min(s.h - HEADER, Math.max(150, c.height ?? 420));
  }

  private setScreen(size: ScreenSize): void {
    this._screen = size;
    this.previewKey = "";
    try {
      localStorage.setItem(SCREEN_KEY, size);
    } catch {
      // no storage: the tablet again next time
    }
  }

  /** The preview: the real dashboard card with the template's options, at a fixed height (the main bundle defines it). */
  private previewOf(tpl: CardTemplate) {
    if (!this._preview || !customElements.get("neonplan3d-card")) return nothing;
    if (!this.previewCard) {
      this.previewCard = document.createElement("neonplan3d-card") as PreviewCard;
      this.previewCard.preview = true;
    }
    // the preview shows what is being edited (with "send later" the changes not sent yet)
    const cfg = workingConfig(tpl);
    // the template's floor plan: the preview shows that plan, not the first one
    const plan = this.planLine ? { plan: this.plan! } : {};
    const key = JSON.stringify([cfg, plan]);
    if (key !== this.previewKey) {
      this.previewKey = key;
      try {
        this.previewCard.setConfig({ ...cfg, ...plan, type: CARD_TYPE, height: this.previewHeight(tpl), fill: false, fullscreen_button: false });
      } catch {
        // an option the card refuses: the form shows it, the preview keeps the last good one
      }
    }
    if (this.hass) this.previewCard.hass = this.hass;
    // laid out as on that screen (on a tablet the room panel beside the house, on a phone over it), then shrunk; only
    // to look at: a tap here must not switch the house's lights
    const h = this.previewHeight(tpl);
    const w = SCREENS[this._screen].w;
    return html`<div class="fp3d-tpl-stage" style="height:${Math.round(h * this._scale)}px;max-width:${Math.round(w * this._scale)}px">
        <div class="fp3d-tpl-screen" style="width:${w}px;height:${h}px;transform:scale(${this._scale})">${this.previewCard}</div>
      </div>
      <span class="fp3d-sub">${this.t("card_template_preview_look")}</span>`;
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

  /** The open screens, again every few seconds while the dialog is open (a tablet that reloads comes back). */
  private watchOpen(): void {
    if (this.openTimer || !this.hass || !this.admin) return;
    const fetch = () => {
      if (!this.hass) return;
      listScreens(this.hass).then(
        (list) => (this._open = list),
        () => {
          // an older backend: no overview
          clearInterval(this.openTimer);
          this._open = null;
        },
      );
    };
    fetch();
    this.openTimer = setInterval(fetch, 5000);
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
    const want = this._selected ?? this.initial;
    return list.find((x) => x.id === want) ?? list.find((x) => !!want && x.aliases?.includes(want)) ?? list[0];
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
    const id = templateId(name, this.templates.flatMap((x) => this.idsOf(x)));
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
      // this page sent it: the editor here stays (a view on this page would else reload the editor with it)
      (window as { fp3dReloadSent?: number }).fp3dReloadSent = Date.now();
      await reloadScreens(this.hass, ids);
      this.note(this.t("card_template_reloaded"));
      // the tablets reload within about five seconds: until then another tap would only reload them again
      setTimeout(() => (this._reloading = false), 8000);
    } catch {
      this._reloading = false;
      this.note(this.t("card_template_reload_failed"));
    }
  }

  /** Options set on a template from outside its form (the room it hangs in, the microphone). */
  private setOption(tpl: CardTemplate, patch: Partial<CardConfig>): void {
    this.editTemplates((list) => {
      const x = list.find((y) => y.id === tpl.id);
      if (x) editWorking(x, { ...workingConfig(x), ...patch });
    });
  }

  /**
   * The rooms a tablet can hang in: the plan's rooms with a Home Assistant area by their own names (floor by floor),
   * then the areas no room of the plan has. "here" switches by the area.
   */
  private whereOptions(current: string | undefined) {
    const areas = this.hass?.areas ?? {};
    const floors = (this.building?.floors ?? []).map((f) => ({ name: f.name, rooms: f.rooms.filter((r) => r.area_id && areas[r.area_id]) })).filter((f) => f.rooms.length);
    const inPlan = new Set(floors.flatMap((f) => f.rooms.map((r) => r.area_id!)));
    const others = Object.values(areas)
      .filter((a) => !inPlan.has(a.area_id))
      .sort((a, b) => a.name.localeCompare(b.name));
    return html`${floors.map(
        (f) => html`<optgroup label=${f.name}>
          ${f.rooms.map((r) => html`<option value=${r.area_id!} ?selected=${r.area_id === current}>${r.name}</option>`)}
        </optgroup>`,
      )}
      ${others.length
        ? html`<optgroup label=${this.t("card_template_where_other")}>
            ${others.map((a) => html`<option value=${a.area_id} ?selected=${a.area_id === current}>${a.name}</option>`)}
          </optgroup>`
        : nothing}`;
  }

  /** The ids a tablet may name this template by (its own and the earlier ones). */
  private idsOf(tpl: CardTemplate): string[] {
    return [tpl.id, ...(tpl.aliases ?? [])];
  }

  /** The card editor shows the open template; again when it changed from outside (undo, another browser). */
  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has("hass") || changed.has("admin")) this.watchOpen();
    const tpl = this.current;
    const el = this.renderRoot.querySelector("neonplan3d-card-editor") as (HTMLElement & { setConfig?: (c: CardConfig) => void }) | null;
    // the preview's column is measured (the stage itself is only as wide as the shrunk screen)
    const stage = this.renderRoot.querySelector(".fp3d-tpl-stage")?.parentElement;
    if (stage && !this.stageObserver) {
      this.stageObserver = new ResizeObserver(([entry]) => {
        const scale = Math.min(1, entry.contentRect.width / SCREENS[this._screen].w);
        if (scale > 0 && Math.abs(scale - this._scale) > 0.005) this._scale = scale;
      });
      this.stageObserver.observe(stage);
    } else if (!stage && this.stageObserver) {
      this.stageObserver.disconnect();
      this.stageObserver = null;
    }
    // another screen: the scale is measured again for its width
    if (changed.has("_screen") && this.stageObserver) {
      this.stageObserver.disconnect();
      this.stageObserver = null;
      this.requestUpdate();
    }
    if (!tpl || !el?.setConfig) return;
    const key = JSON.stringify([tpl.id, workingConfig(tpl)]);
    if (key === this.shown) return;
    this.shown = key;
    el.setConfig({ type: CARD_TYPE, ...workingConfig(tpl) });
  }

  private changed(tpl: CardTemplate, e: CustomEvent<{ config: CardConfig }>): void {
    // the dashboard's card dialog is not here: the change stays in NeonPlan's editor
    e.stopPropagation();
    const { type: _type, template: _template, ...config } = e.detail.config;
    this.shown = JSON.stringify([tpl.id, config]);
    this.editTemplates((list) => {
      const x = list.find((y) => y.id === tpl.id);
      if (x) editWorking(x, config);
    });
  }

  /** Live or "send later", and the buttons for changes not sent yet. */
  private renderMode(tpl: CardTemplate, admin: boolean) {
    const live = tpl.live !== false;
    const set = (fn: (x: CardTemplate) => void) =>
      this.editTemplates((list) => {
        const x = list.find((y) => y.id === tpl.id);
        if (x) fn(x);
      });
    return html`<div class="fp3d-tpl-mode">
      <span class="fp3d-sub">${this.t("card_template_mode")}</span>
      <div class="fp3d-seg">
        <button aria-pressed=${live} ?disabled=${!admin} @click=${() => set((x) => setLive(x, true))}>${this.t("card_template_live")}</button>
        <button aria-pressed=${!live} ?disabled=${!admin} @click=${() => set((x) => setLive(x, false))}>${this.t("card_template_manual")}</button>
      </div>
      ${!live && tpl.draft
        ? html`<span class="fp3d-tpl-warn"
            >${this.t("card_template_pending")}
            <button class="fp3d-btn fp3d-primary" ?disabled=${!admin} @click=${() => {
                set(publishDraft);
                this.shown = "";
                this.note(this.t("card_template_published"));
              }}>⇪ ${this.t("card_template_publish")}</button>
            <button class="fp3d-btn" ?disabled=${!admin} @click=${() => {
                set((x) => void delete x.draft);
                this.shown = "";
              }}>${this.t("card_template_discard")}</button></span
          >`
        : nothing}
    </div>`;
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
      ${admin ? this.renderOpen(tpl) : nothing}
    </div>`;
  }

  /** Where NeonPlan is open now: each device with what it shows, since when, its version, and a reload of its own. */
  private renderOpen(selected: CardTemplate | undefined) {
    const list = this._open;
    if (!list) return nothing;
    const lang = this.hass?.language ?? "de";
    const byId = (id: string | null | undefined) => (id ? this.templates.find((x) => x.id === id || x.aliases?.includes(id)) : undefined);
    const time = (s: number) => {
      const d = new Date(s * 1000);
      const today = d.toDateString() === new Date().toDateString();
      return today ? d.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" }) : d.toLocaleDateString(lang, { day: "numeric", month: "short" });
    };
    return html`<section class="fp3d-tpl-open">
      <b>${this.t("screens_title")} (${list.length})</b>
      <span class="fp3d-sub">${this.t("screens_hint")}</span>
      ${list.length
        ? html`<ul>
            ${list.map((s) => {
              const tpl = byId(s.template);
              const shows = s.kind === "panel" ? this.t("screens_panel") : tpl ? tpl.name : s.template ? s.template : this.t("screens_card_own");
              const old = !!s.version && s.version !== FRONTEND_VERSION;
              const mine = !!tpl && tpl === selected;
              return html`<li class=${mine ? "fp3d-tpl-mine" : ""}>
                <span class="fp3d-tpl-dev">${s.kind === "panel" ? "🖥" : "📱"} <b>${s.device || this.t("screens_unknown_device")}</b>${s.user ? html` · ${s.user}` : nothing}</span>
                <span>${shows}${s.screen && s.screen !== tpl?.name ? html` · „${s.screen}“` : nothing}</span>
                <span class="fp3d-sub">${this.t("screens_since", { time: time(s.since) })}${s.version ? ` · v${s.version}` : ""}</span>
                <span class="fp3d-tpl-old">${old ? this.t("screens_old") : ""}</span>
                ${s.reloadable
                  ? html`<button
                      class="fp3d-btn"
                      @click=${() => {
                        if (!this.hass) return;
                        (window as { fp3dReloadSent?: number }).fp3dReloadSent = 0;
                        void reloadScreen(this.hass, s.id).then(() => this.note(this.t("card_template_reloaded")));
                      }}
                    >
                      ⟳ ${this.t("screens_reload")}
                    </button>`
                  : html`<span></span>`}
              </li>`;
            })}
          </ul>`
        : html`<span class="fp3d-sub">${this.t("screens_none")}</span>`}
    </section>`;
  }

  private renderTemplate(tpl: CardTemplate, admin: boolean) {
    const yaml = `type: ${CARD_TYPE}\n${this.planLine ? `plan: ${this.plan}\n` : ""}template: ${tpl.id}`;
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
      ${this.renderMode(tpl, admin)}
      <label class="fp3d-field"
        >${this.t("card_template_where")}
        <select
          ?disabled=${!admin}
          @change=${(e: Event) => {
            const area = (e.target as HTMLSelectElement).value;
            this.editTemplates((list) => {
              const x = list.find((y) => y.id === tpl.id);
              if (!x) return;
              const { voice_area: _area, ...rest } = workingConfig(x);
              editWorking(x, area ? { ...rest, voice_area: area } : rest);
            });
          }}
        >
          <option value="" ?selected=${!workingConfig(tpl).voice_area}>${this.t("card_voice_area_none")}</option>
          ${this.whereOptions(workingConfig(tpl).voice_area)}
        </select>
        <span class="fp3d-sub">${this.t("card_template_where_hint")}</span>
        ${workingConfig(tpl).voice_area && !workingConfig(tpl).voice
          ? html`<span class="fp3d-tpl-warn"
              >${this.t("card_template_voice_off")}
              ${admin ? html`<button class="fp3d-btn" @click=${() => this.setOption(tpl, { voice: true })}>🎙 ${this.t("card_template_voice_on")}</button>` : nothing}</span
            >`
          : nothing}
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
      <div class="fp3d-tpl-split ${this._preview ? "" : "fp3d-tpl-nopreview"} ${this._preview && this._big ? "fp3d-tpl-big" : ""}">
        <div class="fp3d-tpl-preview">
          <div class="fp3d-tpl-row">
            <b>${this.t("card_template_preview")}</b>
            ${this._preview
              ? html`<select class="fp3d-tpl-size" aria-label=${this.t("card_template_screen")} @change=${(e: Event) => this.setScreen((e.target as HTMLSelectElement).value as ScreenSize)}>
                  ${(Object.keys(SCREENS) as ScreenSize[]).map((k) => html`<option value=${k} ?selected=${k === this._screen}>${this.t(SCREENS[k].label)}</option>`)}
                </select>`
              : nothing}
            ${this._preview
              ? html`<button class="fp3d-btn" aria-pressed=${this._big} @click=${() => (this._big = !this._big)}>${this._big ? "⤡" : "⤢"} ${this.t(this._big ? "card_template_preview_small" : "card_template_preview_big")}</button>`
              : nothing}
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
        grid-template-columns: minmax(0, 1.6fr) minmax(340px, 1fr);
        gap: 16px;
        align-items: start;
      }
      .fp3d-tpl-split.fp3d-tpl-nopreview {
        grid-template-columns: auto minmax(0, 1fr);
      }
      /* large: the preview over the whole width, the form below it */
      .fp3d-tpl-split.fp3d-tpl-big {
        grid-template-columns: 1fr;
      }
      .fp3d-tpl-big .fp3d-tpl-preview {
        position: static;
      }
      .fp3d-tpl-preview {
        position: sticky;
        top: 0;
        display: grid;
        gap: 8px;
        z-index: 1;
      }
      .fp3d-tpl-preview .fp3d-tpl-row {
        flex-wrap: nowrap;
      }
      .fp3d-tpl-stage {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-tpl-screen {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 0 0;
        pointer-events: none;
      }
      .fp3d-tpl-size {
        margin-left: auto;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: #0a1324;
        color: var(--fp3d-text);
        font: inherit;
        font-size: 13px;
      }
      /* the open list of a choice dark like the field, the floor headings readable (the browser draws them white) */
      select option,
      select optgroup {
        background: #0a1324;
        color: var(--fp3d-text);
      }
      select optgroup {
        color: var(--fp3d-accent);
        font-style: normal;
        font-weight: 600;
      }
      .fp3d-tpl-mode {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }
      .fp3d-tpl-warn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin-top: 4px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid rgba(255, 170, 60, 0.55);
        color: #ffcf8a;
        font-size: 13px;
      }
      .fp3d-tpl-screen neonplan3d-card {
        display: block;
        height: 100%;
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
      .fp3d-tpl-open {
        display: grid;
        gap: 6px;
        padding-top: 10px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-tpl-open ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 6px;
      }
      .fp3d-tpl-open li {
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) auto auto auto;
        gap: 10px;
        align-items: center;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        font-size: 13px;
      }
      .fp3d-tpl-open li.fp3d-tpl-mine {
        border-color: var(--fp3d-accent);
      }
      .fp3d-tpl-dev {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-tpl-old {
        color: #ffcf8a;
        font-size: 12px;
      }
      @media (max-width: 700px) {
        .fp3d-tpl-open li {
          grid-template-columns: 1fr auto;
        }
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
