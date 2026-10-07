// Recorder for tutorial videos: drives the preview (invented demo data, mock Home Assistant) with real mouse
// and keyboard events, shows a visible cursor with click rings, and records frame by frame. Every frame that
// changes is a JPEG; a still image is only written once and held for its duration (frames.txt, an ffmpeg
// concat list), so a ten-minute episode stays small. cues.json lists chapters and narration lines with their
// start times, for the voice-over and the subtitles (tools/make-tutorial.py turns everything into an MP4).

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".json": "application/json", ".svg": "image/svg+xml" };

/** Video frame rate of the finished MP4; a "frame" below is one step of the cursor or the camera. */
export const FPS = 25;

export async function startRecorder({ outDir, width = 1920, height = 1080, lang = "de" }) {
  const root = resolve(import.meta.dirname, "..", "..");
  mkdirSync(outDir, { recursive: true });
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
  const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;
  const executablePath = [process.env.CHROME_PATH, "C:/Program Files/Google/Chrome/Application/chrome.exe", "/usr/bin/google-chrome", "/usr/bin/chromium"].filter(Boolean).find((p) => existsSync(p));
  const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const list = []; // [file, seconds]
  const cues = [];
  let shot = 0;
  let time = 0; // seconds of video so far
  let cursor = { x: width / 2, y: height / 2 };

  /** One video frame: a screenshot, shown for `seconds`. */
  const frame = async (seconds = 1 / FPS, settle = 30) => {
    await sleep(settle);
    const file = `s${String(shot++).padStart(5, "0")}.jpg`;
    await page.screenshot({ path: join(outDir, file), type: "jpeg", quality: 88 });
    list.push([file, seconds]);
    time += seconds;
  };
  /** Hold the current picture (a still costs one file, however long). */
  const hold = async (seconds) => {
    await frame(seconds, 120);
  };

  const R = {
    page,
    base,
    lang,
    get time() {
      return time;
    },
    frame,
    hold,
    sleep,

    /** Load the preview with query options (?empty, ?lang=…) and put the cursor back on. */
    async open(query = "") {
      const sep = query ? `&${query.replace(/^[?&]/, "")}` : "";
      await page.goto(`${base}?lang=${lang}${sep}`, { waitUntil: "networkidle0", timeout: 120000 });
      await sleep(2500);
      await page.evaluate(installCursor, cursor.x, cursor.y);
    },

    /** A chapter starts (YouTube chapter marker). */
    chapter(title) {
      cues.push({ type: "chapter", t: time, text: title });
    },
    /** A narration line starts now; `seconds` is the time to leave for it (held if nothing else runs). */
    async say(text, seconds = 0) {
      cues.push({ type: "say", t: time, text });
      if (seconds) await hold(seconds);
    },

    /** Move the visible cursor (and the real mouse) to x/y in an eased glide. */
    async move(x, y, seconds = 0.6) {
      const from = { ...cursor };
      const n = Math.max(1, Math.round(seconds * FPS));
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        cursor = { x: from.x + (x - from.x) * k, y: from.y + (y - from.y) * k };
        await page.mouse.move(cursor.x, cursor.y);
        await page.evaluate(placeCursor, cursor.x, cursor.y, false);
        await frame(1 / FPS, 10);
      }
    },
    /** Click where the cursor is, with a ring. */
    async click() {
      await page.evaluate(placeCursor, cursor.x, cursor.y, true);
      await page.mouse.down();
      await page.mouse.up();
      for (let i = 0; i < 8; i++) await frame(1 / FPS, 25);
    },
    /** Drag from the cursor to x/y (a room, a corner). */
    async drag(x, y, seconds = 1.2) {
      await page.evaluate(placeCursor, cursor.x, cursor.y, true);
      await page.mouse.down();
      await R.move(x, y, seconds);
      await page.mouse.up();
      for (let i = 0; i < 6; i++) await frame(1 / FPS, 25);
    },
    /** Type text letter by letter into the focused field. */
    async type(text, perLetter = 0.07) {
      for (const ch of text) {
        await page.keyboard.type(ch);
        await frame(perLetter, 15);
      }
    },
    async key(name) {
      await page.keyboard.press(name);
      await frame(1 / FPS, 80);
    },

    /** Centre of an element found by a CSS selector or by its visible text, searching through shadow roots. */
    async locate(target) {
      const box = await page.evaluate(findBox, target);
      if (!box) throw new Error(`not found: ${JSON.stringify(target)}`);
      return box;
    },
    async moveTo(target, seconds = 0.6) {
      const b = await R.locate(target);
      await R.move(b.x, b.y, seconds);
      return b;
    },
    async clickOn(target, seconds = 0.6) {
      await R.moveTo(target, seconds);
      await R.click();
    },

    /** A plan point (metres) of the editor as a screen point. */
    async planPoint(x, z) {
      return page.evaluate(
        (x, z) => {
          const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
          const svg = e.renderRoot.querySelector("svg");
          const r = svg.getBoundingClientRect();
          const [sx, sy] = e.toScreen([x, z]);
          return { x: r.left + sx, y: r.top + sy };
        },
        x,
        z,
      );
    },
    /** Run code with the editor (e) – for a clean starting state, never for the steps shown. */
    editor(code) {
      return page.evaluate((code) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        return new Function("e", code)(e);
      }, code);
    },
    /** Set the 3D camera (theta, phi, radius) – for camera glides in teasers. */
    view(cam) {
      return page.evaluate((cam) => {
        const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
        const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
        Object.assign(viewer.controls.view, cam);
        viewer.invalidate();
      }, cam);
    },
    async glide(from, to, seconds) {
      const n = Math.max(1, Math.round(seconds * FPS));
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        await R.view({ theta: from.theta + (to.theta - from.theta) * k, phi: from.phi + (to.phi - from.phi) * k, radius: from.radius + (to.radius - from.radius) * k });
        await frame(1 / FPS, 40);
      }
    },
    /** A title card over the picture (teaser text, chapter title), shown while held. */
    title(text, sub = "") {
      return page.evaluate(showTitle, text, sub);
    },
    untitle() {
      return page.evaluate(() => document.getElementById("tut-title")?.remove());
    },
    hideCursor(hidden = true) {
      return page.evaluate((h) => {
        const c = document.getElementById("tut-cursor");
        if (c) c.style.display = h ? "none" : "";
      }, hidden);
    },

    async finish() {
      writeFileSync(join(outDir, "frames.txt"), list.map(([f, s]) => `file '${f}'\nduration ${s.toFixed(4)}`).join("\n") + `\nfile '${list[list.length - 1][0]}'\n`);
      writeFileSync(join(outDir, "cues.json"), JSON.stringify({ duration: time, cues }, null, 1));
      await browser.close();
      server.close();
      return { duration: time, frames: shot };
    },
  };
  return R;
}

