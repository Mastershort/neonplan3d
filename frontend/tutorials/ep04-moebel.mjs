// Tutorial episode 4 – "Möbel: platzieren, drehen, anpassen", in two parts (the checklist does not fit into 8 minutes):
//   a) Möbel platzieren, drehen und anpassen: the library (sections, search, preview, symbols), placing, moving (wall
//      snap, Alt, arrow keys, X/Y), every way to turn (handle, Alt, ↺/↻ 90°, R, „Drehung“, 45° in 3D beside),
//      „Spiegeln“, size, „Höhe über Boden“ (dryer on the washer, wall cabinet, „Höhe automatisch“), a table lamp on
//      a table, name and „Möbelstück“, „Fixieren“ (L), „Duplizieren“, delete, the right-click menu, all keys, and
//      „Einrichten …“ (room packages).
//   b) Elektrische Möbel, Stellplatz und Saugroboter: TV with media player and power sensor (automatic), washer,
//      radiator, „Zustand von“ with two halves (bed), the parking spot with its sensors, the robot vacuum with its
//      current-room sensor, everything live in 3D.
// Only built-in (free) furniture: the preview's packs are hidden (no demo pack, no Pro features), like a fresh install.
// Starts from the house of episode 3 (loaded invisibly); part b starts from the furnished ground floor of part a.
// Usage (from frontend/): node tutorials/ep04-moebel.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep04a/de and …/en, resp. ep04b)
// EP04_FAST=1: a quick dry run for checking the steps (the timing is not usable).
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4>

import { appVersion, narration, startRecorder } from "./recorder.mjs";
import { helpers } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep04";
const PART = process.argv[3] === "b" ? "b" : "a";
const FAST = !!process.env.EP04_FAST;
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;

// ---------------------------------------------------------------- states (the invented house of episode 3)
const rectRoom = (id, name, area_id, x0, z0, x1, z1, floor_material = "wood") => ({ id, name, area_id, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material });
const hole = (id, type, room_id, edge, offset, width, extra = {}) => ({ id, room_id, edge, offset, width, type, sill: type === "door" ? 0 : 0.9, height: type === "door" ? 2.05 : 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra });
const floorOf = (id, name, elevation, ha_floor, rooms, openings = [], extra = {}) => ({ id, name, elevation, height: 2.5, cut_height: 1.15, rooms, openings, furniture: [], placements: [], background: null, outdoor: [], walls: [], ha_floor, ...extra });
const item = (id, type, x, z, w, d, h, rotation = 0, extra = {}) => ({ id, type, x, z, w, d, h, rotation, variant: null, ...extra });

const ground = (garage = false) =>
  floorOf(
    "eg",
    "Erdgeschoss",
    0,
    "erdgeschoss",
    [
      rectRoom("r_wohnen", "Wohnzimmer", "wohnzimmer", 0, 0, 6, 4.5),
      rectRoom("r_kueche", "Küche", "kueche", 6, 0, 9.5, 4.5, "tiles"),
      rectRoom("r_flur", "Flur", "flur", 0, 4.5, 4, 7.5, "tiles"),
      rectRoom("r_bad", "Bad", "bad", 4, 4.5, 6.5, 7.5, "tiles"),
      rectRoom("r_schlafen", "Schlafzimmer", "schlafzimmer", 6.5, 4.5, 9.5, 7.5, "carpet"),
      ...(garage ? [rectRoom("r_garage", "Garage", "garage", 9.5, 0, 13, 5.5, "concrete")] : []),
    ],
    [
      hole("o1", "window", "r_wohnen", 0, 3, 1.6),
      hole("o2", "window", "r_kueche", 0, 1.75, 1.2),
      hole("o3", "door", "r_flur", 3, 2.3, 1.0),
      hole("o4", "door", "r_flur", 0, 1.2, 0.9),
      hole("o5", "door", "r_bad", 0, 1.25, 0.8),
      hole("o6", "window", "r_bad", 2, 1.25, 0.8, { sill: 1.3, height: 0.8 }),
      hole("o7", "door", "r_schlafen", 0, 1.5, 0.9),
      hole("o8", "window", "r_schlafen", 2, 1.5, 1.4),
      ...(garage ? [hole("g1", "garage", "r_garage", 1, 2.75, 2.5, { height: 2.1 })] : []),
    ],
  );
const upper = () =>
  floorOf(
    "og",
    "Obergeschoss",
    2.75,
    "obergeschoss",
    [rectRoom("r_kind", "Kinderzimmer", "kinderzimmer", 0, 0, 4.5, 4.5), rectRoom("r_arbeit", "Arbeitszimmer", "arbeitszimmer", 4.5, 0, 9.5, 4.5), rectRoom("r_flur_og", "Flur oben", null, 0, 4.5, 9.5, 7.5)],
    [hole("p1", "window", "r_kind", 0, 2.25, 1.2), hole("p2", "window", "r_arbeit", 0, 2.5, 1.6), hole("p3", "door", "r_kind", 2, 2.25, 0.9), hole("p4", "door", "r_arbeit", 2, 2.5, 0.9), hole("p5", "window", "r_flur_og", 2, 4.75, 1.2)],
    { start_view: { theta: 3.6, phi: 0.85, radius: 15 } },
  );
const cellar = () =>
  floorOf(
    "kg",
    "Keller",
    -2.45,
    "keller",
    [rectRoom("k_heiz", "Heizungsraum", "heizung", 0, 1.38, 4, 4.44), rectRoom("k_hobby", "Hobbyraum", "hobby", 4, 1.38, 8, 4.44), rectRoom("k_vorrat", "Vorratsraum", "vorrat", 0, 4.44, 4, 7.5), rectRoom("k_wasch", "Waschküche", "waschkueche", 4, 4.44, 8, 7.5)],
    [],
    { height: 2.2 },
  );
const attic = () => floorOf("dg", "Dachgeschoss", 5.5, "dachgeschoss", [rectRoom("d_boden", "Dachboden", null, 0, 0, 9.5, 7.5)], [], { height: 2.2 });
/** The house as episode 3 left it (with its stairs). */
const houseEp03 = (garage = false) => {
  const f = [cellar(), ground(garage), upper(), attic()];
  f[1].furniture.push(item("st_main", "stairs", 2.0, 6.85, 1.0, 3.2, 2.75, 90));
  f[2].furniture.push(item("h_gallery", "stairwell", 2.0, 6.2, 3.2, 0.5, 0.02));
  return f;
};
/** Room packages of the furnished ground floor (applied with the editor's own „Einrichten …“). */
const PACKAGES = [
  ["r_wohnen", "living"],
  ["r_kueche", "kitchen_row"],
  ["r_bad", "bath"],
  ["r_schlafen", "bedroom"],
  ["r_flur", "hall"],
];

// ---------------------------------------------------------------- recorder
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(4));
const { say, sayOver, chapter, catchUp } = N;
const h = helpers(R);
if (FAST) {
  const { move, glide, type } = R;
  R.move = (x, y) => move(x, y, 0.04);
  R.glide = (a, b) => glide(a, b, 0.12);
  R.type = (text) => type(text, 0.01);
}
// a draft that fails still writes what it recorded (for checking the stills)
for (const ev of ["uncaughtException", "unhandledRejection"]) {
  process.on(ev, async (err) => {
    console.error(err);
    await R.finish().catch(() => {});
    process.exit(1);
  });
}
// confirm() / alert() of the app: accepted at once (a native dialog is not in the screenshots; fakeDialog shows it)
R.page.on("dialog", (d) => void d.accept());

// ---------------------------------------------------------------- helpers
const editorOpen = async () => {
  await R.clickOn({ text: "Editor", exact: true }, 0.01);
  await R.sleep(700);
};
/** A fresh install: no packs at all (no demo pack, no Pro features) – only the built-in furniture. */
const freeOnly = () =>
  R.page.evaluate(async () => {
    const p = window.fp3dPanel;
    const hass = p.hass;
    const orig = hass.callWS;
    hass.callWS = async (m) => (m.type === "neonplan3d/packs/list" ? { packs: [] } : orig(m));
    await p.data.reloadPacks();
  });
/**
 * The robot vacuum's device with a "current room" sensor (as Roborock or Dreame report it), invented for the demo.
 * The objects of the mock are changed in place, so its later state updates keep them.
 */
