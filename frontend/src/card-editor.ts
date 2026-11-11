// Visual editor of the dashboard card: Home Assistant shows it in the card dialog, so nobody has to
// write YAML. It follows Home Assistant's colours (the dialog is light or dark with the user's theme).

import { styleOptions } from "./style-select.ts";
import { setCustomStyles } from "./looks.ts";
import { css, html, LitElement, nothing, svg } from "lit";
import { fetchBuilding, listPlans, MAIN_PLAN, type PlanEntry } from "./api.ts";
import { labOn, UNRELEASED } from "./features.ts";
import { CARD_CONTROLS, CARD_OWN, cardTemplate, type CardConfig, type CardControl } from "./card-config.ts";
import { languageReady, loadLanguage, translate, type I18nKey } from "./i18n.ts";
import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/** Defaults of the card: options at their default are left out of the config. */
const DEFAULTS: Partial<CardConfig> = {
  height: 420,
  walls: "auto",
  explode: true,
  roof_fade: true,
  roof: true,
  plain: false,
  room_bar: false,
  room_bar_favorites: false,
  camera_wall: false,
  quality: "auto",
  stats: false,
  markers: "important",
  heatmap: "none",
  theme: "neon",
  energy: true,
  room_panel: true,
  fill: false,
  controls: false,
  fullscreen_button: false,
  room_names: true,
  floor_stack: "dim",
  alerts: true,
  alert_jump: false,
  director: false,
  voice: false,
  scenes: true,
  motion_trail: false,
  time_travel: false,
  household_card: true,
  weather: true,
  idle_return: 0,
  controls_hidden: false,
  controls_hide_after: 0,
  marker_names: false,
  central: true,
  pets: true,
  ghost: true,
  night: "off",
  idle_orbit: false,
  angle_lock: false,
  keep_view: false,
  controls_side: "left",
  walk: true,
  time_travel_range: "24h",
  time_travel_speed: 360,
};

type Choice = [value: string, label: I18nKey];

