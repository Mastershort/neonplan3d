## NeonPlan 3D 2.0.7 – Sun & night, settings at hand, announcements

### New

- **Sun path and house shadow.** A glowing arc around the house shows the sun's way today – red at the horizon, warm white high up – with sunrise and sunset at its ends and the sun as a glowing orb with rays. On the ground lies the house's shadow and wanders with the sun, so you see when the terrace gets sun. A compass ring with N, E, S, W lies on the ground. Needs the north direction and your home's location in Home Assistant.
- **Windows glow outside at night.** When it is dark, the light of lit rooms falls out of the ground floor's windows as a warm glow onto the lawn and terrace – in the room's light colour, softer behind lowered blinds.
- **⚙ Settings right in the 3D view.** The ⭐ central menu now has **⚙ Settings**: sun & night, window light, sunlight through the windows and the warnings – without opening the editor. Every module with settings gets its own section there. Only administrators can change them.
- **Announcements module (in the shop, 3.90 €, included in the Supporter Pass).** Tap a room, tap **📢 Announcement**, tap "Dinner is ready!" – and the speaker in that room says it. Ready sentences, your own words or spoken into the microphone; from the ⭐ menu to all rooms or only where someone is. Echos make a real announcement with a chime, other speakers talk through Home Assistant's text-to-speech. Choose the speaker per room in the editor.
- **Choose a camera's detection sensors.** In a camera's form you can now pick exactly which sensors count for its detection pins, the motion trail and the live director – also sensors of another device, e.g. Frigate's person sensor for a Reolink camera. Thanks to @frops83 (#815)!

### Fixed

- **Editor error "Cannot convert undefined or null to object".** It came when the selected room, door or piece of furniture was not on the floor shown (after switching floors, undo or deleting). The usage reports showed it on about 20 installations – thanks to everyone who switched them on!
- **Room panel with a removed device.** An entity placed in the plan but since removed from Home Assistant no longer breaks the room's panel.
- **Wärme Pro's lists on the PC.** The selection lists of the heat pump's form closed at once and the CPU load went up: a module's form was made anew on every state change. It is now made only when the plan or the devices change. Thanks to @frops83 (#815)!
- **Echo cards that stayed for hours.** A paused player's card now goes after ten minutes – Echos stay "paused" for hours after the music was stopped. Thanks to @frops83 (#815)!
- **Motion sensors of the Smart Home pack.** The pack's sensor models (motion, presence, contact, leak …) can now be linked to any sensor, also one without a class, such as Local Tuya's. Thanks to @vinimeca (#810)!
- **Redox at the pool.** A redox probe that reports a voltage in mV now shows at the pool like pH and temperature. Thanks to @Deninho91 (#814)!

Found a problem? Please open an [issue on GitHub](https://github.com/Mastershort/neonplan3d/issues).

### How to update

Settings → System → Updates. HACS only checks for new versions every few hours, so a fresh update is sometimes missing there. If it is: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

## NeonPlan 3D 2.0.7 – Sonne & Nacht, Einstellungen griffbereit, Durchsagen

### Neu

- **Sonnenbahn und Hausschatten.** Ein leuchtender Bogen um das Haus zeigt den Weg der Sonne heute – rot am Horizont, warmweiß hoch oben –, mit Auf- und Untergang an seinen Enden und der Sonne als glühende Kugel mit Strahlen. Auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne: So siehst du, wann die Terrasse Sonne hat. Dazu ein Kompassring mit N, O, S, W. Braucht die Nordrichtung und den Ort deines Zuhauses in Home Assistant.
- **Fenster leuchten nachts nach draußen.** Ist es dunkel, fällt das Licht beleuchteter Räume durch die Fenster im Erdgeschoss als warmer Schein auf Rasen und Terrasse – in der Lichtfarbe des Raums, schwächer hinter heruntergelassenen Rollläden.
- **⚙ Einstellungen direkt in der 3D-Ansicht.** Das ⭐ Zentral-Menü hat jetzt **⚙ Einstellungen**: Sonne & Nacht, Fensterlicht, Sonnenlicht durch die Fenster und die Warnungen – ohne den Editor zu öffnen. Jedes Modul mit Einstellungen bekommt dort seinen eigenen Abschnitt. Ändern dürfen sie nur Administratoren.
- **Modul Durchsagen (im Shop, 3,90 €, im Supporter-Pass dabei).** Raum antippen, **📢 Durchsage**, „Essen ist fertig!“ antippen – und der Lautsprecher in dem Raum sagt es. Fertige Sätze, eigener Text oder ins Mikrofon gesprochen; aus dem ⭐ Menü an alle Räume oder nur dorthin, wo gerade jemand ist. Echos machen eine echte Durchsage mit Gong, andere Lautsprecher sprechen über die Sprachausgabe von Home Assistant. Den Lautsprecher wählst du pro Raum im Editor.
- **Erkennungs-Sensoren einer Kamera wählen.** Im Formular einer Kamera wählst du jetzt genau, welche Sensoren für Erkennungs-Pins, Bewegungsspur und Live-Regie zählen – auch Sensoren eines anderen Geräts, etwa Frigates Personen-Sensor für eine Reolink-Kamera. Danke an @frops83 (#815)!

### Behoben

- **Editor-Fehler „Cannot convert undefined or null to object“.** Er kam, wenn der gewählte Raum, die Tür oder das Möbel nicht auf der gezeigten Etage lag (nach Etagenwechsel, Rückgängig oder Löschen). Die Nutzungsberichte zeigten ihn bei rund 20 Installationen – danke an alle, die sie eingeschaltet haben!
- **Raumfenster mit gelöschtem Gerät.** Ein Gerät, das im Plan steht, aber in Home Assistant gelöscht wurde, bringt das Raumfenster nicht mehr zum Absturz.
- **Wärme Pro: Auswahllisten am PC.** Die Auswahllisten im Formular der Wärmepumpe klappten sofort wieder zu, und die Rechenlast stieg: Das Formular eines Moduls wurde bei jeder Zustandsänderung neu gebaut. Jetzt nur noch, wenn sich Plan oder Geräte ändern. Danke an @frops83 (#815)!
- **Echo-Karten, die stundenlang stehen blieben.** Die Karte eines pausierten Players verschwindet jetzt nach zehn Minuten – Echos bleiben nach dem Stoppen oft stundenlang auf „pausiert“. Danke an @frops83 (#815)!
- **Bewegungsmelder aus dem Smart-Home-Paket.** Die Sensor-Modelle des Pakets (Bewegung, Präsenz, Kontakt, Leck …) lassen sich jetzt mit jedem Sensor verknüpfen, auch ohne Klasse, etwa von Local Tuya. Danke an @vinimeca (#810)!
- **Redox am Pool.** Eine Redox-Sonde, die eine Spannung in mV meldet, steht jetzt wie pH und Temperatur am Pool. Danke an @Deninho91 (#814)!

Ein Problem gefunden? Bitte schreib ein [Issue auf GitHub](https://github.com/Mastershort/neonplan3d/issues).

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
