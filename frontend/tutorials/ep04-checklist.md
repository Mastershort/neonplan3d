# Folge 4 – Möbel: platzieren, drehen, anpassen: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.8, 4.9, 4.12, 4.14, 4.15 (dazu aus 4.1 Tasten, Fixieren, Rechtsklick-Menü und aus
4.18 die Möbelleiste in „3D daneben“), Formulare in `frontend/src/components/editor.ts` (`renderFurnitureLibrary`,
`renderFurnitureForm`, `renderStateLinks`, `renderFurnitureLinks`, `renderParkingForm`, `renderContext`,
`render3dBar`, `onKey`, Paket-Liste am Raum), Labels aus `frontend/src/i18n.ts`.
Nur eingebaute, kostenlose Möbel. Zu lang für 8 Minuten → zwei Teile: **a** = Teil 1 „Möbel platzieren, drehen und
anpassen“, **b** = Teil 2 „Elektrische Möbel, Stellplatz und Saugroboter“. Zeit = Stelle im fertigen Video.

## Bibliothek (4.8)
- [ ] Werkzeug „Möbel“ oben öffnet rechts „Möbel hinzufügen“
- [ ] Erst einen Raum antippen: „Neue Möbel kommen in die Mitte von „…““ (ohne Raum: Tipp „Erst einen Raum antippen“)
- [ ] Abschnitte Leuchten, Wohnen, Essen, Küche, Schlafen, Bad & Hauswirtschaft, Arbeiten & Sonstiges, Stellplätze; auf- und zuklappen
- [ ] Alles hier ist eingebaut und kostenlos; darunter stehen installierte Möbel-Packs
- [ ] Suchfeld „Möbel suchen …“: filtert alle Abschnitte, bleibt beim Scrollen stehen
- [ ] Suche findet deutsche und englische Namen, mehrere Wörter in beliebiger Reihenfolge
- [ ] Escape leert das Suchfeld; „Nichts gefunden …“-Hinweis
- [ ] Maus über einem Eintrag: kleine 3D-Vorschau
- [ ] Symbol Glühbirne = Leuchte (mit Licht verknüpfbar, in 3D schaltbar)
- [ ] Symbol Blitz = elektrisches Möbel (Entität und Leistungssensor)
- [ ] „Arbeitsplatte“: freie Platte, Höhe = Oberkante (91 cm)
- [ ] Kasten „Mehr Möbel und Pro-Funktionen“ / „Erweiterungen öffnen“ unten (Hinweis auf Erweiterungen, Folge 5)

## Platzieren und Verschieben
- [ ] Eintrag anklicken: Möbel erscheint in der Raummitte, ausgewählt
- [ ] Ziehen verschiebt; an einer Wand dreht es sich mit dem Rücken zur Wand und rastet bündig ein
- [ ] „Alt“ beim Ziehen: frei, ohne Einrasten (feines Raster 1 cm)
- [ ] Pfeiltasten: ein Rasterschritt (5 cm), „Umschalt“ 10 cm, „Alt“ 1 cm
- [ ] „X (m)“ / „Y (m)“ für die genaue Lage
- [ ] Maß „B × T m“ steht im Plan am ausgewählten Möbel
- [ ] Markierte Vorderkante (Linie vorne)

## Drehen (ausführlich)
- [ ] Drehgriff vor dem Möbel: ziehen dreht in 15°-Schritten, die Front zeigt zum Mauszeiger
- [ ] Drehgriff mit „Alt“: 1°-Schritte
- [ ] „↺ 90°“ / „↻ 90°“ unten im Formular
- [ ] Feld „Drehung (°)“: jede Zahl, z. B. 45; 0 = Front zeigt nach unten im Plan
- [ ] Taste „R“ dreht 90° rechts herum, „Umschalt+R“ links herum
- [ ] Rechtsklick-Menü „↻ Drehen 90°“
- [ ] „3D daneben“: Möbel in 3D antippen, Leiste unten mit „↺ 45°“ / „↻ 45°“
- [ ] „Spiegeln“: links und rechts tauschen (Eckbank andersherum, Schrank mit Tür auf der anderen Seite)
- [ ] „Spiegeln“ auch im Rechtsklick-Menü
- [ ] Drehen vs. Spiegeln: Drehen dreht die Front, Spiegeln tauscht nur die Seiten

## Größe und Höhe
- [ ] Ecken des ausgewählten Möbels ziehen ändert die Größe (Raster; Alt fein)
- [ ] „Breite (m)“, „Tiefe (m)“, „Höhe (m)“
- [ ] Größe in der 3D-Leiste: B, T, H
- [ ] „Höhe über Boden (m)“: Regal / Netzwerkschrank an die Wand hängen, Trockner auf die Waschmaschine
- [ ] Oberschrank steht von sich aus auf 1,45 m, Wand-Fernseher mittig auf 1,3 m
- [ ] Höhe über Boden zählt immer vom Boden
- [ ] „Höhe automatisch“ setzt sie zurück
- [ ] Höhe über Boden in der 3D-Leiste (↕)
- [ ] Stapeln: Tischlampe stellt sich von selbst auf das Möbel darunter (Tisch, Nachttisch, Sideboard …)
- [ ] Deckenleuchten, Treppe, Stellplatz haben keine Höhe über Boden

## Formular sonst
- [ ] „Name (optional)“ und „Name unter dem Symbol in 3D zeigen“
- [ ] „Möbelstück“: Art tauschen, ohne neu zu setzen

