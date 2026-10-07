Start views for every room, a few switches people asked for, and a community on Discord.

### New

- **Start view per room:** a room can open in 3D exactly the way you want it – angle, zoom and framing. Turn on *3D beside*, turn and zoom in on the room, then tap **View as this room's start** in the room form. Tapping the room in 3D flies there; ↺ removes it (#282 by RobertSorgenfrei).
- **Start views keep the framing:** the start view of the house and of a floor now also remembers the point the camera looks at, not only angle and zoom. Move the house in the 3D pane and remember the view again (#206 by janoschbatschi).
- **Sunlight through the windows can be switched off:** Settings → **Sunlight through the windows** (#266 by ciechompl).
- **Hologram cards seen from behind:** they stay mirrored like a pane of glass by default; switch off **Mirrored from behind (like glass)** in the hologram settings to keep them readable from everywhere (#271 by barney798).
- **Community on Discord:** show your 3D home, ask and help each other – https://discord.gg/SSdVVFsev7 (also linked in the editor's help section and on the Extensions page).

### Fixed

- **Select fields showed an old value** after switching items: give room A an area, tap room B, and B's field still showed A's area (the saved data was right). This affected every select field in the editor.
- **Robot vacuum with dock** (Smart Home pack) offers your vacuum entity and glows while cleaning (#273 by ElVincenco).
- **Motorised curtain** (pack) can follow a cover entity and glows while open; moving curtains are planned (#286 by frops83).
- Heatmap legend: no wrong "no matching sensors" line on the first tap, and it no longer hides behind the star button.
- The button "Add rooms from HA areas" shows the number in brackets instead of "1 rooms".
- Online demo: furniture from packs the demo doesn't have no longer stands in the garden as grey boxes.

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

Startansichten für jeden Raum, ein paar gewünschte Schalter und eine Community auf Discord.

### Neu

- **Startansicht pro Raum:** Ein Raum öffnet sich in 3D genau so, wie du willst – Blickwinkel, Zoom und Bildausschnitt. *3D daneben* einschalten, den Raum drehen und heranzoomen, dann im Raum-Formular **Ansicht als Start des Raums** tippen. Antippen in 3D fliegt dorthin, ↺ nimmt es zurück (#282 von RobertSorgenfrei).
- **Startansichten merken sich den Bildausschnitt:** Die Startansicht von Haus und Etage merkt sich jetzt auch den Punkt, auf den die Kamera schaut, nicht nur Blickwinkel und Zoom. Haus in der 3D-Ansicht verschieben und die Ansicht neu merken (#206 von janoschbatschi).
- **Sonnenlicht durch die Fenster abschaltbar:** Einstellungen → **Sonnenlicht durch die Fenster** (#266 von ciechompl).
- **Hologramm-Karten von hinten:** Standardmäßig bleiben sie gespiegelt wie eine Glasscheibe; mit **Von hinten gespiegelt (wie Glas)** in den Hologramm-Einstellungen aus bleiben sie von überall lesbar (#271 von barney798).
- **Community auf Discord:** dein 3D-Zuhause zeigen, fragen, sich gegenseitig helfen – https://discord.gg/SSdVVFsev7 (auch verlinkt im Editor unter Hilfe und auf der Seite Erweiterungen).

### Behoben

- **Auswahlfelder zeigten einen alten Wert** nach dem Wechsel: Raum A einen Bereich geben, Raum B antippen – im Feld stand noch der Bereich von A (gespeichert war es richtig). Das betraf alle Auswahlfelder im Editor.
- **Saugroboter mit Station** (Smart-Home-Pack) bietet deinen Saugroboter an und leuchtet, während er saugt (#273 von ElVincenco).
- **Vorhang motorisiert** (Pack) kann einer Cover-Entität folgen und leuchtet, solange er offen ist; fahrende Vorhänge sind geplant (#286 von frops83).
- Heatmap-Legende: kein falsches „Keine passenden Sensoren“ beim ersten Antippen, und sie liegt nicht mehr hinter dem Stern-Knopf.
- Der Knopf „Räume aus HA-Bereichen anlegen“ zeigt die Anzahl in Klammern statt „1 Räume“.
- Online-Demo: Möbel aus Packs, die die Demo nicht hat, stehen nicht mehr als graue Kisten im Garten.

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
