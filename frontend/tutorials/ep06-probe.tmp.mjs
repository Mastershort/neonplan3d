// temporary probe for episode 6 (not part of the series)
import { startRecorder } from "./recorder.mjs";
const out = process.argv[2];
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
R.page.on("dialog", (d) => void d.accept());
await R.page.evaluateOnNewDocument(() => { try { localStorage.clear(); } catch {} });
const click = async (t) => { const b = await R.locate(t); await R.page.mouse.click(b.x, b.y); await R.sleep(700); };
const cam = (x, z, c) => R.page.evaluate((x, z, c) => { const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d"); const viewer = Object.values(v).find((o) => o && o.floors && o.floorMap); const fv = viewer.floorMap.get("eg"); const t = fv.group.position.clone().set(x, c.y, z); fv.group.localToWorld(t); viewer.controls.view.target.copy(t); Object.assign(viewer.controls.view, { theta: c.theta, phi: c.phi, radius: c.radius }); viewer.invalidate(); }, x, z, c);
const set = (id, state) => R.page.evaluate((id, state) => { const p = window.fp3dPanel; const h = p.hass; h.states[id] = { ...h.states[id], state }; p.hass = { ...h, states: { ...h.states } }; }, id, state);
try {
  await R.open("");
  await click({ text: "Erdgeschoss", exact: true, nth: 0 }); await R.sleep(800);
  await click({ text: "Wohnzimmer", exact: true }); await R.sleep(1200);
  await click('button[aria-label="Schließen"]');
  for (const id of ["light.wohnzimmer_decke", "light.stehlampe", "light.led_band", "light.pixeluhr"]) await R.page.evaluate((id) => window.fp3dPanel.hass.callService("light", "turn_off", { entity_id: id }), id);
  await R.page.evaluate(() => window.fp3dPanel.hass.callService("media_player", "turn_off", { entity_id: "media_player.fernseher" }));
  await set("binary_sensor.wohnzimmer_kamera_bewegung", "off"); await set("binary_sensor.wohnzimmer_kamera_person", "off");
  await cam(1.6, 1.6, { theta: -0.75, phi: 0.72, radius: 6.8, y: 0.6 }); await R.sleep(1500);
  await R.page.screenshot({ path: `${out}/c-off.png` });
  await set("binary_sensor.wohnzimmer_kamera_bewegung", "on"); await R.sleep(1500);
  await R.page.screenshot({ path: `${out}/c-on.png` });
} catch (e) { console.error(e); }
await R.frame(0.1);
await R.finish();
