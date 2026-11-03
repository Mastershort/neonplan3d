// The room bar along the bottom of the 3D view (panel and card): the favourites, then a tile per room with its
// temperature, the lights that are on, an open window or door and a player that plays. A tap on a room flies into it
// (the room panel opens); a tap on its lights switches them off. Plain tiles, no 3D work: fine on old wall tablets.
import { css, html, LitElement, nothing, svg } from "lit";
import { entityName, isUnavailable } from "../devices.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import type { Building } from "../model.ts";
import { favoriteTiles, lightCall, roomTiles, type RoomTile } from "../room-bar.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

const MIN_KEY = "neonplan3d.roombar_min";

/** A window (the line icons have none of their own) and a play triangle, drawn like the line icons. */
const WINDOW = "M5 4h14v16H5zM12 4v16M5 12h14";
const PLAY = "M8 5.5v13l10.5-6.5z";
const icon = (d: string) => html`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${svg`<path d=${d} />`}</svg>`;

export class Fp3dRoomBar extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    favorites: { type: Boolean },
    readOnly: { type: Boolean },
    _min: { state: true },
    _fired: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building | null;
  /** The floor shown; null = the house (every floor's rooms, from the bottom up). */
  declare floorId: string | null;
  /** The open room: its tile is marked. */
  declare roomId: string | null;
  /** The favourites (scenes, scripts, switches) before the rooms. */
  declare favorites: boolean;
  /** Time travel: the past is shown, nothing switches. */
  declare readOnly: boolean;
  private declare _min: boolean;
  private declare _fired: string | null;

  constructor() {
    super();
    this.building = null;
    this.floorId = null;
    this.roomId = null;
    this.favorites = false;
    this.readOnly = false;
    this._fired = null;
    try {
      this._min = localStorage.getItem(MIN_KEY) === "1";
    } catch {
      this._min = false;
    }
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private setMin(on: boolean): void {
    this._min = on;
    try {
      localStorage.setItem(MIN_KEY, on ? "1" : "0");
    } catch {
      // storage unavailable: the bar just opens again next time
    }
  }

  /** The room's light switch on its card: all off when any is on, else all on (it never flies into the room). */
  private toggleLights(e: Event, tile: RoomTile): void {
    e.stopPropagation();
    if (this.readOnly) return;
    const [service, ids] = lightCall(tile);
    if (ids.length) void this.hass.callService("light", service, { entity_id: ids });
  }

  private pick(floorId: string, roomId: string): void {
    this.dispatchEvent(new CustomEvent("room-pick", { detail: { floorId, roomId }, bubbles: true, composed: true }));
  }

  protected render() {
    const b = this.building;
    if (!b || !this.hass) return nothing;
    if (this._min)
      return html`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${() => this.setMin(false)}>▴ ${this.t("room_bar_rooms")}</button>`;
    const hass = this.hass;
    const rooms = roomTiles(hass, b, this.floorId);
    const favs = this.favorites ? favoriteTiles(hass, b) : [];
    const house = !this.floorId && b.floors.length > 1;
    const floorName = (id: string) => b.floors.find((f) => f.id === id)?.name ?? "";
    return html`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${() => this.setMin(true)}>▾</button>
      ${favs.map((f) => {
        const st = hass.states[f.id];
        const run = f.domain !== "homeassistant";
        const off = this.readOnly || isUnavailable(st);
        const fire = () => {
          if (off) return;
          void hass.callService(f.domain, f.service, { entity_id: f.id });
          this._fired = f.id;
          setTimeout(() => (this._fired = null), 700);
        };
        return html`<div class="fp3d-rb-card fp3d-rb-fav ${f.on || this._fired === f.id ? "fp3d-rb-on" : ""} ${off ? "fp3d-rb-off" : ""}">
          <div class="fp3d-rb-top"><b class="fp3d-rb-name">${entityName(hass, f.id)}</b></div>
          <div class="fp3d-rb-row"></div>
          ${run
            ? html`<button class="fp3d-rb-act" ?disabled=${off} @click=${fire}>${icon(PLAY)} ${this.t("room_bar_activate")}</button>`
            : html`<button class="fp3d-rb-switch" role="switch" aria-checked=${f.on} ?disabled=${off} @click=${fire}>
                <span>${f.on ? this.t("room_bar_on") : this.t("room_bar_off")}</span><i aria-hidden="true"></i>
              </button>`}
        </div>`;
      })}
      ${favs.length && rooms.length ? html`<span class="fp3d-rb-sep" aria-hidden="true"></span>` : nothing}
      ${rooms.map((r) => {
        const quiet = r.temp === null && !r.lights.length && !r.open && !r.playing;
        const lit = r.lightsOn.length > 0;
        return html`<div
          class="fp3d-rb-card ${quiet ? "fp3d-rb-quiet" : ""} ${r.active ? "fp3d-rb-active" : ""} ${r.roomId === this.roomId ? "fp3d-rb-sel" : ""}"
          role="button"
          tabindex="0"
          title=${house ? `${r.name} · ${floorName(r.floorId)}` : r.name}
          aria-pressed=${r.roomId === this.roomId}
          @click=${() => this.pick(r.floorId, r.roomId)}
          @keydown=${(e: KeyboardEvent) => e.target === e.currentTarget && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.pick(r.floorId, r.roomId))}
        >
          <div class="fp3d-rb-top">
            <b class="fp3d-rb-name">${r.name}</b>
            ${r.temp === null ? nothing : html`<span class="fp3d-rb-temp">${formatNumber(hass, r.temp, 1)}°</span>`}
          </div>
          <div class="fp3d-rb-row">
            ${house ? html`<span class="fp3d-rb-floor">${floorName(r.floorId)}</span>` : nothing}
            ${r.humidity === null ? nothing : html`<span>${formatNumber(hass, r.humidity, 0)} %</span>`}
            ${r.open ? html`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${icon(WINDOW)}${r.open > 1 ? r.open : ""}</span>` : nothing}
            ${r.playing ? html`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${icon(PLAY)}</span>` : nothing}
          </div>
          ${r.lights.length
            ? html`<button
                class="fp3d-rb-switch"
                role="switch"
                aria-checked=${lit}
                aria-label=${`${this.t("room_bar_light")} ${r.name}`}
                ?disabled=${this.readOnly}
                @click=${(e: Event) => this.toggleLights(e, r)}
                @keydown=${(e: KeyboardEvent) => e.stopPropagation()}
              >
                <span>${icon(iconPath("light"))} ${lit ? `${this.t("room_bar_light")} · ${this.t("room_bar_lights", { n: r.lightsOn.length })}` : this.t("room_bar_light")}</span><i aria-hidden="true"></i>
              </button>`
            : html`<div class="fp3d-rb-switch-gap"></div>`}
        </div>`;
      })}
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        pointer-events: none;
      }
      .fp3d-rb,
      .fp3d-rb-open {
        pointer-events: auto;
      }
      /* one row of even cards, solid like the room panel, scrolling sideways */
      .fp3d-rb {
        display: flex;
        align-items: stretch;
        gap: 8px;
        padding: 2px;
        overflow-x: auto;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
      }
      .fp3d-rb::-webkit-scrollbar {
        display: none;
      }
      .fp3d-rb-min {
        flex: none;
        width: 26px;
        padding: 0;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: inherit;
        cursor: pointer;
      }
      .fp3d-rb-sep {
        flex: none;
        width: 1px;
        margin: 8px 0;
        background: var(--fp3d-line);
      }
      .fp3d-rb-card {
        flex: none;
        box-sizing: border-box;
        width: 164px;
        height: 96px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 9px 10px 8px 12px;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        color: var(--fp3d-text);
        cursor: pointer;
        user-select: none;
      }
      .fp3d-rb-top {
        display: flex;
        align-items: baseline;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-rb-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 700;
      }
      .fp3d-rb-temp {
        flex: none;
        color: var(--fp3d-accent);
        font-family: var(--fp3d-title-font);
        font-size: 19px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rb-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 16px;
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-rb-floor {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-ico {
        width: 14px;
        height: 14px;
        flex: none;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
        vertical-align: -2px;
      }
      .fp3d-rb-state {
        display: inline-flex;
        align-items: center;
        gap: 2px;
      }
      .fp3d-rb-win {
        color: var(--fp3d-danger);
      }
      .fp3d-rb-play {
        color: var(--fp3d-accent);
      }
      /* the switch at the foot of a card: a label and a small toggle */
      .fp3d-rb-switch,
      .fp3d-rb-act {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        height: 26px;
        padding: 0 4px 0 9px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 11px;
        cursor: pointer;
      }
      .fp3d-rb-switch span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-switch i {
        flex: none;
        position: relative;
        width: 28px;
        height: 16px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.14);
        transition: background 0.15s;
      }
      .fp3d-rb-switch i::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #c9d6ee;
        transition: transform 0.15s;
      }
      .fp3d-rb-switch[aria-checked="true"] {
        color: var(--fp3d-warm);
        border-color: rgba(255, 181, 71, 0.45);
        background: rgba(255, 181, 71, 0.1);
      }
      .fp3d-rb-switch[aria-checked="true"] i {
        background: var(--fp3d-warm);
      }
      .fp3d-rb-switch[aria-checked="true"] i::after {
        transform: translateX(12px);
        background: #1a1200;
      }
      .fp3d-rb-act {
        justify-content: center;
        padding: 0 10px;
        color: var(--fp3d-text);
      }
      .fp3d-rb-switch:disabled,
      .fp3d-rb-act:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-rb-switch-gap {
        height: 26px;
      }
      /* something on or open: a warm edge; the open room: the accent */
      .fp3d-rb-active,
      .fp3d-rb-on {
        border-color: rgba(255, 181, 71, 0.65);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.2), var(--fp3d-shadow);
      }
      .fp3d-rb-sel {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 0 1px var(--fp3d-accent) inset, var(--fp3d-shadow);
      }
      .fp3d-rb-quiet .fp3d-rb-name {
        color: var(--fp3d-muted);
      }
      .fp3d-rb-fav {
        cursor: default;
      }
      .fp3d-rb-off {
        opacity: 0.55;
      }
      @media (max-width: 600px) {
        .fp3d-rb-card {
          width: 132px;
          height: 86px;
          padding: 7px 8px 6px 10px;
        }
        .fp3d-rb-temp {
          font-size: 16px;
        }
      }
    `,
  ];
}

if (!customElements.get("fp3d-room-bar")) customElements.define("fp3d-room-bar", Fp3dRoomBar);
