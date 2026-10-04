"""Turns the frames of frontend/record-energy.mjs into an MP4 (H.264, 12.5 fps) with captions.

Usage: python tools/make-video.py <frame-dir> <out.mp4> [width]
The captions come from <frame-dir>/captions.json ([{start, end, text}] in frame numbers), drawn in a
glass box at the lower left. Needs Pillow and imageio-ffmpeg (bundles its own ffmpeg).
"""

import json
from pathlib import Path
import subprocess
import sys

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

frames_dir, out = Path(sys.argv[1]), Path(sys.argv[2])
width = int(sys.argv[3]) if len(sys.argv) > 3 else 1280
fps = 12.5
files = sorted(frames_dir.glob("f*.png"))
captions = (
    json.loads((frames_dir / "captions.json").read_text(encoding="utf-8"))
    if (frames_dir / "captions.json").exists()
    else []
)
font = None
for name in ("bahnschrift.ttf", "segoeui.ttf", "arial.ttf"):
    try:
        font = ImageFont.truetype(f"C:/Windows/Fonts/{name}", 30)
        break
    except OSError:
        continue
font = font or ImageFont.load_default()


def caption_at(i: int) -> str | None:
    for c in captions:
        if c["start"] <= i < (c["end"] or 10**9):
            return c["text"]
    return None


def draw(im: Image.Image, text: str, alpha: float) -> Image.Image:
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    box = d.textbbox((0, 0), text, font=font)
    tw, th = box[2] - box[0], box[3] - box[1]
    pad = 16
    x0, y0 = 24, im.height - 76 - th - pad
    a = int(alpha * 255)
    d.rounded_rectangle(
        (x0, y0, x0 + tw + 2 * pad, y0 + th + 2 * pad),
        radius=12,
        fill=(10, 24, 48, int(a * 0.72)),
        outline=(120, 230, 255, a),
    )
    d.text((x0 + pad, y0 + pad - box[1]), text, font=font, fill=(230, 251, 255, a))
    return Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")


ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
first = Image.open(files[0])
w = width
h = round(first.height * w / first.width) // 2 * 2
proc = subprocess.Popen(
    [
        ffmpeg,
        "-y",
        "-f",
        "rawvideo",
        "-pix_fmt",
        "rgb24",
        "-s",
        f"{w}x{h}",
        "-r",
        str(fps),
        "-i",
        "-",
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "-crf",
        "20",
        "-preset",
        "slow",
        "-movflags",
        "+faststart",
        str(out),
    ],
    stdin=subprocess.PIPE,
    stderr=subprocess.DEVNULL,
)
last_text, fade = None, 0
for i, f in enumerate(files):
    im = Image.open(f).convert("RGB")
    if (w, h) != im.size:
        im = im.resize((w, h), Image.LANCZOS)
    text = caption_at(i)
    if text != last_text:
        last_text, fade = text, 0
    if text:
        fade = min(fade + 1, 6)
        im = draw(im, text, fade / 6)
    proc.stdin.write(im.tobytes())
proc.stdin.close()
proc.wait()
print(out, out.stat().st_size // 1024, "KB;", len(files), "frames,", f"{len(files) / fps:.1f} s")
