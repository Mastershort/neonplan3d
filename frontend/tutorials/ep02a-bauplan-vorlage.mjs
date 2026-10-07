// Tutorial episode 2, part 1 – "Bauplan als Vorlage": the floor-plan picture (upload, opacity, handles to move,
// scale and turn, straighten, scale with the ruler, lay the house corner on the grid), tracing the rooms (rectangle,
// an L-shaped room with "Freie Form", corners, "+" on an edge, the point list, arrow keys) and the walls (thickness,
// heights, splitting a wall for a counter, "Keine Wand", a free-standing half-height wall), checked in 3D beside.
// The picture is invented and deliberately crooked and too small (tutorials/assets/make-plan.py, bauplan-l.png).
// Usage (from frontend/): node tutorials/ep02a-bauplan-vorlage.mjs <out-dir> [<voice-dir with durations.json>]
// Then: python ../tools/make-tutorial.py <out-dir> <out.mp4>

import { narration, startRecorder } from "./recorder.mjs";
import { PLAN, PTS, VERSION, fastMode, helpers, traceHouse } from "./ep02-common.mjs";

const out = process.argv[2] ?? "tutorial-ep02a";
const R = await startRecorder({ outDir: out, width: 1920, height: 1080, lang: "de" });
fastMode(R);
const N = narration(R, process.argv[3]);
const { say, sayOver, chapter, catchUp } = N;
const H = helpers(R);
const { fill, tapPlan, pointPlan, dragPlan, side, scrollSide, rowMove, rowClick, bgPoint, planElement } = H;

/** The "×" (delete point) of row `n` (1-based) of the room's point list. */
const pointRow = (n, what) =>
  H.editorEval(
    `const rows = e.renderRoot.querySelectorAll(".fp3d-point"); const row = rows[args[0] - 1]; if (!row) return null;
     const el = args[1] === "x" ? row.querySelector("button") : row.querySelectorAll("input")[args[1] === "z" ? 1 : 0];
     const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };`,
    n,
    what,
  );
/** Drag a range slider (found by its label) from its current value to `to`. */
const slide = async (label, from, to, min, max) => {
  const b = await R.locate({ label });
  const x = (v) => b.x - b.w / 2 + 8 + ((v - min) / (max - min)) * (b.w - 16);
  await R.move(x(from), b.y, 0.5);
  await R.drag(x(to), b.y, 0.8);
};

// ---------------------------------------------------------------- 0. Teaser: the traced house, live in 3D
await chapter("Teaser");
await R.open("empty");
await R.hideCursor();
await traceHouse(R, { walls: true, openings: true });
await R.clickOn({ text: "3D", exact: true }, 0.01);
await R.sleep(2500);
const A = { theta: 0.25, phi: 0.95, radius: 22 };
const B = { theta: 0.95, phi: 0.8, radius: 19 };
const C = { theta: 1.6, phi: 0.75, radius: 20 };
await R.view(A);
await R.sleep(1200);
await R.title("Bauplan als Vorlage – Teil 1", `NeonPlan 3D · Folge 2${VERSION}`);
await sayOver("Du hast deinen Grundriss als Bild? Dann zeichnest du dein Haus einfach darauf nach – in ein paar Minuten.");
await R.glide(A, B, 5.5);
await R.untitle();
await sayOver("Mit L-förmigem Wohnzimmer, Theke, offenem Flur, Türen und Fenstern – und alles live in 3D.");
await R.glide(B, C, 5);

// ---------------------------------------------------------------- 1. Intro
await chapter("Was wir heute machen");
await R.open("empty");
await R.clickOn({ text: "Editor", exact: true }, 0.01);
await R.sleep(500);
await R.hideCursor(false);
await sayOver("In Teil 1 legen wir den Bauplan unter, richten ihn gerade aus und bringen ihn mit dem Lineal auf den richtigen Maßstab.");
await R.move(800, 520, 0.6);
await R.hold(1);
await R.moveTo({ text: "Freie Form", exact: true }, 0.6);
await sayOver("Dann zeichnen wir die Räume nach und stellen die Wände ein. Türen und Fenster kommen in Teil 2.");
await R.hold(1.2);
await R.moveTo({ text: "Wand", exact: true }, 0.5);
await R.hold(0.8);
await R.moveTo({ text: "Tür & Fenster", exact: true }, 0.5);
await sayOver("Du brauchst nur ein Foto oder einen Scan deines Grundrisses. Ich nehme einen erfundenen Plan – absichtlich schief eingescannt.");
await R.move(800, 520, 0.6);

