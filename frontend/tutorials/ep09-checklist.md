# Folge 9 – Außenbereich und Garten: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.17 (ganz), dazu die Garten-Teile aus 4.8/4.11 (Außenleuchten, Pflanze, Höhe über
Boden, Drehung, Duplizieren) und 4.14 (Stellplatz); Formular `renderOutdoorForm`, `renderOutdoorHandles`,
`addOutdoor`, `duplicateOutdoor`, `deleteOutdoor`, Pfeiltasten, Rechteck-Ecken (`outvertex`) in
`frontend/src/components/editor.ts`, `OUTDOOR_TYPES`/`OUTDOOR_TOP`/`outdoorDrop` in `frontend/src/model.ts`,
`viewer/outdoor.ts` (Darstellung, Löcher, offene Kante), Labels aus `frontend/src/i18n.ts`.
Zu viel für 8 Minuten in einem Stück → zwei Teile: **a** = Teil 1 „Garten, Terrasse und Einfahrt am Hang“ (4:28),
**b** = Teil 2 „Hecken, Zaun, Pergola und Gartenlicht“ (4:41). Zeit = Stelle im fertigen Video (Zeilenbeginn,
echte Stimme). Haus und Garten sind erfunden (ein Erdgeschoss mit Garage und Satteldach); auf dem Bildschirm nur
eingebaute Möbel.

## Werkzeug „Außen“
- [x] a 0:26 · Werkzeug „Außen“ oben in der Werkzeugleiste
- [x] a 0:26 · Hinweis unten im Plan „Ziehen, um eine Außenfläche (Rasen, Terrasse, Pool …) aufzuziehen“
- [x] a 0:36 · Rechteck aufziehen (Garten hinter dem Haus)
- [x] a 0:40 · Neue Fläche ist zuerst „Rasen“
- [x] a 0:40 · Formular „Außenfläche“: „Art“, Lage/Größe, „Höhenversatz“, „Gefälle“, Haken
- [x] a 0:51 · Werkzeug springt auf „Auswählen“ zurück, „Außen“ für jede Fläche neu anklicken

## Verschieben und Größe
- [x] a 0:58 · Fläche ziehen = verschieben
- [x] a 1:01 · Ecken ziehen = Größe; ein Rechteck bleibt ein Rechteck (Nachbarecken laufen mit)
- [x] a 1:07 · „X (m)“ / „Y (m)“ = Ecke oben links; „Breite (m)“ / „Tiefe (m)“ als Zahl (Tiefe 8 m)
- [x] a 1:16 · Pfeiltasten verschieben in kleinen Schritten (Tastenkappe → / ←)
- [x] a 1:16 · „Duplizieren“ (Kopie daneben)
- [x] a 1:16 · „Löschen“ / Entf-Taste

## Freie Umrisse: Grundstück aus mehreren Flächen
- [x] a 1:25 · Außenflächen sind Rechtecke – Grundstück ums Haus aus mehreren Rasenflächen (links, vorn, rechts)
- [x] a 1:34 · In 3D Leuchtlinie an jeder Naht
- [x] a 1:38 · „Umrisslinie zeigen“ ohne Haken: keine Leuchtlinie am Rand (bei allen vier Rasenflächen)
- [x] a 1:49 · Ergebnis: Rasen wie aus einem Stück (3D)

## Jede Art (OUTDOOR_TYPES)
- [x] a 0:40 · „Rasen“ (Standard)
- [x] a 1:52 · „Terrasse“ (etwas höher als Rasen, eigener Belag, 3D)
- [x] a 2:03 · „Weg“ (zur Haustür)
- [x] a 2:07 · „Einfahrt“ (vor der Garage)
- [x] a 2:12 · „Pool“ (Wasser unter dem Boden)
- [x] a 2:16 · „Beet“ (etwas höher als Rasen)
- [x] a 2:42 · „Wildfläche“ (ungemähte Ecke)
- [x] b 0:21 · „Hecke“
- [x] b 0:48 · „Zaun“
- [x] b 1:17 · „Pergola / Rahmen“

## Löcher
- [x] a 2:21 · Pool im Rasen: Rasen liegt darüber, Wasser fehlt (3D)
- [x] a 2:29 · „Aus Flächen darunter ausschneiden“: Loch in jeder vorher gezeichneten Fläche, in der sie ganz liegt
- [x] a 2:38 · Ergebnis in 3D: Wasser sichtbar
- [x] a 2:42 · Wildfläche mitten im Rasen mit Haken
- [x] a 2:52 · Reihenfolge: nur Flächen, die vorher gezeichnet wurden

## Höhenversatz und Gefälle
- [x] a 2:56 · „Höhenversatz (m, − = tiefer)“: Plus hebt, Minus senkt
- [x] a 3:02 · Erhöhte Terrasse 0,3 m (3D)
- [x] a 3:08 · Minuswert: Fläche tiefer (Garage im Untergeschoss); Leuchten gehen mit
- [x] a 3:17 · Einfahrt am Hang zur Garage hinunter
- [x] a 3:23 · „Höhenversatz“ 0,6 (hohe Kante an der Straße)
- [x] a 3:28 · „Gefälle (m)“ 0,6 und „Fällt nach“ „unten (+Z)“ (Optionsliste rechts/links/unten/oben gezeigt)
- [x] a 3:38 · Hinweis „Höhenunterschied von der hohen zur tiefen Kante …“
- [x] a 3:46 · 3D: Einfahrt fällt zur Garage ab
- [x] a 3:51 · Vorgarten und Weg genauso (ganzer Vorgarten am Hang)
- [x] a 3:56 · Hang im Garten / Rampe; Zaunpfosten und Leuchten stehen auf der schrägen Fläche (Leuchten gezeigt in b 3:06)

