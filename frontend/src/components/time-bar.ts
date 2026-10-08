// Time travel: the time bar at the bottom (previous event, play/pause, next event, the day as a track with
// hours, nights, gaps and event markers, the speed and the way back to live), the big clock at the top and
// the amber frame that says "this is the past". It lies over the stage; only its own parts take touches.
// The clock and the playhead follow the replay by writing to the DOM directly – no re-render per tick.

import { css, html, LitElement, nothing, svg } from "lit";
import type { Session } from "../timetravel/entry.ts";
import { clusterEvents, type Cluster, type EventKind, type TTEvent } from "../timetravel/events.ts";

const ICONS = {
  prev: "M6 6h2v12H6zM20 6v12l-10-6z",
  play: "M8 5v14l11-7z",
  pause: "M7 5h4v14H7zM13 5h4v14h-4z",
  next: "M16 6h2v12h-2zM4 6v12l10-6z",
};
const icon = (d: string) => svg`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${d} /></svg>`;

/** Marker colours: danger red, water blue, rain light blue, doors amber, motion violet, machines green. */
const COLOR: Record<EventKind, string> = {
  alarm: "#ff3b4f",
  smoke: "#ff3b4f",
  gas: "#ff3b4f",
  co: "#ff3b4f",
  water: "#3aa0ff",
  rain: "#6cc8ff",
  door: "#ffb020",
  lock: "#ffb020",
  garage: "#ffb020",
  motion: "#b48cff",
  washer: "#4dff9a",
  robot_start: "#4dff9a",
  robot_done: "#4dff9a",
};

export class Fp3dTimeBar extends LitElement {
  static properties = {
    session: { attribute: false },
    _w: { state: true },
    _label: { state: true },
    _toast: { state: true },
  };

  declare session: Session | null;
  /** Width of the track (px): markers, ticks and the playhead are placed with it. */
  private declare _w: number;
  /** A long-pressed marker's events, shown above it. */
  private declare _label: { x: number; lines: string[] } | null;
  /** "Read-only" note after something tried to switch. */
  private declare _toast: boolean;
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

