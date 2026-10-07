# Folge 4 – Möbel: platzieren, drehen, anpassen: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.8, 4.9, 4.12, 4.14, 4.15 (dazu aus 4.1 Tasten, Fixieren, Rechtsklick-Menü und aus
4.18 die Möbelleiste in „3D daneben“), Formulare in `frontend/src/components/editor.ts` (`renderFurnitureLibrary`,
`renderFurnitureForm`, `renderStateLinks`, `renderFurnitureLinks`, `renderParkingForm`, `renderContext`,
`render3dBar`, `onKey`, Paket-Liste am Raum), Labels aus `frontend/src/i18n.ts`.
Nur eingebaute, kostenlose Möbel. Zu lang für 8 Minuten → zwei Teile: **a** = Teil 1 „Möbel platzieren, drehen und
anpassen“ (7:23), **b** = Teil 2 „Elektrische Möbel, Stellplatz und Saugroboter“ (4:20). Zeit = Stelle im fertigen
Video (Zeilenbeginn, echte Stimme).

Ohne Fahrzeug-Pack nicht zeigbar (nur gesagt): das Auto selbst und die Warnung „höher als der Raum“. Nicht gezeigt:
der Hinweis „Nichts gefunden …“ einer leeren Suche, ein Tipp in 3D, der den Fernseher schaltet (Folge 10).

## Bibliothek (4.8)
- [x] a 0:22 · Werkzeug „Möbel“ oben öffnet rechts „Möbel hinzufügen“
- [x] a 0:22 / 0:29 · Erst einen Raum antippen: „Neue Möbel kommen in die Mitte von „…““ (ohne Raum: Tipp „Erst einen Raum antippen“)
- [x] a 0:35 / 0:42 · Abschnitte Leuchten, Wohnen, Essen, Küche, Schlafen, Bad & Hauswirtschaft, Arbeiten & Sonstiges, Stellplätze; auf- und zuklappen
- [x] a 0:19 / 1:23 (Pack-Bereich: Hinweis „Erweiterungen öffnen“, Folge 5) · Alles hier ist eingebaut und kostenlos; darunter stehen installierte Möbel-Packs
- [x] a 1:01 · Suchfeld „Möbel suchen …“: filtert alle Abschnitte, bleibt beim Scrollen stehen
- [x] a 1:01 / 1:07 („bench“, „tisch rund“) · Suche findet deutsche und englische Namen, mehrere Wörter in beliebiger Reihenfolge
- [x] a 1:07 (Escape; Hinweis „Nichts gefunden“ nicht gezeigt, nur Leerzustand) · Escape leert das Suchfeld; „Nichts gefunden …“-Hinweis
- [x] a 0:46 · Maus über einem Eintrag: kleine 3D-Vorschau
- [x] a 0:51 · Symbol Glühbirne = Leuchte (mit Licht verknüpfbar, in 3D schaltbar)
- [x] a 0:51 / b 0:21 · Symbol Blitz = elektrisches Möbel (Entität und Leistungssensor)
- [x] a 1:12 · „Arbeitsplatte“: freie Platte, Höhe = Oberkante (91 cm)
- [x] a 1:23 · Kasten „Mehr Möbel und Pro-Funktionen“ / „Erweiterungen öffnen“ unten (Hinweis auf Erweiterungen, Folge 5)

## Platzieren und Verschieben
- [x] a 1:33 · Eintrag anklicken: Möbel erscheint in der Raummitte, ausgewählt
- [x] a 1:44 · Ziehen verschiebt; an einer Wand dreht es sich mit dem Rücken zur Wand und rastet bündig ein
- [x] a 1:53 · „Alt“ beim Ziehen: frei, ohne Einrasten (feines Raster 1 cm)
- [x] a 1:56 · Pfeiltasten: ein Rasterschritt (5 cm), „Umschalt“ 10 cm, „Alt“ 1 cm
- [x] a 2:03 / 3:55 · „X (m)“ / „Y (m)“ für die genaue Lage
- [x] a 1:33 · Maß „B × T m“ steht im Plan am ausgewählten Möbel
- [x] a 1:40 · Markierte Vorderkante (Linie vorne)

