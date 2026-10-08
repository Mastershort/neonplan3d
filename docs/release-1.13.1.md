Six wishes from the issues that were promised for "the next update", and feet and inches for US users – here they are. As always, anything that changes the look is a setting you switch on.

### New

- **Feet and inches:** Editor → Settings → **Lengths**: Automatic (follows Home Assistant's unit system), Metres or Feet and inches. Every length field, dimension and area (ft²) in the editor follows, and you can type `8' 2"`, `98in`, `8.2ft` or `2.5m`. The plan still stores metres (discussion #117 by Valkster70).
- **Outdoor areas as a free form:** in the Outdoor tool, choose **▭ Rectangle** or **✎ Free form** beside "Undo" and place the corners one by one – curved beds, slanted plot borders, an L-shaped path (#97 by rolandarends).
- **Ceiling height per room:** a field in the room form; the room's walls end there (unless a neighbouring room is taller) and its ceiling lamps hang from it – a 2.5 m living room beside a 5 m garage on the same floor (#30 by wiesi12).
- **Ceiling lamps under a sloped roof** hang from the roof's underside instead of floating above it (#168 by denisb88).
- **Net area:** the room form shows the drawn area and the net area – without the half of each shared wall in the room, free walls, and the gap behind a wall built in front of another (#216 by idaho).
- **Power outage warning:** Settings → **Report a power outage with** – a grid sensor, a UPS on battery, a mains voltage or a helper of your own. The warning shows in the alert bar, and the grid connection of Energy Pro is crossed out (#214 by Mavyre).
- **Energy Pro: house balance and plant cards in floor views too** – a switch in Editor → Energy → Hologram, off by default (#193 by denisb88).
- **Cameras: detection symbols can be switched off** – then only the field of view turns red on a detection (#267 by RobertSorgenfrei).

### Fixed

- **Floor openings across a room line** are cut in every room they cover; before, an opening reaching into a second room was not cut at all (#353 by tomfischer98).
- **Hip and pyramid ends** say "Hip" in the solar field's face list, so they are easy to find (#302 by cereal2nd).

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

Sechs Wünsche aus den Issues, die ich „fürs nächste Update“ zugesagt hatte, dazu Fuß und Zoll für US-Nutzer – hier sind sie. Wie immer gilt: Was das Aussehen ändert, ist eine Einstellung, die du selbst einschaltest.

### Neu

- **Fuß und Zoll:** Editor → Einstellungen → **Längen**: Automatisch (folgt dem Einheitensystem von Home Assistant), Meter oder Fuß und Zoll. Alle Längenfelder, Maße und Flächen (ft²) im Editor folgen, und du kannst `8' 2"`, `98in`, `8.2ft` oder `2.5m` eintippen. Gespeichert wird weiter in Metern (Diskussion #117 von Valkster70).
- **Außenflächen als freie Form:** Im Werkzeug **Außen** neben „Rückgängig“ **▭ Rechteck** oder **✎ Freie Form** wählen und die Ecken einzeln setzen – geschwungene Beete, schräge Grundstücksgrenzen, ein L-förmiger Weg (#97 von rolandarends).
- **Deckenhöhe pro Raum:** ein Feld im Raumformular; die Wände des Raums enden dort (außer ein Nachbarraum ist höher), und seine Deckenleuchten hängen an dieser Decke – 2,5 m im Wohnraum neben einer 5 m hohen Garage auf derselben Etage (#30 von wiesi12).
- **Deckenleuchten unter einer Dachschräge** hängen an der Dachunterseite statt darüber in der Luft (#168 von denisb88).
- **Netto-Fläche:** Das Raumformular zeigt die gezeichnete und die Netto-Fläche – ohne die halbe geteilte Innenwand, freie Wände und den Spalt hinter einer Vorwand (#216 von idaho).
- **Warnung bei Stromausfall:** Einstellungen → **Stromausfall melden mit** – ein Netz-Sensor, eine USV auf Batterie, die Netzspannung oder ein eigener Helfer. Die Warnung erscheint in der Warnleiste, und der Netzanschluss von Energie Pro wird durchgestrichen (#214 von Mavyre).
- **Energie Pro: Hausbilanz und Anlagen-Karten auch in Etagenansichten** – ein Schalter unter Editor → Energie → Hologramm, von Haus aus aus (#193 von denisb88).
- **Kameras: Erkennungs-Symbole abschaltbar** – dann färbt sich bei einer Erkennung nur der Sichtkegel rot (#267 von RobertSorgenfrei).

### Behoben

- **Bodenöffnungen über eine Raumgrenze** werden in jedem Raum ausgeschnitten, den sie berühren; vorher wurde eine Öffnung, die in einen zweiten Raum ragte, gar nicht ausgeschnitten (#353 von tomfischer98).
- **Walm- und Zeltdach-Enden** stehen in der Flächenliste des Solarfelds mit „Walm“ und sind leichter zu finden (#302 von cereal2nd).

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
