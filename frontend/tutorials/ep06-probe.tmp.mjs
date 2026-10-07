// temporary probe for episode 6 (not part of the series)
import { startRecorder } from "./recorder.mjs";
import { helpers } from "./ep02-common.mjs";
const out = process.argv[2];
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const h = helpers(R);
R.page.on("dialog", (d) => { console.log("DIALOG", d.message()); void d.accept(); });
await R.page.evaluateOnNewDocument(() => { try { localStorage.clear(); } catch {} });
const shot = (n) => R.page.screenshot({ path: `${out}/q-${n}.png` });
const tapq = async (x, z) => { const p = await R.planPoint(x, z); await R.page.mouse.click(p.x, p.y); await R.sleep(500); };
const click = async (t) => { const b = await R.locate(t); await R.page.mouse.click(b.x, b.y); await R.sleep(600); };
try {
  await R.open("");
  await click({ text: "Editor", exact: true }); await R.sleep(800);
  await tapq(5.5, 4.0); await shot("01-tap"); console.log("room", await R.editor(`return e._roomId`));
  await R.editor(`e.selectItem("room","wohnen")`); await R.sleep(500);
  await h.scrollSide({ text: "Dieser Bereich" }, 250, 0.2); await shot("02-devlist");
  await h.scrollSide({ text: "Dieser Bereich" }, -300, 0.2); await shot("03-devlist2");
  await click({ text: "Andere Bereiche" }); await shot("04-other");
  await click({ text: "Ohne Bereich" }); await shot("05-none");
  await click({ text: "Dieser Bereich" });
  await R.editor(`e.selectItem("room","kueche")`); await R.sleep(500);
  await h.scrollSide({ text: "Dieser Bereich" }, 250, 0.2); await shot("06-kueche");
  await click({ text: "3D daneben" }); await R.sleep(2500); await shot("07-daneben");
  await click({ text: "3D", exact: true }); await R.sleep(1500);
  await click({ text: "Erdgeschoss", exact: true, nth: 0 }); await R.sleep(1500); await shot("08-eg");
  await click({ text: "Wohnzimmer", exact: true }); await R.sleep(2000); await shot("09-wohn");
  await click({ text: "Alle", exact: true }); await R.sleep(800); await shot("10-alle");
  await click({ text: "Keine", exact: true }); await R.sleep(800); await shot("11-keine");
  await click({ text: "Küche", exact: true }); await R.sleep(2000); await shot("12-kueche3d");
  console.log(JSON.stringify(await R.page.evaluate(() => { const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d"); const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap); const c = viewer.controls.view; return { theta: c.theta, phi: c.phi, radius: c.radius, target: [c.target.x, c.target.y, c.target.z] }; })));
} catch (e) { console.error(e); await shot("error"); }
await R.frame(0.1);
await R.finish();
