// temporary probe (deleted after use)
import { startRecorder } from "./recorder.mjs";
import { helpers } from "./ep02-common.mjs";
const out = process.argv[2];
const R = await startRecorder({ outDir: out + "/rec", width: 1920, height: 1080, lang: "de" });
R.page.on("dialog", (d) => { console.log("DIALOG", d.message()); void d.accept(); });
const shot = (n) => R.page.screenshot({ path: `${out}/${n}.png` });
const rectRoom = (id, name, area_id, x0, z0, x1, z1, floor_material = "wood") => ({ id, name, area_id, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material });
const floorOf = (id, name, elevation, ha_floor, rooms, openings = [], extra = {}) => ({ id, name, elevation, height: 2.5, cut_height: 1.15, rooms, openings, furniture: [], placements: [], background: null, outdoor: [], walls: [], ha_floor, ...extra });
const eg = floorOf("eg", "Erdgeschoss", 0, "erdgeschoss", [
  rectRoom("r_wohnen", "Wohnzimmer", "wohnzimmer", 0, 0, 6, 4.5),
  rectRoom("r_kueche", "Küche", "kueche", 6, 0, 9.5, 4.5, "tiles"),
  rectRoom("r_flur", "Flur", "flur", 0, 4.5, 4, 7.5, "tiles"),
  rectRoom("r_bad", "Bad", "bad", 4, 4.5, 6.5, 7.5, "tiles"),
  rectRoom("r_schlafen", "Schlafzimmer", "schlafzimmer", 6.5, 4.5, 9.5, 7.5, "carpet"),
  rectRoom("r_garage", "Garage", "garage", 9.5, 0, 13, 5.5, "concrete"),
]);
const labels = (minX = 1300) => R.page.evaluate((minX) => {
  const walk = function* (root) { for (const el of root.querySelectorAll("*")) { yield el; if (el.shadowRoot) yield* walk(el.shadowRoot); } };
  const res = [];
  for (const el of walk(document)) if (/^(LABEL|BUTTON|H3|SUMMARY|P)$/.test(el.tagName)) { const r = el.getBoundingClientRect(); if (r.width > 0 && r.left > minX) res.push(`${el.tagName} ${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)} ${el.textContent.replace(/\s+/g, " ").trim().slice(0, 60)}`); }
  return res.join("\n");
}, minX);
const click = async (t) => { const b = await R.locate(t); await R.page.mouse.click(b.x, b.y); await R.sleep(500); };
const tapPlan = async (x, z) => { const p = await R.planPoint(x, z); await R.page.mouse.click(p.x, p.y); await R.sleep(400); };
await R.open("empty");
await R.page.evaluate(async () => { const p = window.fp3dPanel; const h = p.hass; const orig = h.callWS; h.callWS = async (m) => (m.type === "neonplan3d/packs/list" ? { packs: [] } : orig(m)); await p.data.reloadPacks(); });
await click({ text: "Editor", exact: true });
await R.editor(`const d = structuredClone(e._doc); d.floors = ${JSON.stringify([eg])}; e.setDoc(d, null); e.past = []; e._floorId = "eg"; e._roomId = null; e.fit();`);
await R.sleep(900);
await shot("01-plan");
console.log("view", JSON.stringify(await R.editor("return e._view")));
await tapPlan(3, 2);
await click({ text: "Möbel", exact: true });
await shot("02-library");
console.log("=== library\n" + await labels());
await click({ text: "Sofa", exact: true });
await shot("03-sofa");
console.log("=== sofa form\n" + await labels());
// rotate handle
console.log("rot", JSON.stringify(await R.editor(`const el = e.renderRoot.querySelector("[data-rotate] .fp3d-hit"); const r = el.getBoundingClientRect(); return {x: r.left + r.width/2, y: r.top + r.height/2}`)));
// context menu
const p = await R.planPoint(3, 2.25);
await R.page.mouse.click(p.x, p.y, { button: "right" });
await R.sleep(400);
await shot("04-ctx");
console.log("=== ctx\n" + await labels(0));
await R.page.keyboard.press("Escape");
await R.sleep(300);
// 3D beside
await click({ text: "3D daneben", exact: true });
await R.sleep(2500);
await click({ text: "Alles zeigen", exact: true });
await shot("05-3d");
console.log("view3d", JSON.stringify(await R.editor("return e._view")));
await tapPlan(3, 2.25);
await shot("06-3d-sel");
console.log("=== 3d bar\n" + await labels(0));
// room form, Einrichten
await click({ text: "Auswählen", exact: true });
await tapPlan(8, 6);
await shot("07-room");
const h = helpers(R);
await h.scrollSide({ text: "Einrichten …" }, 500);
await shot("07b-room-bottom");
await click({ text: "Einrichten …" });
await shot("08-pkg");
console.log("=== pkg\n" + await labels());
await click({ text: "Doppelbett mit zwei" });
await shot("09-pkg-done");
console.log("furn", JSON.stringify(await R.editor("return e.floor.furniture.map(f=>[f.type,f.x,f.z,f.rotation,f.entity])")));
// tv board / parking / robot / bed forms
await click({ text: "Möbel", exact: true });
await tapPlan(3, 2);
await click({ text: "TV-Board", exact: true });
await shot("10-tv");
console.log("=== tv\n" + await labels());
await tapPlan(11, 2.5);
await click({ text: "Stellplatz", exact: true });
await shot("11-parking");
console.log("=== parking\n" + await labels());
await tapPlan(3, 2);
await click({ text: "Saugroboter", exact: true });
await shot("12-robot");
console.log("=== robot\n" + await labels());
await R.finish();
