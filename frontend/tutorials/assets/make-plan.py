"""An invented architectural floor plan (black on white) for the tutorials: the ground floor drawn in episode 1.

The picture covers the plan from (-1.5, -1.5) m, 12 m wide, 150 px per metre. Usage: python make-plan.py
"""

import json
import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

S = 150  # px per metre
X0, Z0 = -1.5, -1.5  # world point of the image's top left
W, H = 12.0, 10.5
img = Image.new("RGB", (int(W * S), int(H * S)), "white")
d = ImageDraw.Draw(img)


def P(x, z):
    return ((x - X0) * S, (z - Z0) * S)


def F(size, bold=False):
    return ImageFont.truetype("C:/Windows/Fonts/" + ("arialbd.ttf" if bold else "arial.ttf"), size)


INK = (20, 20, 20)
EXT, INT = 0.30, 0.12


def wall(x0, z0, x1, z1, t):
    # a wall band centred on the line, with square ends
    if z0 == z1:
        a, b = P(min(x0, x1) - t / 2, z0 - t / 2), P(max(x0, x1) + t / 2, z0 + t / 2)
    else:
        a, b = P(x0 - t / 2, min(z0, z1) - t / 2), P(x0 + t / 2, max(z0, z1) + t / 2)
    d.rectangle([a, b], fill=INK)


# exterior and interior walls
for w in [(0, 0, 9.5, 0), (0, 7.5, 9.5, 7.5), (0, 0, 0, 7.5), (9.5, 0, 9.5, 7.5)]:
    wall(*w, EXT)
for w in [(0, 4.5, 9.5, 4.5), (6, 0, 6, 7.5), (3, 4.5, 3, 7.5)]:
    wall(*w, INT)


def gap(x0, z0, x1, z1, t):
    a, b = (
        P(min(x0, x1) - (t / 2 if z0 != z1 else 0), min(z0, z1) - (t / 2 if z0 == z1 else 0)),
        P(max(x0, x1) + (t / 2 if z0 != z1 else 0), max(z0, z1) + (t / 2 if z0 == z1 else 0)),
    )
    d.rectangle([a, b], fill="white")


def door(cx, cz, horizontal, t, swing):
    """A 0.9 m door in a wall; swing = (hinge side -1/1, opening direction -1/1)."""
    w = 0.9
    hs, od = swing
    if horizontal:
        gap(cx - w / 2, cz, cx + w / 2, cz, t)
        hx, hz = cx + hs * w / 2, cz + od * t / 2
        leaf = P(hx, hz + od * w)
        d.line([P(hx, hz), leaf], fill=INK, width=4)
        box = [P(hx - w, hz - w), P(hx + w, hz + w)]
        start = math.degrees(math.atan2(od, 0))
        end = math.degrees(math.atan2(0, -hs))
    else:
        gap(cx, cz - w / 2, cx, cz + w / 2, t)
        hx, hz = cx + od * t / 2, cz + hs * w / 2
        leaf = P(hx + od * w, hz)
        d.line([P(hx, hz), leaf], fill=INK, width=4)
        box = [P(hx - w, hz - w), P(hx + w, hz + w)]
        start = math.degrees(math.atan2(0, od))
        end = math.degrees(math.atan2(-hs, 0))
    a0, a1 = sorted([start % 360, end % 360])
    if a1 - a0 > 180:
        a0, a1 = a1, a0 + 360
    d.arc(box, a0, a1, fill=INK, width=2)


def window(cx, cz, w):
    gap(cx - w / 2, cz, cx + w / 2, cz, EXT)
    for off in (-EXT / 2, 0, EXT / 2):
        d.line([P(cx - w / 2, cz + off), P(cx + w / 2, cz + off)], fill=INK, width=3)
    for x in (cx - w / 2, cx + w / 2):
        d.line([P(x, cz - EXT / 2), P(x, cz + EXT / 2)], fill=INK, width=3)


door(1.5, 4.5, True, INT, (-1, -1))  # Flur -> Wohnzimmer
door(3, 6, False, INT, (-1, -1))  # Flur -> Bad
door(1.5, 7.5, True, EXT, (1, -1))  # Haustür
window(3, 0, 1.6)
window(7.75, 0, 1.2)
# a window on the right wall of the bedroom (vertical)
gap(9.5, 5.4, 9.5, 6.6, EXT)
for off in (-EXT / 2, 0, EXT / 2):
    d.line([P(9.5 + off, 5.4), P(9.5 + off, 6.6)], fill=INK, width=3)
