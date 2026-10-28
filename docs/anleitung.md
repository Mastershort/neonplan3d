# NeonPlan 3D – Anleitung

🇩🇪 Deutsch · [🇬🇧 English](manual.md)

NeonPlan 3D zeichnet dein Zuhause direkt in Home Assistant und zeigt es als 3D-Modell im Neon-Look. Lichter leuchten in ihrer Farbe, Rollläden fahren, Fenster kippen, Türen schwingen auf, Kameras schauen in den Raum und der Fernseher zeigt, was läuft. Alles läuft lokal in Home Assistant, ohne Cloud und ohne externe Programme, und ist für Wandtablets gebaut.

Diese Anleitung beschreibt alle Funktionen der aktuellen Version. Was sich in welcher Version geändert hat, steht im [Changelog](../CHANGELOG.md) und auf der [Release-Seite](https://github.com/Mastershort/neonplan3d/releases). Die Bilder stammen aus der Demo mit erfundenen Daten.

![Das Haus in der 3D-Ansicht](images/view-house.jpg)

---

## Inhalt

1. [Installation](#1-installation)
2. [In zehn Minuten zum ersten 3D-Plan](#2-in-zehn-minuten-zum-ersten-3d-plan)
3. [Die Oberfläche im Überblick](#3-die-oberfläche-im-überblick)
4. [Der Editor](#4-der-editor)
5. [Die 3D-Ansicht](#5-die-3d-ansicht)
6. [Pro-Erweiterungen](#6-pro-erweiterungen)
7. [Erweiterungen, Shop und Möbel-Packs](#7-erweiterungen-shop-und-möbel-packs)
8. [Die Dashboard-Karte](#8-die-dashboard-karte)
9. [NeonPlan 3D auf dem Wandtablet](#9-neonplan-3d-auf-dem-wandtablet)
10. [Sicherung und Umzug](#10-sicherung-und-umzug)
11. [Daten und Datenschutz](#11-daten-und-datenschutz)
12. [Häufige Fragen und Fehlerbehebung](#12-häufige-fragen-und-fehlerbehebung)

---

## 1. Installation

### Voraussetzungen

- Home Assistant 2025.1 oder neuer.
- Ein Browser mit WebGL. Das sind alle aktuellen Browser, die Home-Assistant-App und auch Amazon-Fire-Tablets.
- Für das Bearbeiten ein Benutzer mit Administratorrechten. Alle anderen Benutzer sehen und bedienen den Plan, ändern ihn aber nicht.

### Über HACS

[![NeonPlan 3D in HACS öffnen](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Mastershort&repository=neonplan3d&category=integration)

Der Knopf öffnet NeonPlan 3D direkt in HACS deiner Installation. NeonPlan 3D steht in der offiziellen HACS-Liste, ein benutzerdefiniertes Repository brauchst du nicht. Von Hand geht es so:

1. In Home Assistant **HACS** öffnen.
2. **NeonPlan 3D** suchen, installieren und Home Assistant neu starten.
3. **Einstellungen → Geräte & Dienste → Integration hinzufügen → NeonPlan 3D**, oder direkt über diesen Knopf:

   [![NeonPlan 3D einrichten](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=neonplan3d)

Danach steht **NeonPlan 3D** in der Seitenleiste. Die Dashboard-Karte ist ebenfalls sofort verfügbar, eine Ressource musst du nicht eintragen.

Hast du NeonPlan 3D früher als benutzerdefiniertes Repository eingetragen, musst du nichts tun: Updates kommen weiter wie gewohnt.

### Von Hand

Den Ordner `custom_components/neonplan3d` aus dem Repository nach `config/custom_components/` kopieren, Home Assistant neu starten und die Integration wie oben hinzufügen.

### Updates

HACS meldet neue Versionen von selbst. Nach jedem Update Home Assistant neu starten. Bis dahin zeigt NeonPlan 3D oben einen Hinweis, dass ein Neustart aussteht. Dein Plan bleibt bei Updates immer erhalten, auch wenn du die Integration entfernst und neu hinzufügst.

---

## 2. In zehn Minuten zum ersten 3D-Plan

1. **NeonPlan 3D** in der Seitenleiste öffnen und oben auf **Editor** wechseln.
2. Rechts **Etage hinzufügen** wählen. Hast du in Home Assistant Etagen angelegt, bietet NeonPlan 3D sie direkt an.
3. Gibt es Bereiche auf der Etage, legt **„… Räume aus HA-Bereichen anlegen“** für jeden Bereich einen Raum an. Ziehe die Räume dann an die richtige Stelle und passe die Ecken an. Alternativ zeichnest du unter **Bauen → Raum** mit **Rechteck**, **Freie Form** oder **Nach Maß**.
4. Mit **Tür & Fenster** auf eine Wand tippen, um Türen und Fenster einzusetzen.
5. Einen Raum antippen und rechts unter **Geräte** bei den gewünschten Geräten **Platzieren** tippen, etwa Lichter, Rollläden, Thermostate, Media Player und Sensoren des Bereichs. Unter der Liste setzt **Alle … platzieren** nach einer Rückfrage alle Hauptgeräte auf einmal.
6. Mit **Möbel** und **Einrichten …** den Raum möblieren.
7. Oben auf **3D** wechseln. Fertig: Tippe auf eine Lampe, und sie schaltet.

Der Plan speichert sich beim Bearbeiten von selbst.

---

## 3. Die Oberfläche im Überblick

Oben gibt es drei Reiter:

| Reiter | Wofür | Wer sieht ihn |
|---|---|---|
| **3D** | Das Haus ansehen und bedienen | alle |
| **Editor** | Grundriss zeichnen, Möbel und Geräte platzieren | Administratoren |
| **✦ Erweiterungen** | Shop-Verbindung, Pro-Erweiterungen, Möbel-Packs | Administratoren |

Zusätzlich gibt es die Dashboard-Karte, die dieselbe 3D-Ansicht in jedes Dashboard bringt. Mehr dazu in [Kapitel 8](#8-die-dashboard-karte).

**Sprache:** NeonPlan folgt der Sprache deines Home-Assistant-Nutzers (Profil → Sprache). Deutsch und Englisch sind eingebaut; Französisch, Spanisch, Niederländisch, Italienisch, Ungarisch, Dänisch, Schwedisch, Norwegisch (Bokmål und Nynorsk), Finnisch, Tschechisch, Polnisch, Rumänisch, Slowenisch, Portugiesisch und Chinesisch (vereinfacht) werden bei Bedarf nachgeladen, so bleiben die Bundles für Wandtablets klein. Fehlt ein Text in einer Sprache, erscheint er auf Englisch.

---

## 4. Der Editor

![Der Editor mit der 3D-Ansicht daneben](images/editor-split-3d.jpg)

Der Editor besteht aus dem Grundriss in der Mitte, der Werkzeugleiste oben und der Seitenleiste rechts. Die Seitenleiste zeigt immer, was gerade ausgewählt ist: die Etage, einen Raum, ein Möbel, eine Tür oder ein Gerät.

Zeichnen geht am besten am PC oder Tablet. Auf dem Handy kannst du dein Haus ansehen und bedienen; der Editor sagt das dort einmal (✕ blendet den Hinweis aus).

### 4.1 Werkzeuge

Die Werkzeugleiste oben ist in Gruppen geordnet. Ganz links steht immer die Etage, auf der du arbeitest, siehe [4.2](#42-etagen).

| Knopf | Was er tut |
|---|---|
| **Auswählen** | Räume, Möbel, Türen, Fenster und Geräte antippen, verschieben, Ecken ziehen |
| **Bauen ▾** | Ein Menü mit **Raum** (**Rechteck** aufziehen, **Freie Form** Punkt für Punkt oder **Nach Maß** mit eingetippten Wandlängen), **Wand** (eine frei stehende Wand, etwa ein Raumteiler), **Tür & Fenster** (auf eine Wand tippen), **Bodenöffnung** (ein Loch im Boden, etwa über dem Treppenaufgang) und **Dach** (siehe [4.19](#419-dach)) |
| **Draußen ▾** | **Außen** (Art wie Rasen, Weg oder Terrasse und Form Rechteck oder Freie Form direkt im Menü) und **Pool** (Eckig, Rund, Oval oder Frei), siehe [4.17](#417-außenflächen-und-außenleuchten) |
| **Möbel** | Die Möbelbibliothek öffnen |
| **Energie** | Solarfelder auf dem Dach und im Garten, Stränge und Energiegeräte, siehe [4.20](#420-energie-solarfelder) |
| **↶ / ↷** | Rückgängig und Wiederholen (Strg+Z / Strg+Y) |
| **3D daneben** | Die 3D-Ansicht neben dem Plan, siehe [4.18](#418-3d-daneben) |
| **Wandansicht** | Eine Wand von vorne ansehen, siehe [4.8](#48-möbel) |
| **Grundriss komplett** | Holt den ganzen Grundriss der Etage ins Bild; im Werkzeug Außen oder Pool samt Garten |

Ein Gruppenknopf zeigt, welches Werkzeug gerade läuft, etwa „Raum: Freie Form“ oder „Außen: Rasen“. **Ein Werkzeug bleibt aktiv**, nachdem du etwas gesetzt hast: Du kannst also mehrere Türen, Fenster, Räume oder Flächen hintereinander setzen. **Esc** oder **Auswählen** beendet es. Unten im Plan steht immer ein kurzer Hinweis zum aktiven Werkzeug.

**Seitenleiste breiter ziehen:** An ihrer linken Kante lässt sich die Seitenleiste mit der Maus oder dem Finger breiter oder schmaler ziehen (280 bis 640 Pixel); der Browser merkt sich die Breite.

**Seitenleiste einklappen:** **Einklappen ›** oben in der Seitenleiste macht sie zu einem schmalen Streifen – der Grundriss bekommt den ganzen Platz, etwa zum Verschieben von Möbeln. **‹** klappt sie wieder auf, ein leuchtendes **⚙** im Streifen öffnet die Einstellungen der Auswahl. Wählst du ein anderes Werkzeug, klappt sie von selbst wieder auf. Der Browser merkt sich die Wahl.

**Maus und Touch:** Mit zwei Fingern ziehst du die Ansicht, mit zwei Fingern zoomst du. Mit der Maus zoomt das Mausrad, die Ansicht ziehst du auf einer leeren Stelle oder überall mit der **rechten oder mittleren Maustaste** (ein Rechtsklick ohne Ziehen öffnet weiter das Menü). **Strg+Z** macht rückgängig, **Strg+Y** oder **Strg+Umschalt+Z** wiederholt, **Entf** löscht das Ausgewählte, **Esc** bricht ab. Die **Pfeiltasten** verschieben das Ausgewählte (Raum, Ecke, Möbel, Gerät, Wand, Außenfläche) um einen Rasterschritt, mit **Umschalt** um 10 cm, mit **Alt** um 1 cm; Türen und Fenster wandern dabei entlang ihrer Wand.

**Grundriss sperren und fixieren:** **Grundriss sperren** in den Etagen-Einstellungen (siehe [4.2](#42-etagen)) oder per Rechtsklick auf einen Raum sperrt alle Räume, Wände, Türen, Fenster und Außenflächen, auch neu gezeichnete; ein ausgewählter Raum zeigt dann „🔒 Grundriss gesperrt“, ein Klick darauf entsperrt. Möbel und Geräte fixierst du einzeln, sobald sie an ihrem Platz stehen: mit dem Schloss **🔓 Fixieren** oben im Formular, mit der Taste **L** oder per **Rechtsklick** (auf dem Tablet langes Drücken). Das Rechtsklick-Menü bietet außerdem **Duplizieren**, **Drehen 90°** und **Löschen**. Gesperrtes lässt sich auswählen und im Formular bearbeiten, aber nicht mehr ziehen, nicht mit den Pfeiltasten schieben und nur nach Rückfrage löschen; Ziehen bewegt dann die Ansicht. Fixierte Möbel und Geräte bleiben auch in der 3D-Hälfte stehen.

### 4.2 Etagen

![Etagen-Einstellungen](images/editor-ha-floors.jpg)

Ganz links in der Werkzeugleiste steht **Etage: Erdgeschoss ▾** – die Etage, auf der du gerade arbeitest. Das Menü ist in jedem Werkzeug da: Es listet alle Etagen (die oberste zuerst, die aktuelle mit ✓), darunter **Etage hinzufügen** und **Etagen-Einstellungen**. Gibt es in Home Assistant Etagen, die noch fehlen, klappt **Etage hinzufügen** sie zur Auswahl auf, dazu **Leere Etage**. **Etagen-Einstellungen** öffnet rechts die Einstellungen der aktuellen Etage; dasselbe zeigt die Seitenleiste, wenn nichts ausgewählt ist:

- **Grundriss sperren** sperrt alle Räume, Wände, Türen, Fenster und Außenflächen, siehe [4.1](#41-werkzeuge).
- **Name**, **Höhe über Boden** und **Raumhöhe** bestimmen, wo die Etage im 3D-Haus liegt und wie hoch ihre Wände sind. **90° drehen** dreht alles auf der Etage um die Mitte der Räume, wenn eine Etage verdreht gezeichnet wurde. **Etage verschieben** rückt alles auf der Etage (Räume, Möbel, Geräte, Außenflächen, freie Wände, Hintergrundbild) um X und Z, wenn eine Etage gegenüber den anderen versetzt sitzt; Dachflächen und Leitungen bleiben. Mit dem Haken **Alle Etagen mitnehmen** wirken Verschieben und Drehen auf das ganze Haus: alle Etagen samt Dachflächen, Außenflächen, Leitungen, Zähler und Hologramm. **Ansicht als Start der Etage** merkt sich, wie die 3D-Ansicht daneben gerade steht – diese Etage öffnet sich dann von dieser Seite und mit diesem Zoom und Bildausschnitt, etwa das Erdgeschoss von vorn und das Obergeschoss von hinten; ↺ nimmt das zurück.
- **Hintergrundbild:** Im Abschnitt **Hintergrund** lädst du ein Foto oder einen Scan deines Grundrisses als Vorlage unter den Plan (Deckkraft einstellbar). Mit **Verschieben, skalieren und drehen** bekommt das Bild im Plan Griffe wie ein Möbel: ziehen verschiebt es, die Ecke unten rechts macht es größer oder kleiner, der runde Griff oben dreht es (mit Umschalt in 15°-Schritten). **Fertig** legt es wieder fest, dann zeichnest du ungestört darüber. **Drehung (°)** dreht es auf den Zehntelgrad genau. Am einfachsten geht der Maßstab mit **📏 Maßstab mit Lineal**: Anfang und Ende einer Strecke im Bild antippen, deren Länge du kennst (eine bemaßte Wand), die echte Länge eingeben – das Bild wird passend skaliert, der erste Punkt bleibt stehen. Ein schiefer Scan wird mit **📐 Gerade ausrichten** gerade: zwei Punkte auf eine Wand im Bild tippen, die waagerecht oder senkrecht sein soll – das Bild dreht sich passend. Reihenfolge: erst gerade ausrichten, dann den Maßstab, dann die Räume darüber zeichnen.
- **Etage in Home Assistant** verknüpft die Etage mit einer HA-Etage. Dann bietet **„… Räume aus HA-Bereichen anlegen“** die Bereiche dieser Etage als Räume an.
- **Nach oben** und **Nach unten** ändern die Reihenfolge, **Etage löschen** entfernt sie samt Räumen.
- **Lücken schließen** führt Räume zusammen, die bis zu 60 cm auseinanderliegen. Das ist praktisch, wenn du Innenmaße gemessen hast. Der Abstand wird zur Innenwandstärke.
- **Schiefe Kanten begradigen** findet Raumkanten, die nur ein paar Zentimeter schief laufen (eine Ecke 1 cm daneben macht in 3D schiefe Wände), und richtet sie in allen Räumen mit dieser Ecke gerade aus. Bewusst schräge Wände bleiben.

![Räume aus Bereichen](images/editor-area-rooms.jpg)

### 4.3 Räume zeichnen

- **Rechteck:** In den Plan tippen und ziehen.
- **Freie Form:** Punkt für Punkt setzen. Ein Tipp auf den ersten Punkt oder **Enter** schließt den Raum, **Esc** bricht ab. Beim Zeichnen steht an jeder Kante ihre Länge, auch an der gerade gezogenen.
- **Ecken verschieben:** Mit **Auswählen** einen Raum antippen und die Ecken ziehen. Das **+** auf einer Kante fügt einen neuen Punkt ein.
- **Fangen:** Ecken rasten am Raster, an Ecken und Kanten anderer Räume und an Fluchtlinien ein. Mit gedrückter **Alt**-Taste bewegst du frei.

![Ein Raum ausgewählt](images/editor-room.jpg)

Ein ausgewählter Raum zeigt rechts:

- **Name** und **Bereich**: Die Verknüpfung mit einem Home-Assistant-Bereich ist das Wichtigste. Darüber findet NeonPlan 3D Lichter, Rollläden, Sensoren und Szenen des Raums.
- **Bodenbelag**: Holz, Eiche, Fliesen, Teppich, Stein oder Beton erscheinen in 3D als dezentes Muster.
- **Ansicht als Start des Raums**: Schalte **3D daneben** ein, dreh und zoom den Raum so, wie er sich zeigen soll, und tippe den Knopf. Tippst du den Raum später in 3D an, fliegt die Kamera genau dorthin – Blickwinkel, Zoom und Bildausschnitt. ↺ nimmt das zurück, dann wird der Raum wieder von oben gezeigt.
- Die **ID** des Raums für die Karten-Option `room:` (antippen kopiert sie).
- **Deckenhöhe**: leer = Raumhöhe der Etage. Mit eigener Höhe enden die Wände des Raums dort (außer ein Nachbarraum ist höher), und Deckenleuchten hängen an dieser Decke – etwa 2,5 m im Wohnraum neben einer 5 m hohen Garage auf derselben Etage.
- **Fläche und Netto-Fläche**: Die Fläche zählt die gezeichneten Ecken. Netto zieht ab, was Wände im Raum belegen: geteilte Innenwände liegen zur Hälfte im Raum, Außenwände wachsen nach außen; freie Wände im Raum und der Spalt hinter einer Vorwand (Installationsebene vor der Außenwand) zählen nicht mit.
- **Türen und Fenster** des Raums als Liste: Ein Tipp wählt die Öffnung aus – praktisch, wenn eine Tür im Plan schwer zu treffen ist.
- Die Liste **Geräte** des Bereichs, siehe [4.10](#410-geräte).
- **Einrichten …** für fertige Möbelpakete, siehe [4.9](#49-räume-einrichten).
- **Duplizieren** und **Löschen**.

### 4.4 Wände

Wände entstehen automatisch: Jede gemeinsame Kante zweier Räume wird eine Innenwand, jede Außenkante eine Außenwand. Ecken und T-Stöße werden sauber verschnitten. Die Stärken stellst du unter **Einstellungen** ein.

**Einzelne Wände:** Mit dem Werkzeug **Wand** ziehst du eine frei stehende Wand, zum Beispiel einen Raumteiler, der nur durch den halben Raum geht. **Umschalt** hält sie gerade, **Alt** zeichnet ohne Fangen. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Ausgewählt ziehst du die Endpunkte an den Griffen oder die ganze Wand an der Linie. Rechts stellst du **X** und **Y** (die Mitte der Wand, wie bei Möbeln; so setzt du sie zentimetergenau, ohne Raster), **Länge**, **Wandstärke** und **Höhe** ein. In 3D verhält sie sich wie jede Innenwand. Liegen nur auf einer Seite Räume (eine einzelne Wand als Außenwand gezeichnet), gilt die andere Seite als draußen: Rollläden und Fensterbänke sitzen dort, egal in welche Richtung die Wand gezogen wurde, und sie wird wie die übrigen Außenwände zu Glas, wenn sie zur Kamera zeigt. Auch in einzelne Wände setzt du mit **Tür & Fenster** Türen und Fenster ein (siehe 4.7). Löschst du die Wand, verschwinden ihre Türen und Fenster mit.

**Wandhöhe:** Jede Wand kann niedriger sein als der Raum, etwa als Brüstung oder Theke. Bei einer einzelnen Wand stellst du die **Höhe** im Formular ein. Bei Räumen (Rechteck und freie Form) wählst du den Raum aus; im Formular steht der Kasten **Wandhöhen** mit jeder Wand des Raums, benannt nach ihren Eckpunkten (z. B. „Wand 2–3“, die Nummern stehen im Plan an den Ecken) und mit ihrer Länge. Fährst du über eine Zeile oder tippst in ihr Feld, leuchtet die Wand im Plan auf. ↥ setzt sie auf volle Raumhöhe zurück. Teilen sich zwei Räume die Wand, gilt die niedrigere Einstellung. Fenster und Türen in einer niedrigen Wand enden an der Wandhöhe. Niedrige Wände erscheinen im Plan heller. Soll eine Wand in einer Flucht zwei Höhen haben (2,5 m neben 1,7 m), teilst du sie mit **✂**: Das Teilstück bekommt eine eigene Zeile und Höhe, der Teilpunkt lässt sich im Feld **Teilpunkt ab Ecke** verschieben (im Plan als Strich markiert), **⨉** fügt die Teile wieder zusammen.

**Wandstärke je Wand:** Im selben Kasten hat jede Wand ein Feld **Dicke (m)**. Voreingestellt ist die Dicke des Hauses (Außen- oder Innenwand, Kapitel 4.4); eine eigene Angabe macht etwa die 36,5-cm-Außenwand neben einer 24er oder die 11,5-cm-Trennwand. Teilen sich zwei Räume die Wand, gilt die dickere Angabe, die Wand bleibt auf der Raumgrenze mittig. ↺ setzt auf die Hausdicke zurück. Fenster und Türen passen sich der Dicke an.

**Schräge Wand:** **◢ Schräg** in einer Zeile der Wandhöhen gibt der Wand eine eigene Höhe an jeder ihrer beiden Ecken; die Oberkante läuft gerade dazwischen – für ein Pultdach, eine Garage am Hang oder Oberlichter auf der hohen Seite. Die hohe Seite darf über die Etagenhöhe hinausreichen. Fenster und Türen bleiben unter der Oberkante, ein Fenster am niedrigen Ende wird also niedriger. Teilst du die Kante mit einem neuen Eckpunkt, treffen sich beide Hälften auf der Höhe dazwischen. Noch einmal **◢ Schräg** macht die Wand wieder gerade.

**Keine Wand:** Bei offenen Grundrissen gehören Flur, Küche und Wohnzimmer baulich zusammen, sind in Home Assistant aber getrennte Bereiche. Dafür hat jede Zeile im Kasten **Wandhöhen** den Knopf **Keine Wand**: Die Wand fällt im Grundriss und in 3D ganz weg, auch wenn der Nachbarraum sie teilt. ↥ holt sie zurück. Das Licht folgt dem: Eine Lampe leuchtet durch die weggelassene Wand in den Nachbarraum, als wäre es ein Raum.

**Geteilte Wände:** Teilt ein Nachbarraum eine Wand in mehrere Stücke (etwa zwei kleine Räume an einer langen Wand), bekommt jedes Stück eine eigene Zeile „Wand 2–3 · Teil 1“, „… Teil 2“ mit seiner Länge, und jedes Stück kann seine eigene Höhe haben oder wegfallen.

### 4.5 Das ⚙ Einstellungen-Menü

Alles, was zum ganzen Plan gehört und nicht zu einer Etage, einem Raum oder einem Möbel, steht in einem Menü: **⚙ Einstellungen ▾** rechts in der Werkzeugleiste (auf schmalen Bildschirmen nur das Zahnrad). Jeder Punkt öffnet ein Fenster über dem Plan, auch während etwas ausgewählt ist; **✕** oder **Esc** schließt es. Die Seitenleiste ohne Auswahl zeigt nur noch die Räume der Etage, das Grundriss-Bild und die Hilfe.

| Menüpunkt | Inhalt |
|---|---|
| **🏠 Haus** | Wandstärken, Raster, Längen, Nordrichtung (die Zeilen darunter) |
| **🌦 Wetter & Warnungen** | Wetter-Entität und -Effekte, Regenwarnung, Warnungsnamen, Stromausfall-Sensor, Sonnenflecken |
| **🎬 Live-Regie** | siehe [6.1](#61-kamera-cockpit) |
| **🎙 Sprachsteuerung** | siehe [5.10](#510-sprachsteuerung-neu) |
| **⭐ Favoriten** | das Zentral-Menü der 3D-Ansicht (unten) |
| **🖼 Hintergrund** | was hinter dem 3D-Haus liegt (unten) |
| **⛰ Gelände** | siehe [4.21](#421-keller-und-gelände) |
| **💾 Sicherung** | Export, Import, Wiederherstellen, siehe Kapitel 9 |
| **🧩 Module** | die eingespielten Module (Code aus dem Shop, etwa „Das Haus antwortet“) und **Modul einspielen …** für die .fp3dpack-Datei |

Die **Dachform** (kein Dach, Flachdach, Satteldach, First, Neigung, Überstand) steht beim Dach-Werkzeug, siehe [4.19](#419-dach). Die **Startansicht** merkst du dir in der 3D-Ansicht: Haus drehen und zoomen, dann in den Ansicht-Einstellungen (Zahnrad oben rechts) **📌** antippen; **📌✕** setzt sie zurück. 3D-Ansicht, Karte und Kiosk öffnen das Haus dann so, und eine geöffnete Etage wird von derselben Seite gezeigt.

| Einstellung | Bedeutung |
|---|---|
| **Außenwand (m)**, **Innenwand (m)** | Wandstärken |
| **Raster (m)** | Schrittweite beim Zeichnen |
| **Längen** | **Automatisch** folgt dem Einheitensystem von Home Assistant, sonst **Meter** oder **Fuß und Zoll**. Mit Fuß und Zoll zeigt der Editor alle Längen, Maße und Flächen (ft²) so an und versteht Eingaben wie `8' 2"`, `98in`, `8.2ft` oder auch `2.5m`. Gespeichert wird immer in Metern, du kannst also jederzeit umschalten |
| **Nordrichtung** | Grad im Uhrzeigersinn von oben. Wird für das Sonnenlicht gebraucht |
| **Wetter-Entität** | Welche Wetter-Entität das Wetter draußen liefert, siehe [6.2](#62-wetter-draußen) |
| **Wetter-Effekte in 3D** | Welche Effekte gezeigt werden |
| **Favoriten** | Szenen, Skripte, Automationen, Tasten und Schalter für das Zentral-Menü (Stern) der 3D-Ansicht: Party, Anwesenheitssimulation, Verschattung, Bewässerung. Auswählen mit der Suche, Reihenfolge mit ↑ ↓, ✕ entfernt. Darunter **Eigene Knöpfe** mit Beschriftung, Symbol und Aktion: **Seite öffnen** (Pfad wie `/lovelace/rollos`), **Details einer Entität**, **Dienst aufrufen** (`domain.service` mit Daten als JSON) oder **fire-dom-event** – damit öffnet ein Knopf ein browser_mod-Popup mit deiner eigenen Karte, z. B. `{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:meine-rollo-karte"}}}}` |
| **🖼 Hintergrund** | Was hinter dem 3D-Haus liegt: der Himmel des Looks (Standard), **eine Farbe**, ein **Farbverlauf** oder ein **Bild**. Das Bild legst du in Home Assistant unter `config/www` ab und trägst `/local/dateiname.jpg` ein; **Abdunkeln** legt einen dunklen Schleier darüber, damit die Neonlinien lesbar bleiben. Gilt für Panel und Karten und kostet keine Leistung |

### 4.6 Grundriss-Bild als Vorlage

Unter **Vorlage (Grundriss-Bild)** lädst du ein Foto oder einen Scan deines Grundrisses unter die Zeichnung. **Breite im Plan (m)** bringt das Bild auf den richtigen Maßstab, **Deckkraft** macht es dezenter. So zeichnest du die Räume einfach nach.

### 4.7 Türen, Fenster und Garagentore

![Tür ausgewählt](images/editor-opening.jpg)

Mit **Tür & Fenster** tippst du auf eine Wand, eine Raumwand oder eine einzelne Wand. Danach wählst du rechts die **Art**: Tür, Fenster oder Garagentor. Ein Fenster mit Brüstung 0 ist eine Terrassentür; wie bei Türen dreht **⇅ Öffnungsrichtung umdrehen** sie nach außen (in 3D schwingen die Flügel dann nach draußen, gekippt wird weiter nach innen). Die Vorlage **Glaswand** setzt eine feststehende, raumhohe Verglasung mit schmalen Sprossen ohne Flügel – für eine gläserne Innenwand oder Trennwand; Breite und Höhe stellst du frei ein, als Art geht sie auch bei jedem Fenster unter **Stil**.

Stoßen zwei Räume ohne Wand aneinander (offener Übergang) und läuft die Außenwand dort in einer Linie weiter, darf ein Fenster oder eine Tür über den Übergang hinaus in die Wand des Nachbarraums reichen. Die Mitte der Öffnung bleibt auf der Wand ihres eigenen Raums.

![Arten von Öffnungen](images/editor-opening-kinds.jpg)

Jede Öffnung hat:

- **Breite**, **Brüstung** und **Höhe**, dazu die Anschlagseite. Mit **Auswählen** schiebst du sie entlang der Wand.
- **Fensterbank** (nur Fenster): *automatisch* (Standard) zeichnet ab 30 cm Brüstung eine Fensterbank innen und außen – außer bei einem Fenster, das direkt auf einem anderen Fenster oder einer Tür derselben Wand sitzt (Oberlicht, feststehendes Oberteil, in zwei Teile geteilte Glasfront): Das bekommt keine eigene. *Keine*, *nur innen* oder *nur außen* legen es fest, etwa für eine Fensterfront ohne Brett oder ein Fenster über einer Küchenzeile. Von Hand gewählt erscheint sie auch bei einem bodentiefen Fenster oder einer Terrassentür (dann auf Bodenhöhe) und bei einer Glaswand, die von sich aus keine hat.
- **Stil:** Zimmertür, Haustür, Haustür mit Glasausschnitt, mit einem oder zwei Seitenteilen, Glastür, Schiebetür oder **Durchbruch (ohne Tür)**. Bei Seitenteilen stellst du darunter ihre **Breite** ein (leer = automatisch), bei zweien links und rechts getrennt; ein einzelnes Seitenteil sitzt gegenüber dem Anschlag, mit **Seitenteil an der Anschlagseite** neben den Bändern. Ein Durchbruch ist nur eine Öffnung in der Wand, ohne Zarge und Türblatt; das Licht fällt immer hindurch. Fenster gibt es als Standard oder mit Sprossen. „Automatisch“ wählt eine Haustür für Außentüren.
- **Flügel:** einflügelig oder zweiflügelig, mit eigenem Kontakt für den zweiten Flügel.
- **Markieren in 3D:** *Wenn offen* (Standard) lässt offene Fenster und Türen warm leuchten. *Wenn geschlossen* dreht das um, etwa für die WC- oder die Kinderzimmertür: Sie leuchtet, solange sie zu ist. Das braucht einen Kontakt; ohne Sensor wird nichts markiert.
- **Ohne Sensor geschlossen zeigen:** Eine Tür ohne Kontakt steht in 3D halb offen, damit man sie als Tür erkennt. Der Haken zeichnet sie geschlossen, etwa für eine Haustür oder ein Carport ohne Sensor.
- **Öffnungswinkel (seit 2.0.6):** Wie weit das Türblatt offen steht: **Standard**, 15°, 30°, 45°, 60° oder 90°. Ohne Sensor steht die Tür immer so weit offen, mit Sensor öffnet sie so weit, sobald er „offen“ meldet. **Standard** bleibt wie bisher: ohne Sensor halb offen, mit Sensor ganz offen.
- **Smart Lock:** Das Schloss der Tür (Nuki, Aqara, `lock.*`). In 3D steht ein Pin an der Tür: 🔒 zu, rot leuchtend, solange sie offen ist; ein Tipp schließt auf oder ab. Auch ein Tipp auf die Tür selbst (ohne Antrieb) öffnet ihr Menü mit **Abschließen** bzw. **Aufschließen**, immer mit Rückfrage; solange das Schloss offen ist, leuchtet die freie Kante des Türblatts sanft in der Akzentfarbe – egal, was der Türkontakt meldet. An einer zweiflügeligen Tür oder Terrassentür sitzt der Pin am Hauptflügel (auf der Seite des Anschlags). Die Sprache fragt es ab („Ist die Haustür abgeschlossen?“).
- **Kontakt umkehren:** Für Sensoren, die offen und geschlossen andersherum melden. NeonPlan zeigt dann offen, wenn der Sensor geschlossen meldet, und umgekehrt (Standard: aus).

Türen und Fenster lassen sich im Plan auch an einem breiten Streifen um die Öffnung antippen; ein ausgewählter Raum listet seine Türen und Fenster im Formular.

![Haustür](images/editor-front-door.jpg)

**Sensoren:**

| Feld | Wirkung in 3D |
|---|---|
| **Rollladen** | Der Rollladen fährt vor dem Fenster – oder vor einer Tür (Haustür, Terrassentür, Schiebetür) – mit der Position der Cover-Entität |
| **Positions-Sensor** | Für Rollläden, deren Position über einen eigenen Sensor kommt, etwa bei Homematic. Bei Bedarf umkehrbar |
| **Vor dem Schalten nachfragen** | Auf, Zu und Positionen fragen im Schnellmenü und im Raumfenster erst nach, und Wischen über das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie. Gut für Tablets, auf denen Rollläden oder das Garagentor sonst versehentlich fahren |
| **Kontakt** | Die Tür schwingt auf, das Fenster öffnet sich. Angeboten werden Binärsensoren der Klasse Tür, Fenster oder Öffnung und solche ohne Klasse (KNX, enOcean, Template-Sensoren haben oft keine) |
| **Kippkontakt** | Ein zweiter Sensor, der „gekippt“ meldet |
| **Kippwinkel-Sensor** | Optional: ein Sensor, der den Kippwinkel in Grad liefert (z. B. „Rotation“ eines Shelly BLU Door/Window). Der Flügel kippt in 3D genau so weit; **Winkel für „ganz gekippt“** (Standard 15°), ein **Offset** für den Wert bei geschlossenem Fenster und **andersherum zählen** passen ihn an die Montage an. Ab einem kleinen Winkel gilt das Fenster als gekippt, auch für die Regenwarnung |
| **Kontakt zweiter Flügel** | Für zweiflügelige Fenster und Türen |
| **Garagentor** | Ein Garagentor folgt einer Cover-Entität oder einem Kontakt (an = offen; auch Sensoren, die „open“/„closed“ melden). Als Kontakt geht auch ein **Schalter oder input_boolean**, der das Tor antreibt: an = offen, Antippen in 3D schaltet ihn. Gibt dein Antrieb nur einen kurzen Impuls, wählst du den **Schalter, Taster (`button`) oder `input_button` unter Antrieb** und den echten Torkontakt unter Kontakt: Ein Tipp aufs Tor schaltet den Schalter ein bzw. drückt den Taster (mit *Vor dem Schalten nachfragen* erst nach Rückfrage), offen oder zu zeigt der Kontakt. Der offene Teil liegt dann unter der Decke. Ein Tor- oder Garagen-Cover an einer **Tür** (z. B. ein Schiebetor) bewegt das Türblatt statt eines Rollladens |

Rollläden und Kontakte ordnet NeonPlan 3D über den Bereich automatisch zu. Du kannst sie jederzeit von Hand ändern.

### 4.8 Möbel

![Die Möbelbibliothek](images/editor-library.jpg)

Das Werkzeug **Möbel** öffnet rechts die Bibliothek: die 80 eingebauten Modelle und alles aus deinen installierten Möbel-Packs, zusammen sortiert nach dem, **was** es ist – Sofas, Sitzmöbel, Tische, Schränke & Regale, Betten, Küche, Geräte, Bad, Leuchten, TV & Audio, Büro, Technik & Smart Home, Heizen & Klima, Energie, Haushalt, Deko, Pflanzen, Garten & Außen, Kinder, Fitness, Haustiere, Fahrzeuge, Treppen & Geländer, Architektur. Jede Karte zeigt ein **Bild**, das Maß (Breite × Tiefe) und woher das Möbel kommt („Basis“ oder der Pack-Name). Die Bilder zeichnet NeonPlan beim ersten Aufklappen und merkt sie sich im Browser; auf sehr schwachen Geräten bleiben die Karten ohne Bild, die Vorschau beim Darüberfahren gibt es trotzdem.

- **Raum-Chips** oben: Beim Öffnen eines Raums ist sein Raumtyp vorgewählt (ein „Wohnzimmer“ zeigt Wohnen, eine „Küche“ Küche) – die Bibliothek zeigt dann nur, was in diesen Raum passt, plus alles, was überall passt (Leuchten, Technik). **Alle Räume** hebt den Filter auf, jeder andere Chip wechselt ihn.
- **Filter-Chips:** ⚡ **Verknüpfbar** (nimmt eine Entität), 💡 **Leuchtet** (verknüpft ein Licht), 🌳 **Außen**.
- **Familien:** Gibt es ein Möbel in mehreren Größen (Esstisch 120 / 160 / 200, Bett 90 bis 200, Unterschrank 30 bis 120), steht es als **eine Karte** mit Chips für die Größen; der Chip legt genau diese Größe ab. So bleibt die Liste auch mit vielen Packs überschaubar. Gibt es ein Möbel nur für eine Seite („Ecksofa links“, „Sofa mit Récamiere links“), bekommt es von selbst einen Chip für die andere Seite – der legt es gespiegelt ab.
- **★ Favoriten** und **🕘 Zuletzt benutzt** stehen ganz oben, sobald es welche gibt – der Stern an jeder Karte merkt sie, beides bleibt im Browser.
- Das **Suchfeld** findet deutsche und englische Namen, den Pack-Namen und Alltagswörter („lampe“ findet alle Leuchten, „schrank“ alle Schränke), mehrere Wörter in beliebiger Reihenfolge („sofa ecke“); Escape leert es. Beim Suchen sind alle Abschnitte offen.
- Lange Abschnitte zeigen zuerst 24 Karten und darunter **„… weitere zeigen“**.

Die **Arbeitsplatte** (Küche) ist eine freie Platte ohne Unterbau, für Lücken in der Küche oder einen selbst gebauten Schreibtisch; ihre **Höhe** ist die Oberkante, voreingestellt 91 cm. Unter Sofas stehen neben dem Sofa ein **Ecksofa (L-Form)** und eine **Wohnlandschaft (U-Form)**; mit **Spiegeln** sitzt der Schenkel des Ecksofas auf der anderen Seite. Auf Geräten, die die Karten ohne Bild zeigen, erscheint beim Darüberfahren die größere 3D-Vorschau wie bisher.

**Symbole an den Einträgen:**

- 💡 Eine **Leuchte**: Sie lässt sich mit einem Licht verknüpfen und in 3D schalten.
- ⚡ Ein **elektrisches Möbel**: Es nimmt eine Entität und einen Leistungssensor, etwa ein Fernseher, eine Waschmaschine oder ein Thermostat.

**Platzieren und bearbeiten:**

- Einen Raum antippen, dann einen Eintrag wählen. Das Möbel erscheint im Raum.
- **Ziehen** verschiebt es. In der Nähe einer Wand dreht es sich mit dem Rücken zur Wand und rastet bündig ein. **Alt** schiebt frei.
- Der **Griff vor dem Möbel** dreht es in 15°-Schritten, die **Ecken** ändern die Größe. Pack-Möbel ab den Packs von Oktober 2026 behalten dabei, was fest ist: Beine, Armlehnen, Platten und Griffe bleiben so dick wie sie sind, Sitzfläche und Korpus wachsen – ein auf 3 m gezogenes Sofa hat weiter 20 cm breite Armlehnen, ein höheres eine höhere Lehne.
- Rechts stellst du Breite, Tiefe, Höhe, Drehung und **Höhe über Boden** ein. **Spiegeln** vertauscht links und rechts – das L-Sofa andersherum, der Schrank mit der Tür auf der anderen Seite; der Punkt steht auch im Rechtsklick-Menü und in der Möbelleiste der 3D-Ansicht. Mit der Höhe über Boden hängst du einen Netzwerkschrank oder ein Regal an die Wand oder stellst einen Trockner auf die Waschmaschine. Sie zählt immer vom Boden: Ein Oberschrank steht von sich aus auf 1,45 m, ein Wand-Fernseher mittig auf 1,3 m; du kannst beide höher oder tiefer setzen. **Höhe automatisch** setzt sie zurück.
- **Zustand von:** Jedes Möbel kann eine Entität zeigen, die an, belegt oder zu Hause meldet – dann leuchtet seine Oberseite: das Bett mit Belegungsmatte, der Sessel, die Sauna. Eine zweite Entität beleuchtet die andere Hälfte (links/rechts, beim Hochbett unten/oben); stellst du die erste auf *keine*, rückt die zweite an ihre Stelle. Lampen, Energiegeräte und Bildschirme haben ihre eigenen Felder dafür.
- **Wandansicht:** **Wandansicht** oben in der Werkzeugleiste und dann in einen Raum klicken (nah an einer Wand öffnet sich genau diese Wand) – oder **▦ Wände dieses Raums von vorne ansehen** im Raumformular, **▦ Wandansicht** im Möbelformular und im Rechtsklick-Menü, **▦** bei jeder Wand unter *Wandhöhen* – zeigt die Wand von vorne – mit Türen und Fenstern und allem, was an ihr steht oder hängt, als echte Ansicht der Möbel von vorne: Schränke, Regale, Oberschränke, Fernseher, Wandleuchten. Ein Möbel ziehst du dort entlang der Wand und, wenn es hängt, in der Höhe; dabei zeigen Maßlinien den Abstand zu den Wandenden und zum Boden, und Kanten rasten an Wandenden, Türen, Fenstern und anderen Möbeln ein (**Alt** zieht frei). Pfeiltasten schieben um 1 cm, mit **Umschalt** um 10 cm; unten stehen **Abstand von links** und **Höhe über Boden** zum Eintippen. Die Pfeile **‹** und **›** links und rechts (ohne gewähltes Möbel auch **←** und **→**) drehen dich zur Wand, die links bzw. rechts anschließt – so gehst du einmal rundherum durch den Raum. Ein Doppelklick öffnet das Möbel im Grundriss. Oben rechts wechselst du zwischen **3D im Raum** und **Wand von vorne**: In 3D stehst du in der Raummitte auf Augenhöhe und schaust auf die Wand – mit allem im Raum, auch dem Tisch vor der Eckbank. Ein Möbel antippen wählt es aus, Ziehen verschiebt es auf dem Boden, der runde Griff **↕** über dem gewählten Möbel hebt oder senkt es (mit Höhenanzeige), Mausrad oder zwei Finger gehen näher heran oder weiter weg, die mittlere oder rechte Maustaste (am Tablet zwei Finger) schaut sich um – die linke Maustaste bleibt so den Möbeln vorbehalten; unten stehen **Abstand von links**, **Abstand zur Wand** und **Höhe über Boden** zum Eintippen, dazu **↺ 45°** / **↻ 45°** und die **Drehung** in Grad – an der Wand gedreht rückt das Möbel von selbst in den Raum. Ein fixiertes Möbel zeigt unten **🔒 Lösen**: erst lösen, dann lässt es sich ziehen. **Wand von vorne** ist die flache Ansicht zum zentimetergenauen Ausrichten an der Wand. Dort zoomst du mit dem Mausrad (dorthin, wo die Maus steht), am Tablet mit zwei Fingern oder mit **＋** / **−** unten rechts; **⤢** zeigt wieder die ganze Wand, vergrößert schieben die Pfeile daneben den Ausschnitt. Mit **Energie Pro** setzt eine Leiste links Stromzähler, Wechselrichter, Stromspeicher und Wallbox direkt an die gezeigte Wand.

![Wandansicht: 3D im Raum und Wand von vorne](images/wall-view.jpg)

- **Duplizieren** und **Löschen** stehen ebenfalls dort.

![Ein Möbel ausgewählt](images/editor-furniture.jpg)

**Möbel-Blöcke** (eine Küche, eine Schrankwand): Stell die Möbel einzeln, wie es passt, und fass sie dann zu einem Block zusammen.

- **Umschalt + Klick** nimmt ein Möbel zur Auswahl dazu oder wieder heraus, **Umschalt + Ziehen** über eine freie Stelle zieht einen Rahmen – alles, dessen Mitte im Rahmen liegt, ist ausgewählt. Am Tablet ohne Umschalttaste: **Mehrere auswählen** im Möbelformular einschalten, dann nimmt Tippen dazu und Ziehen zieht den Rahmen.
- Mehrere ausgewählte Möbel verschiebst, drehst (**R**, ↺/↻ 90° – um ihre gemeinsame Mitte), kopierst (**Strg+D**), fixierst oder löschst du zusammen. **Als Block zusammenfassen** macht daraus einen dauerhaften Block (oranger Rahmen mit „Möbel-Block“).
- Ein Klick auf irgendein Teil wählt danach den **ganzen Block**; Ziehen verschiebt ihn, auch in **3D daneben**. Ein **einzelnes Teil** bearbeitest du per **Doppelklick** (am Tablet zweimal antippen) oder über seinen Namen in der Liste rechts – etwa einen Oberschrank 2 cm höher. **Ganzen Block wählen** führt zurück, **Block auflösen** macht wieder Einzelmöbel daraus. Ist ein Teil fixiert, bleibt der ganze Block stehen – ein Hinweis sagt es, **Alle lösen** gibt ihn frei.
- **In der Wandansicht** gehen Blöcke genauso – in **Wand von vorne** wie in **3D im Raum**: **Umschalt + Klick** (am Tablet *Mehrere auswählen*) oder **Umschalt + Ziehen** (Rahmen, nur von vorne) wählt mehrere Teile, unten **Als Block zusammenfassen**. Ziehen schiebt den ganzen Block an der Wand entlang (er rastet mit seinen Außenkanten ein), unten schaltest du zwischen **Ganzer Block** und **Nur dieses Teil** um – so richtest du einen einzelnen Schrank aus, ohne den Block aufzulösen. Ein Doppelklick auf ein Teil eines Blocks wählt ebenfalls nur dieses Teil.
- **An die Wand** (Leiste links in der Wandansicht): wenige Symbole statt einer langen Liste – Unterschränke & Boards, Hängendes, Hochschränke, Sitzen & Liegen, Leuchten, deine Packs (und Energie mit Energie Pro) –, dazu eine Suche und **Zuletzt benutzt**. **Tipp auf eine freie Stelle an der Wand:** NeonPlan misst die Lücke (unten: stehend, oben: hängend) und zeigt nur, was hineinpasst – zuerst, was sie am besten füllt. Schränke nach Maß (Küchenzeile, Hängeschrank, Hochschrank, Sideboard, Regal …) werden auf die Breite der Lücke angepasst (↔), alles andere kommt in seiner Größe an den linken Rand der Lücke. Jedes Möbel zeigt ein kleines Bild. **Größe ändern** in *Wand von vorne*: Am gewählten Möbel ziehen die Anfasser **links und rechts** die Breite, **oben** die Höhe und bei Hängendem **unten** die Unterkante – die andere Seite bleibt stehen, die Kanten rasten an Nachbarn, Wandenden, Türen und Fenstern ein (**Alt** frei), darüber steht live das Maß. Unten tippst du **Breite** und **Höhe** auch ein (auch in *3D im Raum*). Ein gewähltes Teil (oder mehrere) löschst du unten mit **Löschen** oder mit der Taste **Entf**.

![Ein Möbel-Block: die Küche](images/editor-block.jpg)

### 4.9 Räume einrichten

![Ein Raum mit Paket](images/editor-package.jpg)

**Einrichten …** an einem Raum stellt ein ganzes Möbelpaket an die Wände: Küchenzeile, Küche in L-Form, Bad, Schlafzimmer, Wohnzimmer, Esszimmer, Büro, Kinderzimmer oder Flur. Leuchten verbinden sich dabei mit den Lichtern des Bereichs. Danach passt du einzelne Möbel an. **Strg+Z** nimmt das ganze Paket zurück.

### 4.10 Geräte

![Geräte eines Raums](images/editor-devices.jpg)

Ein Raum mit Bereich listet rechts alle Geräte dieses Bereichs, nach Gerät gruppiert. Die Hauptentität steht vorn, weitere wie LED-Anzeigen oder Effekte stehen hinter **„+n mehr“**. Ein Suchfeld hilft bei großen Bereichen. Bringt ein Gerät sehr viele Entitäten mit (z. B. die Segmente eines LED-Streifens aus Govee2MQTT), zeigt die aufgeklappte Liste die ersten 40 – die Suche grenzt weiter ein –, und **„Alle n im Raumfenster ausblenden“** nimmt sie mit einem Klick aus dem Raumfenster (**„Alle n wieder zeigen“** holt sie zurück).

Sensoren erscheinen, wenn sie etwas für den Raum messen: Temperatur, Luftfeuchte, CO₂ und Luftqualität, Leistung und Energie, Gas- und Wasserzähler, Helligkeit und Luftdruck. Zähler ohne Geräteklasse zählen mit, wenn ihre Einheit passt (m³, l, kWh, lx). Akku- und Signalsensoren bleiben außen vor. Der Wert erscheint mit den Nachkommastellen, die in Home Assistant eingestellt sind. Fehlt ein Gerät, prüfe in Home Assistant, ob es dem Bereich des Raums zugeordnet ist.

Über der Liste wählst du die Quelle: **Dieser Bereich** (Standard), **Andere Bereiche** (die Geräte der übrigen Bereiche, nach Bereich gruppiert; steht ein Gerät schon in einem anderen Raum, steht das dabei, und **Platzieren** holt es hierher) oder **Ohne Bereich** (etwa Template-Lichter, Gruppen und Helfer; hier zählt jeder Sensor mit Zahlenwert und Einheit). Der Bereich in Home Assistant ändert sich dabei nicht.

**Raumklima:** Im Raumformular legst du unter **Raumklima** fest, welche Sensoren Temperatur, Luftfeuchte und CO₂ des Raums liefern (Heatmap und Raumfenster). *Automatisch* nimmt die Sensoren des Bereichs und die im Raum platzierten, lässt aber Gerätetemperaturen weg, etwa von einem 3D-Drucker oder den Vorlauf einer Wärmepumpe. Hat der Raum keinen eigenen Sensor, zählt die Ist-Temperatur (und Luftfeuchte) seines **Thermostats** (Klima-Entität); ein Thermostat lässt sich auch von Hand wählen. *Keiner* blendet den Wert aus.

- **Platzieren** setzt ein Gerät in den Raum. **Alle … platzieren** unter der Liste setzt nach einer Rückfrage alle Hauptgeräte auf einmal; **Rückgängig** (Strg+Z) nimmt sie in einem Schritt zurück.
- Lichter werden dabei als Leuchten aus der Bibliothek gesetzt, damit sie in 3D leuchten.
- **☆** nimmt ein Gerät ins Raumfenster der 3D-Ansicht auf, ohne es in den Plan zu setzen. **👁** blendet ein Gerät des Bereichs im Raumfenster aus (durchgestrichen in der Liste, 🙈 holt es zurück) – für Entitäten, die dort nur stören. **Aa** blendet nur den Zustand eines Geräts im Raumfenster aus (∅ zeigt ihn wieder), etwa bei einem Rollladen ohne Rückmeldung. Beides geht auch für die weiteren Entitäten eines Geräts unter „mehr“, jede für sich; ein reines „unbekannt“ lässt das Raumfenster bei Schaltern, Rollläden und Lampen ohnehin weg.
- Ein platziertes Gerät ziehst du im Plan an seinen Platz.

![Ein Gerät ausgewählt](images/editor-device.jpg)

Ein ausgewähltes Gerät hat:

- **Höhe des Symbols**, **Drehung** und bei Lichtern die **Montage**: Decke, Boden, Tisch oder Wand.
- **Vor dem Schalten nachfragen:** Beim Antippen in 3D, im Schnellmenü und im Raumfenster erscheint erst eine Rückfrage. Das schützt etwa den Server-Schalter vor einem versehentlichen Tipp. Ein Doppeltipp auf den Raum lässt dieses Gerät aus.
- **Symbol in 3D:** *Automatisch* folgt dem Schalter Keine / Wichtige / Alle der 3D-Ansicht. *Immer zeigen* zeigt das Symbol auch bei „Wichtige“, etwa für einen Temperatursensor. *Ohne Watt* lässt die Leistung weg, etwa an einer Steckdose. *Ausblenden* zeigt nie ein Symbol. Bei „Keine“ bleiben alle Symbole aus.
- **Eigenes Symbol:** Der Name eines Material-Design-Icons wie in Home Assistant, etwa `mdi:thermometer` oder `mdi:water-alert`, ersetzt das Symbol nach Geräteart im Pin. Leer lassen = Standard. Gilt genauso für elektrische Möbel.
- **Als Möbel darstellen:** Ersetzt den Pin durch ein passendes Möbel an derselben Stelle, schon mit dem Gerät verknüpft – ein Lautsprecher oder Smart Display für einen Media Player, eine Leuchte für ein Licht, ein Heizkörper für ein Thermostat, der Saugroboter für einen Sauger. Die Liste zeigt nur Möbel, die zur Geräteart passen. Im Möbelformular holt **Wieder als Geräte-Pin** den einfachen Pin zurück; Strg+Z nimmt beides zurück. **Bei einer Kamera** (seit 2.0.7) bleibt der Pin mit allen Kamera-Einstellungen; das gewählte Modell ist nur ihr Aussehen: Es ersetzt das eingebaute Kamera-Modell, wandert und dreht sich mit der Kamera, und eine neue Auswahl tauscht es aus. **Standard-Kameramodell** in derselben Liste holt das eingebaute Modell zurück.
- **Eigener Name** und **Name unter dem Symbol in 3D zeigen:** Mit Haken steht der eigene Name klein unter dem Pin – drei Thermometer im Garten („Pool Wasser“, „Pool Luft“, „Gewächshaus“) bleiben so unterscheidbar. Der Haken erscheint, sobald ein eigener Name eingetragen ist; Möbel mit eigenem Namen haben ihn genauso. Die Karten-Option `marker_names: true` zeigt die Namen aller Geräte mit eigenem Namen.
- **In Raummitte** und **Entfernen**.

### 4.11 Leuchten

Leuchten sind Möbel mit einem verknüpften Licht. Es gibt Deckenleuchte, Einbauspot, Aufbau-Spot, LED-Panel, Pendelleuchte, Deckenventilator mit Licht, Stehlampe, Deckenfluter, Tischlampe, Wandleuchte, LED-Streifen, Wegleuchte und Garten-Spot.

- Das 3D-Modell leuchtet in Farbe und Helligkeit des Lichts. Boden und Wände des Raums werden mit beleuchtet, zwei farbige Deckenleuchten mischen sich dazwischen. In den Nachbarraum fällt das Licht nur durch Türen. Eine Lampe über einer Treppe oder Deckenöffnung (bis 1,5 m daneben) leuchtet auch durch die Öffnung in die Etage darunter.
- Farbeffekte wie ein Farbwechsel werden in 3D animiert.
- Tischlampen stehen auf dem Möbel darunter (unter einer hoch liegenden Arbeitsplatte ab 1,2 m – etwa einer Treppenstufe aus Arbeitsplatten – bleibt, was darunter passt, auf dem Boden), Wandleuchten und LED-Streifen rasten an der Wand ein, bei Pendelleuchten ist die Höhe die Abhängung unter der Decke. Bei Wandleuchten aus Packs sitzen Lichtschein und Licht in den leuchtenden Teilen (dem Glas einer Laterne).
- **Deckenventilator mit Licht:** Das Licht schaltet die Leuchte unter dem Motor. Unter **Ventilator (fan-Entität)** wählst du den Ventilator: Seine Flügel drehen sich in 3D mit seiner Stufe (bei 100 % etwa einmal pro Sekunde, aus = still). Er bekommt ein eigenes Symbol neben der Leuchte mit seiner Stufe; Tippen schaltet ihn, lange drücken öffnet das Menü mit der Stufe. Die Breite ist die Spannweite der Flügel, die Höhe die Abhängung unter der Decke. Auf alten Tablets drehen die Flügel mit wenigen Bildern pro Sekunde, und nur solange der Ventilator läuft.
- **Höhe über Boden:** Wandleuchten hängen von sich aus auf 1,75 m, LED-Streifen direkt unter der Decke. Im Formular stellst du für beide eine eigene **Höhe über Boden** ein, etwa für einen Streifen unter den Hängeschränken oder hinter dem TV-Board. **Höhe automatisch** setzt sie zurück. Auch Einbauspots, Aufbau-Spots, Deckenleuchten, LED-Panels und flache Deckenleuchten aus Packs (etwa die Werkstattleuchte) haben das Feld: Von sich aus sitzen sie unter der Decke, mit einer eigenen Höhe etwa unter den Hängeschränken oder unter einer Treppe – Modell und Lichtkegel strahlen dann von dort nach unten auf die Arbeitsplatte. Unter einer Dachschräge hängen Deckenleuchten, Spots und Pendelleuchten an der Dachunterseite statt in der Luft. Ein Streifen unter 1 m Höhe (Sockelleiste, hinter dem Schrank) strahlt nach oben an die Wand, höher montierte strahlen nach unten. Ein Streifen unterhalb der Schnitthöhe bleibt auch bei geschnittenen Wänden sichtbar. **Neigung um die Länge** legt den Streifen an eine Dachschräge oder kippt ihn zur Seite (90° = die Leuchtfläche zeigt seitlich), **Anstieg (°)** lässt ihn entlang seiner Länge ansteigen, etwa die Treppe hinauf oder am Handlauf (rund 35–40°); die Höhe über Boden ist dann seine Mitte. **Senkrecht** stellt ihn hochkant: Dann läuft er von der Höhe über Boden nach oben, am Türrahmen oder als Lichtsäule, und leuchtet rundum.
- **Farbe und Helligkeit von:** Schaltet ein Relais (Shelly, Schaltaktor) die Lampe, während die Leuchte selbst Farbe und Helligkeit kennt, kommt An/Aus vom Schalter und die Farbe von dieser zweiten Entität.
- **Nur in einer Farbe leuchten:** Die Lampe leuchtet nur, solange das Licht ungefähr die gewählte Farbe zeigt. So kann ein Farblicht als Signal dienen – gelb für „Wasser“ am Waschbecken –, ohne dass seine anderen Farben (rot, grün, blau für andere Meldungen) dort erscheinen.
- **Leuchtstärke in 3D (%):** Wie kräftig die Leuchte in 3D leuchtet. Unter 100 % dämpft helle LED-Streifen, damit der Raum nicht überstrahlt, über 100 % lässt eine schwache Lampe stärker leuchten. Gilt auch für Lichter, die als Gerät platziert sind; in Home Assistant schaltet es nichts.
- Statt eines Lichts geht auch ein Schalter, etwa ein Relais für das Deckenlicht.
- Mehrere Leuchten dürfen demselben Licht folgen.

![Spots setzen](images/editor-spots.jpg)

**Spots setzen** an einem Raum legt ein Raster aus Leuchten an, die alle einem Licht folgen, etwa sechs Einbauspots an einem Dimmer. Spalten und Reihen wählst du vorher.

### 4.12 Elektrische Möbel

Fernseher, Medienwand, Wohnwand mit TV (die Wohnwand ohne TV ist eine Leuchte: Vitrinen und LED-Leisten leuchten mit der verknüpften Lampe), Schreibtisch mit Monitor, Waschmaschine, Trockner, Spülmaschine, Heizkörper, Saugroboter und viele Pack-Möbel lassen sich mit Entitäten verknüpfen:

- **Heizkörper – Heizt (Sensor):** Sagt der Thermostat nicht, ob er gerade heizt (Tuya-Ventile melden stattdessen einen Sensor „Work state“), wähle diesen Sensor im Feld **Heizt (Sensor)**: „opened“, „heating“, „on“ oder eine Öffnung über 0 % lässt den Heizkörper glühen.
- **Gerät** oder **Fernseher (Media-Player oder Steckdose)**: Als Gerät geht auch ein **Status-Sensor**, etwa der Druckstatus eines 3D-Druckers (Bambu Lab u. a.). Das Möbel gilt dann als aktiv, solange der Status „running“, „printing“, „prepare“ oder ähnlich meldet.  Ein Fernseher leuchtet, solange er läuft. Ein älterer Fernseher an einer smarten Steckdose nimmt einfach deren Schalter; der Bildschirm leuchtet, solange die Steckdose an ist, und ein Tipp schaltet sie. Waschmaschine, Trockner und Spülmaschine leuchten, solange sie arbeiten – Waschmaschine und Trockner mit einem Lichtring um die runde Tür. Ein Heizkörper mit Thermostat glüht beim Heizen. Das **Klimagerät (Wand)** hängt oben an der Wand und leuchtet am Luftauslass in der Farbe seines Modus: rot Heizen, blau Kühlen, grün Automatik, gelb Entfeuchten, weiß nur Lüften – hell, solange es arbeitet, gedämpft im Standby. Ein **Herd** glüht auf den Kochfeldern, solange er kocht; ein Betriebszustand-Sensor (z. B. Home Connect: „run“, „ready“, „inactive“) lässt ihn bei „ready“ schwach glühen und bei „inactive“ aus.
- **Leistungssensor (W)**: Das Möbel zeigt seine Watt. **Läuft ab (Watt)** legt fest, ab wie viel Watt es als laufend gilt und leuchtet (leer: 10 W) – praktisch für Geräte hinter einer Steckdose, die im Standby ein paar Watt ziehen, etwa 100 W. Ist der Wert gesetzt, zeigt der Pin darunter nur den Zustand (oder „Standby“) statt der Standby-Watt.
- **Zusatzwert am Symbol:** ein Sensor, dessen Wert am Symbol des Möbels steht – die Wassertemperatur einer Gastherme, die Luftfeuchte eines Lüftungsgeräts. Mit dem Zusatzwert zeigt sich das Symbol von selbst.
- **Vor dem Schalten nachfragen** und **Symbol in 3D** wie bei Geräten.
- **Bilder nach Zustand** bei Bildschirmen: eine Pro-Erweiterung, siehe [6.3](#63-bildschirme-live).

Steht dort „automatisch“, sucht NeonPlan 3D die passende Entität im Bereich selbst.

### 4.13 Kameras

![Kamera im Plan mit Sichtkegel](images/editor-camera-wedge.jpg)

Kameras platzierst du wie jedes Gerät. Danach:

- **Montage:** Wand mit Blickrichtung oder Decke als Dome, der rundum schaut.
- Im Plan zeigt ein **Kegel**, wohin die Kamera schaut. Der **Griff an der Spitze** dreht die Kamera und setzt zugleich die Reichweite.
- **Sichtwinkel (°)**, **Reichweite (m)** und **Neigung nach unten (°)** stellst du auch als Zahl ein.
- **Sichtkegel in 3D zeigen** lässt sich je Kamera abschalten. In 3D endet der Kegel an der ersten Wand: Eine Innenkamera sieht nicht durch die Wand in den Nachbarraum.

In 3D hängt die Kamera als kleines Modell an der Wand oder Decke, ihr Sichtfeld liegt als Kegel auf dem Boden. Meldet ein Bewegungs- oder Präsenzsensor der Kamera Bewegung, wird der Kegel rot.

### 4.14 Stellplätze und Fahrzeuge

![Stellplatz](images/editor-parking.jpg)

Das Möbel **Stellplatz** in der Gruppe Stellplätze markiert, wo ein Auto steht: in der Garage, in der Einfahrt oder irgendwo auf dem Grundstück. Ein neuer Stellplatz zeigt mit dem Pfeil vom Garagentor des Raums in die Garage hinein, ohne Tor entlang der längeren Raumseite.

- **Sensor „Auto anwesend“:** ein `binary_sensor`, `device_tracker` oder ähnliches. Solange er ein Auto meldet, steht das Fahrzeug da.
- **Fahrzeug:** das Modell aus dem Pack „Fahrzeuge“.
- **Fahrzeugtyp-Sensor** (optional): Liefert ein Sensor, welches Auto da ist, etwa aus einer KI-Kameraauswertung, ordnest du jedem Zustand ein Modell zu.
- **Größe (%)** passt das Modell an den Platz an. Ist das Fahrzeug höher als der Raum, warnt der Editor.

![Fahrzeug in der Garage](images/view-garage.jpg)

### 4.15 Saugroboter

Das Möbel Saugroboter – und genauso der **Saugroboter mit Station** aus dem Pack Smart Home – wird mit der `vacuum`-Entität verknüpft. Saugt der Roboter, fährt er in 3D in Bahnen durch den Raum seiner Station und kehrt danach zurück. Die Bahn ist simuliert, weil Home Assistant die echte Position meist nicht kennt. Beim Saugroboter mit Station fährt der Roboter des Modells selbst los: Solange er unterwegs ist, steht die Station leer.

Viele Roboter melden aber den Raum, den sie gerade saugen, zum Beispiel Roborock und Dreame mit einem Sensor „Aktueller Raum“. NeonPlan 3D findet diesen Sensor am Gerät des Roboters von selbst; im Feld **Aktueller Raum (Sensor)** kannst du auch einen anderen wählen. Der gemeldete Name wird mit dem Raumnamen und dem Home-Assistant-Bereich verglichen, Groß- und Kleinschreibung und die Schreibweise von Umlauten spielen keine Rolle („Kueche“ passt zu „Küche“). Wechselt der Roboter den Raum, erscheint er in 3D dort und fährt seine Bahnen. Passt kein Raum, bleibt er im Raum seiner Station.

Seine Bahnen machen einen Bogen um Möbel, die auf dem Boden stehen: Schränke, Sofas, Betten, Küchenzeilen und Geräte. Unter Tischen, Schreibtischen, Stühlen, Hockern und Bänken fährt er durch, ebenso über Teppiche und unter hängenden Möbeln wie Oberschränken.

### 4.16 Treppen und Bodenöffnungen

- Die **Treppe** aus der Bibliothek steigt von der markierten Vorderkante nach hinten an. Reicht sie bis zur Etage darüber, schneidet sie dort die Treppenöffnung in die Decke.
- Die **U-Treppe mit Podest** (Arbeiten & Sonstiges) hat zwei Läufe nebeneinander: Sie steigt links von der markierten Vorderkante nach hinten, wendet am Podest und kommt rechts wieder nach vorn hoch. **Spiegeln** dreht die Laufrichtung um. Wie die gerade Treppe bekommt sie beim Einfügen die Höhe bis zur Etage darüber und schneidet dort die Öffnung in die Decke. Voreingestellt ist sie 2,10 × 2,70 m groß.
- Mit dem Werkzeug **Bodenöffnung** ziehst du ein Loch direkt in den Boden einer Etage auf, etwa über dem Treppenaufgang oder für eine Galerie. Von oben sieht man hindurch. Liegt sie über mehreren Räumen, wird sie in jedem davon ausgeschnitten. Mehrere Öffnungen dürfen sich überlappen, so entsteht zum Beispiel eine L-Form.
- Weitere Treppen und Geländer bringt das Pack **Treppen & Geländer**.

![Werkzeug Bodenöffnung](images/editor-hole-tool.jpg)

### 4.17 Außenflächen und Außenleuchten

Mit **Draußen → Außen** ziehst du Rasen, Terrasse, Weg, Einfahrt, Beet, Hecke oder Zaun auf. Im Menü wählst du vorher, was du aufziehst; die Art lässt sich danach im Formular noch ändern. Dort wählst du auch **Rechteck** (aufziehen) oder **Freie Form**: Dann setzt du die Ecken einzeln wie bei einem freien Raum – für geschwungene Beete, schräge Grundstücksgrenzen oder einen L-förmigen Weg; ein Tipp auf den ersten Punkt oder **Enter** schließt die Fläche. Eine ausgewählte Außenfläche änderst du an ihren Ecken; ein Rechteck bleibt dabei ein Rechteck. Hecke und Zaun bekommen im Formular eine **Höhe** (Thuja-Sichtschutz 2,5 m, Beeteinfassung 0,5 m); **Umrisslinie zeigen** ohne Haken lässt die Leuchtlinie am Rand weg, etwa bei einem Grundstück aus mehreren Rasenflächen. **Höhenversatz** senkt eine Fläche unter den Boden oder hebt sie an – die Einfahrt hinunter zur tieferen Garage, die erhöhte Terrasse; Leuchten darauf folgen mit. **Gefälle** neigt eine Fläche: Höhenunterschied in Metern und die Richtung, in die sie fällt (die hohe Kante liegt auf dem Höhenversatz) – eine Einfahrt, die zur Straße abfällt, ein Hang im Garten; Zaunpfosten und Leuchten stehen auf der schrägen Fläche. **Wildfläche** ist eine Art für ungemähte Ecken. **Balkon** ist für obere Etagen: eine dünne Platte auf Höhe der Etage mit einem durchsichtigen Stabgeländer (Höhe im Formular); an Kanten, die an einer Hauswand liegen, entsteht kein Geländer – Balkontüren dahinter bleiben frei. **Aus Flächen darunter ausschneiden** macht eine Fläche zum Loch in jeder vorher gezeichneten Fläche, in der sie ganz liegt – ein Teich oder eine Wildfläche mitten in einem einzigen großen Rasen. **Pergola / Rahmen** zeichnet Eckpfosten, Balken und Sparren in der eingestellten Höhe, mit **X-Verstrebung** an den Seiten – für Pergolen, Carport-Gerüste oder den Unterbau eines Rolldachs. Zaun und Pergola können **offen** bleiben: Die Kante vom letzten zum ersten Punkt fehlt dann, der Zaun lehnt am Haus. Bäume, Sträucher und Gestrüpp kommen als Möbel aus dem Pack **Garten & Terrasse** (ab Release 3: Eiche, Linde, Birke, Ahorn, Obstbaum, Fichte, Kiefer, Thuja, Strauch, Blühstrauch, Gestrüpp, Baumgruppe); Breite und Höhe im Möbelformular bestimmen Krone und Wuchs. Wegleuchten, Garten-Spots und Außen-Wandleuchten beleuchten die Außenflächen und die Fassade. **Pool:** Pools zeichnest du mit **Draußen → Pool**; im Menü wählst du die Form – **Eckig**, **Rund**, **Oval** oder **Frei** – und ziehst ihn dann auf (rund: so breit wie die kurze Seite des Rahmens). Einen runden oder ovalen Pool vergrößerst du an den vier Ecken seines Rahmens (der Kreis bleibt rund) oder im Formular über Durchmesser bzw. Breite und Tiefe; die Form selbst bleibt. Ein Pool schneidet sich selbst aus dem Rasen darunter aus. **Aufstellpool** stellt ihn als Becken auf den Boden, mit **Beckenhöhe**; sonst ist er eingelassen. **Beckentiefe** ist die Tiefe vom Rand bis zum Boden (sonst 1,50 m), **Rand über dem Rasen** wie weit der Rand herausschaut – ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand; man sieht durch das Wasser auf Wände und Boden des Beckens. Die Tiefe zeigt sich, wenn der Pool in einer Rasen-, Terrassen- oder anderen Fläche liegt – ohne Boden drumherum wäre das Becken von außen zu sehen, dann bleibt er flach.

**Außenflächen wie Räume:** Gib einer Fläche (Rasen, Terrasse, Balkon, Pool …) im Formular einen **Bereich** aus Home Assistant, etwa „Garten“, und auf Wunsch einen **Namen**. Dann verhält sie sich wie ein Raum: Sie steht in der Raumleiste, ein Tipp in 3D öffnet sie mit den Geräten des Bereichs (Gartenlicht, Steckdosen, Bewässerung), die Kamera rahmt sie ein, und mit **Anzeige → Werte** steht die Außentemperatur an ihrem Namen – Sensoren mit „Außen“ im Namen zählen hier ausdrücklich mit. Im Formular der Fläche stehen die Geräte des Bereichs wie bei einem Raum: **Platzieren**, **☆** zeigt ein Gerät im Raumfenster, ohne es in den Plan zu setzen, **👁** blendet es dort aus, **Aa** lässt seinen Zustandstext weg. Hecken, Zäune und Pergolen haben keinen Bereich.

![Garten bei Nacht](images/view-garden.jpg)

### 4.18 3D daneben

**3D daneben** zeigt die 3D-Ansicht rechts neben dem Plan. Jede Änderung erscheint dort nach einem Augenblick.

- Die **Leiste zwischen Plan und 3D** ziehst du, um das Verhältnis zu ändern. Der Browser merkt sich die Einstellung.
- Oben in der 3D-Hälfte schaltest du zwischen **Wände hoch** und **Schnitt**.
- Ein Möbel oder Gerät kannst du auch in der 3D-Hälfte antippen und ziehen. Unten erscheint dann eine Leiste mit Breite, Tiefe, Höhe, Höhe über Boden, Drehung und Löschen.
- Ohne Stecknadel klappt die Seitenleiste neben der 3D-Ansicht ein, sobald du dort etwas antippst, und öffnet sich über der 3D-Hälfte; **‹** am rechten Rand holt sie zurück. Mit **📌 Angeheftet** bleibt sie daneben stehen und klappt nur mit **Einklappen** ein.

### 4.19 Dach

![Ein Bauernhaus mit Wohnhaus, Scheune und Anbau, jedes mit eigenem Dach](images/view-roof-sections.jpg)

Ein einfaches Haus bekommt unter **Bauen → Dach** bei **Dachform** ein Flach- oder Satteldach über das ganze oberste Geschoss, mit First (entlang der langen oder der kurzen Seite, z. B. Reihenhaus), Neigung und Überstand. Für alles andere – ein Haus in L- oder T-Form, ein Wohnhaus mit Scheune, ein Anbau mit Pultdach, ein Dach, das auf einer Seite tief herunterzieht – baust du das Dach aus **Dachflächen**.

- Wähle unter **Dach** die Option **Dachflächen (frei)** oder das Werkzeug **Dach**. Beim ersten Mal schlägt NeonPlan 3D die Dachflächen aus deinen Räumen vor: je Etage die Teile, über denen keine höhere Etage liegt, jeweils mit Satteldach. Danach passt du sie an.
- Im Werkzeug **Dach** ziehst du eine neue Dachfläche im Plan auf. Antippen wählt eine aus, ziehen verschiebt sie, die Ecken ändern die Größe. Oben wählst du die Etage, deren Räume im Plan liegen. Daneben öffnet sich die 3D-Ansicht mit dem ganzen Haus, so siehst du jede Änderung sofort.
- Mit dem Schloss **🔓 Fixieren** (oder der Taste **L**) sitzt eine fertige Dachfläche fest und verrutscht nicht mehr beim Antippen; **Grundriss sperren** sperrt alle Dachflächen mit.
- Jede Dachfläche hat eine **Form** – Sattel, Walm, Krüppelwalm (oben abgewalmter Giebel), Zelt (vier Flächen zur Spitze), Mansard (steil unten, flach oben), Pult, Flach und Attika (Flachdach mit Brüstung) – und eine **Firstrichtung** (↔ oder ↕).
- Bei Sattel, Walm und Krüppelwalm wählst du unter **Ende links/rechts** (bzw. **oben/unten**) für jedes Ende des Firsts eigens Giebel, Walm oder Krüppelwalm – zum Beispiel ein Walmdach mit einem senkrechten Giebel am anderen Ende. **wie die Form** lässt das Ende so, wie die Form es vorgibt.
- **Traufe** und **Neigung** stellst du für beide Seiten getrennt ein. Alle Höhen zählen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter, so entsteht etwa ein Abschleppdach über einem niedrigen Anbau. Ein Pultdach steigt von der ersten Seite an; **Seiten tauschen** dreht es um.
- **Drehung:** Steht ein Anbau oder Flügel schräg zum Haus, drehst du seine Dachfläche mit **Drehung** (oder ↺ 15° / ↻ 15°) im Uhrzeigersinn. Gauben und Zwerchgiebel darauf drehen mit, Dachfenster und Solarfelder bleiben auf ihr. Eine gedrehte Fläche verschiebst du durch Ziehen; die Ecken zum Ändern der Größe gibt es erst wieder bei 0° (zurückdrehen, Größe ändern, wieder drehen). Wo ein gedrehter Flügel in ein anderes Dach läuft, schneidet ihn dessen Dachfläche ab. Ab Werk steht jede Dachfläche auf 0°.
- **Wandoberkante** ist die Höhe, auf der die Wände unter dem Dach enden. Eine neue Dachfläche übernimmt sie von den Räumen darunter, egal welche Etage der Plan gerade zeigt. Von dort werden Giebel und Drempel bis unter das Dach hochgezogen, so ist auch der Raum unter einem Pultdach geschlossen.
- **Sitzt auf Etage** zeigt, zu welcher Etage die Dachfläche in der 3D-Ansicht gehört, und setzt sie auf die Wandoberkante einer anderen Etage – Wandoberkante und Traufen wandern mit. Das hilft, wenn eine neue Dachfläche auf der falschen Etage gelandet ist, etwa über einem Obergeschoss mit Treppenloch in der Mitte.
- **Flachdach als freie Form:** Bei einem Flachdach gibt es den Knopf **Umriss des Geschosses übernehmen** – die Fläche bekommt den Umriss der Räume des angezeigten Geschosses (auch L- oder Z-förmig), eine Fläche ohne Kanten statt mehrerer Rechtecke. Die Ecken lassen sich danach im Plan ziehen; **Zurück zum Rechteck** löscht die Form.
- **Gauben:** Im Formular einer Dachfläche fügt **+ Gaube** eine Gaube auf der gewählten Seite ein – 2 m breit, Front an der Traufwand, Traufe 1,4 m über der Dachtraufe, Satteldach, so tief, dass ihr First auf die Schräge trifft. Eine Gaube ist eine kleine Dachfläche: verschieben, Breite, Höhen und Form (Sattel, Pult) änderst du wie bei jeder anderen. Die Hauptfläche öffnet sich darunter, die Wangen schließen seitlich ab, und die Wand des Dachgeschosses steigt unter der Gaube bis zu ihrer Traufe – dort setzt du mit **Tür & Fenster** das Gaubenfenster.
- **Zwerchgiebel (Drei-Giebel-Haus):** Ein Giebel, der aus der Traufseite vortritt, ist eine breite Gaube, deren Traufe auf der Wandoberkante liegt: **+ Gaube**, dann Breite ziehen (z. B. 3,4 m) und **Traufe** auf die Wandoberkante setzen. Die Tiefe passt sich von selbst an – die Gaube reicht genau so weit, bis ihr First auf die Schräge trifft, und das Hauptdach öffnet sich nur dort, wo das Gaubendach darüber liegt (Kehlen). Die Dachgeschoss-Wand unter dem Zwerchgiebel steigt bis in den Giebel, das Fenster darin setzt du mit **Tür & Fenster**.
- **Dachschrägen (Kniestock):** Liegt die Wandoberkante unter der Deckenhöhe des Geschosses darunter (auch wenn die Schräge schon im Geschoss darunter beginnt: dann enden dessen Wände an der Traufseite ebenfalls an der Schräge) – zum Beispiel 0,9 m über dem Boden des Dachgeschosses –, enden dessen Wände an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenwände an der Schräge. Fenster passen dann nur, wo die Wand hoch genug ist (im Giebel); an der Traufseite nimmst du Dachfenster. Im Grundriss zeigen gestrichelte Linien, wo unter der Schräge noch 1,5 m und 2 m Kopfhöhe bleiben.
- Wo eine Dachfläche an einen höheren Teil des Hauses stößt, etwa ein Pultdach an der Hauswand, entfällt dort der Überstand; das Dach endet an der Wand.
- Unten im Formular steht die **Firsthöhe**. Dachflächen dürfen sich überschneiden: Das niedrigere Dach läuft unter das höhere, wie bei einem echten Anbau.
- **Neu aus den Räumen erzeugen** ersetzt alle Dachflächen durch einen neuen Vorschlag, **Zurück zu einem Dach** schaltet auf das einfache Dach zurück. Die Dachflächen bleiben dabei für später gespeichert, schneiden aber keine Wände mehr an.

- Unten im Formular steht die **Firsthöhe**. Dachflächen dürfen sich überschneiden: Das niedrigere Dach läuft unter das höhere, wie bei einem echten Anbau – was unter der anderen Fläche liegt, wird weggeschnitten, und wo sich zwei Flächen treffen, zeigt eine Linie die Kehle. Ein Flügel, dessen First quer auf die Schräge eines höheren Dachs trifft (Haus in L- oder T-Form), läuft bis in dieses Dach hinein und endet dort sauber in zwei Kehlen statt mit einem Giebel.
- **Neu aus den Räumen erzeugen** ersetzt alle Dachflächen durch einen neuen Vorschlag, **Zurück zu einem Dach** schaltet auf das einfache Dach zurück.
- **Überdachung:** Für ein Terrassendach oder einen Carport ziehst du eine Dachfläche über eine Fläche ohne Raum. Sie wird automatisch zur Überdachung: ein flaches Pultdach auf 2,4 m, getragen von Pfosten und Balken statt Wänden, mit durchsichtiger Dachfläche. An der Hauswand liegt sie auf. Den Schalter **Überdachung** gibt es auch im Formular jeder Dachfläche.

![Eine Terrassenüberdachung vor dem Haus](images/view-canopy.jpg)

![Das Werkzeug Dach mit einer ausgewählten Dachfläche](images/editor-roof.jpg)

#### Dachfenster

Unter den Dachflächen legt **+ Dachfenster** ein Fenster in eine Dachfläche (Standard 78 × 118 cm). Es lässt sich im Grundriss verschieben, auch auf eine andere Dachfläche, und hat wie ein normales Fenster **Rollladen**, **Kontakt** und **Kippkontakt**: Offen klappt der Flügel oben angeschlagen nach außen, gekippt ein Stück, und der Rollladen fährt von oben über die Scheibe.

Zu jedem Dachfenster gehören ein **Name** (optional), **Rollladen**, **Kontakt** und **Kippkontakt** – und ein **Fenstermotor**: Velux, Roto oder Fakro melden die Fensterstellung als Cover, der Flügel öffnet in 3D so weit, wie der Motor steht. Offen oder gekippt leuchtet der Rahmen warm wie bei einem Wandfenster. Liegt das Fenster in einer Dachfläche, schneidet es ein Loch in die Schräge, so sieht man aus dem Dachgeschoss hinaus. Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, blenden die Dachfenster mit aus. Mit **Ohne Dach über dem Raum zeigen** bleibt ein Fenster dann an seiner Stelle über dem Raum stehen – offen, gekippt, mit dem Rollladen. Die Scheibe ist durchsichtig wie bei einem Wandfenster, der Rollladen hat Lamellen; so sieht man auch aus der Ferne, ob er zu ist. Reicht die Schräge über einen Raum der Etage darunter, gehört das Fenster zu dieser Etage und zeigt sich mit ihr. Jedes Dachfenster gehört zu dem Raum darunter: Tippst du den Raum an, stehen Rollladen, Kontakt und Fenstermotor in seiner Raumkarte, und scheint die Sonne auf die Dachfläche, fällt ihr Licht durch das Fenster auf den Boden des Raums (mit dem Rollladen weniger).

### 4.20 Energie: Solarfelder

Im Werkzeug **Energie** lassen sich nur Solarfelder und Energiegeräte verschieben, im Grundriss wie in 3D; Räume und Möbel sind dort gesperrt, ein Hinweis oben im Grundriss sagt das. Das Werkzeug sammelt alles rund um Energie im Haus, zuerst die **Solarfelder** (Zähler, Heizung und Wärmepumpe folgen). **+ Solarfeld** legt ein Feld auf die sonnigste freie Dachfläche, so groß, wie es passt. **+ Frei aufgeständert** stellt ein Feld auf Gestellen neben das Haus, etwa in den Garten oder auf ein flaches Garagendach. **+ An der Wand** hängt eine Reihe Module an die sonnigste Außenwand der angezeigten Etage (Fassade, Balkon).

Felder lassen sich im Grundriss und in der **3D-Ansicht daneben** mit der Maus verschieben, auch auf eine andere Dachfläche oder Wand. Dachfenster genauso, im Werkzeug **Dach**. Die Module liegen in der Neigung der Dachfläche, auf einem Flachdach stehen sie aufgeständert. Das klappt beim einfachen Sattel- und Flachdach und auf allen Dachabschnitten (Satteldach, Walmdach, Pultdach, Flachdach). Bei Walm- und Zeltdach stehen auch die beiden dreieckigen **Walmseiten** zur Wahl, etwa die Südseite eines Walmdachs mit Ost-West-First; die Felder werden zur Spitze hin schmaler.

| Feld | Wirkung |
|---|---|
| **Dachfläche** | Die Fläche mit Himmelsrichtung und Neigung, zum Beispiel „Hauptdach · Süd · 35°“ |
| **Name** | Zum Beispiel „Strang 1 Süd“; mehrere Felder für mehrere Stränge oder Dachflächen |
| **Reihen** und **Module pro Reihe** | Größe des Feldes. Eine Liste wie **„4, 4, 3“** gibt jeder Reihe ihre eigene Länge (von der Traufe aus), kürzere Reihen sitzen links, mittig oder rechts. Module, die über die Fläche hinausragen würden, fallen weg |
| **Module einzeln an/aus** | Im Grundriss einzelne Module wegtippen oder wieder dazunehmen, etwa um einen Schornstein oder ein Dachfenster herum |
| **Full Black** / **Blau** | Optik der Module: ganz schwarz (Standard) oder klassisch blau |
| **Modulbreite** / **Modulhöhe** | Größe eines Moduls im Hochformat, Standard 1,13 × 1,72 m |
| **Modulleistung (Wp)** | Spitzenleistung eines Moduls, Standard 400 – bestimmt die kWp des Feldes und des Strangs und wie hell die lebenden Module (Energie Pro) leuchten |
| **Strang** | Felder, die zusammen verschaltet sind, auch auf verschiedenen Dächern: etwa 5 Module auf dem Haus und 5 auf der Garage in „Strang 1“. Der Strang hat einen Namen, einen PV-Sensor und ist **angeschlossen an** einen Wechselrichter – oder an einen Stromspeicher mit eigenem Solareingang (eine Powerstation wie EcoFlow); beide legst du unter **Geräte** an |
| **PV-Leistung dieses Feldes** | Der Leistungssensor seines Strangs, für die kommende Pro-Erweiterung |
| **Hochformat** / **Querformat** | Lage der Module (1,13 × 1,72 m) |
| **Abstand vom Rand** / **von der Traufe** | Position des Feldes. Im Grundriss lässt es sich mit der Maus verschieben, auch auf eine andere Dachfläche; über den Rand der Fläche hinaus rutscht es nicht |
| **Neigung der Aufständerung** | Flachdach und Garten: Winkel der Gestelle, dazu die Richtung |
| **Frei aufgeständert** | Das Feld steht auf Gestellen, frei verschiebbar. **Höhe der Aufstellfläche** hebt es an, z. B. 2,8 m auf ein Garagendach (0 = Boden). **Drehung** richtet die Reihen aus, ebenso die Knöpfe ↺/↻ 15° und der Dreh-Griff im Grundriss; das Feld dreht sich dabei um seine Mitte |
| **Wand** | Module hängen an einer Außenwand; in der Liste heißt jede Wand nach Etage, Raum und den Eckpunkt-Nummern aus dem Plan („Wand Erdgeschoss · Flur 4–5 · Ost · 1,2 m“), frei stehende Wände heißen „frei stehend“. Auf einer Wand behält das Feld so viele Module, wie in die Reihe passen; für ein liegendes Modul zu kurz, nimmt sie es hochkant, und eine Wand schmaler als ein Modul (etwa eine 0,9-m-Gartenmauer) trägt eins mittig, das über beide Enden ragt. Statt „Abstand von der Traufe“ gibt es die **Höhe über dem Boden**. **Neigung von der Wand** stellt sie schräg: oben abstehend oder unten abstehend, bis 90° als Vordach. Die Etagen-Knöpfe oben wählen, an welcher Etage du arbeitest |
| **Fläche füllen** | Legt so viele Module auf die Fläche, wie passen |

Unter dem Feld steht die Leistung, gerechnet mit 400 W je Modul. Die Grundriss-Sperre hält Solarfelder nicht fest; mit **🔓 Fixieren** im Formular lässt sich ein Feld (und genauso ein Dachfenster) aber einzeln festsetzen. **Geräte:** Wechselrichter, Stromspeicher und Wallbox legst du ebenfalls im Werkzeug **Energie** an, unter **Geräte**, auf der oben gewählten Etage. Die Wallbox kommt von selbst in die Garage, Wechselrichter und Speicher in einen Technikraum (HWR, Keller …), jeweils an eine Wand ohne Tür oder Tor, und der Grundriss springt hin. Ein Tipp auf ein Gerät in der Liste zeigt es im Grundriss. Dort trägt jedes Gerät im Werkzeug Energie eine runde Markierung mit Symbol (⚡ Wechselrichter, 🔋 Speicher, 🔌 Wallbox), an der man es anfasst und verschiebt, auch wenn darüber ein Solarfeld auf dem Dach liegt. Mit einem Leistungssensor zeigen sie ihre Watt. Der **Stromspeicher** zeigt mit dem Feld **Ladestand** zusätzlich seinen Ladestand, etwa „64 % · ▲ 1,5 kW“ (▲ lädt, ▼ entlädt), die **Wallbox** mit einem **Status**-Sensor „lädt · 11 kW“ oder „angesteckt“.

**Stromzähler und Netzanschluss:** Der **Stromzähler** ist das vierte Energiegerät; er bekommt den Netzsensor (W, + = Bezug) und zeigt „Netzbezug 420 W“ oder „Einspeisung 900 W“. Der **Netzanschluss** markiert, wo die Leitung zum Stromanbieter das Grundstück verlässt, etwa am Ende der Einfahrt; er wird dort angelegt, wo die Leitung von selbst enden würde, und lässt sich im Grundriss verschieben. Jedes Gerät hat im Formular ein Feld **Name** („Wechselrichter Nord“), das in Liste, Formular und an den Pins in 3D erscheint, und Wechselrichter und Speicher ein **Modell**: Wandgerät, schmal und hoch oder Hybrid; Turm, Wandspeicher oder kompakter Balkonspeicher. Mehrere Wechselrichter und Speicher gehen, zum Beispiel eine große Anlage und ein Balkonkraftwerk: Jeder bekommt seinen eigenen Sensor.

**Energiebilanz:** Netz, Solar und Akku holt NeonPlan von den Geräten im Plan (Zähler, Wechselrichter, Speicher; mehrere werden zusammengezählt, Ladestände gemittelt). Im Abschnitt **Energiebilanz** wählst du andere Sensoren, drehst Vorzeichen um und gibst den Hausverbrauch an. **Aus dem Energie-Dashboard übernehmen** holt die Sensoren, die du im Energie-Dashboard von Home Assistant eingetragen hast: zu jeder Energie-Statistik den Leistungssensor desselben Geräts, dazu Gas- und Wasserzähler. Prüfe danach die Vorzeichen. **Gaszähler** und **Wasserzähler** sind Zähler (Zählerstand, etwa in m³); mit Energie Pro zeigt die Haus-Karte, wie viel davon heute verbraucht wurde.

Ganz unten kündigt eine Karte die kommende Pro-Erweiterung **Energie Pro** an. Alles, was du hier einrichtest, bleibt kostenlos und wird von ihr direkt genutzt.

### 4.21 Keller und Gelände

Ein **Keller** ist eine Etage mit negativer **Höhe über Boden**, etwa −2,6 m. Unter **⚙ Einstellungen → Gelände** stellst du ein:

- **Geländehöhe** (in Metern, Erdgeschoss = 0) sagt, wo der Boden um das Haus liegt. Rasen, Wege und Terrassen liegen darauf. Für ein **Souterrain** oder Hochparterre senkst du sie so weit, wie der Keller herausschauen soll, etwa auf −1,2 m. Steht das Haus dadurch höher als das Gelände, bekommt es in 3D einen **Sockel** bis zum Boden – nichts schwebt.
- **Keller in der Erde zeigen:** Etagen unter dem Gelände stecken in 3D im Erdreich. Öffnest du den Keller, siehst du ihn wie in einer Baugrube, mit den Erdwänden ringsum. Ohne Haken stehen sie frei wie bisher.
- **Gelände zurücksetzen** stellt alles auf den Anfang.

**Kellerfenster:** Im Formular eines Fensters setzt **Kellerfenster** die passende Größe – 100 × 50 cm, 25 cm unter der Decke. Liegt ein Fenster unter dem Gelände, bekommt es in 3D von selbst einen **Lichtschacht** mit Gitterrost. Der Haken **Lichtschacht** steht im Fensterformular genau dann, wenn 3D einen Schacht zeichnet (Fenster in einer Außenwand unter dem Gelände), und nimmt ihn wieder weg (etwa wenn außen ein Weg vorbeiführt); **Rand über dem Gelände** hebt Rand und Gitter an, damit ein Kies- oder Plattenweg ums Haus sie nicht verdeckt. Liegt im Garten-Werkzeug ein Rasen, Weg oder eine Terrasse bis ans Haus über dem Schacht, steht sein Rand von selbst knapp über dieser Fläche.

### 4.22 Markisen

Unter **Möbel → Terrasse & Balkon** gibt es die **Markise**. Sie fährt in 3D mit ihrem Cover aus und ein – wie ein Rollladen.

- **Art:** **Gelenkarm** (die Klassiker über der Terrasse), **Fallarm** (Balkon, Fenster – die Arme schwenken nach vorn und unten), **Senkrecht / ZIP** (das Tuch fährt in Seitenschienen senkrecht herunter), **Pergola / Wintergarten** (fester Rahmen mit Pfosten, das Tuch fährt oben aus) und **Seitenmarkise** (Sichtschutz, aus einem Pfosten zur Seite gezogen). Mit der Art setzt NeonPlan passende Maße, die du danach anpasst.
- **Größe:** Breite ist die Markise entlang der Wand, Tiefe der Ausfall ganz ausgefahren (beim Fallarm die Armlänge, bei der Pergola bis zu den Pfosten). Die Rückseite des Rahmens kommt an die Hauswand; **Höhe über Boden** ist die Unterkante der Kassette (bei der Seitenmarkise die Höhe des Tuchs). **Neigung** ist das Gefälle des Tuchs.
- **Markise (Cover):** das Cover aus Home Assistant. Meldet es seine Position auch während der Fahrt, fährt die Markise in 3D langsam mit; meldet es nur „öffnet“/„schließt“, fährt sie in der **Laufzeit ganz aus**. Ein eigener **Positionssensor** geht auch. **Richtung umkehren** hilft bei Covers, die 100 % melden, wenn die Markise eingefahren ist.
- **Volant:** die herunterhängende Stoffkante vorne, abschaltbar.

### 4.23 Mülltonnen und Briefkästen

Unter **Möbel → Haushalt** stehen **Mülltonne** und **Briefkasten**.

- **Mülltonne – Bauform:** Rolltonne 120 l oder 240 l, Container 1100 l, Mehrkammer-Tonne, Sack, Eimer / Caddy oder Unterflur-Container (von dem nur die Einwurfsäule aus dem Boden ragt). Mit der Bauform setzt NeonPlan die üblichen Maße.
- **Abfallart:** Restmüll, Bio, Papier, Verpackung, Glas, Garten, Recycling oder Sonstiges. Sie gibt der Tonne die Farben, die in deinem Land üblich sind (nach dem Land in Home Assistant: in Deutschland etwa Papier blau, Bio braun, Gelbe Tonne gelb; in Australien zeigt der Deckel die Sorte). **Farbe** und **Deckel** kannst du danach frei wählen.
- **Briefkasten – Bauform:** Wandbriefkasten (hängt auf 1 m), Briefkasten auf Pfosten mit Fähnchen, Standbriefkasten mit Zeitungsfach, Paketbox oder Briefkastenanlage.

### 4.24 Haustechnik: Lichtschalter, Steckdosen, WLAN und Warmwasser

Unter **Möbel → Haustechnik** (in der Wandansicht unter 🔌 **Schalter**) stehen **Lichtschalter** und **Steckdose**. Sie hängen an der Wand: der Schalter auf 1,05 m, die Steckdose auf 0,3 m (die Außensteckdose auf 0,5 m); mit **Höhe über Boden** setzt du eine eigene Höhe. Liegt die Dose beim Platzieren ein Stück in der Wand, zeigt 3D sie vorn auf der Wand; an einer niedrigen Wand (etwa einer Balkonbrüstung) rutscht sie ohne eigene Höhe so weit herunter, dass sie unter der Wandkante bleibt.

- **Tasten / Dosen im Rahmen:** 1 bis 4 in einem Rahmen; der Rahmen wird dabei passend breiter.
- **Jede Taste, jede Dose bekommt ihre eigene Entität:** ein Licht, ein Schalter (das Relais, der Zwischenstecker) oder ein Lüfter. Sie leuchtet in 3D, solange die Entität an ist – eine Steckdose grün, die Taste eines Lichtschalters sanft: bei einem Licht in seiner Farbe, sonst in der Akzentfarbe.
- **Dieselbe Entität an mehreren Dosen:** Schaltet ein Relais zwei Steckdosen (innen und außen, oder eine Doppeldose), wählst du bei beiden dieselbe Entität. Das geht über beliebig viele Rahmen.
- **Leistung (nur Steckdosen):** pro Dose optional ein Leistungssensor. Die Dose leuchtet heller, je mehr sie zieht, und zählt als Verbraucher mit.
- **Bauform (Steckdose):** innen oder **Außensteckdose mit Klappe**.
- **Antippen:** Mit nur einer Entität schaltet ein Tippen sie direkt. Bei mehreren öffnet sich ein kleines Menü mit einer Schaltfläche pro Taste. **Vor dem Schalten fragen** gilt für alle Tasten.
- Das Symbol über dem Rahmen zeigt bei mehreren Tasten, wie viele an sind (z. B. „1/2“), bei Steckdosen auch die Leistung.

**WLAN-Access-Point:** eine flache Scheibe unter der Decke oder eine Platte an der Wand (**Montage**). Als **Status** nimmst du, was sagt, ob er da ist – einen Verbindungs-Sensor, den Zustand, einen device_tracker; auch Diagnose-Entitäten (etwa von UniFi) stehen zur Wahl. Sein Ring leuchtet blau, solange er da ist, und rot, wenn er fehlt; dann zeigt sich auch sein Symbol mit „Offline“. Mit dem Sensor **verbundene Geräte** steht deren Zahl am Symbol.

**Warmwasserspeicher:** ein Standspeicher oder ein flacher Speicher an der Wand (auf 1,1 m). Verknüpft wird die water_heater-Entität, ein Thermostat oder der Schalter des Heizstabs, dazu optional ein Sensor mit der **Wassertemperatur** und ein Leistungssensor. Er glüht warm, solange er heizt (Thermostat „heizt“, Schalter an oder Leistung über der Schwelle), schwach, solange er bereit ist, und zeigt die Wassertemperatur. Die **Wärmepumpe (innen)**, Therme, Pufferspeicher und Warmwasserspeicher aus den Packs nehmen ebenfalls eine water_heater-Entität; ihr Pin zeigt Betriebsart und Wassertemperatur.

---

## 5. Die 3D-Ansicht

![Eine Etage](images/view-floor-eg.jpg)

### 5.1 Haus, Etage, Raum

Die 3D-Ansicht hat drei Ebenen:

1. **Das ganze Haus** mit einer Beschriftung je Etage: Räume, Lichter an, offene Fenster.
2. **Eine Etage:** Die Etagen darüber fliegen weg, die darunter bleiben je nach Einstellung abgedunkelt, gestapelt oder ausgeblendet.
3. **Ein Raum:** Die Kamera fliegt hinein, das Raumfenster öffnet sich.

**Navigieren:**

- Eine Etagenbeschriftung oder einen Raum antippen geht eine Ebene tiefer.
- **Doppeltipp** auf eine freie Stelle, **Esc** oder **Zurück** geht eine Ebene höher.
- Ziehen dreht die Ansicht, zwei Finger oder das Mausrad zoomen.
- Links wechseln die **Etagen-Miniaturen** direkt zu einer Etage. Der kleine Pfeil darüber klappt sie zu schlichten Etagen-Knöpfen ein (das Gerät merkt sich das), in der Karte schaltet `floor_thumbs: false` sie ab.
- Oben stehen Knöpfe für alle Etagen und für die Räume der offenen Etage.

### 5.2 Die Schalter unten

Die Schalter für Wände, Etagen, Dach, Heatmap und die Pro-Anzeigen stecken unten links im Menü **Anzeige ▾**; ein Tipp daneben schließt es.

| Schalter | Wirkung |
|---|---|
| **Wände hoch** / **Schnitt** | Wände in voller Höhe, die vorderen als getöntes Glas, oder alle Wände in Hüfthöhe geschnitten – hohe Möbel (Schrank, Treppe, Hochschrank) werden mitgeschnitten, damit sie nichts dahinter verdecken. Die Wahl merkt sich jedes Gerät |
| **Auseinander** / **Gestapelt** | In der Hausansicht: Etagen auseinandergezogen oder aufeinander |
| **Dach bleibt** | In der Hausansicht: Das Dach bleibt beim Heranzoomen liegen, statt sich zu heben und auszublenden (im Editor gilt das im Werkzeug Dach und Energie immer) |
| **Abgedunkelt** / **Gestapelt** / **Einzeln** | Bei einer offenen Etage: Was mit den Etagen darunter passiert |
| **Normal** / **Temp.** / **Feuchte** / **CO₂** / **Werte** | Heatmap: Böden in der Farbe des Raumwerts; **Werte** färbt nichts, sondern schreibt Temperatur, Feuchte und CO₂ als Zahlen unter die Raumnamen |
| **Raumnamen** | Namen der Räume ein- oder ausblenden |
| **Spur** | Bewegungsspur, Pro, siehe [6.1](#61-kamera-cockpit) |
| **Wetter** | Wetter draußen, Pro, siehe [6.2](#62-wetter-draußen) |
| **⏪ Zeitreise** | Die letzten 24 Stunden im Haus abspielen, nur ansehen, Pro, siehe [6.7](#67-zeitreise) |
| **≡ / ↔** (rechts in der Etagen- und Raumleiste) | Die Leiste oben auf mehrere Zeilen umbrechen, wenn viele Räume nicht in eine Zeile passen, oder zurück in eine Zeile; in einer Zeile scrollt sie seitlich, am PC auch mit dem Mausrad. In der Hausansicht steht vor den Räumen jeder Etage ihr Name. Die Reihenfolge der Räume änderst du im Editor: ohne Auswahl in der Raumliste der Etage mit **↑** und **↓** |
| **⚙** (oben neben der Version) | Klappt die Ansichtsoptionen Qualität, Look, Symbole und FPS auf und wieder zu; so bleibt die Kopfzeile schlank |
| **Auge** (unten links, neben der Lupe) | Blendet alles aus, was nicht die 3D-Ansicht ist: Kopfzeile, Etagen- und Raumleiste, Energiewerte, Etagenbilder, Schalter. Übrig bleibt die Bühne – auf dem Handy die halbe Bildschirmhöhe mehr. Ein Tipp aufs Auge holt alles zurück; ein Raum lässt sich weiter antippen. Das Gerät merkt sich die Wahl |

![Schnittansicht](images/view-cut.jpg)

Oben rechts stehen:

| Schalter | Wirkung |
|---|---|
| **Auto** / **Tablet** / **Hoch** | Qualitätsstufe. Tablet lässt Muster, Schatten und Halos weg und wird auf Fire-Tablets automatisch gewählt. Hoch zeigt zusätzlich Lichtkegel unter Spots |
| **Uhr** | Datum und Uhrzeit in einer Ecke der Ansicht (↖ ↗ ↙ ↘) oder aus – pro Gerät; in der Karte `clock: tr` |
| **Neon** / **Blueprint** / **Tag** / **Auto** | Der Look; **Auto** zeigt Tag, solange die Sonne über dem Horizont steht (`sun.sun`), und Neon nach Sonnenuntergang – fürs Wandtablet. In der Karte `theme: auto`. Das Farbfeld daneben setzt eine **eigene Akzentfarbe**: Im Neon-Look nehmen Linien und Leuchtkanten sie an, die Knöpfe und Pins in jedem Look; ↺ bringt das Cyan zurück |
| **Keine** / **Im Raum** / **Wichtige** / **Alle** | Welche Gerätesymbole erscheinen. Wichtige zeigt nur Geräte ohne eigenes 3D-Modell und Werte wie Watt oder die laufende App. **Im Raum** zeigt in der Haus- und Etagenansicht keine Symbole und in einem geöffneten Raum nur dessen eigene – praktisch bei vielen Steckdosen und Sensoren |
| **Klein** / **Normal** / **Groß** | Wie groß die Gerätesymbole sind; das Gerät merkt sich die Wahl (Karte: `marker_size`) |
| **◧ / ◨** | Etagenbilder, Stern, Suche und Auge links oder rechts – praktisch, wenn die Ansicht am linken Rand des Dashboards sitzt |
| **⌖ Ansicht halten** | Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist; nur die Höhe wandert mit |
| **🔒 3D-Sperre** | Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter, Flüge zu Räumen behalten den Winkel; eine gespeicherte Startansicht (Haus, Etage oder Raum) nimmt ihren eigenen Winkel – auf einem Wandtablet dreht niemand das Haus aus Versehen. Gilt pro Gerät; in der Karte `angle_lock: true` |
| **FPS** | Bildrate, langsamstes Bild und Grund für jedes gezeichnete Bild. Im Ruhezustand steht dort 0 B/s |

Ganz rechts in der Kopfzeile steht die installierte Version (z. B. v1.11.0); der Mauszeiger darauf zeigt, welche Version die Integration in Home Assistant meldet.

Alle Schalter merkt sich das jeweilige Gerät.

![Blueprint](images/view-blueprint.jpg)

![Tag](images/view-day.jpg)

### 5.3 Bedienen

![Lampe antippen](images/view-tap-lamp.jpg)

- **Antippen** schaltet Lampen und Schalter. Die Lampe blinkt kurz zur Bestätigung.
- **Senkrecht wischen** auf einer Lampe dimmt, auf einem Rollladen oder Fenster fährt der Rollladen. Der Wert erscheint am Finger. Geräte und Fenster mit „Vor dem Schalten nachfragen“ reagieren nicht auf Wischen.
- **Lange drücken** öffnet das Schnellmenü: bei Lichtern Helligkeit, Farbtemperatur und Farben, bei Rollläden Auf, Stopp, Zu und feste Positionen. Raffstores und Jalousien mit Lamellen bekommen dort und im Raumfenster einen **Lamellen**-Regler (oder Lamellen auf/zu), sobald die Entität das kann. Rollläden, Garagentore und Vorhänge bekommen sie nur, wenn sie eine Lamellen-Stellung melden (manche Integrationen wie KNX kündigen Lamellen-Knöpfe auch bei Rollläden an).
- Ein **Fenster** antippen, egal ob Rahmen, Glas oder Rollladen, öffnet das Rollladen-Menü oder zeigt den Kontakt.
- **Doppeltipp auf einen Raum** schaltet alle Lichter des Raums ein oder aus. Geräte mit „Vor dem Schalten nachfragen“ bleiben außen vor.
- Fernseher, Türen und Garagentore lassen sich ebenfalls direkt antippen.

![Schnellmenü Licht](images/view-quickmenu.jpg)

![Schnellmenü Rollladen](images/view-quickmenu-cover.jpg)

![Wischen zum Dimmen](images/view-swipe.jpg)

### 5.4 Das Raumfenster

![Raumfenster](images/view-room-panel.jpg)

In einem Raum öffnet sich rechts das Raumfenster, auf Handys und hochkant unten. Es zeigt die Geräte des Raums nach Art: Licht mit Helligkeit, Farbtemperatur und Farben, **Alle an** und **Alle aus**, Rollläden mit **Alle auf** und **Alle zu**, Heizung, Medien, Schalter, Kameras mit Standbild, Sensoren sowie Szenen & Skripte.

Es zeigt die Geräte, die im Plan im Raum stehen, und alles, was du im Editor mit ☆ hinzugefügt hast. **Weitere Geräte des Bereichs** blendet den Rest ein.

Bei einem ausgewählten Raum ohne offenes Raumfenster erscheinen unten die **Szenen und Skripte** des Bereichs als Knöpfe.

### 5.5 Suchen

![Suche](images/view-find.jpg)

Der **Stern** über der Lupe öffnet das **Zentral-Menü**: Lichter an oder aus und Rollläden auf oder zu für die gezeigte Etage – in der Hausansicht für das ganze Haus, dann mit einer Rückfrage („Sicher?“, ein zweiter Tipp führt es aus). Garagentore und Tore zählen nicht als Rollläden. Darunter stehen die **Favoriten** aus dem Editor; ein Tipp startet eine Szene oder ein Skript, drückt eine Taste oder schaltet einen Schalter um. In der Karte blendet `central: false` den Stern aus.

**⚙ Einstellungen (seit 2.0.7):** Oben im Zentral-Menü öffnet **⚙ Einstellungen** die wichtigsten Einstellungen direkt in der 3D-Ansicht, ohne den Editor: **Darstellung** (Sonnenbahn und Hausschatten, Fenster leuchten nachts nach draußen, Sonnenlicht durch die Fenster) und **Warnungen** (Fenster offen bei Regen, Kontakt nicht verfügbar, Gerätenamen in Warnungen). Darunter hat jedes Modul mit Einstellungen seinen eigenen Abschnitt, etwa die **Durchsagen** (7.5). Die Einstellungen gelten für das ganze Haus; ändern dürfen sie nur Administratoren. Alles Weitere steht wie bisher im Editor unter ⚙ Einstellungen.

Bietet ein Modul etwas fürs ganze Haus an (📢 **Durchsage**), steht es ebenfalls im Zentral-Menü.

Die Lupe unten links öffnet **„Wo ist …?“**. Tippe einen Gerätenamen oder Raum. Ein Treffer fliegt die Kamera dorthin, das Gerät blinkt.

**Rundgang:** Der Knopf **🚶 Rundgang** oben rechts startet einen **Rundgang durchs Haus**: Du stehst auf Augenhöhe im gewählten Raum (sonst im größten der gezeigten Etage) und gehst hindurch. **Ziehen** schaut dich um, ein **Tipp auf den Boden** läuft dorthin – auch durch Türen in andere Räume –, **W A S D** oder die **Pfeiltasten** laufen, auf dem Tablet der **Knüppel** unten rechts. Wände halten dich auf, Türen lassen dich durch. Das Haus lebt dabei weiter: Lichter, Fernseher, Sonnenflecken, Glaskarten. Oben steht der Raum, in dem du gerade bist; **✕ Beenden** oder **Esc** führt zurück. In der Karte blendet `walk: false` den Knopf aus. Beim Rundgang zeigen sich nur die Glaskarten des Raums, in dem du stehst.

![Rundgang: Wohnzimmer und Küche auf Augenhöhe](images/walk.jpg)


### 5.6 Heatmap

![Heatmap Temperatur](images/view-heat.jpg)

**Temp.**, **Feuchte** und **CO₂** färben die Böden nach den Sensoren des Bereichs, mit einer Farbskala am Rand. Temperaturen erscheinen in der Einheit, die in Home Assistant eingestellt ist (°C oder °F); Sensoren in °F werden richtig umgerechnet.

### 5.7 Sonne und Tageslicht

![Sonnenlicht](images/view-sun.jpg)

Ist die Nordrichtung eingestellt, fällt das Sonnenlicht aus `sun.sun` durch die Fenster, die zur Sonne zeigen, als weiche Flecken auf den Boden. Heruntergelassene Rollläden verkleinern die Flecken. Wer die Flecken nicht mag, schaltet sie unter **Einstellungen** mit **Sonnenlicht durch die Fenster** ab. Tagsüber wird der Himmel hinter dem Haus heller.

**Sonnenbahn und Hausschatten (seit 2.0.7):** Ein gepunkteter Bogen um das Haus zeigt den Weg der Sonne heute, mit den Uhrzeiten von Sonnenauf- und -untergang an seinen Enden. Ein glühender Punkt darauf ist die Sonne jetzt, ein heller Punkt markiert jede volle Stunde. Auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne: So siehst du, wann die Terrasse Sonne hat. Der Schatten zeigt sich in der Ansicht **Alle Etagen** und nicht auf der Stufe **Tablet**, der Bogen auf jeder Stufe. Beides braucht die Nordrichtung und den Ort in Home Assistant; abschalten im ⭐ Zentral-Menü unter **⚙ Einstellungen** (oder im Editor unter Einstellungen) mit **Sonnenbahn und Hausschatten**.

**Fenster leuchten nachts nach draußen (seit 2.0.7):** Ist es draußen dunkel, fällt das Licht beleuchteter Räume im Erdgeschoss als warmer Schein durch die Fenster auf Rasen und Terrasse davor, in der Lichtfarbe des Raums. Heruntergelassene Rollläden dämpfen ihn. Abschalten im ⭐ Zentral-Menü unter **⚙ Einstellungen** (oder im Editor unter Einstellungen) mit **Fenster leuchten nachts nach draußen**.

### 5.8 Warnungen

![Warnung](images/view-alert-banner.jpg)

NeonPlan 3D warnt kostenlos und ohne Einrichtung:

| Warnung | Auslöser |
|---|---|
| Rauch, Gas, Kohlenmonoxid, Wasser | `binary_sensor` dieser Geräteklasse im Bereich meldet „an“ |
| Alarm | Ein `alarm_control_panel` ist ausgelöst oder löst gleich aus |
| Fenster offen bei Regen | Ein Fenster ist offen oder gekippt, und die Wetter-Entität meldet Regen, Gewitterregen, Hagel oder Schneeregen |
| Stromausfall | Die Entität aus den Plan-Einstellungen (**Stromausfall melden mit**) meldet einen Ausfall: ein Netz-Sensor der Klasse power steht auf „aus“, eine USV läuft auf Batterie, die Netzspannung liegt unter 100 V, oder ein eigener Helfer ist „an“. Der Netzanschluss in 3D wird dabei durchgestrichen |

Der betroffene Raum pulsiert rot, oben erscheint ein Banner. Ein Tipp auf die Warnung springt in den Raum. Die Regenwarnung nimmt die Wetter-Entität aus den Plan-Einstellungen und lässt sich dort unter **Warnung: Fenster offen bei Regen** einzeln abschalten. Ein einzelnes Fenster, das bei Regen offen bleiben darf (etwa unter dem Vordach), bekommt in seinem Formular den Haken **Bei Regen nicht warnen**. Hast du eine eigene Wetterstation, wählst du unter **Regen von eigener Wetterstation** ihren Regensensor (an = Regen) oder ihre Regenrate (mm/h): Dann zählt, ob es am Haus wirklich regnet – für die Warnung und, mit „Wetter draußen“, auch für den Regen in 3D.

Auf einem Wandtablet kann das Banner lang werden: „Gäste-WC · Fenster offen bei Regen: Fenster Gästebad“. Schaltest du in den Plan-Einstellungen **Gerätenamen in Warnungen zeigen** aus, steht dort nur „Gäste-WC · Fenster offen bei Regen“. Eine Warnung ohne Raum behält den Gerätenamen.

**Kontakt nicht verfügbar (seit 2.0.6, ab Werk aus):** Meldet ein Fenster- oder Türkontakt 10 Minuten lang „nicht verfügbar“ (leere Batterie, außer Funkreichweite), sieht das Fenster in 3D zu aus, obwohl es niemand weiß. Schaltest du in den Einstellungen unter **Wetter & Warnungen** den Haken **Warnen, wenn ein Fenster- oder Türkontakt nicht verfügbar ist** ein, kommt dann eine Warnung mit dem Namen des Kontakts. Ein kurzer Aussetzer beim Neustart von Home Assistant warnt nicht.

### 5.9 Kameras in 3D

![Kamera in 3D](images/view-camera-model.jpg)

Ein Tipp auf die Kamera oder auf ihren Sichtkegel öffnet das Standbild, das sich alle paar Sekunden erneuert. Ein Tipp auf das Bild öffnet das Livebild von Home Assistant. Der Kegel ist eine viel größere Tippfläche als die kleine Kamera.

![Kamera-Standbild](images/view-camera.jpg)

### 5.10 Sprachsteuerung (neu)

> **Neu in 1.20 und noch in Entwicklung.** Die Sprachsteuerung ist für alle freigeschaltet, kostenlos, und funktioniert schon gut. Sie wird in den nächsten Versionen weiter ausgebaut. Wenn ein Satz nicht so verstanden wird, wie du ihn meinst, schreib uns den Satz in den Discord oder in ein GitHub-Issue.

Sprich mit deinem Haus. Unten links in der 3D-Ansicht erscheint ein **Mikrofon-Knopf** 🎙️. Antippen, dann wird er rot und darüber steht „Ich höre zu …“. Sprich deinen Satz und mach eine kurze Pause, dann reagiert NeonPlan.

**Was du sagen kannst:**

| Du sagst | Was passiert |
|---|---|
| „Zeig das Wohnzimmer“, „Geh in die Küche“ oder einfach „Bad“ | Der Raum öffnet sich, auf seiner Etage. |
| „Zeig das Obergeschoss“, „Keller“ | Die Etage öffnet sich. |
| „Zeig das ganze Haus“ | Zurück zur Hausansicht. |
| „Zeig den Garten“, „Terrasse“ | Eine Außenfläche mit Namen und Bereich öffnet sich wie ein Raum. Heißen ein Raum und eine Außenfläche (oder deren Home-Assistant-Bereich) gleich, gewinnt der eigene Name des Raums: „Zeig die Garage“ öffnet den Raum Garage, nicht die Einfahrt im Bereich Garage. |
| „Zeig die Waschmaschine“, „Wo ist die Stehlampe?“, „Zeig den Fernseher“, „Wo ist der Trockner?“ | Die Ansicht fliegt zum Gerät oder Möbel, und es blinkt kurz auf. Möbel hören auf ihre Art („Trockner“, „Poolpumpe“), ihren eigenen Namen und Alltagswörter („TV“, „Glotze“, „Heizung“, „Auto“) – auch ohne verknüpfte Entität. Steht der Sensor als „Waschmaschine Leistung“ im Plan, reicht „Waschmaschine“. Gibt es ein Möbel mehrfach, nennst du den Raum dazu („die Heizung im Wohnzimmer“). |
| „Zeig die Kamera Haustür“, „Zeig die Kamera im Garten“ | Die Ansicht schaut durch die Kamera (mit dem Kamera-Cockpit). |
| „Zeig die Kameras“ | Die Kamera-Wand öffnet sich (mit dem Kamera-Cockpit). |
| „Was ist offen?“, „Wo ist es kalt?“, „Läuft die Waschmaschine?“, „Was zieht Strom?“, „Wer ist zu Hause?“, „Wie ist das Wetter?“, „Ist alles in Ordnung?“, „Was steht heute an?“, „Guten Morgen“, „Gute Nacht“ … | Mit dem Modul **Das Haus antwortet** (kostenlos im Shop, siehe unten): Die Antwort erscheint als Sprechblase, wird über die Sprachausgabe von Assist vorgelesen, und das Haus zeigt sie – offene Fenster blinken, der kälteste Raum öffnet sich, die Ansicht fliegt zur Waschmaschine. Die ganze Liste steht unten. |
| „Licht im Flur an“, „Mach die Rollläden runter“ | Befehle gehen an **Assist** von Home Assistant. Die Antwort erscheint als Sprechblase. |

Zusammengesetzte Wörter versteht es auch: „Auffahrtkamera“ trifft die Kamera „Auffahrt“, „Flurlicht“ das Licht im Flur. Unter **⚙ Einstellungen → Sprachsteuerung** steht die Liste **Das versteht NeonPlan**, mit den Sätzen der eingespielten Module.

NeonPlan erkennt die Namen aus **deinem Plan**: Räume, Außenflächen, Etagen, Geräte und Möbel. Ein Raum hört auch auf den Namen seines Home-Assistant-Bereichs. Bei Geräten braucht es ein „zeig“ oder „wo ist“. So bleibt „Licht im Wohnzimmer an“ ein Befehl für Assist und schaltet das Licht, statt nur hinzufliegen.

**Weitere Namen.** Heißt dein Fernseher in Home Assistant „Smart TV Pro“, du sagst aber „Wohnzimmerfernseher“ oder „Glotze“: Jeder Raum, jedes Möbel und jedes platzierte Gerät hat im Editor unter dem Namen das Feld **Weitere Namen für die Sprache** (mit Komma getrennt, bis zu zwölf). Die Namen gelten für die Sprachsteuerung und die Suche.

**Das Haus antwortet – die Fragen.** Das Modul (siehe unten) beantwortet Fragen aus deinem Plan und deinen Sensoren, ohne KI, alles lokal:

| Thema | Du fragst zum Beispiel |
|---|---|
| Offen | „Was ist offen?“, „Welche Fenster sind offen?“, „Ist im Bad ein Fenster offen?“, „Ist die Garage zu?“, „Wie lange ist das Fenster schon offen?“ – die Ansicht fliegt zu jedem offenen Fenster, von innen, und sagt dort, was es ist |
| Temperatur | „Wo ist es kalt?“, „Wo ist es am wärmsten?“, „Wie warm ist es im Wohnzimmer?“, „Wie warm ist es draußen?“ |
| Luft | „Wie feucht ist es im Bad?“, „Wie ist die Luft im Schlafzimmer?“ (CO₂), „Soll ich lüften?“ |
| Heizung | „Auf was steht die Heizung im Wohnzimmer?“, „Heizt die Heizung?“ (Thermostate des Raums) |
| Geräte | „Läuft die Waschmaschine noch?“, „Ist der Fernseher an?“, „Was läuft gerade alles?“, mit Haushalt Pro: „Wie lange läuft die Waschmaschine noch?“, „Wann ist die Wäsche fertig?“ |
| Medien | „Was läuft im Fernseher?“, „Welche Musik läuft?“ |
| Energie | „Was zieht gerade Strom?“, „Was macht die Solaranlage?“, „Wie voll ist der Akku?“ |
| Licht, Rollläden, Schlösser | „Welche Lichter sind an?“, „Ist im Flur noch Licht an?“, „Sind die Rollläden unten?“, „Ist die Haustür abgeschlossen?“ |
| Personen | „Wer ist zu Hause?“, „Wo ist Anna?“, „Ist jemand im Wohnzimmer?“, „Wo ist Bewegung?“ |
| Warnungen | „Ist alles in Ordnung?“, „Gibt es Warnungen?“ (Rauch, Wasser, Fenster bei Regen, Stromausfall …) |
| Haushalt (Haushalt Pro) | „Was steht heute an?“, „Wann kommt die Mülltonne?“, „Ist Post da?“, „Müssen die Pflanzen gegossen werden?“ |
| Auto (Auto Pro) | „Wie voll ist das Auto?“, „Lädt das Auto?“, „Wie weit komme ich noch?“, „Ist das Auto abgeschlossen?“, „Wo steht das Auto?“ |
| Wetter, Zeit | „Wie ist das Wetter?“, „Regnet es?“, „Wie spät ist es?“, „Welcher Tag ist heute?“, „Wann geht die Sonne unter?“ |
| Das Haus | „Wie viele Räume hat das Haus?“, „Wie groß ist das Wohnzimmer?“, „Wie viele Fenster hat das Haus?“ |
| Der Tag | „Guten Morgen“ – der Morgenbericht: Wetter, Warnungen, was offen ist, was heute ansteht, wer da ist, das Auto. „Gute Nacht“ – der Nacht-Check: offene Fenster und Türen, nicht abgeschlossene Schlösser, Lichter, laufende Geräte, mit Rundflug |
| Und sonst | „Wer bist du?“, „Wie geht's dir?“, „Erzähl einen Witz“, „Danke“, „Hallo“, „Was kannst du?“ |

Befehle („Mach das Licht an“, „Stell die Heizung auf 22 Grad“) gehen weiter an Assist. Die Antworten kommen in der Sprache deines Nutzers (Deutsch oder Englisch).

**Module.** Manche Fähigkeiten kommen als **Modul** aus dem Shop: ein signiertes Pack, das Code mitbringt, den NeonPlan nachlädt – geprüft und an deine Installation gebunden wie ein Möbel-Pack. Das erste Modul ist **Das Haus antwortet** (kostenlos mit Kundenkonto). Du spielst die .fp3dpack-Datei unter **⚙ Einstellungen → 🧩 Module → Modul einspielen …** ein (oder auf der Seite Erweiterungen im Abschnitt **Module**); danach steht es dort als „Modul von Mastershort“, und seine Sätze erscheinen unter 🎙 Sprachsteuerung. Für das Vorlesen braucht die Assist-Pipeline eine Sprachausgabe (Einstellungen → Sprachassistenten → Text-zu-Sprache); ohne sie bleibt es bei der Sprechblase.

**Einschalten.** Standardmäßig ist die Sprachsteuerung aus. Du schaltest sie dort ein, wo du sprechen willst:

- **NeonPlan-Seite (Panel):** Editor → **⚙ Einstellungen → 🎙 Sprachsteuerung** → **Auf diesem Gerät einschalten**. Das gilt nur für diesen Browser, also zum Beispiel das Wandtablet, aber nicht das Handy.
- **Dashboard-Karte:** Dashboard bearbeiten → NeonPlan-Karte → **Funktionen** → **Sprachsteuerung (Mikrofon-Knopf)**, oder im YAML `voice: true`. Die Karten-Einstellung gilt auf allen Geräten, die dieses Dashboard zeigen. Du kannst sie bequem am PC setzen, auch wenn sie für das Tablet gedacht ist.

**Was du dafür brauchst:**

1. **Eine Assist-Pipeline mit Spracherkennung** in Home Assistant: Einstellungen → Sprachassistenten. Gut geeignet sind Home Assistant Cloud, Whisper oder **Speech-to-Phrase**, das lokal und schnell ist, auch auf einem Raspberry Pi. NeonPlan nimmt die **bevorzugte** Pipeline, also die mit dem Stern. Unter **Assist-Pipeline auf diesem Gerät** kannst du pro Gerät eine andere wählen.
2. **https:** Browser geben das Mikrofon nur auf sicheren Seiten frei. Über `http://192.168…` geht es nicht, über Nabu Casa, ein eigenes Zertifikat oder einen Reverse Proxy schon.
3. **Die Mikrofon-Freigabe:**
   - im Browser beim ersten Antippen „Zulassen“;
   - in **Fully Kiosk**: Einstellungen → Web Content Settings → Mikrofonzugriff einschalten (Plus-Lizenz), dazu in Android die Mikrofon-Berechtigung für Fully.

**Über Assist fragen – ohne Mikrofon am Tablet.** Alles, was NeonPlan versteht, kannst du auch Assist sagen: einem Voice-Satelliten (Home Assistant Voice, ESPHome), dem Assist-Dialog oder der App. Dafür braucht Assist eine Satzdatei: NeonPlan legt `custom_sentences/de/neonplan3d.yaml` und `…/en/…` in deinem Konfigurationsordner **erst an, wenn du unter Sätze für Assist eine Auswahl triffst** (seit 1.24 – vorher geschah das beim Start). Sagst du Assist „Zeig das Wohnzimmer“ oder „Was ist offen?“, geht der Satz an **jede offene NeonPlan-Ansicht** – das Wandtablet zeigt den Raum oder die offenen Fenster, und Assist spricht die Antwort dort, wo du gefragt hast. Das Tablet selbst bleibt dabei still. Welche Sätze dort stehen, wählst du unter **⚙ Einstellungen → 🎙 Sprachsteuerung → Sätze für Assist**: **Nur eindeutige** („zeig …“, „geh …“, „frag das Haus …“, „NeonPlan, …“, „Guten Morgen“, „Gute Nacht“ – nichts davon sagt man Home Assistant selbst), **Alle Fragen** (dazu „welche Fenster sind offen“, „wo ist …“, „läuft die Waschmaschine“ – Vorsicht, einige davon beantwortet Home Assistant sonst selbst) oder **Keine** (Standard: keine Datei; eine vorhandene Datei von NeonPlan wird entfernt). Hast du die Datei selbst geändert, überschreibt oder löscht NeonPlan sie nie – der Dialog sagt dir dann, welche Sprache er in Ruhe gelassen hat. Entfernst du die Integration, verschwinden NeonPlans Satzdateien mit ihr. Mit „Frag das Haus, welche Fenster offen sind“ erreichst du NeonPlan in jedem Modus. Eigene Sätze legst du in einer weiteren Datei unter `custom_sentences` für den Intent `NeonPlanAsk` an.

**Der Dienst `neonplan3d.ask`.** Für Automationen und Skripte: Felder **Satz** (`text`), **Bildschirm** (`screen`, optional) und **Sprechen** (`speak`, Standard aus). Der Dienst liefert die Antwort zurück (`answer`, `answered`, `screen_open`), zum Beispiel für eine Benachrichtigung. Mit `speak: true` spricht die Ansicht die Antwort selbst über die Sprachausgabe ihrer Assist-Pipeline. Beispiel – jeden Abend um 22 Uhr der Nacht-Check am Wandtablet:

```yaml
action: neonplan3d.ask
data:
  text: "Gute Nacht"
  screen: "Flur"
  speak: true
```

**Bildschirmnamen.** Hast du mehrere Tablets, gib jeder Ansicht einen Namen: im Editor unter **⚙ Einstellungen → 🎙 Sprachsteuerung → Bildschirmname** (gilt für dieses Gerät) oder an der Karte mit der Option `screen: Küche`. Nennt der Dienst einen Bildschirm, reagiert nur die Ansicht mit diesem Namen; ohne Angabe reagieren alle. Ist keine Ansicht offen, antwortet Assist „Kein NeonPlan-Bildschirm ist gerade offen“.

**Testen:** Im Abschnitt **🎙️ Sprachsteuerung** startet **🎙️ Mikrofon testen** eine Probe. Sie prüft der Reihe nach https, Mikrofon, Pegel und Assist. Sie zeigt auch, welchen Raum ein gesprochener Satz öffnen würde, und schaltet dabei nichts. Steht irgendwo ein ✖, steht daneben, was zu tun ist.

**Gut zu wissen:**

- Das Mikrofon ist **nur offen, solange du sprichst**. Es lauscht nicht dauerhaft, deshalb gibt es kein Aktivierungswort. Das schont auch alte Tablets.
- Die Erkennung übernimmt **deine** Assist-Pipeline. Wie schnell und genau sie ist, hängt von ihr ab. Mit Speech-to-Phrase oder der Cloud dauert ein Satz meist ein bis zwei Sekunden.
- Hast du die Live-Regie an, unterbricht sie dich nicht, während du sprichst.

### 5.11 Ortung (neu)

> **Neu in 2.0, kostenlos.** Wer und was ist wo im Haus – ohne Bermuda, ohne ESPresense, ohne neue Hardware. NeonPlan nutzt die Bluetooth-Empfänger, die Home Assistant schon kennt.

NeonPlan zeigt, in welchem Raum du gerade bist – und wo dein iPhone oder dein Schlüsselbund liegt. Personen stehen als leuchtende Figur im Raum und gleiten beim Raumwechsel hinüber. Für jedes Gerät gibt es einen Sensor in Home Assistant („Torstens Uhr Raum: Küche“), und per Sprache fragst du „Wo ist mein iPhone?“.

**Was du brauchst:**

- **Bluetooth-Empfänger in Home Assistant** – was du schon hast, reicht:
  - **Shelly** der 2. und 3. Generation (Steckdosen, Unterputz). Im Shelly-Gerät unter **Konfigurieren → Bluetooth-Scan** auf **passiv** stellen.
  - **ESPHome-Bluetooth-Proxys** (ein ESP32 für ein paar Euro). Sie melden häufiger als Shellys, Raumwechsel kommen damit schneller an.
  - den Bluetooth-Stick am Home-Assistant-Rechner.

  Ideal ist ungefähr ein Empfänger pro Raum. Räume ohne eigenen Empfänger (Flur, Gäste-WC) erkennt NeonPlan trotzdem: Das Einlernen merkt sich, wie sie für die Empfänger in den Nachbarräumen aussehen.
- **Etwas, das du dabei hast:**
  - **Apple Watch und iPhone** mit ihrem Schlüssel (IRK) – den liest der Schlüssel-Helfer in drei Minuten aus (siehe unten). Die Uhr am Handgelenk ist ideal: Ein iPhone in der Tasche wird bei dunklem Bildschirm nach etwa einer Minute still.
  - **Android-Handys:** In der Home-Assistant-App unter **Einstellungen → Companion-App → Sensoren verwalten → BLE-Sender** einschalten. Kein Schlüssel nötig. Stell dort die **Sendeleistung auf „Hoch“** und den **Sendemodus auf „Niedrige Latenz“**: Ab Werk sendet die App so schwach, dass die Empfänger sie kaum hören. NeonPlan findet das Handy dann von selbst und zeigt einen Hinweis, wenn eine Einstellung zu schwach ist.
  - **Android über den Schlüssel-Helfer koppeln bringt nichts:** Android sendet diesen Schlüssel im Hintergrund nicht, das Gerät bleibt „nicht gehört“.
  - **Schlüsselanhänger** mit fester Adresse oder als iBeacon (z. B. Nut, Tile, iBeacon-Tags). **AirTags gehen nicht** – sie wechseln ihre Adresse, und Apple gibt keinen Schlüssel heraus.

**Einrichten** (Editor → **⚙ Einstellungen → 📡 Ortung**, nur Admins):

1. **Empfänger:** NeonPlan listet alle Bluetooth-Empfänger von Home Assistant und schlägt ihren Raum vor – aus dem Home-Assistant-Bereich des Geräts, aus einem Pin oder Möbel im Plan (die Waschmaschine mit dem Strommesser der Shelly-Steckdose) oder aus dem Namen („PC Büro Steckdose“). Nach dem Einlernen weiß NeonPlan aus den Signalen selbst, wo jeder Empfänger steht, und bietet bei Abweichungen **„Signal sagt: … – übernehmen“** an.
2. **Geräte:** Uhr und iPhone über den **🔑 Schlüssel-Helfer**, Android-Handys stehen unter **📱 Android mit der Home-Assistant-App** von selbst in der Liste, Anhänger über **📱 Android-Handy oder Schlüsselanhänger hinzufügen** (das Gerät direkt an einen Empfänger halten). Hört gerade kein Empfänger ein Gerät, steht **⚠ nicht gehört** daneben; einen Schlüssel, den du schon hast, trägst du unter **🔑 Eigenen Schlüssel einfügen** ein. Gib jedem Gerät einen Namen, ordne es einer Person zu und – für „Lass mein iPhone klingeln“ – die Home-Assistant-App des Handys.
3. **Einlernen:** Hake an, welche Geräte du gerade **dabei hast**. Geh in jeden Raum, tippe ihn an und lauf **90 Sekunden** langsam herum, auch in die Ecken und an den Wänden entlang. Ein Handy dabei in die **Tasche** (Bildschirm aus), so wie im Alltag – zum Antippen nimmst du am besten ein anderes Tablet oder Handy. **Einmal einlernen reicht:** Geräte ohne eigene Lerndaten nutzen die der anderen mit. Der Countdown läuft mit, bei 0 ist der Raum fertig (✓). Danach zeigt **Trefferquote prüfen**, wie sicher jeder Raum erkannt wird. Einen schwachen Raum lernst du einfach noch einmal ein.
4. **Live:** Ortung einschalten und durchs Haus gehen – die Liste zeigt sofort, wo NeonPlan dich sieht.

**In der 3D-Ansicht:**

- **Uhr und Handy einer Person:** Was am Körper getragen wird (Uhr, Band – Haken **⌚ am Körper**, bei „Watch“ oder „Uhr“ im Namen schon gesetzt) bestimmt, wo die Person steht, solange es in den letzten zwei Minuten gehört wurde; sonst das zuletzt gehörte Gerät. Melden Uhr und Handy gleichzeitig verschiedene Räume (typisch an einer gemeinsamen Wand), gewinnt das Handy nur, wenn es sich deutlich sicherer ist (mehr als 15 Prozentpunkte). Ein Handy, das in einem anderen Raum liegen geblieben ist, während du mit der Uhr weitergegangen bist, erscheint dort als eigenes kleines Symbol. **Präsenzsensoren mit Zonen** (z. B. Aqara FP2): Meldet eine Zone, die wie ein Möbel im Raum heißt („Sofa“, „Sessel“, „Esstisch“, „Bett“ oder der eigene Name eines Möbels), dass dort jemand ist, steht die Figur an diesem Möbel statt in der Raummitte. Eine Zone an einer Tür („Eingang Flur“, „Terrassentür“) stellt die Figur vor die Tür zum Raum dieses Namens oder vor eine Tür nach draußen; „restlicher Raum“ bleibt die Raummitte. Der Sensor gehört über seinen Home-Assistant-Bereich zum Raum. Umgekehrt genauso: Liegt die Uhr seit zehn Minuten im selben Raum, während das Handy danach den Raum gewechselt hat, gilt sie als abgelegt – dann bestimmt das Handy, wo die Person ist, und die Uhr steht als Symbol dort, wo sie liegt.
- Personen stehen als **leuchtende Figur** in ihrer Farbe im Raum, mit dem Namen darüber. Dinge (Schlüssel, ein iPhone ohne Person) sind kleine runde Symbole. Antippen zeigt Raum, Sicherheit und seit wann.
- Im Assistenten unter **4 · Live → Personen in 3D**: **Figur, Pin oder aus** – einmal fürs ganze Haus.
- Das **Raumfenster** zeigt unter dem Namen, wer gerade hier ist, und die Etagen zählen die Personen mit.
- **Personen nur für Admins zeigen** (im Schritt Live) blendet sie für alle anderen Benutzer aus.

**Schneller mit Präsenzmeldern:** Bewegungs- und Präsenzmelder (auch Radar wie Aqara FP2), die in Home Assistant einem Bereich zugeordnet sind, beschleunigen die Ortung von selbst: Bluetooth sagt, **wer** es ist, der Melder sagt, **wann** jemand den Raum betritt. Ohne Melder dauert ein Raumwechsel zwei bis fünf Sekunden – mit Melder oft nur einen Augenblick.

**Sprache** (mit den Assist-Sätzen unter **⚙ Einstellungen → Sprachsteuerung**): „Wo ist mein iPhone?“, „Wo ist Torsten?“, „Wer ist zu Hause?“, „Lass mein iPhone klingeln“. Die Antwort kommt direkt aus Home Assistant – auch ohne offenen NeonPlan-Bildschirm. Offene NeonPlan-Ansichten fliegen dabei in den Raum der Antwort, bei „Wer ist zu Hause?“ nacheinander in alle Räume, in denen jemand ist (Antippen stoppt). Ausschalten lässt sich das im Ortungs-Assistenten unter **Live**; solange Personen nur Admins gezeigt werden, fliegen nur die Ansichten von Admins zu ihnen. „Wo ist Frauke?“ mit den Namen aus der Ortung versteht Assist auch dann, wenn ein KI-Agent (z. B. Gemini) die übrigen Fragen beantwortet. Klingeln schickt eine laute Mitteilung an die Home-Assistant-App (auf dem iPhone als kritische Mitteilung, die auch im Lautlos-Modus klingelt).

**Für Automationen:** Jedes Gerät hat einen Sensor, z. B. `sensor.torstens_uhr_raum`. Sein Zustand ist der Raumname; die Attribute sind `room_id`, `area_id` (der Home-Assistant-Bereich des Raums), `floor`, `probability` (Sicherheit 0–1), `since` und `last_seen`. Beispiel – Licht folgt dir:

```yaml
triggers:
  - trigger: state
    entity_id: sensor.torstens_uhr_raum
    to: Küche
actions:
  - action: light.turn_on
    target:
      area_id: kueche
```

**Wie schnell ein Raumwechsel ankommt:** meist nach **zwei bis fünf Sekunden**. Das liegt an den Empfängern, nicht an NeonPlan: Ein **Shelly** meldet ein Gerät nur etwa **alle drei bis vier Sekunden** weiter, ein **ESP32-Bluetooth-Proxy etwa jede Sekunde**. Uhren senden ein- bis zweimal pro Sekunde, ein iPhone in der Tasche deutlich seltener. NeonPlan wartet zudem zwei, drei Messungen ab, damit die Anzeige nicht zwischen zwei Räumen hin- und herspringt. Schneller wird es mit **ESP32-Proxys** statt Shellys – und mit **Präsenzmeldern**, dann fast sofort.

**Wo die Empfänger am besten stehen:**

- **In einer Ecke oder an einer Außenwand des Raums – nicht an der Wand zum Nachbarraum.** Eine Steckdose direkt hinter der Wand hört dich im Nachbarraum fast genauso laut wie in ihrem eigenen Raum; dann springt die Anzeige zwischen beiden. (Beispiel: Du sitzt in der Küche, der Shelly des Wohnzimmers steckt direkt hinter dir in der gemeinsamen Wand.)
- **Nicht Rücken an Rücken:** zwei Empfänger auf beiden Seiten derselben Wand machen die beiden Räume schwer zu unterscheiden.
- **Frei statt verdeckt:** nicht hinter Kühlschrank, Heizkörper, Spiegel oder im Metall-Schaltschrank – Metall und Wasser schlucken Bluetooth.
- **Ungefähr einer pro Raum.** Räume ohne eigenen Empfänger gehen trotzdem; große oder verwinkelte Räume profitieren von einem zweiten.
- Wer einen Empfänger umsteckt, lernt die Räume daneben kurz neu ein.

**Gut zu wissen:**

- **Raumgenau, nicht zentimetergenau.** Bluetooth schwankt (schon der eigene Körper dämpft das Signal). NeonPlan sagt zuverlässig den Raum, nicht die Stelle im Raum.
- **Alles bleibt im Haus.** Die Signale werden nur in Home Assistant ausgewertet, nichts geht ins Internet.
- **Neu einlernen**, wenn du Empfänger umstellst oder neue dazukommen.
- **Bermuda oder ESPresense im Einsatz?** NeonPlan läuft parallel und stört sie nicht. Richte deine Geräte einfach hier ein; wenn alles sicher läuft, stellst du deine Automationen auf die neuen Sensoren um und kannst die alten Werkzeuge entfernen.

**Den Schlüssel (IRK) von iPhone und Apple Watch bekommen:** am einfachsten mit dem **NeonPlan Schlüssel-Helfer** – ohne Mac, auch für die Apple Watch:

1. Einen **ESP32** (ESP32, ESP32-C3 oder ESP32-S3, ca. 5 €) per USB an den Computer stecken und auf [neonplan3d.mastershort.de/keys](https://neonplan3d.mastershort.de/keys/) mit Chrome oder Edge auf **Installieren** klicken. Danach das WLAN eintragen.
2. Home Assistant findet **NeonPlan Key** als ESPHome-Gerät: **Einstellungen → Geräte & Dienste → Entdeckt → Hinzufügen**.
3. Im Assistenten unter **Geräte → 🔑 Schlüssel-Helfer** „Für Apple Watch“ oder „Für iPhone“ wählen und koppeln: auf der Uhr unter **Einstellungen → Bluetooth → Gesundheitsgeräte** „NeonPlan Key“ antippen, am Handy unter **Einstellungen → Bluetooth**. Der Schlüssel erscheint sofort – **Hinzufügen** tippen. Danach „NeonPlan Key“ in den Bluetooth-Einstellungen wieder entfernen.
4. **Weitere Geräte:** vorher **🔄 Nächstes Gerät** tippen – der Helfer bekommt eine neue Bluetooth-Kennung, damit sich das zuvor gekoppelte Gerät nicht wieder dazwischen verbindet.

Den ESP32 kannst du danach weiterverwenden, am besten als ESPHome-Bluetooth-Proxy – dann macht er die Ortung sogar schneller. Der Helfer baut auf [irk-capture](https://github.com/DerekSeaman/irk-capture) von Derek Seaman auf (MIT-Lizenz) – danke! Andere Wege: mit einem **Mac** über die Schlüsselbundverwaltung (der Mac muss im selben iCloud-Konto sein). Den Schlüssel fügst du dann im Assistenten unter **Geräte → Schlüssel einfügen** ein (als 32 Zeichen oder so, wie der Mac ihn zeigt).

---

## 6. Pro-Erweiterungen

Pro-Erweiterungen sind kostenpflichtige Zusatzfunktionen, einzeln im Shop erhältlich. Ohne Erweiterung zeigen die Schalter ein 🔒, und ein Hinweis führt zum Shop. Wie du sie installierst, steht in [Kapitel 7](#7-erweiterungen-shop-und-möbel-packs).

![Gesperrte Pro-Funktion](images/view-pro-locked.jpg)

### 6.1 Kamera-Cockpit

**Durch die Kamera schauen:** Im Standbild-Menü einer Kamera und im Raumfenster steht „Durch die Kamera schauen“. Die 3D-Ansicht fliegt an die Stelle der Kamera und blickt in ihre Richtung, das Livebild liegt halbtransparent über der Szene. Mit dem Regler unten stellst du die Überblendung ein, „Zurück zur Ansicht“ fliegt zurück. **⛶ Vollbild** zeigt das Kamerabild auf dem ganzen Bildschirm; wo der Browser das nicht kann (alte Tablets), öffnet sich die Kameraansicht von Home Assistant, dort auch mit Ton. Passt das Bild nicht genau, korrigierst du Drehung und Neigung der Kamera im Editor.

![Durch die Kamera schauen](images/view-camera-through.jpg)

**Bewegungsspur:** Der Schalter **Spur** zeigt, wo in den letzten 30 Minuten Bewegung gemeldet wurde: leuchtende Punkte mit Uhrzeit, in zeitlicher Folge verbunden, ältere verblassen. Quellen sind Bewegungs-, Präsenz- und Belegungssensoren. Im Plan platzierte Sensoren liegen an ihrem Platz, Kamerasensoren an der Kamera, alle anderen in der Raummitte. Die Daten kommen aus dem Verlauf von Home Assistant und werden jede Minute neu geladen.

![Bewegungsspur](images/view-trail.jpg)

**Erkennungs-Pins:** Meldet ein Sensor der Kamera gerade eine Erkennung (Frigate, UniFi Protect, Reolink und ähnliche liefern je Objekt einen Sensor: Person, Fahrzeug, Tier, Bewegung), steht vor der Kamera ein Pin mit Symbol, Art und Uhrzeit – „Person · 18:42“. Antippen öffnet den Sensor. Mehrere Objekte zugleich ergeben mehrere Pins übereinander. Wem das zu unruhig ist: **Erkennungs-Symbole zeigen** im Formular der Kamera abschalten – dann färbt sich bei einer Erkennung nur der Sichtkegel rot.

**Welche Sensoren zählen (seit 2.0.7):** Ab Werk nimmt NeonPlan alle Bewegungs-, Belegungs- und Präsenzsensoren am Gerät der Kamera. Sind die zu empfindlich – oder kommt die Erkennung von einem anderen Gerät, z. B. Frigate für eine Reolink-Kamera –, hake im Formular der Kamera **Erkennungs-Sensoren selbst wählen** an: Dann zählen nur die angehakten Sensoren, und unter **Sensor hinzufügen** wählst du Sensoren anderer Geräte dazu (etwa Frigates `…_person_occupancy`). Das gilt für die Pins, die Bewegungsspur und die Live-Regie.

**Kamera-Wand:** Der Schalter **Kameras** unten (in der Karte die Option `camera_wall: true`) legt alle Livebilder deiner platzierten Kameras als Wand über die Szene, alle paar Sekunden aufgefrischt. Eine Kamera, die gerade Bewegung sieht, bekommt einen roten Rahmen; eine, die aufnimmt, einen roten Punkt. Die Kacheln teilen sich die Wand: Das Raster wählt so viele Spalten, dass alle Kameras möglichst groß und ohne Überlappen hineinpassen (eine Kamera füllt sie, zwei stehen nebeneinander, 22 etwa als 6 × 4); bei sehr vielen Kameras wird die Wand scrollbar. Die Kacheln sind Standbilder, alle 5 Sekunden neu (auf der Tablet-Stufe alle 10, ein kleiner Hinweis im Kopf sagt es) – zehn Livestreams würden ein altes Tablet überfordern. Auch beim Durchschauen in 3D ist das Bild ein Standbild; die Leiste unten sagt es. Antippen zeigt das Bild groß, und zwar als **Livestream** über den Player von Home Assistant, sobald die Kamera streamen kann (sonst bleibt das Standbild); von dort führt **Durch die Kamera schauen** in die 3D-Ansicht, und **Zurück zur Ansicht** bringt dich wieder zur Wand. **‹ Alle Kameras** geht zurück zum Raster, ✕ schließt die Wand.

**Live-Regie:** Ein Bildschirm, meist das Wandtablet, zeigt von selbst, was im Haus passiert. Klingelt es, fliegt die Ansicht zur Haustür und schaut durch die Kamera dort. Sieht eine Kamera jemanden, ist die Waschmaschine fertig oder kommt eine Warnung, fliegt sie ebenfalls dorthin. Danach kehrt sie zurück, wo sie war. Alles ist **aus**, bis du es einschaltest, und zwar an zwei Stellen:

1. **Welche Ereignisse:** Editor → **⚙ Einstellungen → 🎬 Live-Regie**. Jedes Ereignis hat einen eigenen Schalter:
   - **Es klingelt:** Die Klingel findet NeonPlan selbst, nämlich eine Ereignis-Entität der Klasse „Türklingel“ (Ring, UniFi Protect …) oder einen Sensor wie Reolinks „Besucher“. Du kannst sie auch selbst wählen, ebenso die Kamera an der Tür. Ohne Wahl nimmt NeonPlan die Kamera desselben Geräts oder eine im selben Bereich. Die Kamera muss im Plan platziert sein, sonst fliegt die Ansicht nur zur Klingel.
   - **Eine Kamera sieht jemanden:** „Nur Personen“ oder „Jede Bewegung“, für alle platzierten Kameras.
   - **Waschmaschine, Trockner oder Spülmaschine fertig:** Das Gerät muss als Möbel mit Strommessung oder Status verknüpft sein. Als fertig gilt es, wenn es nach dem Lauf 3 Minuten ruht. Eine Pause im Programm zählt also nicht.
   - **Neue Warnung:** Rauch, Wasser, Alarm, Fenster bei Regen und so weiter.
   - **Zurück nach:** die Sekunden bis zur Rückkehr (Standard 30). Die Klingel bleibt doppelt so lange.
   - **Eigene Auslöser:** weitere Entitäten, jeweils mit einer Kamera. Geht eine davon an oder auf, z. B. eine zweite Klingel, das Garagentor oder das Gartentor, fliegt die Ansicht hin und schaut durch diese Kamera. Ohne Kamera fliegt sie zum Gerät.
   - **Livebild beim Durchschauen:** Statt eines Standbilds alle paar Sekunden läuft das Video der Kamera. Das gilt auch für „Durch die Kamera schauen“ von Hand. Braucht mehr Leistung, auf sehr alten Tablets lieber aus lassen.
2. **Auf welchem Bildschirm:** im selben Abschnitt **Auf diesem Gerät einschalten**. Das gilt nur für diesen Browser, also zum Beispiel das Wandtablet mit dem NeonPlan-Panel. Auf einer Dashboard-Karte schaltest du stattdessen **Live-Regie** in den Karten-Einstellungen ein (`director: true`).

Wer das Tablet gerade bedient, wird nur von der Klingel und von Warnungen unterbrochen. Berührst du den Bildschirm, während die Regie etwas zeigt, bleibt die Ansicht, wo sie ist. Teil des Kamera-Cockpits.

### 6.2 Wetter draußen

![Regen](images/view-weather-rain.jpg)

Das Wetter rund ums Haus folgt deiner Wetter-Entität:

| Zustand | In 3D |
|---|---|
| rainy, pouring, hail | Regen, dazu Wolken |
| snowy, snowy-rainy | Schnee, bei Schneeregen beides |
| lightning, lightning-rainy | Blitze, beim Gewitterregen auch Regen |
| fog | Nebel, nur wenn eingeschaltet |
| cloudy, partlycloudy | Wolken dunkeln Himmel und Sonnenlicht |
| windy | Wind treibt Regen und Schnee schräg |
| sunny, clear-night | Sonne am Tag, Mond in der Nacht |

Liefert die Entität `cloud_coverage` und `wind_speed`, nutzt NeonPlan 3D diese Werte.

![Schnee](images/view-weather-snow.jpg)

**Einstellungen** im Editor: Unter **Wetter-Entität** wählst du die Entität, unter **Wetter-Effekte in 3D** schaltest du einzelne Effekte ab. Nebel ist anfangs aus, weil er die ganze Szene eingraut. Auf der Qualitätsstufe Tablet bleibt nur die Abdunkelung durch Wolken.

### 6.3 Bildschirme live

Ohne diese Erweiterung leuchtet ein Fernseher nur, solange er an ist. Mit ihr:

- Fernseher und Monitore zeigen die **Farbe der laufenden App** und das **Cover** des Media Players.
- **Bilder nach Zustand:** Am Bildschirm-Möbel legst du Regeln an. Ist eine Entität in einem bestimmten Zustand oder hat ein Attribut einen Wert, zeigt der Bildschirm ein Bild. Beispiel: Attribut `app_name` des Fernsehers enthält „netflix“, dann erscheint das Netflix-Logo. Der Wert passt, wenn er gleich ist oder im Text vorkommt, `*` passt immer. Die erste passende Regel gewinnt.
- Als Bild geht ein Upload, der auf 512 Pixel verkleinert wird, eine Bild-URL oder eine **Kamera**. Ein Kamerabild erneuert sich alle 5 Sekunden, solange es zu sehen ist.
- **Bildschirm hinter dem Bild:** dunkel oder weiß, je nachdem, ob das Logo hell oder dunkel ist.
- „✓ passt gerade“ an einer Regel zeigt, welches Bild im Moment zu sehen ist. Hochgeladene Bilder lassen sich an anderen Bildschirmen wiederverwenden.

![Bildregeln](images/editor-picture-rules.jpg)

![Medienwand mit Logo](images/view-media-wall.jpg)

![Kamerabild auf dem Monitor](images/view-camera-screen.jpg)

---

### 6.4 Energie Pro

Energie Pro macht aus dem Energie-Werkzeug ein lebendiges Bild deiner Anlage: Strom fließt sichtbar durchs Haus, die Solarmodule leben mit der Sonne, und ein Hologramm aus Glas zeigt die Bilanz. Alles, was du dafür einrichtest, ist kostenlos und steht in [4.20](#420-energie-solarfelder); Pro schaltet die Darstellung frei. Gas und Wasser stehen seit 1.14.0 mit dem heutigen Verbrauch auf der Haus-Karte (Gas in m³, Wasser in Litern); Wärme folgt als Update im selben Pack.

**In fünf Minuten eingerichtet**

Oben im Werkzeug **Energie** steht die **Einrichtung**: eine Liste, die abhakt, was schon da ist, und beim Antippen an die richtige Stelle springt.

1. **Solarfeld:** + Solarfeld legt Module auf die sonnigste Dachfläche (4.20).
2. **Geräte:** Stromzähler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss anlegen. Sie kommen von selbst in Garage oder Technikraum und lassen sich im Grundriss verschieben.
3. **Sensoren:** Am einfachsten **Aus dem Energie-Dashboard übernehmen** (Abschnitt Energiebilanz): NeonPlan nimmt die Statistiken deines Energie-Dashboards, sucht zu jeder den Leistungssensor desselben Geräts und trägt ihn beim Zähler (Netz), Wechselrichter (PV) und Speicher (Leistung, Ladestand) ein. Fehlende Geräte werden dabei angelegt. Sonst wählst du die Sensoren im Formular jedes Geräts von Hand: Zähler = Netzleistung in Watt (+ = Bezug), Wechselrichter = PV-Leistung, Speicher = Leistung (+ = Entladen) und Ladestand in Prozent, Wallbox = Leistung und Status.
4. **Vorzeichen prüfen:** Meldet der Zähler nachts „Einspeisung“ oder lädt der Speicher ohne Sonne, zählt ein Sensor andersherum. Die Energiebilanz sagt das und bietet **Vorzeichen umkehren** an.
5. **Netzanschluss** (optional): Dorthin läuft die Netzleitung, zum Beispiel ans Ende der Einfahrt. Ohne ihn endet sie am Rand deiner Außenflächen.

Mehrere Anlagen (Dach und Balkonkraftwerk) gehen: zweiter Wechselrichter, zweiter Speicher, jeder mit eigenem Sensor; das Balkonfeld als Solarfeld an der Wand oder frei aufgeständert und einem Strang mit diesem Wechselrichter zugeordnet. Jede Anlage bekommt dann ihre eigene Anlagenkarte über ihrem Feld (Leistung, Tageskurve, Akku) – auch die, an deren Feld das Haupthologramm hängt; das rückt dann ein Stück neben das Feld, solange du es nicht selbst versetzt hast. Im Wechselrichterformular schaltest du die Anlagenkarte einer Anlage ab oder versetzt sie mit **Seitlich versetzt** und **Nach oben versetzt** auf ihrem Feld, wie das Haupthologramm; dort steht auch, welche Stränge an diesem Wechselrichter hängen. Beim Solarfeld erscheinen die Wechselrichter mit ihrem eigenen Namen (oder dem Namen ihrer Entität). Speicher, die Laden und Entladen in zwei Sensoren melden (etwa Anker Solix), bekommen den Entlade-Sensor als **Leistung** und den Lade-Sensor als **Ladeleistung**. Genauso der Zähler: Meldet er Bezug und Einspeisung getrennt (Growatt, Tibber Pulse, viele Shelly-Templates), kommt der Bezugs-Sensor in **Leistung** und der Einspeise-Sensor in **Einspeiseleistung**; ein Sensor mit Vorzeichen braucht das nicht. Die Leistungsfelder bieten alle Sensoren in W oder kW an, auch ohne Geräteklasse. Trage in der Energiebilanz nur dann einen Solar-Sensor ein, wenn er die ganze Erzeugung liefert – sonst überdeckt er die Summe der Wechselrichter.

**Leitungen**

In der 3D-Ansicht schaltet der ⚡-Knopf der Energieleiste die Leitungen ein. Dünne Leitungen mit wandernden Lichtpunkten zeigen, wohin der Strom gerade fließt; die Punkte sind Kometen, die Richtung ist auch im Stillstand klar. Gelb Solar (vom Feld durch das Dach, innen an der Wand hinunter zum Wechselrichter), grün Speicher (die Richtung dreht beim Laden und Entladen), blau Wallbox, hellblau die Verbraucher im Haus, cyan Einspeisung und rot-violett Netzbezug, vom Zähler bis zum Netzanschluss mit einem Pin, der den Wert zeigt. Je mehr Leistung, desto schneller und dichter die Punkte.

Jede Leitung findet ihren Weg von selbst (gestrichelt im Grundriss); das letzte Stück zum Gerät läuft im rechten Winkel, nicht schräg durch die Ecke. Willst du sie anders führen, etwa außen an der Fassade oder unter der Decke: im Abschnitt **Leitungen** auswählen und **Selbst verlegen**, oder die gestrichelte Leitung im Grundriss einfach anfassen. Dann ziehst du Punkte, ein Klick auf die Leitung fügt einen Punkt ein, ein Doppelklick entfernt ihn, und **Höhe über dem Boden** legt fest, wo sie läuft. Mehrere Leitungen lassen sich so nebeneinander zum Zähler führen. **Fixieren** schützt eine fertige Leitung, **Wieder automatisch** löscht deinen Weg.

**Lebende Module**

Die Module bekommen eine leuchtende Zellstruktur, über die ein Lichtband Richtung Traufe wandert, je mehr Leistung, desto heller und schneller. Nachts ruhen sie. Die Leistung je Feld kommt vom Sensor des Feldes, sonst vom Strang (nach Modulzahl verteilt), sonst anteilig aus der Gesamtleistung.

**Hologramm**

In der Hausansicht hängt ein Hologramm aus Glas am größten Solarfeld (ohne Feld neben dem Haus), verbunden durch einen Leuchtstrich. Es zeigt PV jetzt, Ertrag heute und Spitze, die Tageskurve seit Mitternacht (aus den Statistiken deines PV-Sensors), bei mehreren Anlagen eine Zeile je Wechselrichter, Akku mit Pfeil, Netz, Haus, Wallbox und den Balken **Autarkie jetzt** (der Anteil des Hausverbrauchs, der gerade nicht aus dem Netz kommt; ohne Netzwert bleibt er weg). Es behält seine Größe in der Welt, wird beim Rauszoomen also kleiner; von hinten siehst du es gespiegelt wie eine Glasscheibe (abschaltbar mit **Von hinten gespiegelt (wie Glas)**, dann bleibt es von überall lesbar). Antippen klappt es auf die große Zahl zusammen. Im Abschnitt **Hologramm** wählst du Feld, Größe und Versatz – der Abschnitt steht auch ohne Solarfeld da (Spiegelung, Größe, Geräte-Karten), nur die Feld-Einstellungen warten auf ein Feld – oder **Frei im Plan**: Dann steht im Plan ein Griff ◈, den du dorthin ziehst, wo die Karte schweben soll, etwa über die Terrasse; Höhe über dem Boden dazu. Die Karte zeigt vom Haus weg.

**Geräte-Hologramme**

Auch ohne Solaranlage: Jedes Gerät mit Leistungssensor (Fernseher, Waschmaschine, Kühlschrank, Wärmepumpe, PC, Wallbox) kann eine kleine Glaskarte über sich tragen – Leistung jetzt, Verbrauch heute und die Tageskurve aus den Statistiken seines Sensors. Im Möbelformular den Haken **Hologramm über dem Gerät** setzen – genauso im Formular eines platzierten Geräts mit Leistungssensor, etwa einer smarten Steckdose. Stehen Geräte dicht nebeneinander (Waschmaschine und Trockner), weichen ihre Karten einander nach oben aus. Die Karten zeigen sich in der Hausansicht und auf der Etage des Geräts; Antippen klappt sie zusammen. Zehn Karten kosten weniger als eine Leitung, auch auf dem Wandtablet.

**Hausbilanz und Anlagen-Karten auch in Etagenansichten** (aus von Haus aus) lässt die große Karte und die Karten der Anlagen sichtbar, wenn eine Etage geöffnet ist – auf der Etage ihres Solarfelds, etwa einer Anlage im Garten auf der Außen-Etage. In den Hologramm-Einstellungen blendet **Geräte-Karten auch in der Hausansicht** sie in der Hausansicht aus (dann nur auf ihrer Etage), **Geräte-Karten im geöffneten Raum** zeigt beim Öffnen eines Raums die Karten seiner Geräte, und **Geräte-Karten ausblenden unter (W)** lässt Karten verschwinden, solange ihr Gerät weniger zieht – etwa 1 W für „aus“.

Der Knopf **Hologramme** in der Energieleiste (neben ⚡) blendet alle Karten aus und wieder ein – praktisch, wenn viele Geräte eine tragen. In der Karte gibt es den Knopf ebenfalls, oder du legst es mit `holograms` fest.

**Wandtablet:** Auf der Tablet-Stufe laufen die Hologramme ohne Glaseffekt, die Leitungen mit etwa 5 Bildern pro Sekunde; 30 Sekunden nach der letzten Berührung bleiben sie stehen, bis jemand wieder tippt.

**Wenn etwas fehlt:** Die Einrichtung oben im Werkzeug zeigt, was noch nicht passt. Kein Hologramm bedeutet meist: kein Sensor am Wechselrichter oder keine Hausansicht (Etagen- und Raumansichten haben keins). Keine Leitung zu einem Gerät: Das Gerät hat keinen Leistungssensor.

### 6.5 Klang & Kino

Klang & Kino bringt die Musik ins 3D-Haus. Voraussetzung ist ein Lautsprecher im Plan: ein Media Player als Gerät platziert (Kapitel 4.11) oder ein Möbel aus dem Heimkino-Pack (Standlautsprecher, Soundbar, Deckenlautsprecher …) mit dem Media Player als **Gerät** im Möbelformular.

**Läuft-gerade-Karte:** Sobald ein Lautsprecher spielt (oder pausiert), schwebt über ihm eine Glaskarte mit Cover, Titel, Interpret und Lautstärke. Eine pausierte Karte bleibt seit 2.0.7 höchstens 10 Minuten stehen – Echos bleiben nach dem Stoppen oft stundenlang auf „pausiert“. Darauf: Zurück, Abspielen/Pause, Weiter und ein Lautstärkeregler – ohne den Raum zu öffnen. Antippen der Kopfzeile klappt die Karte zusammen. Die Karten gehorchen dem Schalter **Hologramme** (neben ⚡ in der Energieleiste; ohne Energie Pro ist der Schalter nicht da, dann sind sie immer an).

**Schallringe:** Um jeden spielenden Lautsprecher wandern leuchtende Ringe über den Boden nach außen – je lauter, desto weiter und kräftiger. So siehst du aus der Hausansicht, wo Musik läuft.

**Multiroom-Gruppen:** Spielen Lautsprecher als Gruppe (Sonos, HA-Gruppen, alles mit `group_members`), verbindet eine leuchtende Linie die Mitglieder auf derselben Etage.

**Schnellmenü:** Lange drücken auf einen Media Player öffnet jetzt Cover mit Abspielen/Pause in der Mitte, Zurück und Weiter daneben, Lautstärke darunter – statt nur An/Aus. Darunter steht **Abspielen**: deine Sender und Playlists (im Editor unter **Favoriten → Sender und Playlists** angelegt) und die Quellen des Players, etwa Sonos-Favoriten oder die Eingänge eines Receivers. Ein Sender ist ein `media_player.play_media` mit Art und Inhalt: für einen Echo die Art `SPOTIFY`, `AMAZON_MUSIC` oder `TUNEIN` und als Inhalt, was du sagen würdest („Rock Antenne“); für Sonos, Music Assistant und andere `music` oder `url` mit einer Stream-Adresse oder URI.

**Smart Speaker und Displays:** Das Pack **Heimkino & Hi-Fi** hat ab Release 2 Smart Speaker als Kugel, Zylinder, Puck, Pod, hoch und oval, einen Kompakt- und einen tragbaren Multiroom-Lautsprecher, eine Premium-Soundbar und Smart Displays mit 5″, 7″, 8″ und 15″ (Wand) – passend für Echo, Nest, HomePod, Sonos und Co. Mit Klang & Kino leuchtet ihr Lichtring in der App-Farbe, solange sie spielen, und die Displays zeigen das Cover. Solange die Karte über einem Lautsprecher schwebt, tritt sein Pin zur Seite und kommt wieder, wenn die Musik endet. Fernseher und Bildschirme bekommen ihre Farben und Bilder weiter über **Bildschirme live** (6.3).

**Wandtablet:** Auf der Tablet-Stufe laufen die Ringe mit etwa 5 Bildern pro Sekunde und ruhen 30 Sekunden nach der letzten Berührung, die Karten ohne Glaseffekt.

**Welche Lautsprecher passen?** NeonPlan nutzt die Standard-Schnittstelle der Media Player von Home Assistant: Was im Media-Player-Fenster von Home Assistant geht, geht auch hier. Das ist eine Einschätzung nach Dokumentation und Erfahrungen, keine Garantie für jedes Modell:

| Integration | Cover und Titel | Lautstärke | Multiroom-Linien |
|---|---|---|---|
| Sonos | ja | ja, lokal | ja |
| Music Assistant (alle Player, auch Echos) | ja | ja | ja |
| Denon/Marantz HEOS, Yamaha MusicCast, Bluesound, Squeezebox/Lyrion | ja | ja | ja |
| Google Cast (Nest Audio, Nest Hub, Chromecast) | ja | ja | meist nicht |
| Apple TV / HomePod | ja | je nach Modell | nein |
| Fernseher und AV-Receiver | je nach App | ja | nein |
| Amazon Echo über Alexa Media Player | ja | **oft nicht oder verzögert** | nein |

Was ein Player mitbringen sollte: den Zustand `playing`/`paused`, `media_title` und `media_artist` (sonst zeigt die Karte App oder Quelle), `entity_picture` für das Cover, `volume_level` für Regler und Ringe, `group_members` für die Linien.

**Ein Gerät, ein Player:** Jeder Media Player hat genau eine Karte. Ein Möbel, dem du den Player selbst zugewiesen hast, hat Vorrang vor einem als Gerät platzierten Player. Hast du denselben Lautsprecher doppelt in Home Assistant (etwa einen Echo über Alexa Media Player **und** über Music Assistant, erkennbar an „_2“ am Ende), wähle den, über den du wirklich abspielst – der andere meldet nie „spielt“.

**Echo-Geräte (Alexa Media Player):** Abspielen, Pause und Titelwechsel gehen. Die **Lautstärke** lässt sich je nach Gerät und Version von Alexa Media Player nicht oder nur verzögert setzen, und der neue Wert kommt oft erst Minuten später zurück. Das liegt an der inoffiziellen Amazon-Schnittstelle, nicht an NeonPlan; dieselbe Grenze hat das Media-Player-Fenster von Home Assistant. Echos, die du über Music Assistant steuerst, folgen der Lautstärke in der Regel zuverlässiger.

### 6.6 Auto Pro

Auto Pro holt das Auto in den Plan, so wie es seine Integration meldet (Tesla, VW We Connect, BMW, Hyundai/Kia, Renault, Smart, Polestar, Audi, Skoda, Cupra, Ford …). Voraussetzung ist ein **Stellplatz** mit Fahrzeug (4.10) und die Integration des Autos in Home Assistant.

Auto Pro hängt am **Stellplatz**, nicht am Fahrzeug-Möbel. Steht dein Auto als einfaches Möbel im Plan, macht **In Stellplatz umwandeln** in dessen Formular daraus einen Stellplatz mit diesem Fahrzeug.

**Einrichten:** Im Stellplatz-Formular unten der Abschnitt **Auto Pro**. Wähle unter **Fahrzeug** irgendeine Entität des Autos – NeonPlan findet die übrigen am selben Gerät: Ladestand, Reichweite, Ladeleistung oder Ladezustand, Kabel, Schloss, Klima oder Vorheizen, Standort. Jede Rolle kannst du von Hand setzen oder mit „Keine“ abschalten. Das Schloss darf auch ein Text-Sensor sein, der `locked`/`secured` oder `unlocked` meldet (wie bei BMW). Hat der Stellplatz einen Sensor „Auto anwesend“, dient der auch als Ausgangspunkt der Suche.

**Im Haus:** Das Fahrzeug trägt ein **Lichtband** in der Farbe des Ladestands (grün über 50 %, gelb bis 20 %, rot darunter), kräftiger, solange es lädt. Läuft die Klima oder das Vorheizen, glimmt das Auto warm. Der **Pin am Stellplatz** zeigt „78 % · 312 km · ⚡ 7,4 kW · 🔒“. Ist das Auto weg, bleibt der Stellplatz leer und der Pin sagt **unterwegs**, mit der Zone des Trackers, wenn es eine gibt („unterwegs · Arbeit“).

**Glaskarte:** Über dem Auto schwebt eine Karte im Look von Energie Pro und Klang & Kino: Ladestand groß in seiner Farbe mit Balken, Reichweite, Ladeleistung beim Laden, dazu Knöpfe für Schloss (Entriegeln fragt nach), Klima und – bei einem Lade-Schalter – Laden. Ist das Auto entriegelt, leuchten Scheinwerfer und Rücklichter orange wie Blinker; verriegelt bleiben sie dunkel. Läuft die Klima, leuchten die Scheiben des Autos von innen – warm beim Heizen, kühl-blau, wenn eine Klima-Entität „kühlen“ meldet. Ein Tipp auf den Kopf klappt die Karte zusammen. Solange die Karte steht, tritt der Pin zur Seite; ist das Auto weg, zeigt der Pin „unterwegs“.

**Schnellmenü:** Lange drücken auf den Pin: **Verriegeln / Entriegeln** (Entriegeln fragt nach), **Klima an / aus**, **Laden starten / stoppen** (bei einem Lade-Schalter), dazu Ladestand und Reichweite.

**Wandtablet:** keine Animation nötig – Auto Pro läuft auf jeder Stufe gleich.

### 6.7 Zeitreise

![Zeitreise: die Etage um 07:42 mit Zeitleiste](images/view-timetravel.jpg)

> **Für alle im Shop:** Seit 1.17 gibt es die Zeitreise einzeln im Shop; mit dem [Supporter-Pass](https://mastershort.de/neonplan3d/unterstuetzer/) ist sie dabei. Danke an alle Supporter, die sie in der Beta getestet haben.

Die Zeitreise spielt die letzten 24 Stunden – auf Wunsch die letzten 7 Tage – im Haus ab, aus dem Verlauf, den Home Assistant ohnehin aufzeichnet (Recorder): Lichter mit Helligkeit und Farbe, Türen und Fenster, Rollläden, Bewegung, Heizung, Fernseher und Lautsprecher, Temperaturen, Leistung, Wetter und Sonnenstand. Alles bleibt in Home Assistant, und **nichts wird geschaltet** – die Zeitreise zeigt nur.

**Starten:** Unten in der Schalterleiste **⏪ Zeitreise** antippen; in der Dashboard-Karte erscheint der Knopf mit `time_travel: true` (Kapitel 8). Die Ansicht bekommt einen bernsteinfarbenen Rahmen, oben in der Mitte steht groß der gezeigte Moment („Do 07:42 · vor 6 h 14 min“). Sie beginnt angehalten, eine Stunde vor jetzt. **● Live** oder **Esc** führt zurück in die Gegenwart; in der Karte auch die Rückkehr zur Startansicht (`idle_return`).

**Die Zeitleiste unten:**

| Element | Wirkung |
|---|---|
| **⏮** / **⏭** | Zum vorigen oder nächsten Ereignis springen; die Wiedergabe hält dort an |
| **▶** / **⏸** | Abspielen und Anhalten. Am Ende angekommen, beginnt ▶ wieder von vorn |
| **Leiste** | Antippen oder ziehen springt zu diesem Moment. Dunkle Flächen sind die Nacht (nach dem Sonnenstand am Standort von Home Assistant), grau ist die Zeit, aus der der Recorder noch nichts hat, schraffiert eine Lücke – Home Assistant war aus oder startete neu |
| **Punkte** | Ereignisse. Ein Tipp springt hin und hält an, langes Drücken zeigt, was passiert ist. Liegen mehrere dicht beieinander, werden sie ein Punkt mit Zahl in der Farbe des wichtigsten |
| **24 h** / **7 T** | Der Zeitraum: der letzte Tag oder die letzte Woche (siehe „Mehrere Tage“) |
| **☰** | Die Seitenleiste mit **Ereignisse**, **Während du weg warst** und **Tag** |
| **360×** | Das Tempo: 60× (eine Stunde in einer Minute), 360× (in 10 Sekunden, Standard), 900× (in 4 Sekunden), 3600× (in einer Sekunde), in der Woche auch 14400× (ein Tag in 6 Sekunden) |
| **● Live** | Zurück in die Gegenwart. Läuft die Wiedergabe bis jetzt, steht dort „Gegenwart erreicht · Live“ |

Am PC: **Leertaste** spielt ab oder hält an, die **Pfeiltasten** springen 5 Minuten (mit Umschalt eine Stunde).

**Ereignisse:** die Haustür (eine Tür mit Kontakt in einer Außenwand oder im Haustür-Look), Garagentor und Tor, ein Schloss wird entriegelt, der Alarm löst aus, Rauch, Gas, Kohlenmonoxid, Wasser, ein Stromausfall (die Entität aus **Stromausfall melden mit**), ein Fenster steht offen, während es regnet, Bewegung in der Nacht (23 bis 5 Uhr, nur Bewegungsmelder – tagsüber zeigt die Leiste Bewegung nicht als Punkt, damit sie nicht voll wird; beim Scrubben sieht man sie trotzdem), was eine **im Plan platzierte Kamera** erkennt (Bewegung, Person, Auto – Tag und Nacht; dieselbe Kamera erst nach fünf Minuten wieder), der Saugroboter startet und ist fertig, Waschmaschine, Trockner und Spülmaschine sind fertig (die Leistung fällt nach einem Lauf; der Leistungssensor hängt am Möbel oder ist als Gerät direkt daneben platziert). Dasselbe kurz hintereinander zählt einmal. **Personen sind nie ein Ereignis**, und wo jemand war, zeigt die Zeitreise nicht.

**Nur ansehen:** Ein Tipp auf ein Gerät zeigt seinen damaligen Zustand („An · 35 % · seit 19:29“). Das Raumfenster zeigt die Werte des Moments, nimmt aber keine Eingaben an. Stern-Menü, Szenen-Knöpfe, Wischen, Doppeltipp, Schnellmenü, Kamera-Wand und die Knöpfe auf den Glaskarten ruhen, bis du wieder live bist.

**Was die Zeitreise zeigt:**

- Lichter mit Helligkeit, Farbe und Farbtemperatur, Rollläden mit Position (fahrend dazwischen), Fenster offen oder gekippt, Türen, Garagentore
- Temperatur, Feuchte, CO₂ und Leistung aus den Fünf-Minuten-Statistiken, gleitend dazwischen – auch als **Heatmap** und **Werte**
- Warnungen, wie sie damals waren (Rauch, Wasser, Fenster offen bei Regen)
- Wetter draußen (mit dem Pro „Wetter draußen“) aus dem Verlauf der Wetter-Entität, Sonne und Sonnenlicht nach dem damaligen Sonnenstand
- Energie (mit Energie Pro): die Werte oben, die Glaskarten und die Leitungen mit den damaligen Leistungen; die Tageskurven der Glaskarten zeigen den Tag des gezeigten Moments bis zu diesem Moment
- Auto (mit Auto Pro): ob das Auto auf seinem Stellplatz steht und sein Ladestand – aus den Entitäten des Autos selbst (Tracker des Autos nur als „zu Hause“ oder „weg“, nie der Ort). Tracker von Personen bleiben draußen, auch wenn ein Stellplatz einen nutzt
- Musik und Fernseher: spielt oder nicht, Titel und Lautstärke-Ringe von damals (ohne Cover-Bild – das gibt es nur live)
- Saugroboter: sein Zustand und, während er saugt, eine grüne Spur durch die Räume, die er in dieser Runde schon gereinigt hat (aus seinem Raum-Sensor oder dem Attribut `current_room`)
- Kurze Schaltungen bei hohem Tempo: Ein Licht, das zwischen zwei Bildern an- und wieder ausging, blitzt kurz auf, statt unterzugehen

Nicht dabei sind Kamerabilder (der Recorder speichert keine) sowie Personen und ihre Tracker. Was der Recorder nicht aufzeichnet, steht als „unbekannt“ da.

**Mehrere Tage:** **24 h** wechselt auf **7 T**. Der letzte Tag ist sofort da, ältere Tage lädt die Zeitreise im Hintergrund nach, den neuesten zuerst und immer nur einen auf einmal; auf der Leiste steht dabei „lade Mo …“. Um Mitternacht steht der Wochentag mit Datum auf der Leiste. Was der Recorder nicht mehr hat (`purge_keep_days`), bleibt grau mit „Recorder: 5 Tage“. Ein sehr belebtes Haus hält die Woche unter 10 MB: Dafür fallen bei Bedarf sehr kurze Bewegungs-Meldungen (unter einer Minute) weg. Auf der Stufe **Tablet** reicht die Woche zwei Tage zurück – außer die Karte setzt `time_travel_range: 7d`.

**Bis in die Gegenwart:** Spielt die Zeitreise bis kurz vor jetzt, kommen die Änderungen seit dem Start der Zeitreise dazu, und die Wiedergabe läuft bis in die Gegenwart. Dort hält sie an und bietet **Live** an.

![Zeitreise: die Seitenleiste mit den Ereignissen](images/view-timetravel-events.jpg)

**Ereignisse (☰):** alle Ereignisse nach Stunden, die neuesten oben – auch die, die keinen Punkt auf der Leiste bekommen (ein Fenster wird geöffnet, mit Energie Pro „Speicher voll“ und die höchste PV-Leistung des Tages). Die Filter **Sicherheit**, **Türen & Fenster**, **Geräte** und **Energie** blenden Gruppen aus. Ein Tipp springt zum Moment und fliegt zum Raum. **Kamera folgt Ereignissen** fliegt beim Abspielen mit; **Bei wichtigen Ereignissen anhalten** (Alarm, Rauch, Gas, Kohlenmonoxid, Wasser) hält ab 900× dort an, statt vorbeizurauschen.

![Zeitreise: Während du weg warst](images/view-timetravel-away.jpg)

**Während du weg warst:** was zwischen zwei Momenten passiert ist – ohne Personen. Die Zeitreise schlägt selbst eine ruhige Zeit vor (mindestens zwei Stunden ohne Bewegung im Haus, überwiegend am Tag), daneben „letzter Zeitreise“ oder eine eigene Uhrzeit („seit 08:00“). Die Liste nennt Alarme, wie oft Türen und Fenster geöffnet wurden, Bewegung, Lichter, die anblieben (mit Dauer), Fenster, die offen standen, und Geräte, die liefen. Ein Tipp springt hin.

![Zeitreise: Tagesübersicht mit Vortag](images/view-timetravel-day.jpg)

**Tag:** die Übersicht für den Tag am Abspielkopf – je Raum, wie lange Licht brannte, ein Fenster offen stand und geheizt wurde, dazu die tiefste und höchste Temperatur; mit Energie Pro PV, Verbrauch, Netzbezug, Einspeisung (kWh) und Autarkie. **Mit dem Vortag vergleichen** stellt die Zahlen des Vortags darunter, **⟲ Gestern um diese Zeit** springt 24 Stunden zurück (die Woche wird dafür bei Bedarf geladen).

**Wandtablet:** Beim Abspielen rechnet die Ansicht auf der Stufe **Tablet** zweimal in der Sekunde (Auto viermal, Hoch sechsmal; ein Wechsel der Stufe gilt sofort), angehalten läuft gar nichts (0 B/s). Der Verlauf eines Tages wird einmal geladen und braucht nur wenige hundert Kilobyte; geändert wird nur, was sich wirklich ändert. Auf der Stufe Tablet beginnt die Zeitreise mit 24 Stunden und hält höchstens zwei Tage.

**Voraussetzungen:** der Recorder von Home Assistant (er läuft standardmäßig) und Home Assistant nach dem Update einmal neu gestartet. Wie weit der Verlauf zurückreicht, bestimmt `purge_keep_days` des Recorders (Standard 10 Tage); die Zeitreise braucht davon 24 Stunden, für die ganze Woche mindestens 7 Tage. Wer die Woche nutzen will, lässt `purge_keep_days` also bei 7 oder mehr.

### 6.8 Haushalt Pro

> Haushalt Pro gibt es im [Shop](https://mastershort.de/neonplan3d/); mit dem [Supporter-Pass](https://mastershort.de/neonplan3d/unterstuetzer/) ist es dabei. Danke an alle, die es in der Beta getestet haben.

Haushalt Pro zeigt im Haus, was im Haushalt ansteht – dort, wo es passiert. Die Mülltonnen und Briefkästen selbst gibt es für alle (Kapitel 4.23); Haushalt Pro bringt sie und andere Geräte zum Leben. Die Felder dazu stehen im Formular des Möbels unter **🏠 Haushalt Pro**.

- **Mülltonnen:** Wähle unter **Abfallkalender oder Sensor** einen Kalender (z. B. von *Waste Collection Schedule*) oder einen Sensor. Aus einem Kalender sucht NeonPlan die Einträge nach den Wörtern der Abfallart heraus (Papier, Bio, Gelber Sack, PMD, GFT, Recycling … in vielen Sprachen); passt das nicht, trägst du ein eigenes **Stichwort** ein. Ein Sensor darf die Tage bis zur Abholung, ein Datum oder „morgen“/„in 3 Tagen“ melden. Der Kalender wird sechs Wochen im Voraus gelesen. Jede Tonne mit Termin trägt ein kleines **Schildchen** auf dem Deckel – „Heute“, „Morgen“, „in 3 Tagen“ – in heller Schrift auf dunklem Grund mit einem Rand in ihrer Farbe; heute und morgen stehen hervor. Stehen mehrere Tonnen beieinander, teilen sie sich **ein Schild** mit einer Zeile je Tonne in der Reihenfolge der Abholung; Schilder, die sich sonst verdecken würden, rücken nach oben. Die Schildchen (auch die von Briefkasten und Pflanzen) wachsen mit der **Symbolgröße** wie die Beschriftung der Pins und werden auch von weitem nicht winzig. Ein Tipp auf die Tonne zeigt die nächsten Termine. **Leuchten ab / bis** legt fest, ab wann am Vortag bis wann am Abholtag eine Tonne als „dran“ gilt (für alle Tonnen). In den Looks Tag und Blueprint behalten Tonnen und Pack-Möbel mit eigenen Farben (etwa ein Halloween-Kürbis) ihre Farbe bis zum Boden.
  - **Nur die nächste Abholung beschriften:** Nur die Tonne(n) mit dem frühesten Termin tragen ein Schild. **Schilder erst … Tage vorher zeigen:** Ein Schild erscheint erst so viele Tage vor der Abholung (leer = immer, 0 = nur am Abholtag). Beide gelten für alle Tonnen; Tonnen ohne Schild stehen weiter in „Heute im Haushalt“ und zeigen beim Antippen ihre Termine. Ohne diese Einstellungen bleibt alles wie bisher.
  - **Rausgestellt:** Optional ein Helfer (`input_boolean`), Schalter oder Binärsensor, der an ist, solange die Tonne draußen steht. Dann leuchtet die Tonne nicht mehr, ihr Schild sagt „rausgestellt ✓“ (grüner Rand), und in „Heute im Haushalt“ steht sie abgehakt. Ein Tipp auf die Tonne zeigt unter den Terminen **Als rausgestellt markieren** – das schaltet einen Helfer oder Schalter um. Typisch: eine Automation, die den Helfer jede Nacht (oder nach der Abholung) wieder ausschaltet.
- **Briefkasten:** Ein **Sensor für Post** – ein Merker (z. B. ein input_boolean „Post da“ aus einer Automation) oder die Einwurfklappe – und optional der **Sensor der Entnahmetür**. Liegt Post drin, leuchtet der Briefkasten und zeigt „Post da“, bis er geleert wurde. Von weitem zeigt er statt der kleinen Schrift ein rundes **Briefsymbol**; die Schrift erscheint beim Heranzoomen.
- **Pflanzen:** Eine Pflanze (plant.*) oder ein Feuchtesensor; unter dem eingestellten Wert (Standard 20 %) zeigt sie „Durst“ – von weitem als rundes **Pflanzensymbol**.
- **Pinnwand:** Unter **⚙ Einstellungen → Haus → Pinnwand (Text-Helfer)** wählst du einen Text-Helfer (`input_text`) oder Sensor. Sein Text steht oben in „Heute im Haushalt“, mehrere Zeilen mit `|` getrennt – Automationen schreiben hinein („Paket für Alla liegt in der Garage“, „Morgen 10 Uhr kommt der Handwerker“), die Karte zeigt es.
- **Waschmaschine, Trockner, Spüler:** Mit einem **Restzeit-Sensor** zeigt die Markierung „noch 23 min“; danach „Fertig!“, bis die Tür aufgeht (**Tür-Sensor**) oder das Gerät wieder läuft. „Fertig“ erkennt NeonPlan am Zustand des Geräts (finished, beendet …) oder daran, dass es zu laufen aufgehört hat. Die Restzeit steht nur da, solange das Gerät läuft: Sagt sein Zustand aus, bereit oder Standby oder liegt seine Leistung im Standby, zeigt NeonPlan keine Restzeit – auch wenn der Restzeit-Sensor (etwa nach einem Stromausfall) noch Minuten meldet.
- **Wartung und Verbrauchsteile:** An jedem elektrischen Möbel kann ein Sensor für Filter, Salz oder Klarspüler stehen – ein Binärsensor (an = fällig), eine Zahl (Prozent oder Tage übrig, fällig ab dem eingestellten Wert) oder ein Datum. Fällig leuchtet das Gerät gelb. Sobald ein Sensor gewählt ist, gibt es eine **Zweite Wartung** mit eigenem Schwellwert – etwa beim Saugroboter Bürste am Roboter und Beutel der Station. Jede fällige steht als eigene Zeile in „Heute im Haushalt“.
- **Kühlschrank:** Steht eine Tür länger offen als eingestellt (Standard 2 Minuten), warnt NeonPlan oben im Bild. Dazu gehört der **Smart-Kühlschrank** (Side-by-Side mit beweglichen Türen) in der Möbel-Bibliothek.
- **Heute im Haushalt:** Eine Glaskarte oben rechts listet, was gerade ansteht – Tonnen heute und morgen, Post, fertige Geräte, durstige Pflanzen, fällige Wartung, offene Kühlschranktüren. Ein Tipp öffnet das Gerät, der Kopf klappt sie ein. In der Dashboard-Karte schaltet `household_card: false` sie ab.

## 7. Erweiterungen, Shop und Möbel-Packs

![Erweiterungen](images/extensions.jpg)

Der Reiter **✦ Erweiterungen** bündelt alles, was du zu NeonPlan 3D dazubekommen kannst.

### 7.1 Shop-Verbindung

Mit dem ersten Kauf bei mastershort.de bekommst du einen **Lizenzschlüssel** der Form `NP-XXXX-XXXX-XXXX-XXXX`. Er steht in der Bestell-Mail und im Kundenkonto.

1. **Erweiterungen** öffnen.
2. Unter **Shop-Verbindung** den Schlüssel eintragen und **Aktivieren** drücken.
3. Deine Käufe erscheinen mit **Installieren**. Ein Tipp holt das Pack vom Shop, signiert für genau diese Installation.

Danach:

- **Updates kommen von selbst.** Einmal täglich fragt NeonPlan 3D, ob es neue Käufe oder neuere Versionen gibt, und installiert sie. **Jetzt prüfen** fragt sofort.
- **Ohne Internet läuft alles weiter.** Installierte Packs werden lokal geprüft, der Shop wird dafür nie gebraucht.
- **Trennen** entfernt den Schlüssel. Installierte Packs bleiben.
- **Pack-Updates:** Wird ein gekauftes Pack erweitert, zeigt die Seite einmal, was dazugekommen ist.
- **Neu im Shop:** Mit Shop-Verbindung zeigt die Seite oben die Packs und Pro-Erweiterungen, die du noch nicht hast, mit **NEU** für frische Sachen. Am Reiter **✦ Erweiterungen** zeigt ein Abzeichen, was wartet: **„2 bereit“** für gekaufte oder geschenkte Packs, die installiert oder aktualisiert werden können, **„3 neu“** für neue Angebote im Shop (nur, wenn du schon etwas gekauft hast; die Angebote stehen trotzdem immer hier). Kommt ein Pack neu in dein Konto (gekauft oder geschenkt), meldet Home Assistant das außerdem einmal unter **Benachrichtigungen** (mehrere Packs auf einmal in einer Meldung); nach dem Installieren verschwindet die Meldung. Ohne Schlüssel fragt NeonPlan 3D den Shop nie.
- **Treuerabatt:** Mit dem ersten Kauf bekommst du einen persönlichen Rabattcode für jedes weitere Pack und jede Pro-Erweiterung (nicht für Bundles). Er steht in der Bestell-Mail, im Kundenkonto und oben unter **Neu im Shop**; ein Tipp auf ein Angebot legt ihn gleich in den Warenkorb.
- **4 Möbel-Packs geschenkt:** Wer mit Shop-Verbindung den NeonPlan-Newsletter noch nicht abonniert hat, sieht hier einen kleinen Kasten. Nach der Anmeldung und der Bestätigung per Mail erscheinen die Schnupper-Packs Wohnzimmer, Küche, Schlafzimmer und Bad (je 4 Möbel) von selbst unter Erweiterungen – spätestens beim nächsten täglichen Abgleich, sofort mit **Jetzt prüfen**. **Nicht mehr zeigen** blendet den Kasten auf diesem Gerät aus.

**Mehrere Installationen:** Ein Schlüssel ist mit höchstens drei Installationen gleichzeitig verbunden. Ziehst du auf neue Hardware um, verbindest du einfach die neue Installation, die älteste fällt dann heraus. Bis zu fünf neue Verbindungen sind pro Jahr möglich. Die **Installations-Kennung** oben ist ein anonymer Fingerabdruck deiner Installation.

### 7.2 Pro-Erweiterungen

Die mittlere Kachelreihe zeigt die Pro-Erweiterungen. Aktive tragen ein ✓, gesperrte ein 🔒 und den Link „Im Shop ansehen“.

### 7.3 Möbel-Packs

| Pack | Inhalt |
|---|---|
| Wohnzimmer | Sofas, Wohnwände, Kamine, Medienmöbel und mehr |
| Küche | Unterschränke, Hochschränke, Inseln, Geräte |
| Schlafzimmer | Betten, Schränke, Kommoden, Nachttische |
| Bad | Waschtische, Duschen, Wannen, WCs |
| Kinderzimmer, Büro & Gaming, Garten & Terrasse, Garage & Werkstatt, Fitness, Smart-Home & Technik | Möbel und Geräte für den jeweiligen Bereich |
| Fahrzeuge | Autos, Transporter, Motorräder und mehr für Stellplätze |
| Treppen & Geländer (16) | Gerade, L- und U-Treppen, gerade Treppen unten offen, viertelgewendelt oder mit Eckpodest, offene U-Treppe zweimal viertelgewendelt, Wendeltreppe, Raumspartreppe, Außentreppe, Podest, Geländer aus Metall, Glas und Holz |
| Heimkino & Hi-Fi | Leinwand, Beamer, Lautsprecher, Subwoofer, AV-Receiver, Plattenspieler, Kinosessel, Smart Speaker und Smart Displays – Geräte leuchten beim Abspielen; die ausrollbare Leinwand fährt mit dem Cover ihres Motors hoch und runter (Laufzeit, Positionssensor und Richtung umkehren wie beim Vorhang) |
| Hauswirtschaft & Haustechnik | Therme, Wärmepumpe, Pufferspeicher, Lüftung, Zählerschrank, Wasserenthärter, Gefriertruhe, Bügelstation |
| Haustiere | Kratzbaum, Hundebett, Futterautomat, Trinkbrunnen, Katzenklo, Käfige, Aquarium und Terrarium mit Licht |
| Architektur & Ausbau | Säulen, Balken, Schornstein, Kamin, Glastrennwand, Schiebewand, Lichtvoute, LED-Nische, Podest, motorisierter Vorhang (öffnet sich mit seinem Cover, zu beiden Seiten oder unter **Öffnet nach** nur nach links oder rechts; unter **Antrieb (Cover)** dazu Laufzeit, ein Live-Positionssensor wie bei Rollläden und **Richtung umkehren**) |

Geräte in Packs haben eine kleine Leuchtfläche (Display, Status-LED): Verknüpft mit einem Media-Player, Schalter oder Licht leuchtet sie, solange das Gerät läuft; ein Aquarium leuchtet in der Farbe seines Lichts.

Unten auf der Seite fasst ein **Balken** deine installierten Packs zusammen (Möbel-Packs mit der Zahl ihrer Möbel und Erweiterungen); **Liste zeigen** klappt die Liste mit **Entfernen** auf. Genauso fasst die Shop-Verbindung deine Käufe in einem Balken zusammen – installiert, Updates, noch nicht installiert – mit **Alle installieren/aktualisieren**. Darunter liegt **Möbel-Packs importieren …** für Pack-Dateien: Schnupper-Packs aus dem Newsletter, Downloads von der Website oder Installationen ohne Internet. Mehrere Dateien lassen sich auf einmal wählen. Der Abschnitt **Module** darunter listet die eingespielten Module (Code aus dem Shop, siehe 5.10) mit **Modul einspielen …** und **Entfernen**.

**Gut zu wissen:**

- Packs sind digital signiert. Nur Packs vom Herausgeber lassen sich importieren, veränderte Dateien werden abgelehnt.
- Entfernst du ein Pack, bleiben seine Möbel als einfache Kästen im Plan stehen. Importierst du es wieder, sind sie zurück, mit allen Verknüpfungen.
- Eine neuere Version eines Packs ersetzt die alte, ohne dass im Plan etwas verloren geht.

### 7.4 Fun-Packs

**Fun-Packs** sind kostenlose Extras zum Spaß – für jeden mit einem Kundenkonto bei mastershort.de. Ein Kauf ist nicht nötig:

- **Mit Shop-Verbindung** liegen sie schon in deinem Konto. Unter **Erweiterungen** stehen sie bei deinen Packs mit **Installieren**; Home Assistant meldet neue Fun-Packs außerdem einmal unter Benachrichtigungen.
- **Ohne Konto** legst du dir kostenlos eins an: **🎁 Kostenloses Kundenkonto anlegen** unter **🎈 Fun-Packs** (oder im Hinweis in der 3D-Ansicht), E-Mail bestätigen, den Lizenzschlüssel aus der Mail unter **Shop-Verbindung** einfügen. Danach erscheinen die Fun-Packs zum Installieren – und künftig auch neue Packs direkt in der App.

Unter **🎈 Fun-Packs** schaltest du sie danach ein und aus.

**Haustiere:** Katze, Kaninchen oder Hund – als Dackel, Mops, Terrier, Labrador oder Schäferhund – leben in deinem 3D-Haus. **+ Haustier hinzufügen** legt ein Tier an: Art, Rasse (bei Hunden), Name, Fell und die Etage, auf der es startet. **Haustiere zeigen** schaltet alle auf einmal ein und aus; in der Dashboard-Karte blendet die Option **Haustiere zeigen** (YAML `pets: false`) sie für diese Karte aus, etwa am Wandtablet.

- Die Tiere laufen durch die Türen von Raum zu Raum und **die Treppe hoch und runter** – so sind sie im ganzen Haus unterwegs. Eine Tür, deren Kontakt „zu“ meldet, ist für sie zu; Türen ohne Sensor gelten als offen.
- Sie laufen **um Möbel herum** statt hindurch – um Sofa, Tisch und Schrank; Teppiche, Lampen und was an der Wand hängt, sind kein Hindernis. Auf ihren Platz auf dem Sofa oder Bett springen sie zum Schluss hinauf.
- Sie ruhen an ihren Lieblingsplätzen: Die Katze läuft vor ein **Sofa, einen Sessel oder ein Bett** und springt von vorne hinauf, der Hund legt sich davor. Aus dem Pack Haustiere mögen Katzen Katzenbett, Katzenhöhle und Kratzbaum, Hunde Hundebett, Hundekorb und Hundehütte; am **Napf**, Futterautomaten und Trinkbrunnen schauen sie kurz vorbei.
- **Nachts** (die Sonne in Home Assistant ist untergegangen) schlafen sie eingerollt, mit einem kleinen „z Z“.
- In den **Aquarien** des Packs Haustiere schwimmen bunte **Fische**.
- Gezeichnet wird nur, solange sich ein Tier bewegt – ruhend kosten sie nichts, auch nicht auf alten Wandtablets.

**Halloween:** 13 Deko-Möbel in der Möbel-Bibliothek unter **Fun-Pack: Halloween** – Kürbis mit Gesicht, kleiner Kürbis, Kürbis-Trio, Spinnennetz (für die Ecke unter der Decke), Fledermaus-Girlande, zwei Grabsteine, Skelett, Hexenkessel, Kerzenständer, orange Lichterkette, Gespenst-Figur und Hexenbesen. Kürbis, Kessel und Kerzen leuchten, wenn du ein Licht verknüpfst. Dazu schwebt ab und zu ein kleiner **Geist** durchs Haus – mitten durch die Wände, nachts öfter. **Geist schweben lassen** unter **🎈 Fun-Packs** schaltet ihn ab; in der Dashboard-Karte blendet die Option **Halloween-Geist zeigen** (YAML `ghost: false`) ihn für diese Karte aus. Auch der Geist wird nur gezeichnet, solange er unterwegs ist.

---

### 7.5 Module

Ein **Modul** ist ein Pack, das Code mitbringt: NeonPlan lädt ihn nach und lässt ihn im Haus laufen – geprüft, signiert und an deine Installation gebunden wie ein Möbel-Pack. Module kommen nur aus dem Shop (mit Kundenkonto, viele kostenlos); ihr Code liegt nicht im öffentlichen Repository.

**So funktioniert ein Modul – Schritt für Schritt:**

1. **Holen:** Im Shop das Modul in den Warenkorb (kostenlose Module auch), bestellen, fertig. Es liegt dann in deinem Kundenkonto wie jedes Pack.
2. **Installieren:** Hast du NeonPlan mit dem Shop verbunden (7.1), steht es unter Erweiterungen → **Alle installieren/aktualisieren** – ein Tipp. Ohne Verbindung lädst du die `.fp3dpack`-Datei aus dem Konto und spielst sie ein: **⚙ Einstellungen → 🧩 Module → Modul einspielen …** oder hier im Abschnitt **Module**.
3. **Freigeben (seit 1.24):** Ein Modul läuft erst, wenn ein Administrator seinen Code gesehen und freigegeben hat. Im Abschnitt **Module** steht dann „wartet auf deine Freigabe“ – **Code ansehen & freigeben** zeigt Anbieter, Version, Größe, Fingerabdruck und den ganzen Code; **Freigeben** startet genau diesen Code, ohne Neustart.
4. **Sehen:** Das Modul steht in beiden Listen als „Modul von Mastershort · v2“. Was es kann, steht in seiner Beschreibung im Shop; die Sätze eines Sprach-Moduls erscheinen sofort unter **🎙 Sprachsteuerung → Das versteht NeonPlan**, Warnungen eines Moduls in der Warnleiste, Karten über dem Haus.
5. **Updates:** Kommt eine neue Fassung, holt der tägliche Shop-Check sie von selbst; ohne Shop-Verbindung spielst du die neue Datei ein. **Neuer Code läuft nie von allein:** Das Update wartet neben der laufenden Fassung („Update auf v4 wartet auf deine Freigabe“), bis du es mit **Update ansehen & freigeben** bestätigst. Bis dahin läuft die alte Fassung weiter. Seit 2.0.6 zeigt auch die Shop-Liste so ein wartendes Update mit dem Knopf **Update ansehen & freigeben**, statt es noch einmal zum Aktualisieren anzubieten. Möbel- und Funktions-Packs ohne Code aktualisieren sich wie bisher.
6. **Entfernen:** In der Liste **Entfernen**, wie bei einem Pack. Dein Plan bleibt unberührt.

Sicherheit: Ein Modul läuft nur mit gültiger Signatur und auf der Installation, für die es gekauft wurde. Du kannst den Code in der Datei lesen (er ist nicht verschleiert), aber nicht weitergeben – dafür gilt die Elastic License 2.0.

**Warum Module?** Die Pro-Erweiterungen ziehen nach und nach in diese Form um (auf der Erweiterungen-Seite stehen sie schon unter Module, „wird ein Modul“). An der Bedienung ändert sich nichts. Für die Entwicklung ändert sich viel: Jede Erweiterung bekommt ihre Updates über den Shop, ohne auf das nächste NeonPlan-Release zu warten; mehrere Erweiterungen lassen sich gleichzeitig bauen und testen, jede mit ihrer eigenen Supporter-Beta; und der Kern bleibt klein und schnell – ein Wandtablet lädt nur, was es nutzt.

> **Beta: Das Haus antwortet.** Das Sprach-Modul testen zuerst die Supporter: Mit dem [Supporter-Pass](https://mastershort.de/neonplan3d/unterstuetzer/) liegt es in deinem Konto – **Alle installieren** oder Datei einspielen (Schritt 2). Dann **⚙ Einstellungen → 🎙 Sprachsteuerung** öffnen: Unter „Das versteht NeonPlan“ stehen jetzt alle Fragen. Probier „Was ist offen?“, „Guten Morgen“, „Gute Nacht“, „Wie ist das Wetter?“ – am Mikrofon oder im Assist-Dialog. Für das Vorlesen braucht die Assist-Pipeline eine Sprachausgabe (Einstellungen → Sprachassistenten → Text-zu-Sprache). Was nicht verstanden wird oder falsch antwortet, bitte mit dem genauen Satz auf Discord in **#beta-feedback** – daraus wird die nächste Fassung. Nach der Beta ist das Modul für alle kostenlos.

Module heute:

| Modul | Was es tut | Preis |
|---|---|---|
| **Das Haus antwortet** | beantwortet gesprochene Fragen – „Was ist offen?“, „Wie ist das Wetter?“, „Guten Morgen“ … (5.10) | kostenlos |
| **Durchsagen** (neu, ab NeonPlan 2.0.7) | Raum antippen, **📢 Durchsage**, „Essen ist fertig!“ antippen – und der Lautsprecher in dem Raum sagt es. Fertige Sätze (in ⚙ Einstellungen → Durchsagen: ✕ nimmt einen heraus, unten kommen eigene dazu, „Fertige Sätze zurückholen“ stellt die Vorgaben wieder her), eigener Text oder ins 🎙 Mikrofon gesprochen (braucht HTTPS und eine Sprach-Pipeline mit Spracherkennung, wie die Sprachsteuerung). Aus dem Zentral-Menü an **alle Räume** oder nur dorthin, **wo gerade jemand ist** (Ortung, Präsenz- und Bewegungsmelder). Welcher Lautsprecher spricht: der im Raumformular unter **📢 Durchsagen über** gewählte, sonst ein Lautsprecher, der im Plan im Raum steht – nur wenn dort keiner steht, einer aus dem Bereich des Raums (Fernseher und nicht erreichbare Geräte nie von selbst), sonst der Standard-Lautsprecher aus ⚙ Einstellungen. Echos (Alexa Media Player) und Sprach-Satelliten wie der Home Assistant Voice PE machen eine echte Durchsage mit Gong; andere Lautsprecher sprechen über die Sprachausgabe (TTS) von Home Assistant, mit chime_tts auch mit Gong. Die Lautstärke bleibt, wie sie ist. Der Lautsprecher leuchtet im Plan kurz auf. Mit **📢 auch direkt im Raum zeigen** (⚙ Einstellungen → Durchsagen) leuchtet in der 3D-Ansicht der Etage über dem Lautsprecher jedes Raums ein 📢-Knopf – ein Tipp öffnet sofort die Sätze | Beta – zuerst mit dem Supporter-Pass |
| **Fenster-Wächter** | warnt, wenn ein Fenster bei Kälte (unter 12 °C draußen) länger als 20 Minuten offen steht oder die Heizung bei offenem Fenster läuft (10 Minuten): Der Raum pulst, die Warnleiste nennt Fenster und Zeit; „Welche Fenster sind zu lange offen?“ fliegt sie ab. Ruhe in der Nacht (ab Release 3): Legst du in Home Assistant einen Helfer (Schalter) `input_boolean.fensterwaechter_ruhe` an, warnt er nicht, solange der an ist – etwa per Automation nachts oder wenn die Rollläden unten sind | kostenlos |

## 8. Die Dashboard-Karte

![Karte im Dashboard](images/card-og-dim.jpg)

Die Karte `custom:neonplan3d-card` bringt die 3D-Ansicht in jedes Dashboard. Sie wird automatisch geladen.

**Anlegen:** Dashboard bearbeiten, **Karte hinzufügen**, nach „NeonPlan“ suchen. Alle Optionen stellst du im visuellen Editor der Karte ein:

| Abschnitt | Optionen |
|---|---|
| **Ansicht** | Etage oder ganzes Haus, Größe fest oder bildschirmfüllend, Höhe, Look, Wände, Qualität, Etagen darunter |
| **Anzeigen** | Symbole, Heatmap, Schalter in der Karte, Etagen-Miniaturen, Raumnamen, Raumfenster, Vollbild-Knopf, Uhr (Ecke wählbar, `clock: tl/tr/bl/br`), Etagen auseinander, Leistungsanzeige |
| **Funktionen** | Warnungen, Sprung zur Warnung, Szenen-Knöpfe, Bewegungsspur, Kamera-Wand, Zeitreise, Wetter mit Wetter-Entität |
| **Wandtablet (Kiosk)** | Rückkehr zur Startansicht, Nachtdimmung, Kamerafahrt als Bildschirmschoner |

![Karte mit Szenen](images/card-scenes.jpg)

In YAML sieht eine Karte so aus. Alle Zeilen außer der ersten sind optional:

```yaml
type: custom:neonplan3d-card
floor: floor_ab12cd34   # eine Etage zeigen (ID aus dem Editor)
room: room_ab12cd34     # in diesem Raum starten (ID steht im Raumformular des Editors), z. B. ein Display fürs Kinderzimmer
height: 420             # Höhe in Pixeln
fill: false             # den Bildschirm unter der Kopfzeile füllen
walls: auto             # auto | cut
controls_side: left     # left | right: Etagenbilder, Stern, Suche und Auge rechts
keep_view: false        # true: Etagenwechsel ohne neuen Kameraflug
angle_lock: false       # true: 3D-Sperre – der Blickwinkel bleibt fest, Ziehen verschiebt
explode: true           # Etagen in der Hausansicht auseinanderziehen
floor_stack: dim        # Etagen darunter: dim | stacked | single
quality: auto           # auto | low | high
theme: neon             # neon | blueprint | day
accent: "#ff8a00"       # eigene Akzentfarbe (Linien im Neon-Look, Knöpfe, Pins); weglassen = Cyan
markers: important      # none | room | important | all
marker_size: normal     # small | normal | large
marker_names: false     # true: Geräte mit eigenem Namen zeigen ihn unter dem Symbol
central: true           # der Stern mit dem Zentral-Menü (alle Lichter, Rollläden, Favoriten)
buttons:                # eigene Knöpfe nur für diese Karte (ersetzen die aus dem Editor)
  - label: Rollos
    icon: window-shutter
    action: fire_dom_event   # navigate | more_info | service | fire_dom_event
    data: { browser_mod: { service: browser_mod.popup, data: { title: Rollos, content: { type: "custom:meine-rollo-karte" } } } }
heatmap: none           # none | temperature | humidity | co2
room_panel: true        # Raum antippen öffnet das Raumfenster
room_names: true
controls: true          # Schalter in der Karte, oder eine Liste: walls, floors, temperature, humidity, co2
controls_hidden: false  # true: mit ausgeblendeten Bedienelementen starten (nur die 3D-Ansicht), ein Auge unten links holt sie zurück
controls_hide_after: 0  # Sekunden ohne Berührung, nach denen die Bedienelemente verschwinden (0 = nie); eine Berührung zeigt sie wieder
floor_thumbs: true
fullscreen_button: false
dashboard: /lovelace/home   # Knopf oben rechts, der dieses Dashboard öffnet (weglassen = kein Knopf)
dashboard_label: Start      # Beschriftung des Knopfs; ohne Beschriftung zeigt er ⌂
stats: false
alerts: true
alert_jump: false       # bei einer neuen Warnung in den Raum springen
scenes: true
motion_trail: false     # Pro: Kamera-Cockpit
weather: true           # Pro: Wetter draußen
weather_entity: weather.home
holograms: true         # Pro: Hologramme immer an/aus; weglassen = Schalter in der Karte
camera_wall: false      # Pro: Knopf „Kameras“ unten in der Karte öffnet die Kamera-Wand
time_travel: false      # Pro: Knopf „Zeitreise“ unten in der Karte spielt die letzten 24 Stunden ab (nur ansehen)
time_travel_speed: 360  # Tempo der Zeitreise: 60 | 360 | 900 | 3600 | 14400 (eine Stunde in 1 min, 10 s, 4 s, 1 s; ein Tag in 6 s, nur in der Woche)
time_travel_range: 24h  # Start der Zeitreise: 24h oder 7d (die Woche; auch auf der Stufe Tablet, die sonst zwei Tage hält)
roof: true              # false: Haus ganz ohne Dach zeigen
roof_fade: true         # false: Dach bleibt beim Heranzoomen auf dem Haus
start_view: { theta: 0.8, phi: 1.0, radius: 20 }   # eigene Startansicht dieser Karte; die Zeile steht im Editor unter Startansicht (weglassen = die des Plans)
idle_return: 0          # Sekunden ohne Berührung bis zur Startansicht
night: "off"            # off | sun | "22:00-06:00"
idle_orbit: false
```

---

## 9. NeonPlan 3D auf dem Wandtablet

![Tablet](images/tablet.jpg)

NeonPlan 3D ist für Wandtablets wie das Amazon Fire gebaut:

- **Kein Rechnen im Leerlauf.** Ändert sich nichts, zeichnet die Ansicht kein einziges Bild. Die FPS-Anzeige zeigt dann „Ruhe (0 B/s)“.
- **Qualitätsstufe Tablet:** Auf Fire-Tablets wählt „Auto“ sie von selbst. Muster, Schatten, Halos und Partikel fallen weg. Bewegte Deko (Energiefluss, Solarfelder, Klangringe, Poolwasser, Saugroboter, Farbeffekte, Haustiere) läuft mit etwa 5 Bildern pro Sekunde und bleibt 30 Sekunden nach der letzten Berührung stehen; Antippen oder etwas, das neu losläuft, weckt sie wieder. Reine Messwerte (Watt, Temperatur) erscheinen höchstens alle 2 Sekunden, Schalter, Türen und Alarme sofort.
- **Kiosk-Optionen der Karte:** Nach einigen Minuten ohne Berührung kehrt die Karte zur Startansicht zurück. Nachts dimmt sie nach Sonnenstand oder Uhrzeit. Als Bildschirmschoner dreht sich das Haus langsam.
- **Warnungen** springen auf Wunsch von selbst in den betroffenen Raum.
- Hochkant erscheint das Raumfenster unten.

![Tablet hochkant](images/tablet-portrait-room.jpg)

![Handy](images/phone-floor.jpg)

**Tipps für Fire-Tablets:** Fully Kiosk Browser mit Hardwarebeschleunigung nutzen, die Karte mit `fill: true` bildschirmfüllend zeigen und `quality: auto` lassen.

**Sprachsteuerung:** Auf dem Wandtablet sprichst du mit NeonPlan über einen Mikrofon-Knopf, z. B. „Zeig das Wohnzimmer“. Alles dazu steht in [5.10 Sprachsteuerung](#510-sprachsteuerung-neu).

---

## 10. Sicherung und Umzug

![Sicherung](images/editor-backup.jpg)

Unter **Sicherung** im Editor:

- **Wiederherstellungspunkte** entstehen beim Bearbeiten höchstens alle 10 Minuten, die letzten 20 bleiben. **Wiederherstellen** holt einen Stand zurück, der aktuelle bleibt dabei selbst als Punkt erhalten.
- **Exportieren** speichert den Plan als Datei, **Importieren …** lädt eine solche Datei.
- **Als Vorlage teilen** exportiert ohne Bereiche, Geräte, Sensoren und Bilder. Das ist gut, um einen Grundriss weiterzugeben.
- **Komplett-Backup:** **Alles sichern (Plan, Bilder, Packs)** speichert eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. **Komplett-Backup wiederherstellen …** spielt sie in dieselbe oder eine andere Installation zurück. Jedes Pack wird dabei erneut geprüft. Packs, die für eine andere Installation signiert sind, holst du dort über die Shop-Verbindung neu. Der Lizenzschlüssel ist nicht in der Datei.

Das normale Backup von Home Assistant sichert NeonPlan 3D ebenfalls vollständig mit.

**Aus anderen Programmen übernehmen:** Die **Import-Seite** (<https://neonplan3d.mastershort.de/import/>, auch unter **Sicherung → Zur Import-Seite**) macht aus Plänen anderer Programme eine NeonPlan-Datei: Sweet Home 3D (`.sh3d`), iPhone-/iPad-Scans mit LiDAR (RoomPlan-JSON), CAD-Zeichnungen (`.dxf`), 3D-Modelle aus Blender, SketchUp & Co. (`.glb`, `.gltf`, `.obj`, `.stl`), Floorplanner und Valetudo-Saugroboterkarten. Sie zeigt eine Vorschau mit Räumen, Türen, Fenstern und Möbeln, lässt Räume umbenennen und je nach Format Einheit, Layer oder Etagenhöhen einstellen; die Datei bleibt dabei auf deinem Computer. Die heruntergeladene Datei lädst du hier mit **Importieren …**. Wer sich den Plan lieber von einer KI schreiben lässt, findet die Vorlage dafür in [docs/ai-import.md](https://github.com/Mastershort/neonplan3d/blob/main/docs/ai-import.md); die Import-Seite prüft und repariert das Ergebnis.

---

## 11. Daten und Datenschutz

- Plan, Bilder und Packs liegen in Home Assistant unter `.storage`. Nichts davon verlässt deine Installation.
- NeonPlan 3D verbindet sich nur dann mit dem Internet, wenn du einen Lizenzschlüssel einträgst. Dann fragt es einmal am Tag bei mastershort.de nach Updates und sendet dabei den Schlüssel und die anonyme Installations-Kennung.
- Kamerabilder, Verlaufsdaten und Zustände bleiben in Home Assistant und werden nur im Browser angezeigt.
- Die Zeitreise liest den Verlauf aus dem Recorder von Home Assistant, nur für die Geräte des Plans. Personen und ihre Tracker liest sie nie.
- Die **Ortung** wertet die Bluetooth-Signale nur in Home Assistant aus. Nichts darüber, wer wo ist, verlässt dein Haus.
- **Hilf mit, NeonPlan besser zu machen (freiwillig, standardmäßig aus):** Unter **⚙ Einstellungen → 🛟 Hilf mit** kannst du anonyme Nutzungs- und Fehlerberichte einschalten. Wer sie noch nicht eingeschaltet hat, bekommt als Admin im Editor einmal einen Hinweis; **Ansehen** öffnet die Einstellung, **Nicht jetzt** blendet ihn auf diesem Gerät für immer aus. Dann geht höchstens einmal am Tag ein Bericht (und höchstens einmal pro Stunde ein Bündel Fehlermeldungen) an api.mastershort.de.
  - **Gesendet wird:** eine zufällige Kennung (nicht die von Home Assistant, sie entsteht beim Einschalten), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Packs und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, Räume, Möbel, verknüpfte Geräte, Kameras), Geräteart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht geöffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.
  - **Nie gesendet werden:** Namen, Entitäten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen, dein Lizenzschlüssel – und nichts aus der Ortung.
  - **„Bericht ansehen“** zeigt genau den nächsten Bericht, bevor er gesendet wird. **„Daten löschen“** entfernt alles, was schon gesendet wurde. Ausschalten vergisst die Kennung.

---

## 12. Häufige Fragen und Fehlerbehebung

**Hilfe und Rückmeldung:** Einen Fehler meldest du am besten als [Issue auf GitHub](https://github.com/Mastershort/neonplan3d/issues/new/choose), eine Idee als [Diskussion](https://github.com/Mastershort/neonplan3d/discussions/categories/ideas). So geht nichts verloren, alle sehen den Stand, und du wirst in den Release-Notizen genannt, wenn es umgesetzt ist. Die beiden Knöpfe dafür stehen auch im Editor unten in der Seitenleiste und auf der Seite Erweiterungen.

**Wie bekomme ich das neueste Update?**
Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Danach Home Assistant neu starten und die Seite neu laden (Strg+F5, in der Companion-App: Einstellungen → Companion-App → Frontend-Cache zurücksetzen).

**Kann ich Helfer statt echter Sensoren nehmen?**
Ja. Überall, wo NeonPlan einen Zahlenwert erwartet (Leistung, Ladestand, Reichweite, Position …), stehen auch `input_number`- und `number`-Helfer zur Wahl, und wo ein Ein/Aus erwartet wird (Kontakt, Anwesenheit …), auch `input_boolean`. Für Leistung braucht der Helfer die Einheit W oder kW.

**Die Lautstärke eines Echo ändert sich nicht.**
Alexa Media Player setzt die Lautstärke bei manchen Echos nicht oder nur verzögert und meldet den neuen Wert spät zurück. Prüfe es unter Entwicklerwerkzeuge → Aktionen mit `media_player.volume_set`: Passiert dort nichts, liegt es an der Integration (siehe Kapitel 6.5).

**Auf iPhone oder iPad schließt sich NeonPlan, wenn ich mit zwei Fingern verschiebe oder zoome.**
Das ist kein Absturz: Die Home-Assistant-App hat eigene Wischgesten. Liegt auf einem Wischen mit zwei Fingern eine Aktion (etwa zur Startseite), führt die App sie aus und verlässt die Seite. In der App unter **Einstellungen → Companion App → Gesten** die Zwei-Finger-Gesten auf **Keine** stellen. In Safari passiert das nicht.

**Oben steht „Neustart nötig“.**
Nach einem Update läuft im Hintergrund noch die alte Version. Home Assistant neu starten.

**Ein Gerät fehlt in der Geräteliste eines Raums.**
Der Raum braucht einen Bereich, und das Gerät muss diesem Bereich zugeordnet sein, entweder das Gerät oder die Entität selbst. Steckt die Entität unter einem Gerät mit mehreren Entitäten, steht sie hinter „+n mehr“. Das Suchfeld findet sie direkt. In Home Assistant ausgeblendete oder deaktivierte Entitäten nimmt NeonPlan nicht von selbst auf; war eine schon im Raum platziert, bleibt sie in der Liste, damit du sie entfernen oder mit 👁 ausblenden kannst.

**Eine Kamera ist schwer zu treffen.**
Tippe auf ihren Sichtkegel am Boden, er zählt wie die Kamera.

**Möbel erscheinen als graue Kästen.**
Das Pack, aus dem sie stammen, ist nicht installiert. Importiere es wieder oder installiere es über die Shop-Verbindung.

**Beim Verschieben in 3D rutscht ein Möbel nicht durch die Wand.**
Das ist Absicht: In der 3D-Ansicht bleiben Möbel und Geräte beim Ziehen in ihrem Raum und gleiten an der Wand entlang. In einen anderen Raum ziehst du sie im Grundriss, dort geht das frei.

**Ein Tipp trifft das Gerät im Nachbarraum.**
Wände fangen Tipps ab. In der Raumansicht zählen nur Dinge im Raum. Trifft es trotzdem das Falsche, hilft der Schalter **Schnitt**.

**Die Ansicht ruckelt auf dem Tablet.**
Qualität auf **Tablet** stellen und mit **FPS** prüfen, was zeichnet. Im Leerlauf sollte dort 0 B/s stehen. Läuft dauerhaft etwas, steht der Grund daneben, etwa ein Farbeffekt einer Lampe.

**Die Zeitreise zeigt nichts, „unbekannt“ oder Lücken.**
Die Zeitreise nimmt den Verlauf aus dem Recorder von Home Assistant. Steht dort „Ohne den Recorder … gibt es keinen Verlauf“, ist der Recorder abgeschaltet (`recorder:` in der `configuration.yaml`). Steht ein Gerät auf „unbekannt“, ist es vom Recorder ausgeschlossen (`exclude:` unter `recorder:`) oder erst seit Kurzem da. Graue Flächen am Anfang der Leiste: Der Recorder hat noch keine 24 Stunden gesammelt (frisch eingerichtet, oder `purge_keep_days` ist kleiner als 1). Schraffierte Flächen: Home Assistant war in dieser Zeit aus oder startete neu. Temperaturen und Leistungen kommen aus den Fünf-Minuten-Statistiken; ein Sensor ohne Zustandsklasse (`state_class: measurement`) wird stattdessen aus seinen Zuständen gezeigt. Meldet die Leiste „Bitte Home Assistant neu starten“, läuft im Hintergrund noch eine ältere Version.

**Das Sonnenlicht fällt durch die falschen Fenster.**
Unter Einstellungen die **Nordrichtung** prüfen: Grad im Uhrzeigersinn von „oben“ im Plan.

**Die Shop-Verbindung meldet „Limit erreicht“.**
Der Schlüssel war in den letzten zwölf Monaten mit mehr als fünf neuen Installationen verbunden. Melde dich bei uns, wir helfen.

**Die Aktivierung meldet „Der Shop ist gerade ausgelastet“ oder „HTTP 429“.**
Der Webhoster des Shops bremst zu viele Anfragen von einer Adresse. NeonPlan versucht es seit 1.9.1 selbst noch zweimal mit Pause; wenn es danach immer noch hakt, eine Minute warten und noch einmal auf **Aktivieren** klicken. Ältere Versionen vor 1.9.1 wurden vom Hoster an ihrem Browserkennzeichen abgewiesen – dort hilft nur das Update.

**Die Meldung „Diese Seite zeigt noch NeonPlan 3D x.y, Home Assistant hat schon …“ bleibt.**
Browser oder Companion-App halten noch ein altes NeonPlan-Bundle. Auf **Neu laden** tippen; in der Companion-App unter Einstellungen → Companion-App → **Frontend-Cache zurücksetzen**, dann die App ganz schließen und neu öffnen. Ein Neustart von Home Assistant hilft hier nicht. Dasselbe gilt, wenn eine gekaufte Pro-Erweiterung unter den Packs „braucht eine neuere NeonPlan-Version“ meldet.

**Am Dach hängen zwei Hologramme (Energie Pro).**
Das ist gewollt: Das große ist die **Hausbilanz** (Solar & Energie), das kleinere die **Anlagenkarte** des Wechselrichters, dessen Feld das ist – bei mehreren Anlagen hat jede ihre eigene. Zu viel? Im Abschnitt **Hologramm** die Hausbilanz **Frei im Plan** hängen (Griff ◈), oder im Wechselrichter-Formular den Haken **Anlagenkarte zeigen** rausnehmen. Eine kleine Karte, die scheinbar am Dach klebt, ist oft das Geräte-Hologramm eines Geräts im Raum darunter – Kamera etwas drehen.

**Der Shop ist nicht erreichbar.**
Installierte Packs und Pro-Erweiterungen funktionieren weiter. Updates kommen, sobald der Shop wieder antwortet.

**Wo melde ich Fehler?**
Im Issue-Tracker auf GitHub: https://github.com/Mastershort/neonplan3d/issues
