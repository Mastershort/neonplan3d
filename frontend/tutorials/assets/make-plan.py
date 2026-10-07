"""An invented architectural floor plan (black on white) for the tutorials: the ground floor drawn in episode 1.

The picture covers the plan from (-1.5, -1.5) m, 12 m wide, 150 px per metre. Usage: python make-plan.py
"""

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
