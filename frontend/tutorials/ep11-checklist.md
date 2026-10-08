# Folge 11 – Dashboard-Karte und Wandtablet: Coverage-Checkliste

Quellen: `docs/anleitung.md` Kapitel 8 (Dashboard-Karte, YAML-Block) und 9 (Wandtablet), die Karte in
`frontend/src/card.ts`, ihr visueller Editor `frontend/src/card-editor.ts`, die Optionen in
`frontend/src/card-config.ts`, Nachtdimmung `frontend/src/kiosk.ts`, Qualitätsstufe/Pixeldichte/`isLowEnd` in
`frontend/src/viewer/viewer3d.ts`, Leistungsanzeige in `frontend/src/components/view3d.ts`, Labels aus
`frontend/src/i18n.ts`. Die Vorschau `preview/index.html?card` zeigt den Karten-Editor links und die Karte rechts
(wie der Karten-Dialog von Home Assistant). Das Anlegen in Home Assistant selbst wird nur gesagt.
Zu viel für 8 Minuten in einem Stück → zwei Teile: **a** = Teil 1 „Die Karte anlegen und einstellen“,
**b** = Teil 2 „YAML, Kiosk und alte Wandtablets“. Zeit = Stelle im fertigen Video (Zeilenbeginn, echte Stimme).
`controls_side` und `keep_view` kommen mit 1.12.7 → Versionszeile 1.12.7.

## Karte anlegen (Kapitel 8, nur gesagt)
- [x] a 0:12 · Dashboard bearbeiten, „Karte hinzufügen“, nach „NeonPlan“ suchen (gesagt über dem Karten-Editor)
- [x] a 0:19 · Karte wird mit der Integration automatisch geladen, keine Ressource nötig
- [x] a 0:24 · Visueller Editor: links Optionen, rechts Live-Vorschau; kein YAML nötig
- [x] a 0:32 · Optionen auf dem Standard fehlen im YAML

## Ansicht
- [x] a 0:38 · „Etage“: „Ganzes Haus (Etage antippen zum Öffnen)“ / jede Etage (Liste gezeigt)
- [x] a 0:45 · Start-Etage „Erdgeschoss“
- [x] a 0:49 · „Größe“: „Feste Höhe“ / „Bildschirm füllen“ + Hinweis Panel-Ansicht (fill)
- [x] a 0:59 · „Höhe (Pixel)“ 420 → 760 (height)
- [x] a 1:05 · „Look“: Neon / Blueprint / Tag (theme)
- [x] a 1:10 · „Akzentfarbe“ (Orange) und „Zurück zu Cyan“ (accent)
- [x] a 1:17 · „Wände“: „Wände hoch“ / „Schnitt“ (walls)
- [x] a 1:23 · „Qualität“: Auto / Tablet / Hoch + Hinweis „Tablet ist die sparsamste Stufe“ (quality)
- [x] a 1:32 · Hoch: Lichtkegel unter Spots
- [x] a 1:38 · „Etagen darunter“: Abgedunkelt / Gestapelt / Ausgeblendet am Obergeschoss gezeigt (floor_stack)

## Anzeigen
- [x] a 1:52 · „Symbole“: Keine / Wichtige / Alle (markers)
- [x] a 1:59 · „Heatmap“: Temperatur, Werte am Raumnamen, Normal (Feuchte/CO₂ genannt) (heatmap)
- [x] a 2:07 · „Stromfluss“ / „Hologramme“: Schalter in der Karte / Immer an / Immer aus (flows, holograms); Energie Pro genannt
- [x] a 2:16 · „Schalter in der Karte“ + Auswahl Wände, Etagen, Temperatur, Feuchte, CO₂ (controls)
- [x] a 2:26 · Leiste in der Karte bedient (Temp. / Normal)
- [x] a 2:31 · „Stern mit Zentral-Menü“, Menü geöffnet (central)
- [x] a 2:37 · „Eigene Namen an den Symbolen“ (marker_names)
- [x] a 2:42 · „Mit ausgeblendeten Bedienelementen starten“ + Auge holt alles zurück (controls_hidden)
- [x] a 2:48 · „Bedienelemente ausblenden nach“ 10 s, echte 10 Sekunden gewartet, Berührung zeigt alles (controls_hide_after)
- [x] a 2:59 · „Etagen als Mini-Ansichten“ mit Start-Etage eingeschaltet (floor_thumbs)
- [x] a 3:08 · „Raumnamen anzeigen“ (room_names), „Energiewerte oben anzeigen (Energie Pro)“ (energy)
- [x] a 3:15 · „Raum-Details beim Antippen“: Raumfenster; ohne Haken Raum nur gewählt + „Zurück“ (room_panel)
- [x] a 3:29 · „Vollbild-Taste“ ⛶ oben rechts (fullscreen_button)
- [x] a 3:37 · „Etagen in der Hausansicht auseinanderziehen“ (explode), „Dach beim Heranzoomen ausblenden“ (roof_fade)
- [x] a 3:37 / b 2:12 · „Leistungsanzeige (Bilder pro Sekunde)“ (stats)