// ---------------------------------------------------------------- 2. Upload
await chapter("Bild hochladen");
await sayOver("Zuerst die Etage, wie in Folge 1: „Etage hinzufügen“ und „Erdgeschoss“.");
await R.clickOn({ text: "Etage hinzufügen" }, 0.5);
await R.hold(0.4);
await R.clickOn({ text: "Erdgeschoss", nth: 0 }, 0.5);
await sayOver("Ganz unten in der Seitenleiste klappst du „Vorlage (Grundriss-Bild)“ auf und klickst auf „Bild wählen“.");
await side();
await R.scrollTo("Vorlage (Grundriss-Bild)", 760, 0.8);
await R.clickOn({ text: "Vorlage (Grundriss-Bild)" }, 0.5);
{
  const [chooser] = await Promise.all([R.page.waitForFileChooser(), R.clickOn({ text: "Bild wählen" }, 0.5)]);
  await R.hold(0.6);
  await chooser.accept([PLAN]);
  await R.sleep(1500);
  await R.frame(1 / 25, 200);
}
await sayOver("PNG, JPG oder WebP – ein Handyfoto geht auch, wenn es gerade von oben aufgenommen ist.");
await scrollSide({ text: "Vorlage (Grundriss-Bild)" }, 150, 0.6);
await pointPlan(-0.5, 0.5, 0.6);
await sayOver("Das Bild liegt jetzt unter dem Raster – ein Kästchen ist ein Meter, das Bild anfangs zwölf Meter breit. Man sieht sofort: Der Plan ist zu klein und schief.");
{
  // along the crooked top wall of the picture
  const a = await bgPoint(...PTS.top_left);
  const b = await bgPoint(...PTS.top_right);
  await R.move(a.x, a.y, 0.6);
  await R.move(b.x, b.y, 1.4);
}
await sayOver("Mit „Deckkraft“ machst du es kräftiger oder dezenter. Die Vorlage gibt es nur hier im Editor, nicht in 3D – und jede Etage hat ihre eigene.");
await slide("Deckkraft", 0.5, 0.75, 0.05, 1);
await R.hold(0.6);

// ---------------------------------------------------------------- 3. Handles
await chapter("Verschieben, skalieren und drehen");
await sayOver("„Verschieben, skalieren und drehen“ gibt dem Bild Griffe – wie bei einem Möbelstück.");
await R.clickOn({ text: "Verschieben, skalieren und drehen" }, 0.5);
await R.hold(0.4);
await sayOver("Ziehen verschiebt es.");
{
  const a = await bgPoint(0.5, 0.45);
  await R.move(a.x, a.y, 0.5);
  await R.drag(a.x + 40, a.y + 30, 0.9);
}
await sayOver("Der Griff unten rechts macht es größer oder kleiner.");
{
  const c = await planElement("[data-bg-handle]");
  await R.move(c.x, c.y, 0.5);
  await R.drag(c.x + 120, c.y + 84, 1);
}
await sayOver("Und der runde Griff oben dreht es – mit gedrückter Umschalttaste in 15-Grad-Schritten.");
{
  const r = await planElement("[data-bg-rotate] circle");
  await R.move(r.x, r.y, 0.5);
  await R.drag(r.x + 60, r.y + 6, 1.1);
}
await sayOver("Rechts stehen die Werte dazu: X und Y, die „Breite im Plan“ und die „Drehung“ auf ein Zehntelgrad genau.");
await R.moveTo({ label: "X (m)" }, 0.5);
await R.hold(0.3);
await R.moveTo({ label: "Breite im Plan" }, 0.5);
await R.moveTo({ label: "Drehung" }, 0.5);
await sayOver("Nach Augenmaß wird es aber nie ganz genau. Ich setze die Drehung zurück auf null und tippe auf „Fertig“.");
await fill("Drehung", "0");
await R.clickOn({ text: "Fertig", exact: true }, 0.5);
await sayOver("Jetzt liegt das Bild fest und du zeichnest ungestört darüber – das sagt auch der Hinweis im Formular.");
{
  const vb = await R.locate({ text: "Verschieben, skalieren und drehen" });
  await R.move(vb.x, vb.y + vb.h / 2 + 24, 0.5);
}
await R.hold(0.6);
await R.moveTo({ text: "Gerade ausrichten" }, 0.5);

