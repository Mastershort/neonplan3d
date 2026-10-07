"""ElevenLabs voice for the tutorial videos (frontend/tutorials/*.mjs).

Usage:
  python tools/tts-elevenlabs.py voices [--shared de]
      List the voices of the account (name, id, labels); --shared <lang> lists the public voice library instead.
  python tools/tts-elevenlabs.py samples <out-dir> <voice-id>...
      Speak the same few sentences from episode 1 with each voice: <out-dir>/<voice name>.mp3.
  python tools/tts-elevenlabs.py lines <cues.json|lines.txt> <voice-id> <out-dir>
      Speak every narration line to its own mp3 (cached by a hash of voice + text: an unchanged line is never paid
      twice) and write <out-dir>/durations.json (line text -> seconds). The episode scripts read it for their timing.
  python tools/tts-elevenlabs.py track <recording-dir> <audio-dir> <out.wav|out.mp3>
      The full-length voice track: every line at its start time from <recording-dir>/cues.json, silence elsewhere,
      exactly as long as the video.

The API key comes from the environment variable ELEVENLABS_API_KEY, or else from
C:/Users/Becke/.floorplan3d/elevenlabs-key.txt. It is never printed or written anywhere.
Model: eleven_multilingual_v2. Needs imageio-ffmpeg (bundles ffmpeg) for measuring and assembling.
"""

import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request
import wave

import imageio_ffmpeg

API = "https://api.elevenlabs.io"
MODEL = "eleven_multilingual_v2"
KEY_FILE = Path.home() / ".floorplan3d" / "elevenlabs-key.txt"
# the same file with an underscore in its name works as well
KEY_FILES = (KEY_FILE, KEY_FILE.with_name("elevenlabs_key.txt"))
SETTINGS = {"stability": 0.5, "similarity_boost": 0.75, "style": 0.0, "use_speaker_boost": True}
RATE = 44100

SAMPLE_TEXT = (
    "In diesem Video zeige ich dir Schritt für Schritt, wie du deinen ersten Grundriss zeichnest. "
    "Klick oben auf „Rechteck“ und zieh den Raum mit gedrückter Maustaste auf. "
    "Und weil die Räume mit Home Assistant verbunden sind, ist schon jetzt Leben drin."
)

# How a written term is spoken (the subtitles keep the written form).
SPOKEN = [
    (r"\b3D\b", "3-D"),
    (r"Strg\+Z", "Steuerung plus Z"),
    (r"Wand 2–3", "Wand zwei drei"),  # noqa: RUF001
    (r"\b2,75 Meter", "zwei Komma sieben fünf Meter"),
    (r"m²", "Quadratmeter"),
    (r"(\d),(\d)", r"\1 Komma \2"),  # any other decimal number: "4,5" -> "4 Komma 5"
    (r" & ", " und "),  # "Tür & Fenster"
    (" – ", ", "),  # noqa: RUF001
]


def spoken(text: str) -> str:
    for pattern, repl in SPOKEN:
        text = re.sub(pattern, repl, text)
    return text


def api_key() -> str:
    key = os.environ.get("ELEVENLABS_API_KEY", "").strip()
    for file in KEY_FILES:
        if not key and file.exists():
            key = file.read_text(encoding="utf-8").strip()
    if not key:
        sys.exit(f"No ElevenLabs key: set ELEVENLABS_API_KEY or put it into {KEY_FILE}")
    return key


def request(path: str, body: dict | None = None, query: dict | None = None) -> bytes:
    url = API + path + (f"?{urllib.parse.urlencode(query)}" if query else "")
    headers = {"xi-api-key": api_key(), "accept": "application/json" if body is None else "audio/mpeg"}
    data = None
    if body is not None:
        headers["content-type"] = "application/json"
        data = json.dumps(body).encode()
    req = urllib.request.Request(url, data=data, headers=headers, method="POST" if body is not None else "GET")
    try:
        with urllib.request.urlopen(req, timeout=120) as res:
            return res.read()
    except urllib.error.HTTPError as err:
        detail = err.read().decode("utf-8", "replace")[:400]
        sys.exit(f"ElevenLabs {path}: HTTP {err.code} {detail}")


def speak(text: str, voice: str, out: Path) -> None:
    audio = request(
        f"/v1/text-to-speech/{voice}",
        {"text": spoken(text), "model_id": MODEL, "voice_settings": SETTINGS},
        {"output_format": "mp3_44100_128"},
    )
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(audio)


def pcm(file: Path) -> bytes:
    """The audio file as 16-bit mono PCM at RATE."""
    cmd = [
        imageio_ffmpeg.get_ffmpeg_exe(),
        "-v",
        "error",
        "-i",
        str(file),
        "-f",
        "s16le",
        "-ac",
        "1",
        "-ar",
        str(RATE),
        "-",
    ]
    return subprocess.run(cmd, check=True, capture_output=True).stdout


def seconds(file: Path) -> float:
    return len(pcm(file)) / 2 / RATE


def safe_name(name: str) -> str:
    return re.sub(r"[^\w\- ]+", "", name).strip() or "voice"


