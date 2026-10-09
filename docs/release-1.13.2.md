A small update with fixes and a wish from the issues of the last hours.

### New

- **Shorter warnings:** Editor → Settings → **Show device names in warnings**. Switched off, the banner reads "Guest WC · Window open in the rain" instead of "Guest WC · Window open in the rain: Guest bathroom window" – shorter on a wall tablet. A warning without a room keeps the device name. On by default (#374 by sjess).

### Fixed

- **Ceiling height per room:** the glow points of ceiling, panel and pendant lamps sat at the floor height, so in a low room beside a taller one they floated above the lamp (#372 by wiesi12).
- **Colour effects of lights that report no colour** (e.g. Nanoleaf during an effect) now run through real colours instead of staying white (#373 by sjess).
- **Ceiling height per room above the floor height:** a vaulted room open to the roof (e.g. 4.5 m in an attic of 2.35 m) – its pendant and ceiling lamps now hang from that ceiling or from the roof underside above them instead of stopping at the floor height (#379 by Twilight-Networks).
- **Room buttons without a name:** a room whose name is empty no longer leaves an empty button in the room bar (#370 by pepeelpl).
- **Car Pro – lock:** the lock role also takes a text sensor like BMW's door lock state (`LOCKED`, `SECURED`, `UNLOCKED`); a binary sensor of class lock now counts "on" as unlocked, as in Home Assistant (#369 by ElVincenco).
- **Doors and windows in free walls outside the rooms** (outer walls drawn with the wall tool, rooms without walls of their own) now open and close with the contact chosen for them (#367 by ge8020).

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

Ein kleines Update mit Korrekturen und einem Wunsch aus den Issues der letzten Stunden.

### Neu

- **Kürzere Warnungen:** Editor → Einstellungen → **Gerätenamen in Warnungen zeigen**. Ausgeschaltet steht im Banner „Gäste-WC · Fenster offen bei Regen“ statt „Gäste-WC · Fenster offen bei Regen: Fenster Gästebad“ – kürzer auf dem Wandtablet. Eine Warnung ohne Raum behält den Gerätenamen. Von Haus aus an (#374 von sjess).

### Behoben

- **Deckenhöhe pro Raum:** Die Leuchtpunkte von Decken-, Panel- und Pendelleuchten saßen auf der Höhe der Etage und schwebten deshalb in einem niedrigen Raum neben einem höheren über der Lampe (#372 von wiesi12).
- **Farbeffekte von Lichtern, die keine Farbe melden** (z. B. Nanoleaf während eines Effekts), laufen jetzt durch echte Farben, statt weiß zu bleiben (#373 von sjess).
- **Deckenhöhe pro Raum über der Etagenhöhe:** ein Raum offen bis unters Dach (z. B. 4,5 m in einem Dachgeschoss mit 2,35 m) – seine Pendel- und Deckenleuchten hängen jetzt an dieser Decke bzw. an der Dachunterseite darüber, statt an der Etagenhöhe zu enden (#379 von Twilight-Networks).
- **Raum-Knöpfe ohne Namen:** Ein Raum mit leerem Namen hinterlässt keinen leeren Knopf mehr in der Raumleiste (#370 von pepeelpl).
- **Auto Pro – Schloss:** Die Rolle Schloss nimmt auch einen Text-Sensor wie den Türschloss-Zustand von BMW (`LOCKED`, `SECURED`, `UNLOCKED`); ein Binärsensor der Klasse Schloss zählt „an“ jetzt als entriegelt, wie in Home Assistant (#369 von ElVincenco).
- **Türen und Fenster in freistehenden Wänden außerhalb der Räume** (Außenwände mit dem Werkzeug „Wand“ gezeichnet, Räume ohne eigene Wände) öffnen und schließen sich jetzt mit dem für sie gewählten Kontakt (#367 von ge8020).

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
