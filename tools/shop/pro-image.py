"""Shop pictures of a Pro add-on: a screenshot of the demo house framed on a dark 1200 x 1200 square, with
title, one line of text and an optional badge (e.g. the supporter beta).

Usage: python tools/shop/pro-image.py <screenshot.png> <out.png> --title "Zeitreise" --text "…" [--badge "…"]
The screenshots come from `npm run screenshot` (scenes shop-*), with invented demo data only.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

SIZE = 1200
BG_TOP, BG_BOTTOM = (8, 12, 26), (14, 22, 44)
CYAN, AMBER, SOFT = (34, 211, 238), (255, 176, 32), (170, 190, 220)
FONTS = Path("C:/Windows/Fonts")


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


def rewind_icon(draw: ImageDraw.ImageDraw, x: int, y: int, h: int, colour: tuple[int, int, int]) -> int:
    """Two triangles pointing left (the rewind sign); returns the width used."""
    w = int(h * 0.8)
    for dx in (0, w):
        draw.polygon([(x + dx, y + h / 2), (x + dx + w, y), (x + dx + w, y + h)], fill=colour)
    return 2 * w


def flask_icon(draw: ImageDraw.ImageDraw, x: int, y: int, h: int, colour: tuple[int, int, int]) -> int:
    """A small lab flask outline (the beta sign); returns the width used."""
    w = int(h * 0.8)
    neck = w * 0.32
    cx = x + w / 2
    pts = [
        (cx - neck / 2, y),
        (cx + neck / 2, y),
        (cx + neck / 2, y + h * 0.38),
        (x + w, y + h),
        (x, y + h),
        (cx - neck / 2, y + h * 0.38),
    ]
    draw.polygon(pts, outline=colour, width=3)
    draw.polygon([(x + w * 0.2, y + h * 0.72), (x + w * 0.8, y + h * 0.72), (x + w, y + h), (x, y + h)], fill=colour)
    return w


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("shot")
    ap.add_argument("out")
    ap.add_argument("--title", required=True)
    ap.add_argument("--text", required=True)
    ap.add_argument("--badge")
    a = ap.parse_args()

    img = Image.new("RGB", (SIZE, SIZE))
    draw = ImageDraw.Draw(img)
    for y in range(SIZE):
        t = y / SIZE
        draw.line([(0, y), (SIZE, y)], fill=tuple(int(BG_TOP[i] + (BG_BOTTOM[i] - BG_TOP[i]) * t) for i in range(3)))

    # the whole block (header + screenshot) is centred on the square
    x0 = 64
    shot = Image.open(a.shot).convert("RGB")
    w = SIZE - 2 * x0
    header = 160 + (88 if a.badge else 0)
    h = min(int(shot.height * w / shot.width), SIZE - header - 2 * x0)
    y0 = max(48, (SIZE - header - h) // 2)

    # title row: rewind sign + title, the text below, the badge under it
    used = rewind_icon(draw, x0, y0 + 14, 54, AMBER)
    draw.text((x0 + used + 22, y0 - 6), a.title, font=font("segoeuib.ttf", 74), fill=(240, 246, 255))
    draw.text((x0, y0 + 100), a.text, font=font("segoeui.ttf", 30), fill=SOFT)
    top = y0 + 160
    if a.badge:
        f = font("seguisb.ttf", 28)
        tw = draw.textlength(a.badge, font=f)
        bx, by, bh = x0, top + 4, 50
        draw.rounded_rectangle(
            [bx, by, bx + tw + 90, by + bh], radius=bh // 2, fill=(46, 36, 12), outline=AMBER, width=2
        )
        flask_icon(draw, bx + 22, by + 11, 28, AMBER)
        draw.text((bx + 64, by + 8), a.badge, font=f, fill=AMBER)
        top = by + bh + 34

    # the screenshot: scaled to the width, rounded, with a cyan glow
    top = y0 + header
    shot = shot.resize((w, int(shot.height * w / shot.width)), Image.LANCZOS).crop((0, 0, w, h))
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    ImageDraw.Draw(glow).rounded_rectangle(
        [x0 - 6, top - 6, x0 + w + 6, top + h + 6], radius=26, outline=(*CYAN, 170), width=8
    )
    img.paste(glow.filter(ImageFilter.GaussianBlur(14)), (0, 0), glow.filter(ImageFilter.GaussianBlur(14)))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, w - 1, h - 1], radius=20, fill=255)
    img.paste(shot, (x0, top), mask)
    ImageDraw.Draw(img).rounded_rectangle([x0, top, x0 + w - 1, top + h - 1], radius=20, outline=CYAN, width=2)
    img.save(a.out, optimize=True)
    print(a.out)


if __name__ == "__main__":
    main()
