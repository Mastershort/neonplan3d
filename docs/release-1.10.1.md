### Neu

- **Eigener Name für ein platziertes Gerät** im Plan, ohne die Entität in Home Assistant umzubenennen (#125 von RobertSorgenfrei).
- **Etage um 90° drehen** im Etagenformular, wenn eine Etage verdreht gezeichnet wurde (Diskussion #120 von MStengel69).
- **Karte:** `room:` startet die Karte in einem Raum, z. B. ein Display fürs Kinderzimmer (Diskussion #119 von HeroHoshy).
- Eine Dachschräge, die bis ins Geschoss unter dem Dachgeschoss reicht, schneidet auch dessen Wände (Diskussion #75, idaho).
- **Kamera-Cockpit 2** – ein kostenloses Update der Pro-Erweiterung: **Erkennungs-Pins** – was die Sensoren einer Kamera gerade sehen (Person, Fahrzeug, Tier, Bewegung – Frigate, UniFi Protect, Reolink …), steht als Pin mit Uhrzeit vor der Kamera; die **Kamera-Wand** – alle Livebilder der platzierten Kameras auf einmal (Schalter „Kameras“, Karten-Option `camera_wall`), Bewegung rot gerahmt, Aufnahme markiert; Antippen schaut durch die Kamera.

### Behoben

- Eine Kamera knapp innerhalb einer Außenwand, die nach draußen schaut, bekam ihren Sichtkegel von dieser Wand abgeschnitten (20 cm lang); die Wand, an der die Kamera hängt, zählt jetzt nicht mehr.
- Die Versionsmeldung sagt jetzt, welche Seite hinterherhinkt: Ein altes Bundle im Browser oder in der Companion-App bekommt „Seite neu laden“ mit Knopf (und dem Cache-Hinweis für die Companion-App) statt „Home Assistant neu starten“; beide Versionen werden genannt. Ein Pack mit einer Pro-Funktion, die dieses Frontend noch nicht kennt, sagt das, statt wie ein Möbel-Pack auszusehen (Support-Fall).

---

### New

- **Own name for a placed device** in the plan, without renaming the entity in Home Assistant (#125 by RobertSorgenfrei).
- **Turn a floor by 90°** in the floor form, for a floor drawn the wrong way round (discussion #120 by MStengel69).
- **Card:** `room:` starts the card in one room, e.g. a display for the kids' room (discussion #119 by HeroHoshy).
- A roof slope that reaches down into the floor below the attic cuts that floor's walls as well (discussion #75, idaho).
- **Camera cockpit 2** – a free update of the Pro add-on: **detection pins** – what a camera's sensors see right now (person, vehicle, animal, motion – Frigate, UniFi Protect, Reolink …) stands in front of it as a pin with the time; the **camera wall** – every placed camera's live picture at once ("Cameras" switch, card option `camera_wall`), motion framed red, recording marked; a tap looks through the camera.

### Fixed

- A camera mounted just inside an outer wall and looking out had its wedge cut by that wall; the wall the camera hangs on no longer counts.
- The version notice now tells which side is behind: an old bundle in the browser or the companion app gets "reload the page" with a Reload button (and the cache hint for the companion app) instead of "restart Home Assistant"; both versions are shown. A pack with a Pro feature this frontend does not know yet says so instead of looking like a furniture pack (support case).
