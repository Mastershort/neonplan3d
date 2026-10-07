// Tutorial episode 3 – "Etagen, Treppen und Keller", in two parts (the checklist does not fit into 8 minutes):
//   a) Etagen und Keller: the floor form in full (add from HA floors, height above ground, ceiling height, a cellar
//      below ground with rooms from HA areas and „Lücken schließen", an attic, an empty floor, order, delete,
//      shift / turn / „Alle Etagen mitnehmen", the floor start view with „3D daneben"), checked in 3D.
//   b) Treppen und Bodenöffnungen: the free stair from the ground floor up (direction, height, the opening it cuts),
//      the floor-opening tool (gallery, L shape, the "outside a room" warning), the stair types of the pack
//      „Treppen & Geländer" (L, U, spiral to the cellar, space saver to the attic), „3D daneben" in detail, 3D check.
// Starts from a small house like the end of episode 1 (loaded invisibly); part b starts where part a ends.
// The stair pack is served from private/packs/src/stairs.json by request interception (the recorder itself does not
// serve private/), only for this episode.
// Usage (from frontend/): node tutorials/ep03-etagen-treppen-keller.mjs <out-dir> a|b [<voice-dir de> [<voice-dir en>]]
//   (voice dirs: private/tutorial-audio/ep03a/de and …/en, resp. ep03b)
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4>

import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { appVersion, narration, startRecorder } from "./recorder.mjs";

const out = process.argv[2] ?? "tutorial-ep03";
const PART = process.argv[3] === "b" ? "b" : "a";
const VERSION = `<br><span style="font-size:20px;opacity:.7">aufgenommen mit NeonPlan 3D ${appVersion()}</span>`;
const STAIR_PACK = "pack:mastershort.stairs";

// ---------------------------------------------------------------- states (invented demo house, ep01 style)
const rectRoom = (id, name, area_id, x0, z0, x1, z1, floor_material = "wood") => ({ id, name, area_id, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material });
const hole = (id, type, room_id, edge, offset, width, extra = {}) => ({ id, room_id, edge, offset, width, type, sill: type === "door" ? 0 : 0.9, height: type === "door" ? 2.05 : 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra });
const floorOf = (id, name, elevation, ha_floor, rooms, openings = [], extra = {}) => ({ id, name, elevation, height: 2.5, cut_height: 1.15, rooms, openings, furniture: [], placements: [], background: null, outdoor: [], walls: [], ha_floor, ...extra });
const item = (id, type, x, z, w, d, h, rotation = 0, extra = {}) => ({ id, type, x, z, w, d, h, rotation, variant: null, ...extra });

const ground = () =>
  floorOf("eg", "Erdgeschoss", 0, "erdgeschoss", [
    rectRoom("r_wohnen", "Wohnzimmer", "wohnzimmer", 0, 0, 6, 4.5),
    rectRoom("r_kueche", "Küche", "kueche", 6, 0, 9.5, 4.5, "tiles"),
    rectRoom("r_flur", "Flur", "flur", 0, 4.5, 4, 7.5, "tiles"),
    rectRoom("r_bad", "Bad", "bad", 4, 4.5, 6.5, 7.5, "tiles"),
    rectRoom("r_schlafen", "Schlafzimmer", "schlafzimmer", 6.5, 4.5, 9.5, 7.5, "carpet"),
  ], [
    hole("o1", "window", "r_wohnen", 0, 3, 1.6),
    hole("o2", "window", "r_kueche", 0, 1.75, 1.2),
    hole("o3", "door", "r_flur", 3, 2.3, 1.0),
    hole("o4", "door", "r_flur", 0, 1.2, 0.9),
    hole("o5", "door", "r_bad", 0, 1.25, 0.8),
    hole("o6", "window", "r_bad", 2, 1.25, 0.8, { sill: 1.3, height: 0.8 }),
    hole("o7", "door", "r_schlafen", 0, 1.5, 0.9),
    hole("o8", "window", "r_schlafen", 2, 1.5, 1.4),
  ]);
const upper = (extra = {}) =>
  floorOf("og", "Obergeschoss", 2.75, "obergeschoss", [
    rectRoom("r_kind", "Kinderzimmer", "kinderzimmer", 0, 0, 4.5, 4.5),
    rectRoom("r_arbeit", "Arbeitszimmer", "arbeitszimmer", 4.5, 0, 9.5, 4.5),
    rectRoom("r_flur_og", "Flur oben", null, 0, 4.5, 9.5, 7.5),
  ], [
    hole("p1", "window", "r_kind", 0, 2.25, 1.2),
    hole("p2", "window", "r_arbeit", 0, 2.5, 1.6),
    hole("p3", "door", "r_kind", 2, 2.25, 0.9),
    hole("p4", "door", "r_arbeit", 2, 2.5, 0.9),
    hole("p5", "window", "r_flur_og", 2, 4.75, 1.2),
  ], extra);
// the cellar as part a leaves it: four rooms from the HA areas, gaps closed, shifted 1.38 m to the back wall
const cellar = () =>
  floorOf("kg", "Keller", -2.45, "keller", [
    rectRoom("k_heiz", "Heizungsraum", "heizung", 0, 1.38, 4, 4.44),
    rectRoom("k_hobby", "Hobbyraum", "hobby", 4, 1.38, 8, 4.44),
    rectRoom("k_vorrat", "Vorratsraum", "vorrat", 0, 4.44, 4, 7.5),
    rectRoom("k_wasch", "Waschküche", "waschkueche", 4, 4.44, 8, 7.5),
  ], [], { height: 2.2 });
