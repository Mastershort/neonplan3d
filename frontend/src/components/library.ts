// The furniture library of the editor: everything that can be placed, sorted by what it is and filtered by the
// room it is for, with a picture, the size and a star on every card; variants of one thing (a bed in five widths,
// a corner sofa for the left and the right) fold into one card with chips. The logic (index, classification, families, search) lives in library-index.ts;
// this element only shows it. Pictures are drawn by the 3D bundle through the `thumb` callback and kept in the
// browser (thumbs.ts). Fires "library-add" {type, mirror} and "library-preview" {type, element} (type null = gone; only without card pictures).

import { css, html, LitElement, nothing } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { KINDS, cardsOf, filterEntries, sizeText, type LibraryCard, type LibraryEntry, type Room, ROOMS } from "../library-index.ts";
import { tokens } from "../styles.ts";
import { thumbFor } from "../thumbs.ts";
import { fitText, type HintKey } from "../fit-hints.ts";

const RECENT_MAX = 10;
const PAGE = 24;
const THUMB_PX = 96;
const STORE_OPEN = "neonplan3d.lib.open";
const STORE_FAV = "neonplan3d.lib.fav";
const STORE_RECENT = "neonplan3d.lib.recent";
const STORE_LOCKED = "neonplan3d.lib.locked";

type Translate = (key: string, vars?: Record<string, string | number>) => string;

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // no storage: the choice lives for this page
  }
}

export class FurnitureLibrary extends LitElement {
  static properties = {
    entries: { attribute: false },
    language: { attribute: false },
    roomHint: { attribute: false },
    admin: { type: Boolean },
    lite: { type: Boolean },
    t: { attribute: false },
    thumb: { attribute: false },
    _query: { state: true },
    _room: { state: true },
    _electric: { state: true },
    _light: { state: true },
    _outdoor: { state: true },
    _live: { state: true },
    _open: { state: true },
    _fav: { state: true },
    _recent: { state: true },
    _thumbs: { state: true },
    _shown: { state: true },
    _limits: { state: true },
    _locked: { state: true },
    _detail: { state: true },
    bundle: { attribute: false },
  };

  /** Everything the library offers (from buildIndex). */
  declare entries: LibraryEntry[];
  declare language: string;
  /** The room kind of the room open in the editor: preselects the room chips until the user picks one. */
  declare roomHint: Room | null;
  declare admin: boolean;
  /** Weak device: no pictures on the cards (the hover preview stays). */
  declare lite: boolean;
  declare t: Translate;
  /** Draws an item's picture (a data URL) or gives null; the library asks once per item and release. */
  declare thumb: ((entry: LibraryEntry) => Promise<string | null>) | null;
  private declare _query: string;
  private declare _room: Room | null;
  private declare _electric: boolean;
  private declare _light: boolean;
  private declare _outdoor: boolean;
  /** Only items with live parts (✨). */
  private declare _live: boolean;
  private declare _open: Set<string>;
  private declare _fav: string[];
  private declare _recent: string[];
  private declare _thumbs: Map<string, string>;
  /** The variant whose picture a family card shows (its first key -> the variant's key), set by hovering a chip. */
  private declare _shown: Map<string, string>;
  private declare _limits: Map<string, number>;
  /** The shop's furniture not owned yet shows with a lock (switched off with its chip, remembered per device). */
  private declare _locked: boolean;
  /** A locked item opened large (picture, pack, price, the way to the shop). */
  private declare _detail: LibraryEntry | null;
  /** All packs at once (the shop's bundle), mentioned under a locked item. */
  declare bundle: { name: string; price: string; url: string } | null;
  private roomTouched = false;
  private observer: IntersectionObserver | null = null;
  private observed = new WeakSet<Element>();
  private wanted = new Set<string>();
  private drawing = 0;
  private queue: LibraryEntry[] = [];

