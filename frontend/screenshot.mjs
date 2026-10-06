// Serves the repository and takes screenshots of the preview page with a local Chrome/Edge.
// Usage (from frontend/): node screenshot.mjs [out-dir]

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.argv[2] ?? join(root, "preview", "screenshots"));
mkdirSync(outDir, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });

// puts the furniture of the local starter pack (private/packs) into the living room and kitchen
const PACK_SCRIPT = `
  const f = e._doc.floors[0];
  const put = (item, x, z, rotation = 0) => { e._floorId = f.id; e.addFurniture('pack:mastershort.starter:' + item); const m = e._doc.floors[0].furniture.at(-1); Object.assign(m, { x, z, rotation }); };
  e._doc.floors[0].furniture = e._doc.floors[0].furniture.filter((m) => !['sofa', 'armchair', 'rug', 'coffee_table', 'table', 'chair'].includes(m.type));
  put('lounge_chair', 1.2, 2.4, 90);
  put('fireplace', 0.45, 3.8, 90);
  put('scandi_sideboard', 3.4, 4.3, 180);
  put('gaming_desk', 4.6, 1.2, 0);
  put('dining_set', 8.0, 3.0, 0);
  put('side_by_side_fridge', 9.4, 0.5, 0);
  e.setDoc(structuredClone(e._doc));
`;

// a farmhouse like a user's: a two-storey house, a long barn whose front slope sweeps down lower
// (catslide), and a lean-to with a pent roof in front of the barn; roof sections at their own heights
const ATTIC_SCRIPT = "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ base: 3.7, eave_a: 3.7, eave_b: 3.7, pitch_a: 40, pitch_b: 40 }); }, 600);";
const DORMER_SCRIPT = ATTIC_SCRIPT + " setTimeout(() => { e.addDormer('b'); e.addDormer('a'); }, 900);";
const CROSS_SCRIPT = ATTIC_SCRIPT + " setTimeout(() => { e.addDormer('a'); const d = e._doc.settings.roof.sections.find((s) => s.dormer); e._roofId = d.id; const cx = (d.x0 + d.x1) / 2; const cz = (d.z0 + d.z1) / 2; const deep = Math.abs(d.z1 - d.z0) > Math.abs(d.x1 - d.x0); const patch = deep ? { x0: cx - 1.7, x1: cx + 1.7 } : { z0: cz - 1.7, z1: cz + 1.7 }; e.updateRoofSection({ ...patch, eave_a: 3.7, eave_b: 3.7, base: 3.7 }); }, 900);";
const FARM_SCRIPT = `
  const b = structuredClone(e._doc);
  const eg = b.floors[0];
  const og = b.floors[1];
  const R = (id, name, x0, z0, x1, z1, mat) => ({ id, name, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: mat ?? "wood" });
  for (const f of [eg, og]) Object.assign(f, { openings: [], furniture: [], placements: [], outdoor: [], walls: [], background: null });
  eg.height = 2.6;
  eg.rooms = [R("wohnen", "Wohnen", 0, 0, 6, 9), R("kueche", "Küche", 6, 0, 10, 9, "tiles"), R("scheune", "Scheune", -16, 0, 0, 11, "concrete"), R("schuppen", "Schuppen", -16, -3, -6, 0, "concrete")];
  eg.outdoor = [{ id: "hof", type: "driveway", points: [[-20, -8], [14, -8], [14, -3.3], [-20, -3.3]] }, { id: "rasen", type: "lawn", points: [[-20, -3.3], [14, -3.3], [14, 16], [-20, 16]] }];
  og.elevation = 2.75;
  og.height = 2.5;
  og.rooms = [R("schlafen", "Schlafen", 0, 0, 5, 9), R("kind", "Kind", 5, 0, 10, 9)];
  b.settings.roof = { type: "custom", pitch: 42, overhang: 0.4, sections: [
    { id: "haus", x0: -0.25, z0: -0.25, x1: 10.25, z1: 9.25, shape: "gable", axis: "x", eave_a: 5.25, eave_b: 5.25, pitch_a: 45, pitch_b: 45, base: 5.25, overhang: null },
    { id: "scheune", x0: -16.25, z0: -0.25, x1: -0.25, z1: 11.25, shape: "gable", axis: "x", eave_a: 2.3, eave_b: 3.0, pitch_a: 40, pitch_b: 40, base: 2.6, overhang: null },
    { id: "schuppen", x0: -16.25, z0: -3.25, x1: -6, z1: -0.25, shape: "pent", axis: "x", eave_a: 2.0, eave_b: 2.0, pitch_a: 6, pitch_b: 6, base: 2.4, overhang: null },
  ] };
  e.setDoc(b);
`;

// kitchen with pack furniture on the island, pendant lights from a pack and a wallbox (local packs)
const PACK_MOUNT_SCRIPT = `
  const f = e._doc.floors[0];
  e._floorId = f.id;
  const put = (type, x, z, rotation = 0, entity = null) => { e.addFurniture(type); Object.assign(e._doc.floors[0].furniture.at(-1), { x, z, rotation, entity }); };
  put('pack:mastershort.kitchen:island_bar', 8.0, 3.0, 0);
  put('pack:mastershort.kitchen:coffee_machine', 7.6, 3.1, 0);
  put('pack:mastershort.kitchen:microwave', 8.6, 2.9, 0);
  put('pack:mastershort.kitchen:pendant_trio', 8.0, 3.0, 0, 'light.kueche_links');
  put('pack:mastershort.smarthome:wallbox', 9.9, 2.0, 270);
  put('pack:mastershort.living:arc_lamp', 1.5, 3.0, 90, 'light.stehlampe');
  e.setDoc(structuredClone(e._doc));
`;