// ---------------------------------------------------------------- page-side helpers (run in the browser)

function installCursor(x, y) {
  if (document.getElementById("tut-cursor")) return;
  const style = document.createElement("style");
  style.textContent = `
    #tut-cursor { position: fixed; left: 0; top: 0; width: 34px; height: 34px; z-index: 2147483647; pointer-events: none; filter: drop-shadow(0 2px 4px rgba(0,0,0,.6)); }
    #tut-ring { position: fixed; z-index: 2147483646; pointer-events: none; width: 56px; height: 56px; margin: -28px 0 0 -28px; border-radius: 50%;
      border: 3px solid #37e0ff; box-shadow: 0 0 18px #37e0ff; animation: tut-ring .45s ease-out forwards; }
    @keyframes tut-ring { from { transform: scale(.3); opacity: 1 } to { transform: scale(1.3); opacity: 0 } }
    #tut-title { position: fixed; left: 50%; bottom: 9%; transform: translateX(-50%); z-index: 2147483645; pointer-events: none; text-align: center;
      padding: 22px 44px; border-radius: 22px; background: rgba(8,16,34,.78); border: 1px solid rgba(55,224,255,.55); box-shadow: 0 0 40px rgba(55,224,255,.35);
      color: #eaf6ff; font: 600 46px/1.15 system-ui, "Segoe UI", sans-serif; backdrop-filter: blur(8px); }
    #tut-title small { display: block; margin-top: 8px; font-size: 26px; font-weight: 400; color: #9fdcf0; }`;
  document.head.appendChild(style);
  const c = document.createElement("div");
  c.id = "tut-cursor";
  c.innerHTML = `<svg viewBox="0 0 24 24" width="34" height="34"><path d="M4 2 L4 20 L9 15.5 L12.5 22.5 L15.5 21 L12 14 L19 14 Z" fill="#ffffff" stroke="#0b1424" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
  document.body.appendChild(c);
  c.style.transform = `translate(${x - 4}px, ${y - 2}px)`;
}

function placeCursor(x, y, ring) {
  const c = document.getElementById("tut-cursor");
  if (c) c.style.transform = `translate(${x - 4}px, ${y - 2}px)`;
  if (ring) {
    const r = document.createElement("div");
    r.id = "tut-ring";
    r.style.left = `${x}px`;
    r.style.top = `${y}px`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 500);
  }
}

function showTitle(text, sub) {
  let t = document.getElementById("tut-title");
  if (!t) {
    t = document.createElement("div");
    t.id = "tut-title";
    document.body.appendChild(t);
  }
  t.innerHTML = `${text}${sub ? `<small>${sub}</small>` : ""}`;
}

function findBox(target) {
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 0 && r.right > 0 && r.top < innerHeight && r.left < innerWidth;
  };
  const walk = function* (root) {
    for (const el of root.querySelectorAll("*")) {
      yield el;
      if (el.shadowRoot) yield* walk(el.shadowRoot);
    }
  };
  let hit = null;
  if (target.label) {
    // an input or select inside the label that starts with this text (the editor's form fields)
    for (const el of walk(document)) {
      if (el.tagName !== "LABEL" || !visible(el)) continue;
      if (!el.textContent.replace(/\s+/g, " ").trim().startsWith(target.label)) continue;
      const input = el.querySelector("input, select, textarea");
      if (input && visible(input)) hit = input;
    }
  } else if (typeof target === "string") {
    // the last match is the innermost one (the editor sits inside the panel)
    for (const el of walk(document)) {
      if (el.matches(target) && visible(el)) hit = el;
    }
  } else {
    // buttons with this text; `nth` picks one of several (0 = the first on the page), else the innermost last one
    const want = target.text.trim();
    const hits = [];
    for (const el of walk(document)) {
      if (!/^(BUTTON|A|LABEL|SUMMARY)$/.test(el.tagName) && el.getAttribute("role") !== "button") continue;
      const txt = el.textContent.replace(/\s+/g, " ").trim();
      if ((target.exact ? txt === want : txt.includes(want)) && visible(el)) hits.push(el);
    }
    hit = typeof target.nth === "number" ? (hits[target.nth] ?? null) : (hits[hits.length - 1] ?? null);
  }
  if (!hit) return null;
  const r = hit.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height };
}
