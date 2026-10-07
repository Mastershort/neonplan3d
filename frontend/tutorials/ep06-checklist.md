# Folge 6 – Geräte, Lampen und Kameras: Coverage-Checkliste

Quellen: `docs/anleitung.md` 4.10, 4.11, 4.13 (dazu aus 5.3 Bedienen, 5.4 Raumfenster und 5.9 Kameras in 3D, was
beim Bedienen live in 3D hilft; 4.12 nur „Leistungssensor“ und „Wieder als Geräte-Pin“), Formulare in
`frontend/src/components/editor.ts` (`renderDeviceList`, `renderDeviceExtras`, `renderDeviceForm`,
`renderRoomClimate`, `renderCameraWedge`, `renderFurnitureForm`/`renderFurnitureLinks` für Leuchten,
`renderSpotForm`, `markerSelect`, `iconInput`, `glowScaleField`, `renderAsFurniture`), Schalter „Symbole“ in
`panel.ts`, Labels aus `frontend/src/i18n.ts`. Volles Demo-Haus. Zu viel für 8 Minuten → zwei Teile:
**a** = Teil 1 „Geräte platzieren, Symbole und Namen“, **b** = Teil 2 „Lampen und Kameras“.
Zeit = Stelle im fertigen Video (a = ep06a.mp4, b = ep06b.mp4).

## Teil 1 – Geräteliste eines Raums (4.10)
- [ ] Raum antippen → rechts „Geräte“: alle Geräte des verknüpften Bereichs, nach Gerät gruppiert
- [ ] Ohne Bereich: Hinweis „Verknüpfe den Raum mit einem Bereich …“ (gesagt; Bereich = Folge 1)
- [ ] Hauptentität vorn, weitere (LED-Anzeigen, Effekte) hinter „+n weitere“ / „weniger“ (Pixeluhr)
- [ ] Welche Sensoren erscheinen: Temperatur, Luftfeuchte, CO₂/Luftqualität, Leistung/Energie, Gas/Wasser, Helligkeit, Luftdruck; Akku/Signal nicht
- [ ] Zähler ohne Geräteklasse zählen über die Einheit (m³, l, kWh, lx); Nachkommastellen wie in HA (gesagt)
- [ ] Fehlt ein Gerät: in HA den Bereich prüfen
- [ ] Suchfeld „Geräte suchen …“ (bei großen Bereichen)
- [ ] Quelle „Dieser Bereich“ (mit Anzahl), „Andere Bereiche“ (nach Bereich gruppiert, „in <Raum>“ wenn schon platziert, Platzieren holt es her), „Ohne Bereich“ (Template-Lichter, Gruppen, Helfer); HA-Bereich ändert sich nicht
- [ ] „n weitere – Suche eingrenzen“ bei langen Listen (gesagt)
- [ ] „Platzieren“ setzt ein Gerät in den Raum (frei im Raum verteilt)
- [ ] Lichter werden als Leuchte aus der Bibliothek gesetzt (Deckenleuchte), damit sie in 3D leuchten
- [ ] „Alle n platzieren …“ mit Rückfrage; „Rückgängig“ / Strg+Z nimmt alle in einem Schritt zurück
- [ ] Platzierte stehen hell in der Liste (Name antippen wählt das Gerät), „Entfernen“ in der Zeile
- [ ] ☆ / ★ „Im Raumfenster zeigen“: ins Raumfenster ohne Platzieren
- [ ] 👁 / 🙈 „Im Raumfenster ausblenden“ (durchgestrichen)
- [ ] Aa / ∅ Zustand im Raumfenster ausblenden (Rollladen ohne Rückmeldung); „unbekannt“ fällt ohnehin weg
- [ ] Raumfenster in 3D: zeigt platzierte + ☆-Geräte; „Weitere Geräte des Bereichs“
- [ ] Raumklima: Temperatur, Luftfeuchte, CO₂ – „Automatisch“ (ohne Gerätetemperaturen wie 3D-Drucker/Vorlauf) oder Sensor wählen oder „Keiner“; gilt für Heatmap und Raumfenster

## Teil 1 – Gerät im Plan (4.10)
- [ ] Platziertes Gerät im Plan ziehen
- [ ] Formular „Gerät“: Symbol und Name oben, „🔓 Fixieren“
- [ ] „X (m)“ / „Y (m)“
- [ ] „Höhe des Symbols (m)“ und „Höhe automatisch“
- [ ] „Drehung (°)“
- [ ] „Vor dem Schalten nachfragen“: Rückfrage beim Antippen in 3D, im Schnellmenü, im Raumfenster; Doppeltipp auf den Raum lässt es aus; Wischen bewegt es nicht (Server-Schalter, Kaffeemaschine)
- [ ] In 3D: Rückfrage „… wirklich schalten?“ live gezeigt
- [ ] „Symbol in 3D“: Automatisch / Immer zeigen / Ohne Watt / Ausblenden
- [ ] Schalter „Symbole“ in der 3D-Ansicht (⚙): Keine / Wichtige / Alle; „Wichtige“ lässt Lampen und Möbel-Geräte weg, Sensoren/Watt bleiben; „Keine“ schlägt alles
- [ ] Leistungssensor am Gerät: Pin zeigt die Watt (Kaffeemaschine), „Ohne Watt“ lässt sie weg; elektrische Möbel haben „Leistungssensor (W)“ (Folge 4)
- [ ] Energie Pro: „Hologramm über dem Gerät“ (ein Satz, keine Preise)
- [ ] „Eigenes Symbol (Material-Design-Icon)“: Name wie in HA (mdi:thermometer), Vorschau daneben, leer = Standard; gilt auch für elektrische Möbel
- [ ] „Eigener Name (optional)“ + „Name unter dem Symbol in 3D zeigen“ (drei Thermometer im Garten); Haken erscheint erst mit Namen; Karten-Option `marker_names: true` (gesagt)
- [ ] „Als Möbel darstellen“: Pin → passendes Möbel (Lautsprecher, Leuchte, Heizkörper, Saugroboter), schon verknüpft; Liste nur passende Möbel
- [ ] „Wieder als Geräte-Pin“ im Möbelformular; Strg+Z nimmt beides zurück
- [ ] „In Raummitte“ und „Entfernen“
- [ ] Bedienen in 3D: Antippen schaltet (Lampe blinkt), lange drücken = Schnellmenü, Pin antippen