const robotSensor = (room) =>
  R.page.evaluate((room) => {
    const p = window.fp3dPanel;
    const hass = p.hass;
    hass.entities["vacuum.saugi"].device_id = "d_saugi";
    hass.entities["sensor.saugi_aktueller_raum"] = { entity_id: "sensor.saugi_aktueller_raum", area_id: "wohnzimmer", device_id: "d_saugi" };
    hass.states["sensor.saugi_aktueller_raum"] = { entity_id: "sensor.saugi_aktueller_raum", state: room, attributes: { friendly_name: "Saugi Aktueller Raum" } };
    p.hass = { ...hass };
  }, room);
/** Load a state invisibly (no undo step) and show a floor. */
const loadState = async (floors, floorId) => {
  await R.editor(`const d = structuredClone(e._doc); d.floors = ${JSON.stringify(floors)}; e.setDoc(d, null); e.past = []; e._canUndo = false; e._floorId = ${JSON.stringify(floorId)}; e._roomId = null; e._furnitureId = null; e.fit();`);
  await R.sleep(900);
};
/** Furnish rooms invisibly with the editor's room packages (the same code as „Einrichten …“). */
const furnish = async (list) => {
  await R.editor(`for (const [id, pkg] of ${JSON.stringify(list)}) { const room = e.floor.rooms.find((r) => r.id === id); e._roomId = id; e.applyPackage(room, pkg); } e._roomId = null; e._notice = null; e.past = []; e._canUndo = false;`);
  await R.sleep(600);
};
const { fill, typeOver, tapPlan, pointPlan, pickEntity, pickerMove, scrollSide, anywhere, view2d } = h;
const dragPlan = async (x0, z0, x1, z1, seconds = 1) => {
  const a = await R.planPoint(x0, z0);
  const b = await R.planPoint(x1, z1);
  await R.move(a.x, a.y, 0.5);
  await R.drag(b.x, b.y, seconds);
};
/** Hold a key while doing something (Alt while dragging). */
const holding = async (key, fn) => {
  await R.page.keyboard.down(key);
  try {
    await fn();
  } finally {
    await R.page.keyboard.up(key);
  }
};
/** Press a key (with modifiers) and show it as a key cap. */
const press = async (label, key, mods = [], times = 1) => {
  await blur();
  await keyCap(label);
  for (let i = 0; i < times; i++) {
    for (const m of mods) await R.page.keyboard.down(m);
    await R.page.keyboard.press(key);
    for (const m of mods.slice().reverse()) await R.page.keyboard.up(m);
    await R.frame(0.35, 120);
  }
};
/** Take the focus out of a form field (keys go to the plan then). */
const blur = () =>
  R.page.evaluate(() => {
    let a = document.activeElement;
    while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement;
    a?.blur?.();
  });
/** Tap the first furniture item of a type in the plan. */
const tapItem = async (type, seconds = 0.5) => {
  const f = await R.editor(`const f = e.floor.furniture.find((f) => f.type === ${JSON.stringify(type)}); return { x: f.x, z: f.z };`);
  await tapPlan(f.x, f.z, seconds);
  return f;
};
/** An element of the editor (by selector), the n-th match; its centre. */
const edEl = (selector, n = 0) =>
  R.editor(`const el = e.renderRoot.querySelectorAll(${JSON.stringify(selector)})[${n}]; if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`);
const moveEl = async (selector, n = 0, seconds = 0.5) => {
  const b = await edEl(selector, n);
  if (!b) throw new Error(`no editor element: ${selector}`);
  await R.move(b.x, b.y, seconds);
};
const clickEl = async (selector, n = 0, seconds = 0.5) => {
  await moveEl(selector, n, seconds);
  await R.click();
};
/** A key cap at the bottom left of the plan ("Alt", "Umschalt + R"), or none. */
const keyCap = (text) =>
  R.page.evaluate((text) => {
    document.getElementById("tut-key")?.remove();
    if (!text) return;
    const d = document.createElement("div");
    d.id = "tut-key";
    d.style.cssText =
      "position:fixed;left:40px;bottom:70px;z-index:2147483643;padding:12px 22px;border-radius:12px;background:rgba(8,16,34,.86);border:2px solid #37e0ff;box-shadow:0 0 22px rgba(55,224,255,.45);color:#eaf6ff;font:700 34px/1 system-ui,'Segoe UI',sans-serif;letter-spacing:.5px";
    d.textContent = text;
    document.body.appendChild(d);
  }, text);
/** A card with all keys, over the plan. */
const keyCard = (show) =>
  R.page.evaluate((show) => {
    document.getElementById("tut-keys")?.remove();
    if (!show) return;
    const rows = [
      ["R", "90° rechts herum drehen"],
      ["Umschalt + R", "90° links herum drehen"],
      ["L", "Fixieren / Lösen"],
      ["Entf", "Löschen"],
      ["Pfeiltasten", "5 cm schieben (Umschalt 10 cm, Alt 1 cm)"],
      ["Alt beim Ziehen", "frei schieben, am Drehgriff 1°-Schritte"],
      ["Strg + Z / Strg + Y", "Rückgängig / Wiederholen"],
      ["Esc", "Menü schließen, Auswahl aufheben"],
      ["Rechtsklick", "Fixieren, Duplizieren, Drehen, Spiegeln, Löschen"],
    ];
    const d = document.createElement("div");
    d.id = "tut-keys";
    d.style.cssText =
      "position:fixed;left:120px;top:190px;z-index:2147483643;padding:28px 36px;border-radius:20px;background:rgba(8,16,34,.92);border:1px solid rgba(55,224,255,.6);box-shadow:0 0 40px rgba(55,224,255,.35);color:#eaf6ff;font:400 25px/1.25 system-ui,'Segoe UI',sans-serif";
    d.innerHTML =
      `<div style="font-weight:700;font-size:32px;margin-bottom:18px">Möbel: alle Tasten</div>` +
      rows
        .map(
          ([k, t]) =>
            `<div style="display:flex;gap:22px;margin:10px 0;align-items:center"><span style="min-width:280px;text-align:right"><b style="display:inline-block;padding:4px 12px;border-radius:8px;border:2px solid #37e0ff;color:#fff">${k}</b></span><span>${t}</span></div>`,
        )
        .join("");
    document.body.appendChild(d);
  }, show);
/** The app's confirm() as a visible box with OK and „Abbrechen“ (native dialogs are not in headless screenshots). */
const fakeConfirm = (text) =>
  R.page.evaluate((t) => {
    const d = document.createElement("div");
    d.id = "tut-dialog";
    d.style.cssText =
      "position:fixed;left:50%;top:22%;transform:translateX(-50%);z-index:2147483644;max-width:620px;padding:22px 26px;border-radius:12px;background:#f4f6fa;color:#111;font:18px/1.4 system-ui,'Segoe UI',sans-serif;box-shadow:0 12px 50px rgba(0,0,0,.6)";
    d.innerHTML = `<div style="font-size:14px;color:#555;margin-bottom:8px">127.0.0.1 meldet</div>${t}<div style="text-align:right;margin-top:18px"><span id="tut-ok" style="display:inline-block;padding:7px 22px;border-radius:6px;background:#1a73e8;color:#fff;margin-right:10px">OK</span><span id="tut-cancel" style="display:inline-block;padding:7px 18px;border-radius:6px;border:1px solid #1a73e8;color:#1a73e8">Abbrechen</span></div>`;
    document.body.appendChild(d);
  }, text);
const noDialog = () => R.page.evaluate(() => document.getElementById("tut-dialog")?.remove());
/** Keep the app's confirm()/alert() from firing (a fake dialog is shown instead); confirm answers "no". */
const muteDialogs = (on) =>
  R.page.evaluate((on) => {
    if (on) {
      window.__tutConfirm = window.confirm;
      window.confirm = () => false;
    } else if (window.__tutConfirm) window.confirm = window.__tutConfirm;
  }, on);
/** Move the cursor onto any element whose text contains `text` (innermost last match). */
const moveToText = async (text, seconds = 0.5) => {
  const box = await R.page.evaluate((text) => {
    const walk = function* (root) {
      for (const el of root.querySelectorAll("*")) {
        yield el;
        if (el.shadowRoot) yield* walk(el.shadowRoot);
      }
    };
    let hit = null;
    for (const el of walk(document)) {
      if (!/^(P|SPAN|DIV|LABEL|BUTTON|B)$/.test(el.tagName)) continue;
      if (!el.textContent.includes(text)) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && r.top < innerHeight && r.bottom > 0) hit = el;
    }
    if (!hit) return null;
    const r = hit.getBoundingClientRect();
    return { x: r.left + Math.min(r.width / 2, 120), y: r.top + Math.min(r.height / 2, 14) };
  }, text);
  if (!box) throw new Error(`text not found: ${text}`);
  await R.move(box.x, box.y, seconds);
};
/** Centre of an element inside the editor's plan (svg), e.g. the turn handle. */
const planEl = (selector) =>
  R.editor(`const el = e.renderRoot.querySelector(${JSON.stringify(selector)}); if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`);
