![NeonPlan 3D 1.15.0: Wandansicht – 3D im Raum und Wand von vorne](https://raw.githubusercontent.com/Mastershort/neonplan3d/main/docs/images/wall-view.jpg)

**Das große Update fürs Einrichten: die Wandansicht.** Statt Möbel von oben im Grundriss hin- und herzuschieben, stellst du dich jetzt in den Raum, schaust auf die Wand und setzt Schränke, Regale, Fernseher, Hängeschränke und Wandleuchten zentimetergenau dahin, wo sie hingehören – so, wie du sie später wirklich vor dir siehst.

### Neu

- **Wandansicht öffnen:** oben in der Werkzeugleiste auf **▦ Wandansicht** tippen, dann einfach **in einen Raum klicken** – nah an einer Wand öffnet sich genau diese Wand. Außerdem: großer Knopf im Raumformular, **▦ Wandansicht** im Möbelformular und im Rechtsklick-Menü.
- **3D im Raum:** Du stehst in der Raummitte auf Augenhöhe und schaust auf die Wand – mit allem, was im Raum steht, auch dem Tisch davor. Möbel antippen und auf dem Boden ziehen, am runden Griff **↕** in die Höhe heben (mit Höhenanzeige), mit dem Mausrad näher heran. Umsehen mit der mittleren oder rechten Maustaste – die linke bleibt für die Möbel.
- **Wand von vorne:** die flache Ansicht mit echten Bildern der Möbel, Türen und Fenstern. Maßlinien zeigen den Abstand zu den Wandenden und zum Boden, Kanten rasten an Wandenden, Türen, Fenstern und anderen Möbeln ein.
- **Alles zum Eintippen:** Unten stehen **Abstand von links**, **Abstand zur Wand**, **Höhe über Boden** und die **Drehung** – mit **↺ 45°** / **↻ 45°** oder als Gradzahl. Pfeiltasten schieben um 1 cm, mit Umschalt um 10 cm.
- **Einmal rundherum:** Die Pfeile **‹** und **›** drehen dich zur nächsten Wand – so gehst du einmal durch den ganzen Raum.
- **Möbel bleiben im Raum:** Beim Ziehen stoppt ein Möbel an der Wand, statt hineinzurutschen; an der Wand gedreht rückt es von selbst in den Raum. Ein **fixiertes** Möbel zeigt unten sein Schloss – **🔒 Lösen**, dann lässt es sich ziehen.
- **Ausblick:** Die Wandansicht ist die Grundlage für die nächsten Schritte – Türen und Fenster darin verschieben und Leitungen und Rohre an der Wand verlegen.

### Behoben

- **Möbel in 3D einrichten:** Ein Möbel, das ein Stück von der Wand weggezogen wurde, springt beim Loslassen nicht mehr an die Wand zurück; hohe Möbel wie Kühlschrank oder Hochschrank lassen sich auch auf Augenhöhe gleichmäßig vor- und zurückziehen; Fernsehbild und Türen des smarten Kühlschranks greifen jetzt auch das Möbel.
- **„Höhe über Boden“** nimmt höchstens 10 m an, wie Home Assistant beim Speichern – „40“ (als Zentimeter gemeint) ließ bisher jedes Speichern scheitern; eine schon eingetippte zu große Höhe wird beim Speichern auf 10 m gesetzt.

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).

---

![NeonPlan 3D 1.15.0: wall view – 3D in the room and wall from the front](https://raw.githubusercontent.com/Mastershort/neonplan3d/main/docs/images/wall-view.jpg)

**The big update for furnishing: the wall view.** Instead of pushing furniture around from above in the plan, you now stand in the room, look at the wall and put cabinets, shelves, TVs, wall cabinets and wall lights exactly where they belong, to the centimetre – just as you will see them in front of you later.

### New

- **Opening the wall view:** tap **▦ Wall view** at the top of the toolbar, then simply **click into a room** – near a wall, exactly that wall opens. Also: a big button in the room form, **▦ Wall view** in the furniture form and in the right-click menu.
- **3D in the room:** you stand in the middle of the room at eye height looking at the wall – with everything in the room, the table in front of it too. Tap a piece and drag it on the floor, lift it with the round **↕** handle (its height shown), mouse wheel to walk closer. Look around with the middle or right mouse button – the left one is kept for the furniture.
- **Wall from the front:** the flat view with real pictures of the furniture, doors and windows. Dimension lines show the distance to the wall's ends and to the floor, edges snap to the wall's ends, doors, windows and other furniture.
- **Everything to type in:** at the bottom are **Distance from the left**, **Distance from the wall**, **Height above the floor** and the **Rotation** – with **↺ 45°** / **↻ 45°** or in degrees. Arrow keys move by 1 cm, with Shift by 10 cm.
- **Once round the room:** the arrows **‹** and **›** turn you to the next wall – all the way round the room.
- **Furniture stays in the room:** while dragged a piece stops at the wall instead of sliding into it; turned at a wall it moves back into the room by itself. A **fixed** piece shows its lock at the bottom – **🔒 Release**, then it can be dragged.
- **Coming next:** the wall view is the base for the next steps – moving doors and windows in it and laying cables and pipes on the wall.

### Fixed

- **Furnishing in 3D:** a piece pulled a little away from the wall no longer jumps back to it on release; tall pieces like a fridge or a tall cabinet move forward and back evenly at eye height too; a TV's picture and a smart fridge's doors now grab their piece too.
- **"Height above the floor"** takes at most 10 m, like Home Assistant when saving – "40" (meant as centimetres) made every save fail; a height typed in too large earlier is set to 10 m when saving.

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).