export class Floorplan3dCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _floors: { state: true },
    _templates: { state: true },
    _plans: { state: true },
    _mapFloor: { state: true },
    _showForm: { state: true },
    building: { attribute: false },
    embedded: { type: Boolean },
  };

  declare hass: HomeAssistant | undefined;
  /** Inside NeonPlan's editor (a card template): the plan being edited, and no template choice of its own. */
  declare building: Building | null;
  declare embedded: boolean;
  private declare _config: CardConfig;
  private declare _floors: { id: string; name: string; rooms: { id: string; name: string; points: [number, number][]; outdoor: boolean }[] }[];
  /** The floor plans (more than one: the card picks its plan first). */
  private declare _plans: PlanEntry[];
  /** The floor the room map shows. */
  private declare _mapFloor: string | null;
  /** The plan whose building was fetched last. */
  private fetchedPlan: string | null = null;
  private plansAsked = false;
  /** The plan's card templates, to pick one. */
  private declare _templates: { id: string; name: string }[];
  /** With a template: the form shown anyway, its options then win over the template's. */
  private declare _showForm: boolean;
  private loading = false;

  constructor() {
    super();
    this._config = { type: "custom:neonplan3d-card" };
    this._floors = [];
    this._templates = [];
    this._plans = [];
    this._mapFloor = null;
    this._showForm = false;
    this.building = null;
    this.embedded = false;
  }

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  protected willUpdate(): void {
    // a language beyond German and English: its texts are fetched first, then everything renders
    if (this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    // the floors of the plan, for the floor choice (in NeonPlan's editor: the plan being edited)
    if (this.building) this.takePlan(this.building);
    else if (this.hass && !this.loading && (!this._floors.length || this.fetchedPlan !== this.planOfCard)) {
      // the card's plan: its floors, rooms and templates (another plan chosen: fetched again)
      const plan = this.planOfCard;
      this.loading = true;
      this.fetchedPlan = plan;
      fetchBuilding(this.hass, plan).then(
        (res) => {
          this.loading = false;
          this.takePlan(res.building);
        },
        () => (this.loading = false),
      );
    }
    if (this.hass && !this.building && !this.plansAsked) {
      this.plansAsked = true;
      void listPlans(this.hass).then((list) => (this._plans = list.plans));
    }
  }

  private plan: Building | null = null;

  /** The plan whose rooms and templates the card offers (the property: the main plan's). */
  private get planOfCard(): string {
    const p = this._config?.plan;
    return p && p !== "site" ? p : MAIN_PLAN;
  }

  private takePlan(b: Building): void {
    if (b === this.plan) return;
    this.plan = b;
    this._floors = b.floors.map((f) => ({
      id: f.id,
      name: f.name,
      rooms: [
        ...f.rooms.map((r) => ({ id: r.id, name: r.name ?? r.id, points: r.points, outdoor: false })),
        ...(f.outdoor ?? []).filter((a) => a.area_id && a.name).map((a) => ({ id: a.id, name: a.name ?? a.id, points: a.points, outdoor: true })),
      ],
    }));
    this._templates = (b.card_templates ?? []).map((t) => ({ id: t.id, name: t.name }));
  }

  /** Which card template the card shows (made in NeonPlan's editor under Settings → Card templates). */
  private renderTemplate() {
    const id = this._config.template;
    // a card set up with an earlier id of a renamed template shows that template
    const tpl = cardTemplate(this.plan, id);
    const chosen = tpl?.id ?? id;
    // to NeonPlan's editor (a new tab: this dialog and its unsaved card stay), admins only
    const link = this.hass?.user?.is_admin
      ? html`<a class="more" href=${`/neonplan3d?settings=cards${this.planOfCard !== MAIN_PLAN ? `&plan=${encodeURIComponent(this.planOfCard)}` : ""}${tpl ? `&template=${encodeURIComponent(tpl.id)}` : ""}`} target="_blank" rel="noopener"
          >${this.t(tpl ? "card_template_open" : "card_template_make")} ↗</a
        >`
      : nothing;
    return html`<h3>${this.t("card_template")}</h3>
      <label class="field wide">
        <select @change=${(e: Event) => this.pickTemplate((e.target as HTMLSelectElement).value || undefined)}>
          <option value="" ?selected=${!id}>${this.t("card_template_none")}</option>
          ${this._templates.map((x) => html`<option value=${x.id} ?selected=${x.id === chosen}>${x.name}</option>`)}
          ${id && !tpl ? html`<option value=${id} selected>${id}</option>` : nothing}
        </select>
      </label>
      <p class="hint">${this.t(id ? "card_template_on" : "card_template_hint")}</p>
      ${id && this.ownOptions().length
        ? html`<div class="own">
            ${this.t("card_template_own", { list: this.ownOptions().join(", ") })}
            <button
              class="more"
              @click=${() => this.emit({ type: this._config.type, template: id, ...Object.fromEntries(CARD_OWN.filter((k) => this._config[k] !== undefined).map((k) => [k, this._config[k]])) })}
            >
              ${this.t("card_template_own_clear")}
            </button>
          </div>`
        : nothing}
      <div class="links">
        ${link}

      </div>`;
  }

  /** Options written on this card besides its template: they win over the template's. */
  private ownOptions(): string[] {
    return Object.keys(this._config).filter((k) => k !== "type" && k !== "template" && !(CARD_OWN as readonly string[]).includes(k));
  }

  /**
   * A template chosen: the card becomes the two lines (its earlier options would else keep winning over the template,
   * unseen behind the folded form); back to none, it keeps nothing of the template.
   */
  private pickTemplate(id: string | undefined): void {
    this._showForm = false;
    // the card's size stays: it belongs to the dashboard, not to the template
    const size = Object.fromEntries(CARD_OWN.filter((k) => this._config[k] !== undefined).map((k) => [k, this._config[k]]));
    this.emit(id ? { type: this._config.type, template: id, ...size } : { type: this._config.type, ...size });
  }

  private emit(next: CardConfig): void {
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
  }

  /** The options of the card's template (none inside NeonPlan's editor, where the form is the template). */
  private get templateOptions(): Partial<CardConfig> {
    return this.embedded ? {} : (cardTemplate(this.plan, this._config.template)?.config ?? {});
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private get value(): Required<Omit<CardConfig, "floor" | "room" | "flows" | "holograms">> & Pick<CardConfig, "floor" | "room" | "flows" | "holograms"> {
    // with a template the form shows what the card does: the template's options, the card's own on top
    return { ...(DEFAULTS as Required<CardConfig>), ...this.templateOptions, ...this._config };
  }

  /**
   * Change one option; options back at what they would be anyway disappear from the YAML – the default, or with a
   * template the template's value (so a card can also set an option back to its default against its template).
   */
  private set<K extends keyof CardConfig>(key: K, value: CardConfig[K] | undefined): void {
    const next: CardConfig = { ...this._config };
    const tpl = this.templateOptions;
    const base = key in tpl ? tpl[key] : DEFAULTS[key];
    if (value === undefined || value === "" || base === value) delete next[key];
    else next[key] = value;
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
  }

  private select<K extends keyof CardConfig>(key: K, label: I18nKey, choices: Choice[], current: string) {
    return html`<label class="field"
      >${this.t(label)}
      <select @change=${(e: Event) => this.set(key, (e.target as HTMLSelectElement).value as CardConfig[K])}>
        ${choices.map(([value, text]) => html`<option value=${value} ?selected=${value === current}>${this.t(text)}</option>`)}
      </select>
    </label>`;
  }

  /** A style choice (grouped); an empty choice removes the option. */
  private styleSelect(key: "theme" | "theme_evening" | "theme_night", label: I18nKey, current: string, opts: { auto?: boolean; house?: boolean; none?: boolean }) {
    setCustomStyles(this.building?.settings.styles_custom);
    return html`<label class="field"
      >${this.t(label)}
      <select @change=${(e: Event) => this.set(key, (e.target as HTMLSelectElement).value || undefined)}>
        ${styleOptions((k) => this.t(k), current, opts)}
      </select>
    </label>`;
  }

  private toggle(
    key: "explode" | "roof_fade" | "roof" | "camera_wall" | "energy" | "room_panel" | "stats" | "fullscreen_button" | "room_names" | "alerts" | "alert_jump" | "director" | "voice" | "scenes" | "idle_orbit" | "motion_trail" | "time_travel" | "household_card" | "weather" | "angle_lock" | "keep_view" | "walk" | "plain" | "room_bar" | "room_bar_favorites",
    label: I18nKey,
    hint?: I18nKey,
  ) {
    const on = this.value[key];
    return html`<label class="toggle">
      <input type="checkbox" .checked=${on} @change=${(e: Event) => this.set(key, (e.target as HTMLInputElement).checked)} />
      <span>${this.t(label)}${hint ? html`<small>${this.t(hint)}</small>` : nothing}</span>
    </label>`;
  }

  /** The room the card starts in (a display for one room): the rooms of the start floor, else of every floor. */
  private renderStartRoom() {
    const v = this.value;
    const floors = v.floor ? this._floors.filter((f) => f.id === v.floor) : this._floors;
    const rooms = floors.flatMap((f) => f.rooms.map((r) => ({ id: r.id, name: floors.length > 1 ? `${f.name} · ${r.name}` : r.name })));
    return html`<label class="field wide"
      >${this.t("card_room")}
      <select @change=${(e: Event) => this.set("room", (e.target as HTMLSelectElement).value || undefined)}>
        <option value="" ?selected=${!v.room}>${this.t("card_room_none")}</option>
        ${rooms.map((r) => html`<option value=${r.id} ?selected=${r.id === v.room}>${r.name}</option>`)}
        ${v.room && !rooms.some((r) => r.id === v.room) ? html`<option value=${v.room} selected>${v.room}</option>` : nothing}
      </select>
    </label>`;
  }

  /** Which floor plan the card shows (only with several; its templates and rooms are the ones offered). */
  private renderPlan() {
    if (this._plans.length < 2) return nothing;
    const cur = this._config.plan ?? MAIN_PLAN;
    const name = (p: PlanEntry) => p.name || (p.id === MAIN_PLAN ? this.t("plan_main") : p.id);
    return html`<label class="field wide"
      >${this.t("card_plan")}
      <select
        @change=${(e: Event) => {
          const v = (e.target as HTMLSelectElement).value;
          // another plan has other rooms and templates: those of the old one go
          const next: CardConfig = { ...this._config };
          delete next.rooms;
          delete next.room;
          delete next.floor;
          delete next.template;
          if (v === MAIN_PLAN) delete next.plan;
          else next.plan = v;
          this._config = next;
          this._floors = [];
          this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
        }}
      >
        ${this._plans.map((p) => html`<option value=${p.id} ?selected=${p.id === cur}>${p.icon || "🏠"} ${name(p)}</option>`)}
        ${this._plans.some((p) => p.site?.on) ? html`<option value="site" ?selected=${cur === "site"}>🏘 ${this.t("plan_site")}</option>` : nothing}
      </select>
    </label>`;
  }

  /**
   * Only these rooms: tap them on the little map of the floor (or tick them below). The card then shows just them –
   * a display for the kids' room, a holiday flat, a guest room – and stays there unless "may leave" is ticked.
   */
  private renderRooms() {
    const v = this.value;
    const chosen = new Set(this._config.rooms ?? []);
    const toggle = (id: string) => {
      const next = chosen.has(id) ? [...chosen].filter((x) => x !== id) : [...chosen, id];
      this.set("rooms", next.length ? next : undefined);
    };
    const floor = this._floors.find((f) => f.id === this._mapFloor) ?? this._floors.find((f) => f.rooms.some((r) => chosen.has(r.id))) ?? this._floors[0];
    const pts = floor?.rooms.flatMap((r) => r.points) ?? [];
    const xs = pts.map((p) => p[0]);
    const zs = pts.map((p) => p[1]);
    const pad = 0.6;
    const box = pts.length ? [Math.min(...xs) - pad, Math.min(...zs) - pad, Math.max(...xs) - Math.min(...xs) + 2 * pad, Math.max(...zs) - Math.min(...zs) + 2 * pad] : [0, 0, 1, 1];
    const centre = (p: [number, number][]) => [p.reduce((a, q) => a + q[0], 0) / p.length, p.reduce((a, q) => a + q[1], 0) / p.length];
    return html`<div class="field wide rooms">
      <span>${this.t("card_rooms")}</span>
      <small>${this.t("card_rooms_hint")}</small>
      ${this._floors.length > 1
        ? html`<div class="tabs">
            ${this._floors.map((f) => html`<button type="button" aria-pressed=${f.id === floor?.id} @click=${() => (this._mapFloor = f.id)}>${f.name}</button>`)}
          </div>`
        : nothing}
      ${floor
        ? html`<svg class="map" viewBox=${box.join(" ")} role="group" aria-label=${this.t("card_rooms")}>
            ${floor.rooms
              .filter((r) => r.points.length >= 3)
              .map((r) => {
                const [cx, cz] = centre(r.points);
                const on = chosen.has(r.id);
                return svg`<g class=${`room ${on ? "on" : ""} ${r.outdoor ? "out" : ""}`} @click=${() => toggle(r.id)}>
                  <polygon points=${r.points.map((p) => p.join(",")).join(" ")}></polygon>
                  <text x=${cx} y=${cz} font-size=${Math.max(box[2], box[3]) / 32}>${r.name}</text>
                </g>`;
              })}
          </svg>`
        : nothing}
      <div class="checks">
        ${this._floors.flatMap((f) =>
          f.rooms.map(
            (r) => html`<label class="check"
              ><input type="checkbox" .checked=${chosen.has(r.id)} @change=${() => toggle(r.id)} />${this._floors.length > 1 ? `${f.name} · ` : ""}${r.name}</label
            >`,
          ),
        )}
      </div>
      ${chosen.size
        ? html`<label class="toggle">
            <input type="checkbox" .checked=${v.rooms_lock === false} @change=${(e: Event) => this.set("rooms_lock", (e.target as HTMLInputElement).checked ? false : undefined)} />
            <span>${this.t("card_rooms_leave")}<small>${this.t("card_rooms_leave_hint")}</small></span>
          </label>`
        : nothing}
    </div>`;
  }

  /** Time travel: how far back it starts and how fast it plays. */
  private renderTimeTravel() {
    const v = this.value;
    const speeds: [number, string][] = [
      [60, this.t("tt_speed", { s: "1 min" })],
      [360, this.t("tt_speed", { s: "10 s" })],
      [900, this.t("tt_speed", { s: "4 s" })],
      [3600, this.t("tt_speed", { s: "1 s" })],
      ...(v.time_travel_range === "7d" ? ([[14400, this.t("card_tt_speed_day")]] as [number, string][]) : []),
    ];
    return html`<div class="grid">
      ${this.select("time_travel_range", "card_tt_range", [["24h", "card_tt_range_24h"], ["7d", "card_tt_range_7d"]], v.time_travel_range)}
      <label class="field"
        >${this.t("card_tt_speed")}
        <select @change=${(e: Event) => this.set("time_travel_speed", Number((e.target as HTMLSelectElement).value) as CardConfig["time_travel_speed"])}>
          ${speeds.map(([n, text]) => html`<option value=${n} ?selected=${n === v.time_travel_speed}>${text}</option>`)}
        </select>
      </label>
    </div>`;
  }

  /** Floor pictures: on by default without a start floor, off with one (but can be switched on). */
  private renderThumbsToggle() {
    const auto = !this._config.floor;
    const on = this._config.floor_thumbs ?? auto;
    return html`<label class="toggle">
      <input
        type="checkbox"
        .checked=${on}
        @change=${(e: Event) => {
          const checked = (e.target as HTMLInputElement).checked;
          const next: CardConfig = { ...this._config };
          if (checked === auto) delete next.floor_thumbs;
          else next.floor_thumbs = checked;
          this._config = next;
          this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
        }}
      />
      <span>${this.t("card_floor_thumbs")}<small>${this.t(this._config.floor ? "card_floor_thumbs_hint_start" : "card_floor_thumbs_hint")}</small></span>
    </label>`;
  }

  /** Switches in the card: on/off, and which of them. */
  private renderControls() {
    const c = this._config.controls;
    const on = !!c && (c === true || c.length > 0);
    const list: CardControl[] = c === true ? [...CARD_CONTROLS] : Array.isArray(c) ? c : [];
    const setList = (next: CardControl[]) => this.set("controls", next.length === CARD_CONTROLS.length ? true : next.length ? next : undefined);
    const v = this.value;
    const hideAfter = [0, 10, 30, 60, 120];
    return html`<label class="toggle">
        <input type="checkbox" .checked=${on} @change=${(e: Event) => this.set("controls", (e.target as HTMLInputElement).checked ? true : undefined)} />
        <span>${this.t("card_controls")}<small>${this.t("card_controls_hint")}</small></span>
      </label>
      <label class="toggle">
        <input type="checkbox" .checked=${v.central} @change=${(e: Event) => this.set("central", (e.target as HTMLInputElement).checked ? undefined : false)} />
        <span>${this.t("card_central")}<small>${this.t("card_central_hint")}</small></span>
      </label>
      ${!UNRELEASED.includes("fun_pets") || labOn()
        ? html`<label class="toggle">
            <input type="checkbox" .checked=${v.pets} @change=${(e: Event) => this.set("pets", (e.target as HTMLInputElement).checked ? undefined : false)} />
            <span>${this.t("card_pets")}<small>${this.t("card_pets_hint")}</small></span>
          </label>`
        : nothing}
      ${!UNRELEASED.includes("fun_halloween") || labOn()
        ? html`<label class="toggle">
            <input type="checkbox" .checked=${v.ghost} @change=${(e: Event) => this.set("ghost", (e.target as HTMLInputElement).checked ? undefined : false)} />
            <span>${this.t("card_ghost")}<small>${this.t("card_ghost_hint")}</small></span>
          </label>`
        : nothing}
      <label class="toggle">
        <input type="checkbox" .checked=${v.marker_names} @change=${(e: Event) => this.set("marker_names", (e.target as HTMLInputElement).checked ? true : undefined)} />
        <span>${this.t("card_marker_names")}<small>${this.t("card_marker_names_hint")}</small></span>
      </label>
      <label class="toggle">
        <input type="checkbox" .checked=${v.controls_hidden} @change=${(e: Event) => this.set("controls_hidden", (e.target as HTMLInputElement).checked ? true : undefined)} />
        <span>${this.t("card_controls_hidden")}<small>${this.t("card_controls_hidden_hint")}</small></span>
      </label>
      <label class="field"
        >${this.t("card_controls_hide_after")}
        <select @change=${(e: Event) => this.set("controls_hide_after", Number((e.target as HTMLSelectElement).value) || undefined)}>
          ${hideAfter.map((n) => html`<option value=${n} ?selected=${v.controls_hide_after === n}>${n ? this.t("card_hide_after_s", { n }) : this.t("card_idle_off")}</option>`)}
        </select>
      </label>
      ${on
        ? html`<div class="sub">
            ${CARD_CONTROLS.map(
              (x) => html`<label class="chip">
                <input
                  type="checkbox"
                  .checked=${list.includes(x)}
                  @change=${(e: Event) => setList((e.target as HTMLInputElement).checked ? CARD_CONTROLS.filter((y) => y === x || list.includes(y)) : list.filter((y) => y !== x))}
                />
                ${this.t(`card_control_${x}` as I18nKey)}
              </label>`,
            )}
          </div>`
        : nothing}`;
  }

  /** Kiosk: idle return, night dimming (sun or a time range) and the screensaver turn. */
  private renderKiosk() {
    const v = this.value;
    const night = v.night === "off" || v.night === "sun" ? v.night : "time";
    const minutes = [0, 1, 2, 5, 10];
    return html`<h3>${this.t("card_section_kiosk")}</h3>
      <div class="grid">
        <label class="field"
          >${this.t("card_idle_return")}
          <select @change=${(e: Event) => this.set("idle_return", Number((e.target as HTMLSelectElement).value) || undefined)}>
            ${minutes.map((m) => html`<option value=${m * 60} ?selected=${v.idle_return === m * 60}>${m ? this.t("card_idle_min", { n: m }) : this.t("card_idle_off")}</option>`)}
          </select>
        </label>
        <label class="field"
          >${this.t("card_night")}
          <select @change=${(e: Event) => this.set("night", { off: undefined, sun: "sun", time: "22:00-06:00" }[(e.target as HTMLSelectElement).value])}>
            <option value="off" ?selected=${night === "off"}>${this.t("card_night_off")}</option>
            <option value="sun" ?selected=${night === "sun"}>${this.t("card_night_sun")}</option>
            <option value="time" ?selected=${night === "time"}>${this.t("card_night_time")}</option>
          </select>
        </label>
        ${night === "time"
          ? html`<label class="field wide"
              >${this.t("card_night_range")}
              <input
                type="text"
                pattern="\\d{1,2}:\\d{2}-\\d{1,2}:\\d{2}"
                placeholder="22:00-06:00"
                .value=${v.night}
                @change=${(e: Event) => this.set("night", (e.target as HTMLInputElement).value.trim() || undefined)}
              />
            </label>`
          : nothing}
      </div>
      <p class="hint">${this.t("card_idle_hint")}</p>
      ${this.toggle("idle_orbit", "card_idle_orbit", "card_idle_orbit_hint")}
      <div class="grid">
        <label class="field wide"
          >${this.t("card_dashboard")}
          <input type="text" placeholder="/lovelace/home" .value=${v.dashboard ?? ""} @change=${(e: Event) => this.set("dashboard", (e.target as HTMLInputElement).value.trim() || undefined)} />
        </label>
        <label class="field wide"
          >${this.t("card_dashboard_label")}
          <input type="text" .value=${v.dashboard_label ?? ""} @change=${(e: Event) => this.set("dashboard_label", (e.target as HTMLInputElement).value.trim() || undefined)} />
        </label>
      </div>
      <p class="hint">${this.t("card_dashboard_hint")}</p>`;
  }

  /** Warnings, scenes and the Pro add-ons (motion trail, weather with its entity). */
  private renderFeatures() {
    const v = this.value;
    const weathers = Object.keys(this.hass?.states ?? {})
      .filter((id) => id.startsWith("weather."))
      .sort();
    return html`<h3>${this.t("card_section_features")}</h3>
      ${this.toggle("alerts", "card_alerts", "card_alerts_hint")} ${this.toggle("alert_jump", "card_alert_jump", "card_alert_jump_hint")}
      ${this.toggle("director", "card_director", "card_director_hint")}
      ${this.toggle("voice", "card_voice", "card_voice_hint")}
      <div class="grid">
        <label class="field wide"
          >${this.t("screen_name")}
          <input type="text" placeholder=${this.t("screen_name_placeholder")} .value=${v.screen ?? ""} @change=${(e: Event) => this.set("screen", (e.target as HTMLInputElement).value.trim() || undefined)} />
        </label>
      </div>
      <p class="hint">${this.t("screen_name_hint")}</p>
      <div class="grid">
        <label class="field wide"
          >${this.t("card_voice_area")}
          <select @change=${(e: Event) => this.set("voice_area", (e.target as HTMLSelectElement).value || undefined)}>
            <option value="" ?selected=${!v.voice_area}>${this.t("card_voice_area_none")}</option>
            ${Object.values(this.hass?.areas ?? {})
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((a) => html`<option value=${a.area_id} ?selected=${a.area_id === v.voice_area}>${a.name}</option>`)}
            ${v.voice_area && !this.hass?.areas?.[v.voice_area] ? html`<option value=${v.voice_area} selected>${v.voice_area}</option>` : nothing}
          </select></label
        >
      </div>
      <p class="hint">${this.t("card_voice_area_hint")}</p>
      ${this.toggle("scenes", "card_scenes", "card_scenes_hint")}
      ${this.toggle("motion_trail", "card_motion_trail", "card_motion_trail_hint")} ${this.toggle("camera_wall", "card_camera_wall", "card_camera_wall_hint")}
      ${this.toggle("time_travel", "card_time_travel", "card_time_travel_hint")}
      ${v.time_travel ? this.renderTimeTravel() : nothing}
      ${!UNRELEASED.includes("household") || labOn() ? this.toggle("household_card", "card_household", "card_household_hint") : nothing}
      ${this.toggle("weather", "card_weather", "card_weather_hint")}
      ${v.weather !== false
        ? html`<div class="grid">
            <label class="field wide"
              >${this.t("weather_entity")}
              <select @change=${(e: Event) => this.set("weather_entity", (e.target as HTMLSelectElement).value || undefined)}>
                <option value="" ?selected=${!v.weather_entity}>${this.t("card_weather_plan")}</option>
                ${weathers.map((id) => html`<option value=${id} ?selected=${id === v.weather_entity}>${String(this.hass?.states[id]?.attributes.friendly_name ?? id)}</option>`)}
              </select>
            </label>
          </div>`
        : nothing}
      <p class="hint">${this.t("card_pro_hint")}</p>`;
  }

  protected render() {
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    const v = this.value;
    const flows = v.flows === undefined ? "switch" : v.flows ? "on" : "off";
    const holos = v.holograms === undefined ? "switch" : v.holograms ? "on" : "off";
    if (!this.embedded && v.template) return html`${this.renderPlan()}${this.renderTemplate()}`;
    return html`
      ${this.embedded ? nothing : html`${this.renderPlan()}${this.renderTemplate()}`}
      <h3>${this.t("card_section_view")}</h3>
      <div class="grid">
        <label class="field wide"
          >${this.t("card_floor")}
          <select @change=${(e: Event) => this.set("floor", (e.target as HTMLSelectElement).value || undefined)}>
            <option value="" ?selected=${!v.floor}>${this.t("card_floor_house")}</option>
            ${this._floors.map((f) => html`<option value=${f.id} ?selected=${f.id === v.floor}>${f.name}</option>`)}
            ${v.floor && !this._floors.some((f) => f.id === v.floor) ? html`<option value=${v.floor} selected>${v.floor}</option>` : nothing}
          </select>
        </label>
        ${this.renderStartRoom()}
        ${this.renderRooms()}
        <label class="field"
          >${this.t("card_size")}
          <select @change=${(e: Event) => this.set("fill", (e.target as HTMLSelectElement).value === "fill")}>
            <option value="fixed" ?selected=${!v.fill}>${this.t("card_size_fixed")}</option>
            <option value="fill" ?selected=${v.fill}>${this.t("card_size_fill")}</option>
          </select>
        </label>
        <label class="field" ?hidden=${v.fill}
          >${this.t("card_height")}
          <input
            type="number"
            min="150"
            max="2000"
            step="10"
            .value=${String(v.height)}
            @change=${(e: Event) => {
              const h = Math.round(Number((e.target as HTMLInputElement).value));
              if (h > 100) this.set("height", h);
            }}
          />
        </label>
        ${this.styleSelect("theme", "style", v.theme ?? "neon", { auto: true, house: true })}
        ${v.theme && v.theme !== "house" && v.theme !== "auto"
          ? html`${this.styleSelect("theme_evening", "theme_evening", this._config.theme_evening ?? "", { none: true })}
              ${this.styleSelect("theme_night", "theme_night", this._config.theme_night ?? "", { none: true })}
              <p class="hint">${this.t("theme_schedule_hint")}</p>`
          : nothing}
        <label class="field"
          >${this.t("style_entity")}
          <input
            type="text"
            placeholder="input_select.neonplan_stil"
            .value=${this._config.style_entity ?? ""}
            @change=${(e: Event) => this.set("style_entity", (e.target as HTMLInputElement).value.trim() || undefined)}
          />
        </label>
        ${this.select("clock", "clock", [["off", "clock_off"], ["tl", "clock_tl"], ["tr", "clock_tr"], ["bl", "clock_bl"], ["br", "clock_br"]], v.clock ?? "off")}
        <label class="field"
          >${this.t("accent")}
          <input type="color" .value=${this._config.accent ?? "#37e0ff"} @input=${(e: Event) => this.set("accent", (e.target as HTMLInputElement).value)} />
          ${this._config.accent ? html`<button type="button" class="link" @click=${() => this.set("accent", undefined)}>${this.t("accent_reset")}</button>` : nothing}
        </label>
        ${this.select("walls", "card_walls", [["auto", "walls_auto"], ["cut", "walls_cut"]], v.walls)}
        ${this.select("quality", "quality", [["auto", "quality_auto"], ["low", "quality_low"], ["high", "quality_high"]], v.quality)}
        ${this.select("floor_stack", "card_floor_stack", [["dim", "floor_stack_dim"], ["stacked", "floor_stack_stacked"], ["single", "floor_stack_single"]], v.floor_stack)}
      </div>
      ${v.fill ? html`<p class="hint">${this.t("card_fill_hint")}</p>` : nothing}
      <p class="hint">${this.t("card_quality_hint")}</p>

      <h3>${this.t("card_section_show")}</h3>
      <div class="grid">
        ${this.select("markers", "markers", [["none", "markers_none"], ["room", "markers_room"], ["important", "markers_important"], ["all", "markers_all"]], v.markers)}
        ${this.select("marker_size", "pin_size", [["small", "pin_size_small"], ["normal", "pin_size_normal"], ["large", "pin_size_large"]], v.marker_size ?? "normal")}
        ${this.select("heatmap", "heatmap", [["none", "heat_off"], ["temperature", "heat_temperature"], ["humidity", "heat_humidity"], ["co2", "heat_co2"], ["values", "heat_values"]], v.heatmap)}
        <label class="field wide"
          >${this.t("flows")}
          <select @change=${(e: Event) => {
            const c = (e.target as HTMLSelectElement).value;
            this.set("flows", c === "switch" ? undefined : c === "on");
          }}>
            <option value="switch" ?selected=${flows === "switch"}>${this.t("card_flows_switch")}</option>
            <option value="on" ?selected=${flows === "on"}>${this.t("card_flows_on")}</option>
            <option value="off" ?selected=${flows === "off"}>${this.t("card_flows_off")}</option>
          </select>
        </label>
        <label class="field wide"
          >${this.t("holos")}
          <select @change=${(e: Event) => {
            const c = (e.target as HTMLSelectElement).value;
            this.set("holograms", c === "switch" ? undefined : c === "on");
          }}>
            <option value="switch" ?selected=${holos === "switch"}>${this.t("card_flows_switch")}</option>
            <option value="on" ?selected=${holos === "on"}>${this.t("card_flows_on")}</option>
            <option value="off" ?selected=${holos === "off"}>${this.t("card_flows_off")}</option>
          </select>
        </label>
      </div>
      ${this.renderControls()}
      ${this.toggle("angle_lock", "angle_lock", "angle_lock_hint")} ${this.toggle("keep_view", "keep_view", "keep_view_hint")}
      ${this.toggle("walk", "card_walk", "card_walk_hint")}
      <div class="grid">${this.select("controls_side", "controls_side", [["left", "controls_left"], ["right", "controls_right"]], v.controls_side)}</div>
      ${this.renderThumbsToggle()} ${this.toggle("room_names", "card_room_names")}
      ${this.toggle("energy", "card_energy")} ${this.toggle("room_panel", "card_room_panel", "card_room_panel_hint")}
      ${this.toggle("fullscreen_button", "card_fullscreen_button", "card_fullscreen_button_hint")}
      ${this.toggle("explode", "card_explode")} ${this.toggle("roof", "card_roof", "card_roof_hint")} ${this.toggle("roof_fade", "card_roof_fade", "card_roof_fade_hint")} ${this.toggle("plain", "card_plain", "plain_hint")}
      ${!UNRELEASED.includes("room_bar") || labOn() ? this.toggle("room_bar", "card_room_bar", "room_bar_hint") : nothing}
      ${this.value.room_bar && (!UNRELEASED.includes("room_bar") || labOn()) ? this.toggle("room_bar_favorites", "card_room_bar_favorites", "card_room_bar_favorites_hint") : nothing} ${this.toggle("stats", "card_stats", "card_stats_hint")}
      ${this.renderFeatures()}
      ${this.renderKiosk()}
    `;
  }

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color);
    }
    h3 {
      margin: 18px 0 8px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--secondary-text-color);
    }
    h3:first-child {
      margin-top: 0;
    }
    /* only these rooms: the little map of a floor to tap them on, and the same as a list */
    .rooms {
      display: grid;
      gap: 6px;
    }
    .rooms small {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .tabs button {
      padding: 4px 10px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 14px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .tabs button[aria-pressed="true"] {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
    .map {
      width: 100%;
      max-height: 260px;
      background: rgba(127, 127, 127, 0.08);
      border-radius: 8px;
    }
    .map .room {
      cursor: pointer;
    }
    .map polygon {
      fill: rgba(127, 127, 127, 0.18);
      stroke: var(--secondary-text-color);
      stroke-width: 0.05;
    }
    .map .out polygon {
      stroke-dasharray: 0.2 0.12;
    }
    .map .on polygon {
      fill: var(--primary-color);
      fill-opacity: 0.45;
      stroke: var(--primary-color);
    }
    .map text {
      fill: var(--primary-text-color);
      text-anchor: middle;
      dominant-baseline: middle;
      pointer-events: none;
    }
    .checks {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      font-size: 13px;
    }
    .check {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .own {
      margin: 8px 0 0;
      padding: 8px 10px;
      border-radius: 8px;
      border: 1px solid rgba(255, 170, 60, 0.6);
      font-size: 13px;
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    a.more {
      display: inline-block;
      text-decoration: none;
    }
    .more {
      margin: 8px 0 0;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 12px;
    }
    [hidden] {
      display: none;
    }
    .wide {
      grid-column: 1 / -1;
    }
    .field {
      display: grid;
      gap: 4px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    select,
    input[type="number"],
    input[type="text"] {
      box-sizing: border-box;
      width: 100%;
      min-height: 40px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
    }
    select:hover,
    input[type="number"]:hover,
    input[type="text"]:hover {
      border-color: var(--primary-color);
    }
    select:focus,
    input[type="number"]:focus,
    input[type="text"]:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-color) 30%, transparent);
    }
    /* the open list of a choice in the same colours as the field (else the browser's grey) */
    option,
    optgroup {
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
    }
    /* inside NeonPlan's editor (card templates): neon headings, switches as rows that light up when on */
    :host([embedded]) h3 {
      color: var(--primary-color);
    }
    :host([embedded]) .toggle {
      padding: 8px 10px;
      margin: 2px 0;
      border-radius: 10px;
      border: 1px solid transparent;
    }
    :host([embedded]) .toggle:hover {
      background: var(--fp3d-field-hover, rgba(127, 127, 127, 0.08));
    }
    :host([embedded]) .toggle:has(input:checked) {
      border-color: color-mix(in srgb, var(--primary-color) 45%, transparent);
      background: color-mix(in srgb, var(--primary-color) 8%, transparent);
    }
    .toggle {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
    }
    .toggle input {
      flex: none;
      width: 18px;
      height: 18px;
      margin: 1px 0 0;
      accent-color: var(--primary-color);
    }
    .sub {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      margin: -2px 0 6px 28px;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      cursor: pointer;
    }
    .chip input {
      width: 16px;
      height: 16px;
      margin: 0;
      accent-color: var(--primary-color);
    }
    .toggle small,
    .hint {
      display: block;
      margin: 2px 0 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    @media (max-width: 450px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;
}

if (!customElements.get("neonplan3d-card-editor")) customElements.define("neonplan3d-card-editor", Floorplan3dCardEditor);