  constructor() {
    super();
    this.session = null;
    this._w = 0;
    this._label = null;
    this._toast = false;
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
      e.preventDefault();
      s.toggle();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      s.seek(s.playback.t + (e.key === "ArrowLeft" ? -1 : 1) * (e.shiftKey ? 3600000 : 300000));
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("fp3d-replay-blocked", this.onBlocked);
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("fp3d-replay-blocked", this.onBlocked);
    window.removeEventListener("keydown", this.onKey);
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
    return `${s?.state}|${s?.error}|${Math.round((s?.progress ?? 0) * 20)}|${pb?.playing}|${pb?.speed}|${s?.events.length}`;
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

  /** "Di 07:42": weekday and time in the user's language. */
  private clockText(t: number): string {
    const d = new Date(t);
    const day = d.toLocaleDateString(this.language, { weekday: "short" }).replace(/\.$/, "");
    return `${day} ${d.toLocaleTimeString(this.language, { hour: "2-digit", minute: "2-digit" })}`;
  }

  /** "vor 3 h 12 min". */
  private agoText(t: number): string {
    const s = this.session!;
    const min = Math.round((s.end - t) / 60000);
    if (min < 1) return s.t("tt_now");
    const h = Math.floor(min / 60);
    const m = min % 60;
    return s.t("tt_ago", { d: h ? `${h} h${m ? ` ${m} min` : ""}` : `${m} min` });
  }

  private eventText(e: TTEvent): string {
    const s = this.session!;
    const name = (s.opts.live.states[e.entity]?.attributes.friendly_name as string | undefined) ?? e.entity;
    return s.t(`tt_ev_${e.kind}`, { name });
  }

  private time(t: number): string {
    return new Date(t).toLocaleTimeString(this.language, { hour: "2-digit", minute: "2-digit" });
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
    const t = this.tOf(x);
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
    const pct = (t: number) => `${(((t - s.start) / (s.end - s.start)) * 100).toFixed(3)}%`;
    const band = (a: number, b: number, cls: string) => html`<i class=${cls} style="left:${pct(Math.max(a, s.start))};width:calc(${pct(Math.min(b, s.end))} - ${pct(Math.max(a, s.start))})"></i>`;
    const oldest = s.timeline?.oldest ?? null;
    // hour ticks, a label every few hours, the weekday at midnight
    const every = w >= 640 ? 3 : 6;
    const ticks = [];
    const d = new Date(s.start);
    d.setMinutes(0, 0, 0);
    if (d.getTime() < s.start) d.setHours(d.getHours() + 1);
    for (; d.getTime() <= s.end; d.setHours(d.getHours() + 1)) {
      const h = d.getHours();
      const midnight = h === 0;
      const label = midnight ? d.toLocaleDateString(this.language, { weekday: "short" }).replace(/\.$/, "") : h % every === 0 ? this.time(d.getTime()) : "";
      ticks.push(html`<b class="tick ${midnight ? "tick-day" : label ? "tick-major" : ""}" style="left:${pct(d.getTime())}">${label ? html`<span>${label}</span>` : nothing}</b>`);
    }
    const sig = `${w}|${s.events.length}`;
    if (sig !== this.clusterSig) {
      this.clusterSig = sig;
      this.clusters = clusterEvents(s.events, (t) => this.xOf(t), w < 500 ? 18 : 14);
    }
    return html`${s.nights.map(([a, b]) => band(a, b, "night"))} ${oldest !== null && oldest > s.start ? band(s.start, oldest, "nodata") : nothing}
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
    const perHour = pb ? Math.round(3600 / pb.speed) : 10;
    return html`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")}</span>
        ${ready
          ? html`<b class="clock-time">${this.clockText(pb.t)}</b><span class="clock-ago">${this.agoText(pb.t)}</span>`
          : html`<span class="clock-ago">${error ?? `${t("tt_loading")} ${Math.round(s.progress * 100)} %`}</span>`}
      </div>
      ${this._toast ? html`<div class="toast" role="alert">${t("tt_readonly")}</div>` : nothing}
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
          aria-valuemax="1440"
          aria-valuenow=${pb ? Math.round((pb.t - s.start) / 60000) : 1440}
          @pointerdown=${(e: PointerEvent) => this.onDown(e)}
          @pointermove=${(e: PointerEvent) => this.onMove(e)}
          @pointerup=${(e: PointerEvent) => this.onUp(e)}
          @pointercancel=${(e: PointerEvent) => this.onUp(e)}
        >
          ${ready ? this.renderTrack() : error ? html`<em class="msg">${error}</em>` : html`<i class="progress" style="width:${Math.round(s.progress * 100)}%"></i>`}
        </div>
        ${error && s.error !== "not_unlocked" ? html`<button class="chip" @click=${() => void s.load()}>${t("tt_retry")}</button>` : nothing}
        <button class="chip speed" ?disabled=${!ready} title=${t("tt_speed", { s: perHour >= 60 ? "1 min" : `${perHour} s` })} @click=${() => s.nextSpeed()}>${pb?.speed ?? 360}×</button>
        <button class="chip live" title=${t("tt_live_hint")} @click=${() => s.exit()}><i></i>${t("tt_live")}</button>
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
    .clock-time {
      font-family: var(--fp3d-title-font, inherit);
      font-size: 24px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .clock-ago {
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
    .btn:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.07);
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
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
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
      bottom: 0;
      width: 1px;
      height: 6px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 10px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: -24px;
      font-size: 10px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      top: 1px;
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 5px;
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
      top: 3px;
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
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
    }
  `;
}

if (!customElements.get("fp3d-time-bar")) customElements.define("fp3d-time-bar", Fp3dTimeBar);
