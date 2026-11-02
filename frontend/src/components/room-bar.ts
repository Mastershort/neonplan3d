// The room bar along the bottom of the 3D view (panel and card): the favourites, then a tile per room with its
// temperature, the lights that are on, an open window or door and a player that plays. A tap on a room flies into it
// (the room panel opens); a tap on its lights switches them off. Plain tiles, no 3D work: fine on old wall tablets.
import { css, html, LitElement, nothing } from "lit";
import { entityName, isUnavailable } from "../devices.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import type { Building } from "../model.ts";
import { favoriteTiles, roomTiles } from "../room-bar.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

const MIN_KEY = "neonplan3d.roombar_min";

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
        return html`<button
          class="fp3d-rb-tile fp3d-rb-fav ${f.on || this._fired === f.id ? "fp3d-rb-on" : ""}"
          title=${entityName(hass, f.id)}
          ?disabled=${this.readOnly || isUnavailable(st)}
          @click=${() => {
            void hass.callService(f.domain, f.service, { entity_id: f.id });
            this._fired = f.id;
            setTimeout(() => (this._fired = null), 700);
          }}
        >
          <span class="fp3d-rb-head"><b>${entityName(hass, f.id)}</b></span>
          <small>${f.domain === "homeassistant" ? (f.on ? this.t("room_bar_on") : this.t("room_bar_off")) : `▶ ${this.t("room_bar_run")}`}</small>
        </button>`;
      })}
      ${favs.length && rooms.length ? html`<span class="fp3d-rb-sep" aria-hidden="true"></span>` : nothing}
      ${rooms.map((r) => {
        // a room with nothing to tell is a small chip with its name
        const quiet = r.temp === null && !r.lightsOn.length && !r.open && !r.playing;
        return html`<div
          class="fp3d-rb-tile ${quiet ? "fp3d-rb-quiet" : ""} ${r.active ? "fp3d-rb-active" : ""} ${r.roomId === this.roomId ? "fp3d-rb-sel" : ""}"
          role="button"
          tabindex="0"
          title=${house ? `${r.name} · ${floorName(r.floorId)}` : r.name}
          aria-pressed=${r.roomId === this.roomId}
          @click=${() => this.pick(r.floorId, r.roomId)}
          @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.pick(r.floorId, r.roomId))}
        >
          <span class="fp3d-rb-head"><b>${r.name}</b>${r.temp === null ? nothing : html`<span class="fp3d-rb-temp">${formatNumber(hass, r.temp, 1)}°</span>`}</span>
          ${quiet
            ? nothing
            : html`<span class="fp3d-rb-icons">
                ${r.lightsOn.length
                  ? html`<button
                      class="fp3d-rb-light"
                      title=${this.t("room_bar_lights_off")}
                      aria-label=${`${this.t("room_bar_lights", { n: r.lightsOn.length })} – ${this.t("room_bar_lights_off")}`}
                      ?disabled=${this.readOnly}
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        void hass.callService("light", "turn_off", { entity_id: r.lightsOn });
                      }}
                    >💡${r.lightsOn.length}</button>`
                  : nothing}
                ${r.open ? html`<span title=${this.t("room_bar_open")}>🪟${r.open > 1 ? r.open : ""}</span>` : nothing}
                ${r.playing ? html`<span class="fp3d-rb-play" title=${this.t("room_bar_playing")}>▶</span>` : nothing}
              </span>`}
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
      /* no bar: glass tiles floating over the plan, like the holograms (no blur: cheap on old tablets) */
      .fp3d-rb {
        display: flex;
        align-items: flex-end;
        gap: 6px;
        padding: 4px 2px;
        overflow-x: auto;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
      }
      .fp3d-rb::-webkit-scrollbar {
        display: none;
      }
      .fp3d-rb-min {
        flex: none;
        align-self: center;
        width: 24px;
        height: 24px;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 999px;
        background: rgba(10, 18, 34, 0.6);
        color: #bfefff;
        font: inherit;
        font-size: 11px;
        cursor: pointer;
      }
      .fp3d-rb-open {
        padding: 4px 12px;
      }
      .fp3d-rb-sep {
        flex: none;
        align-self: stretch;
        width: 1px;
        margin: 6px 2px;
        background: rgba(160, 240, 255, 0.25);
      }
      .fp3d-rb-tile {
        flex: none;
        display: flex;
        flex-direction: column;
        gap: 1px;
        min-width: 0;
        max-width: 150px;
        padding: 5px 10px 5px;
        border-radius: 12px;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.16) 0%, rgba(40, 90, 170, 0.18) 55%, rgba(10, 30, 70, 0.42) 100%);
        box-shadow:
          0 0 14px rgba(55, 224, 255, 0.18),
          inset 0 1px 0 rgba(255, 255, 255, 0.28);
        color: #e6fbff;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.45);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-rb-head {
        display: flex;
        align-items: baseline;
        gap: 8px;
        min-width: 0;
      }
      .fp3d-rb-head b {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rb-temp {
        margin-left: auto;
        font-size: 14px;
        font-weight: 700;
        font-family: var(--fp3d-title-font);
      }
      .fp3d-rb-tile small {
        color: rgba(200, 235, 255, 0.7);
        font-size: 10px;
      }
      .fp3d-rb-icons {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        line-height: 16px;
      }
      .fp3d-rb-light {
        padding: 0 6px;
        border: 0;
        border-radius: 999px;
        background: rgba(255, 181, 71, 0.22);
        color: #ffe2b0;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-rb-play {
        color: #7ff0ff;
      }
      /* nothing to tell: a small chip with the name */
      .fp3d-rb-quiet {
        padding: 4px 9px;
        opacity: 0.72;
        box-shadow: none;
        background: rgba(10, 22, 44, 0.45);
        border-color: rgba(160, 240, 255, 0.22);
      }
      .fp3d-rb-fav:disabled {
        opacity: 0.5;
        cursor: default;
      }
      /* something on or open: a warm glow, like a lit room */
      .fp3d-rb-active,
      .fp3d-rb-on {
        border-color: rgba(255, 200, 110, 0.75);
        box-shadow:
          0 0 16px rgba(255, 181, 71, 0.32),
          inset 0 1px 0 rgba(255, 255, 255, 0.3);
      }
      .fp3d-rb-sel {
        border-color: rgba(120, 240, 255, 0.95);
        box-shadow:
          0 0 18px rgba(55, 224, 255, 0.5),
          inset 0 0 0 1px rgba(120, 240, 255, 0.6);
      }
    `,
  ];
}

if (!customElements.get("fp3d-room-bar")) customElements.define("fp3d-room-bar", Fp3dRoomBar);
