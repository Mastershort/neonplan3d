// Tutorial episode 12 – "Einstellungen, Sicherung und Umzug", the last episode of the series, in two parts:
//   a) Alle Einstellungen: where the sections are, „Außenwand“ / „Innenwand“ / „Raster“, „Nordrichtung“ and
//      „Sonnenlicht durch die Fenster“, the simple „Dach“ (pointing to episodes 7 and 8), „Wetter-Entität“, the
//      weather effects (Wetter draußen in one sentence) and the rain warning, „Startansicht“, „Favoriten“, „Eigene
//      Knöpfe“ with every action, „Sender und Playlists“ (Klang & Kino in one sentence), „🔒 Grundriss“, and pointers
//      to „Vorlage (Grundriss-Bild)“, the energy tool and the language.
//   b) Sicherung, Umzug und Datenschutz: undo / redo, restore points, „Exportieren“ / „Als Vorlage teilen“ /
//      „Importieren …“ (and what happens to areas and devices on another Home Assistant), „Komplett-Backup“, moving to
//      a new Home Assistant step by step with the licence key and the installation binding (never a real key: the
//      demo's shop mode and an invented key), what NeonPlan stores and sends (manual chapter 11), help links, and
//      the end of the series.
// The full demo house (invented data, mock Home Assistant). Setup steps before a scene are invisible. The preview
// has no full-backup commands: this script answers them in the page (export: the plan and the packs; import: the
// plan back, one pack skipped as bound to another installation – what a new Home Assistant really reports).
// Downloads go into the recording folder, never into the user's Downloads.
// Usage (from frontend/): node tutorials/ep12-einstellungen-sicherung.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep12a/de and …/en, resp. ep12b)
// EP12_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep12a-narration-en.json

import { mkdirSync, readdirSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { appVersion, FPS, narration, startRecorder } from "./recorder.mjs";

const out = resolve(process.argv[2] ?? "tutorial-ep12");
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP12_FAST;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;
const DL = join(out, "downloads");
mkdirSync(DL, { recursive: true });

const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(4));
const { sayOver, chapter, catchUp } = N;
if (FAST) {
  const { move, type } = R;
  R.move = (x, y) => move(x, y, 0.04);
  R.type = (text) => type(text, 0.01);
}
// a draft that fails still writes what it recorded (for checking the stills)
for (const ev of ["uncaughtException", "unhandledRejection"]) {
  process.on(ev, async (err) => {
    console.error(err);
    await R.page.screenshot({ path: `${out}/error.png` }).catch(() => {});
    await R.frame(0.04).catch(() => {});
    await R.finish().catch(() => {});
    process.exit(1);
  });
}
// every scene starts from the demo's stored defaults
await R.page.evaluateOnNewDocument(() => {
  try {
    localStorage.clear();
  } catch {
    // no storage
  }
});
// confirm() / alert() of the app: accepted at once (a native dialog is not in the screenshots; fakeDialog shows it)
R.page.on("dialog", (d) => void d.accept());
// exported files land in the recording folder
{
  const cdp = await R.page.createCDPSession();
  await cdp.send("Page.setDownloadBehavior", { behavior: "allow", downloadPath: DL });
}

// ---------------------------------------------------------------- helpers
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
/** sayOver that returns the video time the line ends. */
const line = async (text) => {
  await sayOver(text);
  return R.time + N.length(text);
};
/** Real frames until video time `end` (3D runs), with an optional step per frame. */
const live = async (end, each = null) => {
  const n = Math.max(1, Math.round((end - R.time) * FPS));
  for (let i = 1; i <= n; i++) {
    if (each) await each(i, n);
    await R.frame(1 / FPS, 15);
  }
};
/** A setup click before a scene's first line: nothing is recorded. */
const quiet = async (target, wait = 400) => {
  const b = await R.locate(target);
  await R.page.mouse.click(b.x, b.y);
  await R.sleep(wait);
};
const EYE = 'button[aria-label="Bedienelemente ausblenden – nur die 3D-Ansicht bleibt"]';
const STAR = 'button[aria-label="Zentral: alle Lichter, Rollläden und Favoriten"]';
/** The main 3D view's viewer object. */
const VIEWER = `const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d"); const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);`;
/** The editor's 3D pane. */
const PANE = `const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor"); const v = e.renderRoot.querySelector("fp3d-view3d"); const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);`;
/** Set a camera (main view or the editor's pane) around a plan point of a floor (or keep the target: floorId null). */
const camOf = (which, floorId, x, z, c) =>
  R.page.evaluate(
    (SRC, floorId, x, z, c) =>
      new Function("floorId", "x", "z", "c", `${SRC}
        const view = viewer.controls.view;
        if (floorId) {
          const fv = viewer.floorMap.get(floorId);
          const t = fv.group.position.clone().set(x, c.y ?? 0, z);
          fv.group.localToWorld(t);
          view.target.copy(t);
        }
        Object.assign(view, { theta: c.theta, phi: c.phi, radius: c.radius });
        viewer.invalidate();`)(floorId, x, z, c),
    which === "pane" ? PANE : VIEWER,
    floorId,
    x,
    z,
    c,
  );
const camNow = (which = "main") =>
  R.page.evaluate((SRC) => new Function(`${SRC} const w = viewer.controls.view; return { theta: w.theta, phi: w.phi, radius: w.radius };`)(), which === "pane" ? PANE : VIEWER);
/** Glide a camera (main view or pane) while recording. */
const glide = async (which, floorId, x, z, a, b, seconds) => {
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  for (let i = 1; i <= n; i++) {
    const k = ease(i / n);
    await camOf(which, floorId, x, z, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k, y: (a.y ?? 0) + ((b.y ?? 0) - (a.y ?? 0)) * k });
    await R.frame(1 / FPS, 40);
  }
};
/** A camera with its target (world coordinates) – main view or pane. */
const camFull = (which = "main") =>
  R.page.evaluate(
    (SRC) => new Function(`${SRC} const w = viewer.controls.view; return { theta: w.theta, phi: w.phi, radius: w.radius, t: [w.target.x, w.target.y, w.target.z] };`)(),
    which === "pane" ? PANE : VIEWER,
  );
/** World point of a plan point (x, height y, z) of a floor. */
const worldOf = (which, floorId, x, y, z) =>
  R.page.evaluate(
    (SRC, floorId, x, y, z) =>
      new Function("floorId", "x", "y", "z", `${SRC} const fv = viewer.floorMap.get(floorId); const p = fv.group.position.clone().set(x, y, z); fv.group.localToWorld(p); return [p.x, p.y, p.z];`)(floorId, x, y, z),
    which === "pane" ? PANE : VIEWER,
    floorId,
    x,
    y,
    z,
  );
