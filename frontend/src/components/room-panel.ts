// Room panel: controls for the devices of the room's area (lights, covers, heating, media, switches,
// scenes and scripts). Shown next to the 3D view when a room is selected.

import { css, html, LitElement, nothing, type TemplateResult } from "lit";
import { areaEntities, entityName, groupByDevice, isUnavailable, kindOf, roomClimateSensors, roomClimateValue, roomPanelEntities, fromCelsius, tempUnit, type DeviceKind } from "../devices.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { hasFeature } from "../features.ts";
import { iconPath } from "../icons.ts";
import { openMoreInfo, stateText } from "../markers.ts";
import type { Floor, Room } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

const COVER_SET_POSITION = 4;
const CAMERA_REFRESH_MS = 3000;
const COVER_STOP = 8;

/** Colour presets offered for colour lights (warm white first). */
const SWATCHES: [number, number, number][] = [
  [255, 181, 71],
  [255, 236, 210],
  [55, 224, 255],
  [91, 124, 255],
  [255, 95, 210],
  [120, 255, 150],
];

const icon = (kind: DeviceKind) =>
  html`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${iconPath(kind)} />
  </svg>`;

/** Filled transport icons (the Unicode symbols turn into emoji on some systems). */
const TRANSPORT = {
  previous: "M6 6h2v12H6zM20 6v12l-10-6z",
  play: "M8 5v14l11-7z",
  pause: "M7 5h4v14H7zM13 5h4v14h-4z",
  next: "M16 6h2v12h-2zM4 6v12l10-6z",
};
const transport = (d: string) =>
  html`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${d} /></svg>`;