for z in (5.4, 6.6):
    d.line([P(9.5 - EXT / 2, z), P(9.5 + EXT / 2, z)], fill=INK, width=3)
# bathroom window, bottom wall
window(4.5, 7.5, 0.8)


# room labels
def label(x, z, name, area):
    for text, f, dy in ((name, F(44, True), -26), (area, F(34), 26)):
        tw = d.textlength(text, font=f)
        px, py = P(x, z)
        d.text((px - tw / 2, py + dy - f.size / 2), text, font=f, fill=INK)


label(3, 2.25, "WOHNEN", "27,00 m²")
label(7.75, 2.25, "KÜCHE", "15,75 m²")
label(1.5, 5.6, "FLUR", "9,00 m²")
label(4.1, 6.0, "BAD", "9,00 m²")
label(7.75, 5.3, "SCHLAFEN", "10,50 m²")

# a few simple fixtures (thin lines): kitchen counter, bath tub, bed
d.rectangle([P(6.2, 0.2), P(9.3, 0.8)], outline=INK, width=2)
d.rectangle([P(5.1, 4.65), P(5.9, 6.4)], outline=INK, width=2)
d.rounded_rectangle([P(5.2, 4.75), P(5.8, 6.3)], radius=20, outline=INK, width=2)
d.rectangle([P(6.9, 6.0), P(8.6, 7.35)], outline=INK, width=2)

# dimension lines
f = F(34)


def dim_h(x0, x1, z, text):
    a, b = P(x0, z), P(x1, z)
    d.line([a, b], fill=INK, width=2)
    for x in (x0, x1):
        p = P(x, z)
        d.line([(p[0] - 10, p[1] + 10), (p[0] + 10, p[1] - 10)], fill=INK, width=3)
        d.line([(p[0], p[1] - 18), (p[0], p[1] + 18)], fill=INK, width=1)
    tw = d.textlength(text, font=f)
    d.text(((a[0] + b[0]) / 2 - tw / 2, a[1] - 46), text, font=f, fill=INK)


def dim_v(z0, z1, x, text):
    a, b = P(x, z0), P(x, z1)
    d.line([a, b], fill=INK, width=2)
    for z in (z0, z1):
        p = P(x, z)
        d.line([(p[0] - 10, p[1] + 10), (p[0] + 10, p[1] - 10)], fill=INK, width=3)
        d.line([(p[0] - 18, p[1]), (p[0] + 18, p[1])], fill=INK, width=1)
    tw = d.textlength(text, font=f)
    t = Image.new("RGBA", (int(tw) + 8, 44), (255, 255, 255, 0))
    ImageDraw.Draw(t).text((4, 0), text, font=f, fill=INK)
    t = t.rotate(90, expand=True)
    img.paste(t, (int(a[0] - 50), int((a[1] + b[1]) / 2 - t.size[1] / 2)), t)


dim_h(0, 6, -0.8, "6,00")
dim_h(6, 9.5, -0.8, "3,50")
dim_h(0, 9.5, 8.3, "9,50")
dim_v(0, 4.5, -0.8, "4,50")
dim_v(4.5, 7.5, -0.8, "3,00")
for x in (0, 6, 9.5):
    d.line([P(x, -0.25), P(x, -0.95)], fill=INK, width=1)
for z in (0, 4.5, 7.5):
    d.line([P(-0.25, z), P(-0.95, z)], fill=INK, width=1)

# title block
d.text(P(6.6, 8.75), "GRUNDRISS ERDGESCHOSS   M 1:100", font=F(30, True), fill=INK)
img.save(Path(__file__).with_name("bauplan-eg.png"))
print(img.size)


# ---------------------------------------------------------------------------------------------------------------
# Episode 2: a second invented plan with an L-shaped living room, a garage, a half-height counter and a room
# divider - scanned slightly crooked (turned by ANGLE) for straightening and scaling with the ruler.
# The unturned picture covers the plan from (-1.5, -1.5) m, 17 m wide, 100 px per metre; bauplan-l.json lists
# key points as fractions of the finished (turned) picture, for the episode script.