## Hecken
- [x] b 0:21 · Hecke = Außenfläche, schmaler Streifen, Art „Hecke“
- [x] b 0:28 · „Höhe (m)“ nur bei Hecke, Zaun, Pergola: Thuja-Sichtschutz 2,5 m
- [x] b 0:35 · Niedrige Hecke als Einfassung 0,5 m
- [x] b 0:42 · 3D: grüne Blöcke, hoch an der Seite, niedrig hinten

## Zaun
- [x] b 0:48 · Zaun aufziehen (Hof neben der Garage), Art „Zaun“
- [x] b 0:54 · Läuft zuerst rundherum, „Höhe (m)“ 1,2
- [x] b 1:01 · „Offen (letzte Kante weglassen)“: beim aufgezogenen Rechteck die linke Kante – Zaun lehnt am Haus
- [x] b 1:11 · 3D: Pfosten etwa alle 2 m, zwei Latten, offen zur Hauswand

## Pergola / Rahmen
- [x] b 1:17 · Art „Pergola / Rahmen“ auf der Terrasse
- [x] b 1:22 · Eckpfosten, Balken, Sparren in der „Höhe“ (2,4 m); Höhenversatz wie die erhöhte Terrasse (0,3)
- [x] b 1:33 · „X-Verstrebung“
- [x] b 1:37 · Gefälle 0,3, „Fällt nach“ unten (vom Haus weg)
- [x] b 1:43 · „Offen“ auch bei der Pergola; Rahmen für Carport-Gerüst / Unterbau eines Rolldachs

## Außenleuchten
- [x] b 1:52 · Außenleuchten sind Möbel: Werkzeug „Möbel“, Abschnitt „Leuchten“, „Wegleuchte“, „Garten-Spot“
- [x] b 2:04 · Ohne ausgewählten Raum landet das Möbel in der Mitte des Plans; mit „X (m)“/„Y (m)“ an den Weg
- [x] b 2:13 · „Licht oder Schalter“: Licht aus Home Assistant
- [x] b 2:19 · „Duplizieren“: mehrere Leuchten folgen demselben Licht
- [x] b 2:29 · „Wandleuchte“ außen: rastet draußen nicht ein, mit X/Y vor die Wand
- [x] b 2:37 · „Drehung (°)“ 180 (nach außen), „Höhe über Boden (m)“ 2 („Höhe automatisch“ erscheint)
- [x] b 2:45 · Licht „Haustür Außenlicht“
- [x] b 2:49 · „Garten-Spot“ am Pool, „Leuchtstärke in 3D (%)“ 150
- [x] b 2:58 · Außenleuchten beleuchten alle Außenflächen und die Fassade; abends in 3D
- [x] b 3:06 · Wegleuchten stehen auf dem schrägen Vorgarten, Licht auf Weg und Fassade

## Pflanzen
- [x] b 3:13 · Eingebaute „Pflanze“ (Wohnen) auf die Terrasse, „Höhe (m)“ 1,5
- [x] b 3:22 · Ein Satz: Bäume, Sträucher, Gestrüpp im Pack „Garten & Terrasse“; Breite/Höhe = Krone/Wuchs (kein Preis)

## Stellplatz (4.14, Garten-Teil)
- [x] b 3:30 · Abschnitt „Stellplätze“ aufklappen, „Stellplatz“, in die Einfahrt (X/Y, Drehung)
- [x] b 3:37 · „Sensor „Auto anwesend““ wählen
- [x] b 3:44 · „Fahrzeug“: Modell aus dem Pack „Fahrzeuge“ (Hinweis im Formular), Verweis auf Folge 4

## Sperren und Ergebnis
- [x] b 3:50 · „🔒 Grundriss“ sperrt Räume, Wände, Türen und Außenflächen (Fläche lässt sich nicht ziehen, Hinweis „Fixiert …“)
- [x] b 4:01 · Möbel und Leuchten bleiben frei; zweiter Klick hebt die Sperre auf (gezeigt)
- [x] b 4:06 · Der ganze Garten in der 3D-Ansicht am Abend

## Nicht gezeigt (mit Grund)
- Freie (nicht rechteckige) Umrisse einer Außenfläche: Der Editor kann sie nicht erzeugen – gezogene Flächen sind
  Rechtecke, und eine Ecke zu ziehen hält das Rechteck. Gezeigt wird stattdessen das Zusammensetzen aus mehreren
  Rechtecken mit „Umrisslinie zeigen“ aus (so beschreibt es auch die Anleitung).
- Außenflächen haben kein eigenes „Fixieren“: Sie folgen nur der Grundriss-Sperre (gezeigt).
- Kleine Leuchten werden über X/Y gesetzt statt gezogen: Bei 0,16 m großen Leuchten greift beim Ziehen in dieser
  Plan-Zoomstufe der Eckgriff (Größe ändern) statt des Möbels.