## Teil 2 – Leuchten (4.11)
- [ ] Leuchten = Möbel mit verknüpftem Licht; Typen: Deckenleuchte, Einbauspot, Aufbau-Spot, LED-Panel, Pendelleuchte, Stehlampe, Deckenfluter, Tischlampe, Wandleuchte, LED-Streifen, Wegleuchte, Garten-Spot (Abschnitt „Leuchten“ der Bibliothek)
- [ ] Licht als Geräte-Pin: „Lampe“ = Montage Deckenleuchte / Stehlampe / Tischlampe / Wandleuchte
- [ ] „Licht oder Schalter“: auch ein Schalter/Relais geht; mehrere Leuchten dürfen demselben Licht folgen
- [ ] 3D leuchtet in Farbe und Helligkeit aus HA; Boden und Wände mit beleuchtet; zwei farbige Deckenleuchten mischen sich; Licht fällt nur durch Türen in den Nachbarraum
- [ ] Farbeffekte (Farbwechsel) werden animiert (LED Band)
- [ ] „Farbe und Helligkeit von (optional)“: Relais schaltet, Leuchte kennt Farbe → An/Aus vom Schalter, Farbe von der zweiten Entität
- [ ] „Leuchtstärke in 3D (%)“: unter 100 % dämpft LED-Streifen, über 100 % hebt schwache Lampen; schaltet nichts in HA; gilt auch für Licht-Pins
- [ ] Tischlampe steht auf dem Möbel darunter
- [ ] Pendelleuchte: „Form“ Schirm / Kugel / Kegel / Trommel; Höhe = Abhängung unter der Decke
- [ ] Wandleuchte (1,75 m) und LED-Streifen (unter der Decke) rasten an der Wand ein; „Höhe über Boden (m)“, „Höhe automatisch“
- [ ] LED-Streifen: unter 1 m strahlt nach oben, darüber nach unten; unter der Schnitthöhe immer sichtbar; „Neigung um die Länge (°)“; „Senkrecht“
- [ ] „Spots setzen“ am Raum: „Leuchte“ (Einbauspot, Aufbau-Spot, LED-Panel, Deckenleuchte), „Spalten“, „Reihen“, Licht → „n Leuchten setzen“; alle folgen einem Licht
- [ ] „Deckenlampen gleichmäßig verteilen“ (ab zwei Decken-Pins eines Raums) (gesagt)
- [ ] Vor dem Schalten nachfragen, Symbol in 3D, eigenes Symbol auch bei Leuchten (mit Licht)
- [ ] Bedienen in 3D: Antippen schaltet, Lampe blinkt; senkrecht wischen dimmt; lange drücken = Schnellmenü mit Helligkeit, Farbtemperatur, Farben; Doppeltipp auf Raum = alle Lichter

## Teil 2 – Kameras (4.13, 5.9)
- [ ] Kamera platzieren wie jedes Gerät
- [ ] „Montage“: „Wand (Blickrichtung = Drehung)“ / „Decke (Dome, rundum)“
- [ ] Kegel im Plan; Griff an der Spitze dreht und setzt Reichweite
- [ ] „Sichtwinkel (°)“, „Reichweite (m)“, „Neigung nach unten (°)“
- [ ] „Sichtkegel in 3D zeigen“ je Kamera
- [ ] In 3D endet der Kegel an der ersten Wand
- [ ] 3D: Kameramodell an Wand/Decke, Kegel auf dem Boden
- [ ] Bewegungs-/Präsenzsensor der Kamera meldet → Kegel rot
- [ ] Tipp auf Kamera oder Kegel: Standbild, erneuert sich; Tipp aufs Bild: Livebild von HA; Kegel = große Tippfläche
- [ ] Kamera-Cockpit (Pro): Erkennungs-Hinweis im Formular, Durch die Kamera schauen, Kamera-Wand – ein Satz, keine Preise

## Rahmen
- [ ] Teaser, „In diesem Video …“, Outro mit Rückblick, nächste Folge, Links, alte Wandtablets
- [ ] Versionszeile „aufgenommen mit NeonPlan 3D 1.12.6“
- [ ] Erweiterungen höchstens ein-, zweimal: Energie Pro (Leistung), Kamera-Cockpit (Kameras)