/** Glide a camera to b (with target b.t) from where it stands. */
const flyTo = async (which, b, seconds) => {
  const a = await camFull(which);
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  for (let i = 1; i <= n; i++) {
    const k = ease(i / n);
    const m = (p, q) => p + (q - p) * k;
    await R.page.evaluate(
      (SRC, c) =>
        new Function("c", `${SRC} const w = viewer.controls.view; w.target.set(c.t[0], c.t[1], c.t[2]); Object.assign(w, { theta: c.theta, phi: c.phi, radius: c.radius }); viewer.invalidate();`)(c),
      which === "pane" ? PANE : VIEWER,
      { theta: m(a.theta, b.theta), phi: m(a.phi, b.phi), radius: m(a.radius, b.radius), t: [0, 1, 2].map((j) => m(a.t[j], b.t[j])) },
    );
    await R.frame(1 / FPS, 40);
  }
};
/** Visible element by its text (through shadow roots), innermost last match or the n-th. */
const textAt = async (text, { exact = true, nth, tags = "H2,H3,H4,P,B,SPAN,A,BUTTON,LABEL,CODE,STRONG,SUMMARY,DIV" } = {}) => {
  const box = await R.page.evaluate(
    (text, exact, nth, tags) => {
      const ok = new Set(tags.split(","));
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      const hits = [];
      for (const el of walk(document)) {
        if (!ok.has(el.tagName)) continue;
        const t = el.textContent.replace(/\s+/g, " ").trim();
        if (exact ? t !== text : !t.includes(text)) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.top < innerHeight && r.bottom > 0) hits.push({ x: r.left + Math.min(r.width / 2, 140), y: r.top + Math.min(r.height / 2, 14) });
      }
      return typeof nth === "number" ? (hits[nth] ?? null) : (hits[hits.length - 1] ?? null);
    },
    text,
    exact,
    nth ?? null,
    tags,
  );
  if (!box) throw new Error(`text not found: ${text}`);
  return box;
};
const pointAt = async (text, seconds = 0.5, opts = {}) => {
  const b = await textAt(text, opts);
  await R.move(b.x, b.y, seconds);
  return b;
};
/** Park the cursor on the side panel and scroll a heading / button into view. */
const scrollSide = async (text, top, seconds = 0.6) => {
  await R.move(1780, 640, 0.3);
  await R.scrollTo(text, top, seconds);
};
/** The input of a number field by its label; select its text and type a new value, Enter. */
const setField = async (label, value, seconds = 0.5) => {
  await R.clickOn({ label }, seconds);
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  await R.type(String(value), 0.08);
  await R.key("Enter");
  await R.frame(0.1, 300);
};
/** Click a text field by its label, clear it and type a new text (empty: just clear), Tab. */
const retype = async (label, text, perLetter = 0.05) => {
  await R.clickOn({ label }, 0.5);
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  if (text) await R.type(text, perLetter);
  else await R.key("Delete");
  await R.key("Tab");
  await R.frame(0.1, 150);
};
/** The field of a searchable entity picker by its label. */
const pickerBox = (label) =>
  R.page.evaluate((label) => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    const all = [...walk(document)].filter((el) => el.tagName === "LABEL" && el.querySelector("fp3d-entity-picker") && el.getBoundingClientRect().width > 0);
    const hit = all.filter((el) => el.textContent.replace(/\s+/g, " ").trim().startsWith(label)).pop();
    if (!hit) return null;
    const r = hit.querySelector("fp3d-entity-picker").getBoundingClientRect();
    return { x: r.left + Math.min(120, r.width / 2), y: r.top + r.height / 2 };
  }, label);
/** Pick an entity: click the picker, type a search, click the hit (`option`: start of the entry's text). */
const pickEntity = async (label, search, option, seconds = 0.5) => {
  const b = await pickerBox(label);
  if (!b) throw new Error(`no picker: ${label}`);
  await R.move(b.x, b.y, seconds);
  await R.click();
  await R.frame(0.3, 80);
  if (search) await R.type(search, 0.07);
  await R.frame(0.4, 150);
  const at = await R.page.evaluate((option) => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    const li = [...walk(document)].find((el) => el.tagName === "LI" && el.getAttribute("role") === "option" && el.querySelector("span")?.textContent.trim().startsWith(option));
    if (!li) return null;
    const r = li.getBoundingClientRect();
    return { x: r.left + Math.min(90, r.width / 2), y: r.top + r.height / 2 };
  }, option);
  if (!at) throw new Error(`no entity option: ${option}`);
  await R.move(at.x, at.y, 0.45);
  await R.click();
  await R.frame(1 / FPS, 150);
};
/** Open a picker and show its list, then close it again with Escape (nothing changes). */
const peekPicker = async (label, seconds = 0.5, hold = 1.2) => {
  const b = await pickerBox(label);
  await R.move(b.x, b.y, seconds);
  await R.click();
  await R.hold(hold);
  await R.key("Escape");
  await R.frame(0.1, 150);
};
/** The app's confirm()/alert() as a visible box (native dialogs are not in headless screenshots). */
const fakeDialog = (text) =>
  R.page.evaluate((t) => {
    const d = document.createElement("div");
    d.id = "tut-dialog";
    d.style.cssText =
      "position:fixed;left:50%;top:22%;transform:translateX(-50%);z-index:2147483644;max-width:640px;padding:22px 26px;border-radius:12px;background:#f4f6fa;color:#111;font:18px/1.4 system-ui,'Segoe UI',sans-serif;box-shadow:0 12px 50px rgba(0,0,0,.6)";
    d.innerHTML = `<div style="font-size:14px;color:#555;margin-bottom:8px">127.0.0.1 meldet</div>${t}<div style="text-align:right;margin-top:18px"><span style="display:inline-block;padding:7px 22px;border-radius:6px;background:#1a73e8;color:#fff">OK</span></div>`;
    document.body.appendChild(d);
  }, text);
const noDialog = () => R.page.evaluate(() => document.getElementById("tut-dialog")?.remove());
/** Show the fake dialog, hold, click its OK button, close it. */
const dialogOk = async (text, hold = 0.6) => {
  await fakeDialog(text);
  await R.hold(hold);
  const ok = await R.page.evaluate(() => {
    const r = document.querySelector("#tut-dialog span").getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  });
  await R.move(ok.x, ok.y, 0.6);
  await R.click();
  await noDialog();
};
/** The browser's download note (headless Chrome shows none): a small chip at the top right for a moment. */
const downloadChip = (name) =>
  R.page.evaluate((name) => {
    document.getElementById("tut-dl")?.remove();
    const d = document.createElement("div");
    d.id = "tut-dl";
    d.style.cssText =
      "position:fixed;right:24px;top:18px;z-index:2147483644;display:flex;gap:12px;align-items:center;padding:12px 18px;border-radius:12px;background:#f4f6fa;color:#111;font:16px/1.3 system-ui,'Segoe UI',sans-serif;box-shadow:0 10px 40px rgba(0,0,0,.55)";
    d.innerHTML = `<span style="font-size:22px">⬇</span><span><b>${name}</b><br><span style="color:#555;font-size:13px">Download abgeschlossen</span></span>`;
    document.body.appendChild(d);
  }, name);
const noChip = () => R.page.evaluate(() => document.getElementById("tut-dl")?.remove());
/** A step card (the moving steps, privacy points): a title and lines, `active` highlights one line. */
const card = (title, lines, active = -1) =>
  R.page.evaluate(
    (title, lines, active) => {
      let c = document.getElementById("tut-card");
      if (!c) {
        c = document.createElement("div");
        c.id = "tut-card";
        c.style.cssText =
          "position:fixed;left:48px;top:120px;z-index:2147483643;width:600px;padding:26px 30px;border-radius:20px;background:rgba(8,16,34,.86);border:1px solid rgba(55,224,255,.55);box-shadow:0 0 40px rgba(55,224,255,.3);color:#eaf6ff;font:22px/1.35 system-ui,'Segoe UI',sans-serif;backdrop-filter:blur(8px)";
        document.body.appendChild(c);
      }
      c.innerHTML =
        `<div style="font-size:30px;font-weight:600;margin-bottom:16px">${title}</div>` +
        lines
          .map(
            (l, i) =>
              `<div style="display:flex;gap:14px;margin:10px 0;padding:8px 12px;border-radius:12px;${i === active ? "background:rgba(55,224,255,.18);color:#fff" : active >= 0 ? "opacity:.55" : ""}"><span style="color:#37e0ff;font-weight:700;min-width:26px">${i + 1}</span><span>${l}</span></div>`,
          )
          .join("");
    },
    title,
    lines,
    active,
  );
