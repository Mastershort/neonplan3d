// The phone view as one piece, for the panel and for the dashboard card alike: the bar at the bottom (Now, the rooms
// by floor, the blinds, More), the list "What is going on?" as a page of its own, and the house check. It lies over
// the 3D view without taking its touches, reads what the view knows (`view.nowInput()`) and asks its host for what
// only the host can do: open a room (phone-room), and the host's own entries under More (phone-more).
import { LitElement, css, html, nothing } from "lit";
import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { entityName, favoriteCall, floorControls } from "../devices.ts";
import { roomTiles } from "../room-bar.ts";
import { nowItems, nowStops, nowSummary, type NowAction, type NowInput, type NowStop, type NowTarget, type NowWords } from "../now.ts";
import { navCover, navFloors, navSlots, type NavCover, type NavFloor } from "../phone.ts";
import "./now-list.ts";
import type { NowLabels, NowMode } from "./now-list.ts";
import "./phone-nav.ts";
import type { NavLabels, NavMoreItem, NavSheet } from "./phone-nav.ts";

/** What the shell needs from the 3D view. */
export interface PhoneView {
  nowInput(): NowInput | null;
  showNow(target: NowTarget): void;
}

export class Fp3dPhoneShell extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    view: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    extras: { attribute: false },
    solo: { type: Boolean },
    hide: { attribute: false },
    start: { attribute: false },
    watts: { attribute: false },
    mode: { reflect: true },
    _sheet: { state: true },
    _navFloor: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null;
  /** A getter, not the element: the view comes and goes with the host's rendering. */
  declare view: () => PhoneView | null | undefined;
  declare floorId: string | null;
  declare roomId: string | null;
  /** The host's own entries under More (the panel's show menu, time travel, the phone view's switch). */
  declare extras: NavMoreItem[];
  /** A room jumped into stands alone. */
  declare solo: boolean;
  /** Parts left out: "rooms" and "covers" in the bar, "favorites" on top of the list. */
  declare hide: string[];
  /** "now": opens with the list. */
  declare start: string | undefined;
  private started = false;
  declare watts: (w: number) => string;
  /** bar: only the bar; page: the list; check: the house check steps through the house. */
  declare mode: NowMode;
  private declare _sheet: NavSheet;
  private declare _navFloor: string | null;
  private stops: NowStop[] = [];

  constructor() {
    super();
    this.building = null;
    this.view = () => null;
    this.floorId = null;
    this.roomId = null;
    this.extras = [];
    this.solo = false;
    this.hide = [];
    this.start = undefined;
    this.watts = (w) => `${Math.round(w)} W`;
    this.mode = "bar";
    this._sheet = null;
    this._navFloor = null;
  }

  private t(key: I18nKey): string {
    return translate(this.hass, key);
  }

  private fire<T>(type: string, detail?: T): void {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  private words(): NowWords {
    const n = (one: I18nKey, many: I18nKey) => (count: number) => this.t(count === 1 ? one : many).replace("{n}", String(count));
    return {
      open: n("now_open_one", "now_open"),
      tilted: this.t("now_tilted"),
      unlocked: n("now_unlocked_one", "now_unlocked"),
      home: this.t("now_home"),
      away: this.t("now_away"),
      nobodyHome: this.t("now_nobody"),
      lights: n("now_lights_one", "now_lights"),
      energyUse: this.t("energy_consumption"),
      energySolar: this.t("energy_solar"),
      energyGrid: this.t("energy_grid_import"),
      energyFeed: this.t("energy_grid_export"),
      battery: this.t("now_battery"),
      charging: this.t("wallbox_charging"),
      carAway: this.t("now_car_away"),
      calm: this.t("now_calm"),
      calmDetail: this.t("now_calm_detail"),
      watts: this.watts,
    };
  }

  private setMode(mode: NowMode): void {
    if (mode === "check") {
      // the stops as they are now: switching things off on the way must not reshuffle them
      const input = this.view()?.nowInput();
      this.stops = input ? nowStops(input, this.words()) : [];
    }
    // the check went through the rooms: back to the house as it was before
    if (this.mode === "check" && mode !== "check") this.fire("phone-room", { floorId: this.floorId, roomId: null });
    this._sheet = null;
    this.mode = mode;
    this.fire<NowMode>("phone-mode", mode);
  }

  protected updated(): void {
    // a card set to open with the list: once, as soon as the house is there
    if (this.started || !this.hass || !this.building) return;
    this.started = true;
    if (this.start === "now" && this.mode === "bar") this.setMode("page");
  }

  /** The host opens the list (a link asked for it). */
  openList(): void {
    this.setMode("page");
  }

  private go(target: NowTarget): void {
    if (this.mode === "page") this.setMode("bar");
    this.view()?.showNow(target);
  }

  private act(action: NowAction): void {
    if (!this.hass || !action.entities.length) return;
    if (action.kind === "lock") void this.hass.callService("lock", "lock", { entity_id: action.entities });
    else void this.hass.callService("homeassistant", "turn_off", { entity_id: action.entities });
  }

  private fav(entity: string): void {
    const [domain, service] = favoriteCall(entity);
    void this.hass?.callService(domain, service, { entity_id: entity });
  }

  private tapSlot(id: string, floors: NavFloor[]): void {
    if (id === "now") return this.setMode(this.mode === "page" ? "bar" : "page");
    if (this.mode !== "bar") this.setMode("bar");
    const floor = id.startsWith("floor:") ? id.slice(6) : null;
    const sheet: NavSheet = floor || id === "rooms" ? "rooms" : id === "covers" ? "covers" : "more";
    const same = this._sheet === sheet && (!floor || floor === this._navFloor);
    this._sheet = same ? null : sheet;
    if (sheet === "rooms") this._navFloor = floor ?? (floors.some((f) => f.id === this.floorId) ? this.floorId : (floors[0]?.id ?? null));
  }

  private tapMore(id: string): void {
    this._sheet = null;
    if (id === "check") this.setMode("check");
    else if (id === "house") this.fire("phone-room", { floorId: null, roomId: null });
    else if (id === "solo") this.fire<boolean>("phone-solo", !this.solo);
    else this.fire<string>("phone-more", id);
  }

  render() {
    const hass = this.hass;
    const b = this.building;
    if (!hass || !b) return nothing;
    const input = this.view()?.nowInput() ?? null;
    const words = this.words();
    if (input?.away) words.calm = this.t("now_calm_away");
    const items = input ? nowItems(input, words) : [];
    const summary = input ? nowSummary(items) : { text: "", level: 0 as const };

    const floors = navFloors(b.floors, roomTiles(hass, b, null));
    const covers = [...b.floors]
      .sort((p, q) => p.elevation - q.elevation)
      .map((f) => ({ id: f.id, name: f.name, items: floorControls(hass, f).covers.map((id): NavCover => navCover(id, entityName(hass, id), hass.states[id]?.state, hass.states[id]?.attributes.current_position)) }))
      .filter((f) => f.items.length);
    const shut = covers.reduce((n, f) => n + f.items.filter((c) => c.shut).length, 0);
    const out = new Set(this.hide ?? []);
    const slots = navSlots(out.has("rooms") ? [] : floors, items.filter((it) => it.level > 0).length, shut, covers.length > 0 && !out.has("covers"));
    const active = this.mode === "page" ? "now" : this._sheet === "rooms" ? (slots.some((sl) => sl.id === "rooms") ? "rooms" : `floor:${this._navFloor}`) : this._sheet;

    const nowLabels: NowLabels = {
      title: this.t("now_title"),
      close: this.t("close"),
      lightsOff: this.t("now_lights_off"),
      lock: this.t("now_lock"),
      check: this.t("now_check"),
      checkHint: this.t("now_check_hint"),
      next: this.t("now_next"),
      done: this.t("now_done"),
      checkDone: this.t("now_check_done"),
      checkNothing: this.t("now_check_nothing"),
      windowHint: this.t("now_window_hint"),
      allLightsOff: this.t("now_all_lights_off"),
    };
    const navLabels: NavLabels = {
      now: this.t("nav_now"),
      rooms: this.t("nav_rooms"),
      covers: this.t("nav_covers"),
      more: this.t("nav_more"),
      wholeFloor: this.t("nav_whole_floor"),
      allUp: this.t("nav_all_up"),
      allDown: this.t("nav_all_down"),
      close: this.t("close"),
    };
    const more: NavMoreItem[] = [
      { id: "check", icon: "🚪", label: this.t("now_check"), hint: this.t("now_check_hint") },
      { id: "house", icon: "🏠", label: this.t("nav_house") },
      { id: "solo", icon: "🔎", label: this.t("nav_solo"), hint: this.t("nav_solo_hint"), pressed: this.solo },
      ...this.extras,
    ];
    const favorites = out.has("favorites") ? [] : (b.settings.favorites ?? []).filter((id) => !!hass.states[id]).map((id) => ({ entity: id, name: entityName(hass, id) }));

    return html`${this.mode !== "bar"
        ? html`<fp3d-now-list
            class="list"
            .items=${items}
            .summary=${summary}
            .stops=${this.stops}
            .labels=${nowLabels}
            .favorites=${favorites}
            .mode=${this.mode}
            @now-mode=${(e: CustomEvent<NowMode>) => this.setMode(e.detail)}
            @now-go=${(e: CustomEvent<NowTarget>) => this.go(e.detail)}
            @now-act=${(e: CustomEvent<NowAction>) => this.act(e.detail)}
            @now-fav=${(e: CustomEvent<string>) => this.fav(e.detail)}
          ></fp3d-now-list>`
        : nothing}
      ${this.mode !== "check"
        ? html`<fp3d-phone-nav
            class="nav"
            .slots=${slots}
            .floors=${floors}
            .covers=${covers}
            .more=${more}
            .labels=${navLabels}
            .sheet=${this._sheet}
            .floorId=${this._navFloor}
            .roomId=${this.roomId}
            .active=${active}
            .level=${summary.level}
            .attention=${summary.level > 0 && !this.roomId ? summary.text : ""}
            @nav-slot=${(e: CustomEvent<string>) => this.tapSlot(e.detail, floors)}
            @nav-floor=${(e: CustomEvent<string>) => (this._navFloor = e.detail)}
            @nav-close=${() => (this._sheet = null)}
            @nav-room=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
              this._sheet = null;
              this.fire("phone-room", e.detail);
            }}
            @nav-cover=${(e: CustomEvent<{ entities: string[]; service: string }>) => void hass.callService("cover", e.detail.service, { entity_id: e.detail.entities })}
            @nav-more=${(e: CustomEvent<string>) => this.tapMore(e.detail)}
          ></fp3d-phone-nav>`
        : nothing}`;
  }

  static styles = css`
    /* over the 3D view, without taking its touches: only the bar, the pages and the card catch them */
    :host {
      position: absolute;
      inset: 0;
      z-index: 9;
      pointer-events: none;
    }
    .nav,
    .list {
      pointer-events: auto;
      position: absolute;
      left: 0;
      right: 0;
    }
    .nav {
      bottom: 0;
      z-index: 2;
    }
    .list[mode="page"] {
      top: 0;
      bottom: calc(64px + env(safe-area-inset-bottom, 0px));
      z-index: 1;
    }
    .list[mode="check"] {
      left: 8px;
      right: 8px;
      bottom: 8px;
    }
  `;
}

if (!customElements.get("fp3d-phone-shell")) customElements.define("fp3d-phone-shell", Fp3dPhoneShell);
