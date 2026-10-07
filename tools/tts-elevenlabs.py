"""ElevenLabs voice for the tutorial videos (frontend/tutorials/*.mjs).

Usage:
  python tools/tts-elevenlabs.py voices [--shared de]
      List the voices of the account (name, id, labels); --shared <lang> lists the public voice library instead.
  python tools/tts-elevenlabs.py samples <out-dir> <voice-id>...
      Speak the same few sentences from episode 1 with each voice: <out-dir>/<voice name>.mp3.
  python tools/tts-elevenlabs.py lines <src> <voice-id> <out-dir> [--lang en] [--dry-run]
      Speak every narration line to its own mp3 (cached by a hash of voice + text: an unchanged line is never paid
      twice) and write <out-dir>/durations.json and index.json, both keyed by the GERMAN line (the text in the
      episode script and in cues.json). The episode scripts read durations.json for their timing.
      <src>: a recording's cues.json, a text file with one line per row, or an episode's narration mapping
      frontend/tutorials/epNN-narration-en.json ({"<German line>": "<English line>"}). With --lang en (mapping
      only) the English line is spoken, still keyed by the German one. --dry-run only lists what would be paid.
      Keep <out-dir> in private/tutorial-audio/<episode>/<lang>/ (not in git, not in a temp folder).
  python tools/tts-elevenlabs.py track <recording-dir> <audio-dir> <out.wav|out.mp3>
      The full-length voice track: every line at its start time from <recording-dir>/cues.json, silence elsewhere,
      exactly as long as the video.
  python tools/tts-elevenlabs.py mux <video.mp4> <voice.mp3> <out.mp4>
      The video (copied, not re-encoded) with the voice as its audio track.
  python tools/tts-elevenlabs.py quota
      Characters used and left in the current ElevenLabs billing period.

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
    (r"↻ 90°", "90 Grad rechts herum"),
    (r"(\d)°", r"\1 Grad"),  # "90° drehen"
    (r"HA-Etage", "Home-Assistant-Etage"),
    (r"(\d),(\d)", r"\1 Komma \2"),  # any other decimal number: "4,5" -> "4 Komma 5"
    (r" & ", " und "),  # "Tür & Fenster"
    (" – ", ", "),  # noqa: RUF001
]


# The same for the English narration (German button names in it stay as they are).
SPOKEN_EN = [
    (r"\b3D\b", "3-D"),
    (r"Ctrl\+Z", "Control Z"),
    (r"Wand 2–3", "Wand two three"),  # noqa: RUF001
    (r"↻ 90°", "90 degrees clockwise"),
    (r"(\d)°", r"\1 degrees"),
    (r"m²", "square metres"),
    (r" & ", " and "),
    (" – ", ", "),  # noqa: RUF001
]


def spoken(text: str, lang: str = "de") -> str:
    """How a line is spoken. Never change a German rule that matches an existing line: its cached audio is keyed
    by the spoken text, so the line would be paid again."""
    for pattern, repl in SPOKEN_EN if lang == "en" else SPOKEN:
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


def speak(text: str, voice: str, out: Path, lang: str = "de") -> None:
    audio = request(
        f"/v1/text-to-speech/{voice}",
        {"text": spoken(text, lang), "model_id": MODEL, "voice_settings": SETTINGS},
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


def line_file(out_dir: Path, voice: str, text: str, lang: str = "de") -> Path:
    said = spoken(text, lang)
    digest = hashlib.sha1(f"{MODEL}|{voice}|{json.dumps(SETTINGS, sort_keys=True)}|{said}".encode()).hexdigest()
    return out_dir / f"{digest[:16]}.mp3"


def read_lines(src: Path, lang: str = "de") -> list[tuple[str, str]]:
    """(German line, text to speak) for every narration line of <src>, in order, without repeats."""
    if src.suffix == ".json":
        data = json.loads(src.read_text(encoding="utf-8"))
        if "cues" in data:
            if lang != "de":
                sys.exit("--lang en needs the narration mapping (epNN-narration-en.json), not cues.json")
            texts = [c["text"] for c in data["cues"] if c["type"] == "say"]
            return [(t, t) for t in dict.fromkeys(texts)]
        return [(de, de if lang == "de" else en) for de, en in data.items()]
    if lang != "de":
        sys.exit("--lang en needs the narration mapping (epNN-narration-en.json)")
    texts = [t.strip() for t in src.read_text(encoding="utf-8").splitlines() if t.strip()]
    return [(t, t) for t in dict.fromkeys(texts)]


def read_json(file: Path) -> dict:
    return json.loads(file.read_text(encoding="utf-8")) if file.exists() else {}


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


def cmd_lines(src: Path, voice: str, out_dir: Path, lang: str = "de", dry_run: bool = False) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    durations_file = out_dir / "durations.json"
    durations = read_json(durations_file)
    # merged with the earlier runs: a line spoken before keeps its entry (a cache is never thrown away)
    index = read_json(out_dir / "index.json").get("files", {})
    lines = read_lines(src, lang)
    paid = chars = 0
    for i, (key, text) in enumerate(lines, 1):
        if not text.strip():
            sys.exit(f"no {lang} text for: {key[:70]}")
        file = line_file(out_dir, voice, text, lang)
        if not file.exists():
            paid += 1
            chars += len(spoken(text, lang))
            if dry_run:
                print(f"{i:3}/{len(lines)}   new    {text[:70]}")
                continue
            speak(text, voice, file, lang)
        durations[key] = round(seconds(file), 3)
        index[key] = file.name
        print(f"{i:3}/{len(lines)} {durations[key]:5.1f} s  {text[:70]}")
    if dry_run:
        print(f"{len(lines)} lines, {paid} would be spoken ({chars} characters), {len(lines) - paid} from the cache")
        return
    durations_file.write_text(json.dumps(durations, ensure_ascii=False, indent=1), encoding="utf-8")
    (out_dir / "index.json").write_text(
        json.dumps({"voice": voice, "lang": lang, "files": index}, ensure_ascii=False, indent=1), encoding="utf-8"
    )
    print(f"{len(lines)} lines, {paid} newly spoken ({chars} characters), {len(lines) - paid} from the cache")


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


def cmd_mux(video: Path, voice: Path, out: Path) -> None:
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    cmd = [ffmpeg, "-y", "-v", "error", "-i", str(video), "-i", str(voice), "-map", "0:v", "-map", "1:a"]
    cmd += ["-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", str(out)]
    subprocess.run(cmd, check=True)
    print(out)


def cmd_quota() -> None:
    data = json.loads(request("/v1/user/subscription"))
    used, limit = data.get("character_count", 0), data.get("character_limit", 0)
    print(f"{used} of {limit} characters used, {limit - used} left")


def main() -> None:
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    cmd, rest = args[0], args[1:]
    if cmd == "voices":
        cmd_voices(rest)
    elif cmd == "samples" and len(rest) >= 2:
        cmd_samples(Path(rest[0]), rest[1:])
    elif cmd == "lines" and len(rest) >= 3:
        flags = rest[3:]
        lang = flags[flags.index("--lang") + 1] if "--lang" in flags else "de"
        cmd_lines(Path(rest[0]), rest[1], Path(rest[2]), lang, "--dry-run" in flags)
    elif cmd == "track" and len(rest) == 3:
        cmd_track(Path(rest[0]), Path(rest[1]), Path(rest[2]))
    elif cmd == "mux" and len(rest) == 3:
        cmd_mux(Path(rest[0]), Path(rest[1]), Path(rest[2]))
    elif cmd == "quota":
        cmd_quota()
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
