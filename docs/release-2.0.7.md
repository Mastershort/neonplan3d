## NeonPlan 3D 2.0.7 – 📢 Your house speaks: Announcements

### 📢 New: Announcements (beta)

**"Dinner is ready!" – and exactly the room that should hear it, hears it.**

Every room with a speaker gets a 📢 button right above the speaker in the 3D view. Tap it, tap a sentence – and the Echo, the Voice PE or the Sonos in that room says it. No app, no routine, no shouting up the stairs.

![📢 buttons over the speakers](https://github.com/Mastershort/neonplan3d/releases/download/v2.0.7/announcements-buttons.png)

- **One tap per room:** the 📢 over the speaker, or **📢 Announcement** in the room's panel.
- **Your own sentences:** "Dinner is ready!", "Time for bed!", "The dog needs to go out!" – add your own, remove the ones you don't need (no kids doing homework any more? Out it goes).
- **Type it or say it:** your own words, or speak into the 🎙 microphone.
- **Whole house or only where someone is:** from the ⭐ menu to every room, or only to the rooms someone is in right now (presence, motion, locating).
- **Echos** make a real announcement with their chime, **voice satellites like the Home Assistant Voice PE** announce too, every other speaker talks through Home Assistant's text-to-speech.
- **The right speaker on its own:** the one placed in the room; TVs and switched-off devices are never chosen by themselves. Pick a different one per room whenever you like.

![An announcement for the kitchen](https://github.com/Mastershort/neonplan3d/releases/download/v2.0.7/announcements-sheet.png)

**Beta – Supporter Pass holders get it first.** Install it under **Extensions**, then switch on "📢 right in the room" in ⚙ Settings. Everyone else gets it in the shop once the beta is done. Tell us how it works on [GitHub](https://github.com/Mastershort/neonplan3d/issues)!

### Also new

- **Sun path and house shadow.** A glowing arc around the house shows the sun's way today – red at the horizon, warm white high up – with sunrise and sunset at its ends and the sun as a glowing orb with rays. On the ground lies the house's shadow and wanders with the sun, so you see when the terrace gets sun. A compass ring with N, E, S, W lies on the ground. Needs the north direction and your home's location in Home Assistant.
- **Windows glow outside at night.** When it is dark, the light of lit rooms falls out of the ground floor's windows as a warm glow onto the lawn and terrace – in the room's light colour, softer behind lowered blinds.
- **⚙ Settings right in the 3D view.** The ⭐ central menu now has **⚙ Settings**: sun & night, window light, sunlight through the windows and the warnings – without opening the editor. Every module with settings gets its own section there. Only administrators can change them.
- **Heat Pro leaves the beta.** The heat pump as a system in 3D – heat pump, flow and return pipes, glowing radiators and underfloor zones, ground collector, one card with COP and costs, demo mode – is now in the shop for 7.90 € (included in the Supporter Pass). Thanks to everyone who tested it!
- **Choose a camera's detection sensors.** In a camera's form you can now pick exactly which sensors count for its detection pins, the motion trail and the live director – also sensors of another device, e.g. Frigate's person sensor for a Reolink camera. Thanks to @frops83 (#815)!

### Fixed

- **A camera shown as furniture.** The model you choose is now the camera's look: choosing again replaces it instead of adding another item, it moves and turns with the camera, and the built-in camera model hides. **Built-in camera model** in the same list brings it back. Thanks to @EduK85 (#779)!
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

## NeonPlan 3D 2.0.7 – 📢 Dein Haus spricht: Durchsagen

### 📢 Neu: Durchsagen (Beta)

**„Essen ist fertig!“ – und genau der Raum, der es hören soll, hört es.**

Jeder Raum mit Lautsprecher bekommt in der 3D-Ansicht einen 📢-Knopf direkt über dem Lautsprecher. Antippen, Satz antippen – und der Echo, der Voice PE oder der Sonos in dem Raum sagt ihn. Keine App, keine Routine, kein Rufen durchs Treppenhaus.

![📢-Knöpfe über den Lautsprechern](https://github.com/Mastershort/neonplan3d/releases/download/v2.0.7/announcements-buttons.png)

- **Ein Tipp pro Raum:** das 📢 über dem Lautsprecher oder **📢 Durchsage** im Raumfenster.
- **Deine eigenen Sätze:** „Essen ist fertig!“, „Zeit fürs Bett!“, „Der Hund muss raus!“ – eigene dazu, unpassende raus (keine Hausaufgaben mehr im Haus? Weg damit).
- **Tippen oder sprechen:** eigener Text oder einfach ins 🎙 Mikrofon.
- **Ganzes Haus oder nur, wo jemand ist:** aus dem ⭐ Menü an alle Räume oder nur dorthin, wo gerade jemand ist (Präsenz, Bewegung, Ortung).
- **Echos** machen eine echte Durchsage mit Gong, **Sprach-Satelliten wie der Home Assistant Voice PE** ebenso, alle anderen Lautsprecher sprechen über die Sprachausgabe von Home Assistant.
- **Der richtige Lautsprecher von selbst:** der, der im Raum steht; Fernseher und ausgeschaltete Geräte nimmt NeonPlan nie von allein. Pro Raum lässt sich jederzeit ein anderer wählen.

![Eine Durchsage für die Küche](https://github.com/Mastershort/neonplan3d/releases/download/v2.0.7/announcements-sheet.png)

**Beta – zuerst für alle mit dem Supporter-Pass.** Unter **Erweiterungen** installieren, dann in ⚙ Einstellungen „📢 auch direkt im Raum zeigen“ einschalten. Alle anderen bekommen es nach der Beta im Shop. Sag uns auf [GitHub](https://github.com/Mastershort/neonplan3d/issues), wie es läuft!

### Außerdem neu

- **Sonnenbahn und Hausschatten.** Ein leuchtender Bogen um das Haus zeigt den Weg der Sonne heute – rot am Horizont, warmweiß hoch oben –, mit Auf- und Untergang an seinen Enden und der Sonne als glühende Kugel mit Strahlen. Auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne: So siehst du, wann die Terrasse Sonne hat. Dazu ein Kompassring mit N, O, S, W. Braucht die Nordrichtung und den Ort deines Zuhauses in Home Assistant.
- **Fenster leuchten nachts nach draußen.** Ist es dunkel, fällt das Licht beleuchteter Räume durch die Fenster im Erdgeschoss als warmer Schein auf Rasen und Terrasse – in der Lichtfarbe des Raums, schwächer hinter heruntergelassenen Rollläden.
- **⚙ Einstellungen direkt in der 3D-Ansicht.** Das ⭐ Zentral-Menü hat jetzt **⚙ Einstellungen**: Sonne & Nacht, Fensterlicht, Sonnenlicht durch die Fenster und die Warnungen – ohne den Editor zu öffnen. Jedes Modul mit Einstellungen bekommt dort seinen eigenen Abschnitt. Ändern dürfen sie nur Administratoren.
- **Wärme Pro ist aus der Beta.** Die Wärmepumpe als System in 3D – Wärmepumpe, Vor- und Rücklauf, leuchtende Heizkörper und Fußbodenkreise, Erdkollektor, eine Karte mit COP und Kosten, Demo-Modus – gibt es jetzt im Shop für 7,90 € (im Supporter-Pass dabei). Danke an alle, die getestet haben!
- **Erkennungs-Sensoren einer Kamera wählen.** Im Formular einer Kamera wählst du jetzt genau, welche Sensoren für Erkennungs-Pins, Bewegungsspur und Live-Regie zählen – auch Sensoren eines anderen Geräts, etwa Frigates Personen-Sensor für eine Reolink-Kamera. Danke an @frops83 (#815)!

### Behoben

- **Kamera als Möbel darstellen.** Das gewählte Modell ist jetzt das Aussehen der Kamera: Eine neue Auswahl ersetzt es, statt ein weiteres Möbel dazuzulegen, es wandert und dreht sich mit der Kamera, und das eingebaute Kamera-Modell verschwindet. **Standard-Kameramodell** in derselben Liste holt es zurück. Danke an @EduK85 (#779)!
- **Editor-Fehler „Cannot convert undefined or null to object“.** Er kam, wenn der gewählte Raum, die Tür oder das Möbel nicht auf der gezeigten Etage lag (nach Etagenwechsel, Rückgängig oder Löschen). Die Nutzungsberichte zeigten ihn bei rund 20 Installationen – danke an alle, die sie eingeschaltet haben!
- **Raumfenster mit gelöschtem Gerät.** Ein Gerät, das im Plan steht, aber in Home Assistant gelöscht wurde, bringt das Raumfenster nicht mehr zum Absturz.
- **Wärme Pro: Auswahllisten am PC.** Die Auswahllisten im Formular der Wärmepumpe klappten sofort wieder zu, und die Rechenlast stieg: Das Formular eines Moduls wurde bei jeder Zustandsänderung neu gebaut. Jetzt nur noch, wenn sich Plan oder Geräte ändern. Danke an @frops83 (#815)!
- **Echo-Karten, die stundenlang stehen blieben.** Die Karte eines pausierten Players verschwindet jetzt nach zehn Minuten – Echos bleiben nach dem Stoppen oft stundenlang auf „pausiert“. Danke an @frops83 (#815)!
- **Bewegungsmelder aus dem Smart-Home-Paket.** Die Sensor-Modelle des Pakets (Bewegung, Präsenz, Kontakt, Leck …) lassen sich jetzt mit jedem Sensor verknüpfen, auch ohne Klasse, etwa von Local Tuya. Danke an @vinimeca (#810)!
- **Redox am Pool.** Eine Redox-Sonde, die eine Spannung in mV meldet, steht jetzt wie pH und Temperatur am Pool. Danke an @Deninho91 (#814)!

Ein Problem gefunden? Bitte schreib ein [Issue auf GitHub](https://github.com/Mastershort/neonplan3d/issues).

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