def line_file(out_dir: Path, voice: str, text: str) -> Path:
    digest = hashlib.sha1(f"{MODEL}|{voice}|{json.dumps(SETTINGS, sort_keys=True)}|{spoken(text)}".encode()).hexdigest()
    return out_dir / f"{digest[:16]}.mp3"


def read_lines(src: Path) -> list[str]:
    if src.suffix == ".json":
        cues = json.loads(src.read_text(encoding="utf-8"))["cues"]
        texts = [c["text"] for c in cues if c["type"] == "say"]
    else:
        texts = [t.strip() for t in src.read_text(encoding="utf-8").splitlines() if t.strip()]
    return list(dict.fromkeys(texts))


def cmd_voices(args: list[str]) -> None:
    if args[:1] == ["--shared"]:
        lang = args[1] if len(args) > 1 else "de"
        data = json.loads(request("/v1/shared-voices", query={"language": lang, "page_size": 100}))
        for v in data.get("voices", []):
            labels = ", ".join(str(v.get(k)) for k in ("language", "accent", "gender", "age", "use_case") if v.get(k))
            print(f"{v.get('name')}\t{v.get('voice_id')}\t{labels}\t{(v.get('description') or '')[:80]}")
        return
    data = json.loads(request("/v1/voices"))
    for v in data.get("voices", []):
        labels = ", ".join(f"{k}={val}" for k, val in (v.get("labels") or {}).items())
        langs = ", ".join(
            sorted({x.get("language", "") for x in v.get("verified_languages") or [] if x.get("language")})
        )
        print(f"{v.get('name')}\t{v.get('voice_id')}\t{v.get('category', '')}\t{labels}\t{langs}")


def cmd_samples(out_dir: Path, voices: list[str]) -> None:
    names = {v["voice_id"]: v["name"] for v in json.loads(request("/v1/voices")).get("voices", [])}
    for voice in voices:
        out = out_dir / f"{safe_name(names.get(voice, voice))}.mp3"
        speak(SAMPLE_TEXT, voice, out)
        print(f"{out} ({seconds(out):.1f} s)")


def cmd_lines(src: Path, voice: str, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    durations_file = out_dir / "durations.json"
    durations = json.loads(durations_file.read_text(encoding="utf-8")) if durations_file.exists() else {}
    index = {}
    texts = read_lines(src)
    paid = 0
    for i, text in enumerate(texts, 1):
        file = line_file(out_dir, voice, text)
        if not file.exists():
            speak(text, voice, file)
            paid += 1
        durations[text] = round(seconds(file), 3)
        index[text] = file.name
        print(f"{i:3}/{len(texts)} {durations[text]:5.1f} s  {text[:70]}")
    durations_file.write_text(json.dumps(durations, ensure_ascii=False, indent=1), encoding="utf-8")
    (out_dir / "index.json").write_text(
        json.dumps({"voice": voice, "files": index}, ensure_ascii=False, indent=1), encoding="utf-8"
    )
    print(f"{len(texts)} lines, {paid} newly spoken, {len(texts) - paid} from the cache -> {durations_file}")


def cmd_track(rec: Path, audio_dir: Path, out: Path) -> None:
    data = json.loads((rec / "cues.json").read_text(encoding="utf-8"))
    files = json.loads((audio_dir / "index.json").read_text(encoding="utf-8"))["files"]
    total = round(float(data["duration"]) * RATE)
    track = bytearray(total * 2)
    says = [c for c in data["cues"] if c["type"] == "say"]
    for i, cue in enumerate(says):
        if cue["text"] not in files:
            sys.exit(f"no audio for: {cue['text'][:70]} (run 'lines' first)")
        clip = pcm(audio_dir / files[cue["text"]])
        start = round(cue["t"] * RATE) * 2
        nxt = round(says[i + 1]["t"] * RATE) * 2 if i + 1 < len(says) else len(track)
        if start + len(clip) > nxt:
            print(f"warning: line at {cue['t']:.1f} s runs {(start + len(clip) - nxt) / 2 / RATE:.1f} s into the next")
        clip = clip[: max(0, len(track) - start)]
        track[start : start + len(clip)] = clip
    wav = out.with_suffix(".wav")
    with wave.open(str(wav), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(RATE)
        w.writeframes(bytes(track))
    if out.suffix.lower() != ".wav":
        ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
        subprocess.run([ffmpeg, "-y", "-v", "error", "-i", str(wav), "-b:a", "192k", str(out)], check=True)
        wav.unlink()
    print(f"{out}: {total / RATE:.1f} s, {len(says)} lines")


def main() -> None:
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    cmd, rest = args[0], args[1:]
    if cmd == "voices":
        cmd_voices(rest)
    elif cmd == "samples" and len(rest) >= 2:
        cmd_samples(Path(rest[0]), rest[1:])
    elif cmd == "lines" and len(rest) == 3:
        cmd_lines(Path(rest[0]), rest[1], Path(rest[2]))
    elif cmd == "track" and len(rest) == 3:
        cmd_track(Path(rest[0]), Path(rest[1]), Path(rest[2]))
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