S = 100
X0, Z0 = -1.5, -1.5
W, H = 17.0, 11.5
ANGLE = 2.5  # degrees, counter-clockwise like a crooked scan
img = Image.new("RGB", (int(W * S), int(H * S)), (252, 251, 247))
d = ImageDraw.Draw(img)
EXT2 = 0.30
f = F(26)

# exterior walls (the L-shaped outline: garage on the left, the house from x = 3.5)
for w in [(0, 0, 14, 0), (14, 0, 14, 8.5), (3.5, 8.5, 14, 8.5), (3.5, 6, 3.5, 8.5), (0, 6, 3.5, 6), (0, 0, 0, 6)]:
    wall(*w, EXT2)
# interior walls
# (no wall between the dining area and the hall: z = 4 from x 7.5 to 10 is open)
for w in [
    (3.5, 0, 3.5, 6),
    (10, 2, 10, 4),
    (10, 4, 14, 4),
    (7.5, 4, 7.5, 8.5),
    (7.5, 5.5, 14, 5.5),
    (10.5, 5.5, 10.5, 8.5),
]:
    wall(*w, INT)
# living room / kitchen: a counter (half height) from z 0 to 2, a full wall from z 2 to 4
a, b = P(10 - INT / 2, 0), P(10 + INT / 2, 2)
d.rectangle([a, b], outline=INK, width=2)
for k in range(1, 8):
    z = k * 0.25
    d.line([P(10 - INT / 2, z - 0.1), P(10 + INT / 2, z)], fill=INK, width=1)
# room divider in the living room (half height)
a, b = P(3.5, 5 - 0.05), P(5.5, 5 + 0.05)
d.rectangle([a, b], outline=INK, width=2)
for k in range(1, 12):
    x = 3.5 + k * 0.17
    d.line([P(x - 0.08, 5 + 0.05), P(x, 5 - 0.05)], fill=INK, width=1)


def gap_v(x, z0, z1, t):
    d.rectangle([P(x - t / 2, z0), P(x + t / 2, z1)], fill=(252, 251, 247))


def gap_h(z, x0, x1, t):
    d.rectangle([P(x0, z - t / 2), P(x1, z + t / 2)], fill=(252, 251, 247))


def window_h(cx, z, w, t=EXT2):
    gap_h(z, cx - w / 2, cx + w / 2, t)
    for off in (-t / 2, 0, t / 2):
        d.line([P(cx - w / 2, z + off), P(cx + w / 2, z + off)], fill=INK, width=2)
    for x in (cx - w / 2, cx + w / 2):
        d.line([P(x, z - t / 2), P(x, z + t / 2)], fill=INK, width=2)


def window_v(x, cz, w, t=EXT2):
    gap_v(x, cz - w / 2, cz + w / 2, t)
    for off in (-t / 2, 0, t / 2):
        d.line([P(x + off, cz - w / 2), P(x + off, cz + w / 2)], fill=INK, width=2)
    for z in (cz - w / 2, cz + w / 2):
        d.line([P(x - t / 2, z), P(x + t / 2, z)], fill=INK, width=2)


def leaf_arc(hx, hz, tx, tz, ex, ez):
    """A door leaf from the hinge (hx, hz) to (tx, tz), and its swing arc towards (ex, ez) on the wall."""
    d.line([P(hx, hz), P(tx, tz)], fill=INK, width=3)
    r = math.hypot(tx - hx, tz - hz)
    a0 = math.degrees(math.atan2(tz - hz, tx - hx))
    a1 = math.degrees(math.atan2(ez - hz, ex - hx))
    lo, hi = sorted([a0 % 360, a1 % 360])
    if hi - lo > 180:
        lo, hi = hi, lo + 360
    d.arc([P(hx - r, hz - r), P(hx + r, hz + r)], lo, hi, fill=INK, width=1)


