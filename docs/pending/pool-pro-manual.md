### 6.8 Pool Pro

Pool Pro brings the pool to life – with what your pool equipment reports in Home Assistant. It needs an outdoor area of the type **Pool** (4.17).

**Setup:** draw a new pool with the **Pool** tool; Pool Pro is switched on right away. For an existing pool: select it in the **Pool** tool and, in the **Pool Pro** section at the bottom, click **Turn on Pool Pro for this pool**. NeonPlan finds the entities by name (an entity with "pool" in its name); every role can be chosen by hand or switched off with "None":

| Role | Entity |
|---|---|
| Water temperature | a temperature sensor (without one, NeonPlan takes the heat pump's water temperature) |
| Heat pump / heater | a climate entity or a water heater – then the target temperature can be set – or a switch |
| Filter pump | a switch, a binary sensor or a power sensor (running from 20 W) |
| Pool light | a light (its colour tints the water) or a switch |
| pH value | a sensor |
| Chlorine / redox | redox in mV or free chlorine in mg/l |
| Cover | a cover with a position |

**In the garden:** the water glows in the colour of the pool light; with the light off, the water temperature tints it from deep blue (cold) to turquoise (warm). While the **filter pump** runs, the water moves with a play of light like under real waves. While the **heat pump** heats, it shimmers warm. The **cover** slides over the water as far as it is closed.

**Glass card:** a card floats over the pool in the look of the other Pro cards: the water temperature large in its colour, beside it the heat pump's target; **pH** and **redox/chlorine** with a traffic light (green in the ideal range – pH 7.0 to 7.4, redox 650 to 800 mV, free chlorine 0.3 to 1.5 mg/l –, yellow a little off, red far off) and a dot on the scale; the state of the cover. Buttons: **− / +** for the target temperature, 🔥 heat pump on/off, 〰 filter pump on/off, 💡 light, ▲ / ▼ open/close the cover (⏹ stops it while it moves). A tap on the head folds the card.

**Warnings:** in the alert bar when pH or chlorine/redox are far off (red), and on **risk of frost** – water at 3 °C or colder while the filter pump rests.

**Wall tablet:** the water only moves while the filter pump runs; at rest the pool costs nothing.

**Pool equipment and pipes (Pool tool):** in the editor's **Pool** tool you draw pools (choose a shape: rectangular, round, oval, free) and rebuild their equipment – free; with Pool Pro the water flows visibly:

- **Ports:** skimmer and inlets sit on the rim, the bottom drain in the pool, the waste drain where the backwash water goes (say in the garage floor). Any number of inlets; move them in the plan.
- **Equipment:** filter pump, sand filter with six-way valve, heat pump, dosing unit and ball valves. They land in the garage or the technical room and move like furniture. On the sand filter you set the **valve position** (filter, backwash, rinse, waste, recirculate, closed); a **ball valve** opens and closes with a tap in the plan.
- **Pipes:** **Draw a pipe**, then tap the start (port or device), set corners and tap the end – in the flow direction, from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. Several pipes at a ball valve make a split or a junction. A selected pipe has points to drag (a double click removes one), a height above the floor and **⇄** to reverse it.
- **Pipes on the wall (wall view):** tap **+ Pipe** in the wall view and lay the pipes the way they really run: start at a device, on a pipe (a **T-piece** is made) or on the wall, set points – they snap level and upright – and end at a device or on a pipe (a double click or Enter ends it loose). **↓ Into the floor** takes the pipe straight down (on under the ground to the pool in the plan), **⟂ Through the wall** outside; switching to the next wall with **‹ ›** takes the pipe round the corner. Put a **ball valve** or **sight glass** on a pipe; tapping a ball valve closes or opens it – closed, it stops the water. A chosen pipe has points to drag (a double click removes one), **Draw on** at a loose end and each point's height to type in. In 3D they are real grey pipes with bends, sleeves and blue valves. Draw from the front or right in **3D in the room** (the left mouse button on the wall or on a device; the right or middle button still looks around). The **side bar** of the wall view puts the filter pump, sand filter, heat pump and dosing unit straight onto the wall, ball valves and sight glasses onto a pipe – with Energie Pro also the meter, inverter, home battery and wallbox. From the front, dashed circles with letters show where pipes join devices up to 1.5 m in front of the wall.
- **Water flow (Pool Pro):** while the filter pump runs, bright dots move through the pipes – blue, and orange after a heat pump that heats. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops its branch. On **backwash** the water goes from the filter to the waste drain and the inlets rest; **closed** stops everything after the pump. Pump, heat pump and the filter's valve head glow along.

**Beta:** Pool Pro starts as a beta for supporters first (6. Pro add-ons); feedback is welcome on Discord.



---

Back into 4.17 (before "### 4.18 3D beside") when Pool Pro is released:

**Pool equipment and pipes (Pool tool):** in the editor's **Pool** tool you draw pools (choose a shape: rectangular, round, oval, free) and rebuild their equipment:

- **Ports:** skimmer and inlets sit on the rim, the bottom drain in the pool, the waste drain where the backwash water goes (say in the garage floor). Any number of inlets; move them in the plan.
- **Equipment:** filter pump, sand filter with six-way valve, heat pump, dosing unit and ball valves. They land in the garage or the technical room and move like furniture. On the sand filter you set the **valve position** (filter, backwash, rinse, waste, recirculate, closed); a **ball valve** opens and closes with a tap in the plan.
- **Pipes:** **Draw a pipe**, then tap the start (port or device), set corners and tap the end – in the flow direction, from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. Several pipes at a ball valve make a split or a junction. A selected pipe has points to drag (a double click removes one), a height above the floor and **⇄** to reverse it.
- **Pipes on the wall (wall view):** tap **+ Pipe** in the wall view and lay the pipes the way they really run: start at a device, on a pipe (a **T-piece** is made) or on the wall, set points – they snap level and upright – and end at a device or on a pipe (a double click or Enter ends it loose). **↓ Into the floor** takes the pipe straight down (on under the ground to the pool in the plan), **⟂ Through the wall** outside; switching to the next wall with **‹ ›** takes the pipe round the corner. Put a **ball valve** or **sight glass** on a pipe; tapping a ball valve closes or opens it – closed, it stops the water. A chosen pipe has points to drag (a double click removes one), **Draw on** at a loose end and each point's height to type in. In 3D they are real grey pipes with bends, sleeves and blue valves. Draw from the front or right in **3D in the room** (the left mouse button on the wall or on a device; the right or middle button still looks around). The **side bar** of the wall view puts the filter pump, sand filter, heat pump and dosing unit straight onto the wall, ball valves and sight glasses onto a pipe – with Energie Pro also the meter, inverter, home battery and wallbox. From the front, dashed circles with letters show where pipes join devices up to 1.5 m in front of the wall.