// ---------------------------------------------------------------- 4. Straighten
await chapter("Gerade ausrichten");
await sayOver("Genauer geht es mit „Gerade ausrichten“. Der Knopf heißt dann „Ausrichten abbrechen“ – falls du es dir anders überlegst.");
await R.clickOn({ text: "Gerade ausrichten" }, 0.5);
await R.moveTo({ text: "Ausrichten abbrechen" }, 0.4);
await R.hold(0.8);
await sayOver("Tipp auf den Anfang einer langen Wand, die gerade sein soll – hier die Außenwand oben –");
{
  const a = await bgPoint(...PTS.top_left);
  await R.move(a.x, a.y, 0.7);
  await R.click();
}
await sayOver("und dann auf ihr Ende. Das Bild dreht sich passend.");
{
  const b = await bgPoint(...PTS.top_right);
  await R.move(b.x, b.y, 1);
  await R.click();
}
await R.hold(0.5);
await sayOver("Jetzt läuft die Wand genau am Raster entlang. Unter „Drehung“ stehen 2,5 Grad.");
{
  const a = await bgPoint(...PTS.top_left);
  const b = await bgPoint(...PTS.top_right);
  await R.move(a.x, a.y - 22, 0.5);
  await R.move(b.x, b.y - 22, 1.1);
}
await R.moveTo({ label: "Drehung" }, 0.5);

// ---------------------------------------------------------------- 5. Ruler
await chapter("Maßstab mit dem Lineal");
await sayOver("Jetzt der Maßstab. Mit dem Mausrad zoome ich etwas heraus – die Ansicht schiebst du, indem du auf einer leeren Stelle ziehst. Am Tablet geht beides mit zwei Fingern.");
await R.move(820, 560, 0.5);
for (let i = 0; i < 8; i++) {
  await R.page.mouse.wheel({ deltaY: 30 });
  await R.frame(1 / 25, 40);
}
await R.move(1450, 900, 0.5);
await R.drag(1440, 870, 0.6);
await sayOver("Für das Lineal brauchst du eine Strecke, deren Länge du kennst – am besten die längste Maßkette im Plan: 14 Meter. Auch hier heißt der Knopf jetzt „Lineal abbrechen“.");
await R.clickOn({ text: "Maßstab mit Lineal" }, 0.5);
await R.moveTo({ text: "Lineal abbrechen" }, 0.4);
await R.hold(0.5);
{
  const a = await bgPoint(...PTS.dim_left);
  const b = await bgPoint(...PTS.dim_right);
  await R.move(a.x, a.y - 30, 0.6);
  await R.move(b.x, b.y - 30, 1.2);
}
await sayOver("Ich tippe auf den Anfang der Maßlinie … und auf ihr Ende.");
{
  const a = await bgPoint(...PTS.dim_left);
  await R.move(a.x, a.y, 0.7);
  await R.click();
  const b = await bgPoint(...PTS.dim_right);
  await R.move(b.x, b.y, 1.1);
  await R.click();
}
await sayOver("Rechts steht, was NeonPlan gemessen hat – deutlich weniger. Ich gebe die echte Länge ein: 14 – und „Maßstab übernehmen“.");
{
  const b = await R.locate({ label: "Echte Länge" });
  await R.move(b.x, b.y - 58, 0.5);
}
await R.hold(0.8);
await R.clickOn({ label: "Echte Länge" }, 0.5);
await R.type("14", 0.08);
await R.clickOn({ text: "Maßstab übernehmen" }, 0.5);
await sayOver("Das Bild wächst passend, der erste Punkt bleibt dabei stehen. Zur Kontrolle: Die Garage ist jetzt dreieinhalb Kästchen breit.");
{
  const a = await bgPoint(...PTS.corner);
  await R.move(a.x, a.y + 40, 0.6);
  await R.move(a.x + 3.5 * (await H.editorEval("return e._view.scale")), a.y + 40, 1.2);
}
await sayOver("Zum Schluss schiebe ich die Hausecke genau auf einen Rasterpunkt – dann rasten die Räume beim Zeichnen sauber auf den Wänden ein.");
await R.clickOn({ text: "Verschieben, skalieren und drehen" }, 0.5);
{
  const a = await bgPoint(...PTS.corner);
  const b = await R.planPoint(0, 0);
  await R.move(a.x, a.y, 0.6);
  await R.drag(b.x, b.y, 1.2);
}
// the drag lands within millimetres; lay the picture exactly (invisible)
await H.exactPlan();
await R.clickOn({ text: "Fertig", exact: true }, 0.5);
await sayOver("Merk dir die Reihenfolge: erst gerade ausrichten, dann den Maßstab, dann zeichnen. Und „Vorlage entfernen“ nimmt das Bild wieder weg.");
await R.moveTo({ text: "Gerade ausrichten" }, 0.5);
await R.hold(0.6);
await R.moveTo({ text: "Maßstab mit Lineal" }, 0.5);
await R.hold(0.6);
await R.moveTo({ text: "Vorlage entfernen" }, 0.5);

