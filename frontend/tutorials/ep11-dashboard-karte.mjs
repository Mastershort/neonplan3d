// Tutorial episode 11 – "Dashboard-Karte und Wandtablet" (manual chapters 8 and 9), in two parts (the checklist does
// not fit into 8 minutes):
//   a) Die Karte anlegen und einstellen: adding the card in Home Assistant (said over the card editor), then every
//      option of the visual card editor from the top: Etage, Größe, Höhe, Look, Akzentfarbe, Wände, Qualität, Etagen
//      darunter, Symbole, Heatmap, Stromfluss, Hologramme, Schalter in der Karte (and which), Stern, eigene Namen,
//      ausgeblendete Bedienelemente / ausblenden nach, Mini-Ansichten, Raumnamen, Energiewerte, Raum-Details,
//      Vollbild-Taste, Etagen auseinander, Dach ausblenden, and the section „Funktionen“ (Warnungen, Sprung, Szenen,
//      Bewegungsspur, Kamera-Wand, Wetter with its entity).
//   b) YAML, Kiosk und alte Wandtablets: the section „Wandtablet (Kiosk)“ (idle return, screensaver turn, night
//      dimming by the sun or a time range, a button to a dashboard), the YAML code with the options that exist only
//      there (room, floor, start_view, controls_side, keep_view, buttons, free seconds), the performance display (no
//      drawing while idle), the quality level Tablet (pixel ratio 1, half-rate animations), Auto on weak devices, tips
//      for wall tablets, the card on a wall tablet in landscape and portrait.
// The preview's card mode (`preview/index.html?card`: the visual editor left, the card right, like Home Assistant's
// card dialog) with the invented demo house. The page is shown at 125 % (CSS 1536 × 864, screenshots 1920 × 1080).
// Usage (from frontend/): node tutorials/ep11-dashboard-karte.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep11a/de and …/en, resp. ep11b)
// EP11_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4> --en tutorials/ep11a-narration-en.json

import { FPS, narration, startRecorder } from "./recorder.mjs";

const out = process.argv[2] ?? "tutorial-ep11";
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP11_FAST;
// controls_side and keep_view (shown in part 2) come with 1.12.7
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D 1.12.7</span>`;

// ---------------------------------------------------------------- recorder
const R = await startRecorder({ outDir: out, width: 1536, height: 864, lang: "de" });
// 125 %: the editor's small labels stay readable in the video
await R.page.setViewport({ width: 1536, height: 864, deviceScaleFactor: 1.25 });
const N = narration(R, process.argv.slice(4));
const { say, sayOver, chapter, catchUp } = N;
if (FAST) {
  const { move, type } = R;
  R.move = (x, y) => move(x, y, 0.04);
  R.type = (text) => type(text, 0.01);
}
for (const ev of ["uncaughtException", "unhandledRejection"]) {
  process.on(ev, async (err) => {
    console.error(err);
    await R.finish().catch(() => {});
    process.exit(1);
  });
}
R.page.on("dialog", (d) => void d.accept());
await R.page.evaluateOnNewDocument(() => {
  try {
    localStorage.clear();
  } catch {
    // no storage
  }
});

// ---------------------------------------------------------------- helpers
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
/** Real frames until video time `end` (the card flies, effects run), with an optional step per frame. */
const live = async (end, each = null) => {
  const n = Math.max(1, Math.round((end - R.time) * FPS));
  for (let i = 1; i <= n; i++) {
    if (each) await each(i, n);
    await R.frame(1 / FPS, 15);
  }
};
const liveFor = (seconds, each) => live(R.time + seconds, each);
/** The card's 3D view and its viewer, as code for page.evaluate. */
const VIEWER = `const card = window.fp3dCard; const v = card.shadowRoot.querySelector("fp3d-view3d"); const viewer = v && Object.values(v).find((o) => o && o.floors && o.floorMap);`;
const inCard = (code, ...args) => R.page.evaluate((VIEWER, code, args) => new Function("args", `${VIEWER} ${code}`)(args), VIEWER, code, args);
/** The camera of the card (theta, phi, radius, target). */
const camNow = () => inCard(`const w = viewer.controls.view; return { theta: w.theta, phi: w.phi, radius: w.radius, target: { x: w.target.x, y: w.target.y, z: w.target.z } };`);
const setCam = (c) =>
  inCard(
    `const c = args[0]; const w = viewer.controls.view; w.theta = c.theta; w.phi = c.phi; w.radius = c.radius; if (c.target) w.target.set(c.target.x, c.target.y, c.target.z); viewer.invalidate();`,
    c,
  );
/** Glide the card's camera from where it stands by dTheta and a radius factor. */
const orbit = async (dTheta, factor = 1, seconds = 2, dPhi = 0) => {
  const a = await camNow();
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  for (let i = 1; i <= n; i++) {
    const k = ease(i / n);
    await setCam({ theta: a.theta + dTheta * k, phi: a.phi + dPhi * k, radius: a.radius * (1 + (factor - 1) * k) });
    await R.frame(1 / FPS, 40);
  }
};
/** Screen point of a plan point (x, height y, z) of a floor in the card. */
const point3d = (floorId, x, y, z) =>
  inCard(
    `const [floorId, x, y, z] = args; const fv = viewer.floorMap.get(floorId); const p = fv.group.position.clone().set(x, y, z); fv.group.localToWorld(p); p.project(viewer.camera);
     const c = (v.renderRoot ?? v.shadowRoot).querySelector("canvas").getBoundingClientRect(); return { x: c.left + ((p.x + 1) / 2) * c.width, y: c.top + ((1 - p.y) / 2) * c.height };`,
    floorId,
    x,
    y,
    z,
  );
/** Tap a room of the card in 3D and let the flight run. */
const tapRoom = async (floorId, x, z, seconds = 0.5, flight = 1.4) => {
  const p = await point3d(floorId, x, 0.05, z);
  await R.move(p.x, p.y, seconds);
  await R.click();
  await liveFor(flight);
};
/** The configuration: set in the card and in the editor (invisible – for clean starting states only). */
const setCfg = (cfg) =>
  R.page.evaluate((cfg) => {
    window.fp3dCard._roomId = null;
    window.fp3dCard.setConfig(cfg);
    document.querySelector("neonplan3d-card-editor").setConfig(cfg);
  }, cfg);
const getCfg = () => R.page.evaluate(() => ({ ...document.querySelector("neonplan3d-card-editor")._config }));
/** A state of the mock Home Assistant (invented entities only), for the card and the editor. */
const setState = (id, state, attributes) =>
  R.page.evaluate(
    (id, state, attributes) => {
      const card = window.fp3dCard;
      const hass = card.hass;
      const old = hass.states[id];
      const states = { ...hass.states, [id]: { entity_id: id, ...(old ?? {}), state, attributes: { ...(old?.attributes ?? {}), ...(attributes ?? {}) } } };
      card.hass = { ...hass, states };
      document.querySelector("neonplan3d-card-editor").hass = card.hass;
    },
    id,
    state,
    attributes ?? null,
  );
/** Any element whose text contains `text` (innermost, last match): a point on it. */
const textBox = (text, nth = -1) =>
  R.page.evaluate(
    (text, nth) => {
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      const hits = [];
      for (const el of walk(document)) {
        if (!/^(P|SPAN|DIV|LABEL|BUTTON|B|H3|SMALL|CODE)$/.test(el.tagName)) continue;
        const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("");
        if (!own.includes(text)) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) hits.push(el);
      }
      const hit = nth < 0 ? hits[hits.length - 1] : hits[nth];
      if (!hit) return null;
      const r = hit.getBoundingClientRect();
      return { x: r.left + Math.min(r.width / 2, 110), y: r.top + Math.min(r.height / 2, 12), top: r.top };
    },
    text,
    nth,
  );
const moveToText = async (text, seconds = 0.5, nth = -1) => {
  const b = await textBox(text, nth);
  if (!b) throw new Error(`text not found: ${text}`);
  await R.move(b.x, b.y, seconds);
};
/** Scroll the page (the editor) with the wheel until the text sits `top` pixels from the top. */
const scrollEd = async (text, top = 160, seconds = 0.6) => {
  const cur = await R.page.evaluate(() => {
    const c = document.getElementById("tut-cursor").style.transform.match(/-?[\d.]+/g).map(Number);
    return { x: c[0] + 4, y: c[1] + 2 };
  });
  // the wheel over the card would zoom the 3D view: over the editor
  if (cur.x > 470) await R.move(300, Math.min(Math.max(cur.y, 200), 700), 0.35);
  await R.page.evaluate(() => {
    let a = document.activeElement;
    while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement;
    a?.blur?.();
  });
  const b = await textBox(text, 0);
  if (!b) throw new Error(`text not found: ${text}`);
  const total = b.top - top;
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * FPS));
  let done = 0;
  for (let i = 1; i <= n; i++) {
    const step = Math.round(total * ease(i / n)) - done;
    done += step;
    if (step) await R.page.mouse.wheel({ deltaY: step });
    await R.frame(1 / FPS, 30);
  }
  await R.frame(1 / FPS, 120);
};
/** A select field of the editor whose own label text is exactly `label`: its centre. */
const selBox = (label) =>
  R.page.evaluate((label) => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    for (const el of walk(document)) {
      if (el.tagName !== "LABEL") continue;
      const s = el.querySelector("select");
      if (!s || s.getBoundingClientRect().width === 0) continue;
      const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim();
      if (own !== label) continue;
      const r = s.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    return null;
  }, label);
/** A click ring at x/y without clicking. */
const ring = async (x, y) => {
  await R.page.evaluate(
    (x, y) => {
      const r = document.createElement("div");
      r.id = "tut-ring";
      r.style.left = `${x}px`;
      r.style.top = `${y}px`;
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 500);
    },
    x,
    y,
  );
  for (let i = 0; i < 8; i++) await R.frame(1 / FPS, 25);
};
/** Open a select field: its option list as an overlay (a native dropdown is not in headless screenshots). */
const openList = (label, option) =>
  R.page.evaluate(
    (label, option) => {
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      let sel = null;
      for (const el of walk(document)) {
        if (el.tagName !== "LABEL") continue;
        const s = el.querySelector("select");
        if (!s || s.getBoundingClientRect().width === 0) continue;
        if ([...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim() === label) sel = s;
      }
      if (!sel) return null;
      if (!document.getElementById("tut-options-style")) {
        const st = document.createElement("style");
        st.id = "tut-options-style";
        st.textContent = `#tut-options { position: fixed; z-index: 2147483640; background: #101a2e; border: 1px solid #37e0ff; border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0,0,0,.6); padding: 4px 0; font: 15px/1.2 system-ui, "Segoe UI", sans-serif; color: #eaf6ff; overflow: hidden; }
          #tut-options div { padding: 7px 14px; white-space: nowrap; }
          #tut-options div.tut-sel { color: #37e0ff; }
          #tut-options div.tut-hover { background: #1f6f86; color: #fff; }`;
        document.head.appendChild(st);
      }
      document.getElementById("tut-options")?.remove();
      const r = sel.getBoundingClientRect();
      const o = document.createElement("div");
      o.id = "tut-options";
      let hit = null;
      for (const opt of sel.options) {
        const d = document.createElement("div");
        d.textContent = opt.textContent.trim();
        if (opt.selected) d.className = "tut-sel";
        if (d.textContent === option) hit = d;
        o.appendChild(d);
      }
      o.style.left = `${r.left}px`;
      o.style.minWidth = `${r.width}px`;
      document.body.appendChild(o);
      const hh = o.getBoundingClientRect().height;
      o.style.top = `${r.bottom + hh + 4 < innerHeight ? r.bottom + 2 : Math.max(4, r.top - hh - 2)}px`;
      if (!hit) return option ? null : { x: 0, y: 0 };
      hit.classList.add("tut-hover");
      const b = hit.getBoundingClientRect();
      return { x: b.left + Math.min(60, b.width / 2), y: b.top + b.height / 2 };
    },
    label,
    option,
  );