/** The selected furniture item (id, x, z, rotation …). */
const selected = () => R.editor(`const f = e.furnitureItem; return f ? JSON.parse(JSON.stringify(f)) : null;`);
const de = (v) => String(Math.round(v * 100) / 100).replace(".", ",");
/** Drag the turn handle of the selected item around its centre, from its angle by `turn` degrees (screen, clockwise). */
const turnHandle = async (turn, seconds = 1.6) => {
  const f = await selected();
  const c = await R.planPoint(f.x, f.z);
  const hnd = await planEl(`[data-rotate="${f.id}"] .fp3d-hit`);
  const r = Math.hypot(hnd.x - c.x, hnd.y - c.y);
  const a0 = Math.atan2(hnd.y - c.y, hnd.x - c.x);
  await R.move(hnd.x, hnd.y, 0.5);
  await R.page.evaluate(() => {}); // keep order
  await R.page.mouse.down();
  const n = Math.max(2, Math.round(seconds * 25));
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const a = a0 + ((turn * Math.PI) / 180) * k;
    await R.move(c.x + Math.cos(a) * r, c.y + Math.sin(a) * r, 1 / 25);
  }
  await R.page.mouse.up();
  await R.frame(0.2, 60);
};
/** Pick an option of a select field without the overlay (long lists): a ring on the field, then the value. */
const setSelect = async (label, option) => {
  const box = await R.moveTo({ label }, 0.5);
  await R.click();
  await R.page.evaluate(
    (label, option) => {
      const walk = function* (root) {
        for (const el of root.querySelectorAll("*")) {
          yield el;
          if (el.shadowRoot) yield* walk(el.shadowRoot);
        }
      };
      let sel = null;
      for (const el of walk(document)) {
        if (el.tagName !== "LABEL" || !el.textContent.replace(/\s+/g, " ").trim().startsWith(label)) continue;
        const s = el.querySelector("select");
        if (s && s.getBoundingClientRect().width > 0) sel = s;
      }
      const opt = [...sel.options].find((o) => o.textContent.trim() === option);
      sel.value = opt.value;
      sel.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      sel.blur();
    },
    label,
    option,
  );
  await R.frame(1 / 25, 200);
  return box;
};
/** Scroll the side panel back to its top (wheel at its edge). */
const sideTop = async (seconds = 0.5) => {
  await h.side(0.3);
  const top = await R.editor(`const s = e.renderRoot.querySelector("aside.fp3d-side:not(.fp3d-side-strip)"); return s ? s.scrollTop : 0;`);
  if (!top) return;
  const n = Math.max(1, Math.round(seconds * 25));
  let done = 0;
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const step = Math.round(top * k) - done;
    done += step;
    if (step) await R.page.mouse.wheel({ deltaY: -step });
    await R.frame(1 / 25, 30);
  }
  await R.frame(1 / 25, 120);
};
/** Empty the library's search field (all sections back). */
const clearSearch = async () => {
  await R.clickOn("input.fp3d-search", 0.4);
  await typeOver("");
  await R.key("Escape");
};
/** Search the library (the room is selected, so the library is on top). */
const search = async (text) => {
  await R.clickOn("input.fp3d-search", 0.5);
  await typeOver(text);
  await R.frame(0.3, 150);
};
/** Point the editor's 3D pane at a plan point (x, z) of a floor – like turning and zooming by hand. */
const setPane = (floorId, x, z, cam, main = false) =>
  R.page.evaluate(
    (floorId, x, z, cam, main) => {
      const panel = document.querySelector("neonplan3d-panel").shadowRoot;
      const v = main ? panel.querySelector("fp3d-view3d") : panel.querySelector("fp3d-editor").renderRoot.querySelector("fp3d-view3d");
      const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);
      const fv = viewer.floorMap.get(floorId);
      const t = fv.group.position.clone().set(x, 0, z);
      fv.group.localToWorld(t);
      const view = viewer.controls.view;
      view.target.copy(t);
      Object.assign(view, cam);
      viewer.invalidate();
    },
    floorId,
    x,
    z,
    cam,
    main,
  );
/** Glide the 3D pane (or the main view) around a plan point. */
const glidePane = async (floorId, x, z, a, b, seconds, main = false) => {
  const n = FAST ? 2 : Math.max(1, Math.round(seconds * 25));
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    const k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    await setPane(floorId, x, z, { theta: a.theta + (b.theta - a.theta) * k, phi: a.phi + (b.phi - a.phi) * k, radius: a.radius + (b.radius - a.radius) * k }, main);
    await R.frame(1 / 25, 40);
  }
};
/** Screen point of a plan point (x, height y, z) of a floor in the editor's 3D pane. */
const panePoint = (floorId, x, y, z) =>
  R.page.evaluate(
    (floorId, x, y, z) => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const v = e.renderRoot.querySelector("fp3d-view3d");
      const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);
      const fv = viewer.floorMap.get(floorId);
      const p = fv.group.position.clone().set(x, y, z);
      fv.group.localToWorld(p);
      p.project(viewer.camera);
      const c = (v.renderRoot ?? v.shadowRoot).querySelector("canvas").getBoundingClientRect();
      return { x: c.left + ((p.x + 1) / 2) * c.width, y: c.top + ((1 - p.y) / 2) * c.height };
    },
    floorId,
    x,
    y,
    z,
  );
/** Record frames while something moves on its own (the robot): `seconds` of video. */
const live = async (seconds) => {
  const end = R.time + seconds;
  while (R.time < end - 0.02) await R.frame(1 / 25, 30);
};
/** „Alles zeigen“: the whole plan in view again (adding an item pans the plan to it). */
const fitPlan = () => R.clickOn({ text: "Alles zeigen", exact: true }, 0.4);
/** Tap an empty spot of a room; if the tap missed (it should not), select the room the way the tap would. */
const tapRoom = async (x, z, id, seconds = 0.5) => {
  await tapPlan(x, z, seconds);
  const got = await R.editor(`return e._roomId;`);
  if (got !== id) {
    console.log(`tap at ${x}/${z} selected ${got}, not ${id}`);
    await R.editor(`e.selectItem("room", ${JSON.stringify(id)});`);
    await R.frame(1 / 25, 200);
  }
};
/** Up to the floor form: select tool, then "Zurück zu …" until nothing is selected. */
const toFloor = async () => {
  await R.clickOn({ text: "Auswählen", exact: true }, 0.45);
  for (let i = 0; i < 3; i++) {
    const up = await R.locate({ text: "Zurück zu" }).catch(() => null);
    if (!up) break;
    await R.clickOn({ text: "Zurück zu" }, 0.45);
  }
};

// "dump": print the furnished ground floor (for planning) and stop
if (process.argv[3] === "dump") {
  await R.open("empty");
  await freeOnly();
  await editorOpen();
  await loadState(houseEp03(true), "eg");
  await furnish(PACKAGES);
  console.log(JSON.stringify(await R.editor(`return e.floor.furniture.map((f) => [f.type, f.x, f.z, f.w, f.d, f.rotation, f.entity ?? null])`)));
  await R.page.screenshot({ path: `${out}-dump.png` });
  await R.finish();
  process.exit(0);
}