// ---------------------------------------------------------------- 6. Tracing
await chapter("Räume nachzeichnen");
await catchUp();
await H.view2d(70, 310, 150);
await scrollSide({ text: "Etage hinzufügen" }, 140, 0.5).catch(() => null);
await sayOver("Rechteckige Räume ziehst du wie in Folge 1 mit „Rechteck“ auf – hier die Garage, von Ecke zu Ecke.");
await R.clickOn({ text: "Rechteck", exact: true }, 0.5);
await dragPlan([0, 0], [3.5, 6], 1.3);
await sayOver("Für das L-förmige Wohnzimmer nimmst du „Freie Form“ und setzt Punkt für Punkt auf die Ecken.");
await R.clickOn({ text: "Freie Form", exact: true }, 0.5);
await tapPlan(3.5, 0, 0.6);
await tapPlan(10, 0, 0.7);
await tapPlan(10, 4, 0.6);
await sayOver("Unten steht immer der Hinweis zum Werkzeug. Die Ecken rasten am Raster ein, an den Ecken und Kanten anderer Räume und an ihren Fluchtlinien.");
await tapPlan(7.1, 4, 0.6);
await tapPlan(7.5, 8.5, 0.6);
await tapPlan(3.5, 8.5, 0.6);
await R.move(400, 1064, 0.6);
await R.hold(1);
await sayOver("Mit gedrückter Alt-Taste setzt du Punkte ohne Fangen. Geschlossen wird mit einem Tipp auf den ersten Punkt – oder mit Enter. Esc bricht ab.");
await R.hold(1.6);
await tapPlan(3.5, 0, 0.8);
await sayOver("Küche, Flur, Bad und Schlafzimmer sind Rechtecke – die gehen ganz schnell.");
await R.clickOn({ text: "Rechteck", exact: true }, 0.45);
await dragPlan([10, 0], [14, 4], 0.7);
await R.clickOn({ text: "Rechteck", exact: true }, 0.45);
await dragPlan([7.5, 4], [14, 5.5], 0.7);
await sayOver("Die Ecken rasten an den Nachbarräumen ein – so bleiben keine Lücken zwischen den Räumen.");
await R.clickOn({ text: "Rechteck", exact: true }, 0.45);
await dragPlan([7.5, 5.5], [10.5, 8.5], 0.6);
await R.clickOn({ text: "Rechteck", exact: true }, 0.45);
await dragPlan([10.5, 5.5], [14, 8.5], 0.6);
await sayOver("Die Räume verknüpfst du dann mit ihren Bereichen aus Home Assistant – genau wie in Folge 1.");
await scrollSide({ label: "Bereich" }, 230, 0.6);
await R.moveTo({ label: "Bereich" }, 0.5);
await R.hold(0.6);

// ---------------------------------------------------------------- 7. Corners and points
await chapter("Ecken und Punkte anpassen");
await sayOver("Eine Ecke vom Wohnzimmer sitzt daneben. Mit „Auswählen“ tippst du den Raum an und ziehst die Ecke an die richtige Stelle.");
await tapPlan(5.5, 2, 0.6);
await R.hold(0.6);
await dragPlan([7.1, 4], [7.5, 4], 1);
await sayOver("Das kleine Plus in der Mitte jeder Kante fügt einen neuen Punkt ein – etwa für einen Erker. Antippen, dann den neuen Punkt ziehen.");
await tapPlan(5.5, 8.5, 0.6);
await R.hold(0.6);
await dragPlan([5.5, 8.5], [5.5, 9.3], 1.1);
await sayOver("Rechts in der Liste „Eckpunkte“ steht jede Ecke mit X und Y – dort tippst du Maße auch direkt ein. Das Kreuz löscht einen Punkt.");
await scrollSide({ text: "Eckpunkte" }, 300, 0.7);
{
  const y = await pointRow(6, "z");
  await R.move(y.x, y.y, 0.6);
  await R.hold(0.8);
  const x = await pointRow(6, "x");
  await R.move(x.x, x.y, 0.5);
  await R.click();
}
await sayOver("Die Pfeiltasten schieben das Ausgewählte um einen Rasterschritt, mit Umschalt um zehn Zentimeter, mit Alt um einen.");
await pointPlan(5.5, 2.5, 0.5);
await R.page.keyboard.down("Shift");
await R.key("ArrowRight");
await R.hold(0.35);
await R.key("ArrowRight");
await R.page.keyboard.up("Shift");
await R.hold(0.6);
await sayOver("Und alles nimmt Strg+Z zurück – oder oben „Rückgängig“. „Wiederholen“ macht es wieder, „Alles zeigen“ holt alle Räume ins Bild.");
await R.page.keyboard.down("Control");
await R.key("z");
await R.hold(0.3);
await R.key("z");
await R.page.keyboard.up("Control");
await R.moveTo({ text: "Rückgängig", exact: true }, 0.5);
await R.moveTo({ text: "Wiederholen", exact: true }, 0.5);
await R.clickOn({ text: "Alles zeigen", exact: true }, 0.5);