const noCard = () => R.page.evaluate(() => document.getElementById("tut-card")?.remove());
/** The click ring at the cursor without clicking. */
const ringHere = async () => {
  await R.page.evaluate(() => {
    const c = document.getElementById("tut-cursor").style.transform.match(/-?[\d.]+/g).map(Number);
    const r = document.createElement("div");
    r.id = "tut-ring";
    r.style.left = `${c[0] + 4}px`;
    r.style.top = `${c[1] + 2}px`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 500);
  });
  for (let i = 0; i < 8; i++) await R.frame(1 / FPS, 25);
};
/** Scroll the side panel back to its top with the wheel. */
const sideTop = async (seconds = 0.5) => {
  await R.move(1780, 600, 0.3);
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  for (let i = 0; i < n; i++) {
    await R.page.mouse.wheel({ deltaY: -4000 / n });
    await R.frame(1 / FPS, 30);
  }
};
/** Run code with the editor (e) – for a clean starting state, never for the steps shown. */
const editorDo = (code) => R.editor(code);
/** Open the 3D view at the house with the stored defaults (a fresh page). */
const fresh = async (query = "") => {
  await R.open(query);
  await R.sleep(800);
};
/** Open the editor (with the 3D pane) and wait. */
const toEditor = async (split = true) => {
  await quiet({ text: "Editor", exact: true }, 1500);
  if (split) await quiet({ text: "3D daneben", exact: true }, 2000);
};
/** Open a side-panel section (a <summary>) if it is closed. */
const openSection = async (name, seconds = 0.5, retry = false) => {
  const open = await R.page.evaluate((name) => {
    const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
    const sm = [...e.renderRoot.querySelectorAll("summary")].find((x) => x.textContent.replace(/\s+/g, " ").trim().startsWith(name));
    return sm ? sm.parentElement.open : null;
  }, name);
  if (open === null) throw new Error(`no section: ${name}`);
  const b = await textAt(name, { exact: false, tags: "SUMMARY" }).catch(() => null);
  if ((!b || b.y < 130 || b.y > 1066) && !retry) {
    await toSection(name, 200, 0.6);
    return openSection(name, seconds, true);
  }
  if (!b) throw new Error(`section not visible: ${name}`);
  await R.move(b.x, b.y, seconds);
  if (!open) await R.click();
  await R.frame(0.1, 300);
  // a section low in the panel: bring its content up
  if (!open && b.y > 600) await toSection(name, 180, 0.6);
};
/** Close a side-panel section quietly. */
const closeSection = (name) =>
  R.page.evaluate((name) => {
    const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
    const sm = [...e.renderRoot.querySelectorAll("summary")].find((x) => x.textContent.replace(/\s+/g, " ").trim().startsWith(name));
    if (sm) sm.parentElement.open = false;
  }, name);
/** Scroll a side-panel section's summary to `top` px with the wheel. */
const toSection = async (name, top = 150, seconds = 0.7) => {
  await R.move(1780, 640, 0.3);
  const y = await R.page.evaluate((name) => {
    const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
    const sm = [...e.renderRoot.querySelectorAll("summary")].find((x) => x.textContent.replace(/\s+/g, " ").trim().startsWith(name));
    return sm ? sm.getBoundingClientRect().top : null;
  }, name);
  if (y == null) throw new Error(`no section: ${name}`);
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  const total = y - top;
  let done = 0;
  for (let i = 1; i <= n; i++) {
    const step = Math.round(total * ease(i / n)) - done;
    done += step;
    if (step) await R.page.mouse.wheel({ deltaY: step });
    await R.frame(1 / FPS, 30);
  }
  await R.frame(1 / FPS, 120);
};