const attic = () => floorOf("dg", "Dachgeschoss", 5.5, "dachgeschoss", [rectRoom("d_boden", "Dachboden", null, 0, 0, 9.5, 7.5)], [], { height: 2.2 });
const OG_VIEW = { theta: 3.6, phi: 0.85, radius: 15 };
const startFloors = () => [ground(), upper()];
const partAEnd = () => [cellar(), ground(), upper({ start_view: OG_VIEW }), attic()];
const finalFloors = () => {
  const f = partAEnd();
  f[0].furniture.push(item("st_spiral", `${STAIR_PACK}:spiral`, 3.1, 5.35, 1.6, 1.6, 2.45));
  f[1].furniture.push(item("st_main", "stairs", 2.0, 6.85, 1.0, 3.2, 2.75, 90));
  f[2].furniture.push(item("st_space", `${STAIR_PACK}:space_saver`, 7.6, 6.0, 0.7, 2.4, 2.75, 90));
  f[2].furniture.push(item("h_gallery", "stairwell", 2.0, 6.2, 3.2, 0.5, 0.02));
  return f;
};

// "dump": write the final state (for probes) and stop
if (process.argv[3] === "dump") {
  (await import("node:fs")).writeFileSync(out, JSON.stringify(finalFloors()));
  process.exit(0);
}

// ---------------------------------------------------------------- the stair pack (paid pack, shown as an extension)
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const N = narration(R, process.argv.slice(4));
const { say, sayOver, chapter, catchUp } = N;
{
  const file = resolve(import.meta.dirname, "..", "..", "private", "packs", "src", "stairs.json");
  const pack = existsSync(file) ? readFileSync(file, "utf-8") : null;
  if (!pack && PART === "b") throw new Error("part b needs private/packs/src/stairs.json");
  await R.page.setRequestInterception(true);
  R.page.on("request", (req) => {
    const u = req.url();
    if (u.includes("/private/packs/src/index.json")) return req.respond({ status: 200, contentType: "application/json", body: pack ? '["stairs.json"]' : "[]" });
    if (u.includes("/private/packs/src/stairs.json") && pack) return req.respond({ status: 200, contentType: "application/json", body: pack });
    if (u.includes("/private/")) return req.respond({ status: 404, body: "" });
    return req.continue();
  });
}
// confirm() / alert() of the app: accepted at once (a native dialog is not in the screenshots; fakeDialog shows it)
R.page.on("dialog", (d) => void d.accept());

// ---------------------------------------------------------------- helpers
const editorOpen = async () => {
  await R.clickOn({ text: "Editor", exact: true }, 0.01);
  await R.sleep(700);
};
/** Load a state invisibly (no undo step) and show a floor. */
const loadState = async (floors, floorId) => {
  await R.editor(`const d = structuredClone(e._doc); d.floors = ${JSON.stringify(floors)}; e.setDoc(d, null); e.past = []; e._canUndo = false; e._floorId = ${JSON.stringify(floorId)}; e._roomId = null; e.fit();`);
  await R.sleep(900);
};
/** Type over the value of a form field (by its label). */
const fill = async (label, value, seconds = 0.5) => {
  await R.clickOn({ label }, seconds);
  await typeOver(value);
};
const typeOver = async (value) => {
  await R.page.keyboard.down("Control");
  await R.page.keyboard.press("a");
  await R.page.keyboard.up("Control");
  await R.type(value, 0.06);
  await R.key("Enter");
};
const tapPlan = async (x, z, seconds = 0.5) => {
  const p = await R.planPoint(x, z);
  await R.move(p.x, p.y, seconds);
  await R.click();
};
const pointPlan = async (x, z, seconds = 0.5) => {
  const p = await R.planPoint(x, z);
  await R.move(p.x, p.y, seconds);
};
const dragPlan = async (x0, z0, x1, z1, seconds = 1) => {
  const a = await R.planPoint(x0, z0);
  const b = await R.planPoint(x1, z1);
  await R.move(a.x, a.y, 0.5);
  await R.drag(b.x, b.y, seconds);
};
const chip = (name) => R.clickOn({ text: name, exact: true, nth: 0 }, 0.5);
const back = (seconds = 0.5) => R.clickOn({ text: "Zurück zur Etage" }, seconds);
/** Park the cursor on the side panel's edge and scroll a heading / button into view. */
const scrollSide = async (text, top, seconds = 0.6) => {
  await R.move(1607, 640, 0.35);
  await R.scrollTo(text, top, seconds);
};
/** The app's confirm()/alert() as a visible box (native dialogs are not in headless screenshots). */
const fakeDialog = (text) =>
  R.page.evaluate((t) => {
    const d = document.createElement("div");
    d.id = "tut-dialog";
    d.style.cssText =
      "position:fixed;left:50%;top:22%;transform:translateX(-50%);z-index:2147483644;max-width:620px;padding:22px 26px;border-radius:12px;background:#f4f6fa;color:#111;font:18px/1.4 system-ui,'Segoe UI',sans-serif;box-shadow:0 12px 50px rgba(0,0,0,.6)";
    d.innerHTML = `<div style="font-size:14px;color:#555;margin-bottom:8px">127.0.0.1 meldet</div>${t}<div style="text-align:right;margin-top:18px"><span style="display:inline-block;padding:7px 22px;border-radius:6px;background:#1a73e8;color:#fff">OK</span></div>`;
    document.body.appendChild(d);
  }, text);
