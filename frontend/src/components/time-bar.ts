// Time travel: the time bar at the bottom (previous event, play/pause, next event, the day or week as a track
// with hours, nights, gaps and event markers, the range, the sheet, the speed and the way back to live), the
// big clock at the top, the amber frame that says "this is the past" and the side sheet with the events,
// "while you were away" and the day summary. It lies over the stage; only its own parts take touches.
// The clock and the playhead follow the replay by writing to the DOM directly – no re-render per tick.

import { css, html, LitElement, nothing, svg } from "lit";
import { DISCORD_URL } from "../beta.ts";
import type { Session } from "../timetravel/entry.ts";
import { CATEGORY, clusterEvents, groupByHour, type Category, type Cluster, type EventKind, type TTEvent } from "../timetravel/events.ts";
import { parseMoment } from "../timetravel/playback.ts";
import type { AwayRow, DaySummary, RoomDay } from "../timetravel/summary.ts";
import { dayStart, hourOf, hourStart, zoneOption } from "../timetravel/tz.ts";

const ICONS = {
  prev: "M6 6h2v12H6zM20 6v12l-10-6z",
  play: "M8 5v14l11-7z",
  pause: "M7 5h4v14H7zM13 5h4v14h-4z",
  next: "M16 6h2v12h-2zM4 6v12l10-6z",
  list: "M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z",
};
const icon = (d: string) => svg`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${d} /></svg>`;

/** Marker colours: danger red, water blue, rain light blue, doors amber, motion violet, machines green, energy yellow. */
const COLOR: Record<EventKind, string> = {
  alarm: "#ff3b4f",
  smoke: "#ff3b4f",
  outage: "#ffc83a",
  gas: "#ff3b4f",
  co: "#ff3b4f",
  water: "#3aa0ff",
  rain: "#6cc8ff",
  door: "#ffb020",
  lock: "#ffb020",
  garage: "#ffb020",
  window: "#ffd27a",
  motion: "#b48cff",
  washer: "#4dff9a",
  robot_start: "#4dff9a",
  robot_done: "#4dff9a",
  battery_full: "#ffe27a",
  pv_peak: "#ffe27a",
};

const AWAY_COLOR: Record<AwayRow["kind"], string> = {
  alarm: "#ff3b4f",
  door: "#ffb020",
  window: "#ffd27a",
  window_open: "#6cc8ff",
  light_on: "#ffe27a",
  motion: "#b48cff",
  appliance: "#4dff9a",
};

type Sheet = "events" | "away" | "day";

export class Fp3dTimeBar extends LitElement {
  static properties = {
    session: { attribute: false },
    _w: { state: true },
    _label: { state: true },
    _toast: { state: true },
    _sheet: { state: true },
    _filters: { state: true },
    _awayFrom: { state: true },
    _compare: { state: true },
  };

  declare session: Session | null;
  /** Width of the track (px): markers, ticks and the playhead are placed with it. */
  private declare _w: number;
  /** A long-pressed marker's events, shown above it. */
  private declare _label: { x: number; lines: string[] } | null;
  /** "Read-only" note after something tried to switch. */
  private declare _toast: boolean;
  /** The side sheet and its tab (null: closed). */
  private declare _sheet: Sheet | null;
  /** The event categories the sheet lists. */
  private declare _filters: ReadonlySet<Category>;
  /** "While you were away": the chosen start and end (null: the suggestion). */
  private declare _awayFrom: [number, number] | null;
  /** The day summary next to the day before. */
  private declare _compare: boolean;
  private unlisten: (() => void) | null = null;
  private listened: Session | null = null;
  private resize: ResizeObserver | null = null;
  private sig = "";
  private dragging = false;
  private scrubAt = 0;
  private scrubTimer: ReturnType<typeof setTimeout> | undefined;
  private holdTimer: ReturnType<typeof setTimeout> | undefined;
  private held = false;
  private labelTimer: ReturnType<typeof setTimeout> | undefined;
  private toastTimer: ReturnType<typeof setTimeout> | undefined;
  private clusters: Cluster[] = [];
  private clusterSig = "";
  private awayOffer: { version: number; offer: [number, number] | null } | null = null;
  private awayCache: { key: string; rows: AwayRow[] } | null = null;

  constructor() {
    super();
    this.session = null;
    this._w = 0;
    this._label = null;
    this._toast = false;
    this._sheet = null;
    this._filters = new Set<Category>(["safety", "openings", "devices", "energy"]);
    this._awayFrom = null;
    this._compare = false;
  }