## Drehen (ausführlich)
- [x] a 2:13 · Drehgriff vor dem Möbel: ziehen dreht in 15°-Schritten, die Front zeigt zum Mauszeiger
- [x] a 2:20 · Drehgriff mit „Alt“: 1°-Schritte
- [x] a 2:24 · „↺ 90°“ / „↻ 90°“ unten im Formular
- [x] a 2:35 / 2:42 · Feld „Drehung (°)“: jede Zahl, z. B. 45; 0 = Front zeigt nach unten im Plan
- [x] a 2:30 · Taste „R“ dreht 90° rechts herum, „Umschalt+R“ links herum
- [x] a 5:47 · Rechtsklick-Menü „↻ Drehen 90°“
- [x] a 3:14 / 3:18 · „3D daneben“: Möbel in 3D antippen, Leiste unten mit „↺ 45°“ / „↻ 45°“
- [x] a 2:46–3:03 · „Spiegeln“: links und rechts tauschen (Eckbank andersherum, Schrank mit Tür auf der anderen Seite)
- [x] a 5:50 · „Spiegeln“ auch im Rechtsklick-Menü
- [x] a 3:03 · Drehen vs. Spiegeln: Drehen dreht die Front, Spiegeln tauscht nur die Seiten

## Größe und Höhe
- [x] a 3:34 (Alt fein: in der Tastenübersicht 5:57) · Ecken des ausgewählten Möbels ziehen ändert die Größe (Raster; Alt fein)
- [x] a 3:39 · „Breite (m)“, „Tiefe (m)“, „Höhe (m)“
- [x] a 3:21 · Größe in der 3D-Leiste: B, T, H
- [x] a 3:47–4:04 / 4:19 · „Höhe über Boden (m)“: Regal / Netzwerkschrank an die Wand hängen, Trockner auf die Waschmaschine
- [x] a 4:11 · Oberschrank steht von sich aus auf 1,45 m, Wand-Fernseher mittig auf 1,3 m
- [x] a 4:19 · Höhe über Boden zählt immer vom Boden
- [x] a 4:19 · „Höhe automatisch“ setzt sie zurück
- [x] a 3:21 · Höhe über Boden in der 3D-Leiste (↕)
- [x] a 4:36 / 4:42 · Stapeln: Tischlampe stellt sich von selbst auf das Möbel darunter (Tisch, Nachttisch, Sideboard …)
- [x] a 4:29 · Deckenleuchten, Treppe, Stellplatz haben keine Höhe über Boden (gesagt; Stellplatz-Formular b 2:18 ohne das Feld)

## Formular sonst
- [x] a 4:51 · „Name (optional)“ und „Name unter dem Symbol in 3D zeigen“
- [x] a 4:59 · „Möbelstück“: Art tauschen, ohne neu zu setzen

## Fixieren, Duplizieren, Löschen
- [x] a 5:07 · „🔓 Fixieren“ oben im Formular → „🔒 Lösen“
- [x] a 5:07 / 5:25 · Taste „L“ fixiert / löst
- [x] a 5:12 · Fixiert: nicht mehr ziehen, keine Pfeiltasten, Ziehen bewegt die Ansicht; im Formular weiter änderbar
- [x] a 5:19 · Fixiert löschen nur nach Rückfrage
- [x] a 5:19 · Fixierte Möbel bleiben auch in der 3D-Hälfte stehen (gesagt)
- [x] a 5:28 · „Duplizieren“ (Kopie 30 cm versetzt, ausgewählt)
- [x] a 5:34 · „Löschen“ im Formular, Taste „Entf“
- [x] a 4:59 / 5:34 / 6:37 / 5:57 · „Strg+Z“ / „Rückgängig“, „Strg+Y“ / „Wiederholen“
- [x] a 5:50 · „Esc“ hebt die Auswahl auf / bricht ab

## Rechtsklick-Menü (Tablet: lange drücken)
- [x] a 5:39 / 5:47 · „🔒 Fixieren“, „⧉ Duplizieren“, „↻ Drehen 90°“, „⇋ Spiegeln“, „✕ Löschen“

## Räume einrichten (4.9)
- [x] a 6:09 · Raum antippen → „Einrichten …“
- [x] a 6:17 / 6:22 · Pakete: Küchenzeile, Küche in L-Form, Bad, Schlafzimmer, Wohnzimmer, Esszimmer, Büro, Kinderzimmer, Flur (mit Inhalt)
- [x] a 6:29 / 6:37 · Möbel kommen an die Wände; Leuchten verbinden sich mit den Lichtern des Bereichs
- [x] a 6:37 · Meldung „n Möbel gesetzt – Strg+Z nimmt es zurück“; Strg+Z nimmt das ganze Paket zurück
- [x] a 6:45 · Danach einzelne Möbel anpassen