## Funktionen
- [x] a 3:46 · „Warnungen anzeigen“ (alerts)
- [x] a 3:56 · „Bei neuer Warnung zum Raum springen“: Rauchmelder Küche, Karte springt (alert_jump)
- [x] a 4:03 · „Szenen-Knöpfe im Raum“ (gezeigt bei a 3:22: Film, Kino, Lesen, Alles aus) (scenes)
- [x] a 4:11 · „Bewegungsspur“ mit Uhrzeiten (motion_trail)
- [x] a 4:16 · Knopf „Kameras“ → Kamera-Wand (camera_wall)
- [x] a 4:23 · „Wetter draußen“ + „Wetter-Entität“, Regen gezeigt (weather, weather_entity)
- [x] a 4:30 · Hinweis Pro-Erweiterungen

## Wandtablet (Kiosk)
- [x] b 0:13 · „Zurück zur Startansicht nach“: Nie / 1 / 2 / 5 / 10 min (idle_return)
- [x] b 0:24 · Hinweis: Karte schließt den Raum und zeigt die Startansicht
- [x] b 0:31 · „Kamerafahrt als Bildschirmschoner“ (idle_orbit)
- [x] b 0:37 · Bad geöffnet, echte Minute gewartet, Rückkehr + Kamerafahrt, Tipp beendet sie
- [x] b 0:48 · „Nachtdimmung“: Aus / Nach Sonnenstand (Sonne unter Horizont → gedimmt) / Zeitraum (night)
- [x] b 0:55 · „Zeitraum (z. B. 22:00-06:00)“ eingetragen
- [x] b 1:01 · „Knopf zu einem Dashboard (Pfad)“ /lovelace/home, ⌂ in der Karte (dashboard)
- [x] b 1:08 · „Beschriftung des Knopfs“ „Start“ (dashboard_label)

## YAML (Code-Editor, als Code-Karte gezeigt)
- [x] b 1:13 · Umschalten auf den Code-Editor in Home Assistant (gesagt)
- [x] b 1:19 · Jede Editor-Option hat ihre Zeile (floor, height, idle_return, idle_orbit, dashboard markiert)
- [x] b 1:23 · floor: og + room: kind → Karte startet im Kinderzimmer (room, floor)
- [x] b 1:30 · start_view: { theta, phi, radius } – Zeile aus Editor → Einstellungen → Startansicht
- [x] b 1:39 · controls_side: right (1.12.7)
- [x] b 1:47 · keep_view: true, Etagenwechsel per Mini-Ansicht (1.12.7)
- [x] b 1:52 · buttons: label / icon / action / target, Knopf „Garten“ im Stern; Aktionen genannt
- [x] b 1:59 · idle_return / controls_hide_after mit freien Sekunden
- [ ] nicht einzeln gezeigt (aber in der Anleitung): explode/roof_fade/fill usw. als YAML-Zeilen – sie stehen im Editor und erzeugen dieselben Zeilen

## Alte und schwache Wandtablets (Kapitel 9)
- [x] b 2:06 · „läuft auch auf alten, schwachen Wandtablets“; „Kein Rechnen im Leerlauf“
- [x] b 2:12 · Leistungsanzeige „Ruhe (0 B/s)“ (groß eingeblendet)
- [x] b 2:22 · Grund für jedes Bild (Farbeffekt einer Lampe)
- [x] b 2:29 · Stufe Tablet: keine Muster, Schatten, Halos, Partikel; Animationen halbe Rate
- [x] b 2:36 · Pixeldichte 1 statt bis zu 2 (Render-Skalierung) – Anzeige „Stufe Tablet, Pixeldichte 1“
- [x] b 2:43 · Auto wählt Tablet auf Fire-Tablets / wenig Speicher / ≤ 4 Kerne
- [x] b 2:50 · Tipp: Fully Kiosk Browser mit Hardwarebeschleunigung, Panel-Ansicht + „Bildschirm füllen“, Qualität Auto
- [x] b 3:00 · Empfehlungsseite (Link in der Beschreibung)
- [x] b 3:05 · Karte am Wandtablet: bildschirmfüllend, ausgeblendete Bedienelemente, Stufe Tablet
- [x] b 3:12 · Hochkant: Raumfenster unten