const noDialog = () => R.page.evaluate(() => document.getElementById("tut-dialog")?.remove());
/** The two inputs of „Etage verschieben" (X and Y; the app names the second one Z). */
const shiftField = (axis) => R.clickOn(`input[aria-label="${axis}"]`, 0.5);
/** Centre of the editor's 3D pane, for drags that turn its camera. */
const paneBox = () => R.locate(".fp3d-editor-3d");
/** Up to the floor form: select tool, then "Zurück zu …" until nothing is selected. */
const toFloor = async () => {
  await R.clickOn({ text: "Auswählen", exact: true }, 0.45);
  for (let i = 0; i < 3; i++) {
    const up = await R.locate({ text: "Zurück zu" }).catch(() => null);
    if (!up) break;
    await R.clickOn({ text: "Zurück zu" }, 0.45);
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
/** Point the editor's 3D pane at a plan point (x, z) of a floor – a clean framing, like turning and zooming by hand. */
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
/** Glide the editor's 3D pane camera from its current view to another (theta, phi, radius). */
const panePaneView = () =>
  R.page.evaluate(() => {
    const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
    const v = e.renderRoot.querySelector("fp3d-view3d");
    const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap);
    const { theta, phi, radius } = viewer.controls.view;
    return { theta, phi, radius };
  });
/** Move the cursor onto any element (also a paragraph) whose text contains `text`; the innermost last match. */
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
      if (!/^(P|SPAN|DIV|LABEL|BUTTON)$/.test(el.tagName)) continue;
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
/** Keep the app's confirm()/alert() from firing on the next click (a fake dialog is shown instead). */
const muteDialogs = (on) =>
  R.page.evaluate((on) => {
    if (on) {
      window.__tutConfirm = window.confirm;
      window.__tutAlert = window.alert;
      window.confirm = () => false;
      window.alert = () => {};
    } else if (window.__tutConfirm) {
      window.confirm = window.__tutConfirm;
      window.alert = window.__tutAlert;
    }
  }, on);
/** Show the fake dialog, click its OK button, close it. */
const dialogOk = async (text) => {
  await fakeDialog(text);
  await R.hold(0.3);
  const ok = await R.page.evaluate(() => {
    const r = document.querySelector("#tut-dialog span").getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  });
  await R.move(ok.x, ok.y, 0.6);
  await R.click();
  await noDialog();
};
/** Teaser: the finished house of both parts, live in 3D, floors pulled apart. */
const teaser = async (title, line1, line2) => {
  await chapter("Teaser");
  await R.open("empty");
  await R.hideCursor();
  await editorOpen();
  await loadState(finalFloors(), "eg");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.01);
  await R.sleep(1500);
  await R.clickOn({ text: "Alle Etagen", exact: true }, 0.01);
  await R.clickOn({ text: "Auseinander", exact: true }, 0.01);
  await R.sleep(2000);
  const A = { theta: 0.75, phi: 1.0, radius: 30 };
  const B = { theta: 1.9, phi: 0.85, radius: 27 };
  const C = { theta: 2.6, phi: 0.75, radius: 29 };
  await R.view(A);
  await R.sleep(900);
  await R.title(title, `NeonPlan 3D · Folge 3 · ${PART === "a" ? "Teil 1" : "Teil 2"}${VERSION}`);
  await sayOver(line1);
  await R.glide(A, B, 5);
  await R.untitle();
  await sayOver(line2);
  await R.glide(B, C, 4.5);
};

