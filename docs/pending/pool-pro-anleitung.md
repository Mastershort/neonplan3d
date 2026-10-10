### 6.8 Pool Pro

Pool Pro lässt den Pool leben – mit dem, was deine Pool-Technik in Home Assistant meldet. Voraussetzung ist eine Außenfläche der Art **Pool** (4.17).

**Einrichten:** Einen neuen Pool zeichnest du mit dem Werkzeug **Pool**; Pool Pro ist dann gleich eingeschaltet. Bei einem vorhandenen Pool: im Werkzeug **Pool** anklicken, unten im Abschnitt **Pool Pro** auf **Pool Pro für diesen Pool einschalten**. NeonPlan sucht die Entitäten selbst über den Namen (eine Entität mit „pool“ im Namen); jede Rolle kannst du von Hand wählen oder mit „Keine“ abschalten:

| Rolle | Entität |
|---|---|
| Wassertemperatur | ein Temperatur-Sensor (ohne ihn nimmt NeonPlan die Wassertemperatur der Wärmepumpe) |
| Wärmepumpe / Heizung | eine Klima-Entität (`climate`) oder ein Warmwasserbereiter (`water_heater`) – dann lässt sich die Solltemperatur einstellen – oder ein Schalter |
| Filterpumpe | ein Schalter, ein Binärsensor oder ein Leistungssensor (läuft ab 20 W) |
| Poolbeleuchtung | ein Licht (die Farbe färbt das Wasser) oder ein Schalter |
| pH-Wert | ein Sensor |
| Chlor / Redox | Redox in mV oder freies Chlor in mg/l |
| Abdeckung | eine Abdeckung (`cover`) mit Position |

**Im Garten:** Das Wasser leuchtet in der Farbe der Poolbeleuchtung; ist sie aus, färbt die Wassertemperatur es von tiefem Blau (kalt) bis Türkis (warm). Läuft die **Filterpumpe**, bewegt sich das Wasser mit einem Lichtspiel wie unter echten Wellen. Heizt die **Wärmepumpe**, schimmert es warm. Die **Abdeckung** fährt so weit über das Wasser, wie sie geschlossen ist.

**Glaskarte:** Über dem Pool schwebt eine Karte im Look der anderen Pro-Karten: die Wassertemperatur groß in ihrer Farbe, daneben die Solltemperatur der Wärmepumpe; **pH** und **Redox/Chlor** mit Ampel (grün im Idealbereich – pH 7,0 bis 7,4, Redox 650 bis 800 mV, freies Chlor 0,3 bis 1,5 mg/l –, gelb etwas daneben, rot weit daneben) und einem Punkt auf der Skala; der Stand der Abdeckung. Knöpfe: **− / +** für die Solltemperatur, 🔥 Wärmepumpe an/aus, 〰 Filterpumpe an/aus, 💡 Licht, ▲ / ▼ Abdeckung öffnen/schließen (⏹ hält sie an, solange sie fährt). Ein Tipp auf den Kopf klappt die Karte zusammen.

**Warnungen:** in der Warnleiste, wenn der pH-Wert oder Chlor/Redox weit außerhalb liegen (rot), und bei **Frostgefahr** – Wasser bei 3 °C oder kälter, während die Filterpumpe steht.

**Wandtablet:** Das Wasser bewegt sich nur, solange die Filterpumpe läuft; steht sie, kostet der Pool nichts.

**Pooltechnik und Rohre (Werkzeug Pool):** Im Editor-Werkzeug **Pool** zeichnest du Pools (Form wählen: Eckig, Rund, Oval, Frei) und baust ihre Technik nach – kostenlos; mit Pool Pro fließt das Wasser sichtbar:

