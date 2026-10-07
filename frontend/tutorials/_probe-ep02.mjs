// temporary probe (scratch use only, deleted afterwards)
import { startRecorder } from "./recorder.mjs";
import { helpers, traceHouse } from "./ep02-common.mjs";
const out = process.argv[2];
const views = JSON.parse(process.argv[3]);
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
const H = helpers(R);
try {
  await R.open("empty");
  await traceHouse(R, { walls: true, openings: true });
  await R.clickOn({ text: "3D daneben", exact: true }, 0.01);
  await R.sleep(1500);
  await H.view2d(58, 25, 330);
  await R.clickOn({ text: "Wände hoch", exact: true }, 0.01);
  console.log(JSON.stringify(await H.view3d(null)));
  for (const [name, v] of Object.entries(views)) {
    await H.view3d(v);
    await R.sleep(700);
    await R.page.screenshot({ path: `${out}/${name}.jpg`, type: "jpeg", quality: 70 });
  }
} finally {
  await R.frame().catch(() => {});
  await R.finish().catch(() => {});
}