# doors
gap_v(7.5, 4.25, 5.25, INT)  # passage hall -> living room (no door)
gap_h(5.5, 8.1, 8.9, INT)  # bathroom door
leaf_arc(8.1, 5.5 + INT / 2, 8.1, 6.3, 8.9, 5.5 + INT / 2)
gap_h(5.5, 12.0, 12.9, INT)  # bedroom: sliding door
d.line([P(12.0, 5.5 - 0.1), P(12.95, 5.5 - 0.1)], fill=INK, width=3)
d.line([P(11.95, 5.5 + 0.1), P(12.9, 5.5 + 0.1)], fill=INK, width=1)
gap_v(10, 2.2, 3.8, INT)  # dining area -> kitchen: double door
leaf_arc(10 - INT / 2, 2.2, 9.2, 2.2, 10 - INT / 2, 3.0)
leaf_arc(10 - INT / 2, 3.8, 9.2, 3.8, 10 - INT / 2, 3.0)
gap_v(14, 4.25, 5.25, EXT2)  # front door
leaf_arc(14 - EXT2 / 2, 4.25, 13.0, 4.25, 14 - EXT2 / 2, 5.25)
# windows, terrace door, glass wall, garage door
window_h(5.5, 0, 1.6)
window_h(12, 0, 1.2)
window_h(9, 8.5, 0.8)
window_h(12.25, 8.5, 1.4)
gap_h(8.5, 4.6, 6.4, EXT2)  # terrace door, two leaves
leaf_arc(4.6, 8.5 - EXT2 / 2, 4.6, 7.6, 5.5, 8.5 - EXT2 / 2)
leaf_arc(6.4, 8.5 - EXT2 / 2, 6.4, 7.6, 5.5, 8.5 - EXT2 / 2)
window_v(3.5, 7.25, 2.0)  # glass wall
gap_h(6, 0.5, 3.0, EXT2)  # garage door (dashed: it opens upwards)
for k in range(10):
    x = 0.5 + k * 0.25
    d.line([P(x, 6), P(x + 0.15, 6)], fill=INK, width=3)


def label2(x, z, name, area):
    for text, fnt, dy in ((name, F(30, True), -18), (area, F(24), 18)):
        tw = d.textlength(text, font=fnt)
        px, py = P(x, z)
        d.text((px - tw / 2, py + dy - fnt.size / 2), text, font=fnt, fill=INK)


label2(1.75, 3.0, "GARAGE", "21,00 m²")
label2(6.0, 2.2, "WOHNEN / ESSEN", "44,00 m²")
label2(12.0, 2.0, "KÜCHE", "16,00 m²")
label2(10.75, 4.75, "FLUR", "9,75 m²")
label2(9.0, 7.0, "BAD", "9,00 m²")
label2(12.25, 7.0, "SCHLAFEN", "10,50 m²")
d.text(P(4.0, 5.2), "Raumteiler h = 1,20", font=F(20), fill=INK)
d.text(P(8.55, 0.9), "Theke h = 1,10", font=F(20), fill=INK)

f = F(24)
dim_h(0, 3.5, -0.8, "3,50")
dim_h(3.5, 10, -0.8, "6,50")
dim_h(10, 14, -0.8, "4,00")
dim_h(0, 14, 9.4, "14,00")
dim_v(0, 6, -0.8, "6,00")
for x in (0, 3.5, 10, 14):
    d.line([P(x, -0.25), P(x, -0.95)], fill=INK, width=1)
d.text(P(9.0, 9.75), "GRUNDRISS ERDGESCHOSS   M 1:100", font=F(22, True), fill=INK)

# scanned crooked: turn the sheet and keep track of a few points
w0, h0 = img.size
turned = img.rotate(ANGLE, resample=Image.BICUBIC, expand=True, fillcolor=(252, 251, 247))
w1, h1 = turned.size
a = math.radians(ANGLE)


def frac(x, z):
    """A plan point as a fraction (u, v) of the turned picture."""
    px, py = P(x, z)
    dx, dy = px - w0 / 2, py - h0 / 2
    # PIL turns counter-clockwise on screen (y down)
    rx = dx * math.cos(a) + dy * math.sin(a)
    ry = -dx * math.sin(a) + dy * math.cos(a)
    return [round((rx + w1 / 2) / w1, 6), round((ry + h1 / 2) / h1, 6)]


turned.save(Path(__file__).with_name("bauplan-l.png"))
points = {
    "corner": frac(0, 0),
    "top_left": frac(0, 0),
    "top_right": frac(14, 0),
    "dim_left": frac(0, 9.4),
    "dim_right": frac(14, 9.4),
    "angle": ANGLE,
    "aspect": h1 / w1,
}
Path(__file__).with_name("bauplan-l.json").write_text(json.dumps(points, indent=1))
print(turned.size)
