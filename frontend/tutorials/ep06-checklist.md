# Folge 6 – Geräte, Lampen und Kameras: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.10, 4.11, 4.13 (dazu aus 5.3 Bedienen, 5.4 Raumfenster und 5.9 Kameras in 3D, was
beim Bedienen live in 3D hilft; 4.12 nur „Leistungssensor“ und „Wieder als Geräte-Pin“), Formulare in
`frontend/src/components/editor.ts` (`renderDeviceList`, `renderDeviceExtras`, `renderDeviceForm`,
`renderRoomClimate`, `renderCameraWedge`, `renderFurnitureForm`/`renderFurnitureLinks` für Leuchten,
`renderSpotForm`, `markerSelect`, `iconInput`, `glowScaleField`, `renderAsFurniture`), Schalter „Symbole“ in
`panel.ts`, Labels aus `frontend/src/i18n.ts`. Volles Demo-Haus. Zu viel für 8 Minuten → zwei Teile:
**a** = Teil 1 „Geräte platzieren, Symbole und Namen“, **b** = Teil 2 „Lampen und Kameras“.
Zeit = Stelle im fertigen Video (a = ep06a.mp4, 7:11; b = ep06b.mp4, 5:18).

## Teil 1 – Geräteliste eines Raums (4.10)
- [x] a 0:28 – Raum antippen → rechts „Geräte“: alle Geräte des verknüpften Bereichs, nach Gerät gruppiert
- [x] a 0:18 (gesagt) – Ohne Bereich: Hinweis „Verknüpfe den Raum mit einem Bereich …“ (gesagt; Bereich = Folge 1)
- [x] a 0:38 / 0:43 – Hauptentität vorn, weitere (LED-Anzeigen, Effekte) hinter „+n weitere“ / „weniger“ (Pixeluhr)
- [x] a 0:53 / 1:04 – Welche Sensoren erscheinen: Temperatur, Luftfeuchte, CO₂/Luftqualität, Leistung/Energie, Gas/Wasser, Helligkeit, Luftdruck; Akku/Signal nicht
- [ ] Zähler ohne Geräteklasse zählen über die Einheit (m³, l, kWh, lx); Nachkommastellen wie in HA (gesagt)
- [x] a 1:04 – Fehlt ein Gerät: in HA den Bereich prüfen
- [x] a 1:11 – Suchfeld „Geräte suchen …“ (bei großen Bereichen)
- [x] a 1:13–1:37 – Quelle „Dieser Bereich“ (mit Anzahl), „Andere Bereiche“ (nach Bereich gruppiert, „in <Raum>“ wenn schon platziert, Platzieren holt es her), „Ohne Bereich“ (Template-Lichter, Gruppen, Helfer); HA-Bereich ändert sich nicht
- [x] a 1:47 (gesagt) – „n weitere – Suche eingrenzen“ bei langen Listen (gesagt)
- [x] a 1:57 – „Platzieren“ setzt ein Gerät in den Raum (frei im Raum verteilt)
- [x] a 2:14 – Lichter werden als Leuchte aus der Bibliothek gesetzt (Deckenleuchte), damit sie in 3D leuchten
- [x] a 2:07 / 2:22 – „Alle n platzieren …“ mit Rückfrage; „Rückgängig“ / Strg+Z nimmt alle in einem Schritt zurück
- [x] a 1:52 / 2:28 – Platzierte stehen hell in der Liste (Name antippen wählt das Gerät), „Entfernen“ in der Zeile
- [x] a 2:39 – ☆ / ★ „Im Raumfenster zeigen“: ins Raumfenster ohne Platzieren
- [x] a 2:45 – 👁 / 🙈 „Im Raumfenster ausblenden“ (durchgestrichen)
- [x] a 2:52 – Aa / ∅ Zustand im Raumfenster ausblenden (Rollladen ohne Rückmeldung); „unbekannt“ fällt ohnehin weg
- [x] a 2:58 / 3:04 – Raumfenster in 3D: zeigt platzierte + ☆-Geräte; „Weitere Geräte des Bereichs“
- [x] a 3:12 / 3:23 – Raumklima: Temperatur, Luftfeuchte, CO₂ – „Automatisch“ (ohne Gerätetemperaturen wie 3D-Drucker/Vorlauf) oder Sensor wählen oder „Keiner“; gilt für Heatmap und Raumfenster