if (PART === "a") {
  // ================================================================ PART 1: Etagen und Keller
  await teaser(
    "Etagen, Treppen und Keller",
    "Ein Haus mit Keller, Erdgeschoss, Obergeschoss und Dachboden – jede Etage auf der richtigen Höhe.",
    "Heute geht es um die Etagen. Im zweiten Teil kommen die Treppen und die Öffnungen im Boden dazu.",
  );

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await R.open("empty");
  await editorOpen();
  await loadState(startFloors(), "eg");
  await R.hideCursor(false);
  await sayOver("Wir starten mit dem kleinen Haus aus Folge eins: Erdgeschoss und Obergeschoss.");
  await R.move(800, 560, 0.6);
  await R.hold(0.5);
  await sayOver("Dazu kommen ein Keller unter der Erde und ein Dachgeschoss. Alles, was du hier siehst, ist kostenlos.");
  await R.moveTo({ text: "Etage hinzufügen" }, 0.6);

  // ---------------------------------------------------------------- the floor form
  await chapter("Das Etagen-Formular");
  await sayOver("Rechts oben stehen deine Etagen. Ein Klick wechselt die Etage im Plan – hier das Obergeschoss,");
  await chip("Obergeschoss");
  await sayOver("und das Erdgeschoss liegt gestrichelt darunter. So zeichnest du sauber übereinander.");
  await pointPlan(9.5, 7.5, 0.6);
  await R.hold(0.8);
  await chip("Erdgeschoss");
  await sayOver("Das Etagen-Formular siehst du immer dann, wenn nichts ausgewählt ist. Ist ein Raum ausgewählt, klickst du auf „Zurück zur Etage“.");
  await tapPlan(2, 6, 0.6);
  await R.hold(0.6);
  await back(0.6);
  await sayOver("Hier stehen „Name“, „Höhe über Boden“ – das Erdgeschoss liegt bei null –");
  await R.moveTo({ label: "Name" }, 0.5);
  await R.hold(0.5);
  await R.moveTo({ label: "Höhe über Boden" }, 0.5);
  await sayOver("und die „Raumhöhe“: so hoch werden die Wände. Darunter die Verknüpfung mit der Etage in Home Assistant.");
  await R.moveTo({ label: "Raumhöhe" }, 0.5);
  await R.hold(0.8);
  await R.moveTo({ label: "Etage in Home Assistant" }, 0.5);

  // ---------------------------------------------------------------- cellar
  await chapter("Keller unter der Erde");
  await sayOver("Jetzt der Keller: „Etage hinzufügen“. Im Menü stehen nur die Etagen aus Home Assistant, die noch fehlen, mit ihrer Ebene.");
  await R.clickOn({ text: "Etage hinzufügen" }, 0.5);
  await R.hold(0.5);
  await R.moveTo({ text: "Keller", nth: 0 }, 0.5);
  await R.hold(0.6);
  await R.moveTo({ text: "Leere Etage" }, 0.5);
  await sayOver("Der Keller hat in Home Assistant die Ebene minus eins.");
  await R.clickOn({ text: "Keller", nth: 0 }, 0.5);
  await sayOver("Darum liegt er automatisch bei minus 2,75 Meter – also unter der Erde. Und in der Liste ganz unten: Etagen werden von unten nach oben sortiert.");
  await R.moveTo({ label: "Höhe über Boden" }, 0.5);
  await R.hold(1.6);
  await R.moveTo({ text: "Keller", exact: true, nth: 0 }, 0.5);
  await sayOver("Kellerräume sind oft niedriger. Ich stelle die Raumhöhe auf 2,20.");
  await fill("Raumhöhe", "2,2");
  await sayOver("Dann muss der Keller auch höher liegen: Raumhöhe plus 25 Zentimeter Decke muss genau bis null reichen – also minus 2,45.");
  await R.hold(0.6);
  await fill("Höhe über Boden", "-2,45");
  await sayOver("Die Faustregel gilt für jede Etage: Höhe über Boden plus Raumhöhe plus Decke ergibt die Höhe der nächsten Etage.");
  await R.moveTo({ label: "Raumhöhe" }, 0.5);
  await R.hold(0.5);
  await R.moveTo({ label: "Höhe über Boden" }, 0.5);

  // ---------------------------------------------------------------- rooms from areas, gaps
  await chapter("Räume aus Bereichen, Lücken schließen");
  await sayOver("Die Kellerräume gibt es in Home Assistant schon als Bereiche. Dieser Knopf legt für jeden einen Raum an – vier Stück.");
  await R.clickOn({ text: "Räume aus HA-Bereichen anlegen" }, 0.6);
  await sayOver("Es sind Kacheln mit vier mal drei Metern, schon mit dem richtigen Bereich verknüpft. Jetzt schiebst du sie an ihren Platz.");
  await R.hold(1);
  await sayOver("Den Hobbyraum ziehe ich an den Heizungsraum – die Ecken rasten ein.");
  await dragPlan(6.5, 1.5, 6.0, 1.5, 1.2);
  await sayOver("Genau geht es mit den Feldern: Waschküche antippen, „X“ vier, „Y“ 3,12. Die zwölf Zentimeter Abstand sind wie beim Ausmessen von innen.");
  await tapPlan(2, 5, 0.6);
  await fill("X (m)", "4");
  await fill("Y (m)", "3,12");
  await sayOver("Der Vorratsraum kommt daneben: „X“ null, „Y“ 3,12.");
  await back(0.5);
  await tapPlan(11, 1.5, 0.6);
  await fill("X (m)", "0");
  await fill("Y (m)", "3,12");
  await back(0.5);
  await sayOver("Hast du innen gemessen, liegen zwischen den Räumen Lücken. „Lücken schließen“ führt Räume bis 60 Zentimeter Abstand zusammen.");
  await R.moveTo({ text: "Lücken schließen" }, 0.6);
  await R.hold(0.6);
  await R.click();
  await sayOver("Unten steht, was passiert ist: zwei Stellen geschlossen, und der Abstand wird zur Innenwand – zwölf Zentimeter.");
  await R.moveTo("p.fp3d-notice", 0.5).catch(() => R.move(1700, 760, 0.5));
  await R.hold(0.6);

  // ---------------------------------------------------------------- shift and turn
  await chapter("Etage verschieben und drehen");
  await sayOver("Der Keller ist kürzer als das Haus: 6,12 statt 7,5 Meter. Er soll bündig mit der unteren Außenwand liegen – also 1,38 Meter nach unten.");
  await R.moveTo(`input[aria-label="X"]`, 0.6);
  await R.hold(0.8);
  await sayOver("Dafür ist „Etage verschieben“: das erste Feld für X nach rechts, das zweite für Y nach unten. Dann auf „Verschieben“.");
  await shiftField("Z");
  await typeOver("1,38");
  await R.clickOn({ text: "Verschieben", exact: true }, 0.5);
  await sayOver("Alles auf der Etage wandert mit: Räume, Möbel, Geräte, Außenflächen, freie Wände und das Hintergrundbild. Dach und Leitungen bleiben liegen.");
  await R.move(800, 560, 0.6);
  await R.hold(1.2);
  await sayOver("„90° drehen“ dreht die Etage im Uhrzeigersinn um die Mitte ihrer Räume – falls du sie verdreht gezeichnet hast.");
  await R.clickOn({ text: "90° drehen" }, 0.6);
  await R.hold(1.2);
  await sayOver("Das will ich hier nicht: Strg+Z oder „Rückgängig“ holt alles zurück.");
  await R.clickOn({ text: "Rückgängig", exact: true }, 0.6);
  await sayOver("Mit dem Haken „Alle Etagen mitnehmen“ wirken Verschieben und Drehen aufs ganze Haus – mit Dach, Garten, Leitungen und Zähler.");
  await R.clickOn({ text: "Alle Etagen mitnehmen" }, 0.6);
  await R.hold(1.2);
  await R.clickOn({ text: "Alle Etagen mitnehmen" }, 0.5);

  // ---------------------------------------------------------------- attic, empty floor, order, delete
  await chapter("Dachgeschoss und leere Etage");
  await sayOver("Jetzt das Dachgeschoss. Es hat Ebene zwei und landet bei 5,50 Meter – genau über dem Obergeschoss.");
  await R.clickOn({ text: "Etage hinzufügen" }, 0.5);
  await R.clickOn({ text: "Dachgeschoss", nth: 0 }, 0.5);
  await R.moveTo({ label: "Höhe über Boden" }, 0.5);
  await sayOver("Die Wände unterm Dach sind niedriger: Raumhöhe 2,20. Die Dachschrägen bauen wir in der Dach-Folge.");
  await fill("Raumhöhe", "2,2");
  await sayOver("Ein großer Raum für den Dachboden: „Rechteck“ und einmal über das ganze Haus – das Obergeschoss gestrichelt darunter zeigt die Ecken.");
  await R.clickOn({ text: "Rechteck", exact: true }, 0.5);
  await dragPlan(0, 0, 9.5, 7.5, 1.3);
  await fill("Name", "Dachboden");
  await sayOver("Gespeichert wird übrigens von selbst – oben rechts steht „Gespeichert“.");
  await R.move(1830, 34, 0.5);
  await R.hold(0.4);
  await back(0.5);
  await sayOver("Jetzt sind alle Etagen aus Home Assistant vergeben. Dann legt „Etage hinzufügen“ sofort eine leere Etage an – oben aufs Haus.");
  await R.clickOn({ text: "Etage hinzufügen" }, 0.5);
  await R.hold(0.6);
  await sayOver("Bei „Etage in Home Assistant“ ist nichts mehr frei – jede HA-Etage gehört schon zu einer Etage im Plan.");
  await R.pickOption("Etage in Home Assistant", "– keine –", 0.5);
  await sayOver("„Nach oben“ und „Nach unten“ ändern nur die Reihenfolge in der Liste. Wo eine Etage im Haus liegt, bestimmt allein die Höhe über Boden.");
  await R.clickOn({ text: "Nach unten", exact: true }, 0.5);
  await R.hold(0.8);
  await R.clickOn({ text: "Nach oben", exact: true }, 0.5);
  await sayOver("Die brauche ich nicht: „Etage löschen“. Nach einer Rückfrage ist sie samt Räumen weg – Strg+Z holt sie zurück.");
  await muteDialogs(true);
  await R.clickOn({ text: "Etage löschen" }, 0.5);
  await dialogOk("Etage „Etage 4“ mit allen Räumen löschen?");
  await muteDialogs(false);
  await R.editor("e.deleteFloor();");
  await R.frame(1 / 25, 300);

  // ---------------------------------------------------------------- 3D beside and the floor start view
  await chapter("3D daneben und Startansicht der Etage");
  await sayOver("Noch ein Knopf: „Ansicht als Start der Etage“. Ohne 3D-Ansicht meldet er sich so:");
  await chip("Obergeschoss");
  await muteDialogs(true);
  await R.clickOn({ text: "Ansicht als Start der Etage" }, 0.6);
  await catchUp();
  await dialogOk("Schalte zuerst „3D daneben“ ein und dreh die Etage so, wie sie sich öffnen soll.");
  await muteDialogs(false);
  await sayOver("Also oben „3D daneben“: Rechts erscheint die Etage in 3D, und jede Änderung kommt nach einem Augenblick dazu.");
  await R.clickOn({ text: "3D daneben", exact: true }, 0.6);
  await R.sleep(1500);
  await R.hold(1.6);
  await sayOver("Mit der Leiste dazwischen stellst du die Breite ein.");
  {
    const h = await R.locate(".fp3d-split-handle");
    await R.move(h.x, h.y, 0.5);
    await R.drag(h.x - 160, h.y, 0.8);
  }
  await sayOver("Ich drehe die 3D-Ansicht, bis ich das Obergeschoss von hinten sehe …");
  {
    const p = await paneBox();
    for (let i = 0; i < 2; i++) {
      await R.move(p.x + 230, p.y + 160, 0.4);
      await R.drag(p.x - 230, p.y + 140, 1.1);
    }
    console.log("pane view after turning:", JSON.stringify(await panePaneView()));
  }
  await sayOver("… und klicke auf „Ansicht als Start der Etage“. Öffnest du das Obergeschoss in 3D, kommt es genau so.");
  await R.clickOn({ text: "Ansicht als Start der Etage" }, 0.6);
  await sayOver("Daneben steht jetzt ein Pfeil: Er nimmt die Startansicht wieder zurück.");
  await R.moveTo({ text: "↺", exact: true }, 0.5);
  await R.hold(0.8);

  // ---------------------------------------------------------------- 3D check
  await chapter("Etagen in 3D prüfen");
  await sayOver("Jetzt prüfen wir alles in der 3D-Ansicht: oben auf „3D“ und „Alle Etagen“.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(1200);
  await R.clickOn({ text: "Alle Etagen", exact: true }, 0.6);
  await R.sleep(1200);
  await sayOver("Mit „Auseinander“ schweben die Etagen getrennt: oben Dachgeschoss und Obergeschoss, dann das Erdgeschoss – und ganz unten der Keller.");
  await R.clickOn({ text: "Auseinander", exact: true }, 0.6);
  await R.hideCursor();
  {
    const A = { theta: 0.8, phi: 1.15, radius: 30 };
    const B = { theta: 1.5, phi: 1.3, radius: 28 };
    await R.view(A);
    await R.glide(A, B, 4.5);
  }
  await R.hideCursor(false);
  await sayOver("„Gestapelt“ setzt sie aufeinander. Von der Seite siehst du: Der Keller steckt unter der Erde, unter dem Erdgeschoss – und ist etwas kürzer als das Haus.");
  await R.clickOn({ text: "Gestapelt", exact: true }, 0.6);
  await R.hideCursor();
  {
    const A = { theta: 1.5, phi: 1.35, radius: 26 };
    const B = { theta: 1.65, phi: 1.45, radius: 24 };
    await R.view(A);
    await R.glide(A, B, 3.5);
  }
  await R.hideCursor(false);
  await sayOver("Oben in der Leiste oder links bei den Bildern öffnest du eine Etage. Das Obergeschoss kommt jetzt von hinten – das ist die Startansicht.");
  await R.clickOn({ text: "Obergeschoss", exact: true, nth: 0 }, 0.6);
  await R.sleep(1500);
  await R.hold(1.4);
  await sayOver("Unten wählst du, was mit den Etagen darunter passiert: „Abgedunkelt“, „Gestapelt“ oder „Einzeln“.");
  await R.clickOn({ text: "Gestapelt", exact: true }, 0.6);
  await R.hold(1.2);
  await R.clickOn({ text: "Einzeln", exact: true }, 0.6);
  await R.hold(1.0);
  await R.clickOn({ text: "Abgedunkelt", exact: true }, 0.6);
  await sayOver("Und der Keller: vier Räume, alle mit ihrem Bereich verknüpft.");
  await R.clickOn({ text: "Keller", exact: true, nth: 0 }, 0.6);
  await R.sleep(1500);
  await R.hold(1.0);

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Teil 2: Treppen und Bodenöffnungen", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das waren die Etagen: anlegen, Höhe, Raumhöhe, Keller, verschieben, drehen und die Startansicht. Im zweiten Teil verbinden wir sie mit Treppen.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. NeonPlan läuft übrigens auch auf alten Wandtablets. Bis gleich in Teil zwei!");
  await R.hold(0.6);
} else {
  // ================================================================ PART 2: Treppen und Bodenöffnungen
  await teaser(
    "Treppen und Bodenöffnungen",
    "Eine Treppe vom Erdgeschoss nach oben, eine Wendeltreppe in den Keller, eine Raumspartreppe unters Dach.",
    "Und jede Treppe schneidet ihr Loch in die Decke. Das bauen wir jetzt Schritt für Schritt.",
  );

  // ---------------------------------------------------------------- intro
  await chapter("Was wir heute machen");
  await R.open("empty");
  await editorOpen();
  await loadState(partAEnd(), "eg");
  await R.hideCursor(false);
  await sayOver("Wir machen da weiter, wo Teil eins aufgehört hat: vier Etagen vom Keller bis zum Dach.");
  await R.moveTo({ text: "Dachgeschoss", exact: true, nth: 0 }, 0.6);
  await sayOver("Die einfache Treppe ist kostenlos dabei. Weitere Treppenformen zeige ich dir am Ende aus dem Pack „Treppen & Geländer“.");
  await R.move(800, 560, 0.6);

  // ---------------------------------------------------------------- the free stair
  await chapter("Treppe vom Erdgeschoss nach oben");
  await sayOver("Eine Treppe ist ein Möbel – und sie gehört immer zur unteren Etage. Wir sind im Erdgeschoss. Erst tippe ich den Flur an,");
  await tapPlan(2, 5.5, 0.6);
  await sayOver("dann oben „Möbel“: Neue Möbel landen in der Mitte des Raums. Im Suchfeld tippe ich „Treppe“.");
  await R.clickOn({ text: "Möbel", exact: true }, 0.5);
  await R.clickOn("input.fp3d-search", 0.5);
  await R.type("Treppe", 0.07);
  await R.hold(0.6);
  await sayOver("Unter „Arbeiten & Sonstiges“ steht die „Treppe“. Ein Klick – und sie steht im Flur.");
  await R.clickOn({ text: "Treppe", exact: true }, 0.6);
  await sayOver("Ihre Höhe ist schon richtig: 2,75 Meter, genau bis zum Obergeschoss. Das rechnet NeonPlan beim Einsetzen aus.");
  await R.moveTo({ label: "Höhe (m)" }, 0.5);
  await R.hold(1);
  await sayOver("Die Richtung zeigt der Pfeil im Plan: Die Treppe steigt von der markierten Vorderkante nach hinten an.");
  await pointPlan(2, 6.6, 0.6);
  await R.hold(1.2);
  await sayOver("Sie soll an der Außenwand nach rechts hochgehen. Also „↻ 90°“ – oder eine Zahl bei „Drehung“.");
  await R.clickOn({ text: "↻ 90°", exact: true }, 0.6);
  await R.moveTo({ label: "Drehung" }, 0.5);
  await sayOver("Jetzt ziehe ich sie an die Wand. Genau geht es mit „X“ und „Y“: 2 und 6,85.");
  await dragPlan(2, 6, 2, 6.8, 1);
  await fill("X (m)", "2");
  await fill("Y (m)", "6,85");
  await sayOver("„Breite“ und „Tiefe“ passen: ein Meter breit, 3,20 lang. Der Text darunter erinnert an die Richtung.");
  await R.moveTo({ label: "Breite" }, 0.5);
  await R.hold(0.4);
  await R.moveTo({ label: "Tiefe" }, 0.5);
  await R.hold(0.4);
  await moveToText("Die Treppe steigt nach hinten", 0.5).catch(() => R.move(1700, 800, 0.5));

  // ---------------------------------------------------------------- the opening it cuts
  await chapter("Die Öffnung in der Decke");
  await sayOver("Reicht eine Treppe bis zur Etage darüber, schneidet sie dort von selbst die Öffnung in den Boden. Schauen wir nach: „3D daneben“.");
  await R.clickOn({ text: "3D daneben", exact: true }, 0.6);
  await R.sleep(1500);
  await setPane("eg", 2, 6.4, { theta: 0.45, phi: 0.8, radius: 14 });
  await sayOver("Die 3D-Hälfte zeigt immer die Etage, die du gerade bearbeitest: Im Erdgeschoss steht die Treppe an der Wand. Jetzt oben das Obergeschoss –");
  await R.hold(1.2);
  await toFloor();
  await chip("Obergeschoss");
  await R.sleep(1500);
  await setPane("og", 3.5, 6, { theta: 0.4, phi: 0.65, radius: 14 });
  await sayOver("und im Flur oben ist das Loch im Boden, genau über der Treppe.");
  await pointPlan(2, 6.85, 0.6);
  await R.hold(1.2);
  await sayOver("Wichtig: Die Öffnung muss oben ganz in einem Raum liegen. Ragt sie über eine Raumgrenze, wird nichts ausgeschnitten.");
  await R.hold(0.6);

  // ---------------------------------------------------------------- floor openings
  await chapter("Bodenöffnungen");
  await sayOver("Für alles andere gibt es oben das Werkzeug „Bodenöffnung“: für eine Galerie, einen Luftraum oder ein breiteres Treppenloch.");
  await R.clickOn({ text: "Bodenöffnung", exact: true }, 0.6);
  await sayOver("Unten im Plan steht der Hinweis. Sie gehört zu der Etage, deren Boden sie öffnet – also hier zum Obergeschoss.");
  await R.move(300, 1062, 0.5);
  await R.hold(0.8);
  await sayOver("Ich mache das Treppenloch breiter, wie eine kleine Galerie – und ziehe sie absichtlich zu groß auf, bis ins Kinderzimmer.");
  await dragPlan(0.4, 4.0, 3.6, 6.4, 1.2);
  await sayOver("Im Formular steht dann ein Hinweis: Die Öffnung ragt über eine Raumgrenze und wird nicht ausgeschnitten.");
  await moveToText("Diese Öffnung ragt über eine Raumgrenze", 0.6);
  await R.hold(1.4);
  await sayOver("Also kleiner: „Tiefe“ 0,5 und „Y“ 6,2. Jetzt liegt sie ganz im Flur, und die Meldung ist weg.");
  await fill("Tiefe (m)", "0,5");
  await fill("Y (m)", "6,2");
  await R.hold(0.6);
  await sayOver("Sie überlappt das Treppenloch – das ist erlaubt. Überlappende Öffnungen werden eine, so baust du auch eine L-Form.");
  await pointPlan(2, 6.3, 0.6);
  await R.hold(1.2);
  await sayOver("Größe und Lage änderst du im Formular oder an den Ecken; „Löschen“ entfernt sie wieder.");
  await R.moveTo({ label: "Breite" }, 0.5);
  await R.hold(0.6);

  // ---------------------------------------------------------------- 3D beside in detail
  await chapter("3D daneben im Detail");
  await sayOver("Kurz zur 3D-Hälfte: Oben schaltest du zwischen „Wände hoch“ und „Schnitt“.");
  await R.clickOn({ text: "Wände hoch", exact: true }, 0.6);
  await R.hold(1);
  await R.clickOn({ text: "Schnitt", exact: true }, 0.5);
  await sayOver("Möbel kannst du auch in 3D antippen und ziehen. Unten erscheint dann eine Leiste: Breite, Tiefe, Höhe, Drehen in 45-Grad-Schritten, Fixieren und Löschen.");
  await toFloor();
  await chip("Erdgeschoss");
  await R.sleep(1800);
  await setPane("eg", 2, 6.85, { theta: 0.6, phi: 0.8, radius: 14 });
  await R.sleep(400);
  {
    const id = await R.editor(`return e.floor.furniture.find((f) => f.type === "stairs").id;`);
    const p = await panePoint("eg", 1.2, 0.8, 6.85);
    await R.move(p.x, p.y, 0.6);
    await R.click();
    await R.sleep(600);
    // a tap in 3D that missed the stair: select it the way the tap would (same picture)
    if (!(await R.editor(`return e._furnitureId === ${JSON.stringify(id)};`))) {
      console.log("3D tap missed the stair");
      await R.editor(`e.selectFrom3d("furniture", ${JSON.stringify(id)});`);
    }
    await R.frame(1 / 25, 300);
    await R.clickOn({ text: "↻ 45°", exact: true }, 0.5);
    await R.hold(0.6);
    await R.clickOn({ text: "↺ 45°", exact: true }, 0.5);
  }
  await sayOver("Die Seitenleiste ist „Angeheftet“. Ein Klick darauf, und sie klappt neben der 3D-Ansicht ein – dann ist mehr Platz.");
  await R.clickOn({ text: "Angeheftet" }, 0.6);
  await R.hold(1.2);
  await sayOver("Am rechten Rand holen kleine Knöpfe sie zurück: Menü, Details, Möbel, Türen. Mit der Stecknadel bleibt sie wieder offen.");
  await R.clickOn({ text: "☰", exact: true }, 0.6);
  await R.hold(0.6);
  await R.clickOn({ text: "Anheften" }, 0.6);

  // ---------------------------------------------------------------- stair pack: L, U, spiral, space saver
  await chapter("Treppenformen aus dem Pack");
  await sayOver("Mehr Treppenformen bringt die Erweiterung „Treppen & Geländer“: gerade, freitragend, L, U, Wendel, Raumspar- und Außentreppe, Podest und Geländer.");
  await R.clickOn({ text: "Möbel", exact: true }, 0.5);
  await R.clickOn("input.fp3d-search", 0.5);
  await typeOver("Treppen");
  await R.hold(1);
  await sayOver("Zum Anschauen stelle ich eine L-Treppe ins Wohnzimmer. Wohin sie abbiegt, drehst du mit „Drehung“ – und „Spiegeln“ lässt sie zur anderen Seite abbiegen.");
  await tapPlan(3, 2.2, 0.6);
  await R.clickOn({ text: "L-Treppe" }, 0.6);
  await R.hold(1.2);
  await R.clickOn({ text: "Spiegeln" }, 0.6);
  await R.hold(1.2);
  await sayOver("Mit „Möbelstück“ tauschst du die Art, ohne neu zu setzen – hier gegen die U-Treppe. Ich lösche sie wieder.");
  await R.pickOption("Möbelstück", "U-Treppe (halbgewendelt)", 0.6);
  await R.hold(1.2);
  await R.clickOn({ text: "Löschen", exact: true }, 0.5);

  await chapter("Wendeltreppe in den Keller");
  await sayOver("Jetzt die Wendeltreppe. Sie steht im Keller und führt hinauf ins Erdgeschoss: Keller wählen, Vorratsraum antippen,");
  await toFloor();
  await chip("Keller");
  await tapPlan(2, 6, 0.6);
  await sayOver("„Möbel“, „Wendeltreppe“ – und mit „X“ 3,1 und „Y“ 5,35 in die Ecke unter dem Flur.");
  await R.clickOn({ text: "Möbel", exact: true }, 0.5);
  await R.clickOn({ text: "Wendeltreppe" }, 0.6);
  await fill("X (m)", "3,1");
  await fill("Y (m)", "5,35");
  await sayOver("Achtung, häufiger Fehler: Treppen aus dem Pack haben eine feste Höhe, hier 3,80. Vom Keller bis zum Erdgeschoss sind es aber 2,45.");
  await R.moveTo({ label: "Höhe (m)" }, 0.5);
  await R.hold(1);
  await fill("Höhe (m)", "2,45");
  await sayOver("Jetzt endet sie genau am Boden des Erdgeschosses – und schneidet dort die Öffnung im Flur.");
  await toFloor();
  await chip("Erdgeschoss");
  await R.sleep(1500);
  await setPane("eg", 3.1, 5.6, { theta: 0.3, phi: 0.5, radius: 12 });
  await pointPlan(3.1, 5.35, 0.6);
  await R.hold(1.4);

  await chapter("Raumspartreppe unters Dach");
  await sayOver("Zum Schluss der Dachboden: Obergeschoss, Flur oben antippen, „Raumspartreppe“.");
  await toFloor();
  await chip("Obergeschoss");
  await tapPlan(7.5, 6, 0.6);
  await R.clickOn({ text: "Möbel", exact: true }, 0.5);
  await R.clickOn({ text: "Raumspartreppe" }, 0.6);
  await sayOver("Drehen mit „↻ 90°“, „X“ 7,6 – und die Höhe auf 2,75, genau bis zum Dachgeschoss.");
  await R.clickOn({ text: "↻ 90°", exact: true }, 0.5);
  await fill("X (m)", "7,6");
  await fill("Höhe (m)", "2,75");
  await sayOver("Im Dachgeschoss ist die Öffnung jetzt da.");
  await toFloor();
  await chip("Dachgeschoss");
  await R.sleep(1500);
  await setPane("dg", 7.6, 6, { theta: 0.3, phi: 0.65, radius: 9 });
  await pointPlan(7.6, 6, 0.6);
  await R.hold(1.2);

  // ---------------------------------------------------------------- 3D check
  await chapter("Alles in 3D prüfen");
  await sayOver("Und jetzt das ganze Haus: oben „3D“, „Alle Etagen“, „Auseinander“.");
  await R.clickOn({ text: "3D", exact: true, nth: 0 }, 0.6);
  await R.sleep(1200);
  await R.clickOn({ text: "Alle Etagen", exact: true }, 0.6);
  await R.clickOn({ text: "Auseinander", exact: true }, 0.6);
  await R.hideCursor();
  {
    const A = { theta: 0.8, phi: 0.95, radius: 30 };
    const B = { theta: 1.6, phi: 0.8, radius: 27 };
    await R.view(A);
    await sayOver("Die Wendeltreppe im Keller, die Treppe im Erdgeschoss, die Raumspartreppe im Obergeschoss – und darüber jeweils das Loch im Boden.");
    await R.glide(A, B, 6);
  }
  await R.hideCursor(false);
  await sayOver("Ich öffne das Obergeschoss und stelle unten „Gestapelt“ ein. Von oben sehe ich durch die Öffnung auf die Treppe im Erdgeschoss.");
  await R.clickOn({ text: "Obergeschoss", exact: true, nth: 0 }, 0.6);
  await R.sleep(1500);
  await R.clickOn({ text: "Gestapelt", exact: true }, 0.6);
  await R.sleep(800);
  await R.hideCursor();
  for (let i = 0; i <= 50; i++) {
    const k = i / 50;
    const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    await setPane("og", 2.2, 6.6, { theta: 0.6 - 0.4 * e, phi: 0.8 - 0.35 * e, radius: 15 - 5 * e }, true);
    await R.frame(1 / 25, 40);
  }
  await R.hideCursor(false);
  await sayOver("Und im Keller steht die Wendeltreppe unter dem Flur.");
  await R.clickOn({ text: "Keller", exact: true, nth: 0 }, 0.6);
  await R.sleep(1500);
  await R.hold(1.2);

  // ---------------------------------------------------------------- outro
  await chapter("Wie geht es weiter");
  await R.title("Nächste Folge: Möbel", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
  await say("Das waren Treppen und Bodenöffnungen. In der nächsten Folge richten wir das Haus mit Möbeln ein – alles mit den kostenlosen Möbeln.");
  await say("Links zur Online-Demo und zur Anleitung stehen in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis zum nächsten Mal!");
  await R.hold(0.6);
}

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
