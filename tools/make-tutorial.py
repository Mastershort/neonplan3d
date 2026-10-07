"""Turns a tutorial recording (frontend/tutorials/*.mjs) into an MP4 plus the files for voice-over and YouTube.

Usage: python tools/make-tutorial.py <recording-dir> <out.mp4>

Reads <recording-dir>/frames.txt (an ffmpeg concat list: each still is written once with its duration) and
cues.json (chapters and narration lines with their start time). Writes, next to the MP4:
- <name>.srt            subtitles with the narration (German), timed to the picture
- <name>-chapters.txt   YouTube chapter marks ("0:00 Teaser" …), paste into the description
- <name>-narration.txt  the narration with start time and the time available for each line (for the TTS voice)

The MP4 has no sound: the voice is a separate track (ElevenLabs or a recording), laid over it in the edit,
so a voice can be exchanged without recording the picture again. Needs imageio-ffmpeg (bundles ffmpeg).
"""

import json
from pathlib import Path
import subprocess
import sys

import imageio_ffmpeg

rec, out = Path(sys.argv[1]), Path(sys.argv[2])
data = json.loads((rec / "cues.json").read_text(encoding="utf-8"))
duration = float(data["duration"])
cues = data["cues"]

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
subprocess.run(
    [
        ffmpeg,
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        str(rec / "frames.txt"),
        "-vf",
        "fps=25,format=yuv420p",
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        "18",
        "-movflags",
        "+faststart",
        str(out),
    ],
    check=True,
)


def clock(t: float, srt: bool = False) -> str:
    h, rest = divmod(t, 3600)
    m, s = divmod(rest, 60)
    if srt:
        return f"{int(h):02d}:{int(m):02d}:{int(s):02d},{int((s - int(s)) * 1000):03d}"
    return f"{int(h)}:{int(m):02d}:{int(s):02d}" if h else f"{int(m)}:{int(s):02d}"


says = [c for c in cues if c["type"] == "say"]
srt, narration = [], []
for i, c in enumerate(says):
    end = says[i + 1]["t"] if i + 1 < len(says) else duration
    srt.append(f"{i + 1}\n{clock(c['t'], True)} --> {clock(end - 0.05, True)}\n{c['text']}\n")
    narration.append(f"[{clock(c['t'])}] ({end - c['t']:.1f} s)  {c['text']}")
stem = out.with_suffix("")
Path(f"{stem}.srt").write_text("\n".join(srt), encoding="utf-8")
Path(f"{stem}-narration.txt").write_text("\n".join(narration) + "\n", encoding="utf-8")
chapters = [f"{clock(c['t'])} {c['text']}" for c in cues if c["type"] == "chapter"]
Path(f"{stem}-chapters.txt").write_text("\n".join(chapters) + "\n", encoding="utf-8")
print(f"{out} - {clock(duration)}, {len(says)} narration lines, {len(chapters)} chapters")
