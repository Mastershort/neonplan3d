## NeonPlan 3D 2.0.6 – Door angles and fixes

### New

- **Opening angle for doors.** Every door in the editor has an **Opening angle** field: Default, 15°, 30°, 45°, 60° or 90°. Without a sensor the leaf stands that far open, with a sensor it opens that far as soon as the sensor reports "open". **Default** stays exactly as before. Thanks to David on Discord for the wish!
- **Warning for unavailable contacts (off by default).** When a window or door contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Switch on **Warn when a window or door contact is unavailable** in the editor's settings under **Weather & warnings**, and a warning names the contact. A short gap while Home Assistant restarts does not warn.

### Fixed

- **Module updates that wait for approval.** A fetched module update was offered in the shop list as "Update available" again, and the button only fetched it once more. The list now says the update waits for your approval and opens **View update & approve** directly. Thanks to @Luft86 and @underthewheel (#805, #707)!
- **Pictures on small smart displays.** The cover or picture on a small screen now fills it with a slim frame instead of a thick border. Thanks to @tomv79 (#799)!
- **Stretching cabinets with drawers.** Drawers, doors and shelves of a stretched item grow evenly instead of only the top or bottom one. Thanks to @daene85 (#801)!
- **Doors in split inner walls.** A door wider than its piece of an inner wall reaches into the next piece when the wall carries straight on, instead of being squeezed.
- **"Mark as put out" on bins.** The button now really takes the tap. Thanks to @246tbwpjzk-cell (#793)!
- **Camera wedge on sunken floors.** The field-of-view wedge lies on the ground it falls on (lawn, terrain) instead of going into the ground. Thanks to @BudBundi (#802)!

Found a problem? Please open an [issue on GitHub](https://github.com/Mastershort/neonplan3d/issues).

### How to update

Settings → System → Updates. HACS only checks for new versions every few hours, so a fresh update is sometimes missing there. If it is: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

## NeonPlan 3D 2.0.6 – Türwinkel und Korrekturen

### Neu

- **Öffnungswinkel für Türen.** Jede Tür hat im Editor das Feld **Öffnungswinkel**: Standard, 15°, 30°, 45°, 60° oder 90°. Ohne Sensor steht das Türblatt so weit offen, mit Sensor öffnet es so weit, sobald er „offen“ meldet. **Standard** bleibt genau wie bisher. Danke an David auf Discord für den Wunsch!
- **Warnung bei nicht verfügbaren Kontakten (ab Werk aus).** Meldet ein Fenster- oder Türkontakt 10 Minuten lang „nicht verfügbar“ (leere Batterie, außer Funkreichweite), sieht das Fenster in 3D zu aus, obwohl es niemand weiß. Schaltest du in den Editor-Einstellungen unter **Wetter & Warnungen** den Haken **Warnen, wenn ein Fenster- oder Türkontakt nicht verfügbar ist** ein, kommt dann eine Warnung mit dem Namen des Kontakts. Ein kurzer Aussetzer beim Neustart von Home Assistant warnt nicht.

### Behoben

- **Modul-Updates, die auf die Freigabe warten.** Ein schon geholtes Modul-Update stand in der Shop-Liste weiter als „Update verfügbar“, und der Knopf hat es nur noch einmal geholt. Jetzt steht dort, dass das Update auf deine Freigabe wartet, und der Knopf öffnet direkt **Update ansehen & freigeben**. Danke an @Luft86 und @underthewheel (#805, #707)!
- **Bilder auf kleinen Smart Displays.** Cover oder Bild auf einem kleinen Bildschirm füllen ihn jetzt mit schmalem Rand statt mit dickem Rahmen. Danke an @tomv79 (#799)!
- **Schränke mit Schubladen strecken.** Schubladen, Türen und Fächer eines gestreckten Möbels wachsen gleichmäßig mit, statt nur die oberste oder unterste. Danke an @daene85 (#801)!
- **Türen in geteilten Innenwänden.** Eine Tür, die breiter ist als ihr Stück Innenwand, reicht ins nächste Stück, wenn die Wand gerade weiterläuft, statt gequetscht zu werden.
- **„Als rausgestellt markieren“ bei Mülltonnen.** Der Knopf nimmt den Tipp jetzt wirklich an. Danke an @246tbwpjzk-cell (#793)!
- **Kamerakegel bei versenkten Etagen.** Der Sichtkegel liegt auf dem Boden, auf den er fällt (Rasen, Gelände), statt im Boden zu verschwinden. Danke an @BudBundi (#802)!

Ein Problem gefunden? Bitte schreib ein [Issue auf GitHub](https://github.com/Mastershort/neonplan3d/issues).

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