const setSelect = (label, option) =>
  R.page.evaluate(
    (label, option) => {
      document.getElementById("tut-options")?.remove();
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      for (const el of walk(document)) {
        if (el.tagName !== "LABEL") continue;
        const s = el.querySelector("select");
        if (!s || s.getBoundingClientRect().width === 0) continue;
        if ([...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim() !== label) continue;
        const opt = [...s.options].find((o) => o.textContent.trim() === option);
        s.value = opt.value;
        s.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        s.blur();
        return;
      }
    },
    label,
    option,
  );
/** Pick an option of a select field (its own label text exactly `label`); `hold` keeps the list open a moment. */
const pick = async (label, option, seconds = 0.5, hold = 0.3) => {
  const box = await selBox(label);
  if (!box) throw new Error(`no select: ${label}`);
  await R.move(box.x, box.y, seconds);
  await ring(box.x, box.y);
  const at = await openList(label, option);
  if (!at) throw new Error(`no option: ${label} / ${option}`);
  await R.frame(hold, 60);
  await R.move(at.x, at.y, 0.4);
  await R.click();
  await setSelect(label, option);
  await R.frame(1 / FPS, 250);
};
/** Show a select's option list for a while (the cursor walks down the options), then pick `option`. */
const showList = async (label, option, seconds) => {
  const box = await selBox(label);
  if (!box) throw new Error(`no select: ${label}`);
  await R.move(box.x, box.y, 0.5);
  await ring(box.x, box.y);
  await openList(label, option);
  const pts = await R.page.evaluate(() => [...document.querySelectorAll("#tut-options div")].map((d) => { const b = d.getBoundingClientRect(); return { x: b.left + 50, y: b.top + b.height / 2 }; }));
  const each = Math.max(0.35, (seconds - 0.8) / pts.length);
  for (const p of pts) {
    await R.move(p.x, p.y, Math.min(0.4, each));
    if (each > 0.4) await R.hold(each - 0.4);
  }
  const at = await openList(label, option);
  await R.move(at.x, at.y, 0.4);
  await R.click();
  await setSelect(label, option);
  await R.frame(1 / FPS, 250);
};
/** Click a toggle (checkbox label) of the editor by its text. */
const toggle = async (text, seconds = 0.5) => {
  const b = await R.page.evaluate((text) => {
    const ed = document.querySelector("neonplan3d-card-editor").shadowRoot;
    const l = [...ed.querySelectorAll("label.toggle, label.chip")].find((l) => l.textContent.replace(/\s+/g, " ").trim().startsWith(text));
    if (!l) return null;
    const r = l.querySelector("input").getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }, text);
  if (!b) throw new Error(`no toggle: ${text}`);
  await R.move(b.x, b.y, seconds);
  await R.click();
  await R.frame(1 / FPS, 200);
};
/** Type into a text or number field of the editor (by label), then leave it (the change applies). */
const fillField = async (label, value, perLetter = 0.07) => {
  await R.clickOn({ label }, 0.5);
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  await R.type(value, FAST ? 0.01 : perLetter);
  await R.page.evaluate(() => {
    let a = document.activeElement;
    while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement;
    a?.blur?.();
  });
  await R.frame(1 / FPS, 300);
};
/** A small caption at the top of the card ("eine Minute später"), or none. */
const caption = (text) =>
  R.page.evaluate((text) => {
    document.getElementById("tut-cap")?.remove();
    if (!text) return;
    const d = document.createElement("div");
    d.id = "tut-cap";
    d.style.cssText =
      "position:fixed;left:50%;top:38px;transform:translateX(-50%);z-index:2147483643;padding:10px 22px;border-radius:12px;background:rgba(8,16,34,.88);border:2px solid #37e0ff;box-shadow:0 0 22px rgba(55,224,255,.45);color:#eaf6ff;font:700 26px/1 system-ui,'Segoe UI',sans-serif";
    d.textContent = text;
    document.body.appendChild(d);
  }, text);
/** A big copy of the card's performance display at the bottom right of the card (the original is tiny). */
const statsCallout = (on = true) =>
  R.page.evaluate((on) => {
    let d = document.getElementById("tut-stats");
    if (!on) return d?.remove();
    const v = window.fp3dCard.shadowRoot.querySelector("fp3d-view3d");
    const s = (v.renderRoot ?? v.shadowRoot).querySelector(".fp3d-stats");
    if (!d) {
      d = document.createElement("div");
      d.id = "tut-stats";
      d.style.cssText =
        "position:fixed;left:660px;top:96px;z-index:2147483643;max-width:820px;padding:10px 18px;border-radius:12px;background:rgba(8,16,34,.9);border:2px solid #37e0ff;box-shadow:0 0 22px rgba(55,224,255,.45);color:#eaf6ff;font:600 21px/1.3 system-ui,'Segoe UI',sans-serif";
      document.body.appendChild(d);
    }
    d.textContent = s ? s.textContent.replace(/\s+/g, " ").trim() : "";
  }, on);
const park = () => R.page.mouse.move(250, 40);

// ---------------------------------------------------------------- the page
/** The preview's card mode at 125 %: the editor left (scrolls with the page), the card right (stays). */
const start = async (cfg = { type: "custom:neonplan3d-card" }) => {
  await R.open("card");
  await R.page.evaluate((cfg) => {
    const card = window.fp3dCard;
    const wrap = card.parentElement;
    wrap.style.gridTemplateColumns = "460px 1fr";
    wrap.style.alignItems = "start";
    wrap.firstElementChild.style.marginBottom = "520px";
    card.style.cssText = "position:sticky;top:24px;display:block";
    window.scrollTo(0, 0);
  }, cfg);
  await setCfg(cfg);
  await R.sleep(3500);
};
/** The card alone, dressed as a wall tablet (only the picture around it; the card is unchanged). */
const tablet = async (cfg, portrait = false) => {
  await R.page.evaluate(
    (cfg, portrait) => {
      const card = window.fp3dCard;
      const old = document.querySelector(".tut-bezel");
      const wrap = old ? old.parentElement : card.parentElement;
      if (old) {
        old.replaceWith(card);
      }
      document.getElementById("tut-yaml-box")?.remove();
      wrap.firstElementChild.style.display = "none";
      wrap.style.cssText += ";display:flex;align-items:center;justify-content:center;height:100vh;box-sizing:border-box;padding:0;background:radial-gradient(circle at 50% 40%, #1b2638, #070b14)";
      const bezel = document.createElement("div");
      bezel.className = "tut-bezel";
      bezel.style.cssText = "padding:28px;border-radius:38px;background:#0d0f13;box-shadow:0 30px 80px rgba(0,0,0,.7), inset 0 0 0 2px #2a2f38";
      const screen = document.createElement("div");
      screen.className = "tut-screen";
      const [w, h] = portrait ? [470, 760] : [1200, 750];
      screen.style.cssText = `width:${w}px;height:${h}px;border-radius:10px;overflow:hidden;background:#000`;
      card.style.cssText = "display:block";
      card.replaceWith(bezel);
      bezel.append(screen);
      screen.append(card);
      window.scrollTo(0, 0);
      card._roomId = null;
      card.setConfig({ ...cfg, height: h });
    },
    cfg,
    portrait,
  );
  await R.sleep(3500);
};

// ---------------------------------------------------------------- YAML code view
const YAML_STYLE = `#tut-yaml-box { background:#1c1c1c; border-radius:12px; padding:16px 0 18px; font: 15px/1.55 Consolas, "Cascadia Mono", monospace; color:#d4d4d4; }
  #tut-yaml-box .hd { padding:0 18px 10px; margin-bottom:8px; border-bottom:1px solid rgba(225,225,225,.15); font:600 13px/1.2 system-ui,"Segoe UI",sans-serif; letter-spacing:.04em; text-transform:uppercase; color:#9b9b9b; }
  #tut-yaml-box .ln { padding:0 18px; white-space:pre; min-height:1.55em; transition: background .2s; }
  #tut-yaml-box .ln.hi { background: rgba(55,224,255,.16); box-shadow: inset 3px 0 0 #37e0ff; }
  #tut-yaml-box .k { color:#9cdcfe; } #tut-yaml-box .v { color:#ce9178; } #tut-yaml-box .c { color:#6a9955; }`;
/** The config as YAML lines (flat options, the buttons list nested). */
const toYaml = (cfg) => {
  const lines = [];
  for (const [k, v] of Object.entries(cfg)) {
    if (k === "buttons") {
      lines.push("buttons:");
      for (const b of v) {
        const e = Object.entries(b);
        e.forEach(([bk, bv], i) => lines.push(`${i ? "    " : "  - "}${bk}: ${bv}`));
      }
    } else if (Array.isArray(v)) lines.push(`${k}: [${v.join(", ")}]`);
    else if (v && typeof v === "object") lines.push(`${k}: { ${Object.entries(v).map(([a, b]) => `${a}: ${b}`).join(", ")} }`);
    else lines.push(`${k}: ${v}`);
  }
  return lines;
};
/** Show the code view instead of the visual editor, with these lines. */
const yamlShow = (lines) =>
  R.page.evaluate(
    (lines, style) => {
      const ed = document.querySelector("neonplan3d-card-editor");
      const box = ed.parentElement;
      box.style.display = "none";
      if (!document.getElementById("tut-yaml-style")) {
        const st = document.createElement("style");
        st.id = "tut-yaml-style";
        st.textContent = style;
        document.head.appendChild(st);
      }
      let y = document.getElementById("tut-yaml-box");
      if (!y) {
        y = document.createElement("div");
        y.id = "tut-yaml-box";
        box.after(y);
      }
      y.innerHTML = `<div class="hd">Code-Editor (YAML)</div>`;
      for (const l of lines) {
        const d = document.createElement("div");
        d.className = "ln";
        y.appendChild(d);
        window.tutYamlSet(d, l);
      }
      window.scrollTo(0, 0);
    },
    lines,
    YAML_STYLE,
  );
await R.page.evaluateOnNewDocument(() => {
  // colours a YAML line: key, value, comment
  window.tutYamlSet = (d, l) => {
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const m = /^(\s*-?\s*)([\w]+)(:)(.*)$/.exec(l);
    d.innerHTML = m ? `${esc(m[1])}<span class="k">${esc(m[2])}</span>${m[3]}<span class="v">${esc(m[4])}</span>` : esc(l);
    d.dataset.raw = l;
  };
});
/** Type a new YAML line at the end (or after line `after`), letter by letter, highlighted. */
const yamlType = async (text, perLetter = 0.045) => {
  await R.page.evaluate(() => {
    for (const d of document.querySelectorAll("#tut-yaml-box .ln.hi")) d.classList.remove("hi");
    const d = document.createElement("div");
    d.className = "ln hi tut-new";
    document.getElementById("tut-yaml-box").appendChild(d);
  });
  const step = FAST ? text.length : 2;
  for (let i = step; i < text.length + step; i += step) {
    await R.page.evaluate((t) => {
      const d = document.querySelector("#tut-yaml-box .tut-new");
      window.tutYamlSet(d, t);
    }, text.slice(0, i));
    await R.frame(FAST ? 0.01 : perLetter * step, 10);
  }
  await R.page.evaluate(() => document.querySelector("#tut-yaml-box .tut-new")?.classList.remove("tut-new"));
};
/** Highlight the lines whose text starts with one of these keys. */
const yamlMark = (...keys) =>
  R.page.evaluate((keys) => {
    for (const d of document.querySelectorAll("#tut-yaml-box .ln")) d.classList.toggle("hi", keys.some((k) => d.dataset.raw?.trimStart().startsWith(k)));
  }, keys);
/** The end of the typed text of the last line (for the cursor). */
const yamlLastLine = () =>
  R.page.evaluate(() => {
    const all = document.querySelectorAll("#tut-yaml-box .ln");
    const d = all[all.length - 1];
    const r = d.getBoundingClientRect();
    return { x: r.left + Math.min(380, 18 + d.textContent.length * 8.3), y: r.top + r.height / 2 };
  });

// ---------------------------------------------------------------- shared places
const STAR = 'button[aria-label="Zentral: alle Lichter, Rollläden und Favoriten"]';
const EYE_BACK = 'button[aria-label="Bedienelemente wieder einblenden"]';
// room centres (plan metres) of the demo house
const WOHNEN = ["eg", 3, 2.3];
const KUECHE = ["eg", 8, 2.3];
const BAD = ["eg", 5.6, 6.3];
const KIND = ["og", 2.2, 2.1];
/** The usual config of the card from the middle of part 1 on. */
const BASE = { type: "custom:neonplan3d-card", floor: "eg", height: 760 };

// ================================================================ PART 1: the card and every option of its editor
if (PART === "a") {
  // ---------------------------------------------------------------- teaser
  await chapter("Teaser");
  await start();
  await R.hideCursor();
  await tablet({ type: "custom:neonplan3d-card", controls: true, fullscreen_button: true });
  {
    await setCam({ theta: -0.9, phi: 0.95, radius: 34 });
    await R.frame(0.2, 900);
    await R.title("Dashboard-Karte und Wandtablet", `NeonPlan 3D · Folge 11 · Teil 1${VERSION}`);
    const l1 = "NeonPlan 3D als Karte auf deinem Dashboard – und an der Wand, auf einem alten Tablet, den ganzen Tag.";
    await sayOver(l1);
    await orbit(0.7, 0.92, N.length(l1));
    await R.untitle();
    const l2 = "In dieser Folge richtest du die Karte ein. Teil eins zeigt jede Option im Karten-Editor.";
    await sayOver(l2);
    await orbit(0.6, 0.95, N.length(l2));
  }

  // ---------------------------------------------------------------- adding the card
  await chapter("Die Karte anlegen");
  await start();
  await R.hideCursor(false);
  await R.move(700, 420, 0.01);
  await sayOver("Die Karte legst du in Home Assistant an: Dashboard bearbeiten, „Karte hinzufügen“ und nach „NeonPlan“ suchen.");
  await R.move(1000, 260, 0.8);
  await liveFor(1.5);
  await sayOver("Sie kommt mit der Integration und wird automatisch geladen. Eine Ressource musst du nicht eintragen.");
  await R.move(800, 330, 0.8);
  await sayOver("Dann öffnet sich dieser Editor. Links stehen alle Optionen, rechts siehst du die Karte – jede Änderung sofort.");
  await moveToText("Ansicht", 0.6, 0);
  await R.hold(1.2);
  await R.move(1000, 250, 0.7);
  await sayOver("Was auf dem Standard steht, lässt der Editor im YAML weg. So bleibt die Konfiguration kurz.");
  await R.move(260, 300, 0.7);

  // ---------------------------------------------------------------- view: floor, size, height
  await chapter("Etage, Größe und Höhe");
  await sayOver("Ganz oben die „Etage“: „Ganzes Haus“ zeigt alle Etagen, ein Tipp auf eine Etage öffnet sie.");
  await showList("Etage", "Ganzes Haus (Etage antippen zum Öffnen)", 3);
  await sayOver("Wählst du eine Etage, startet die Karte dort – zum Beispiel im Erdgeschoss.");
  await pick("Etage", "Erdgeschoss");
  await liveFor(1.5);
  await sayOver("Bei „Größe“ hast du „Feste Höhe“ oder „Bildschirm füllen“. Füllen passt am besten in eine Dashboard-Ansicht vom Typ „Panel“.");
  await pick("Größe", "Bildschirm füllen");
  await liveFor(0.6);
  await moveToText("Am besten in einer Dashboard-Ansicht", 0.6);
  await liveFor(1.2);
  await sayOver("Mit fester Höhe stellst du die Höhe in Pixeln ein. Ich nehme 760 statt 420.");
  await pick("Größe", "Feste Höhe");
  await fillField("Höhe (Pixel)", "760");
  await liveFor(0.8);

  // ---------------------------------------------------------------- look, accent, walls
  await chapter("Look, Akzentfarbe und Wände");
  await sayOver("Der „Look“: Neon, Blueprint wie ein Bauplan, oder Tag – hell und freundlich.");
  await pick("Look", "Blueprint", 0.4, 0.2);
  await liveFor(0.4);
  await pick("Look", "Tag", 0.4, 0.2);
  await liveFor(0.4);
  await pick("Look", "Neon", 0.4, 0.2);
  await sayOver("Mit der „Akzentfarbe“ bekommen Linien, Knöpfe und Pins deine Farbe. „Zurück zu Cyan“ setzt sie zurück.");
  {
    const b = await R.page.evaluate(() => {
      const r = document.querySelector("neonplan3d-card-editor").shadowRoot.querySelector('input[type="color"]').getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
    await R.move(b.x, b.y, 0.5);
    await ring(b.x, b.y);
    await R.page.evaluate(() => {
      const i = document.querySelector("neonplan3d-card-editor").shadowRoot.querySelector('input[type="color"]');
      i.value = "#ff8a00";
      i.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    });
    await liveFor(2.2);
    await R.clickOn({ text: "Zurück zu Cyan" }, 0.5);
    await liveFor(0.6);
  }
  await sayOver("„Wände“: „Wände hoch“ zeigt sie in voller Höhe, „Schnitt“ schneidet alle Wände in Hüfthöhe ab.");
  await pick("Wände", "Schnitt");
  await liveFor(1.2);
  await pick("Wände", "Wände hoch");
  await liveFor(0.4);

  // ---------------------------------------------------------------- quality, floors below
  await chapter("Qualität und Etagen darunter");
  await sayOver("„Qualität“: „Auto“, „Tablet“ oder „Hoch“. Auto erkennt schwache Geräte und nimmt dann von selbst die sparsame Stufe Tablet.");
  await showList("Qualität", "Auto", 3);
  await moveToText("ist die sparsamste Stufe", 0.6);
  await sayOver("„Hoch“ zeigt zusätzlich Lichtkegel unter Spots. Was Tablet genau spart, zeige ich in Teil zwei.");
  await R.hold(0.6);
  await sayOver("„Etagen darunter“ gilt für eine geöffnete Etage. Ich starte dafür kurz im Obergeschoss.");
  await pick("Etage", "Obergeschoss");
  await liveFor(1.4);
  await sayOver("„Abgedunkelt“ zeigt das Erdgeschoss dunkel darunter, „Gestapelt“ das ganze Haus bis hier, „Ausgeblendet“ nur diese Etage.");
  await liveFor(0.6);
  await pick("Etagen darunter", "Gestapelt (ganzes Haus bis hier)");
  await liveFor(1.2);
  await pick("Etagen darunter", "Ausgeblendet (nur diese Etage)");
  await liveFor(1.2);
  await pick("Etagen darunter", "Abgedunkelt");
  await catchUp();
  await setCfg(BASE);
  await R.sleep(1500);

  // ---------------------------------------------------------------- markers, heatmap, flows
  await chapter("Symbole, Heatmap und Stromfluss");
  await sayOver("Unter „Anzeigen“: „Symbole“ – keine, nur die wichtigen oder alle Gerätesymbole.");
  await scrollEd("Anzeigen", 120);
  await pick("Symbole", "Alle");
  await liveFor(1.2);
  await pick("Symbole", "Wichtige");
  await sayOver("Die „Heatmap“ färbt die Böden nach Temperatur, Luftfeuchtigkeit oder CO₂. „Werte am Raumnamen“ schreibt die Zahlen dazu.");
  await pick("Heatmap", "Temperatur");
  await liveFor(1.4);
  await pick("Heatmap", "Werte am Raumnamen");
  await liveFor(1.4);
  await pick("Heatmap", "Normal");
  await sayOver("„Stromfluss“ und „Hologramme“: immer an, immer aus, oder ein eigener Schalter in der Karte. Beides gehört zur Erweiterung Energie Pro.");
  await pick("Stromfluss", "Immer an", 0.4, 0.2);
  await liveFor(0.8);
  await pick("Hologramme", "Immer an", 0.4, 0.2);
  await liveFor(0.8);
  await pick("Stromfluss", "Schalter in der Karte", 0.4, 0.2);
  await pick("Hologramme", "Schalter in der Karte", 0.4, 0.2);

  // ---------------------------------------------------------------- switches in the card
  await chapter("Schalter in der Karte");
  await sayOver("„Schalter in der Karte“ legt unten eine Leiste in die Karte. Darunter wählst du, welche: Wände, Etagen, Temperatur, Feuchte und CO₂.");
  await scrollEd("Schalter in der Karte", 140);
  await toggle("Schalter in der Karte");
  await liveFor(0.6);
  await moveToText("Etagen auseinander", 0.6, 0);
  await R.hold(0.6);
  await toggle("CO₂");
  await liveFor(0.4);
  await sayOver("In der Karte schaltest du dann selbst um – hier auf die Temperatur und wieder zurück.");
  await R.clickOn({ text: "Temp.", exact: true }, 0.6);
  await liveFor(1.4);
  await R.clickOn({ text: "Normal", exact: true }, 0.5);
  await liveFor(0.3);
  await sayOver("Der „Stern mit Zentral-Menü“ schaltet alle Lichter und Rollläden der Etage und zeigt deine Favoriten.");
  await R.clickOn(STAR, 0.6);
  await liveFor(1.8);
  await R.clickOn(STAR, 0.4);
  await liveFor(0.2);
  await sayOver("„Eigene Namen an den Symbolen“ schreibt unter jedes Gerät mit eigenem Namen diesen Namen.");
  await toggle("Eigene Namen an den Symbolen");
  await liveFor(1.8);
  await toggle("Eigene Namen an den Symbolen");
  await sayOver("„Mit ausgeblendeten Bedienelementen starten“ zeigt nur die 3D-Ansicht. Das Auge unten links holt alles zurück.");
  await toggle("Mit ausgeblendeten Bedienelementen starten");
  await liveFor(1.4);
  await R.clickOn(EYE_BACK, 0.7);
  await liveFor(1.0);
  await toggle("Mit ausgeblendeten Bedienelementen starten");
  await sayOver("„Bedienelemente ausblenden nach“ räumt die Karte nach einer Wartezeit selbst auf, etwa nach zehn Sekunden ohne Berührung.");
  await pick("Bedienelemente ausblenden nach", "10 s ohne Berührung");
  await liveFor(0.8);
  await R.move(1420, 120, 0.6);
  await catchUp();
  // the real ten seconds pass without frames
  await R.sleep(FAST ? 10500 : 10500);
  await caption("10 Sekunden später");
  await sayOver("Eine Berührung zeigt alles wieder.");
  await liveFor(0.6);
  await R.click();
  await caption(null);
  await liveFor(0.4);
  await pick("Bedienelemente ausblenden nach", "Nie", 0.4, 0.2);

  // ---------------------------------------------------------------- thumbs, names, panel, full screen
  await chapter("Mini-Ansichten, Raumfenster und Vollbild");
  await sayOver("„Etagen als Mini-Ansichten“: kleine Bilder der Etagen am Rand. Mit einer Start-Etage sind sie aus, du kannst sie aber einschalten.");
  await scrollEd("Etagen als Mini-Ansichten", 150);
  await toggle("Etagen als Mini-Ansichten");
  await liveFor(1.0);
  await moveToText("Die gewählte Etage ist dann die Start-Etage", 0.6);
  await liveFor(0.6);
  await sayOver("„Raumnamen anzeigen“ und „Energiewerte oben anzeigen“ blenden die Namen und die Energiewerte ein oder aus.");
  await toggle("Raumnamen anzeigen");
  await liveFor(1.0);
  await toggle("Raumnamen anzeigen");
  await toggle("Energiewerte oben anzeigen");
  await liveFor(1.0);
  await toggle("Energiewerte oben anzeigen");
  await sayOver("„Raum-Details beim Antippen“: Ein Tipp auf einen Raum öffnet sein Raumfenster mit Lichtern, Rollläden und Kameras.");
  await moveToText("Raum-Details beim Antippen", 0.5);
  await R.hold(0.4);
  await tapRoom("eg", WOHNEN[1], WOHNEN[2], 0.5, 1.0);
  await liveFor(0.3);
  await sayOver("Ohne den Haken wird der Raum nur gewählt, und „Zurück“ unten führt wieder hinaus.");
  await R.clickOn("button.fp3d-rp-close", 0.4);
  await liveFor(0.6);
  await toggle("Raum-Details beim Antippen", 0.4);
  await tapRoom("eg", WOHNEN[1], WOHNEN[2], 0.5, 1.0);
  await liveFor(0.6);
  await R.clickOn({ text: "Zurück", exact: true }, 0.5);
  await liveFor(0.6);
  await toggle("Raum-Details beim Antippen", 0.4);
  await sayOver("Die „Vollbild-Taste“ setzt oben rechts einen Knopf, der das Dashboard drumherum ausblendet – praktisch am Wandtablet.");
  await toggle("Vollbild-Taste");
  await liveFor(0.4);
  {
    const b = await R.locate('button[aria-label="Vollbild"]');
    await R.move(b.x, b.y, 0.6);
    await R.hold(1.2);
  }
  await sayOver("Etagen auseinanderziehen und das Dach beim Heranzoomen ausblenden kennst du aus der 3D-Ansicht. Die „Leistungsanzeige“ zeige ich in Teil zwei.");
  await moveToText("Etagen in der Hausansicht auseinanderziehen", 0.6);
  await R.hold(1.0);
  await moveToText("Dach beim Heranzoomen ausblenden", 0.5);
  await R.hold(1.0);
  await moveToText("Leistungsanzeige", 0.5);

  // ---------------------------------------------------------------- features
  await chapter("Funktionen: Warnungen, Szenen, Kameras, Wetter");
  await sayOver("Unter „Funktionen“: „Warnungen anzeigen“. Bei Rauch, Wasser, Alarm oder offenem Fenster im Regen pulsiert der Raum, oben erscheint ein Hinweis.");
  await scrollEd("Funktionen", 120);
  await moveToText("Warnungen anzeigen", 0.5);
  await R.hold(1.0);
  await sayOver("Mit „Bei neuer Warnung zum Raum springen“ fliegt die Karte selbst hin. Hier meldet der Rauchmelder in der Küche.");
  await setCam({ theta: -0.9, phi: 0.95, radius: 30 });
  await toggle("Bei neuer Warnung zum Raum springen");
  await liveFor(0.6);
  await setState("binary_sensor.kueche_rauch", "on");
  await liveFor(3.2);
  await setState("binary_sensor.kueche_rauch", "off");
  await liveFor(0.4);
  await toggle("Bei neuer Warnung zum Raum springen");
  await setCfg(await getCfg());
  await R.sleep(800);
  await sayOver("„Szenen-Knöpfe im Raum“ sind die Knöpfe, die du eben ohne Raumfenster unter der Ansicht gesehen hast. Im Raumfenster stehen die Szenen sowieso.");
  await moveToText("Szenen-Knöpfe im Raum", 0.5);
  await R.hold(1.0);
  await sayOver("Die „Bewegungsspur“ zeigt, wo in der letzten halben Stunde Bewegung gemeldet wurde, mit Uhrzeit.");
  await toggle("Bewegungsspur");
  await liveFor(2.4);
  await toggle("Bewegungsspur");
  await sayOver("Der Knopf „Kameras“ unten in der Karte öffnet die Kamera-Wand mit den Bildern aller Kameras.");
  await toggle("Knopf „Kameras“");
  await liveFor(0.4);
  await R.clickOn({ text: "Kameras", exact: true }, 0.6);
  await liveFor(2.0);
  await R.clickOn({ text: "Kameras", exact: true }, 0.5).catch(() => undefined);
  await liveFor(0.4);
  await toggle("Knopf „Kameras“");
  await sayOver("„Wetter draußen“ zeigt Regen, Schnee und Wolken am Haus. Darunter wählst du die „Wetter-Entität“.");
  await scrollEd("Wetter draußen", 300);
  await toggle("Wetter draußen");
  await toggle("Wetter draußen");
  await pick("Wetter-Entität", "Wetter");
  await setState("weather.zuhause", "rainy", { cloud_coverage: 85 });
  await liveFor(2.4);
  await sayOver("Bewegungsspur, Kamera-Wand und Wetter sind Pro-Erweiterungen. Ohne sie bleiben die Schalter einfach wirkungslos.");
  await moveToText("Bewegungsspur und Wetter sind Pro-Erweiterungen", 0.6);
  await liveFor(2.0);

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await setState("weather.zuhause", "sunny");
  await R.hideCursor();
  await tablet({ ...BASE, floor: undefined, controls: true, fullscreen_button: true });
  await setCam({ theta: -0.6, phi: 0.95, radius: 32 });
  await R.title("Teil 2: YAML, Kiosk und alte Wandtablets", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await sayOver("Das war Teil eins: die Karte anlegen und jede Option im Editor, von der Etage bis zu den Funktionen.");
  await orbit(0.5, 0.95, N.length("Das war Teil eins: die Karte anlegen und jede Option im Editor, von der Etage bis zu den Funktionen."));
  await sayOver("In Teil zwei geht es ums Wandtablet: Kiosk, Nachtdimmung, Bildschirmschoner, YAML und die Einstellungen für alte Tablets.");
  await orbit(0.5, 0.97, N.length("In Teil zwei geht es ums Wandtablet: Kiosk, Nachtdimmung, Bildschirmschoner, YAML und die Einstellungen für alte Tablets."));
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Bis gleich in Teil zwei!");
  await R.hold(0.6);
}

// ================================================================ PART 2: kiosk, YAML, old wall tablets
if (PART === "b") {
  // ---------------------------------------------------------------- teaser
  await chapter("Teaser");
  await start();
  await R.hideCursor();
  await tablet({ ...BASE, floor: undefined, controls_hidden: true, idle_return: 1, idle_orbit: true });
  {
    await setCam({ theta: -0.9, phi: 0.95, radius: 34 });
    await R.title("Dashboard-Karte und Wandtablet", `NeonPlan 3D · Folge 11 · Teil 2${VERSION}`);
    const l1 = "Ein altes Tablet an der Wand: Die Karte kehrt von selbst zurück, dreht sich langsam und dimmt nachts.";
    await sayOver(l1);
    await orbit(0.6, 0.95, N.length(l1) * 0.55);
    await setState("sun.sun", "below_horizon", { elevation: -8 });
    await R.page.evaluate(() => window.fp3dCard.setConfig({ ...window.fp3dCard._config, night: "sun" }));
    await orbit(0.4, 0.97, N.length(l1) * 0.45);
    await R.untitle();
    const l2 = "Teil zwei: der Kiosk-Bereich, die Optionen, die es nur im YAML gibt, und alles für alte, schwache Wandtablets.";
    await sayOver(l2);
    await orbit(0.6, 0.95, N.length(l2));
    await setState("sun.sun", "above_horizon", { elevation: 32 });
  }

  // ---------------------------------------------------------------- idle return and screensaver
  await chapter("Zurück zur Startansicht und Bildschirmschoner");
  await start({ ...BASE, controls: true, fullscreen_button: true });
  await R.hideCursor(false);
  await R.move(300, 400, 0.01);
  await sayOver("Ganz unten im Editor steht „Wandtablet (Kiosk)“. „Zurück zur Startansicht nach“: eine, zwei, fünf oder zehn Minuten ohne Bedienung.");
  await scrollEd("Wandtablet (Kiosk)", 110, 0.8);
  await showList("Zurück zur Startansicht nach", "1 min ohne Bedienung", 3.2);
  await sayOver("Dann schließt die Karte den Raum und zeigt wieder die Startansicht. Das Tablet steht morgens nicht mehr im Bad vom Vorabend.");
  await moveToText("Nach der Wartezeit schließt die Karte", 0.6);
  await R.hold(0.6);
  await sayOver("Mit „Kamerafahrt als Bildschirmschoner“ dreht sich danach das Haus langsam, bis jemand das Tablet berührt.");
  await toggle("Kamerafahrt als Bildschirmschoner");
  await liveFor(0.4);
  await catchUp();
  // tap the bath, then a real minute passes without frames
  const tapped = Date.now();
  await sayOver("Ich tippe aufs Bad und lasse das Tablet eine Minute in Ruhe.");
  await tapRoom("eg", BAD[1], BAD[2]);
  await liveFor(1.4);
  await R.move(300, 560, 0.6);
  await catchUp();
  await R.sleep(Math.max(0, 62000 - (Date.now() - tapped)));
  await caption("eine Minute später");
  await sayOver("Eine Minute ohne Berührung: Die Karte ist zurück, und die Kamerafahrt läuft.");
  await liveFor(N.length("Eine Minute ohne Berührung: Die Karte ist zurück, und die Kamerafahrt läuft."));
  await sayOver("Ein Tipp beendet sie.");
  await R.move(1420, 120, 0.5);
  await R.click();
  await caption(null);
  await liveFor(1.0);

  // ---------------------------------------------------------------- night
  await chapter("Nachtdimmung");
  await sayOver("Die „Nachtdimmung“ dunkelt die ganze Karte ab: „Nach Sonnenstand“, sobald die Sonne untergeht, oder in einem „Zeitraum“.");
  await showList("Nachtdimmung", "Nach Sonnenstand", 2.6);
  await setState("sun.sun", "below_horizon", { elevation: -8 });
  await liveFor(2.0);
  await sayOver("Für den Zeitraum trägst du Start und Ende ein, zum Beispiel von 22 bis 6 Uhr.");
  await setState("sun.sun", "above_horizon", { elevation: 32 });
  await pick("Nachtdimmung", "Zeitraum");
  await liveFor(0.4);
  await fillField("Zeitraum (z. B. 22:00-06:00)", "22:00-06:00");
  await liveFor(0.6);
  await pick("Nachtdimmung", "Aus");

  // ---------------------------------------------------------------- dashboard button
  await chapter("Knopf zu einem Dashboard");
  await sayOver("„Knopf zu einem Dashboard“ setzt oben rechts einen Knopf, der eine andere Ansicht öffnet – etwa dein Start-Dashboard.");
  await fillField("Knopf zu einem Dashboard (Pfad)", "/lovelace/home", 0.06);
  await liveFor(0.4);
  {
    const b = await R.locate('button[aria-label="/lovelace/home"]');
    await R.move(b.x, b.y, 0.6);
    await R.hold(0.6);
  }
  await sayOver("Mit „Beschriftung des Knopfs“ steht dort ein Wort. Ohne zeigt er ein kleines Haus.");
  await fillField("Beschriftung des Knopfs", "Start");
  await liveFor(0.4);
  {
    const b = await R.locate('button[aria-label="Start"]');
    await R.move(b.x, b.y, 0.6);
    await R.hold(0.8);
  }

  // ---------------------------------------------------------------- YAML
  await chapter("YAML: Optionen nur im Code");
  let cfg = await getCfg();
  await sayOver("Alles geht auch in YAML. In Home Assistant schaltest du im Karten-Dialog auf den Code-Editor um.");
  await R.move(260, 200, 0.6);
  await yamlShow(toYaml(cfg));
  await liveFor(1.0);
  await sayOver("Jede Option aus dem Editor hat dort ihre Zeile. Ein paar gibt es nur hier.");
  await yamlMark("floor", "height", "idle_return", "idle_orbit", "dashboard");
  await liveFor(N.length("Jede Option aus dem Editor hat dort ihre Zeile. Ein paar gibt es nur hier.") - 0.2);
  {
    const line = "„room“ startet die Karte in einem Raum – ein Display fürs Kinderzimmer. Die Rückkehr führt dann auch dorthin.";
    await sayOver(line);
    await yamlMark("floor");
    await R.page.evaluate(() => {
      for (const d of document.querySelectorAll("#tut-yaml-box .ln")) if (d.dataset.raw.startsWith("floor:")) window.tutYamlSet(d, "floor: og");
    });
    await liveFor(0.5);
    await yamlType("room: kind");
    cfg = { ...cfg, floor: "og", room: "kind" };
    await setCfg(cfg);
    await liveFor(N.length(line) - 1.6);
  }
  {
    const line = "„start_view“ gibt der Karte eine eigene Startansicht. Die fertige Zeile steht im Editor unter „Einstellungen“, „Startansicht“.";
    await sayOver(line);
    await yamlType("start_view: { theta: 0.8, phi: 1.0, radius: 20 }", 0.03);
    await liveFor(1.0);
  }
  {
    const line = "„controls_side: right“ legt Etagenbilder, Stern, Suche und Auge nach rechts – gut, wenn die Karte am linken Rand sitzt.";
    await sayOver(line);
    cfg = { type: cfg.type, floor: "eg", height: 760, controls: true, floor_thumbs: true };
    await setCfg(cfg);
    await yamlShow(toYaml(cfg));
    await liveFor(1.4);
    await yamlType("controls_side: right");
    await setCfg({ ...cfg, controls_side: "right" });
    cfg = { ...cfg, controls_side: "right" };
    await liveFor(1.6);
  }
  {
    const line = "„keep_view: true“ behält beim Etagenwechsel die Kamera. Nur die Höhe wandert mit.";
    await sayOver(line);
    await yamlType("keep_view: true");
    cfg = { ...cfg, keep_view: true };
    await setCfg(cfg);
    await R.sleep(1500);
    await orbit(0.9, 0.9, 1.2);
    const thumb = await R.locate({ text: "Obergeschoss", exact: true });
    if (thumb) {
      await R.move(thumb.x, thumb.y, 0.5);
      await R.click();
    }
    await liveFor(1.8);
  }
  {
    const line = "Unter „buttons“ legst du eigene Knöpfe nur für diese Karte in den Stern: eine Seite öffnen, Details, einen Dienst oder ein Popup.";
    await sayOver(line);
    await yamlType("buttons:");
    await yamlType("  - label: Garten", 0.035);
    await yamlType("    icon: flower", 0.035);
    await yamlType("    action: navigate", 0.035);
    await yamlType("    target: /lovelace/garten", 0.035);
    cfg = { ...cfg, buttons: [{ label: "Garten", icon: "flower", action: "navigate", target: "/lovelace/garten" }] };
    await setCfg(cfg);
    await R.sleep(800);
    await R.clickOn(STAR, 0.6);
    await liveFor(0.6);
    const b = await textBox("Garten");
    if (b) await R.move(b.x, b.y, 0.5);
    await liveFor(1.0);
  }
  {
    const line = "Und „idle_return“ oder „controls_hide_after“ nehmen hier jede Zahl an Sekunden, nicht nur die Werte aus der Liste.";
    await sayOver(line);
    await R.clickOn(STAR, 0.5).catch(() => undefined);
    await yamlType("idle_return: 90");
    await yamlType("controls_hide_after: 45");
    await liveFor(0.8);
  }

  // ---------------------------------------------------------------- old wall tablets
  await chapter("Alte und schwache Wandtablets");
  await start({ ...BASE });
  // a quiet moment in the demo house: no music, the robot docked, no sun on the modules (else they animate)
  for (const id of ["media_player.fernseher", "media_player.kueche_lautsprecher", "media_player.bad_lautsprecher"]) await setState(id, "paused");
  await setState("vacuum.saugi", "docked");
  await setState("light.led_band", "on", { effect: "none" });
  await setState("sensor.pv_leistung", "0");
  await setState("sensor.balkon_leistung", "0");
  await R.sleep(1500);
  await R.move(300, 300, 0.01);
  await sayOver("NeonPlan läuft auch auf alten, schwachen Wandtablets. Das Wichtigste dabei: kein Rechnen im Leerlauf.");
  await scrollEd("Leistungsanzeige (Bilder pro Sekunde)", 380, 0.6);
  await toggle("Leistungsanzeige (Bilder pro Sekunde)");
  await liveFor(1.5);
  await sayOver("Die „Leistungsanzeige“ zeigt es: Steht alles still, zeichnet die Karte kein einziges Bild – „Ruhe, null Bilder pro Sekunde“.");
  await R.move(1100, 700, 0.5);
  await statsCallout();
  await liveFor(N.length("Die „Leistungsanzeige“ zeigt es: Steht alles still, zeichnet die Karte kein einziges Bild – „Ruhe, null Bilder pro Sekunde“.") - 0.8, () => statsCallout());
  {
    const line = "Erst wenn sich etwas bewegt, zeichnet sie – und schreibt dazu, warum. Hier läuft der Farbeffekt einer Lampe.";
    await sayOver(line);
    // the LED strip's colour loop runs: the display says why it draws (mirrored big)
    await R.move(1100, 600, 0.5);
    await setState("light.led_band", "on", { effect: "colorloop" });
    // the display needs a moment of real time to measure (no video time passes)
    await R.sleep(1500);
    await liveFor(3.4, () => statsCallout());
    await setState("light.led_band", "on", { effect: "none" });
    await liveFor(1.0, () => statsCallout());
  }
  await sayOver("Die Stufe „Tablet“ spart am meisten: keine Muster, Schatten, Halos und Partikel, Animationen mit halber Bildrate.");
  await scrollEd("Ansicht", 40, 0.6);
  await pick("Qualität", "Tablet");
  await liveFor(1.8, () => statsCallout());
  await sayOver("Dazu zeichnet sie mit der Pixeldichte eins statt bis zu zwei. Das sind bis zu viermal weniger Pixel in jedem Bild.");
  await liveFor(2.5, () => statsCallout());
  await sayOver("Auf Fire-Tablets und Geräten mit wenig Speicher oder höchstens vier Prozessorkernen wählt „Auto“ diese Stufe von selbst.");
  await pick("Qualität", "Auto");
  await liveFor(1.0, () => statsCallout());
  await statsCallout(false);
  await sayOver("Mein Tipp: Fully Kiosk Browser mit Hardwarebeschleunigung, die Karte in einer Panel-Ansicht mit „Bildschirm füllen“, und die Qualität auf „Auto“ lassen.");
  await pick("Größe", "Bildschirm füllen");
  await liveFor(0.8);
  await moveToText("Am besten in einer Dashboard-Ansicht", 0.6);
  await liveFor(0.8);
  await sayOver("Welche Tablets sich gut eignen, steht auf meiner Empfehlungsseite. Der Link ist in der Beschreibung.");
  await R.move(1000, 400, 0.6);
  await liveFor(1.0);

  // ---------------------------------------------------------------- on the wall
  await chapter("Am Wandtablet");
  await R.hideCursor();
  await tablet({ ...BASE, floor: undefined, controls_hidden: true, idle_return: 60, idle_orbit: true, quality: "low" });
  await setCam({ theta: -0.8, phi: 0.95, radius: 32 });
  {
    const line = "So sieht das am Wandtablet aus: die Karte bildschirmfüllend, die Bedienelemente ausgeblendet, die Stufe Tablet.";
    await sayOver(line);
    await orbit(0.8, 0.92, N.length(line));
  }
  await tablet({ ...BASE, floor: "eg", quality: "low" }, true);
  {
    const line = "Hochkant erscheint das Raumfenster unten statt an der Seite.";
    await sayOver(line);
    await R.hideCursor(false);
    const p = await point3d("eg", WOHNEN[1], 0.05, WOHNEN[2]);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await liveFor(Math.max(1.5, N.length(line) - 1));
    await R.hideCursor();
  }

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await tablet({ ...BASE, floor: undefined, controls: true, fullscreen_button: true });
  await setCam({ theta: -0.6, phi: 0.95, radius: 32 });
  await R.title("Nächste Folge: Einstellungen, Sicherung und Umzug", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  {
    const l1 = "Das war Folge elf: die Dashboard-Karte mit allen Optionen, der Kiosk-Bereich, YAML und das Wandtablet.";
    await sayOver(l1);
    await orbit(0.5, 0.95, N.length(l1));
    const l2 = "In der nächsten Folge geht es um die Einstellungen, die Sicherung und den Umzug auf ein neues Home Assistant.";
    await sayOver(l2);
    await orbit(0.5, 0.97, N.length(l2));
  }
  await say("Links zur Online-Demo, zur Anleitung und zur Tablet-Empfehlung stehen in der Beschreibung. Bis zum nächsten Mal!");
  await R.hold(0.6);
}

await catchUp();
N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
