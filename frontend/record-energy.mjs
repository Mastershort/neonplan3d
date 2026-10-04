// Records frames of the preview (invented demo data) for the Energie Pro video: the house with the
// hologram over the solar field, a slow turn, the cables with their comets, the ground floor with a
// device hologram, then back to the house and the hologram folds. Captions go into captions.json
// (frame ranges) for tools/make-video.py, which writes the MP4.
// Usage (from frontend/): node record-energy.mjs <frame-dir> [de|en]

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.argv[2] ?? "energy-frames");
const lang = process.argv[3] ?? "de";
mkdirSync(outDir, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^[/\\]+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || path.startsWith("private") || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const url = `http://127.0.0.1:${server.address().port}/preview/index.html?lang=${lang}&flows&pv=5400`;

const executablePath = [process.env.CHROME_PATH, "C:/Program Files/Google/Chrome/Application/chrome.exe", "/usr/bin/google-chrome"].filter(Boolean).find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(2500);

const T = {
  de: ["Energie Pro – dein Strom, sichtbar", "Glas-Hologramm mit Live-Bilanz", "Leitungen zeigen, wohin der Strom fließt", "Module leben mit der Sonne", "Geräte-Hologramme – auch ohne Solaranlage", "Antippen klappt zusammen", "Läuft auch auf alten Wandtablets · 7,90 € · mastershort.de/neonplan3d"],
  en: ["Energy Pro – your power, made visible", "Glass hologram with the live balance", "Cables show where the power flows", "Modules live with the sun", "Device holograms – also without solar", "Tap to fold", "Runs on old wall tablets too · €7.90 · mastershort.de/neonplan3d"],
}[lang];
const captions = [];
let n = 0;
const caption = (text) => {
  if (captions.length) captions[captions.length - 1].end = n;
  captions.push({ start: n, end: null, text });
};
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
const inEditor = (code) =>
  page.evaluate((code) => {
    const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
    new Function("e", code)(e);
  }, code);
const view = (cam) =>
  page.evaluate((cam) => {
    const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
    const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
    Object.assign(viewer.controls.view, cam);
    viewer.invalidate();
  }, cam);
// the camera glides from one view to another (eased), one frame per step; it never comes closer than
// about 0.9 house radii, where the roof (and the hologram on it) would fade away
const glide = async (from, to, steps, wait = 60) => {
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    await view({ theta: from.theta + (to.theta - from.theta) * k, phi: from.phi + (to.phi - from.phi) * k, radius: from.radius + (to.radius - from.radius) * k });
    await frame(wait);
  }
};
const tapHolo = () =>
  page.evaluate(() => {
    const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
    v.renderRoot.querySelector('.fp3d-holo[data-holo="0"]')?.click();
  });

// the house centred like the screenshots: through the editor's fit, then the 3D house view, floors stacked
await clickText(lang === "de" ? "Editor" : "Editor");
await sleep(1500);
await inEditor("e.fit();");
await sleep(800);
await clickText("3D");
await sleep(800);
await clickText(lang === "de" ? "Alle Etagen" : "All floors");
await clickText(lang === "de" ? "Gestapelt" : "Stacked");
await sleep(600);

const A = { theta: 1.1, phi: 0.9, radius: 26 };
const B = { theta: 1.9, phi: 0.95, radius: 24 };
const C = { theta: 1.15, phi: 0.8, radius: 20 };
const D = { theta: 2.6, phi: 1.05, radius: 21 };
const E = { theta: 1.35, phi: 0.6, radius: 19.5 };
await view(A);
await sleep(1500);
caption(T[0]);
await hold(18);
caption(T[1]);
await glide(A, C, 34);
await hold(24);
caption(T[2]);
await glide(C, D, 40);
await hold(20);
caption(T[3]);
await glide(D, E, 30);
await hold(22);
await glide(E, A, 26);
caption(T[4]);
await clickText(lang === "de" ? "Erdgeschoss" : "Ground floor");
await sleep(900);
const F = { theta: 0.25, phi: 1.2, radius: 11 };
const G = { theta: 0.6, phi: 1.05, radius: 9 };
await view(F);
await hold(10);
await glide(F, G, 36);
await hold(20);
caption(T[5]);
await clickText(lang === "de" ? "Alle Etagen" : "All floors");
await sleep(900);
await view(B);
await hold(12);
await tapHolo();
await hold(16);
await tapHolo();
caption(T[6]);
await glide(B, A, 30);
await hold(26);
captions[captions.length - 1].end = n;
writeFileSync(join(outDir, "captions.json"), JSON.stringify(captions, null, 1));
console.log(`${n} frames in ${outDir}`);
await browser.close();
server.close();