## Teil 1 – Gerät im Plan (4.10)
- [x] a 2:03 – Platziertes Gerät im Plan ziehen
- [x] a 3:34 – Formular „Gerät“: Symbol und Name oben, „🔓 Fixieren“
- [x] a 3:43 – „X (m)“ / „Y (m)“
- [x] a 3:43 – „Höhe des Symbols (m)“ und „Höhe automatisch“
- [x] a 3:55 – „Drehung (°)“
- [x] a 4:07–4:25 – „Vor dem Schalten nachfragen“: Rückfrage beim Antippen in 3D, im Schnellmenü, im Raumfenster; Doppeltipp auf den Raum lässt es aus; Wischen bewegt es nicht (Server-Schalter, Kaffeemaschine)
- [x] a 6:04 – In 3D: Rückfrage „… wirklich schalten?“ live gezeigt
- [x] a 4:40 / 4:50 – „Symbol in 3D“: Automatisch / Immer zeigen / Ohne Watt / Ausblenden
- [x] a 5:46 / 5:53 – Schalter „Symbole“ in der 3D-Ansicht (⚙): Keine / Wichtige / Alle; „Wichtige“ lässt Lampen und Möbel-Geräte weg, Sensoren/Watt bleiben; „Keine“ schlägt alles
- [x] a 4:32 / 4:50 – Leistungssensor am Gerät: Pin zeigt die Watt (Kaffeemaschine), „Ohne Watt“ lässt sie weg; elektrische Möbel haben „Leistungssensor (W)“ (Folge 4)
- [x] a 4:58 – Energie Pro: „Hologramm über dem Gerät“ (ein Satz, keine Preise)
- [x] a 5:05 / 5:14 – „Eigenes Symbol (Material-Design-Icon)“: Name wie in HA (mdi:thermometer), Vorschau daneben, leer = Standard; gilt auch für elektrische Möbel
- [x] a 5:19–5:35 – „Eigener Name (optional)“ + „Name unter dem Symbol in 3D zeigen“ (drei Thermometer im Garten); Haken erscheint erst mit Namen; Karten-Option `marker_names: true` (gesagt)
- [x] a 6:21 / 6:32 – „Als Möbel darstellen“: Pin → passendes Möbel (Lautsprecher, Leuchte, Heizkörper, Saugroboter), schon verknüpft; Liste nur passende Möbel
- [x] a 6:41 – „Wieder als Geräte-Pin“ im Möbelformular; Strg+Z nimmt beides zurück
- [x] a 4:02 – „In Raummitte“ und „Entfernen“
- [x] a 6:09 (Schnellmenü), Details b 3:28 – Bedienen in 3D: Antippen schaltet (Lampe blinkt), lange drücken = Schnellmenü, Pin antippen