  private readonly onBlocked = () => {
    this._toast = true;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => (this._toast = false), 2600);
  };

  private readonly onKey = (e: KeyboardEvent) => {
    const s = this.session;
    const target = e.composedPath()[0] as HTMLElement | undefined;
    if (!s?.playback || e.ctrlKey || e.metaKey || e.altKey || (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) || target?.isContentEditable) return;
    if (e.key === " ") {
      // a focused button takes the space itself
      if (target?.tagName === "BUTTON") return;
      e.preventDefault();
      s.toggle();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      s.seek(s.playback.t + (e.key === "ArrowLeft" ? -1 : 1) * (e.shiftKey ? 3600000 : 300000));
    }
  };

  /** Esc closes the sheet first (before the host leaves the time travel). */
  private readonly onEscape = (e: KeyboardEvent) => {
    if (e.key !== "Escape" || !this._sheet) return;
    e.stopImmediatePropagation();
    this._sheet = null;
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("fp3d-replay-blocked", this.onBlocked);
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keydown", this.onEscape, true);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("fp3d-replay-blocked", this.onBlocked);
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keydown", this.onEscape, true);
    this.unlisten?.();
    this.unlisten = null;
    this.listened = null;
    this.resize?.disconnect();
    this.resize = null;
    for (const t of [this.scrubTimer, this.holdTimer, this.labelTimer, this.toastTimer]) clearTimeout(t);
  }

  protected updated(): void {
    if (this.session !== this.listened) {
      this.unlisten?.();
      this.listened = this.session;
      this.unlisten = this.session ? this.session.listen(() => this.onTick()) : null;
    }
    const track = this.renderRoot.querySelector<HTMLElement>(".track");
    if (track && !this.resize && typeof ResizeObserver === "function") {
      this.resize = new ResizeObserver((entries) => {
        const w = Math.round(entries[0]?.contentRect.width ?? 0);
        if (w !== this._w) this._w = w;
      });
      this.resize.observe(track);
    }
    this.onTick();
  }

  /** What needs a real render (not just the clock and the playhead). */
  private signature(): string {
    const s = this.session;
    const pb = s?.playback;
    // the day summary follows the playhead's day; the sheet's toggles their state
    const day = this._sheet === "day" && pb ? dayStart(pb.t) : 0;
    return `${s?.state}|${s?.error}|${Math.round((s?.progress ?? 0) * 20)}|${pb?.playing}|${pb?.speed}|${s?.events.length}|${s?.allEvents.length}|${s?.range}|${s?.maxDays}|${s?.loadingDay}|${s?.full}|${s?.version}|${s?.atNow}|${s?.follow}|${s?.stopImportant}|${day}`;
  }

  /** Every change of the session: the clock and the playhead directly; a re-render only when needed. */
  private onTick(): void {
    const sig = this.signature();
    if (sig !== this.sig) {
      this.sig = sig;
      this.requestUpdate();
    }
    const s = this.session;
    const pb = s?.playback;
    if (!s || !pb) return;
    const time = this.renderRoot.querySelector<HTMLElement>(".clock-time");
    const ago = this.renderRoot.querySelector<HTMLElement>(".clock-ago");
    if (time) time.textContent = this.clockText(pb.t);
    if (ago) ago.textContent = this.agoText(pb.t);
    if (!this.dragging) this.placeHead(this.xOf(pb.t));
  }

  private placeHead(x: number): void {
    const head = this.renderRoot.querySelector<HTMLElement>(".head");
    if (head) head.style.transform = `translateX(${x.toFixed(1)}px)`;
  }

  private get language(): string {
    return this.session?.opts.live.language ?? navigator.language;
  }

  private xOf(t: number): number {
    const s = this.session;
    if (!s || !this._w) return 0;
    return ((t - s.start) / (s.end - s.start)) * this._w;
  }

  private tOf(x: number): number {
    const s = this.session!;
    return s.start + (Math.min(this._w, Math.max(0, x)) / Math.max(1, this._w)) * (s.end - s.start);
  }

  private weekday(t: number): string {
    return new Date(t).toLocaleDateString(this.language, { weekday: "short", ...zoneOption() }).replace(/\.$/, "");
  }

  /** "Di 07:42": weekday and time in the user's language. */
  private clockText(t: number): string {
    return `${this.weekday(t)} ${this.time(t)}`;
  }

  /** "vor 3 h 12 min", "vor 2 T 3 h". */
  private agoText(t: number): string {
    const s = this.session!;
    const min = Math.round((s.end - t) / 60000);
    if (min < 1) return s.t("tt_now");
    return s.t("tt_ago", { d: this.duration(min * 60000) });
  }

  /** A duration: "45 min", "3 h 12 min", "2 T 3 h". */
  private duration(ms: number): string {
    const s = this.session!;
    const min = Math.round(ms / 60000);
    const d = Math.floor(min / 1440);
    const h = Math.floor((min % 1440) / 60);
    const m = min % 60;
    if (d) return `${s.t("tt_days", { n: d })}${h ? ` ${h} h` : ""}`;
    return h ? `${h} h${m ? ` ${m} min` : ""}` : `${m} min`;
  }

  private name(entity: string): string {
    const s = this.session!;
    return s.names.get(entity) ?? (s.opts.live.states[entity]?.attributes.friendly_name as string | undefined) ?? entity;
  }

  private eventText(e: Pick<TTEvent, "kind" | "entity">): string {
    return this.session!.t(`tt_ev_${e.kind}`, { name: this.name(e.entity) });
  }

  private time(t: number): string {
    return new Date(t).toLocaleTimeString(this.language, { hour: "2-digit", minute: "2-digit", ...zoneOption() });
  }

  // ---- scrubbing on the track ----

  private onDown(e: PointerEvent): void {
    const s = this.session;
    if (!s?.playback || (e.target as Element).closest(".mark")) return;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    this.dragging = true;
    this._label = null;
    s.pause();
    this.scrub(e, true);
  }

  private onMove(e: PointerEvent): void {
    if (this.dragging) this.scrub(e, false);
  }

  private onUp(e: PointerEvent): void {
    if (!this.dragging) return;
    this.scrub(e, true);
    this.dragging = false;
  }

  /** The playhead follows the finger at once; the house follows a few times a second (fewer on a tablet). */
  private scrub(e: PointerEvent, last: boolean): void {
    const s = this.session!;
    const track = this.renderRoot.querySelector<HTMLElement>(".track")!;
    const x = e.clientX - track.getBoundingClientRect().left;
    // not before the loaded days
    const t = Math.max(s.playback?.start ?? s.start, this.tOf(x));
    this.placeHead(this.xOf(t));
    const time = this.renderRoot.querySelector<HTMLElement>(".clock-time");
    if (time) time.textContent = this.clockText(t);
    clearTimeout(this.scrubTimer);
    const gap = s.opts.spec.low || s.opts.quality === "low" ? 160 : 70;
    const now = performance.now();
    if (last || now - this.scrubAt >= gap) {
      this.scrubAt = now;
      s.seek(t);
    } else
      this.scrubTimer = setTimeout(() => {
        this.scrubAt = performance.now();
        s.seek(t);
      }, gap);
  }

  // ---- event markers: a tap jumps there (paused), a long press tells what happened ----

  private markDown(c: Cluster): void {
    this.held = false;
    clearTimeout(this.holdTimer);
    this.holdTimer = setTimeout(() => {
      this.held = true;
      this.showLabel(c);
    }, 450);
  }

  private markUp(): void {
    clearTimeout(this.holdTimer);
  }

  private markClick(c: Cluster): void {
    if (this.held) {
      this.held = false;
      return;
    }
    this.session?.seek(c.t, true);
    this.showLabel(c, 2500);
  }

  private showLabel(c: Cluster, ms = 4500): void {
    this._label = { x: c.x, lines: c.events.slice(0, 4).map((e) => `${this.time(e.t)} · ${this.eventText(e)}`).concat(c.events.length > 4 ? [`+${c.events.length - 4}`] : []) };
    clearTimeout(this.labelTimer);
    this.labelTimer = setTimeout(() => (this._label = null), ms);
  }

  // ---- rendering ----

  private renderTrack() {
    const s = this.session!;
    const w = this._w;
    if (!w) return nothing;
    const week = s.range === "7d";
    const pct = (t: number) => `${(((t - s.start) / (s.end - s.start)) * 100).toFixed(3)}%`;
    const band = (a: number, b: number, cls: string, label?: string) =>
      b > a
        ? html`<i class=${cls} style="left:${pct(Math.max(a, s.start))};width:calc(${pct(Math.min(b, s.end))} - ${pct(Math.max(a, s.start))})">${label ? html`<span>${label}</span>` : nothing}</i>`
        : nothing;
    const oldest = s.timeline?.oldest ?? null;
    const loaded = s.playback?.start ?? s.start;
    const recorder = s.recorderStart;
    // the days not loaded (yet): fetching, beyond the recorder's limit, or beyond the memory limit
    let before: unknown = nothing;
    if (loaded > s.start + 60000) {
      if (s.loadingDay !== null) before = band(s.start, loaded, "loading", s.t("tt_loading_day", { day: this.weekday(s.loadingDay + 12 * 3600000) }));
      else if (recorder !== null && recorder > s.start) before = band(s.start, loaded, "nodata", s.t("tt_recorder_days", { n: s.timeline?.keepDays ?? 0 }));
      else before = band(s.start, loaded, "nodata", s.full ? s.t("tt_memory_full") : "");
    }
    // ticks: hours in a day (a label every few hours), every few hours in the week; the weekday at midnight
    const hours = week ? (w / (s.end - s.start)) * 3600000 * 3 >= 12 ? 3 : 6 : 1;
    const every = w >= 640 ? 3 : 6;
    const ticks = [];
    // the hours of the time zone in use (the profile's: Home Assistant's or the browser's)
    let at = hourStart(s.start);
    if (at < s.start) at += 3600000;
    for (; at <= s.end; at += 3600000) {
      const h = hourOf(at);
      if (h % hours) continue;
      const midnight = h === 0;
      const label = midnight
        ? week
          ? `${this.weekday(at)} ${new Date(at).toLocaleDateString(this.language, { day: "numeric", ...zoneOption() }).replace(/\.$/, "")}.`
          : this.weekday(at)
        : !week && h % every === 0
          ? this.time(at)
          : "";
      ticks.push(html`<b class="tick ${midnight ? "tick-day" : label ? "tick-major" : ""}" style="left:${pct(at)}">${label ? html`<span>${label}</span>` : nothing}</b>`);
    }
    // only the events on the track (a week loaded before stays in memory in the 24-hour view)
    const sig = `${w}|${s.events.length}|${s.start}|${s.end}|${s.version}|${loaded}`;
    if (sig !== this.clusterSig) {
      this.clusterSig = sig;
      this.clusters = clusterEvents(s.shownEvents(), (t) => this.xOf(t), w < 500 ? 18 : 14);
    }
    return html`${s.nights.map(([a, b]) => band(a, b, "night"))} ${before} ${oldest !== null && oldest > loaded ? band(loaded, oldest, "nodata") : nothing}
      ${s.gaps.map(([a, b]) => band(a, b, "gap"))} ${ticks}
      ${this.clusters.map(
        (c) => html`<button
          class="mark ${c.events.length > 1 ? "mark-many" : ""}"
          style="left:${c.x.toFixed(1)}px;--c:${COLOR[c.top.kind]}"
          title=${c.events.map((e) => `${this.time(e.t)} ${this.eventText(e)}`).join("\n")}
          aria-label=${`${this.time(c.t)} ${this.eventText(c.top)}`}
          @pointerdown=${() => this.markDown(c)}
          @pointerup=${() => this.markUp()}
          @pointerleave=${() => this.markUp()}
          @contextmenu=${(e: Event) => e.preventDefault()}
          @click=${() => this.markClick(c)}
        >
          ${c.events.length > 1 ? html`<span>${c.events.length}</span>` : nothing}
        </button>`,
      )}
      <div class="head" style="transform:translateX(${this.xOf(s.playback?.t ?? s.end).toFixed(1)}px)"></div>
      ${this._label ? html`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map((l) => html`<span>${l}</span>`)}</div>` : nothing}`;
  }

  // ---- the side sheet ----

  private toggleSheet(tab: Sheet = "events"): void {
    this._sheet = this._sheet === tab || (this._sheet && tab === "events") ? null : tab;
  }

  private toggleFilter(c: Category): void {
    const next = new Set(this._filters);
    if (next.has(c)) next.delete(c);
    else next.add(c);
    this._filters = next;
  }

  private where(entity: string): string {
    return this.session!.roomOf.get(entity)?.name ?? "";
  }

  private renderEvents() {
    const s = this.session!;
    const t = s.t;
    const cats: Category[] = ["safety", "openings", "devices", ...(s.energy ? (["energy"] as Category[]) : [])];
    const groups = groupByHour(
      s.shownEvents(true).filter((e) => s.energy || CATEGORY[e.kind] !== "energy"),
      this._filters,
    );
    let shown = 0;
    return html`<div class="filters">
        ${cats.map((c) => html`<button class="fchip" aria-pressed=${this._filters.has(c)} @click=${() => this.toggleFilter(c)}>${t(`tt_f_${c}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${s.follow} @change=${(e: Event) => s.setFollow((e.target as HTMLInputElement).checked)} />${t("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${s.stopImportant} @change=${(e: Event) => s.setStopImportant((e.target as HTMLInputElement).checked)} />${t("tt_stop")}</label>
      ${groups.length
        ? groups.map((g) => {
            // a long week stays light: at most 300 rows
            if (shown >= 300) return nothing;
            shown += g.events.length;
            return html`<h4>${this.clockText(g.hour)}</h4>
              ${g.events.map((e) => this.row(COLOR[e.kind], this.time(e.t), this.eventText(e), this.where(e.entity), () => s.goTo(e)))}`;
          })
        : html`<p class="none">${t("tt_no_events")}</p>`}`;
  }

  private row(color: string, time: string, text: string, where: string, go: () => void) {
    return html`<button class="row" @click=${go}>
      <i style="background:${color}"></i><time>${time}</time><span>${text}${where ? html`<small>${where}</small>` : nothing}</span>
    </button>`;
  }

  private awayText(r: AwayRow): string {
    const t = this.session!.t;
    const name = this.name(r.entity);
    switch (r.kind) {
      case "alarm":
      case "appliance":
        return this.eventText({ kind: r.event ?? "alarm", entity: r.entity });
      case "door":
      case "window":
        return t("tt_away_door", { name, n: r.count });
      case "motion":
        return t("tt_away_motion", { name, n: r.count });
      case "light_on":
        return t("tt_away_light", { name, d: this.duration(r.ms) });
      case "window_open":
        return t("tt_away_open", { name, d: this.duration(r.ms) });
    }
  }

  private renderAway() {
    const s = this.session!;
    const t = s.t;
    const pb = s.playback!;
    // the suggestion: a quiet stretch of the house, else since the last time travel, else the last three hours
    if (this.awayOffer?.version !== s.version) this.awayOffer = { version: s.version, offer: s.awayOffer() };
    const offer = this.awayOffer.offer;
    const [from, to] = this._awayFrom ?? offer ?? [s.lastClosed !== null && s.lastClosed >= pb.start ? s.lastClosed : Math.max(pb.start, s.end - 3 * 3600000), s.end];
    const key = `${s.version}|${from}|${to}`;
    if (this.awayCache?.key !== key) this.awayCache = { key, rows: s.away(from, to) };
    const rows = this.awayCache.rows;
    const pick = (span: [number, number]) => (this._awayFrom = span);
    const span = (a: number, b: number) => `${this.clockText(a)} – ${b >= s.end - 60000 ? t("tt_now") : this.clockText(b)}`;
    const custom = (e: Event) => {
      const at = parseMoment((e.target as HTMLInputElement).value, s.end);
      if (at !== null) pick([Math.max(pb.start, at), s.end]);
    };
    return html`<p class="since">${t("tt_away_since")}:</p>
      <div class="filters">
        ${s.lastClosed !== null && s.lastClosed >= pb.start
          ? html`<button class="fchip" aria-pressed=${from === s.lastClosed} @click=${() => pick([s.lastClosed!, s.end])}>${t("tt_away_last")}</button>`
          : nothing}
        ${offer ? html`<button class="fchip" aria-pressed=${from === offer[0] && to === offer[1]} @click=${() => pick(offer)}>${t("tt_away_quiet", { from: this.time(offer[0]), to: this.time(offer[1]) })}</button>` : nothing}
        <input class="when" type="time" aria-label=${t("tt_away_since")} @change=${custom} />
      </div>
      <h4>${span(from, to)}</h4>
      ${rows.length
        ? rows.slice(0, 200).map((r) => this.row(AWAY_COLOR[r.kind], this.time(r.t), this.awayText(r), this.where(r.entity), () => s.goTo(r)))
        : html`<p class="none">${t("tt_away_none")}</p>`}`;
  }

  private renderDay() {
    const s = this.session!;
    const t = s.t;
    const pb = s.playback!;
    const day = dayStart(pb.t);
    const sum = s.daySummary(day);
    const prevDay = dayStart(day - 12 * 3600000);
    const prev = this._compare ? s.daySummary(prevDay) : null;
    // the day before is fetched when the range does not reach it (after this render: it tells the bar)
    if (this._compare && (!prev || prev.from > prevDay + 60000)) queueMicrotask(() => s.ensureLoaded(prevDay));
    // a day the loaded range only partly covers says so (it would compare a part with a whole day)
    const partial = (d: DaySummary | null, start: number) => (d && d.from > start + 60000 ? t("tt_day_partial", { time: this.time(d.from) }) : "");
    const num = (v: number, digits = 1) => v.toLocaleString(this.language, { maximumFractionDigits: digits, minimumFractionDigits: digits });
    const hrs = (ms: number) => (ms >= 60000 ? `${num(ms / 3600000)} h` : "–");
    const temp = (r: RoomDay | null | undefined) => (r && r.tMin !== null && r.tMax !== null ? `${num(r.tMin)}–${num(r.tMax)}°` : "–");
    const cells = (r: RoomDay | null | undefined) => html`<td>${r ? hrs(r.lightMs) : "–"}</td><td>${r ? hrs(r.windowMs) : "–"}</td><td>${r ? hrs(r.heatMs) : "–"}</td><td>${temp(r)}</td>`;
    const date = new Date(day).toLocaleDateString(this.language, { weekday: "short", day: "numeric", month: "numeric", ...zoneOption() });
    const energy = (d: DaySummary | null) => d?.energy ?? null;
    const e = energy(sum);
    const pe = energy(prev);
    const kwh = (v: number | undefined) => (v === undefined ? "–" : `${num(v)} kWh`);
    const pctOf = (v: number | null | undefined) => (v === null || v === undefined ? "–" : `${Math.round(v * 100)} %`);
    const beforeNote = this._compare ? (prev ? partial(prev, prevDay) : s.loadingDay !== null ? t("tt_loading") : "") : "";
    return html`<h4>${t("tt_day_title", { day: date })}</h4>
      ${partial(sum, day) ? html`<p class="since">${partial(sum, day)}</p>` : nothing}
      ${beforeNote ? html`<p class="since">${t("tt_day_before")}: ${beforeNote}</p>` : nothing}
      <div class="filters">
        <button class="fchip" @click=${() => s.yesterday()}>⟲ ${t("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${() => (this._compare = !this._compare)}>${t("tt_day_compare")}</button>
      </div>
      ${sum && (sum.rooms.length || e)
        ? html`${sum.rooms.length
              ? html`<table>
                  <thead>
                    <tr><th></th><th>${t("tt_day_light")}</th><th>${t("tt_day_window")}</th><th>${t("tt_day_heat")}</th><th>${t("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${sum.rooms.map(
                      (r) => html`<tr><th>${r.name}</th>${cells(r)}</tr>
                        ${prev ? html`<tr class="before"><th>${t("tt_day_before")}</th>${cells(prev.rooms.find((p) => p.roomId === r.roomId))}</tr>` : nothing}`,
                    )}
                  </tbody>
                </table>`
              : nothing}
            ${e
              ? html`<div class="energy">
                  ${(
                    [
                      ["tt_day_pv", kwh(e.pv), kwh(pe?.pv)],
                      ["tt_day_use", kwh(e.use), kwh(pe?.use)],
                      ["tt_day_import", kwh(e.imp), kwh(pe?.imp)],
                      ["tt_day_export", kwh(e.exp), kwh(pe?.exp)],
                      ["tt_day_self", pctOf(e.self), pctOf(pe?.self)],
                    ] as const
                  ).map(([k, v, b]) => html`<span>${t(k)}</span><b>${v}</b>${prev ? html`<em>${b}</em>` : nothing}`)}
                </div>`
              : nothing}`
        : html`<p class="none">${t("tt_day_none")}</p>`}`;
  }

  private renderSheet() {
    const s = this.session!;
    const t = s.t;
    const tab = this._sheet!;
    const tabs: Sheet[] = ["events", "away", "day"];
    return html`<aside class="sheet" role="dialog" aria-label=${t("tt_sheet")}>
      <header>
        ${tabs.map((k) => html`<button class="tab" aria-pressed=${tab === k} title=${k === "away" ? t("tt_away_title") : nothing} @click=${() => (this._sheet = k)}>${t(k === "events" ? "tt_tab_events" : k === "away" ? "tt_tab_away" : "tt_tab_day")}</button>`)}
        <button class="x" title=${t("tt_close")} aria-label=${t("tt_close")} @click=${() => (this._sheet = null)}>×</button>
      </header>
      <div class="body">${tab === "events" ? this.renderEvents() : tab === "away" ? this.renderAway() : this.renderDay()}</div>
    </aside>`;
  }

  protected render() {
    const s = this.session;
    if (!s) return nothing;
    const t = s.t;
    const pb = s.playback;
    const ready = s.state === "ready" && !!pb;
    const error =
      s.state === "error"
        ? s.error === "not_unlocked"
          ? t("tt_locked")
          : s.error === "no_recorder"
            ? t("tt_no_recorder")
            : s.error === "unknown_command"
              ? t("tt_restart")
              : t("tt_error", { error: s.error ?? "?" })
        : null;
    const perHour = pb ? 3600 / pb.speed : 10;
    const minutes = Math.round((s.end - s.start) / 60000);
    return html`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")} <a class="beta" href=${DISCORD_URL} target="_blank" rel="noopener" title=${t("beta_bar")}>🧪 BETA</a></span>
        ${ready
          ? // filled by onTick (written directly, many times a second while playing – no binding inside)
            html`<b class="clock-time"></b><span class="clock-ago"></span>`
          : html`<span class="clock-msg">${error ?? `${t("tt_loading")} ${Math.round(s.progress * 100)} %`}</span>`}
      </div>
      ${this._toast ? html`<div class="toast" role="alert">${t("tt_readonly")}</div>` : nothing}
      ${ready && this._sheet ? this.renderSheet() : nothing}
      <div class="bar">
        <button class="btn prev" ?disabled=${!ready} title=${t("tt_prev")} aria-label=${t("tt_prev")} @click=${() => s.step(-1)}>${icon(ICONS.prev)}</button>
        <button class="btn play" ?disabled=${!ready} title=${t(pb?.playing ? "tt_pause" : "tt_play")} aria-label=${t(pb?.playing ? "tt_pause" : "tt_play")} @click=${() => s.toggle()}>
          ${icon(pb?.playing ? ICONS.pause : ICONS.play)}
        </button>
        <button class="btn next" ?disabled=${!ready} title=${t("tt_next")} aria-label=${t("tt_next")} @click=${() => s.step(1)}>${icon(ICONS.next)}</button>
        <div
          class="track ${ready ? "" : "track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${t("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${minutes}
          aria-valuenow=${pb ? Math.round((pb.t - s.start) / 60000) : minutes}
          @pointerdown=${(e: PointerEvent) => this.onDown(e)}
          @pointermove=${(e: PointerEvent) => this.onMove(e)}
          @pointerup=${(e: PointerEvent) => this.onUp(e)}
          @pointercancel=${(e: PointerEvent) => this.onUp(e)}
        >
          ${ready ? this.renderTrack() : error ? html`<em class="msg">${error}</em>` : html`<i class="progress" style="width:${Math.round(s.progress * 100)}%"></i>`}
        </div>
        ${error && s.error !== "not_unlocked" ? html`<button class="chip" @click=${() => void s.load()}>${t("tt_retry")}</button>` : nothing}
        <button class="chip range" ?disabled=${!ready} title=${t("tt_range_hint")} aria-label=${t("tt_range_hint")} @click=${() => s.setRange(s.range === "7d" ? "24h" : "7d")}>
          ${s.range === "7d" ? t("tt_days", { n: s.maxDays }) : "24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!ready} aria-pressed=${!!this._sheet} title=${t("tt_sheet")} aria-label=${t("tt_sheet")} @click=${() => this.toggleSheet()}>${icon(ICONS.list)}</button>
        <button class="chip speed" ?disabled=${!ready} title=${t("tt_speed", { s: perHour >= 60 ? "1 min" : perHour >= 1 ? `${Math.round(perHour)} s` : `${perHour.toFixed(2).replace(/0$/, "")} s` })} @click=${() => s.nextSpeed()}>
          ${pb?.speed ?? 360}×
        </button>
        <button class="chip live ${s.atNow ? "live-now" : ""}" title=${t("tt_live_hint")} @click=${() => s.exit()}>
          <i></i>${s.atNow ? `${t("tt_now_reached")} · ${t("tt_live")}` : t("tt_live")}
        </button>
      </div>`;
  }

  static styles = css`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      container-type: size;
      container-name: fp3dtt;
      font-family: var(--fp3d-font, system-ui, sans-serif);
      color: var(--fp3d-text, #e6eefc);
      --tt: #ffb020;
    }
    .frame {
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 3px var(--tt);
      border-radius: inherit;
    }
    .clock {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      justify-items: center;
      gap: 1px;
      padding: 6px 16px 7px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      white-space: nowrap;
      max-width: calc(100% - 260px);
    }
    .badge {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--tt);
    }
    .beta {
      margin-left: 4px;
      color: inherit;
      opacity: 0.8;
      text-decoration: none;
      pointer-events: auto;
    }
    .clock-time {
      font-family: var(--fp3d-title-font, inherit);
      font-size: 24px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .clock-ago,
    .clock-msg {
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: normal;
      text-align: center;
    }
    .toast,
    .label {
      position: absolute;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      z-index: 3;
      padding: 7px 12px;
      border-radius: 10px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      font-size: 13px;
    }
    .toast {
      left: 50%;
      transform: translateX(-50%);
      color: var(--tt);
      font-weight: 600;
    }
    .label {
      /* above its marker on the track, kept within the track */
      bottom: calc(100% + 12px);
      left: clamp(0px, calc(var(--x) - 120px), calc(100% - 240px));
      width: 240px;
      box-sizing: border-box;
      display: grid;
      gap: 3px;
      pointer-events: none;
    }
    .bar {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 8px;
      height: calc(var(--fp3d-tt-h, 64px) - 16px);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      touch-action: none;
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .btn {
      flex: none;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 10px;
      background: transparent;
    }
    .btn:hover:not(:disabled),
    .sheet-btn[aria-pressed="true"] {
      background: rgba(255, 255, 255, 0.07);
    }
    .sheet-btn[aria-pressed="true"] {
      color: var(--tt);
    }
    .play {
      background: var(--tt);
      color: #1a1200;
    }
    .play:hover:not(:disabled) {
      background: var(--tt);
      filter: brightness(1.1);
    }
    .chip {
      flex: none;
      height: 32px;
      padding: 0 11px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 13px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .live {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-color: var(--fp3d-accent, #37e0ff);
    }
    .live i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ff3b4f;
    }
    .live-now {
      background: var(--fp3d-accent, #37e0ff);
      color: #04121c;
    }
    .track {
      position: relative;
      flex: 1;
      min-width: 0;
      height: 34px;
      margin: 0 4px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      outline-offset: 2px;
    }
    .track-wait {
      cursor: default;
      overflow: hidden;
    }
    .track i {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    .track i span {
      position: absolute;
      left: 4px;
      bottom: 2px;
      font-size: 10px;
      font-style: normal;
      white-space: nowrap;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
    }
    .loading {
      background: repeating-linear-gradient(135deg, rgba(255, 176, 32, 0.22) 0 6px, transparent 6px 12px);
    }
    .loading span {
      color: var(--tt) !important;
    }
    .gap {
      background: repeating-linear-gradient(135deg, rgba(160, 170, 190, 0.32) 0 4px, transparent 4px 8px);
    }
    .progress {
      left: 0;
      background: rgba(255, 176, 32, 0.4);
      transition: width 0.2s;
    }
    .msg {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 12px;
      font-style: normal;
      color: var(--fp3d-muted, #8a9bb8);
      overflow: hidden;
    }
    .tick {
      position: absolute;
      top: 0;
      width: 1px;
      height: 5px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 9px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: 22px;
      font-size: 10px;
      line-height: 11px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 6px;
      width: 14px;
      height: 14px;
      margin-left: -7px;
      padding: 0;
      border-radius: 50%;
      border: 2px solid var(--fp3d-chrome-solid, #0f1729);
      background: var(--c);
      box-shadow: 0 0 0 1px var(--c);
      z-index: 1;
    }
    .mark-many {
      width: 18px;
      height: 18px;
      margin-left: -9px;
      top: 4px;
    }
    .mark span {
      display: block;
      font-size: 9px;
      font-weight: 800;
      line-height: 14px;
      color: #0a0f1c;
    }
    .head {
      position: absolute;
      left: -1px;
      top: -5px;
      bottom: -5px;
      width: 3px;
      border-radius: 2px;
      background: var(--tt);
      box-shadow: 0 0 6px var(--tt);
      pointer-events: none;
      z-index: 2;
      will-change: transform;
    }
    .head::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -6px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--tt);
    }
    .sheet {
      position: absolute;
      top: 78px;
      right: 8px;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      width: min(380px, calc(100% - 16px));
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      z-index: 2;
      font-size: 13px;
      overflow: hidden;
    }
    .sheet header {
      display: flex;
      gap: 4px;
      padding: 8px 8px 6px;
      border-bottom: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .tab {
      flex: 1 1 auto;
      min-width: 0;
      padding: 6px 8px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tab[aria-pressed="true"] {
      background: rgba(255, 176, 32, 0.18);
      color: var(--tt);
    }
    .x {
      flex: none;
      width: 30px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 18px;
    }
    .body {
      overflow-y: auto;
      padding: 8px 10px 12px;
      overscroll-behavior: contain;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 6px;
    }
    .fchip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 12px;
    }
    .fchip[aria-pressed="true"] {
      border-color: var(--tt);
      background: rgba(255, 176, 32, 0.14);
    }
    .when {
      font: inherit;
      font-size: 12px;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      border-radius: 999px;
      padding: 3px 8px;
      color-scheme: dark;
    }
    .opt {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      margin: 2px 0;
    }
    .since {
      margin: 0 0 4px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .sheet h4 {
      margin: 10px 0 4px;
      font-size: 12px;
      font-weight: 700;
      color: var(--tt);
    }
    .row {
      display: grid;
      grid-template-columns: 10px 44px 1fr;
      align-items: start;
      gap: 6px;
      width: 100%;
      padding: 5px 4px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      text-align: left;
      font-size: 13px;
    }
    .row:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .row i {
      width: 8px;
      height: 8px;
      margin-top: 5px;
      border-radius: 50%;
    }
    .row time {
      font-variant-numeric: tabular-nums;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .row small {
      display: block;
      font-size: 11px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .none {
      color: var(--fp3d-muted, #8a9bb8);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
    }
    th,
    td {
      padding: 4px 3px;
      text-align: right;
      white-space: nowrap;
    }
    th:first-child {
      text-align: left;
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    thead th {
      font-weight: 600;
      color: var(--fp3d-muted, #8a9bb8);
    }
    tbody tr:not(.before) {
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .before {
      color: var(--fp3d-muted, #8a9bb8);
      font-size: 11px;
    }
    .before th {
      font-weight: 400;
      padding-left: 10px;
    }
    .energy {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 4px 12px;
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      font-variant-numeric: tabular-nums;
    }
    .energy b {
      text-align: right;
    }
    .energy em {
      font-style: normal;
      text-align: right;
      color: var(--fp3d-muted, #8a9bb8);
    }
    /* phones and narrow cards: the track on a row of its own above the buttons */
    @container fp3dtt ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
      .bar {
        flex-wrap: wrap;
        align-content: center;
        row-gap: 6px;
        padding: 6px 8px;
      }
      .track {
        order: -1;
        flex: 1 0 100%;
        margin: 14px 0 0;
      }
      .live {
        margin-left: auto;
      }
      .chip {
        padding: 0 9px;
      }
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
      .sheet {
        top: 64px;
      }
    }
  `;
}

if (!customElements.get("fp3d-time-bar")) customElements.define("fp3d-time-bar", Fp3dTimeBar);
