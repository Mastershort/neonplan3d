### Neu

- **Energie Pro: jede Anlage behält ihre Karte.** Die Anlage, an deren Solarfeld das Haupthologramm hängt, verlor bisher ihre eigene Anlagenkarte – bei mehreren Balkonkraftwerken fehlte so immer eine. Jetzt bekommt jeder Wechselrichter seine Karte (Leistung, Tageskurve, Akku); die Hausbilanz rückt neben das Feld, solange du sie nicht selbst versetzt hast (#128 von denisb88).
- **Energie Pro: Hausbilanz frei im Plan.** Im Abschnitt **Hologramm** des Energie-Werkzeugs gibt es „Frei im Plan“: ein Griff ◈ im Plan, dazu die Höhe über dem Boden – die Karte schwebt dann, wo du willst, etwa über der Terrasse (#128).
- **Energie Pro: Schalter je Wechselrichter** „Anlagenkarte zeigen“ im Wechselrichter-Formular (#128).
- Die 3D-Ansicht des Editors zeigt im Energie-Werkzeug die Hologramme, damit man beim Verschieben sieht, wo sie landen.

### Behoben

- **Kamera-Wand** (Kamera-Cockpit): Die Kacheln teilen sich die Wand je nach Kamerazahl – eine Kamera füllt sie, zwei stehen nebeneinander, bis vier als Raster 2×2 – statt klein in der Ecke zu sitzen. Antippen zeigt die Kamera groß, als **Livestream** über den Player von Home Assistant (die Kacheln bleiben Standbilder, ein kleiner Hinweis sagt es); von dort „Durch die Kamera schauen“ in die 3D-Ansicht, und „Zurück zur Ansicht“ bringt die Wand zurück. Vorher blieb die Wand beim Durchschauen offen.
- Beim Durchschauen in 3D steht in der Leiste, dass das Bild ein Standbild ist (alle 5 s neu, auf der Tablet-Stufe alle 10 s).
- **Türformular:** Der Haken „Ohne Sensor geschlossen zeigen“ fehlte – er saß im Sensorblock, den nur Fenster haben. Positions-Sensor und „Vor dem Schalten nachfragen“ erscheinen erst, wenn ein Antrieb gesetzt oder gefunden ist; das Feld heißt bei Türen und Toren jetzt „Antrieb“.
- **Wandhöhen:** Die Zeilen im Raumformular sind wieder sauber angeordnet (Name und Höhe, darunter die Knöpfe, ein Teilpunkt in eigener Zeile), statt dass die Schere aus der Reihe rutscht.

---

### New

- **Energy Pro: every plant keeps its card.** The plant whose solar field carried the main hologram lost its own plant card – with several balcony plants one was always missing. Now every inverter gets its card (power, day curve, battery); the house balance steps aside next to the field unless you moved it yourself (#128 by denisb88).
- **Energy Pro: the house balance can hang free in the plan.** The **Hologram** section of the energy tool offers "Free in the plan": a handle ◈ in the plan plus the height above the ground – the card floats where you want it, say over the terrace (#128).
- **Energy Pro: a switch per inverter** "Show the plant card" in the inverter form (#128).
- The editor's 3D view shows the holograms in the energy tool, so you see where they land while moving them.

### Fixed

- **Camera wall** (camera cockpit): the tiles share the wall by camera count – one camera fills it, two sit side by side, up to four in a 2×2 grid – instead of sitting small in a corner. A tap shows that camera big as a **live stream** through Home Assistant's own player (the tiles stay stills, a small note says so); from there "Look through the camera" enters the 3D view, and "Back to the view" brings the wall back. Before, the wall stayed open while looking through.
- The look-through bar in 3D says that the picture is a still (refreshed every 5 s, every 10 s on the tablet level).
- **Door form:** the switch "Show closed without a sensor" was missing – it sat in the window-only sensor block; the drive's position sensor and confirm switch show only once a drive is set or found; the drive field is called "Drive" for doors and gates.
- **Wall heights:** the rows in the room form lay out cleanly again (name and height, the buttons below, a split point in its own line) instead of the cut button slipping out of line.