export class Fp3dRoomPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    room: { attribute: false },
    floor: { attribute: false },
    confirmEntities: { attribute: false },
    _showAll: { state: true },
    _tick: { state: true },
  };

  declare hass: HomeAssistant;
  declare room: Room | null;
  /** Floor of the room: the panel shows what the plan shows in the room. */
  declare floor: Floor | null;
  /** Entities that ask before they are switched. */
  declare confirmEntities: Set<string> | null;
  /** Show the other devices of the area as well (their main entities). */
  private declare _showAll: boolean;
  /** Bumped every few seconds while the panel is open, so camera snapshots refresh. */
  private declare _tick: number;
  private cameraTimer: ReturnType<typeof setInterval> | undefined;
  private memo: { entities: HomeAssistant["entities"]; floor: Floor | null; room: Room; shown: string[]; more: string[] } | null = null;
  private hasCameras = false;

  constructor() {
    super();
    this.room = null;
    this.floor = null;
    this._showAll = false;
    this._tick = 0;
  }

  connectedCallback(): void {
    super.connectedCallback();
    // snapshots every few seconds are much lighter for a wall tablet than a permanent stream
    this.cameraTimer = setInterval(() => {
      if (this.hasCameras && !document.hidden) this._tick++;
    }, CAMERA_REFRESH_MS);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.cameraTimer);
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private call(domain: string, service: string, data: Record<string, unknown>): void {
    void this.hass.callService(domain, service, data);
  }

  private get areaName(): string | undefined {
    return this.room?.area_id ? this.hass.areas?.[this.room.area_id]?.name : undefined;
  }

  private name(id: string): string {
    return entityName(this.hass, id, this.areaName);
  }

  private nameButton(id: string) {
    return html`<button class="fp3d-rp-name" title=${this.t("details")} @click=${() => openMoreInfo(this, id)}>${this.name(id)}</button>`;
  }

  /** Ask first for devices marked so (a blind that must not move by accident). */
  private askFor(id: string): boolean {
    return !this.confirmEntities?.has(id) || confirm(this.t("confirm_switch", { name: this.name(id) }));
  }

  private toggle(st: HassEntity, on: boolean, onToggle: () => void) {
    const guarded = () => {
      if (this.confirmEntities?.has(st.entity_id) && !confirm(this.t("confirm_switch", { name: this.name(st.entity_id) }))) return;
      onToggle();
    };
    return html`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${on ? "true" : "false"}
      aria-label=${this.name(st.entity_id)}
      ?disabled=${isUnavailable(st)}
      @click=${guarded}
    ></button>`;
  }

  protected render() {
    const room = this.room;
    if (!room || !this.hass) return nothing;
    const all = areaEntities(this.hass, room.area_id);
    // what the plan shows in the room; the rest of the area on request (each device's main entity);
    // worked out once per registry, room and floor (every state change renders the panel again)
    const m = this.memo;
    const { shown, more } =
      m && m.entities === this.hass.entities && m.floor === this.floor && m.room === room
        ? m
        : (this.memo = { entities: this.hass.entities, floor: this.floor, room, ...(this.floor ? roomPanelEntities(this.hass, this.floor, room) : { shown: all, more: [] }) });
    const extra = groupByDevice(this.hass, more).map((g) => g.primary);
    const hiddenCount = extra.length;
    const ids = this._showAll ? [...shown, ...extra] : shown;
    const by = (kinds: DeviceKind[]) => ids.filter((id) => kinds.includes(kindOf(id)!)).map((id) => this.hass.states[id]);
    const lights = by(["light"]);
    const covers = by(["cover"]);
    const climates = by(["climate"]);
    const media = by(["media"]);
    const switches = by(["switch", "fan", "lock"]);
    const sensors = by(["sensor", "binary"]);
    const cameras = by(["camera"]);
    this.hasCameras = cameras.length > 0;
    const scenes = by(["scene", "script"]);
    const facts = this.facts(climates);
    const lightsOn = lights.filter((l) => l.state === "on");
    return html`<section class="fp3d-rp" aria-label=${room.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${room.name}</h2>
          ${facts.length ? html`<p class="fp3d-rp-facts">${facts.join(" · ")}</p>` : nothing}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${() => this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${!room.area_id
          ? html`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`
          : !ids.length
            ? html`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`
            : nothing}
        ${lights.length
          ? this.section(
              "panel_lights",
              lights.map((st) => this.lightRow(st)),
              html`${lightsOn.length < lights.length
                ? html`<button class="fp3d-btn fp3d-rp-small" @click=${() => this.call("light", "turn_on", { entity_id: lights.filter((l) => !isUnavailable(l)).map((l) => l.entity_id) })}>
                    ${this.t("panel_all_on")}
                  </button>`
                : nothing}${lightsOn.length
                ? html`<button class="fp3d-btn fp3d-rp-small" @click=${() => this.call("light", "turn_off", { entity_id: lightsOn.map((l) => l.entity_id) })}>
                    ${this.t("panel_all_off")}
                  </button>`
                : nothing}`,
            )
          : nothing}
        ${covers.length
          ? this.section(
              "panel_covers",
              covers.map((st) => this.coverRow(st)),
              covers.length > 1
                ? html`<button class="fp3d-btn fp3d-rp-small" @click=${() => this.call("cover", "open_cover", { entity_id: covers.filter((c) => !isUnavailable(c)).map((c) => c.entity_id) })}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${() => this.call("cover", "close_cover", { entity_id: covers.filter((c) => !isUnavailable(c)).map((c) => c.entity_id) })}>
                      ${this.t("panel_all_close")}
                    </button>`
                : nothing,
            )
          : nothing}
        ${climates.length ? this.section("panel_climate", climates.map((st) => this.climateRow(st))) : nothing}
        ${media.length ? this.section("panel_media", media.map((st) => this.mediaRow(st))) : nothing}
        ${switches.length ? this.section("panel_switches", switches.map((st) => this.switchRow(st))) : nothing}
        ${cameras.length ? this.section("panel_cameras", cameras.map((st) => this.cameraTile(st))) : nothing}
        ${sensors.length ? this.section("panel_sensors", sensors.map((st) => this.sensorRow(st))) : nothing}
        ${scenes.length
          ? this.section(
              "panel_scenes",
              [
                html`<div class="fp3d-rp-scenes">
                  ${scenes.map(
                    (st) => html`<button
                      class="fp3d-btn"
                      ?disabled=${isUnavailable(st)}
                      @click=${() => this.call(kindOf(st.entity_id) === "scene" ? "scene" : "script", "turn_on", { entity_id: st.entity_id })}
                    >
                      ${this.name(st.entity_id)}
                    </button>`,
                  )}
                </div>`,
              ],
            )
          : nothing}
        ${hiddenCount
          ? html`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${() => (this._showAll = !this._showAll)}>
              ${this._showAll ? this.t("panel_less") : this.t("panel_more", { n: hiddenCount })}
            </button>`
          : nothing}
      </div>
    </section>`;
  }

  /** Header facts: the room's temperature and humidity from its climate sensors (chosen or automatic). */
  private facts(climates: HassEntity[]): string[] {
    const out: string[] = [];
    const room = this.room!;
    const value = (key: "temperature" | "humidity", fallbackUnit: string) => {
      const v = roomClimateValue(this.hass, this.floor, room, key);
      if (v === null) return null;
      if (key === "temperature") return `${formatNumber(this.hass, fromCelsius(this.hass, v), 1)} ${tempUnit(this.hass)}`;
      const first = roomClimateSensors(this.hass, this.floor, room, key)[0];
      const unit = (this.hass.states[first]?.attributes.unit_of_measurement as string | undefined) ?? fallbackUnit;
      return `${formatNumber(this.hass, v, 1)} ${unit}`;
    };
    const climateTemp = climates.find((c) => typeof c.attributes.current_temperature === "number");
    const temp = value("temperature", "°C");
    if (temp) out.push(temp);
    else if (climateTemp && room.climate?.temperature !== "none") out.push(`${formatNumber(this.hass, climateTemp.attributes.current_temperature as number, 1)} ${tempUnit(this.hass)}`);
    const hum = value("humidity", "%");
    if (hum) out.push(hum);
    return out;
  }

  private section(title: I18nKey, rows: TemplateResult[], action: TemplateResult | typeof nothing = nothing) {
    return html`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(title)}</h3>${action}</div>
      ${rows}
    </div>`;
  }

  private lightRow(st: HassEntity) {
    const a = st.attributes;
    const on = st.state === "on";
    const modes = (a.supported_color_modes as string[] | undefined) ?? [];
    const dimmable = modes.some((m) => m !== "onoff");
    const temp = modes.includes("color_temp");
    const color = modes.some((m) => ["hs", "rgb", "rgbw", "rgbww", "xy"].includes(m));
    const pct = typeof a.brightness === "number" ? Math.round((a.brightness / 255) * 100) : 100;
    const kMin = (a.min_color_temp_kelvin as number | undefined) ?? 2200;
    const kMax = (a.max_color_temp_kelvin as number | undefined) ?? 6500;
    const id = st.entity_id;
    return html`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${on ? "fp3d-rp-on" : ""}">${icon("light")}</span>
      ${this.nameButton(id)}
      <span class="fp3d-rp-state">${this.stateOf(st)}</span>
      ${this.toggle(st, on, () => this.call("light", "toggle", { entity_id: id }))}
      ${on && dimmable
        ? html`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(pct)}
              @change=${(e: Event) => this.call("light", "turn_on", { entity_id: id, brightness_pct: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : nothing}
      ${on && temp
        ? html`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${kMin}
              max=${kMax}
              step="50"
              .value=${String((a.color_temp_kelvin as number | undefined) ?? kMin)}
              @change=${(e: Event) => this.call("light", "turn_on", { entity_id: id, color_temp_kelvin: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : nothing}
      ${on && color
        ? html`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${SWATCHES.map(
              (c) => html`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${c.join(",")})"
                aria-label="rgb(${c.join(", ")})"
                @click=${() => this.call("light", "turn_on", { entity_id: id, rgb_color: c })}
              ></button>`,
            )}
          </div>`
        : nothing}
    </div>`;
  }

  private coverRow(st: HassEntity) {
    const a = st.attributes;
    const features = (a.supported_features as number | undefined) ?? 0;
    const id = st.entity_id;
    const na = isUnavailable(st);
    return html`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${icon("cover")}</span>
      ${this.nameButton(id)}
      <span class="fp3d-rp-state">${this.stateOf(st)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${na} @click=${() => this.askFor(id) && this.call("cover", "open_cover", { entity_id: id })}>${this.t("cover_open")}</button>
        ${features & COVER_STOP
          ? html`<button class="fp3d-btn fp3d-rp-small" ?disabled=${na} @click=${() => this.call("cover", "stop_cover", { entity_id: id })}>${this.t("cover_stop")}</button>`
          : nothing}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${na} @click=${() => this.askFor(id) && this.call("cover", "close_cover", { entity_id: id })}>${this.t("cover_close")}</button>
      </div>
      ${features & COVER_SET_POSITION && typeof a.current_position === "number"
        ? html`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${na}
              .value=${String(a.current_position)}
              @change=${(e: Event) => this.call("cover", "set_cover_position", { entity_id: id, position: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : nothing}
      ${features & 128 && typeof a.current_tilt_position === "number"
        ? html`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${na}
              .value=${String(a.current_tilt_position)}
              @change=${(e: Event) => this.call("cover", "set_cover_tilt_position", { entity_id: id, tilt_position: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : features & 48
          ? html`<div class="fp3d-rp-buttons">
              ${features & 16 ? html`<button class="fp3d-btn fp3d-rp-small" ?disabled=${na} @click=${() => this.call("cover", "open_cover_tilt", { entity_id: id })}>${this.t("cover_tilt_open")}</button>` : nothing}
              ${features & 32 ? html`<button class="fp3d-btn fp3d-rp-small" ?disabled=${na} @click=${() => this.call("cover", "close_cover_tilt", { entity_id: id })}>${this.t("cover_tilt_close")}</button>` : nothing}
            </div>`
          : nothing}
    </div>`;
  }

  private climateRow(st: HassEntity) {
    const a = st.attributes;
    const id = st.entity_id;
    const target = typeof a.temperature === "number" ? a.temperature : null;
    const step = (a.target_temp_step as number | undefined) ?? 0.5;
    const min = (a.min_temp as number | undefined) ?? 5;
    const max = (a.max_temp as number | undefined) ?? 30;
    const modes = (a.hvac_modes as string[] | undefined) ?? [];
    const set = (v: number) => this.call("climate", "set_temperature", { entity_id: id, temperature: Math.min(max, Math.max(min, Math.round(v / step) * step)) });
    return html`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${a.hvac_action === "heating" ? "fp3d-rp-on" : ""}">${icon("climate")}</span>
      ${this.nameButton(id)}
      <span class="fp3d-rp-state">${this.stateOf(st)}</span>
      ${target !== null
        ? html`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${() => set(target - step)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${formatNumber(this.hass, target, 1)} ${tempUnit(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${() => set(target + step)}>+</button>
          </div>`
        : nothing}
      ${modes.length > 1
        ? html`<div class="fp3d-rp-chips">
            ${modes.map(
              (m) => html`<button
                class="fp3d-chip"
                aria-pressed=${st.state === m}
                @click=${() => this.call("climate", "set_hvac_mode", { entity_id: id, hvac_mode: m })}
              >
                ${this.stateLabel(m)}
              </button>`,
            )}
          </div>`
        : nothing}
    </div>`;
  }

  /**
   * The state text of a row: left out when the room says so (D154) or when a device that is not a
   * sensor only reports "unknown" (covers without position feedback).
   */
  private stateOf(st: HassEntity, text = stateText(this.hass, st)): string {
    if (this.room?.no_state?.includes(st.entity_id)) return "";
    const kind = kindOf(st.entity_id);
    if (st.state === "unknown" && kind !== "sensor" && kind !== "binary") return "";
    return text;
  }

  private stateLabel(state: string): string {
    const key = `state_${state}` as I18nKey;
    const s = this.t(key);
    return s === key ? state : s;
  }

  private mediaRow(st: HassEntity) {
    const a = st.attributes;
    const id = st.entity_id;
    const na = isUnavailable(st) || st.state === "off";
    const title = [a.media_title, a.media_artist].filter((x) => typeof x === "string" && x).join(" · ");
    return html`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${st.state === "playing" ? "fp3d-rp-on" : ""}">${icon("media")}</span>
      ${this.nameButton(id)}
      <span class="fp3d-rp-state">${this.stateOf(st, this.stateLabel(st.state))}</span>
      ${title ? html`<p class="fp3d-rp-media fp3d-rp-wide">${title}</p>` : nothing}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${na} @click=${() => this.call("media_player", "media_previous_track", { entity_id: id })}>
          ${transport(TRANSPORT.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${isUnavailable(st)} @click=${() => this.call("media_player", "media_play_pause", { entity_id: id })}>
          ${transport(st.state === "playing" ? TRANSPORT.pause : TRANSPORT.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${na} @click=${() => this.call("media_player", "media_next_track", { entity_id: id })}>
          ${transport(TRANSPORT.next)}
        </button>
      </div>
      ${typeof a.volume_level === "number"
        ? html`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(a.volume_level * 100))}
              @change=${(e: Event) => this.call("media_player", "volume_set", { entity_id: id, volume_level: Number((e.target as HTMLInputElement).value) / 100 })}
          /></label>`
        : nothing}
    </div>`;
  }

  private switchRow(st: HassEntity) {
    const id = st.entity_id;
    const kind = kindOf(id)!;
    const domain = id.slice(0, id.indexOf("."));
    const on = kind === "lock" ? st.state === "unlocked" || st.state === "open" : st.state === "on";
    const act = () => (kind === "lock" ? this.call("lock", on ? "lock" : "unlock", { entity_id: id }) : this.call(domain, "toggle", { entity_id: id }));
    return html`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${on ? "fp3d-rp-on" : ""}">${icon(kind)}</span>
      ${this.nameButton(id)}
      <span class="fp3d-rp-state">${this.stateOf(st)}</span>
      ${this.toggle(st, on, act)}
    </div>`;
  }

  /** Camera snapshot (refreshed while the panel is open); a tap opens the live view of Home Assistant. */
  private cameraTile(st: HassEntity) {
    const picture = st.attributes.entity_picture as string | undefined;
    // a changing query parameter makes the browser fetch a fresh snapshot (not for inline pictures)
    const src = picture && !isUnavailable(st) ? (picture.startsWith("data:") ? picture : `${picture}${picture.includes("?") ? "&" : "?"}fp3d=${this._tick}`) : null;
    const placed = this.floor?.placements.some((p) => p.entity_id === st.entity_id);
    return html`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${() => openMoreInfo(this, st.entity_id)}>
        ${src ? html`<img src=${src} alt=${this.name(st.entity_id)} loading="lazy" />` : html`<span class="fp3d-rp-note">${stateText(this.hass, st)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(st.entity_id)}</span>
      </button>
      ${placed
        ? html`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${() => this.dispatchEvent(new CustomEvent("camera-look", { detail: { entity: st.entity_id }, bubbles: true, composed: true }))}
          >
            ${hasFeature("camera_cockpit") ? "" : "🔒 "}${this.t("through_camera")}
          </button>`
        : nothing}
    </div>`;
  }

  private sensorRow(st: HassEntity) {
    const kind = kindOf(st.entity_id)!;
    const warn = kind === "binary" && st.state === "on";
    return html`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${warn ? "fp3d-rp-on" : ""}">${icon(kind)}</span>
      ${this.nameButton(st.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(st)}</span>
    </div>`;
  }

  private fire(type: string): void {
    this.dispatchEvent(new CustomEvent(type, { bubbles: true, composed: true }));
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `,
  ];
}

if (!customElements.get("fp3d-room-panel")) customElements.define("fp3d-room-panel", Fp3dRoomPanel);