// ================================================================ PART 1: Möbel platzieren, drehen und anpassen
if (PART === "a") {
  // ---------------------------------------------------------------- teaser: the furnished ground floor in 3D
  await chapter("Teaser");
  await R.open("empty");
  await freeOnly();
  await R.hideCursor();
  await editorOpen();
  await loadState(houseEp03(), "eg");
  await furnish(PACKAGES);
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.01);
  await R.sleep(1500);
  await R.clickOn({ text: "Erdgeschoss", exact: true, nth: 0 }, 0.01);
  await R.sleep(2500);
  {
    const A = { theta: 0.35, phi: 0.95, radius: 15 };
    const B = { theta: 1.15, phi: 0.75, radius: 12.5 };
    const C = { theta: 1.9, phi: 0.85, radius: 14 };
    await setPane("eg", 4.75, 3.75, A, true);
    await R.sleep(900);
    await R.title("Möbel: platzieren, drehen, anpassen", `NeonPlan 3D · Folge 4 · Teil 1${VERSION}`);
    await sayOver("Ein Erdgeschoss, fertig eingerichtet: Sofa, Küche, Bett und Bad – und die Lampen leuchten mit Home Assistant.");
    await glidePane("eg", 4.75, 3.75, A, B, 5.5, true);
    await R.untitle();
    await sayOver("In diesem Video zeige ich dir alles rund um Möbel: setzen, verschieben, drehen, Größe und Höhe.");
    await glidePane("eg", 4.75, 3.75, B, C, 4.5, true);
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await R.open("empty");
  await freeOnly();
  await editorOpen();
  await loadState(houseEp03(), "eg");
  await view2d(112, 270, 60);
  await R.sleep(500);
  await R.hideCursor(false);
  await sayOver("Wir machen mit dem Haus aus Folge drei weiter. Das Erdgeschoss ist noch leer, nur die Treppe steht schon im Flur.");
  await pointPlan(2, 6.85, 0.6);
  await R.hold(0.4);
  await sayOver("Alles, was du heute siehst, ist eingebaut und kostenlos.");
  await pointPlan(3, 2.2, 0.6);

  // ---------------------------------------------------------------- the library
  await chapter("Die Möbel-Bibliothek");
  await sayOver("Erst tippe ich den Raum an, in den das Möbel soll: das Wohnzimmer. Dann oben auf „Möbel“.");
  await tapRoom(3, 1.2, "r_wohnen");
  await R.clickOn({ text: "Möbel", exact: true }, 0.6);
  await sayOver("Rechts öffnet sich die Bibliothek. Oben steht: Neue Möbel kommen in die Mitte vom Wohnzimmer.");
  await moveToText("Neue Möbel kommen in die Mitte", 0.6);
  await R.hold(0.6);
  await sayOver("Darunter die Abschnitte: Leuchten, Wohnen, Essen, Küche, Schlafen, Bad und Hauswirtschaft, Arbeiten und Stellplätze.");
  await R.moveTo({ text: "Leuchten" }, 0.5);
  await R.hold(0.4);
  await R.moveTo({ text: "Wohnen" }, 0.5);
  await R.hold(0.4);
  await R.moveTo({ text: "Stellplätze" }, 0.6);
  await sayOver("Ein Klick klappt einen Abschnitt auf und wieder zu.");
  await R.clickOn({ text: "Essen" }, 0.5);
  await R.hold(0.7);
  await R.clickOn({ text: "Essen" }, 0.4);
  await sayOver("Fährst du mit der Maus über einen Eintrag, zeigt eine kleine Vorschau das Möbel in 3D.");
  await R.moveTo({ text: "Sofa", exact: true }, 0.5);
  await R.frame(0.9, 600);
  await R.moveTo({ text: "Sessel", exact: true }, 0.4);
  await R.frame(0.9, 600);
  await sayOver("Die kleine Glühbirne heißt: eine Leuchte, die du mit einem Licht verknüpfst. Das Symbol am TV-Board: ein elektrisches Möbel. Dazu mehr in Teil zwei.");
  await R.moveTo(".fp3d-lib-electric .fp3d-lib-badge", 0.5).catch(() => R.moveTo({ text: "Deckenleuchte" }, 0.5));
  await R.frame(0.9, 600);
  await R.moveTo({ text: "TV-Board" }, 0.6);
  await R.frame(1.2, 600);
  await sayOver("Das Suchfeld kennt deutsche und englische Namen. Ich tippe „bench“ – und finde Sitzbank und Eckbank.");
  await R.clickOn("input.fp3d-search", 0.5);
  await R.type("bench", 0.08);
  await R.frame(0.5, 150);
  await sayOver("Mehrere Wörter gehen auch, in beliebiger Reihenfolge. Escape leert das Feld wieder.");
  await typeOver("tisch rund");
  await R.hold(0.6);
  await R.key("Escape");
  await sayOver("Ganz unten führt „Erweiterungen öffnen“ zu mehr Möbeln – die zeige ich dir in Folge fünf. Heute nehmen wir nur die eingebauten.");
  await scrollSide({ text: "Erweiterungen öffnen" }, 900, 0.8);
  await R.moveTo({ text: "Erweiterungen öffnen" }, 0.5);
  await R.hold(0.6);
  await sideTop(0.6);

  // ---------------------------------------------------------------- placing and moving
  await chapter("Möbel setzen und verschieben");
  await sayOver("Ein Klick auf „Sofa“ – es steht in der Mitte des Raums und ist gleich ausgewählt. Im Plan steht sein Maß.");
  await R.clickOn({ text: "Sofa", exact: true }, 0.5);
  await pointPlan(3, 1.55, 0.6);
  await R.hold(0.4);
  await sayOver("Die Linie vorne markiert die Vorderseite – beim Sofa die Sitzseite.");
  await pointPlan(3.6, 2.7, 0.5);
  await R.hold(0.6);
  await sayOver("Ziehen verschiebt es. In der Nähe einer Wand rastet es bündig ein, mit dem Rücken zur Wand – steht es nur ungefähr richtig, richtet es sich dabei gerade aus.");
  await dragPlan(3, 2.25, 1.6, 0.6, 1.4);
  const sofa = await selected();
  console.log("sofa after snap:", sofa.x, sofa.z, sofa.rotation);
  await R.hold(0.5);
  await sayOver("Mit gedrückter Alt-Taste schiebst du frei, ohne Einrasten.");
  await keyCap("Alt");
  await holding("Alt", () => dragPlan(sofa.x, sofa.z, sofa.x + 0.1, sofa.z + 0.5, 1));
  await keyCap(null);
  await sayOver("Fein geht es mit den Pfeiltasten: Ein Druck sind fünf Zentimeter, mit Umschalt zehn, mit Alt einer.");
  await press("↑", "ArrowUp", [], 2);
  await press("Umschalt + ↑", "ArrowUp", ["Shift"], 2);
  await press("Alt + ↑", "ArrowUp", ["Alt"], 2);
  await keyCap(null);
  await sayOver("Und ganz genau mit „X“ und „Y“ im Formular – jetzt sitzt das Sofa wieder an der Wand.");
  await sideTop(0.3);
  await fill("X (m)", de(sofa.x));
  await fill("Y (m)", de(sofa.z));
  await R.hold(0.3);

  // ---------------------------------------------------------------- turning
  await chapter("Drehen – alle Wege");
  await sayOver("Jetzt das Drehen. Dafür gibt es gleich mehrere Wege – ich nehme einen Sessel.");
  await tapRoom(3.2, 3.6, "r_wohnen");
  await R.clickOn({ text: "Sessel", exact: true }, 0.5);
  await sayOver("Vor dem Möbel sitzt der Drehgriff. Ziehst du daran, dreht es sich in 15-Grad-Schritten – die Vorderseite zeigt immer zum Mauszeiger.");
  await turnHandle(-150, 2.6);
  await R.hold(0.4);
  await sayOver("Hältst du dabei Alt gedrückt, dreht er in einzelnen Grad.");
  await keyCap("Alt");
  await holding("Alt", () => turnHandle(37, 1.4));
  await keyCap(null);
  await R.moveTo({ label: "Drehung" }, 0.5);
  await sayOver("Unten im Formular drehen die beiden Pfeil-Knöpfe um genau 90 Grad – links herum oder rechts herum.");
  await R.clickOn({ text: "↺ 90°", exact: true }, 0.5);
  await R.hold(0.5);
  await R.clickOn({ text: "↻ 90°", exact: true }, 0.5);
  await sayOver("Noch schneller geht es mit der Taste R. Mit Umschalt dreht sie andersherum.");
  await h.side(0.3);
  await press("R", "r");
  await R.hold(0.3);
  await press("Umschalt + R", "R", ["Shift"]);
  await keyCap(null);
  await sayOver("Für jeden Winkel gibt es das Feld „Drehung“. Ich tippe 45 – jetzt steht der Sessel schräg.");
  await fill("Drehung", "45");
  await R.hold(0.4);
  await sayOver("Null Grad heißt übrigens: Die Vorderseite zeigt im Plan nach unten.");
  await R.moveTo({ label: "Drehung" }, 0.4);
  await R.hold(0.4);

  // ---------------------------------------------------------------- mirror
  await chapter("Spiegeln");
  await sayOver("„Spiegeln“ ist etwas anderes: Es tauscht nur links und rechts. Das sieht man am besten an der Eckbank.");
  await tapRoom(5, 3.9, "r_wohnen");
  await search("eckbank");
  await R.clickOn({ text: "Eckbank", exact: true }, 0.5);
  await sayOver("Ich ziehe sie in die Ecke oben rechts – sie rastet an der Wand ein.");
  await dragPlan(3, 2.25, 5.0, 0.85, 1.3);
  const bench = await selected();
  console.log("bench after snap:", bench.x, bench.z, bench.rotation);
  await sayOver("Haken bei „Spiegeln“ – und das kurze Stück zeigt zur anderen Seite. So bekommst du auch den Schrank mit der Tür auf der anderen Seite.");
  await R.clickOn({ label: "Spiegeln" }, 0.5);
  await R.hold(1);
  await sayOver("Drehen dreht die Vorderseite, Spiegeln tauscht nur die Seiten.");
  await pointPlan(bench.x, bench.z, 0.5);
  await R.hold(0.4);

  // ---------------------------------------------------------------- 3D beside: 45° steps
  await chapter("In 3D daneben drehen");
  await sayOver("Schalten wir „3D daneben“ ein. „Alles zeigen“ holt den Plan wieder ganz ins Bild.");
  await R.clickOn({ text: "3D daneben", exact: true }, 0.6);
  await R.sleep(1500);
  await R.clickOn({ text: "Alles zeigen", exact: true }, 0.5);
  await setPane("eg", 2.6, 1.6, { theta: 0.3, phi: 0.8, radius: 8.5 });
  await R.frame(0.4, 300);
  await sayOver("Auch in der 3D-Hälfte tippst du ein Möbel an. Unten erscheint dann eine Leiste.");
  {
    const chair = await R.editor(`return e.floor.furniture.find((f) => f.type === "armchair").id;`);
    const p = await panePoint("eg", 3, 0.6, 2.25);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await R.sleep(600);
    if (!(await R.editor(`return e._furnitureId === ${JSON.stringify(chair)};`))) {
      console.log("3D tap missed the armchair");
      await R.editor(`e.selectFrom3d("furniture", ${JSON.stringify(chair)});`);
    }
    await R.frame(1 / 25, 300);
  }
  await sayOver("Hier drehen die Pfeile in 45-Grad-Schritten.");
  await R.clickOn({ text: "↻ 45°", exact: true }, 0.5);
  await R.hold(0.5);
  await R.clickOn({ text: "↻ 45°", exact: true }, 0.4);
  await R.hold(0.4);
  await sayOver("Daneben Breite, Tiefe, Höhe und die Höhe über Boden, dazu Fixieren und Löschen.");
  await moveEl(".fp3d-3d-bar .fp3d-3d-size", 0);
  await R.hold(0.3);
  await moveEl(".fp3d-3d-bar .fp3d-3d-size", 3);
  await R.hold(0.3);
  await moveEl(".fp3d-3d-bar .fp3d-fix");
  await sayOver("Ziehen geht in 3D auch – dabei bleibt ein Möbel in seinem Raum. In einen anderen Raum ziehst du es im Plan.");
  {
    const a = await panePoint("eg", 3, 0.6, 2.25);
    const b = await panePoint("eg", 3.6, 0.6, 2.9);
    await R.move(a.x, a.y, 0.5);
    await R.drag(b.x, b.y, 1.2);
  }
  await R.hold(0.4);

  // ---------------------------------------------------------------- size
  await chapter("Größe ändern");
  await sayOver("Die Größe änderst du an den Ecken des ausgewählten Möbels. Ich mache das Sofa etwas länger.");
  await tapPlan(sofa.x, sofa.z, 0.5);
  await setPane("eg", 1.8, 0.8, { theta: 0.25, phi: 0.75, radius: 7 });
  {
    // the corner [1, 1] moves outwards along the sofa's width (the depth stays)
    const s = await selected();
    const corner = await planEl(`[data-resize="${s.id}:1:1"] .fp3d-hit`);
    const k = (await R.editor("return e._view.scale")) * 0.3;
    const a = (s.rotation * Math.PI) / 180;
    await R.move(corner.x, corner.y, 0.5);
    await R.drag(corner.x + Math.cos(a) * k, corner.y + Math.sin(a) * k, 1);
  }
  await sayOver("Genau geht es mit „Breite“, „Tiefe“ und „Höhe“ im Formular. Ich stelle die Breite auf 2,40.");
  await sideTop(0.3);
  await fill("Breite", "2,4");
  await R.hold(0.4);

  // ---------------------------------------------------------------- height above the floor
  await chapter("Höhe über Boden");
  await sayOver("„Höhe über Boden“ hebt ein Möbel an. Damit stellst du zum Beispiel den Trockner auf die Waschmaschine.");
  await tapRoom(5.25, 5.4, "r_bad");
  await setPane("eg", 5.8, 5.3, { theta: 0.2, phi: 0.75, radius: 5 });
  await search("waschmaschine");
  await R.clickOn({ text: "Waschmaschine", exact: true }, 0.5);
  await sayOver("Erst die Waschmaschine an die Wand, dann der Trockner – mit „X“ und „Y“ genau auf dieselbe Stelle.");
  await dragPlan(5.25, 6, 6.1, 4.85, 1);
  const washer = await selected();
  console.log("washer:", washer.x, washer.z, washer.rotation);
  await tapRoom(4.5, 5.2, "r_bad");
  await search("trockner");
  await R.clickOn({ text: "Trockner", exact: true }, 0.5);
  await fill("X (m)", de(washer.x));
  await fill("Y (m)", de(washer.z));
  await fill("Drehung", String(washer.rotation));
  await sayOver("Die Waschmaschine ist 85 Zentimeter hoch. Also „Höhe über Boden“ 0,85 – und der Trockner steht obendrauf.");
  await fill("Höhe über Boden", "0,85");
  await R.hold(1);
  await sayOver("Manche Möbel hängen von selbst: Ein Oberschrank sitzt auf 1,45 Meter, ein Wand-Fernseher mittig auf 1,30.");
  await tapRoom(7.75, 3.6, "r_kueche");
  await setPane("eg", 6.6, 0.9, { theta: 0.15, phi: 0.95, radius: 5 });
  await search("oberschrank");
  await R.clickOn({ text: "Oberschrank", exact: true }, 0.5);
  await dragPlan(7.75, 2.25, 6.6, 0.3, 1);
  await R.moveTo({ label: "Höhe über Boden" }, 0.5);
  await R.hold(0.4);
  await sayOver("Ich setze ihn auf 1,60. „Höhe automatisch“ bringt ihn zurück. Ein Regal oder einen Netzwerkschrank hängst du genauso an die Wand – die Höhe zählt immer vom Boden.");
  await fill("Höhe über Boden", "1,6");
  await R.hold(0.6);
  await R.clickOn({ text: "Höhe automatisch" }, 0.5);
  await R.hold(0.6);

  // ---------------------------------------------------------------- stacking
  await chapter("Lampe auf dem Tisch");
  await sayOver("Eine Tischlampe stellt sich von selbst auf das Möbel darunter. Erst ein Couchtisch vor das Sofa …");
  await tapRoom(2.2, 3.9, "r_wohnen");
  await setPane("eg", sofa.x, sofa.z + 0.8, { theta: 0.3, phi: 0.75, radius: 5.5 });
  await search("couchtisch");
  await R.clickOn({ text: "Couchtisch", exact: true }, 0.5);
  await fill("X (m)", de(sofa.x));
  await fill("Y (m)", de(sofa.z + 1.1));
  await sayOver("… dann eine Tischlampe. Mit „X“ und „Y“ setze ich sie auf den Tisch – in 3D steht sie obendrauf. Das klappt auch auf Nachttisch, Sideboard oder Schreibtisch.");
  await tapRoom(2.2, 3.9, "r_wohnen");
  await search("tischlampe");
  await R.clickOn({ text: "Tischlampe", exact: true }, 0.5);
  await fill("X (m)", de(sofa.x + 0.3));
  await fill("Y (m)", de(sofa.z + 1.1));
  await R.hold(1);

  // ---------------------------------------------------------------- name and item type
  await chapter("Name und Möbelstück");
  await sayOver("Oben im Formular gibst du einem Möbel einen eigenen „Namen“. Dann erscheint ein Haken: Der Name steht in 3D unter seinem Symbol.");
  await tapItem("armchair");
  await sideTop(0.3);
  await fill("Name", "Lesesessel");
  await R.moveTo({ text: "Name unter dem Symbol" }, 0.5).catch(() => moveToText("Name unter dem Symbol", 0.5));
  await R.hold(0.4);
  await sayOver("Mit „Möbelstück“ tauschst du die Art, ohne neu zu setzen – aus dem Sessel wird ein Hocker. Ich nehme es gleich wieder zurück.");
  await setSelect("Möbelstück", "Hocker");
  await R.hold(0.8);
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.5);

  // ---------------------------------------------------------------- fix
  await chapter("Fixieren");
  await sayOver("Steht ein Möbel richtig, fixierst du es: oben „Fixieren“ – oder die Taste L.");
  await tapPlan(sofa.x, sofa.z, 0.5);
  await sideTop(0.3);
  await clickEl("aside .fp3d-fix");
  await sayOver("Jetzt lässt es sich nicht mehr verschieben – Ziehen bewegt nur die Ansicht. Im Formular änderst du es trotzdem.");
  await dragPlan(sofa.x, sofa.z, sofa.x + 1.2, sofa.z + 0.4, 1.1);
  await R.hold(0.3);
  await R.clickOn({ text: "Alles zeigen", exact: true }, 0.5);
  await sayOver("Löschen geht nur nach einer Rückfrage.");
  await muteDialogs(true);
  await h.side(0.3);
  await press("Entf", "Delete");
  await fakeConfirm("Dieses Element ist fixiert. Trotzdem löschen?");
  await keyCap(null);
  await R.hold(0.6);
  {
    const b = await R.page.evaluate(() => {
      const r = document.querySelector("#tut-cancel").getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
    await R.move(b.x, b.y, 0.5);
    await R.click();
  }
  await noDialog();
  await muteDialogs(false);
  await sayOver("„Lösen“ gibt es wieder frei – auch das geht mit L.");
  await h.side(0.3);
  await press("L", "l");
  await keyCap(null);
  await moveEl("aside .fp3d-fix");
  await R.hold(0.4);

  // ---------------------------------------------------------------- duplicate, delete
  await chapter("Duplizieren und Löschen");
  await sayOver("„Duplizieren“ legt eine Kopie daneben – praktisch für Stühle oder einen zweiten Sessel.");
  {
    const chair = await R.editor(`const f = e.floor.furniture.find((f) => f.type === "armchair"); return { x: f.x, z: f.z };`);
    await tapPlan(chair.x, chair.z, 0.5);
    await sideTop(0.3);
    await R.clickOn({ text: "Duplizieren", exact: true }, 0.5);
    await R.hold(0.4);
    const copy = await selected();
    await dragPlan(copy.x, copy.z, chair.x + 0.2, chair.z - 1.25, 1.1);
  }
  await sayOver("„Löschen“ – oder die Taste Entfernen – nimmt es weg. Strg+Z holt es zurück.");
  await h.side(0.3);
  await press("Entf", "Delete");
  await R.hold(0.4);
  await press("Strg + Z", "z", ["Control"]);
  await keyCap(null);
  await R.hold(0.3);

  // ---------------------------------------------------------------- context menu
  await chapter("Das Rechtsklick-Menü");
  await sayOver("Die wichtigsten Befehle stehen auch im Rechtsklick-Menü. Auf dem Tablet drückst du dafür lange auf das Möbel.");
  {
    const p = await R.planPoint(bench.x, bench.z);
    await R.move(p.x, p.y, 0.6);
    await R.page.evaluate((x, y) => {
      const c = document.getElementById("tut-cursor");
      const r = document.createElement("div");
      r.id = "tut-ring";
      r.style.left = `${x}px`;
      r.style.top = `${y}px`;
      r.style.borderColor = "#ffb547";
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 500);
      void c;
    }, p.x, p.y);
    await R.page.mouse.click(p.x, p.y, { button: "right" });
    for (let i = 0; i < 8; i++) await R.frame(1 / 25, 25);
  }
  await sayOver("Fixieren, Duplizieren, Drehen 90°, Spiegeln und Löschen.");
  for (const t of ["Fixieren", "Duplizieren", "Drehen 90°", "Spiegeln", "Löschen"]) {
    await R.moveTo(`.fp3d-ctx button:nth-child(${["Fixieren", "Duplizieren", "Drehen 90°", "Spiegeln", "Löschen"].indexOf(t) + 1})`, 0.4);
    await R.hold(0.35);
  }
  await sayOver("Ich nehme „Spiegeln“ – und die Eckbank ist wieder wie vorher. Escape schließt das Menü und hebt die Auswahl auf.");
  await R.clickOn(".fp3d-ctx button:nth-child(4)", 0.4);
  await R.hold(0.8);
  await h.side(0.3);
  await press("Esc", "Escape");
  await keyCap(null);

  // ---------------------------------------------------------------- all keys
  await chapter("Alle Tasten auf einen Blick");
  await keyCard(true);
  await say("Hier alle Tasten auf einen Blick: R dreht, L fixiert, Entfernen löscht, die Pfeiltasten schieben, Alt macht alles frei und fein, Strg+Z nimmt zurück.");
  await R.hold(1.2);
  await keyCard(false);

  // ---------------------------------------------------------------- room packages
  await chapter("Räume einrichten");
  await sayOver("Zum Schluss der schnelle Weg: einen ganzen Raum auf einmal. Ich wähle „Auswählen“, tippe das Schlafzimmer an – und unten „Einrichten …“.");
  await R.clickOn({ text: "Auswählen", exact: true }, 0.5);
  await tapRoom(8, 6, "r_schlafen");
  await setPane("eg", 8, 6.2, { theta: 5.7, phi: 0.55, radius: 7 });
  await scrollSide({ text: "Einrichten …" }, 380, 0.8);
  await R.clickOn({ text: "Einrichten …" }, 0.5);
  await sayOver("Neun Pakete stehen zur Wahl, und unter jedem steht, was dazugehört.");
  await moveToText("Zeile an der Rückwand", 0.5);
  await scrollSide({ text: "Doppelbett mit zwei" }, 560, 0.8);
  await sayOver("Küchenzeile, Küche in L-Form, Bad, Schlafzimmer, Wohnzimmer, Esszimmer, Büro, Kinderzimmer und Flur.");
  await moveToText("Waschtisch, WC", 0.4);
  await R.hold(0.3);
  await moveToText("Schreibtisch mit Bürostuhl", 0.5);
  await R.hold(0.3);
  await scrollSide({ text: "Garderobe, zwei" }, 900, 0.6).catch(() => {});
  await moveToText("Garderobe, zwei", 0.5).catch(() => {});
  await R.hold(0.3);
  await scrollSide({ text: "Doppelbett mit zwei" }, 560, 0.6);
  await sayOver("Ich nehme „Schlafzimmer“: Doppelbett mit Nachttischen, Schrank, Kommode und Deckenleuchte – alles an den Wänden.");
  await R.clickOn({ text: "Doppelbett mit zwei" }, 0.5);
  await R.hold(1.2);
  await sayOver("Die Deckenleuchte ist schon mit dem Licht des Bereichs verknüpft. Gefällt dir das Paket nicht, nimmt Strg+Z alles auf einmal zurück.");
  await moveToText("Möbel gesetzt", 0.5).catch(() => R.move(1700, 760, 0.5));
  await R.hold(0.4);
  await h.side(0.3);
  await press("Strg + Z", "z", ["Control"]);
  await R.hold(0.6);
  await press("Strg + Y", "y", ["Control"]);
  await keyCap(null);
  await sayOver("Den Flur richte ich genauso ein – Küche und Bad gehen auch so. Danach passt du einzelne Möbel an, wie vorhin gezeigt.");
  for (const [x, z, pkg, id] of [[3, 5.4, "Garderobe, zwei", "r_flur"]]) {
    await tapRoom(x, z, id, 0.4);
    await scrollSide({ text: "Einrichten …" }, 380, 0.5);
    await R.clickOn({ text: "Einrichten …" }, 0.35);
    await scrollSide({ text: pkg }, 600, 0.4);
    await R.clickOn({ text: pkg }, 0.4);
    await R.frame(0.3, 300);
  }

  // ---------------------------------------------------------------- 3D check
  await chapter("Das Ergebnis in 3D");
  await sayOver("Und so sieht das Erdgeschoss jetzt in 3D aus.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(1500);
  await R.clickOn({ text: "Erdgeschoss", exact: true, nth: 0 }, 0.6);
  await R.sleep(2000);
  await R.hideCursor();
  {
    const A = { theta: 0.3, phi: 0.9, radius: 14 };
    const B = { theta: 1.3, phi: 0.75, radius: 11.5 };
    await setPane("eg", 4.75, 3.75, A, true);
    await sayOver("Sofa und Sessel, die Eckbank, der Trockner auf der Waschmaschine, die Lampe auf dem Tisch – und das eingerichtete Schlafzimmer.");
    await glidePane("eg", 4.75, 3.75, A, B, 8, true);
  }
  await R.hideCursor(false);

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Teil 2: Elektrische Möbel, Stellplatz und Saugroboter", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das war Teil eins: setzen, verschieben, drehen, spiegeln, Größe, Höhe, fixieren und ganze Räume einrichten. In Teil zwei verknüpfen wir Möbel mit Home Assistant.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. NeonPlan läuft übrigens auch auf alten Wandtablets. Bis gleich in Teil zwei!");
  await R.hold(0.6);
} else {
  // ================================================================ PART 2: Elektrische Möbel, Stellplatz und Saugroboter
  const startB = async () => {
    await R.open("empty");
    await freeOnly();
    await robotSensor("Kueche");
    await editorOpen();
    await loadState(houseEp03(true), "eg");
    await furnish(PACKAGES);
  };
  /** Part 2's end: the radiator, the bed's halves, the parking spot and the robot – for the teaser. */
  const finishB = () =>
    R.editor(`e.change((_, f) => {
      const bed = f.furniture.find((x) => x.type === "bed");
      Object.assign(bed, { state_entity: "binary_sensor.bett_links", state_entity2: "binary_sensor.bett_rechts", state_split: "left_right" });
      f.furniture.push({ id: "t_rad", type: "radiator", x: 1.1, z: 0.05, w: 1, d: 0.1, h: 0.6, rotation: 0, variant: null });
      f.furniture.push({ id: "t_park", type: "parking", x: 11.25, z: 2.75, w: 2.6, d: 5.2, h: 0.02, rotation: 0, variant: null, entity: "binary_sensor.garage_auto" });
      f.furniture.push({ id: "t_robot", type: "robot_vacuum", x: 5.6, z: 4.15, w: 0.36, d: 0.5, h: 0.1, rotation: 180, variant: null });
    }); e.past = []; e._canUndo = false;`);

  // ---------------------------------------------------------------- teaser
  await chapter("Teaser");
  await startB();
  await finishB();
  await R.hideCursor();
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.01);
  await R.sleep(1500);
  await R.clickOn({ text: "Erdgeschoss", exact: true, nth: 0 }, 0.01);
  await R.sleep(2500);
  {
    const A = { theta: 0.5, phi: 0.85, radius: 13 };
    const B = { theta: 1.3, phi: 0.7, radius: 11 };
    const C = { theta: 2.0, phi: 0.8, radius: 13 };
    await setPane("eg", 5.5, 3.5, A, true);
    await R.sleep(900);
    await R.title("Elektrische Möbel, Stellplatz und Saugroboter", `NeonPlan 3D · Folge 4 · Teil 2${VERSION}`);
    await sayOver("Der Fernseher leuchtet, das Bett zeigt, wer drin liegt, und der Saugroboter fährt durch die Küche.");
    await glidePane("eg", 5.5, 3.5, A, B, 5.5, true);
    await R.untitle();
    await sayOver("In diesem Video verknüpfen wir Möbel mit Home Assistant – dazu kommen Stellplatz und Saugroboter.");
    await glidePane("eg", 5.5, 3.5, B, C, 4.5, true);
  }

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await startB();
  await R.clickOn({ text: "3D daneben", exact: true }, 0.01);
  await R.sleep(1500);
  await R.clickOn({ text: "Alles zeigen", exact: true }, 0.01);
  await setPane("eg", 5.5, 3, { theta: 0.5, phi: 0.85, radius: 15 });
  await R.sleep(800);
  await R.hideCursor(false);
  await sayOver("Wir machen mit dem Erdgeschoss aus Teil eins weiter. Alle Räume sind eingerichtet, und neben dem Haus steht jetzt eine Garage.");
  await pointPlan(11.25, 2.75, 0.6);
  await R.hold(0.4);
  await sayOver("Auch heute ist alles kostenlos dabei.");
  await pointPlan(3, 2.25, 0.6);

  // ---------------------------------------------------------------- electric furniture: the TV
  await chapter("Elektrische Möbel: der Fernseher");
  await sayOver("Elektrische Möbel erkennst du in der Bibliothek an diesem Symbol: Fernseher, Waschmaschine, Trockner, Spülmaschine, Heizkörper, Saugroboter und mehr.");
  await R.clickOn({ text: "Möbel", exact: true }, 0.5);
  await R.moveTo({ text: "TV-Board" }, 0.6);
  await R.frame(1.2, 600);
  await sayOver("Ich tippe das TV-Board im Wohnzimmer an.");
  {
    const tv = await R.editor(`const f = e.floor.furniture.find((f) => f.type === "tv_board"); return { x: f.x, z: f.z };`);
    await tapPlan(tv.x, tv.z, 0.6);
    await setPane("eg", tv.x, tv.z, { theta: 0.6, phi: 0.8, radius: 7 });
  }
  await sideTop(0.3);
  await sayOver("Im Feld „Fernseher“ steht „Automatisch“: NeonPlan sucht den passenden Media-Player im Bereich selbst – hier den Fernseher.");
  await scrollSide({ label: "Fernseher (Media-Player" }, 380, 0.6);
  await pickerMove("Fernseher (Media-Player", 0.5);
  await R.hold(0.6);
  await sayOver("Hast du einen älteren Fernseher an einer smarten Steckdose, nimmst du hier einfach deren Schalter.");
  await R.hold(0.4);
  await sayOver("Darunter der „Leistungssensor“, auch automatisch gefunden. Damit zeigt das Möbel seine Watt.");
  await pickerMove("Leistungssensor", 0.5);
  await R.hold(0.8);
  await sayOver("„Vor dem Schalten nachfragen“ fragt erst, bevor ein Tipp in 3D schaltet. Das „Symbol in 3D“ zeige ich dir in Folge sechs bei den Geräten.");
  await R.clickOn({ text: "Vor dem Schalten nachfragen" }, 0.5);
  await R.hold(0.4);
  await R.clickOn({ text: "Vor dem Schalten nachfragen" }, 0.4);
  await R.moveTo({ label: "Symbol in 3D" }, 0.5);
  await R.hold(0.4);
  await sayOver("Wählst du die Entität von Hand, steht unten „Wieder als Geräte-Pin“: Das macht aus dem Möbel wieder einen einfachen Pin.");
  await pickEntity("Fernseher (Media-Player", "fern", "Fernseher", 0.5);
  await scrollSide({ text: "Wieder als Geräte-Pin" }, 760, 0.6);
  await R.moveTo({ text: "Wieder als Geräte-Pin" }, 0.5);
  await R.hold(0.6);

  // ---------------------------------------------------------------- washer, radiator
  await chapter("Waschmaschine und Heizkörper");
  await sayOver("Die Waschmaschine im Bad findet ihren Leistungssensor ebenfalls selbst. Sie leuchtet in 3D, solange sie arbeitet – also Strom zieht.");
  {
    const w = await R.editor(`const f = e.floor.furniture.find((f) => f.type === "washer"); return { x: f.x, z: f.z };`);
    await tapPlan(w.x, w.z, 0.6);
    await setPane("eg", w.x + 0.4, w.z - 0.3, { theta: 1.9, phi: 0.65, radius: 5 });
  }
  await sideTop(0.3);
  await scrollSide({ label: "Leistungssensor" }, 420, 0.5);
  await pickerMove("Leistungssensor", 0.5);
  await R.hold(0.6);
  await sayOver("Ins Feld „Gerät“ kommt ein Schalter, eine Steckdose – oder ein Status-Sensor, etwa der Druckstatus eines 3D-Druckers.");
  await pickerMove("Gerät", 0.5);
  await R.hold(0.8);
  await sayOver("Ein Heizkörper nimmt das Thermostat. Ich setze einen an die Wand links neben das TV-Board.");
  await R.clickOn({ text: "Möbel", exact: true }, 0.4);
  await fitPlan();
  await tapRoom(4.6, 3.6, "r_wohnen");
  await sideTop(0.3);
  await search("heizk");
  await R.clickOn({ text: "Heizkörper", exact: true }, 0.5);
  await dragPlan(3, 2.25, 1.1, 0.15, 1.1);
  await setPane("eg", 1.2, 0.8, { theta: 0.3, phi: 0.7, radius: 5.5 });
  await sayOver("„Heizung“ steht auf automatisch und findet das Thermostat. Weil es gerade heizt, glüht der Heizkörper in 3D.");
  await scrollSide({ label: "Heizung (Thermostat)" }, 420, 0.5).catch(() => {});
  await pickerMove("Heizung (Thermostat)", 0.5).catch(() => {});
  await R.hold(1.2);

  // ---------------------------------------------------------------- state from: the bed's halves
  await chapter("Zustand von: das Bett mit zwei Hälften");
  await sayOver("Jedes andere Möbel kann mit „Zustand von“ leuchten: das Bett mit Belegungsmatte, der Sessel, die Sauna.");
  {
    const b = await R.editor(`const f = e.floor.furniture.find((f) => f.type === "bed"); return { x: f.x, z: f.z };`);
    await R.clickOn({ text: "Auswählen", exact: true }, 0.4);
    await tapPlan(b.x, b.z + 0.3, 0.6);
    await setPane("eg", b.x, b.z + 0.4, { theta: 5.7, phi: 0.55, radius: 6 });
  }
  await sideTop(0.3);
  await scrollSide({ label: "Zustand von" }, 420, 0.5);
  await sayOver("Ich wähle „Bett links belegt“. Dann erscheint ein zweites Feld für die andere Hälfte: „Bett rechts belegt“.");
  await pickEntity("Zustand von", "bett", "Bett links belegt", 0.5);
  await pickEntity("Zweiter Zustand", "bett", "Bett rechts belegt", 0.5);
  await sayOver("Bei „Hälften“ wählst du links und rechts – oder unten und oben, für ein Hochbett.");
  await R.pickOption("Hälften", "Unten / oben (Hochbett)", 0.5);
  await R.hold(0.4);
  await R.pickOption("Hälften", "Links / rechts", 0.5);
  await sayOver("In 3D leuchtet jetzt die linke Hälfte – dort liegt gerade jemand.");
  await R.hold(1.2);

  // ---------------------------------------------------------------- parking spot
  await chapter("Stellplatz in der Garage");
  await sayOver("Jetzt die Garage. In der Bibliothek, unter „Stellplätze“, steht der „Stellplatz“.");
  await R.clickOn({ text: "Möbel", exact: true }, 0.4);
  await fitPlan();
  await tapRoom(11.25, 4.4, "r_garage");
  await sideTop(0.3);
  await clearSearch();
  await scrollSide({ text: "Stellplätze" }, 600, 0.6);
  await R.clickOn({ text: "Stellplätze" }, 0.5);
  await R.clickOn({ text: "Stellplatz", exact: true }, 0.5);
  await setPane("eg", 11.25, 2.75, { theta: 0.6, phi: 0.8, radius: 9 });
  await sayOver("Er markiert, wo ein Auto steht: in der Garage, in der Einfahrt oder irgendwo auf dem Grundstück.");
  await pointPlan(11.25, 2.75, 0.5);
  await R.hold(0.5);
  await sideTop(0.3);
  await scrollSide({ label: "Sensor „Auto anwesend“" }, 330, 0.5);
  await sayOver("Beim „Sensor Auto anwesend“ wähle ich „Auto in der Garage“. Solange er ein Auto meldet, steht das Fahrzeug da – ohne Sensor steht es immer da.");
  await pickEntity("Sensor „Auto anwesend“", "auto", "Auto in der Garage", 0.5);
  await sayOver("Das Fahrzeug selbst kommt aus dem Pack „Fahrzeuge“ – darum steht hier der Hinweis. Der Stellplatz ist kostenlos.");
  await moveToText("Kein Fahrzeug-Pack", 0.5);
  await R.hold(0.6);
  await sayOver("„Größe“ passt das Fahrzeug an den Platz an. Ist es höher als der Raum, warnt der Editor.");
  await R.moveTo({ label: "Größe (%)" }, 0.5);
  await R.hold(0.5);
  await sayOver("Und der „Fahrzeugtyp-Sensor“: Meldet etwa eine Kamera-Auswertung, welches Auto da ist, ordnest du jedem Zustand ein Fahrzeug zu.");
  await pickEntity("Fahrzeugtyp-Sensor", "fahrzeug", "Fahrzeugtyp Garage", 0.5);
  await scrollSide({ text: "+ Zuordnung" }, 600, 0.5);
  await R.clickOn({ text: "+ Zuordnung" }, 0.5);
  await R.hold(0.6);

  // ---------------------------------------------------------------- robot vacuum
  await chapter("Der Saugroboter");
  await sayOver("Zum Schluss der Saugroboter. Er kommt dorthin, wo seine Station steht – bei mir ins Wohnzimmer.");
  await fitPlan();
  await tapRoom(4.6, 3.6, "r_wohnen");
  await sideTop(0.3);
  await search("saug");
  await R.clickOn({ text: "Saugroboter", exact: true }, 0.5);
  await setPane("eg", 4.6, 3.4, { theta: 0.3, phi: 0.7, radius: 6 });
  await dragPlan(3, 2.25, 5.6, 4.1, 1.1);
  await sayOver("„Saugroboter“ steht auf automatisch und findet „Saugi“. Saugt er in Home Assistant, fährt er in 3D Bahnen durch den Raum und danach zurück zur Station.");
  await sideTop(0.3);
  await scrollSide({ label: "Saugroboter" }, 400, 0.5);
  await pickerMove("Saugroboter", 0.5);
  await R.hold(0.5);
  await sayOver("Die Bahn ist simuliert, denn Home Assistant kennt die genaue Position meistens nicht. Viele Roboter melden aber den Raum, den sie gerade saugen.");
  await R.hold(0.3);
  await sayOver("Diesen Sensor findet NeonPlan am Gerät des Roboters von selbst: „Aktueller Raum“. Hier meldet er „Kueche“ – ohne Umlaut.");
  await pickerMove("Aktueller Raum", 0.5);
  await R.hold(0.6);
  await sayOver("Groß- und Kleinschreibung und Umlaute spielen keine Rolle: „Kueche“ passt zur Küche. Also fährt er jetzt dort.");
  await setPane("eg", 7.75, 2.5, { theta: 0.6, phi: 0.7, radius: 7.5 });
  await live(N.length("Groß- und Kleinschreibung und Umlaute spielen keine Rolle: „Kueche“ passt zur Küche. Also fährt er jetzt dort."));
  await sayOver("Um Schränke, Sofas und Betten macht er einen Bogen. Unter Tischen und Stühlen fährt er durch, auch über Teppiche und unter Oberschränken.");
  await live(N.length("Um Schränke, Sofas und Betten macht er einen Bogen. Unter Tischen und Stühlen fährt er durch, auch über Teppiche und unter Oberschränken."));
  await sayOver("Passt kein Raum, bleibt er im Raum seiner Station.");
  await live(N.length("Passt kein Raum, bleibt er im Raum seiner Station."));

  // ---------------------------------------------------------------- everything live in 3D
  await chapter("Alles live in 3D");
  await sayOver("Jetzt alles zusammen in der 3D-Ansicht.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(1500);
  await R.clickOn({ text: "Erdgeschoss", exact: true, nth: 0 }, 0.6);
  await R.sleep(2000);
  await R.hideCursor();
  {
    const A = { theta: 0.3, phi: 0.85, radius: 16 };
    const B = { theta: 1.1, phi: 0.72, radius: 14 };
    await setPane("eg", 6.2, 3.4, A, true);
    await sayOver("Der Fernseher leuchtet, der Heizkörper glüht, die Waschmaschine läuft, im Bett liegt jemand links – und der Saugroboter fährt durch die Küche.");
    await glidePane("eg", 6.2, 3.4, A, B, 9, true);
  }
  await R.hideCursor(false);

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Nächste Folge: Erweiterungen und Möbel-Packs", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das waren elektrische Möbel, Zustand und Hälften, der Stellplatz und der Saugroboter – alles mit den kostenlosen Möbeln.");
  await say("In Folge fünf zeige ich dir die Erweiterungen: Shop verbinden und Möbel-Packs installieren – mit mehr Möbeln, und auch mit den Fahrzeugen.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
  await R.hold(0.6);
}

await catchUp();
N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