- **Anschlüsse:** Skimmer und Einlässe sitzen am Beckenrand, der Bodenablauf im Becken, der Abwasser-Anschluss dort, wo das Rückspülwasser hingeht (etwa im Garagenboden). Beliebig viele Einlässe; im Plan verschieben.
- **Technik:** Filterpumpe, Sandfilter mit 6-Wege-Ventil, Wärmepumpe, Dosieranlage und Kugelhähne. Sie landen in der Garage oder im Technikraum und lassen sich wie Möbel verschieben. Beim Sandfilter stellst du die **Ventilstellung** ein (Filtern, Rückspülen, Nachspülen, Entleeren, Zirkulieren, Geschlossen), einen **Kugelhahn** öffnest und schließt du per Tipp im Plan.
- **Rohre:** **Rohr zeichnen**, dann den Start antippen (Anschluss oder Gerät), Ecken setzen und das Ziel antippen – in Fließrichtung, also vom Skimmer zur Pumpe, weiter zum Filter, über Wärmepumpe oder Bypass zu den Einlässen. Mehrere Rohre an einem Kugelhahn bilden eine Verteilung oder eine Zusammenführung. Ein ausgewähltes Rohr hat Punkte zum Ziehen (Doppelklick löscht einen), eine Höhe über dem Boden und **⇄** zum Umdrehen.
- **Rohre an der Wand (Wandansicht):** In der Wandansicht **+ Rohr** antippen und die Rohre so verlegen, wie sie wirklich laufen: am Gerät, auf einem Rohr (dann entsteht ein **T-Stück**) oder auf der Wand anfangen, Punkte setzen – sie rasten waagerecht und senkrecht ein – und am Gerät oder auf einem Rohr enden (Doppelklick oder Enter beendet lose). **↓ In den Boden** führt das Rohr senkrecht nach unten (weiter im Grundriss unter der Erde zum Pool), **⟂ Durch die Wand** nach draußen; mit **‹ ›** zur Nachbarwand gewechselt, geht das Rohr um die Ecke. **Kugelhahn** und **Sichtglas** setzt du aufs Rohr; einen Kugelhahn antippen schließt oder öffnet ihn – geschlossen sperrt er das Wasser. Ein gewähltes Rohr hat Punkte zum Ziehen (Doppelklick entfernt), **Weiterzeichnen** an einem losen Ende und die Höhe jedes Punkts zum Eintippen. In 3D sind es echte graue Rohre mit Bögen, Muffen und blauen Hähnen.
- **Wasserfluss (Pool Pro):** Läuft die Filterpumpe, wandern helle Punkte durch die Rohre – blau, und nach einer heizenden Wärmepumpe orange. An einer Verteilung fließt das Wasser über die Wärmepumpe, solange sie an ist, sonst über den Bypass; ein geschlossener Kugelhahn sperrt seinen Zweig. Beim **Rückspülen** geht das Wasser vom Filter zum Abwasser, die Einlässe stehen still; **Geschlossen** stoppt alles nach der Pumpe. Pumpe, Wärmepumpe und der Ventilkopf des Filters leuchten mit.

**Beta:** Pool Pro startet als Beta zuerst für Supporter (6. Pro-Erweiterungen); Rückmeldungen gern im Discord.



---

Zurück nach 4.17 (vor „### 4.18 3D daneben“), wenn Pool Pro freigegeben wird:

**Pooltechnik und Rohre (Werkzeug Pool):** Im Editor-Werkzeug **Pool** zeichnest du Pools (Form wählen: Eckig, Rund, Oval, Frei) und baust ihre Technik nach:

- **Anschlüsse:** Skimmer und Einlässe sitzen am Beckenrand, der Bodenablauf im Becken, der Abwasser-Anschluss dort, wo das Rückspülwasser hingeht (etwa im Garagenboden). Beliebig viele Einlässe; im Plan verschieben.
- **Technik:** Filterpumpe, Sandfilter mit 6-Wege-Ventil, Wärmepumpe, Dosieranlage und Kugelhähne. Sie landen in der Garage oder im Technikraum und lassen sich wie Möbel verschieben. Beim Sandfilter stellst du die **Ventilstellung** ein (Filtern, Rückspülen, Nachspülen, Entleeren, Zirkulieren, Geschlossen), einen **Kugelhahn** öffnest und schließt du per Tipp im Plan.
- **Rohre:** **Rohr zeichnen**, dann den Start antippen (Anschluss oder Gerät), Ecken setzen und das Ziel antippen – in Fließrichtung, also vom Skimmer zur Pumpe, weiter zum Filter, über Wärmepumpe oder Bypass zu den Einlässen. Mehrere Rohre an einem Kugelhahn bilden eine Verteilung oder eine Zusammenführung. Ein ausgewähltes Rohr hat Punkte zum Ziehen (Doppelklick löscht einen), eine Höhe über dem Boden und **⇄** zum Umdrehen.
- **Rohre an der Wand (Wandansicht):** In der Wandansicht **+ Rohr** antippen und die Rohre so verlegen, wie sie wirklich laufen: am Gerät, auf einem Rohr (dann entsteht ein **T-Stück**) oder auf der Wand anfangen, Punkte setzen – sie rasten waagerecht und senkrecht ein – und am Gerät oder auf einem Rohr enden (Doppelklick oder Enter beendet lose). **↓ In den Boden** führt das Rohr senkrecht nach unten (weiter im Grundriss unter der Erde zum Pool), **⟂ Durch die Wand** nach draußen; mit **‹ ›** zur Nachbarwand gewechselt, geht das Rohr um die Ecke. **Kugelhahn** und **Sichtglas** setzt du aufs Rohr; einen Kugelhahn antippen schließt oder öffnet ihn – geschlossen sperrt er das Wasser. Ein gewähltes Rohr hat Punkte zum Ziehen (Doppelklick entfernt), **Weiterzeichnen** an einem losen Ende und die Höhe jedes Punkts zum Eintippen. In 3D sind es echte graue Rohre mit Bögen, Muffen und blauen Hähnen.

