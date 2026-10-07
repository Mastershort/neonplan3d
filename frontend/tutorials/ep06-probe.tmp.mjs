// temporary probe for episode 6 (not part of the series)
import { startRecorder } from "./recorder.mjs";
const out = process.argv[2];
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
R.page.on("dialog", (d) => { console.log("DIALOG", d.message()); void d.accept(); });
await R.page.evaluateOnNewDocument(() => { try { localStorage.clear(); } catch {} });
const shot = (n) => R.page.screenshot({ path: `${out}/r-${n}.png` });
const click = async (t) => { const b = await R.locate(t); await R.page.mouse.click(b.x, b.y); await R.sleep(700); };
try {
  await R.open("");
  await click({ text: "Editor", exact: true });
  await click({ text: "3D daneben", exact: true }); await R.sleep(2000);
  const id = await R.editor(`const f = e.floor.furniture.find((f) => f.type === "lamp_floor"); e.selectItem("furniture", f.id); return f.id;`); await R.page.mouse.move(1800, 600);
  await R.sleep(600); await shot("01-sel");
  console.log(await R.editor(`return [e._furnitureId, e._deviceId, e._roomId]`));
  await R.page.mouse.wheel({ deltaY: 900 }); await R.sleep(300);
  const b = await R.locate({ text: "Wieder als Geräte-Pin" }); console.log(JSON.stringify(b));
  await R.page.mouse.click(b.x, b.y);
  for (let i = 0; i < 6; i++) { await R.sleep(400); console.log(i, await R.editor(`return [e._furnitureId, e._deviceId, e._roomId, e._tool]`)); }
  await R.page.mouse.move(1607, 640); await R.sleep(300);
  console.log("moved", await R.editor(`return [e._furnitureId, e._deviceId, e._roomId]`));
  await R.page.evaluate(() => { let a = document.activeElement; while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement; console.log(a?.tagName); a?.blur?.(); });
  await R.sleep(300);
  console.log("blurred", await R.editor(`return [e._furnitureId, e._deviceId, e._roomId]`));
  await shot("02-pin");
  // camera: tap in 3D main
  await click({ text: "3D", exact: true }); await R.sleep(1000);
  await click({ text: "Wohnzimmer", exact: true }); await R.sleep(1500);
  await click('button[aria-label="Schließen"]'); await R.sleep(800); await shot("03-wohn");
} catch (e) { console.error(e); await shot("error"); }
await R.frame(0.1);
await R.finish();