const shots = [
  { name: "view-house", query: "?fp3d_stats", width: 1280, height: 800 },
  { name: "promo-house", query: "", width: 1280, height: 800 },
  { name: "view-stacked", query: "", width: 1280, height: 800, click: "Gestapelt" },
  { name: "view-floor-og", query: "", width: 1280, height: 800, click: "Obergeschoss" },
  { name: "view-floor-eg", query: "?fp3d_stats", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-room", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche" },
  { name: "view-garage", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "view-hall", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Flur" },
  { name: "view-tablet-level", query: "?fp3d_stats", width: 1280, height: 800, click: "Tablet", then: "Erdgeschoss" },
  { name: "view-tap-lamp", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche", tapAt: [688, 395] },
  { name: "view-high", query: "", width: 1280, height: 800, click: "Hoch", then: "Bad" },
  { name: "view-garden", query: "", width: 1280, height: 800, click: "Gestapelt" },
  { name: "view-sun", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schlafzimmer" },
  { name: "view-heat", query: "", width: 1280, height: 800, click: "Temp.", then: "Erdgeschoss" },
  { name: "view-blueprint", query: "", width: 1280, height: 800, click: "Blueprint", then: "Erdgeschoss" },
  { name: "view-day", query: "", width: 1280, height: 800, click: "Tag", then: "Erdgeschoss" },
  { name: "view-day-house", query: "", width: 1280, height: 800, click: "Tag" },
  { name: "view-cut", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schnitt" },
  { name: "view-room-panel", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "tablet-room", query: "", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "editor", query: "", width: 1280, height: 800, editor: true },
  { name: "editor-room", query: "", width: 1280, height: 800, editor: true, select: "Wohnzimmer" },
  { name: "editor-devices", query: "", width: 1280, height: 800, editor: true, select: "Küche", scrollSide: true },
  { name: "editor-opening", query: "", width: 1280, height: 800, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" } },
  { name: "editor-camera-wedge", query: "", width: 1280, height: 800, editor: true, editorState: { _floorId: "eg", _deviceId: "camera.wohnzimmer", _roomId: "wohnen", _tool: "select" } },
  { name: "editor-picture-rules", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((m) => m.pictures); e._roomId = 'wohnen'; e._furnitureId = f.id; e.renderRoot.querySelector('aside').scrollTop = 900;" },
  { name: "editor-library", query: "", width: 1280, height: 900, editor: true, editorScript: "e._roomId = 'wohnen'; e._furnQuery = 'sofa';" },
  { name: "editor-split-3d", query: "", width: 1400, height: 900, editor: true, editorScript: "e._split = true; e._furnitureId = 'm2';" },
  { name: "editor-free-wall", query: "", width: 1280, height: 800, editor: true, editorState: { _floorId: "og", _tool: "select" } },
  { name: "editor-room-wall-heights", query: "", width: 1280, height: 1000, editor: true, editorState: { _floorId: "og", _tool: "select", _roomId: "kind", _edgeHi: 1 }, scrollSide: true },
  { name: "view-free-wall", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Gästezimmer" },
  { name: "editor-free-wall-door", query: "", width: 1280, height: 800, editor: true, editorScript: "const o = e._doc.floors[0].openings.find((x) => x.wall); e._floorId = e._doc.floors[0].id; e._tool = 'select'; e._openingId = o.id;" },
  { name: "view-free-wall-door", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "editor-garage-devices", query: "", width: 1280, height: 1000, editor: true, editorState: { _roomId: "garage" }, scrollSide: true },
  { name: "view-marker-show", query: "", width: 1280, height: 800, editor: true, editorScript: "const p = e._doc.floors[0].placements; p.find((x) => x.entity_id === 'media_player.fernseher').marker = 'no_power'; p.find((x) => x.entity_id === 'climate.wohnzimmer').marker = 'never'; e.setDoc(structuredClone(e._doc));", then3d: "Wohnzimmer" },
  { name: "editor-marker-show", query: "", width: 1280, height: 900, editor: true, editorState: { _deviceId: "media_player.fernseher", _roomId: "wohnen" } },
  { name: "view-mark-closed", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.floors[0].openings.filter((o) => o.type === 'door').forEach((o) => (o.mark = 'closed')); e.setDoc(structuredClone(e._doc));", then3d: "Flur" },
  { name: "view-mark-default", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Flur" },
  { name: "editor-fix-menu", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((m) => m.id === 'm2'); f.locked = true; e._doc.settings.lock_plan = true; e.setDoc(structuredClone(e._doc)); e._roomId = 'wohnen'; e._furnitureId = 'm2'; const [x, y] = e.toScreen([f.x + 0.6, f.z]); e._ctx = { x, y, kind: 'furniture', id: 'm2' };" },
  { name: "editor-plan-locked", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.settings.lock_plan = true; e._doc.floors[0].placements.find((p) => p.entity_id === 'climate.wohnzimmer').locked = true; e.setDoc(structuredClone(e._doc)); e._roomId = 'garage'; const [x, y] = e.toScreen([11, 3]); e._ctx = { x, y, kind: 'room', id: 'garage' };" },
  { name: "view-dryer-on-washer", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0]; const w = f.furniture.find((m) => m.type === 'washer'); f.furniture.push({ ...structuredClone(w), id: 'dryer_demo', type: 'dryer', entity: null, power: null, mount_y: w.h }); e.setDoc(structuredClone(e._doc));", then3d: "Bad" },
  { name: "editor-device-extras", query: "", width: 1280, height: 1500, editor: true, editorScript: "e._roomId = 'garage'; e._devSource = 'other'; e._deviceQuery = 'licht'; const r = e._doc.floors[0].rooms.find((x) => x.id === 'garage'); r.climate = { temperature: null, humidity: 'none', co2: null }; e.setDoc(structuredClone(e._doc));", scrollSide: true },
  { name: "view-wall-cabinet-low", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0]; const k = f.furniture.find((m) => m.type === 'kitchen_wall'); if (k) { f.furniture.push({ ...structuredClone(k), id: 'kw_low', x: k.x + k.w + 0.1, mount_y: 1.0 }); } e.setDoc(structuredClone(e._doc));", then3d: "Küche" },
  { name: "editor-roof-tool", query: "", width: 1500, height: 900, wait: 0, editor: true, editorScript: FARM_SCRIPT + "e._floorId = e._doc.floors[0].id; setTimeout(() => { e._tool = 'roof'; e._roofId = 'scheune'; e.updateRoofSection({ locked: true }); }, 1500); setTimeout(() => e.fit(), 2600);", afterWait: 3500 },
  { name: "editor-solar", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._solarId = 'pv_sued'; setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-solar-pattern", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._solarId = 'pv_sued'; e.updateSolar({ layout: [4, 4, 3], rows: 3, cols: 4, align: 'center', skip: ['0:1'], name: 'Strang 1 Süd' }); e._solarPick = true; setTimeout(() => e.fit(), 300);", afterWait: 1800 },
  { name: "editor-solar-string", query: "", width: 1500, height: 1100, editor: true, editorScript: "e._tool = 'energy'; e._solarId = 'pv_sued'; e.setSolarString('new'); setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-solar-garden", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e.addGroundField(); setTimeout(() => e.fit(), 400);", afterWait: 2000 },
  { name: "editor-roof-window", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'roof'; e._roofWinId = 'dachfenster'; setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-solar-wall", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e.addWallField(); setTimeout(() => e.updateSolar({ tilt: 35, rows: 1 }), 300); setTimeout(() => e.fit(), 700);", afterWait: 2200 },
  { name: "editor-energy-devices", query: "", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-energy-add", query: "", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; setTimeout(() => e.addEnergyDevice('wallbox'), 500);", afterWait: 1800 },
  { name: "editor-solar-list", query: "", width: 1280, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._solarId = null; setTimeout(() => e.fit(), 300);" },
  // Energie Pro: the cables from the roof to the inverter, battery, meter, wallbox and grid with their moving dots
  { name: "view-flows", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.6, phi: 1.15, radius: 22 } },
  { name: "view-holo-plants", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.15, radius: 24 } },
  { name: "view-holo-free", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => (d.settings.roof.hologram = { field: null, size: 1, right: 0, up: 0, place: 'free', x: 9, z: -2, height: 3.5 })); e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.2, radius: 24 } },
  { name: "editor-holo-free", query: "", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; e.change((d) => (d.settings.roof.hologram = { field: null, size: 1, right: 0, up: 0, place: 'free', x: 9, z: -2, height: 3.5 })); setTimeout(() => e.fit(), 300);", afterWait: 1500, scrollSide: true },
  { name: "view-flows-garage", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 3.6, phi: 1.2, radius: 16 } },
  { name: "view-house-fr", query: "?lang=fr", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-house-es", query: "?lang=es", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-house-nl", query: "?lang=nl", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-house-it", query: "?lang=it", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-open-plan", query: "", width: 1280, height: 800, editor: true, editorScript: "const r = e._doc.floors[0].rooms.find((x) => x.id === 'kueche'); r.wall_heights = r.points.map(() => 0); e.setDoc(structuredClone(e._doc));", then3d: "Erdgeschoss" },
  { name: "view-start-view-floor", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => (d.settings.start_view = { theta: 2.4, phi: 1.0, radius: 26 }));", then3d: "Erdgeschoss" },
  { name: "view-start-view", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => (d.settings.start_view = { theta: 2.4, phi: 1.0, radius: 26 }));", then3d: "Alle Etagen" },
  { name: "editor-cables", query: "?flows", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; setTimeout(() => { e.layCable('inv:' + e._doc.floors[0].furniture.find((m) => m.type === 'inverter').id); e.fit(); }, 400);", afterWait: 1800, scrollSide: true },
  { name: "view-solar-live", query: "?flows&pv=5400", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 1.1, phi: 0.9, radius: 26 } },
  { name: "view-flows-eg", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", camera: { theta: 0.25, phi: 1.2, radius: 11 } },
  { name: "view-flows-room", query: "?flows", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "view-flows-back", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.1, radius: 18 } },
  { name: "editor-solar-flat", query: "", width: 1500, height: 900, editor: true, editorScript: "e.change((d) => { d.settings.roof.type = 'flat'; d.settings.roof.solar = []; }); setTimeout(() => { e._tool = 'energy'; e.addSolarField(); }, 500); setTimeout(() => e.fit(), 900);", afterWait: 2000 },
  { name: "editor-roof-overview", query: "", width: 1280, height: 900, editor: true, editorScript: FARM_SCRIPT + "e._floorId = e._doc.floors[0].id; e._tool = 'roof'; e._roofId = null; setTimeout(() => e.fit(), 300);" },
  { name: "view-roof-proposal", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT + "setTimeout(() => { e._doc.settings.roof.sections = []; e.useRoofSections(); }, 300);", then3d: "Alle Etagen", then3dAlso: "Gestapelt", camera: { theta: 2.3, phi: 0.95, radius: 52 } },
  { name: "editor-split-wall", query: "", width: 1400, height: 900, editor: true, editorScript: "const r = e._doc.floors[0].rooms.find((x) => x.id === 'wohnen'); r.wall_splits = [[2.2], null, null, null]; r.wall_heights = [[1.1, null], null, null, null]; e.setDoc(structuredClone(e._doc)); e._roomId = 'wohnen'; e._tool = 'select'; setTimeout(() => e.renderRoot.querySelector('aside')?.scrollTo(0, 500), 400);", afterWait: 1200 },
  { name: "view-flat-outline", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.floors = e._doc.floors.filter((f) => f.id === 'eg'); e._doc.settings.roof.sections = []; e.setDoc(structuredClone(e._doc)); e._floorId = 'eg'; setTimeout(() => { e.useRoofSections(); setTimeout(() => { const sec = e._doc.settings.roof.sections[0]; e._tool = 'roof'; e._roofId = sec.id; e.updateRoofSection({ shape: 'flat', eave_a: 2.95, eave_b: 2.95, base: 2.95 }); e.takeRoofOutline(); }, 500); }, 300);", afterWait: 2000, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.8, phi: 1.0, radius: 24 } },
  { name: "editor-flat-outline", query: "", width: 1400, height: 900, editor: true, editorScript: "e._doc.floors = e._doc.floors.filter((f) => f.id === 'eg'); e._doc.settings.roof.sections = []; e.setDoc(structuredClone(e._doc)); e._floorId = 'eg'; setTimeout(() => { e.useRoofSections(); setTimeout(() => { const sec = e._doc.settings.roof.sections[0]; e._tool = 'roof'; e._roofId = sec.id; e.updateRoofSection({ shape: 'flat', eave_a: 2.95, eave_b: 2.95, base: 2.95 }); e.takeRoofOutline(); setTimeout(() => e.fit(), 300); }, 500); }, 300);", afterWait: 2500 },
  { name: "view-roof-halfhip", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'halfhip', pitch_a: 42, pitch_b: 42 }); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-roof-pyramid", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'pyramid', pitch_a: 35, pitch_b: 35 }); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-roof-mansard", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'mansard', pitch_a: 70, pitch_b: 70 }); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-roof-parapet", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'parapet', eave_a: 5.6, eave_b: 5.6 }); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-dormer-flat", query: "", width: 1280, height: 800, editor: true, editorScript: ATTIC_SCRIPT + " setTimeout(() => { e.addDormer('b'); const d = e._doc.settings.roof.sections.find((s) => s.dormer); e._roofId = d.id; const deep = Math.abs(d.z1 - d.z0) > Math.abs(d.x1 - d.x0); const cx = (d.x0 + d.x1) / 2; const cz = (d.z0 + d.z1) / 2; e.updateRoofSection({ shape: 'flat', base: 5.6, ...(deep ? { x0: cx - 1.6, x1: cx + 1.6 } : { z0: cz - 1.6, z1: cz + 1.6 }) }); }, 900);", afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.75, phi: 1.05, radius: 24 } },
  { name: "view-dormer", query: "", width: 1280, height: 800, editor: true, editorScript: DORMER_SCRIPT, afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.75, phi: 1.05, radius: 24 } },
  { name: "view-dormer-floor", query: "", width: 1280, height: 800, editor: true, editorScript: DORMER_SCRIPT, afterWait: 2200, then3d: "Obergeschoss", camera: { theta: 0.5, phi: 1.0, radius: 14 } },
  { name: "editor-dormer", query: "", width: 1400, height: 900, editor: true, editorScript: DORMER_SCRIPT + " setTimeout(() => e.fit(), 1300);", afterWait: 2600 },
  { name: "view-cross-gable", query: "", width: 1280, height: 800, editor: true, editorScript: CROSS_SCRIPT, afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt", "Dach bleibt"], camera: { theta: 3.9, phi: 1.15, radius: 17 } },
  { name: "view-cross-gable-b", query: "", width: 1280, height: 800, editor: true, editorScript: CROSS_SCRIPT, afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt", "Dach bleibt"], camera: { theta: 2.6, phi: 1.2, radius: 15 } },
  { name: "editor-cross-gable", query: "", width: 1400, height: 900, editor: true, editorScript: CROSS_SCRIPT + " setTimeout(() => e.fit(), 1400);", afterWait: 2600 },
  { name: "view-camera-detect", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "view-camera-wall-big", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Kameras", viewScript: "setTimeout(() => (v._wallBig = 'camera.wohnzimmer'), 400);", wait: 1500 },
  { name: "view-camera-wall", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Kameras" },
  { name: "view-attic", query: "", width: 1280, height: 800, editor: true, editorScript: ATTIC_SCRIPT, afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.7, phi: 1.05, radius: 24 } },
  { name: "view-attic-floor", query: "", width: 1280, height: 800, editor: true, editorScript: ATTIC_SCRIPT, afterWait: 1500, then3d: "Obergeschoss", camera: { theta: 0.5, phi: 1.0, radius: 14 } },
  { name: "editor-attic", query: "", width: 1400, height: 900, editor: true, editorScript: ATTIC_SCRIPT + " setTimeout(() => { e._floorId = 'og'; e._tool = 'select'; e._roofId = null; e.fit(); }, 1200);", afterWait: 2500 },
  { name: "promo-roof-day", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT, then3d: "Alle Etagen", then3dAlso: ["Gestapelt", "Tag"], camera: { theta: 2.3, phi: 0.95, radius: 52 } },
  { name: "promo-parapet", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Kinderzimmer" },
  { name: "editor-outdoor-handles", query: "", width: 1280, height: 800, editor: true, editorScript: "const a = e._doc.floors[0].outdoor.find((x) => x.type === 'terrace'); e._tool = 'select'; e._outdoorId = a.id; e._roomId = null;" },
  { name: "view-canopy", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { e._tool = 'roof'; e.addRoofSection([1.5, -2.8], [6.2, -0.24]); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 3.9, phi: 1.1, radius: 24 } },
  { name: "view-canopy-apart", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { e._tool = 'roof'; e.addRoofSection([1.5, -2.8], [6.2, -0.24]); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Auseinander"], camera: { theta: 3.9, phi: 1.1, radius: 26 } },
  { name: "view-canopy-b", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { e._tool = 'roof'; e.addRoofSection([1.5, -2.8], [6.2, -0.24]); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.1, radius: 24 } },
  { name: "view-roof-garage-pent", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const g = e._doc.settings.roof.sections.find((s) => s.x0 > 9.5); e._tool = 'roof'; e._roofId = g.id; e.updateRoofSection({ shape: 'pent', axis: 'z', flip: true, pitch_a: 25, pitch_b: 25, eave_a: 2.6, eave_b: 2.6 }); }, 600);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.6, phi: 1.15, radius: 24 } },
  { name: "view-roof-farmhouse-front", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT, then3d: "Alle Etagen", then3dAlso: "Gestapelt", camera: { theta: 2.3, phi: 0.95, radius: 52 } },
  { name: "view-roof-farmhouse", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT, then3d: "Alle Etagen", then3dAlso: "Gestapelt" },
  { name: "view-tv-plug", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'tv_board'); f.entity = 'switch.kaffeemaschine'; f.pictures = []; e._roomId = 'wohnen'; e._furnitureId = f.id; e.setDoc(structuredClone(e._doc));", then3d: "Wohnzimmer" },
  { name: "editor-tv-plug", query: "", width: 1280, height: 1000, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'tv_board'); f.entity = 'switch.kaffeemaschine'; e._roomId = 'wohnen'; e._furnitureId = f.id; e.setDoc(structuredClone(e._doc));" },
  { name: "view-shared-light", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Bad" },
  { name: "view-lamp-height", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'led_strip'); f.mount_y = 0.1; f.x = 4.9; f.w = 1.6; e.setDoc(structuredClone(e._doc));", then3d: "Wohnzimmer" },
  { name: "view-lamp-height-default", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "view-roof-short", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.settings.roof.ridge = 'short'; e.setDoc(structuredClone(e._doc));", then3d: "Alle Etagen" },
  { name: "editor-roof-ridge", query: "", width: 1280, height: 1200, editor: true, openDetails: true, scrollSide: true },
  { name: "editor-lamp-height", query: "", width: 1280, height: 1000, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'led_strip'); e._roomId = 'wohnen'; e._furnitureId = f.id;", scrollSide: true },
  { name: "editor-hole-tool", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "hole" } },
  { name: "editor-split-idle", query: "", width: 1400, height: 900, editor: true, editorScript: "e._split = true; e._sidePinned = false;" },
  { name: "editor-front-door", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0]; const o = f.openings.find((x) => x.style === 'sidelight'); e._roomId = o.room_id; e._openingId = o.id;" },
  { name: "editor-opening-leaves", query: "", width: 1280, height: 800, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-furniture", query: "", width: 1280, height: 800, editor: true, editorState: { _furnitureId: "m2" } },
  { name: "editor-parking", query: "", width: 1280, height: 900, editor: true, editorScript: "e._furnitureId = e._doc.floors[0].furniture.find((f) => f.type === 'parking').id;" },
  { name: "editor-furniture-tool", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" } },
  { name: "editor-device", query: "", width: 1280, height: 900, editor: true, editorState: { _deviceId: "light.wohnzimmer_decke", _roomId: "wohnen" } },
  { name: "editor-devlist", query: "", width: 1280, height: 1100, editor: true, editorState: { _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-backup", query: "", width: 1280, height: 1600, editor: true, openDetails: true, scrollSide: true },
  { name: "editor-spots", query: "", width: 1280, height: 1000, editor: true, editorState: { _roomId: "wohnen", _spots: { type: "lamp_downlight", rows: 3, cols: 4, entity: "light.wohnzimmer_decke" } } },
  { name: "editor-ha-floors", query: "", width: 1280, height: 900, editor: true, editorScript: "e._doc.floors[0].ha_floor = 'erdgeschoss'; e._doc.floors[1].ha_floor = 'obergeschoss'; e._floorMenu = true;" },
  { name: "editor-area-rooms", query: "", width: 1280, height: 900, editor: true, editorScript: "e._doc.floors[0].ha_floor = 'erdgeschoss'; e._doc.floors[1].ha_floor = 'obergeschoss'; e.addFloor(e.freeHaFloors[0]); e.addAreaRooms(e.floor);" },
  { name: "editor-resize", query: "", width: 1280, height: 800, editor: true, editorState: { _furnitureId: "m2" } },
  { name: "editor-door", query: "", width: 1280, height: 900, editor: true, editorState: { _openingId: "o5", _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-opening-kinds", query: "", width: 1280, height: 900, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" } },
  { name: "view-double-door", query: "", width: 1280, height: 800, click: "Wohnzimmer" },
  { name: "editor-packs", query: "", width: 1280, height: 1000, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" }, scrollSide: true },
  { name: "view-packs", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_SCRIPT, then3d: "Wohnzimmer" },
  { name: "editor-packs-plan", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_SCRIPT },
  { name: "extensions", query: "?shop", width: 1280, height: 1000, click: "✦ Erweiterungen", wait: 800 },
  { name: "tab-new-offers", query: "?shop", width: 1280, height: 300, wait: 1500 },
  { name: "extensions-locked", query: "?nopro", width: 1280, height: 1000, click: "✦ Erweiterungen", wait: 800 },
  { name: "card-editor", query: "?card", width: 1400, height: 900 },
  { name: "card-og-dim", query: "?card&floor=og", width: 1400, height: 900 },
  { name: "card-og-stacked", query: "?card&floor=og&stack=stacked", width: 1400, height: 900 },
  { name: "card-og-single", query: "?card&floor=og&stack=single", width: 1400, height: 900 },
  { name: "view-camera", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.onDeviceTap('camera.wohnzimmer', 420, 380);" },
  { name: "view-camera-model", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "const c = v.viewer.controls; c.view.target.set(0.9, 1.2, 0.9); c.view.radius = 4.5; c.view.theta = 2.2; c.view.phi = 1.0; c.events.change(); v.viewer.invalidate();" },
  { name: "view-camera-through", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.lookThrough('camera.wohnzimmer'); v._blend = 0.55;", wait: 1400 },
  { name: "view-camera-screen", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Arbeitszimmer", viewScript: "v.markerMode = 'none'; const c = v.viewer.controls; c.view.target.set(8.4, 3.75, 0.2); c.view.radius = 2.2; c.view.theta = 0.3; c.view.phi = 1.2; c.events.change(); v.viewer.invalidate();" },
  { name: "view-media-wall", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Arbeitszimmer", viewScript: "v.markerMode = 'none';" },
  { name: "view-find", query: "", width: 1280, height: 800, viewScript: "v._find = 'licht';" },
  { name: "view-find-go", query: "", width: 1280, height: 800, viewScript: "v._find = 'stehlampe'; setTimeout(() => v.renderRoot.querySelector('.fp3d-find-list button').click(), 300);" },
  { name: "view-quickmenu", query: "", width: 1280, height: 800, click: "Wohnzimmer", viewScript: "v.onDeviceHold('light.wohnzimmer_decke', 520, 420);" },
  { name: "view-quickmenu-media", query: "", width: 1280, height: 800, click: "Küche", viewScript: "v.onDeviceHold('media_player.kueche_lautsprecher', 640, 400);" },
  { name: "view-quickmenu-cover", query: "", width: 1280, height: 800, viewScript: "v.onDeviceTap('cover.wohnzimmer', 700, 400);" },
  { name: "view-swipe", query: "", width: 1280, height: 800, viewScript: "v.onDeviceSwipe('light.wohnzimmer_decke', 'start', 0, 600, 420); v.onDeviceSwipe('light.wohnzimmer_decke', 'move', -40, 600, 420);" },
  { name: "editor-preview-sofa", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Sofa" },
  { name: "editor-preview-pendant", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Pendelleuchte" },
  { name: "editor-preview-kitchen", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Küchenzeile" },
  { name: "editor-preview-pack", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Kamin" },
  { name: "view-pack-mounts", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_MOUNT_SCRIPT, then3d: "Küche" },
  { name: "editor-package", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[1]; e._floorId = f.id; e.applyPackage(f.rooms.find((r) => r.id === 'gast'), 'bedroom'); e.applyPackage(f.rooms.find((r) => r.id === 'kind'), 'kids');" },
  { name: "view-package", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[1]; e.applyPackage(f.rooms.find((r) => r.id === 'gast'), 'bedroom');", then3d: "Obergeschoss" },
  // a tap on the camera's wedge (1.2 m in front of it) selects the camera in the furnish bar
  { name: "save-failed", query: "?savefail", width: 1280, height: 800, editor: true, editRoomName: "Wohnen", reload: true },
  { name: "tablet", query: "", width: 800, height: 1280, click: "Obergeschoss" },
  { name: "tablet-portrait-house", query: "", width: 800, height: 1280 },
  { name: "tablet-portrait-room", query: "", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "phone-floor", query: "", width: 420, height: 800, click: "Erdgeschoss" },
  { name: "card-portrait-room", query: "?card&floor=eg", width: 700, height: 1000, click: "Wohnzimmer" },
  { name: "view-alert-banner", query: "?alerts", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-garden-trees", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.35, phi: 1.15, radius: 30, target: { x: 7, y: 0, z: -1 } } },
  { name: "view-outdoor-round", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.6, phi: 1.1, radius: 15, target: { x: 12.5, y: 0, z: -2 } } },
  { name: "editor-outdoor-pergola", query: "", width: 1280, height: 900, editor: true, editorState: { _outdoorId: "a11" }, scrollSide: true },
  { name: "view-central", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "v._central = true;", wait: 1200 },
  { name: "view-central-phone", query: "", width: 430, height: 860, click: "Alle Etagen", viewScript: "v._central = true;", wait: 1200 },
  { name: "view-wall-unit", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors.find((x) => x.id === 'og'); f.furniture.push({ id: 'wu1', type: 'pack:mastershort.living:wall_unit', x: 5.0, z: 4.52, w: 3.0, d: 0.45, h: 2.1, rotation: 0, variant: null, entity: 'light.garten' }, { id: 'wu2', type: 'pack:mastershort.living:wall_unit_tv', x: 8.3, z: 4.52, w: 3.0, d: 0.45, h: 2.1, rotation: 0, variant: null, entity: 'media_player.fernseher' }); }); e.fit();", then3d: "Obergeschoss", camera: { theta: 0.15, phi: 1.2, radius: 7, target: { x: 6.6, y: 3.9, z: 5.2 } } },
  { name: "editor-own-buttons", query: "", width: 1280, height: 1000, editor: true, editorScript: "const d = e.renderRoot.querySelectorAll('details.fp3d-section'); for (const x of d) if (x.textContent.includes('Favoriten')) { x.open = true; x.scrollIntoView(); }", wait: 800 },
  { name: "view-smart-speakers", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors[0]; f.placements = f.placements.filter((p) => p.entity_id !== 'media_player.kueche_lautsprecher'); f.furniture.push({ id: 'ss1', type: 'pack:mastershort.cinema:smart_display_8', x: 7.2, z: 0.45, w: 0.2, d: 0.1, h: 0.14, rotation: 0, variant: null, entity: 'media_player.kueche_lautsprecher' }, { id: 'ss2', type: 'pack:mastershort.cinema:smart_cylinder', x: 1.2, z: 1.0, w: 0.1, d: 0.1, h: 0.15, rotation: 0, variant: null, entity: 'media_player.fernseher' }); }); e.fit();", then3d: "Erdgeschoss", camera: { theta: 0.5, phi: 0.95, radius: 9, target: { x: 4.5, y: 0.8, z: 1.5 } } },
  { name: "view-smart-speakers-zoom", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors[0]; f.placements = f.placements.filter((p) => p.entity_id !== 'media_player.kueche_lautsprecher'); f.furniture.push({ id: 'ss1', type: 'pack:mastershort.cinema:smart_display_8', x: 7.2, z: 0.45, w: 0.2, d: 0.1, h: 0.14, rotation: 0, variant: null, entity: 'media_player.kueche_lautsprecher' }, { id: 'ss2', type: 'pack:mastershort.cinema:smart_cylinder', x: 1.2, z: 1.0, w: 0.1, d: 0.1, h: 0.15, rotation: 0, variant: null, entity: 'media_player.fernseher' }); }); e.fit();", then3d: "Erdgeschoss", camera: { theta: 0.4, phi: 1.15, radius: 1.1, target: { x: 1.2, y: 0.1, z: 1.0 } } },
  { name: "view-glass-wall", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const o = d.floors[0].openings.find((x) => x.type === 'door' && x.style !== 'front' && !x.wall); window.__gw = o.id; Object.assign(o, { type: 'window', style: 'glass_wall', sill: 0, height: 2.4, width: 1.8, leaves: 1 }); }); e.fit();", then3d: "Erdgeschoss", camera: { theta: -1.9, phi: 1.3, radius: 4, target: { x: 6, y: 1.1, z: 3.9 } } },
  { name: "view-auto-helpers", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const p = d.floors[0].furniture.find((m) => m.type === 'parking'); p.entity = 'input_boolean.test_auto_da'; delete p.type_entity; p.x = 16.2; p.z = 2.7; p.rotation = 90; p.car = { soc: 'input_number.test_ladestand', charging: 'input_number.test_ladeleistung', climate: 'input_boolean.test_klima', lock: 'input_boolean.test_verriegelt', device: 'input_boolean.test_auto_da', range: 'input_number.test_reichweite', plugged: null, tracker: null }; });", then3d: "Erdgeschoss", camera: { theta: 0.5, phi: 1.1, radius: 7.5, target: { x: 16.2, y: 0.8, z: 2.7 } } },
  { name: "shop-auto-pro", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const p = d.floors[0].furniture.find((m) => m.type === 'parking'); p.x = 16.3; p.z = 2.7; p.rotation = 90; });", then3d: "Erdgeschoss", camera: { theta: 0.5, phi: 1.1, radius: 8, target: { x: 16, y: 0.8, z: 2.7 } } },
  { name: "view-thumbs-compact", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "v._thumbsCompact = true;", wait: 1200 },
  { name: "view-holo-stack", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors[0]; for (const m of f.furniture) if (['washer', 'dryer', 'dishwasher', 'fridge'].includes(m.type)) m.holo = true; for (const p of f.placements) if (p.entity_id.endsWith('_leistung')) p.holo = true; });", then3d: "Erdgeschoss", camera: { theta: 0.3, phi: 0.95, radius: 9, target: { x: 6.5, y: 0.8, z: 4.5 } } },
  { name: "view-auto", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "view-sound", query: "", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-sound-locked", query: "?nopro", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-heat-values", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Werte" },
  { name: "view-accent", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; p._accent = '#ff8a00';", wait: 1500 },
  { name: "view-bed-state", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", camera: { theta: 3.6, phi: 0.55, radius: 6, target: { x: 2.2, y: 0.5, z: 6.9 } } },
  { name: "view-cut-furniture", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", then3dAlso: ["Schnitt"], camera: { theta: 2.4, phi: 1.1, radius: 8, target: { x: 8.6, y: 0.6, z: 6.2 } } },
  { name: "editor-sidelight", query: "", width: 1280, height: 900, editor: true, editorState: { _openingId: "o14", _roomId: "flur" }, scrollSide: true },
  { name: "view-mirror", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { for (const m of d.floors[0].furniture) if (m.type === 'sofa' || m.type === 'tv_board') m.mirror = true; });", then3d: "Erdgeschoss", camera: { theta: 0.9, phi: 1.15, radius: 6, target: { x: 2.4, y: 0.8, z: 2.2 } } },
  { name: "view-nav-wrap", query: "", width: 760, height: 700, click: "Alle Etagen", viewScript: "v.getRootNode().host._navWrap = true;", wait: 1200 },
  { name: "view-clean-phone", query: "", width: 430, height: 860, click: "Erdgeschoss", viewScript: "v.dispatchEvent(new CustomEvent('clean-toggle', { bubbles: true, composed: true }));", wait: 1200 },
  { name: "view-strip-upright", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", camera: { theta: 1.3, phi: 1.2, radius: 5, target: { x: 1.2, y: 1, z: 1.4 } } },
  { name: "view-pro-locked", query: "?nopro", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.lookThrough('camera.wohnzimmer');" },
  { name: "view-weather-rain", query: "?weather=pouring", width: 1280, height: 800, wait: 1200 },
  { name: "view-weather-snow", query: "?weather=snowy", width: 1280, height: 800, wait: 1200 },
  { name: "view-trail", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Spur", wait: 1500 },
  { name: "card-alert", query: "?card&alerts", width: 1400, height: 900 },
  { name: "card-scenes", query: "?card&nopanel", width: 1400, height: 900, click: "Wohnzimmer" },
  { name: "card-night", query: "?card&night", width: 1400, height: 900 },
  { name: "card-kiosk-orbit", query: "?card&kiosk", width: 1400, height: 900, wait: 2600 },
  { name: "view-floor-stack-panel", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Einzeln" },
  { name: "view-room-names-off", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Raumnamen" },
  { name: "empty", query: "?empty", width: 1280, height: 800 },
  { name: "site-demo", query: "?site&lang=en", width: 1280, height: 800 },
  { name: "site-demo-phone", query: "?site&lang=de", width: 390, height: 844 },
];

const errors = [];
const only = process.env.SHOTS?.split(",");
for (const shot of shots.filter((s) => !only || only.includes(s.name))) {
  const page = await browser.newPage();
  page.on("pageerror", (e) => errors.push(`${shot.name}: ${e.message}`));
  page.on("console", (m) => m.type() === "error" && !m.location()?.url?.endsWith("favicon.ico") && errors.push(`${shot.name}: ${m.text()}`));
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 1 });
  // every shot starts with the default settings (the panel remembers quality and FPS per device)
  // (only on the first load of the tab, so a reload keeps what the page stored)
  await page.evaluateOnNewDocument(() => {
    if (sessionStorage.getItem("fp3d-shot")) return;
    sessionStorage.setItem("fp3d-shot", "1");
    localStorage.clear();
  });
  await page.goto(base + shot.query, { waitUntil: "networkidle0", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 1200));
  const clickText = async (text) => {
    await page.evaluate((t) => {
      const find = (root) => {
        // exact text, or the first part of a row button ("Flur" in "Flur 12,8 m²")
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t || el.firstElementChild?.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      find(document)?.click();
    }, text);
    await new Promise((r) => setTimeout(r, 1200));
  };
  const hoverText = async (text) => {
    const at = await page.evaluate((t) => {
      const find = (root) => {
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      const el = find(document);
      if (!el) return null;
      el.scrollIntoView({ block: "center" });
      const r = el.getBoundingClientRect();
      return [r.left + r.width / 2, r.top + r.height / 2];
    }, text);
    if (at) await page.mouse.move(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1500));
  };
  if (shot.wait) await new Promise((r) => setTimeout(r, shot.wait));
  if (shot.editor) await clickText("Editor");
  if (shot.select) await clickText(shot.select);
  if (shot.click) await clickText(shot.click);
  if (shot.then) await clickText(shot.then);
  if (shot.tapAt) {
    await page.mouse.click(shot.tapAt[0], shot.tapAt[1]);
    await new Promise((r) => setTimeout(r, 900));
  }
  if (shot.editRoomName) {
    // change a room name through the panel's data controller, wait for the failed save, then reload
    await page.evaluate((name) => {
      const panel = document.querySelector("neonplan3d-panel");
      const b = structuredClone(panel.data.building);
      b.floors[0].rooms[0].name = name;
      panel.data.edit(b);
    }, shot.editRoomName);
    await new Promise((r) => setTimeout(r, 1500));
    if (shot.reload) {
      await page.reload({ waitUntil: "networkidle0", timeout: 120000 });
      await new Promise((r) => setTimeout(r, 1200));
    }
  }
  if (shot.viewScript) {
    // runs with v = the 3D view of the panel (search, quick menu, swipe)
    await page.evaluate((code) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      new Function("v", code)(v);
    }, shot.viewScript);
    await new Promise((r) => setTimeout(r, 1500));
  }
  if (shot.editorScript) {
    await page.evaluate((code) => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      new Function("e", code)(e);
    }, shot.editorScript);
    await new Promise((r) => setTimeout(r, 1200 + (shot.afterWait ?? 0)));
    // DEBUG_EVAL="<code using e>" prints what the editor says (for looking into a scene)
    if (process.env.DEBUG_EVAL) {
      const out = await page.evaluate((code) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        try {
          return String(new Function("e", "return " + code)(e));
        } catch (err) {
          return "ERROR " + err.message;
        }
      }, process.env.DEBUG_EVAL);
      console.log("DEBUG", out);
    }
    if (shot.then3d) {
      await clickText("3D");
      await clickText(shot.then3d);
      for (const t of [shot.then3dAlso ?? []].flat()) await clickText(t);
      if (shot.camera) {
        // turn the camera (radius, theta, phi around the house) for a view from another side
        await page.evaluate((cam) => {
          const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
          const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
          const { target, ...rest } = cam;
          if (target) viewer.controls.view.target.set(target.x, target.y ?? 1, target.z);
          Object.assign(viewer.controls.view, rest);
          viewer.invalidate();
        }, shot.camera);
        await new Promise((r) => setTimeout(r, 1500));
      }
      // DEBUG_VIEW="<code using v>" prints what the panel's 3D view says after the switch
      if (process.env.DEBUG_VIEW) {
        const out = await page.evaluate((code) => {
          const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
          try {
            return String(new Function("v", "return " + code)(v));
          } catch (err) {
            return "ERROR " + err.message;
          }
        }, process.env.DEBUG_VIEW);
        console.log("DEBUG_VIEW", out);
      }
    }
  }
  if (shot.furnishDrag) {
    await clickText("Einrichten");
    // screen position of the item: project its centre with the viewer's camera
    const at = await page.evaluate((id) => {
      const view = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const v = view.viewer;
      const fv = v.floors.find((f) => f.floor.furniture.some((m) => m.id === id));
      const f = fv.floor.furniture.find((m) => m.id === id);
      const p = v.camera.position.clone().set(f.x, fv.floor.elevation + fv.y + f.h * 0.6, f.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishDrag.id);
    await page.mouse.move(at[0], at[1]);
    await page.mouse.down();
    for (let i = 1; i <= 10; i++) await page.mouse.move(at[0] + (shot.furnishDrag.dx * i) / 10, at[1] + (shot.furnishDrag.dy * i) / 10);
    await page.mouse.up();
    await new Promise((r) => setTimeout(r, 1500));
  }
  if (shot.furnishTap) {
    await clickText("Einrichten");
    const at = await page.evaluate((pt) => {
      const view = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const v = view.viewer;
      const fv = v.floors[0];
      const p = v.camera.position.clone().set(pt.x, fv.floor.elevation + fv.y + 0.02, pt.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishTap);
    await page.mouse.click(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1200));
  }
  if (shot.editorState) {
    await page.evaluate((state) => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      Object.assign(editor, state);
    }, shot.editorState);
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.hover) await hoverText(shot.hover);
  if (shot.openDetails) {
    await page.evaluate(() => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      for (const d of editor.shadowRoot.querySelectorAll("details.fp3d-section")) d.open = !d.querySelector(".fp3d-library");
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.scrollSide) {
    await page.evaluate(() => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const side = editor.shadowRoot.querySelector(".fp3d-side");
      side.scrollTop = side.scrollHeight;
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  await page.screenshot({ path: join(outDir, `${shot.name}.png`) });
  await page.close();
  console.log(`saved ${shot.name}.png`);
}
await browser.close();
server.close();
if (errors.length) {
  console.error("Errors:\n" + errors.join("\n"));
  process.exit(1);
}