## Elektrische Möbel (4.12)
- [x] b 0:21 · Welche: Fernseher, Medienwand/Wohnwand mit TV, Schreibtisch mit Monitor, Waschmaschine, Trockner, Spülmaschine, Heizkörper, Saugroboter (Blitz-Symbol)
- [x] b 0:33 / 0:42 · Fernseher: „Fernseher (Media-Player oder Steckdose)“; älterer TV an smarter Steckdose nimmt deren Schalter
- [x] b 0:33 · „automatisch“: NeonPlan sucht die passende Entität im Bereich selbst
- [x] b 0:47 / 1:13 · „Leistungssensor (W)“: Möbel zeigt seine Watt
- [x] b 0:33 (TV), 1:13 (Waschmaschine), 1:36 (Heizkörper), 3:47 · Leuchten (Glow): Fernseher leuchtet, solange er läuft; Waschmaschine/Trockner/Spülmaschine solange sie arbeiten; Heizkörper glüht beim Heizen
- [x] b 1:22 · „Gerät (Schalter, Steckdose …)“ – auch ein Status-Sensor (3D-Drucker: running/printing)
- [x] b 1:29 / 1:36 · Heizkörper: „Heizung (Thermostat)“
- [x] b 0:55 · „Vor dem Schalten nachfragen“
- [x] b 0:55 (Verweis auf Folge 6) · „Symbol in 3D“ und eigenes Symbol (Details in Folge 6)
- [x] b 0:55 (gesagt, nicht gezeigt) · Antippen in 3D schaltet (TV)
- [x] b 1:05 · „Wieder als Geräte-Pin“ (Möbel zurück zum einfachen Pin)

## Zustand von (4.8)
- [x] b 1:43 · „Zustand von (optional)“: jedes Möbel leuchtet oben, solange die Entität an / belegt / zu Hause meldet (Bett mit Belegungsmatte, Sessel, Sauna)
- [x] b 1:50 · „Zweiter Zustand (andere Hälfte)“: zwei Entitäten, zwei Hälften
- [x] b 1:56 / 2:01 · „Hälften“: „Links / rechts“ oder „Unten / oben (Hochbett)“

## Stellplätze und Fahrzeuge (4.14)
- [x] b 2:05 / 2:12 · „Stellplatz“ in der Gruppe „Stellplätze“: Garage, Einfahrt, Grundstück
- [x] b 2:18 · „Sensor „Auto anwesend““: binary_sensor, device_tracker …; solange er ein Auto meldet, steht das Fahrzeug da; ohne Sensor immer
- [x] b 2:28 · „Fahrzeug“: das Modell aus dem Pack „Fahrzeuge“ (kostenlos: der Stellplatz; Hinweis „Kein Fahrzeug-Pack importiert …“)
- [x] b 2:34 · „Größe (%)“ passt das Modell an den Platz an
- [x] b 2:40 · „Fahrzeugtyp-Sensor (optional)“ + „Zustand → Fahrzeug“ / „+ Zuordnung“ (KI-Kameraauswertung)
- [x] b 2:34 (gesagt; ohne Fahrzeug-Pack nicht zeigbar) · Warnung, wenn das Fahrzeug höher ist als der Raum
- [x] b 2:18 (im Formular zu sehen) · Stellplatz hat keine Höhe über Boden

## Saugroboter (4.15)
- [x] b 2:51 / 2:58 · Möbel „Saugroboter“, Feld „Saugroboter“ (vacuum-Entität)
- [x] b 2:58 / 3:07 · Saugt er, fährt er in 3D Bahnen durch den Raum seiner Station und kehrt zurück; Bahn simuliert
- [x] b 3:16 · „Aktueller Raum (Sensor)“: wird am Gerät des Roboters von selbst gefunden (Roborock, Dreame); anderer wählbar
- [x] b 3:26 · Raumname/Bereich wird verglichen, Groß-/Kleinschreibung und Umlaute egal („Kueche“ = „Küche“)
- [x] b 3:26–3:41 · Wechselt der Roboter den Raum, fährt er in 3D dort; passt kein Raum, bleibt er im Raum der Station
- [x] b 3:33 · Bahnen machen einen Bogen um Schränke, Sofas, Betten, Küchenzeilen; unter Tischen, Stühlen, Bänken, über Teppiche und unter Oberschränken fährt er durch

## Rahmen
- [x] a 0:00–0:13, 7:04 / b 0:00–0:11, 3:56 · Teaser, „In diesem Video …“, Outro mit Rückblick, nächste Folge, Links, alte Wandtablets
- [x] a 1:23 / b 4:04 · Am Anfang und am Ende: Es gibt Erweiterungen mit mehr Möbeln, Folge 5 zeigt sie
- [x] a 0:00 / 7:04, b 0:00 / 3:56 · Versionszeile „aufgenommen mit NeonPlan 3D 1.12.6“
