// Lab only (?fp3d_lab=1): a small floating box for the locating feasibility test. It starts and stops the recorder
// in the integration and tells it which room the walker is in. Plain DOM, kept tiny for the main bundle.

import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { loadLocate } from "./load-locate.ts";
import { isTraditionalChinese } from "./locales.ts";

interface RecStatus {
  running: boolean;
  file: string | null;
  seconds: number;
  lines: number;
  mark: { room: string; name: string; t: number } | null;
  devices: { id: string; title: string; t?: number; rssi?: number; scanner?: string }[];
}

type Source = () => { hass?: HomeAssistant; building?: Building | null };

const de = {
  title: "Ortung · Aufnahme (Labor)",
  setup: "Ortung einrichten",
  start: "Aufnahme starten",
  stop: "Stopp",
  lines: (n: number) => `${n} Zeilen`,
  unheard: "noch nicht gehört",
  age: (seconds: number) => `vor ${seconds} s`,
  noKeys: "Keine iPhone/Watch-Schlüssel (Private BLE Device) in HA – alles wird trotzdem aufgezeichnet.",
  inRoom: (time: string, room: string) => `seit ${time} in ${room}`,
  twoMinutes: "✓ 2 Min. geschafft",
  currentRoom: "Ich bin jetzt in …",
  betweenRooms: "unterwegs / nirgends",
};

const zhHant: typeof de = {
  title: "定位錄製（實驗功能）",
  setup: "設定定位",
  start: "開始錄製",
  stop: "停止錄製",
  lines: (n) => `${n} 筆紀錄`,
  unheard: "尚未偵測到",
  age: (seconds) => `${seconds} 秒前`,
  noKeys: "Home Assistant 的 Private BLE Device 整合中找不到 iPhone 或 Apple Watch 的金鑰，仍會繼續錄製。",
  inRoom: (time, room) => `已在 ${room} 停留 ${time}`,
  twoMinutes: "✓ 已滿 2 分鐘",
  currentRoom: "我目前在…",
  betweenRooms: "移動中／不在任何房間",
};

const CSS = `
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;

export function mountLocateLab(source: Source): () => void {
  const style = document.createElement("style");
  style.textContent = CSS;
  const box = document.createElement("div");
  box.className = "fp3d-loclab";
  document.body.append(style, box);
  let status: RecStatus | null = null;
  let error = "";
  let open = true;

  const call = async (action: string, extra: Record<string, unknown> = {}) => {
    const hass = source().hass;
    if (!hass) return;
    try {
      status = await hass.callWS<RecStatus>({ type: "neonplan3d/locate/rec", action, ...extra });
      error = "";
    } catch (e) {
      error = (e as { message?: string }).message ?? String(e);
    }
    draw();
  };

  const draw = () => {
    const { building: b, hass } = source();
    const t = isTraditionalChinese(hass?.language ?? navigator.language) ? zhHant : de;
    const s = status;
    const mark = s?.mark;
    const head = `<h4 data-a="toggle"><span>📡 ${t.title}</span><span>${open ? "▾" : "▸"}</span></h4>`;
    if (!open) {
      box.innerHTML = head;
      return;
    }
    const devices = (s?.devices ?? [])
      .map((d) => {
        const age = d.t ? Math.round(Date.now() / 1000 - d.t) : null;
        return `<div>⌚ ${esc(d.title)}: ${age === null ? `<small>${t.unheard}</small>` : `${d.rssi} dBm · ${esc(d.scanner ?? "")} <small>${t.age(age)}</small>`}</div>`;
      })
      .join("");
    const rooms = (b?.floors ?? [])
      .map(
        (f) =>
          `<div class="fl">${esc(f.name)}</div>` +
          f.rooms.map((r) => `<button data-room="${esc(r.id)}" data-name="${esc(r.name)}" class="${mark?.room === r.id ? "on" : ""}">${esc(r.name)}</button>`).join(""),
      )
      .join("");
    let roomStatus = "";
    if (mark) {
      const elapsed = Date.now() / 1000 - mark.t;
      const time = `<b>${clock(elapsed)}</b>`;
      const name = `<b>${esc(mark.name)}</b>`;
      roomStatus = `<div style="margin-top:6px">⏱ ${t.inRoom(time, name)} ${elapsed >= 120 ? t.twoMinutes : ""}</div>`;
    }
    box.innerHTML = `${head}
      <div><button data-a="setup">⚙ ${t.setup}</button></div>
      <div>${
        s?.running
          ? `<button class="rec" data-a="stop">■ ${t.stop}</button> <small>${clock(s.seconds)} · ${t.lines(s.lines)}</small>`
          : `<button data-a="start">● ${t.start}</button>`
      }</div>
      ${error ? `<div style="color:#ff8fa3">${esc(error)}</div>` : ""}
      ${devices || (s ? `<div><small>${t.noKeys}</small></div>` : "")}
      ${roomStatus}
      <div class="fl">${t.currentRoom}</div>
      <button data-room="" class="${mark ? "" : "on"}">🚶 ${t.betweenRooms}</button>
      ${rooms}`;
  };

  box.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest("button,h4") as HTMLElement | null;
    if (!el) return;
    const a = el.dataset.a;
    if (a === "toggle") {
      open = !open;
      draw();
    } else if (a === "start") void call("start", { note: "lab walk" });
    else if (a === "stop") void call("stop");
    else if (a === "setup") {
      const { hass, building } = source();
      if (hass && building) void loadLocate().then((m) => m.openLocateSetup(hass, building, () => source().hass));
    }
    else if (el.dataset.room !== undefined) void call("mark", el.dataset.room ? { room: el.dataset.room, name: el.dataset.name } : { room: null });
  });

  void call("status");
  const timer = window.setInterval(() => void call("status"), 1000);
  return () => {
    window.clearInterval(timer);
    box.remove();
    style.remove();
  };
}

function clock(sec: number): string {
  const n = Math.max(0, Math.round(sec));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
}