## Fixieren, Duplizieren, Löschen
- [ ] „🔓 Fixieren“ oben im Formular → „🔒 Lösen“
- [ ] Taste „L“ fixiert / löst
- [ ] Fixiert: nicht mehr ziehen, keine Pfeiltasten, Ziehen bewegt die Ansicht; im Formular weiter änderbar
- [ ] Fixiert löschen nur nach Rückfrage
- [ ] Fixierte Möbel bleiben auch in der 3D-Hälfte stehen
- [ ] „Duplizieren“ (Kopie 30 cm versetzt, ausgewählt)
- [ ] „Löschen“ im Formular, Taste „Entf“
- [ ] „Strg+Z“ / „Rückgängig“, „Strg+Y“ / „Wiederholen“
- [ ] „Esc“ hebt die Auswahl auf / bricht ab

## Rechtsklick-Menü (Tablet: lange drücken)
- [ ] „🔒 Fixieren“, „⧉ Duplizieren“, „↻ Drehen 90°“, „⇋ Spiegeln“, „✕ Löschen“

## Räume einrichten (4.9)
- [ ] Raum antippen → „Einrichten …“
- [ ] Pakete: Küchenzeile, Küche in L-Form, Bad, Schlafzimmer, Wohnzimmer, Esszimmer, Büro, Kinderzimmer, Flur (mit Inhalt)
- [ ] Möbel kommen an die Wände; Leuchten verbinden sich mit den Lichtern des Bereichs
- [ ] Meldung „n Möbel gesetzt – Strg+Z nimmt es zurück“; Strg+Z nimmt das ganze Paket zurück
- [ ] Danach einzelne Möbel anpassen

## Elektrische Möbel (4.12)
- [ ] Welche: Fernseher, Medienwand/Wohnwand mit TV, Schreibtisch mit Monitor, Waschmaschine, Trockner, Spülmaschine, Heizkörper, Saugroboter (Blitz-Symbol)
- [ ] Fernseher: „Fernseher (Media-Player oder Steckdose)“; älterer TV an smarter Steckdose nimmt deren Schalter
- [ ] „automatisch“: NeonPlan sucht die passende Entität im Bereich selbst
- [ ] „Leistungssensor (W)“: Möbel zeigt seine Watt
- [ ] Leuchten (Glow): Fernseher leuchtet, solange er läuft; Waschmaschine/Trockner/Spülmaschine solange sie arbeiten; Heizkörper glüht beim Heizen
- [ ] „Gerät (Schalter, Steckdose …)“ – auch ein Status-Sensor (3D-Drucker: running/printing)
- [ ] Heizkörper: „Heizung (Thermostat)“
- [ ] „Vor dem Schalten nachfragen“
- [ ] „Symbol in 3D“ und eigenes Symbol (Details in Folge 6)
- [ ] Antippen in 3D schaltet (TV)
- [ ] „Wieder als Geräte-Pin“ (Möbel zurück zum einfachen Pin)

## Zustand von (4.8)
- [ ] „Zustand von (optional)“: jedes Möbel leuchtet oben, solange die Entität an / belegt / zu Hause meldet (Bett mit Belegungsmatte, Sessel, Sauna)
- [ ] „Zweiter Zustand (andere Hälfte)“: zwei Entitäten, zwei Hälften
- [ ] „Hälften“: „Links / rechts“ oder „Unten / oben (Hochbett)“

## Stellplätze und Fahrzeuge (4.14)
- [ ] „Stellplatz“ in der Gruppe „Stellplätze“: Garage, Einfahrt, Grundstück
- [ ] „Sensor „Auto anwesend““: binary_sensor, device_tracker …; solange er ein Auto meldet, steht das Fahrzeug da; ohne Sensor immer
- [ ] „Fahrzeug“: das Modell aus dem Pack „Fahrzeuge“ (kostenlos: der Stellplatz; Hinweis „Kein Fahrzeug-Pack importiert …“)
- [ ] „Größe (%)“ passt das Modell an den Platz an
- [ ] „Fahrzeugtyp-Sensor (optional)“ + „Zustand → Fahrzeug“ / „+ Zuordnung“ (KI-Kameraauswertung)
- [ ] Warnung, wenn das Fahrzeug höher ist als der Raum
- [ ] Stellplatz hat keine Höhe über Boden

## Saugroboter (4.15)
- [ ] Möbel „Saugroboter“, Feld „Saugroboter“ (vacuum-Entität)
- [ ] Saugt er, fährt er in 3D Bahnen durch den Raum seiner Station und kehrt zurück; Bahn simuliert
- [ ] „Aktueller Raum (Sensor)“: wird am Gerät des Roboters von selbst gefunden (Roborock, Dreame); anderer wählbar
- [ ] Raumname/Bereich wird verglichen, Groß-/Kleinschreibung und Umlaute egal („Kueche“ = „Küche“)
- [ ] Wechselt der Roboter den Raum, fährt er in 3D dort; passt kein Raum, bleibt er im Raum der Station
- [ ] Bahnen machen einen Bogen um Schränke, Sofas, Betten, Küchenzeilen; unter Tischen, Stühlen, Bänken, über Teppiche und unter Oberschränken fährt er durch

## Rahmen
- [ ] Teaser, „In diesem Video …“, Outro mit Rückblick, nächste Folge, Links, alte Wandtablets
- [ ] Am Anfang und am Ende: Es gibt Erweiterungen mit mehr Möbeln, Folge 5 zeigt sie
- [ ] Versionszeile „aufgenommen mit NeonPlan 3D 1.12.6“