// ---------------------------------------------------------------- 8. Walls
await chapter("Wände: Stärke, Höhe, Theke, offen");
await sayOver("Die Wände entstehen von selbst: Jede gemeinsame Kante wird eine Innenwand, jede Außenkante eine Außenwand. Ecken und T-Stöße werden sauber verschnitten.");
await pointPlan(10, 2.8, 0.6);
await R.hold(0.6);
await pointPlan(14, 2, 0.6);
await sayOver("Ihre Stärken stehen unten unter „Einstellungen“. Im Plan sind die Außenwände 30 Zentimeter dick – also trage ich bei „Außenwand“ 0,3 ein.");
await scrollSide({ text: "Zurück zur Etage" }, 150, 0.6);
await R.clickOn({ text: "Zurück zur Etage" }, 0.5);
await scrollSide({ text: "Einstellungen" }, 260, 0.8);
await R.clickOn({ text: "Einstellungen" }, 0.5);
await scrollSide({ label: "Außenwand" }, 520, 0.6);
await fill("Außenwand", "0,3");
await R.moveTo({ label: "Innenwand" }, 0.5);
await sayOver("Jetzt ins Wohnzimmer: Im Kasten „Wandhöhen“ steht jede Wand des Raums, benannt nach den Ecknummern im Plan, mit ihrer Länge.");
await tapPlan(5.5, 2, 0.6);
await scrollSide(() => H.rowBox("Wand 1–2", "row"), 200, 0.7);
await rowMove("Wand 1–2", "row", 0.5);
await sayOver("Fährst du über eine Zeile, leuchtet die Wand im Plan auf. Wo ein Nachbarraum nur einen Teil der Wand berührt, gibt es eigene Zeilen: Teil 1 und Teil 2.");
await rowMove("Wand 2–3", "row", 0.5);
await R.hold(0.8);
await scrollSide(() => H.rowBox("Wand 6–1 · Teil 1", "row"), 700, 0.6);
await rowMove("Wand 6–1 · Teil 2", "row", 0.5);
await R.hold(0.6);
await scrollSide(() => H.rowBox("Wand 1–2", "row"), 200, 0.6);
await sayOver("Zur Küche gibt es laut Plan auf zwei Metern eine Theke. Also teile ich „Wand 2–3“ mit der Schere.");
await rowClick("Wand 2–3", "✂", 0.6);
await sayOver("Der Teilpunkt sitzt in der Mitte. Unter „Teilpunkt ab Ecke“ verschiebst du ihn, das Kreuz fügt die Teile wieder zusammen.");
await rowMove("Wand 2–3 · Teil 2", "split", 0.5);
await R.hold(0.6);
await rowMove("Wand 2–3 · Teil 2", "⨉", 0.5);
await sayOver("Teil 1 bekommt die Höhe 1,1 Meter – schon ist es eine Theke. Niedrige Wände sind im Plan heller, Fenster und Türen darin enden an der Wandhöhe.");
await rowClick("Wand 2–3 · Teil 1", "height", 0.5);
await H.typeOver("1,1");
await pointPlan(10, 1, 0.6);
await R.hold(0.8);
await sayOver("Der Pfeil nach oben setzt eine Wand wieder auf volle Höhe. Teilen sich zwei Räume eine Wand, gilt die niedrigere Höhe.");
await rowMove("Wand 2–3 · Teil 1", "↥", 0.6);
await sayOver("Zum Flur ist der Essbereich offen: bei „Wand 3–4“ auf „Keine Wand“. In Home Assistant bleiben es getrennte Bereiche, und Licht scheint hindurch.");
await rowClick("Wand 3–4", "Keine Wand", 0.6);
await pointPlan(8.75, 4, 0.6);
await sayOver("Jede Wand hat außerdem ein Feld „Dicke“ – für die eine dickere Außenwand oder eine dünne Trennwand. Der Kreispfeil setzt sie auf die Hausdicke zurück.");
await rowClick("Wand 1–2", "thick", 0.6);
await H.typeOver("0,365");
await R.hold(0.6);
await rowClick("Wand 1–2", "↺", 0.5);
await sayOver("Teilen sich zwei Räume eine Wand, gilt die dickere Angabe – und die Wand bleibt mittig auf der Grenze.");
await pointPlan(6.75, 0, 0.6);