  constructor() {
    super();
    this.entries = [];
    this.language = "en";
    this.roomHint = null;
    this.admin = true;
    this.lite = ((navigator as { hardwareConcurrency?: number }).hardwareConcurrency ?? 4) <= 2 || ((navigator as { deviceMemory?: number }).deviceMemory ?? 4) <= 2;
    this.t = (k) => k;
    this.thumb = null;
    this._query = "";
    this._room = null;
    this._electric = false;
    this._light = false;
    this._outdoor = false;
    this._live = false;
    this._open = new Set(load<string[]>(STORE_OPEN, ["sofa", "lamp"]));
    this._fav = load<string[]>(STORE_FAV, []);
    this._recent = load<string[]>(STORE_RECENT, []);
    this._thumbs = new Map();
    this._shown = new Map();
    this._limits = new Map();
    this._locked = load<boolean>(STORE_LOCKED, true);
    this._detail = null;
    this.bundle = null;
  }

  private x(key: HintKey, vars: Record<string, string> = {}): string {
    let s = fitText(this.language, key);
    for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, v);
    return s;
  }

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has("roomHint") && !this.roomTouched) this._room = this.roomHint;
    if (changed.has("entries")) {
      // packs changed: forget pictures of items that are gone and start over with the queue
      const known = new Set(this.entries.map((e) => e.key));
      this._fav = this._fav.filter((k) => known.has(k));
      this._recent = this._recent.filter((k) => known.has(k));
      this.queue = [];
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.observer?.disconnect();
    this.observer = null;
  }

  updated(): void {
    if (this.lite || !this.thumb) return;
    this.observer ??= new IntersectionObserver(
      (hits) => {
        for (const h of hits) {
          if (!h.isIntersecting) continue;
          const entry = this.byKey.get((h.target as HTMLElement).dataset.key ?? "");
          if (entry) this.want(entry);
        }
      },
      { root: null, rootMargin: "200px" },
    );
    const byKey = this.byKey;
    const bottom = window.innerHeight + 200;
    for (const el of this.renderRoot.querySelectorAll<HTMLElement>(".fp3d-lc-pic[data-key]")) {
      if (!this.observed.has(el)) {
        this.observed.add(el);
        this.observer.observe(el);
      }
      const entry = byKey.get(el.dataset.key ?? "");
      if (!entry || entry.locked || this._thumbs.has(entry.type)) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom >= -200 && r.top <= bottom) this.want(entry);
    }
  }

  private get byKey(): Map<string, LibraryEntry> {
    return new Map(this.entries.map((e) => [e.key, e]));
  }

  /**
   * A family card shows the picture of the variant under the pointer (a sofa in five widths, a corner for the
   * left or the right): its picture is drawn on demand. Without card pictures the big preview shows it instead.
   */
  private showVariant(cardKey: string, entry: LibraryEntry | null, el: HTMLElement | null): void {
    if (this.lite || !this.thumb) {
      this.preview(entry?.type ?? null, el);
      return;
    }
    const next = new Map(this._shown);
    if (entry) next.set(cardKey, entry.key);
    else next.delete(cardKey);
    this._shown = next;
    if (entry) this.want(entry);
  }

  /** Asks for an item's picture once; at most two are drawn at a time so the editor stays smooth. */
  private want(entry: LibraryEntry): void {
    if (entry.locked || this._thumbs.has(entry.type) || this.wanted.has(entry.type)) return;
    this.wanted.add(entry.type);
    this.queue.push(entry);
    this.drain();
  }

  private drain(): void {
    while (this.drawing < 2 && this.queue.length) {
      const entry = this.queue.shift()!;
      this.drawing++;
      const key = `${entry.type}|${entry.packRelease}|${THUMB_PX}|1`;
      thumbFor(key, () => (this.thumb ? this.thumb(entry) : Promise.resolve(null)))
        .then((url) => {
          if (url) {
            const next = new Map(this._thumbs);
            next.set(entry.type, url);
            this._thumbs = next;
          } else this.wanted.delete(entry.type);
        })
        .catch(() => this.wanted.delete(entry.type))
        .finally(() => {
          this.drawing--;
          this.drain();
        });
    }
  }

  private pick(entry: LibraryEntry): void {
    if (entry.locked) {
      this._detail = entry;
      return;
    }
    if (!this.admin) return;
    this._recent = [entry.key, ...this._recent.filter((k) => k !== entry.key)].slice(0, RECENT_MAX);
    save(STORE_RECENT, this._recent);
    this.dispatchEvent(new CustomEvent("library-add", { detail: { type: entry.type, mirror: !!entry.mirror }, bubbles: true, composed: true }));
  }

  private preview(type: string | null, element: HTMLElement | null): void {
    // the cards show their pictures: the big preview stays only on devices without them
    if (!this.lite) return;
    this.dispatchEvent(new CustomEvent("library-preview", { detail: { type, element }, bubbles: true, composed: true }));
  }

  private toggleFav(key: string): void {
    this._fav = this._fav.includes(key) ? this._fav.filter((k) => k !== key) : [...this._fav, key];
    save(STORE_FAV, this._fav);
  }

  private toggleOpen(key: string): void {
    const next = new Set(this._open);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    this._open = next;
    save(STORE_OPEN, [...next]);
  }

  private setRoom(room: Room | null): void {
    this.roomTouched = true;
    this._room = room;
  }

  private get hits(): LibraryEntry[] {
    return filterEntries(this.entries, { query: this._query, room: this._room, electric: this._electric, light: this._light, outdoor: this._outdoor, live: this._live, locked: this._locked });
  }

  render() {
    const t = this.t;
    const hits = this.hits;
    const searching = this._query.trim().length > 0;
    const byKey = this.byKey;
    const hitKeys = new Set(hits.map((e) => e.key));
    const single = (e: LibraryEntry): LibraryCard => ({ key: e.key, label: e.label, kind: e.kind, rooms: e.rooms, entries: [e] });
    const recent = this._recent.map((k) => byKey.get(k)).filter((e): e is LibraryEntry => !!e && hitKeys.has(e.key));
    const favs = this._fav.map((k) => byKey.get(k)).filter((e): e is LibraryEntry => !!e && hitKeys.has(e.key));
    const sections = KINDS.map((kind) => ({ kind, cards: cardsOf(hits, kind) })).filter((s) => s.cards.length);
    // with nothing open among the sections that have hits, the first one opens by itself
    const firstOpen = sections.length && !sections.some((s) => this._open.has(s.kind)) ? sections[0].kind : null;
    const anyLocked = this.entries.some((e) => e.locked);
    return html`${this.renderDetail()}<input
        class="fp3d-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${this._query}
        @input=${(e: Event) => (this._query = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Escape") this._query = "";
        }}
      />
      <div class="fp3d-lib-rooms" role="group">
        <button class="fp3d-chip ${this._room === null ? "on" : ""}" @click=${() => this.setRoom(null)}>${t("lib_room_all")}</button>
        ${ROOMS.map((r) => html`<button class="fp3d-chip ${this._room === r ? "on" : ""}" @click=${() => this.setRoom(r)}>${t(`lib_room_${r}`)}</button>`)}
      </div>
      <div class="fp3d-lib-chips">
        <button class="fp3d-chip fp3d-chip-f ${this._electric ? "on" : ""}" @click=${() => (this._electric = !this._electric)}>⚡ ${t("lib_chip_electric")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._light ? "on" : ""}" @click=${() => (this._light = !this._light)}>💡 ${t("lib_chip_light")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._outdoor ? "on" : ""}" @click=${() => (this._outdoor = !this._outdoor)}>🌳 ${t("lib_chip_outdoor")}</button>
        ${this.entries.some((e) => e.live)
          ? html`<button class="fp3d-chip fp3d-chip-f ${this._live ? "on" : ""}" title=${this.x("lib_live_hint")} @click=${() => (this._live = !this._live)}>✨ ${this.x("lib_live")}</button>`
          : nothing}
        ${anyLocked
          ? html`<button
              class="fp3d-chip fp3d-chip-f ${this._locked ? "on" : ""}"
              title=${this.x("lib_locked_hint")}
              @click=${() => {
                this._locked = !this._locked;
                save(STORE_LOCKED, this._locked);
              }}
            >🔒 ${this.x("lib_locked")}</button>`
          : nothing}
      </div>
      ${this.roomHint && this._room === this.roomHint && !this.roomTouched ? html`<p class="fp3d-lib-hint">${t("lib_hint_room")}</p>` : nothing}
      ${!hits.length ? html`<p class="fp3d-lib-hint">${t("furniture_search_none")}</p>` : nothing}
      ${recent.length ? this.section("recent", `🕘 ${t("lib_recent")}`, recent.map(single), searching, true) : nothing}
      ${favs.length ? this.section("fav", `★ ${t("lib_favorites")}`, favs.map(single), searching, true) : nothing}
      ${sections.map((s) => this.section(s.kind, t(`lib_kind_${s.kind}`), s.cards, searching || s.kind === firstOpen, false))}`;
  }

  private section(key: string, title: string, cards: LibraryCard[], searching: boolean, special: boolean) {
    const open = searching || special || this._open.has(key);
    const limit = this._limits.get(key) ?? PAGE;
    const shown = cards.slice(0, limit);
    const count = cards.reduce((n, c) => n + c.entries.length, 0);
    return html`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${open} @click=${() => (special ? undefined : this.toggleOpen(key))}>
        <span class="fp3d-lib-caret">${special ? "" : open ? "▾" : "▸"}</span>${title} <span class="fp3d-lib-count">${count}</span>
      </button>
      ${open
        ? html`<div class="fp3d-lib-grid">${repeat(shown, (c) => c.key, (c) => this.card(c))}</div>
            ${cards.length > limit
              ? html`<button class="fp3d-lib-more" @click=${() => {
                  const next = new Map(this._limits);
                  next.set(key, limit + PAGE * 2);
                  this._limits = next;
                }}>${this.t("lib_more", { n: cards.length - limit })}</button>`
              : nothing}`
        : nothing}`;
  }

  private card(c: LibraryCard) {
    const t = this.t;
    const first = c.entries[0];
    const family = c.entries.length > 1;
    const fav = this._fav.includes(first.key);
    // a family card shows the variant under the pointer (its picture once drawn, the first one meanwhile)
    const shownKey = this._shown.get(first.key);
    const shown = (shownKey && c.entries.find((e) => e.key === shownKey)) || first;
    const locked = first.locked;
    const pic = locked ? (shown.locked?.pic ?? locked.pic) : (this._thumbs.get(shown.type) ?? this._thumbs.get(first.type));
    const badge = `${c.entries.some((e) => e.live) ? "✨" : ""}${first.light ? "💡" : first.electric ? "⚡" : ""}`;
    return html`<div class="fp3d-lc ${family ? "fp3d-lc-family" : ""} ${locked ? "fp3d-lc-locked" : ""}" title=${shown.label} @mouseleave=${() => family && this.showVariant(first.key, null, null)}>
      <button
        class="fp3d-lc-main"
        ?disabled=${!this.admin && !locked}
        @click=${() => this.pick(locked ? shown : first)}
        @mouseenter=${(e: Event) => this.preview(first.type, e.currentTarget as HTMLElement)}
        @focus=${(e: Event) => this.preview(first.type, e.currentTarget as HTMLElement)}
        @mouseleave=${() => this.preview(null, null)}
        @blur=${() => this.preview(null, null)}
      >
        ${this.lite && !locked ? nothing : html`<span class="fp3d-lc-pic" data-key=${first.key}>${pic ? html`<img src=${pic} alt="" loading="lazy" referrerpolicy="no-referrer" @error=${(e: Event) => ((e.target as HTMLElement).style.visibility = "hidden")} class=${(this._thumbs.has(shown.type) ? shown : first).mirror ? "fp3d-lc-mirrored" : ""} />` : html`<span class="fp3d-lc-wait"></span>`}</span>`}
        <span class="fp3d-lc-label">${c.label}${badge ? html` <span class="fp3d-lc-badge">${badge}</span>` : nothing}</span>
        <span class="fp3d-lc-sub">${locked ? html`🔒 ${first.packLabel}${locked.free ? "" : locked.price ? ` · ${locked.price}` : ""}` : html`${family ? t("lib_sizes", { n: c.entries.length }) : sizeText(first.size, this.language)}${first.packLabel ? html` · ${first.packLabel}` : html` · ${t("lib_basic")}`}`}</span>
      </button>
      ${family
        ? html`<div class="fp3d-lc-chips">
            ${c.entries.map(
              (e) => html`<button
                title="${e.label} · ${sizeText(e.size, this.language)}"
                ?disabled=${!this.admin && !locked}
                class="fp3d-lc-chip ${shown.key === e.key && family && shownKey ? "on" : ""}"
                @click=${() => this.pick(e)}
                @mouseenter=${(ev: Event) => this.showVariant(first.key, e, ev.currentTarget as HTMLElement)}
                @focus=${(ev: Event) => this.showVariant(first.key, e, ev.currentTarget as HTMLElement)}
                @mouseleave=${() => this.preview(null, null)}
                @blur=${() => this.preview(null, null)}
              >${e.variant ?? e.label}</button>`,
            )}
          </div>`
        : nothing}
      ${locked ? html`<span class="fp3d-lc-lock" aria-hidden="true">🔒</span>` : html`<button class="fp3d-lc-fav ${fav ? "on" : ""}" title=${fav ? t("lib_fav_remove") : t("lib_fav_add")} aria-label=${fav ? t("lib_fav_remove") : t("lib_fav_add")} @click=${() => this.toggleFav(first.key)}>${fav ? "★" : "☆"}</button>`}
    </div>`;
  }

  /** A locked item large: its picture, its size, the pack it is in with the price, the shop and the bundle. */
  private renderDetail() {
    const e = this._detail;
    const lock = e?.locked;
    if (!e || !lock) return nothing;
    const close = () => (this._detail = null);
    const b = this.bundle;
    return html`<div class="fp3d-lib-detail-back" @click=${close}>
      <div class="fp3d-lib-detail" role="dialog" aria-label=${e.label} @click=${(ev: Event) => ev.stopPropagation()}>
        ${lock.pic ? html`<img src=${lock.pic} alt="" referrerpolicy="no-referrer" />` : nothing}
        <b>${e.label}</b>
        <span class="fp3d-lib-detail-sub">${sizeText(e.size, this.language)} · ${this.x("lib_locked_in", { pack: e.packLabel ?? "" })}${lock.free ? ` · ${this.x("lib_locked_free")}` : lock.price ? ` · ${lock.price}` : ""}</span>
        <span class="fp3d-lib-detail-note">${this.x("lib_locked_note")}</span>
        <div class="fp3d-lib-detail-actions">
          ${lock.url ? html`<a class="fp3d-lib-detail-shop" href=${lock.url} target="_blank" rel="noopener">${this.x("lib_locked_shop")}</a>` : nothing}
          <button class="fp3d-lib-detail-close" @click=${close}>${this.x("lib_locked_close")}</button>
        </div>
        ${b && !lock.free ? html`<a class="fp3d-lib-detail-bundle" href=${b.url} target="_blank" rel="noopener">${this.x("lib_locked_bundle", { name: b.name, price: b.price })}</a>` : nothing}
      </div>
    </div>`;
  }

  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-panel, #0d1424);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 8px 10px;
        margin: 6px 0 8px;
      }
      .fp3d-lib-rooms,
      .fp3d-lib-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 6px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 3px 9px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-chip.on {
        background: var(--fp3d-accent);
        color: #041018;
        border-color: var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-chip-f {
        font-size: 11px;
      }
      .fp3d-lib-hint {
        margin: 2px 0 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-head {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin: 10px 0 4px;
        padding: 4px 0;
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-bottom: 1px solid var(--fp3d-line);
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lib-caret {
        width: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-lib-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
        gap: 6px;
      }
      .fp3d-lc {
        position: relative;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        overflow: hidden;
      }
      .fp3d-lc:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-lc-main {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2px;
        padding: 6px 6px 5px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lc-main:disabled {
        cursor: default;
        opacity: 0.6;
      }
      .fp3d-lc-pic {
        display: block;
        height: 64px;
        border-radius: 6px;
        background: radial-gradient(ellipse at 50% 70%, rgba(80, 200, 255, 0.12), transparent 70%);
      }
      .fp3d-lc-pic img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .fp3d-lc-pic img.fp3d-lc-mirrored {
        transform: scaleX(-1);
      }
      .fp3d-lc-wait {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);
      }
      .fp3d-lc-label {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.25;
        padding-right: 16px;
      }
      .fp3d-lc-badge {
        font-size: 10px;
      }
      .fp3d-lc-sub {
        font-size: 10.5px;
        color: var(--fp3d-muted);
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-lc-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        padding: 0 6px 6px;
      }
      .fp3d-lc-chip {
        font: inherit;
        font-size: 11px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        padding: 2px 6px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-lc-chip:hover,
      .fp3d-lc-chip.on {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lc-fav {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 22px;
        height: 22px;
        padding: 0;
        font-size: 14px;
        line-height: 22px;
        color: var(--fp3d-muted);
        background: rgba(4, 16, 24, 0.55);
        border: 0;
        border-radius: 50%;
        cursor: pointer;
      }
      .fp3d-lc-fav.on,
      .fp3d-lc-fav:hover {
        color: #ffd166;
      }
      .fp3d-lc-locked .fp3d-lc-pic img {
        opacity: 0.8;
        filter: saturate(0.85);
      }
      .fp3d-lc-locked .fp3d-lc-label {
        color: var(--fp3d-muted);
      }
      .fp3d-lc-lock {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 22px;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        background: rgba(4, 16, 24, 0.55);
        border-radius: 50%;
      }
      .fp3d-lib-detail-back {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.6);
      }
      .fp3d-lib-detail {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: min(380px, 100%);
        padding: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-panel, #0d1424);
        border: 1px solid var(--fp3d-accent);
        border-radius: 14px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-lib-detail img {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: contain;
        border-radius: 10px;
        background: radial-gradient(ellipse at 50% 70%, rgba(80, 200, 255, 0.14), transparent 70%);
      }
      .fp3d-lib-detail-sub,
      .fp3d-lib-detail-note {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-detail-actions {
        display: flex;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-lib-detail-shop,
      .fp3d-lib-detail-close {
        flex: 1;
        font: inherit;
        font-size: 13px;
        padding: 8px;
        border-radius: 8px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-lib-detail-shop {
        color: #041018;
        background: var(--fp3d-accent);
        border: 1px solid var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-lib-detail-close {
        color: var(--fp3d-text);
        background: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-lib-detail-bundle {
        font-size: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-more {
        display: block;
        width: 100%;
        margin: 6px 0 2px;
        padding: 6px;
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-accent);
        background: none;
        border: 1px dashed var(--fp3d-line);
        border-radius: 8px;
        cursor: pointer;
      }
    `,
  ];
}

if (!customElements.get("fp3d-library")) customElements.define("fp3d-library", FurnitureLibrary);
