Ein kleines Update mit zwei Korrekturen.

### Behoben

- **Startansicht speichern nach mehreren Umdrehungen:** Wer die Kamera mehrmals im Kreis gedreht und dann eine Startansicht für Räume festgelegt hat, bekam „Speichern fehlgeschlagen … theta“. Der Winkel zählt jetzt nur noch eine Umdrehung; auch Änderungen, die noch im Browser warten, lassen sich wieder speichern (#416 von rolandarends).
- **Leuchtkanten an Wandecken:** Die Kanten auf den Wandkronen flimmerten an Ecken und Anschlüssen je nach Blickwinkel, verkürzten sich oder standen ab. Die Wände liegen jetzt minimal hinter ihren Kanten, die Linien bleiben ruhig und durchgehend (#417 von rolandarends).

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).

---

A small update with two fixes.

### Fixed

- **Saving a start view after several turns:** after turning the camera round several times and setting a start view for rooms, saving failed with "… theta". The angle now counts once round; changes still waiting in the browser can be saved again (#416 by rolandarends).
- **Glowing edges at wall corners:** the edges on the wall tops flickered at corners and joints depending on the view, shortened or stuck out. The walls now sit a hair behind their edges, the lines stay calm and continuous (#417 by rolandarends).

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).