// ---------------------------------------------------------------- 9. A free-standing wall
await chapter("Einzelne Wand: Raumteiler");
await sayOver("Bleibt der Raumteiler. Dafür gibt es oben das Werkzeug „Wand“: einfach ziehen. Umschalt hält sie gerade, Alt zeichnet ohne Fangen.");
await R.clickOn({ text: "Wand", exact: true }, 0.5);
await dragPlan([3.5, 5], [5.2, 5], 1.1);
await sayOver("Trifft sie auf eine Raumwand, wird die Ecke sauber verschnitten. Rechts stehen „Länge“, „Wandstärke“ und „Höhe“.");
await R.hold(0.8);
await R.moveTo({ label: "Länge" }, 0.5);
await sayOver("Laut Plan: zwei Meter lang, zehn Zentimeter stark und 1,20 hoch – eine halbhohe Wand.");
await fill("Länge", "2");
await fill("Wandstärke", "0,1");
await fill("Höhe", "1,2");
await sayOver("Die Enden ziehst du an den Griffen, die ganze Wand an der Linie. Türen und Fenster gehen auch in einzelne Wände – „Löschen“ nimmt sie mit.");
await pointPlan(5.5, 5, 0.6);
await R.hold(0.6);
await pointPlan(4.5, 5, 0.5);
await R.hold(0.4);
await R.moveTo({ text: "Löschen", exact: true }, 0.6);

// ---------------------------------------------------------------- 10. 3D check
await chapter("Kontrolle in 3D");
await sayOver("Jetzt die Kontrolle: „3D daneben“ zeigt das Haus direkt neben dem Plan.");
await R.clickOn({ text: "3D daneben", exact: true }, 0.6);
await R.sleep(1500);
await H.view2d(52, 60, 330);
const D = { theta: 0.3, phi: 0.95, radius: 29, target: { x: 7, y: 0.75, z: 4.25 } };
const E = { theta: 0.95, phi: 0.8, radius: 26, target: { x: 7, y: 0.75, z: 4.25 } };
await H.view3d(D);
await R.sleep(1200);
await R.frame(1 / 25, 200);
await sayOver("Oben schaltest du zwischen „Wände hoch“ – alle Wände in voller Höhe – und „Schnitt“: Dann sind sie in Hüfthöhe abgeschnitten.");
await R.clickOn({ text: "Wände hoch", exact: true }, 0.6);
await R.sleep(800);
await R.hold(1);
await R.clickOn({ text: "Schnitt", exact: true }, 0.6);
await R.sleep(800);
await R.clickOn({ text: "Wände hoch", exact: true }, 0.6);
await catchUp();
await R.hideCursor();
await sayOver("Da sind sie: die Theke zur Küche, der offene Flur, die Garage und der halbhohe Raumteiler im Wohnzimmer.");
await H.glide3d(D, E, 6);

// ---------------------------------------------------------------- 11. Outro
await chapter("Wie geht es weiter");
await R.title("Teil 2: Türen und Fenster", `NeonPlan 3D – läuft auch auf alten Wandtablets${VERSION}`);
await say("Das war Teil 1: Bauplan einrichten, Räume nachzeichnen, Wände einstellen. In Teil 2 kommen Türen, Fenster und das Garagentor dazu – mit Kontakten und Rollläden.");
await say("Links zur Online-Demo und zur Anleitung findest du in der Beschreibung. Und NeonPlan läuft auch auf alten Wandtablets. Bis gleich in Teil 2!");
await R.hold(0.6);

N.report();
const result = await R.finish();
console.log(`recorded ${result.frames} frames, ${result.duration.toFixed(1)} s → ${out}`);