## Teil 2 – Leuchten (4.11)
- [x] b 0:23 / 0:32 – Leuchten = Möbel mit verknüpftem Licht; Typen: Deckenleuchte, Einbauspot, Aufbau-Spot, LED-Panel, Pendelleuchte, Stehlampe, Deckenfluter, Tischlampe, Wandleuchte, LED-Streifen, Wegleuchte, Garten-Spot (Abschnitt „Leuchten“ der Bibliothek)
- [x] b 2:02 (gesagt, siehe Hinweis) – Licht als Geräte-Pin: „Lampe“ = Montage Deckenleuchte / Stehlampe / Tischlampe / Wandleuchte
- [x] b 0:53–1:06 – „Licht oder Schalter“: auch ein Schalter/Relais geht; mehrere Leuchten dürfen demselben Licht folgen
- [x] b 3:14 / 3:24 – 3D leuchtet in Farbe und Helligkeit aus HA; Boden und Wände mit beleuchtet; zwei farbige Deckenleuchten mischen sich; Licht fällt nur durch Türen in den Nachbarraum
- [x] b 2:41 – Farbeffekte (Farbwechsel) werden animiert (LED Band)
- [x] b 1:13 – „Farbe und Helligkeit von (optional)“: Relais schaltet, Leuchte kennt Farbe → An/Aus vom Schalter, Farbe von der zweiten Entität
- [x] b 1:25 – „Leuchtstärke in 3D (%)“: unter 100 % dämpft LED-Streifen, über 100 % hebt schwache Lampen; schaltet nichts in HA; gilt auch für Licht-Pins
- [x] b 1:57 – Tischlampe steht auf dem Möbel darunter
- [x] b 1:42 / 1:50 – Pendelleuchte: „Form“ Schirm / Kugel / Kegel / Trommel; Höhe = Abhängung unter der Decke
- [x] b 0:45 / 1:36 / 2:12 – Wandleuchte (1,75 m) und LED-Streifen (unter der Decke) rasten an der Wand ein; „Höhe über Boden (m)“, „Höhe automatisch“
- [x] b 2:18–2:30 – LED-Streifen: unter 1 m strahlt nach oben, darüber nach unten; unter der Schnitthöhe immer sichtbar; „Neigung um die Länge (°)“; „Senkrecht“
- [x] b 2:46–2:58 – „Spots setzen“ am Raum: „Leuchte“ (Einbauspot, Aufbau-Spot, LED-Panel, Deckenleuchte), „Spalten“, „Reihen“, Licht → „n Leuchten setzen“; alle folgen einem Licht
- [x] b 3:04 (gesagt über der Geräteliste) – „Deckenlampen gleichmäßig verteilen“ (ab zwei Decken-Pins eines Raums) (gesagt)
- [x] b 1:25 (im Formular sichtbar), Erklärung a – Vor dem Schalten nachfragen, Symbol in 3D, eigenes Symbol auch bei Leuchten (mit Licht)
- [x] b 3:28–3:39 – Bedienen in 3D: Antippen schaltet, Lampe blinkt; senkrecht wischen dimmt; lange drücken = Schnellmenü mit Helligkeit, Farbtemperatur, Farben; Doppeltipp auf Raum = alle Lichter

## Teil 2 – Kameras (4.13, 5.9)
- [x] b 3:44 – Kamera platzieren wie jedes Gerät
- [x] b 3:49 – „Montage“: „Wand (Blickrichtung = Drehung)“ / „Decke (Dome, rundum)“
- [x] b 3:58 – Kegel im Plan; Griff an der Spitze dreht und setzt Reichweite
- [x] b 4:03 – „Sichtwinkel (°)“, „Reichweite (m)“, „Neigung nach unten (°)“
- [x] b 4:10 – „Sichtkegel in 3D zeigen“ je Kamera
- [x] b 4:17 – In 3D endet der Kegel an der ersten Wand
- [x] b 4:23 – 3D: Kameramodell an Wand/Decke, Kegel auf dem Boden
- [x] b 4:29 (in der Demo kaum sichtbar, siehe Hinweis) – Bewegungs-/Präsenzsensor der Kamera meldet → Kegel rot
- [x] b 4:34 / 4:43 – Tipp auf Kamera oder Kegel: Standbild, erneuert sich; Tipp aufs Bild: Livebild von HA; Kegel = große Tippfläche
- [x] b 4:46 – Kamera-Cockpit (Pro): Erkennungs-Hinweis im Formular, Durch die Kamera schauen, Kamera-Wand – ein Satz, keine Preise

## Rahmen
- [x] a 0:00 / 6:50, b 0:00 / 4:56 – Teaser, „In diesem Video …“, Outro mit Rückblick, nächste Folge, Links, alte Wandtablets
- [x] Titelkarten a+b – Versionszeile „aufgenommen mit NeonPlan 3D 1.12.6“
- [x] a 4:58, b 4:46 – Erweiterungen höchstens ein-, zweimal: Energie Pro (Leistung), Kamera-Cockpit (Kameras)

## Offen / Hinweise
- [ ] „Zähler ohne Geräteklasse zählen über die Einheit; Nachkommastellen wie in HA“ ist nicht gesagt (Detail, passt in Folge 10).
- „Lampe“ (Montage eines Licht-Pins) und „Deckenlampen gleichmäßig verteilen“ nur gesagt: Ein Licht als Geräte-Pin lässt sich
  in 1.12.6 nicht mehr anlegen – „Wieder als Geräte-Pin“ an einer Leuchte wird sofort wieder zur Leuchte (normalizeBuilding
  wandelt jeden light.*-Pin in eine Leuchte um), damit sind beide Bedienelemente praktisch unerreichbar.
- Roter Kamerakegel: Im Demo-Wohnzimmer liegt ein rosa Teppich unter dem Kegel; der Farbwechsel ist im Bild kaum zu sehen.