// ================================================================ part a
if (PART === "a") {
  // ---------------------------------------------------------------- 1. Teaser
  await chapter("Teaser");
  await fresh();
  await R.hideCursor();
  await quiet(EYE, 700);
  {
    const d = await camNow();
    const a = { theta: d.theta - 0.6, phi: d.phi + 0.04, radius: d.radius * 1.05 };
    const b = { theta: d.theta + 0.35, phi: d.phi - 0.04, radius: d.radius * 0.92 };
    await camOf("main", null, 0, 0, a);
    await R.sleep(1200);
    await R.title("Einstellungen, Sicherung und Umzug", `NeonPlan 3D · Folge 12 · Teil 1${VERSION}`);
    const l1 = "Wandstärke, Nordrichtung, Wetter, Favoriten und eigene Knöpfe: Mit den Einstellungen passt du NeonPlan 3D an dein Zuhause an.";
    const l2 = "In dieser Folge gehe ich jede Einstellung mit dir durch.";
    const total = N.length(l1) + N.length(l2);
    const t0 = R.time;
    const step = async (end) => {
      const t1 = R.time;
      const n = Math.max(1, Math.round((end - t1) * FPS));
      for (let i = 1; i <= n; i++) {
        const k = ease((t1 - t0 + (i / n) * (end - t1)) / total);
        await camOf("main", null, 0, 0, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k });
        await R.frame(1 / FPS, 15);
      }
    };
    await step(await line(l1));
    await R.untitle();
    await step(await line(l2));
  }

  // ---------------------------------------------------------------- 2. Intro
  await chapter("Worum es heute geht");
  await fresh();
  await R.move(960, 560, 0.01);
  await sayOver("Folge 12 ist die letzte Folge der Reihe und hat zwei Teile. In Teil 1 geht es um alle Einstellungen im Editor.");
  await R.move(1300, 420, 1.4);
  await R.move(900, 640, 1.4);
  await sayOver("Teil 2 zeigt Sicherung, Umzug auf ein neues Home Assistant und welche Daten NeonPlan speichert. Ich nehme wieder das Demo-Haus aus der Online-Demo.");
  await R.move(1200, 500, 1.6);

  // ---------------------------------------------------------------- 3. Where
  await chapter("Wo die Einstellungen liegen");
  await sayOver("Alles findest du im Reiter „Editor“. Oben schalte ich „3D daneben“ ein – dann siehst du jede Änderung sofort in 3D.");
  await R.clickOn({ text: "Editor", exact: true }, 0.6);
  await R.sleep(1200);
  await R.hold(0.4);
  await R.clickOn({ text: "3D daneben", exact: true }, 0.6);
  await live(R.time + 1.6);
  await sayOver("Rechts in der Seitenleiste stehen ganz unten Abschnitte zum Aufklappen: „Startansicht“, „Favoriten“, die „Vorlage“, „Einstellungen“ und „Sicherung“.");
  await toSection("Startansicht", 300, 1.0);
  for (const name of ["Startansicht", "Favoriten", "Vorlage", "Einstellungen", "Sicherung"]) {
    await pointAt(name, 0.45, { exact: false, tags: "SUMMARY" });
    await R.hold(0.25);
  }
  await sayOver("Alles hier gilt für den ganzen Plan – also auch für die Dashboard-Karte, den Kiosk und jedes Wandtablet.");
  await R.move(1500, 520, 1.0);
  await R.hold(0.8);

  // ---------------------------------------------------------------- 4. Walls and grid
  await chapter("Wandstärken und Raster");
  await sayOver("Ich klappe „Einstellungen“ auf. Ganz oben stehen die Wandstärken für alle Wände: „Außenwand“ und „Innenwand“, in Metern.");
  await openSection("Einstellungen", 0.5);
  await toSection("Einstellungen", 120, 0.8);
  await R.moveTo({ label: "Außenwand (m)" }, 0.5);
  await R.hold(0.3);
  await R.moveTo({ label: "Innenwand (m)" }, 0.4);
  await sayOver("Das Demo-Haus hat außen 24 Zentimeter. Ich mache daraus 36 – rechts werden alle Außenwände sofort dicker.");
  const paneHome = await camFull("pane");
  {
    // close to the living room's outer corner, so the thickness is easy to see
    const t = await worldOf("pane", "eg", 0.4, 0.6, 4.4);
    await R.move(1150, 600, 0.5);
    await flyTo("pane", { theta: paneHome.theta, phi: 0.5, radius: 9, t }, 1.4);
  }
  await setField("Außenwand (m)", "0.36", 0.5);
  await live(R.time + 1.2);
  await sayOver("Eine einzelne Wand stellst du dagegen am Raum ein, im Kasten „Wandhöhen“ mit „Dicke“ – das kam in Folge 2. Ich gehe wieder auf 24 zurück.");
  await R.hold(1.2);
  await setField("Außenwand (m)", "0.24", 0.5);
  await live(R.time + 0.6);
  await R.move(1150, 600, 0.4);
  await flyTo("pane", paneHome, 1.2);
  await sayOver("„Raster“ ist die Schrittweite beim Zeichnen: Ecken springen auf dieses Raster, im Demo-Haus alle 5 Zentimeter.");
  await R.moveTo({ label: "Raster (m)" }, 0.5);
  await R.hold(0.6);
  await sayOver("Auch die Pfeiltasten schieben das Ausgewählte um einen Rasterschritt – mit Umschalt um 10 und mit Alt um einen Zentimeter.");
  await R.move(700, 560, 0.8);
  await R.hold(0.4);
  await R.moveTo({ label: "Raster (m)" }, 0.6);
  await sayOver("Mein Tipp: Lass das Raster fein. Mit einem halben Meter triffst du beim Nachzeichnen kaum ein echtes Maß.");
  await R.hold(0.6);

  // ---------------------------------------------------------------- 5. North and sun
  await chapter("Nordrichtung und Sonnenlicht");
  await sayOver("Darunter die „Nordrichtung“: Wie viele Grad im Uhrzeigersinn von oben im Plan liegt Norden?");
  await R.moveTo({ label: "Nordrichtung" }, 0.5);
  await R.hold(0.4);
  await sayOver("Die braucht NeonPlan für die Sonne: Aus dem Sonnenstand in Home Assistant fällt Licht durch die Fenster, die zur Sonne zeigen.");
  await R.move(620, 520, 1.0);
  await R.hold(0.6);
  await sayOver("Zeigt bei dir oben im Plan nach Westen, trägst du 90 ein – eine Karten-App hilft beim Ausrichten.");
  await setField("Nordrichtung", "90", 0.6);
  await sayOver("Fällt die Sonne durch die falschen Fenster, stimmt fast immer diese Zahl nicht. Ich stelle wieder 0 ein.");
  await R.hold(0.6);
  await setField("Nordrichtung", "0", 0.4);
  await sayOver("Ganz unten im Abschnitt steht „Sonnenlicht durch die Fenster“. Ohne Haken bleibt der Boden ohne Sonnenflecken.");
  await scrollSide("Sonnenlicht durch die Fenster", 700, 0.8);
  await R.moveTo({ text: "Sonnenlicht durch die Fenster" }, 0.5);
  await R.hold(0.6);
  await sayOver("Heruntergelassene Rollläden machen die Flecken übrigens kleiner, ganz wie in echt.");
  await R.hold(0.6);

  // ---------------------------------------------------------------- 6. Roof
  await chapter("Das einfache Dach");
  await sayOver("Dann das „Dach“. Hier steht das einfache Dach für das ganze Haus: „Kein Dach“, „Flachdach“, „Satteldach“ – oder „Dachflächen (frei)“.");
  await toSection("Einstellungen", 120, 0.7);
  await R.pickOption("Dach", "Satteldach", 0.5);
  await sayOver("Beim Satteldach legt „First“ fest, ob der First entlang der langen oder der kurzen Seite läuft – die kurze ist typisch fürs Reihenhaus.");
  await R.moveTo({ label: "First" }, 0.5);
  await R.hold(0.6);
  await sayOver("Dazu kommen „Dachneigung“ in Grad und „Dachüberstand“ in Metern. Ich stelle 50 Grad ein und schaue im Reiter „3D“ nach.");
  await R.moveTo({ label: "Dachneigung" }, 0.5);
  await R.hold(0.3);
  await R.moveTo({ label: "Dachüberstand" }, 0.4);
  await setField("Dachneigung", "50", 0.5);
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(1200);
  await live(R.time + 0.6);
  await sayOver("Das Dach ist jetzt deutlich steiler. Zurück im Editor stelle ich wieder 35 Grad ein.");
  {
    const a = await camNow();
    await R.move(1000, 640, 0.4);
    await glide("main", null, 0, 0, a, { theta: a.theta + 0.45, phi: a.phi + 0.08, radius: a.radius * 0.95 }, 2.2);
  }
  await R.clickOn({ text: "Editor", exact: true }, 0.6);
  await R.sleep(1000);
  await R.frame(0.1, 200);
  await sayOver("„Dachflächen (frei)“ baut das Dach aus mehreren Teilen, mit Walm, Gauben und Dachfenstern – das zeigen die Folgen 7 und 8.");
  await openSection("Einstellungen", 0.4);
  await toSection("Einstellungen", 120, 0.6);
  await setField("Dachneigung", "35", 0.5);
  await R.moveTo({ label: "First" }, 0.5);
  await R.move(1700, (await R.locate({ label: "First" })).y - 63, 0.4);
  await R.hold(0.8);

  // ---------------------------------------------------------------- 7. Weather
  await chapter("Wetter und Regenwarnung");
  await sayOver("Weiter mit dem Wetter. Unter „Wetter-Entität“ wählst du, woher es kommt. „Automatisch“ nimmt die erste Wetter-Entität in Home Assistant.");
  await scrollSide("Warnung: Fenster offen bei Regen", 860, 0.7);
  await peekPicker("Wetter-Entität", 0.5, 1.6);
  await sayOver("Darunter die „Wetter-Effekte in 3D“: Regen, Schnee, Nebel, Wolken, Blitze, Sonne und Mond. Jeden Effekt schaltest du einzeln ab.");
  for (const name of ["Regen", "Schnee", "Nebel (graut die Szene ein)", "Wolken dunkeln Himmel und Sonne ab", "Blitze bei Gewitter", "Sonne und Mond am Himmel"]) {
    await R.moveTo({ text: name, exact: true }, 0.35);
    await R.hold(0.15);
  }
  await sayOver("Nebel ist anfangs aus, weil er die ganze Szene eingraut. Auf der Qualitätsstufe Tablet bleibt nur die Abdunkelung durch die Wolken.");
  await R.moveTo({ text: "Nebel (graut die Szene ein)", exact: true }, 0.5);
  await R.hold(0.6);
  await sayOver("Das Wetter rund ums Haus bringt die Pro-Erweiterung „Wetter draußen“. Kostenlos ist die Warnung darunter.");
  await R.moveTo({ text: "Sonne und Mond am Himmel", exact: true }, 0.5);
  await R.hold(0.4);
  await sayOver("„Warnung: Fenster offen bei Regen“: Meldet die Wetter-Entität Regen und ein Fenster ist offen, pulsiert der Raum rot. Brauchst du das nicht, nimmst du hier den Haken raus.");
  await R.moveTo({ text: "Warnung: Fenster offen bei Regen" }, 0.5);
  await R.hold(0.8);

  // ---------------------------------------------------------------- 8. Start view
  await chapter("Startansicht");
  await closeSection("Einstellungen");
  await sayOver("Weiter oben die „Startansicht“: Du drehst das Haus rechts so, wie es sich öffnen soll, und drückst „Aktuelle 3D-Ansicht als Start merken“.");
  await toSection("Startansicht", 300, 0.8);
  await openSection("Startansicht", 0.4);
  await R.moveTo({ text: "Aktuelle 3D-Ansicht als Start merken", exact: true }, 0.5);
  await R.hold(0.5);
  await sayOver("Das gilt für die 3D-Ansicht, die Karte und den Kiosk, „Standard“ nimmt es zurück. Startansichten für Etagen und Räume zeigt Folge 10.");
  await R.move(1500, 520, 1.0);
  await R.hold(0.6);
  await closeSection("Startansicht");

  // ---------------------------------------------------------------- 9. Favourites
  await chapter("Favoriten");
  await sayOver("Unter „Favoriten“ legst du fest, was im Stern der 3D-Ansicht steht: Szenen, Skripte, Automationen, Tasten und Schalter.");
  await toSection("Favoriten", 160, 0.6);
  await openSection("Favoriten", 0.4);
  await R.hold(0.6);
  await sayOver("Typisch sind Party, Anwesenheitssimulation, Verschattung oder die Bewässerung im Garten.");
  await pointAt("Szenen, Skripte, Automationen", 0.8, { exact: false, tags: "P" });
  await R.hold(0.4);
  await sayOver("In „Favorit hinzufügen“ tippst du einfach los und wählst den Treffer. Ich nehme das Skript „Wohnzimmer Alles aus“.");
  await pickEntity("Favorit hinzufügen", "alles", "Wohnzimmer Alles aus", 0.5);
  await sayOver("Die Pfeile ändern die Reihenfolge, das Kreuz entfernt einen Favoriten wieder.");
  {
    // the buttons of the newest favourite row
    const favBtn = (txt) =>
      R.page.evaluate((txt) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const sm = [...e.renderRoot.querySelectorAll("summary")].find((x) => x.textContent.trim().startsWith("Favoriten"));
        const rows = [...sm.parentElement.querySelectorAll(":scope > .fp3d-dev-row")];
        const el = [...rows[rows.length - 1].querySelectorAll("button")].find((b) => b.textContent.trim() === txt);
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }, txt);
    let b = await favBtn("↑");
    await R.move(b.x, b.y, 0.5);
    await R.click();
    await R.hold(0.4);
    b = await favBtn("✕");
    await R.move(b.x, b.y, 0.4);
    await R.hold(0.6);
  }

  // ---------------------------------------------------------------- 10. Own buttons
  await chapter("Eigene Knöpfe");
  await sayOver("Darunter stehen die „Eigenen Knöpfe“ – im Stern erscheinen sie unter den Favoriten. „+ Eigener Knopf“ legt einen neuen an.");
  await scrollSide("+ Eigener Knopf", 760, 0.8);
  await R.clickOn({ text: "+ Eigener Knopf" }, 0.5);
  await R.hold(0.3);
  await scrollSide("+ Eigener Knopf", 860, 0.6);
  await sayOver("Er bekommt eine „Beschriftung“ und eine „Aktion“. „Seite öffnen“ springt zu einem Dashboard, etwa zu deiner Gartenseite.");
  {
    // the new button's form is the last one
    const lbl = await R.page.evaluate(() => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const forms = [...e.renderRoot.querySelectorAll(".fp3d-own-button")].filter((f) => f.querySelector("select"));
      const f = forms[forms.length - 1];
      const r = f.querySelector('input[type="text"]').getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
    await R.move(lbl.x, lbl.y, 0.5);
    await R.click();
    await R.page.keyboard.down("Control");
    await R.page.keyboard.press("a");
    await R.page.keyboard.up("Control");
    await R.type("Garten", 0.08);
    await R.key("Tab");
  }
  await R.pickOption("Aktion", "Seite öffnen", 0.5);
  await R.clickOn({ label: "Pfad" }, 0.5);
  await R.type("/lovelace/garten", 0.05);
  await R.key("Tab");
  await sayOver("„Details einer Entität“ öffnet das Fenster eines Geräts aus Home Assistant, etwa den Rollladen im Wohnzimmer.");
  await R.pickOption("Aktion", "Details einer Entität", 0.5);
  await retype("Entität", "cover.wohnzimmer");
  await sayOver("„Dienst aufrufen“ startet einen Dienst. Darunter stehen seine Daten im JSON-Format, zum Beispiel welches Skript laufen soll.");
  await R.pickOption("Aktion", "Dienst aufrufen", 0.5);
  await retype("Dienst (domain.service)", "script.turn_on");
  await retype("Daten (JSON)", '{"entity_id": "script.gute_nacht"}', 0.035);
  await sayOver("Und „fire-dom-event“ öffnet zusammen mit browser_mod ein Popup mit deiner eigenen Karte – zum Beispiel alle Rollläden auf einen Blick.");
  await retype("Daten (JSON)", "", 0.03);
  await R.pickOption("Aktion", "fire-dom-event (browser_mod)", 0.5);
  await R.moveTo({ label: "Daten (JSON)" }, 0.5);
  await R.hold(0.6);
  await sayOver("Für meinen Gartenknopf bleibe ich bei „Seite öffnen“. Das Symbol ist ein Material-Design-Icon, hier eine Blume.");
  await R.pickOption("Aktion", "Seite öffnen", 0.5);
  await R.clickOn({ label: "Pfad" }, 0.4);
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  await R.type("/lovelace/garten", 0.04);
  await R.key("Tab");
  {
    const icons = await R.page.evaluate(() => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const forms = [...e.renderRoot.querySelectorAll(".fp3d-own-button")].filter((f) => f.querySelector("select"));
      const f = forms[forms.length - 1];
      const r = f.querySelector(".fp3d-icon-row input").getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
    await R.move(icons.x, icons.y, 0.5);
    await R.click();
    await R.type("flower", 0.08);
    await R.key("Tab");
  }
  await sayOver("Mit dem Pfeil wandert ein Knopf nach oben, „Löschen“ entfernt ihn.");
  await scrollSide("+ Eigener Knopf", 860, 0.5);
  {
    const btn = async (txt) => {
      const b = await R.page.evaluate((txt) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const forms = [...e.renderRoot.querySelectorAll(".fp3d-own-button")].filter((f) => f.querySelector("select"));
        const f = forms[forms.length - 1];
        const el = [...f.querySelectorAll("button")].find((x) => x.textContent.trim() === txt);
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }, txt);
      await R.move(b.x, b.y, 0.5);
    };
    await btn("↑");
    await R.hold(0.4);
    await btn("Löschen");
    await R.hold(0.6);
  }
  await sayOver("In der 3D-Ansicht öffnet der Stern jetzt die Favoriten und darunter die eigenen Knöpfe – mit meinem neuen Gartenknopf.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(1200);
  await R.clickOn(STAR, 0.7);
  await live(R.time + 1.6);
  await sayOver("Ganz unten bei den Favoriten stehen noch „Sender und Playlists“. Die gehören zur Pro-Erweiterung Klang & Kino.");
  await R.clickOn({ text: "Editor", exact: true }, 0.6);
  await R.sleep(1000);
  await R.frame(0.1, 200);
  await openSection("Favoriten", 0.4);
  await scrollSide("Sender und Playlists (Klang & Kino)", 500, 0.8);
  await pointAt("Sender und Playlists (Klang & Kino)", 0.5, { tags: "H4" });
  await R.hold(0.6);
  await closeSection("Favoriten");

  // ---------------------------------------------------------------- 11. Plan lock
  await chapter("Grundriss sperren");
  await sayOver("Ist der Grundriss fertig, sperrst du ihn: oben in der Werkzeugleiste „Grundriss“ mit dem Schloss.");
  await R.clickOn({ text: "🔒 Grundriss", exact: true }, 0.7);
  await R.hold(0.5);
  await sayOver("Dann lassen sich Räume, Wände, Türen, Fenster und Außenflächen nicht mehr versehentlich verschieben – auch neu gezeichnete nicht.");
  {
    const p = await R.planPoint(3.5, 5.2);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await R.hold(0.4);
    await R.drag(p.x + 140, p.y + 60, 1.2);
  }
  await sayOver("Ziehen auf einem Raum bewegt jetzt nur die Ansicht. Auswählen und im Formular ändern geht weiterhin.");
  await R.hold(0.6);
  await sayOver("Der Raum zeigt „Grundriss gesperrt“ – ein Klick darauf entsperrt wieder. Per Rechtsklick auf einen Raum geht es auch.");
  await sideTop(0.5);
  await R.moveTo({ text: "Grundriss gesperrt" }, 0.5);
  await R.hold(0.6);
  {
    const p = await R.planPoint(3.5, 5.2);
    await R.move(p.x, p.y, 0.6);
    await R.page.evaluate(() => {
      const c = document.getElementById("tut-cursor").style.transform.match(/-?[\d.]+/g).map(Number);
      const r = document.createElement("div");
      r.id = "tut-ring";
      r.style.left = `${c[0] + 4}px`;
      r.style.top = `${c[1] + 2}px`;
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 500);
    });
    await R.page.mouse.click(p.x, p.y, { button: "right" });
    for (let i = 0; i < 8; i++) await R.frame(1 / FPS, 25);
    await R.hold(0.8);
    await R.key("Escape");
  }
  await sayOver("Möbel und Geräte bleiben frei. Die fixierst du einzeln mit dem Schloss im Formular oder mit der Taste L – wie in Folge 4.");
  await R.clickOn({ text: "🔒 Grundriss", exact: true }, 0.6);
  await R.hold(0.8);

  // ---------------------------------------------------------------- 12. Elsewhere
  await chapter("Was woanders steht");
  await sayOver("Zwei Dinge stehen woanders: Das Grundriss-Bild unter „Vorlage“ kennst du aus Folge 2.");
  await R.clickOn({ text: "Zurück zur Etage" }, 0.5).catch(() => {});
  await toSection("Vorlage", 400, 0.7);
  await pointAt("Vorlage", 0.5, { exact: false, tags: "SUMMARY" });
  await R.hold(0.6);
  await sayOver("Und die Sensoren für Netz, Solar und Akku trägst du im Werkzeug „Energie“ ein – dazu gibt es eine eigene Folge.");
  await R.moveTo({ text: "Energie", exact: true, nth: 0 }, 0.7);
  await R.hold(0.8);
  await sayOver("Die Sprache stellst du nicht hier ein: NeonPlan folgt deinem Profil in Home Assistant.");
  await R.move(1100, 560, 1.0);
  await R.hold(0.6);

  // ---------------------------------------------------------------- 13. Outro
  await chapter("Wie geht es weiter");
  await catchUp();
  await fresh();
  await R.hideCursor();
  await quiet(EYE, 700);
  {
    const d = await camNow();
    const a = { theta: d.theta - 0.5, phi: d.phi, radius: d.radius * 1.08 };
    const b = { theta: d.theta + 0.4, phi: d.phi - 0.05, radius: d.radius * 0.95 };
    await camOf("main", null, 0, 0, a);
    await R.sleep(700);
    const end = await line("Kurz zusammengefasst: Wände, Raster, Nordrichtung, Dach, Wetter, Startansicht, Favoriten und eigene Knöpfe – alles unten in der Seitenleiste des Editors.");
    await glide("main", null, 0, 0, a, b, end - R.time);
  }
  await R.title("Teil 2: Sicherung, Umzug und Datenschutz", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  {
    let end = await line("In Teil 2 sicherst du deinen Plan und ziehst damit auf ein neues Home Assistant um.");
    await live(end);
    end = await line("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan 3D läuft auch auf alten Wandtablets. Bis gleich in Teil 2!");
    await live(end + 0.6);
  }
}

// ================================================================ part b
if (PART === "b") {
  /** The editor's notice line (restored, imported) as a screen point, or null. */
  const noticeBox = () =>
    R.page.evaluate(() => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const n = e.renderRoot.querySelector(".fp3d-notice");
      if (!n) return null;
      const r = n.getBoundingClientRect();
      return r.width ? { x: r.left + Math.min(140, r.width / 2), y: r.top + r.height / 2 } : null;
    });
  /**
   * The preview has no full-backup commands: answer them in the page like a fresh Home Assistant would (export: the
   * plan and the installed packs; import: the plan back, the living-room pack skipped as bound to the old
   * installation). Also hides prices of the demo shop and starts it disconnected (like a new installation).
   */
  const mockBackup = () =>
    R.page.evaluate(async () => {
      const p = window.fp3dPanel;
      const h = p.hass;
      const orig = h.callWS;
      await orig({ type: "neonplan3d/license/remove" });
      h.callWS = async (m) => {
        if (m.type === "neonplan3d/backup/export") {
          const { building } = await orig({ type: "neonplan3d/building/get" });
          return { format: "neonplan3d-backup", version: 1, building, packs: [{ id: "mastershort.living" }, { id: "mastershort.kitchen" }, { id: "demo.pack" }] };
        }
        if (m.type === "neonplan3d/backup/import") {
          await orig({ type: "neonplan3d/history/snapshot" });
          await orig({ type: "neonplan3d/building/save", building: m.building });
          return { building: m.building, packs: 2, skipped: [{ id: "mastershort.living" }] };
        }
        const r = await orig(m);
        if (m.type.startsWith("neonplan3d/license/") && r) return { ...r, offers: (r.offers ?? []).map((o) => ({ ...o, price: null })) };
        return r;
      };
    });
  /** The newest file in the download folder with this start of its name. */
  const downloaded = async (start) => {
    for (let i = 0; i < 40; i++) {
      const f = readdirSync(DL).filter((x) => x.startsWith(start) && x.endsWith(".json"));
      if (f.length) return join(DL, f[f.length - 1]);
      await R.sleep(150);
    }
    throw new Error(`no download: ${start}`);
  };

  // ---------------------------------------------------------------- 1. Teaser
  await chapter("Teaser");
  await fresh();
  await R.hideCursor();
  await quiet(EYE, 700);
  {
    const d = await camNow();
    const a = { theta: d.theta + 0.5, phi: d.phi + 0.05, radius: d.radius * 1.08 };
    const b = { theta: d.theta - 0.4, phi: d.phi - 0.03, radius: d.radius * 0.9 };
    await camOf("main", null, 0, 0, a);
    await R.sleep(1200);
    await R.title("Einstellungen, Sicherung und Umzug", `NeonPlan 3D · Folge 12 · Teil 2${VERSION}`);
    const l1 = "Ein Klick zu viel, ein neues Home Assistant oder neue Hardware – dein Plan geht nicht verloren.";
    const l2 = "In Teil 2 zeige ich dir Sicherung, Import und Umzug.";
    const total = N.length(l1) + N.length(l2);
    const t0 = R.time;
    const step = async (end) => {
      const t1 = R.time;
      const n = Math.max(1, Math.round((end - t1) * FPS));
      for (let i = 1; i <= n; i++) {
        const k = ease((t1 - t0 + (i / n) * (end - t1)) / total);
        await camOf("main", null, 0, 0, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k });
        await R.frame(1 / FPS, 15);
      }
    };
    await step(await line(l1));
    await R.untitle();
    await step(await line(l2));
  }

  // ---------------------------------------------------------------- 2. Intro
  await chapter("Worum es heute geht");
  await fresh();
  await mockBackup();
  await toEditor(false);
  await R.move(960, 560, 0.01);
  await sayOver("Teil 1 hat alle Einstellungen gezeigt. Jetzt geht es um Rückgängig, Wiederherstellungspunkte, die drei Arten von Dateien, den Umzug und den Datenschutz.");
  await R.move(700, 120, 1.4);
  await R.move(1700, 700, 1.6);
  await sayOver("Und zum Schluss ein paar Worte zum Ende dieser Reihe.");
  await R.move(900, 560, 1.2);

  // ---------------------------------------------------------------- 3. Undo
  await chapter("Rückgängig und Wiederholen");
  await sayOver("Das Wichtigste zuerst: Verschiebst du aus Versehen einen Raum …");
  {
    const p = await R.planPoint(3.5, 5.2);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await R.drag(p.x + 120, p.y + 90, 1.2);
  }
  await sayOver("… holt „Rückgängig“ oben in der Werkzeugleiste ihn zurück. „Wiederholen“ macht es wieder.");
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.6);
  await R.hold(0.6);
  await R.clickOn({ text: "Wiederholen", exact: true }, 0.5);
  await R.hold(0.5);
  await sayOver("Schneller geht es mit Strg+Z – und mit gedrückter Umschalttaste dazu wiederholst du.");
  await R.move(700, 560, 0.6);
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("z");
  await R.page.keyboard.up("Control");
  await R.frame(0.1, 200);
  await R.hold(0.8);
  await sayOver("Das gilt für alles, was du gerade bearbeitest. Für ältere Stände gibt es die Wiederherstellungspunkte.");
  await R.move(1400, 300, 0.8);
  await R.hold(0.4);

  // ---------------------------------------------------------------- 4. Restore points
  await chapter("Wiederherstellungspunkte");
  await sayOver("Die stehen ganz unten in der Seitenleiste im Abschnitt „Sicherung“.");
  await R.clickOn({ text: "Zurück zur Etage" }, 0.5).catch(() => {});
  await toSection("Sicherung", 200, 0.9);
  await openSection("Sicherung", 0.4);
  await R.hold(0.4);
  await sayOver("Beim Bearbeiten entsteht höchstens alle 10 Minuten ein Wiederherstellungspunkt, die letzten 20 bleiben. Jede Zeile zeigt die Zeit, die Räume und die Möbel.");
  await pointAt("Wiederherstellungspunkte", 0.5, { tags: "H4" });
  await R.hold(0.6);
  await pointAt("Räume,", 0.5, { exact: false, tags: "SPAN" });
  await R.hold(0.6);
  await sayOver("„Wiederherstellen“ holt einen Stand zurück – nach einer Rückfrage. Der jetzige Stand bleibt selbst als Punkt erhalten, du verlierst also nichts.");
  await R.moveTo({ text: "Wiederherstellen", exact: true }, 0.5);
  await R.hold(1.0);

  // ---------------------------------------------------------------- 5. Export
  await chapter("Exportieren und als Vorlage teilen");
  await sayOver("Darunter „Datei“. „Exportieren“ speichert den Plan mit allen Verknüpfungen: Räume, Möbel, Geräte und Sensoren.");
  await pointAt("Datei", 0.5, { tags: "H4" });
  await R.clickOn({ text: "Exportieren", exact: true }, 0.5);
  await R.sleep(500);
  await downloadChip(basename(await downloaded("neonplan3d-sicherung")));
  await R.hold(1.0);
  await sayOver("Bilder sind nicht drin, das steht auch darunter. Für die Bilder gibt es gleich das Komplett-Backup.");
  await noChip();
  await pointAt("Hintergrundbilder sind nicht in der Datei enthalten.", 0.5, { tags: "P" });
  await R.hold(0.6);
  await sayOver("„Als Vorlage teilen“ lässt alles weg, was zu deinem Home Assistant gehört: Bereiche, Geräte, Sensoren und Bilder.");
  await R.clickOn({ text: "Als Vorlage teilen", exact: true }, 0.5);
  await R.sleep(500);
  const template = await downloaded("neonplan3d-vorlage");
  await downloadChip(basename(template));
  await R.hold(0.8);
  await sayOver("Das ist die Datei für einen Freund, fürs Forum oder für einen Fehlerbericht – ohne deine Geräte.");
  await R.hold(0.6);
  await noChip();

  // ---------------------------------------------------------------- 6. Import
  await chapter("Importieren – und was mit Bereichen passiert");
  await sayOver("„Importieren …“ lädt so eine Datei. Ich nehme die Vorlage von eben.");
  {
    const box = await R.locate({ text: "Importieren …", exact: true });
    await R.move(box.x, box.y, 0.5);
    // the confirm is shown as a box first; the app's own confirm is answered "yes" by the dialog handler
    await ringHere();
  }
  await sayOver("Vorher fragt NeonPlan nach: Der ganze Grundriss wird ersetzt, der jetzige Stand bleibt als Wiederherstellungspunkt.");
  await dialogOk("Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.", 1.6);
  {
    const [chooser] = await Promise.all([
      R.page.waitForFileChooser(),
      R.page.evaluate(() => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const label = [...e.renderRoot.querySelectorAll("label.fp3d-upload")].find((l) => l.textContent.trim().startsWith("Importieren"));
        label.querySelector("input").click();
      }),
    ]);
    await chooser.accept([template]);
    await R.frame(0.3, 900);
  }
  await sayOver("So sieht eine Vorlage aus: Räume, Wände, Türen und Möbel sind da – aber keine Geräte und keine Verknüpfungen.");
  {
    const c = await R.page.evaluate(() => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const r = e.renderRoot.querySelector("svg").getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
    await R.move(c.x, c.y, 0.8);
    await R.hold(0.6);
  }
  await sayOver("Genau das passiert auch auf einem anderen Home Assistant: Verknüpft wird über die Bereiche und Entitäten. Heißen sie dort gleich, ist sofort alles verbunden.");
  await R.hold(0.6);
  await sayOver("Sonst wählst du je Raum den „Bereich“ neu – und schon stehen seine Geräte wieder in der Liste.");
  {
    await scrollSide("Räume", 400, 0.5).catch(() => {});
    await R.clickOn({ text: "Wohnzimmer" }, 0.6);
    await R.frame(0.2, 300);
    await R.pickOption("Bereich", "Wohnzimmer", 0.5);
    await R.hold(0.4);
    await scrollSide("Geräte", 260, 0.8).catch(() => console.log("no Geräte heading"));
    await R.hold(0.6);
  }
  await sayOver("Zurück zum alten Stand? Unter „Wiederherstellungspunkte“ steht jetzt der Punkt von vor dem Import.");
  await sideTop(0.5);
  await R.clickOn({ text: "Zurück zur Etage" }, 0.5);
  await toSection("Sicherung", 200, 0.8);
  await openSection("Sicherung", 0.3);
  await R.hold(0.3);
  const restoreBox = await R.moveTo({ text: "Wiederherstellen", exact: true, nth: 0 }, 0.5);
  await sayOver("„Wiederherstellen“ – und das Demo-Haus ist wieder komplett, mit allen Geräten.");
  await ringHere();
  {
    // the newest point is the one taken right before the import; its time as the row shows it
    const time = await R.page.evaluate(() => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const row = [...e.renderRoot.querySelectorAll(".fp3d-dev-row")].find((r) => r.textContent.includes("Wiederherstellen"));
      return row ? row.querySelector("span").textContent.split("·")[0].trim() : "";
    });
    await dialogOk(`Den Stand vom ${time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.`, 0.8);
  }
  // the real click after the shown dialog (its own confirm is answered "yes")
  await R.page.mouse.click(restoreBox.x, restoreBox.y);
  await R.frame(0.3, 1200);
  await live(R.time + 1.0);

  // ---------------------------------------------------------------- 7. Full backup
  await chapter("Komplett-Backup");
  await sayOver("Für alles auf einmal gibt es das „Komplett-Backup“. „Alles sichern“ speichert den Plan, alle Hintergrund- und Bildschirmbilder und die installierten Packs.");
  await toSection("Sicherung", 200, 0.6);
  await openSection("Sicherung", 0.3);
  await pointAt("Komplett-Backup", 0.5, { tags: "H4" });
  await R.clickOn({ text: "Alles sichern (Plan, Bilder, Packs)", exact: true }, 0.5);
  const full = await downloaded("neonplan3d-komplett");
  await downloadChip(basename(full));
  await R.hold(0.8);
  await sayOver("Der Lizenzschlüssel ist bewusst nicht in der Datei.");
  await pointAt("Eine Datei mit dem Plan", 0.5, { exact: false, tags: "P" });
  await noChip();
  await R.hold(0.4);
  await sayOver("„Komplett-Backup wiederherstellen …“ spielt sie zurück, in dieselbe oder eine andere Installation. Auch hier fragt NeonPlan vorher nach.");
  await R.moveTo({ text: "Komplett-Backup wiederherstellen …", exact: true }, 0.5);
  await R.hold(0.6);
  await sayOver("Jedes Pack wird dabei neu geprüft. Packs, die für eine andere Installation signiert sind, werden übersprungen – die holst du dort über den Shop neu.");
  await R.hold(0.8);
  await sayOver("Übrigens: Das normale Backup von Home Assistant sichert NeonPlan 3D ebenfalls vollständig mit.");
  await R.hold(0.6);

  // ---------------------------------------------------------------- 8. Moving
  await chapter("Umzug auf ein neues Home Assistant");
  const STEPS = [
    "Altes System: „Alles sichern“",
    "Neues System: NeonPlan 3D über HACS installieren, Integration hinzufügen, Bereiche anlegen",
    "Editor › Sicherung › „Komplett-Backup wiederherstellen …“",
    "Erweiterungen: Schlüssel eintragen, „Aktivieren“, Packs „Installieren“",
  ];
  await sayOver("Jetzt der Umzug, zum Beispiel auf einen neuen Mini-PC. Am einfachsten spielst du das Backup von Home Assistant auf der neuen Hardware ein – dann ist NeonPlan mit allem da.");
  await card("Weg 1: das Backup von Home Assistant", ["Auf der neuen Hardware einspielen – NeonPlan 3D ist mit Plan, Bildern, Packs und Shop-Verbindung da"], 0);
  await R.move(1100, 560, 1.2);
  await R.hold(0.6);
  await sayOver("Fängst du neu an, geht es in vier Schritten. Erstens: auf dem alten System „Alles sichern“.");
  await card("Weg 2: neu anfangen", STEPS, 0);
  await R.moveTo({ text: "Alles sichern (Plan, Bilder, Packs)", exact: true }, 0.6);
  await R.hold(0.6);
  await sayOver("Zweitens: Auf dem neuen System installierst du NeonPlan 3D über HACS, fügst die Integration hinzu und legst deine Bereiche an.");
  await card("Weg 2: neu anfangen", STEPS, 1);
  await R.hold(0.8);
  await sayOver("Drittens: Im Editor unter „Sicherung“ das Komplett-Backup wiederherstellen.");
  await card("Weg 2: neu anfangen", STEPS, 2);
  {
    const [chooser] = await Promise.all([R.page.waitForFileChooser(), R.clickOn({ text: "Komplett-Backup wiederherstellen …", exact: true }, 0.5)]);
    await noCard();
    await dialogOk("Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.", 0.8);
    await chooser.accept([full]);
    await R.frame(0.3, 1500);
  }
  await sayOver("Die Meldung oben sagt, was zurückkam – und welches Pack übersprungen wurde, weil es noch für die alte Installation signiert ist.");
  {
    await sideTop(0.6);
    const n = await noticeBox();
    if (n) await R.move(n.x, n.y, 0.6);
    else console.log("no notice after the full backup");
    await R.hold(1.0);
  }
  await sayOver("Viertens: Unter „Erweiterungen“ trägst du deinen Lizenzschlüssel ein und drückst „Aktivieren“. Ich nehme einen erfundenen Demo-Schlüssel.");
  await card("Weg 2: neu anfangen", STEPS, 3);
  await R.hold(0.6);
  await noCard();
  await R.clickOn({ text: "✦ Erweiterungen" }, 0.6);
  await R.sleep(800);
  await R.clickOn("input.fp3d-shop-key", 0.6);
  await R.type("NP-DEMO-1234-ABCD-7K2M", 0.05);
  await R.clickOn({ text: "Aktivieren", exact: true }, 0.5);
  await R.hold(0.6);
  await sayOver("Dann stehen deine Käufe da, und „Installieren“ holt jedes Pack neu – signiert für diese Installation.");
  await R.moveTo({ text: "Installieren", exact: true }, 0.6).catch(() => {});
  await R.click().catch(() => {});
  await R.hold(0.8);
  await sayOver("Warum neu? Jedes Pack wird für genau eine Installation signiert. Die erkennt der Shop an der „Installations-Kennung“, einem anonymen Fingerabdruck.");
  await pointAt("Installations-Kennung", 0.5, { tags: "SPAN" }).catch(() => {});
  await R.hold(0.8);
  await sayOver("Ein Schlüssel gilt für bis zu drei Installationen gleichzeitig. Verbindest du eine neue, fällt die älteste heraus – bis zu fünf neue Verbindungen sind pro Jahr möglich.");
  await R.move(1200, 560, 1.2);
  await R.hold(0.6);
  await sayOver("Auf dem alten System kannst du die Verbindung mit „Trennen“ lösen. Die installierten Packs bleiben dort trotzdem.");
  await R.moveTo({ text: "Trennen", exact: true }, 0.6).catch(() => {});
  await R.hold(0.8);

  // ---------------------------------------------------------------- 9. Privacy
  await chapter("Daten und Datenschutz");
  await fresh();
  await quiet(EYE, 600);
  await R.hideCursor();
  {
    const d = await camNow();
    const a = { theta: d.theta - 0.5, phi: d.phi, radius: d.radius * 1.1 };
    const b = { theta: d.theta + 0.2, phi: d.phi - 0.03, radius: d.radius * 1.02 };
    await camOf("main", null, 0, 0, a);
    await R.sleep(600);
    const PRIV = ["Plan, Bilder und Packs: in Home Assistant unter .storage", "Internet nur mit Lizenzschlüssel: einmal am Tag, Schlüssel + anonyme Kennung", "Kamerabilder, Verläufe, Zustände: bleiben in Home Assistant"];
    const l1 = "Und was speichert NeonPlan wo? Plan, Bilder und Packs liegen in Home Assistant, im Ordner „.storage“. Nichts davon verlässt deine Installation.";
    const l2 = "Ins Internet geht NeonPlan nur, wenn du einen Lizenzschlüssel einträgst: dann einmal am Tag zum Shop, mit dem Schlüssel und der anonymen Kennung.";
    const l3 = "Kamerabilder, Verläufe und Zustände bleiben in Home Assistant und werden nur in deinem Browser angezeigt.";
    const total = N.length(l1) + N.length(l2) + N.length(l3);
    const t0 = R.time;
    const step = async (end) => {
      const t1 = R.time;
      const n = Math.max(1, Math.round((end - t1) * FPS));
      for (let i = 1; i <= n; i++) {
        const k = ease((t1 - t0 + (i / n) * (end - t1)) / total);
        await camOf("main", null, 0, 0, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k });
        await R.frame(1 / FPS, 15);
      }
    };
    await card("Daten und Datenschutz", PRIV, 0);
    await step(await line(l1));
    await card("Daten und Datenschutz", PRIV, 1);
    await step(await line(l2));
    await card("Daten und Datenschutz", PRIV, 2);
    await step(await line(l3));
    await noCard();
  }

  // ---------------------------------------------------------------- 10. Help
  await chapter("Hilfe und Rückmeldung");
  await fresh();
  await R.hideCursor(false);
  await toEditor(false);
  await R.move(1500, 600, 0.01);
  await sayOver("Hakt etwas, steht in der Seitenleiste „Hilfe und Rückmeldung“: „Problem melden“ öffnet ein Issue auf GitHub, „Idee vorschlagen“ eine Diskussion.");
  await toSection("Vorlage", 700, 0.9);
  await pointAt("Hilfe und Rückmeldung", 0.5, { tags: "H3" });
  await R.hold(0.3);
  await R.moveTo({ text: "Problem melden" }, 0.5);
  await R.hold(0.4);
  await R.moveTo({ text: "Idee vorschlagen" }, 0.5);
  await sayOver("Und „Community auf Discord“ bringt dich zu den anderen NeonPlan-Nutzern – dort helfen wir uns gegenseitig.");
  await R.moveTo({ text: "Community auf Discord" }, 0.5);
  await R.hold(1.0);

  // ---------------------------------------------------------------- 11. End of the series
  await chapter("Ende der Reihe");
  await catchUp();
  await fresh();
  await R.hideCursor();
  await quiet(EYE, 700);
  {
    const d = await camNow();
    const a = { theta: d.theta - 0.7, phi: d.phi + 0.04, radius: d.radius * 1.1 };
    const b = { theta: d.theta + 0.2, phi: d.phi - 0.03, radius: d.radius * 1.0 };
    await camOf("main", null, 0, 0, a);
    await R.sleep(700);
    const l1 = "Das war die letzte Folge der Reihe. Vom ersten Raum bis zum Umzug kennst du jetzt jeden Knopf in NeonPlan 3D.";
    const l2 = "Danke, dass du dabei warst! Alle Folgen findest du in der Playlist „NeonPlan 3D – Tutorials“.";
    const l3 = "Links zur Online-Demo, zur Anleitung, zu GitHub für Fehlermeldungen und zu unserer Discord-Community stehen in der Beschreibung.";
    const l4 = "Und denk dran: NeonPlan 3D läuft auch auf alten Wandtablets. Bis bald!";
    const total = N.length(l1) + N.length(l2) + N.length(l3) + N.length(l4) + 0.6;
    const t0 = R.time;
    const step = async (end) => {
      const t1 = R.time;
      const n = Math.max(1, Math.round((end - t1) * FPS));
      for (let i = 1; i <= n; i++) {
        const k = ease(Math.min(1, (t1 - t0 + (i / n) * (end - t1)) / total));
        await camOf("main", null, 0, 0, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k });
        await R.frame(1 / FPS, 15);
      }
    };
    await step(await line(l1));
    await R.title("Danke fürs Zuschauen!", `Playlist „NeonPlan 3D – Tutorials“`);
    await step(await line(l2));
    await R.title("Demo · Anleitung · GitHub · Discord", `Links in der Beschreibung`);
    await step(await line(l3));
    await R.title("NeonPlan 3D", `läuft auch auf alten Wandtablets${VERSION}`);
    await step((await line(l4)) + 0.6);
  }
}

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
