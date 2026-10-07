A small round of fixes – mostly for Energy Pro and the dashboard card.

### Fixed

- **Dashboard card after an app start:** the card could show *"Custom element doesn't exist: neonplan3d-card"* until the NeonPlan page was opened. The card's script is now also kept in the dashboard resources, so dashboards wait for it; an older copy of the script there is pointed to the current one (#252 by TheRev-ha and RobertSorgenfrei).
- **Energy Pro with a single floor:** the plant cards (solar, balance) show in the 3D view and the card, not only in the editor (#255 by Kohhal).
- **Energy Pro:** a grid connection mounted on a wall – the grid cable starts at its height instead of on the ground, and its pin sits there too (#256 by Kohhal).
- **Solar fields** moved to another roof face (e.g. after replacing a flat roof) keep their modules – rows, columns, format and tilt (#258 by rolandarends).
- **"State from"** (occupancy mats, a lit top while something is on) is offered for every piece of furniture again, also a plain bed or armchair (#116 by hahne-t).
- **Pro add-ons on an older NeonPlan 3D:** the shop now answers with a readable "please update NeonPlan 3D first" message instead of a cryptic error; NeonPlan 3D now also sends its version along.

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

Eine kleine Fehlerrunde – vor allem für Energie Pro und die Dashboard-Karte.

### Behoben

- **Dashboard-Karte nach dem App-Start:** Die Karte konnte *„Custom element doesn't exist: neonplan3d-card“* zeigen, bis man die NeonPlan-Seite geöffnet hatte. Das Skript der Karte steht jetzt zusätzlich in den Dashboard-Ressourcen, so wartet das Dashboard auf sie; eine ältere Kopie des Skripts dort wird auf die aktuelle umgestellt (#252 von TheRev-ha und RobertSorgenfrei).
- **Energie Pro mit nur einer Etage:** Die Anlagenkarten (Solar, Bilanz) erscheinen in der 3D-Ansicht und in der Karte, nicht nur im Editor (#255 von Kohhal).
- **Energie Pro:** Ein an der Wand montierter Netzanschluss – die Netzleitung beginnt auf seiner Höhe statt am Boden, und der Pin sitzt auch dort (#256 von Kohhal).
- **Solarfelder**, die einer anderen Dachfläche zugeordnet werden (z. B. nach dem Ersetzen eines Flachdachs), behalten ihre Module – Reihen, Spalten, Format und Aufständerung (#258 von rolandarends).
- **„Zustand von“** (Belegungsmatten, eine leuchtende Oberseite, solange etwas an ist) gibt es wieder bei jedem Möbel, auch beim einfachen Bett oder Sessel (#116 von hahne-t).
- **Pro-Erweiterungen auf einer älteren NeonPlan-Version:** Der Shop antwortet jetzt mit einer verständlichen Meldung „bitte zuerst NeonPlan 3D aktualisieren“ statt eines kryptischen Fehlers; NeonPlan 3D schickt dafür jetzt auch seine Version mit.

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
