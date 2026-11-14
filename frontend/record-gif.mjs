// Records frames of the preview (invented demo data) for the README animation: the house turns with its solar roof
// and energy cards, voice control opens the living room ("Show the living room"), the doorbell rings and the live
// director flies to the front door and looks through its camera, then back to the whole house.
// Usage (from frontend/): node record-gif.mjs <frame-dir>; then python ../tools/make-gif.py <frame-dir> <out.gif>

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.argv[2] ?? "gif-frames");
mkdirSync(outDir, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^[/\\]+/, "");
  const file = join(root, path);
  // only what the online demo has: no local packs from private/
  if (!file.startsWith(root) || path.startsWith("private") || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
// ?public: only what the online demo shows (no Pool Pro)
const url = `http://127.0.0.1:${server.address().port}/preview/index.html?lang=en&public`;

const executablePath = [process.env.CHROME_PATH, "C:/Program Files/Google/Chrome/Application/chrome.exe", "/usr/bin/google-chrome"].filter(Boolean).find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(2500);

let n = 0;
const frame = async (wait = 40) => {
  await sleep(wait);
  await page.screenshot({ path: join(outDir, `f${String(n++).padStart(4, "0")}.png`) });
};
const hold = async (count, wait = 70) => {
  for (let i = 0; i < count; i++) await frame(wait);
};
const clickText = (text) =>
  page.evaluate((t) => {
    const find = (root) => {
      for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t || el.firstElementChild?.textContent.trim() === t) return el;
      for (const el of root.querySelectorAll("*"))
        if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
      return null;
    };
    find(document)?.click();
  }, text);
// turn the view by dragging across the 3D area
const turn = async (dx, steps, y = 470) => {
  const x0 = 640 - dx / 2;
  await page.mouse.move(x0, y);
  await page.mouse.down();
  for (let i = 1; i <= steps; i++) {
    await page.mouse.move(x0 + (dx * i) / steps, y);
    await frame(30);
  }
  await page.mouse.up();
};
// runs code with `panel` and `view` (the 3D view) at hand
const inPage = (code) =>
  page.evaluate(async (code) => {
    const panel = document.querySelector("neonplan3d-panel");
    const view = panel.shadowRoot.querySelector("fp3d-view3d");
    return new Function("panel", "view", `return (async () => { ${code} })()`)(panel, view);
  }, code);

// the live director with the doorbell switched on, on this "device" (the demo's mock Home Assistant)
await inPage(`
  const { building } = await panel.hass.callWS({ type: "neonplan3d/building/get" });
  building.settings.director = { doorbell: true, hold: 60 };
  await panel.hass.callWS({ type: "neonplan3d/building/save", building });
  localStorage.setItem("neonplan3d.director", "1");
  localStorage.setItem("neonplan3d.voice", "1");
  panel._director = true;
  panel._voiceHere = true;
`);
await sleep(1500);
// the director looks once at the doorbell as it is now (it notices a ring as a change against that)
await inPage(`panel.hass = { ...panel.hass, states: { ...panel.hass.states } };`);
await sleep(500);

// 1. the house turns
await hold(4);
await turn(420, 34);
await hold(3);

// 2. voice control: "Show the living room" – the microphone listens, the view flies into the room
await inPage(`view._voice = { phase: "listen", text: "Listening …" };`);
await hold(10);
await inPage(`
  view._voice = { phase: "done", text: "“Show the living room” → Wohnzimmer" };
  view.fire("floor-tap", { floorId: "eg" });
  setTimeout(() => view.fire("room-tap", { floorId: "eg", roomId: "wohnen" }), 60);
`);
await hold(26, 80);

// 3. the doorbell rings: the live director flies to the front door and looks through its camera
await inPage(`
  view._voice = null;
  const st = panel.hass.states["event.haustuer_klingel"];
  panel.hass = { ...panel.hass, states: { ...panel.hass.states, "event.haustuer_klingel": { ...st, state: new Date().toISOString() } } };
`);
await hold(4, 90);
console.log("after the ring:", await inPage(`return JSON.stringify({ room: view.roomId, through: view._through?.entity ?? null, shot: view.directing.current?.shot.kind ?? null })`));
await hold(26, 90);

// 4. back to the whole house
await clickText("Back to the view");
await inPage(`view.fire("floor-tap", { floorId: null });`);
await hold(16, 90);
await turn(-260, 22);
await hold(4);

console.log(`${n} frames in ${outDir}`);
await browser.close();
server.close();
