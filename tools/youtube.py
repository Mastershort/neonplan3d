"""Fills in the tutorial videos on YouTube: title, description, tags, English metadata, captions and the playlist.

The videos themselves are uploaded by hand in YouTube Studio (as private drafts): uploads through an unaudited API
project stay locked to private, editing your own videos does not. This tool finds each video by its file name
(e.g. ep01-de.mp4) and applies what the episode's Upload folder holds (YouTube.md, .srt, .en.srt). Torsten then
publishes in the YouTube Studio app. The English audio track cannot be added through the API (YouTube Studio:
Subtitles → language → Audio).

Usage:
  python tools/youtube.py login                     one-time Google sign-in in the browser
  python tools/youtube.py list                      your videos: file name, id, visibility, title
  python tools/youtube.py apply <Upload dir>... [--dry-run] [--synthetic yes|no]
  python tools/youtube.py apply-all <root> [--dry-run] [--synthetic yes|no]
                                                    every Upload folder below <root> ("NeonPlan neue Packs")

OAuth client: C:/Users/Becke/.floorplan3d/youtube_client.json (Desktop app); the refresh token is kept in
youtube_token.json beside it. Neither is ever printed.
"""

from __future__ import annotations

import http.server
import json
from pathlib import Path
import re
import secrets
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import webbrowser

HOME = Path.home() / ".floorplan3d"
CLIENT = HOME / "youtube_client.json"
TOKEN = HOME / "youtube_token.json"
SCOPE = "https://www.googleapis.com/auth/youtube.force-ssl"
API = "https://www.googleapis.com/youtube/v3"
PLAYLIST = "NeonPlan 3D – Tutorials"  # noqa: RUF001
CATEGORY = "28"  # Science & Technology


def client() -> dict:
    if not CLIENT.exists():
        sys.exit(f"Missing {CLIENT}")
    data = json.loads(CLIENT.read_text(encoding="utf-8"))
    return data.get("installed") or data.get("web") or data


# ---------------------------------------------------------------- OAuth


def login() -> None:
    c = client()
    state = secrets.token_urlsafe(16)
    got: dict[str, str] = {}

    class Handler(http.server.BaseHTTPRequestHandler):
        def do_GET(self) -> None:
            q = dict(urllib.parse.parse_qsl(urllib.parse.urlparse(self.path).query))
            got.update(q)
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write("NeonPlan Upload: angemeldet. Du kannst dieses Fenster schließen.".encode())

        def log_message(self, *_args) -> None:
            pass

    server = http.server.HTTPServer(("127.0.0.1", 0), Handler)
    redirect = f"http://127.0.0.1:{server.server_port}"
    url = "https://accounts.google.com/o/oauth2/v2/auth?" + urllib.parse.urlencode(
        {
            "client_id": c["client_id"],
            "redirect_uri": redirect,
            "response_type": "code",
            "scope": SCOPE,
            "access_type": "offline",
            "prompt": "consent",
            "state": state,
        }
    )
    print("Opening the Google sign-in in your browser … (if it does not open, copy this address into the browser)")
    print(url)
    webbrowser.open(url)
    while "code" not in got and "error" not in got:
        server.handle_request()
    if got.get("state") != state or "code" not in got:
        sys.exit(f"Sign-in failed: {got.get('error', 'state mismatch')}")
    tok = post_form(
        "https://oauth2.googleapis.com/token",
        {
            "code": got["code"],
            "client_id": c["client_id"],
            "client_secret": c.get("client_secret", ""),
            "redirect_uri": redirect,
            "grant_type": "authorization_code",
        },
    )
    if "refresh_token" not in tok:
        sys.exit("No refresh token returned - remove the app's access in your Google account and sign in again.")
    TOKEN.write_text(json.dumps({"refresh_token": tok["refresh_token"]}), encoding="utf-8")
    print("Signed in; the token is stored in", TOKEN)


def post_form(url: str, fields: dict) -> dict:
    req = urllib.request.Request(url, data=urllib.parse.urlencode(fields).encode(), method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as res:
            return json.loads(res.read())
    except urllib.error.HTTPError as e:
        sys.exit(f"Token request failed: HTTP {e.code} {e.read().decode(errors='replace')[:300]}")


_access: dict[str, object] = {}


def access_token() -> str:
    if _access.get("until", 0) > time.time() + 60:  # type: ignore[operator]
        return str(_access["token"])
    if not TOKEN.exists():
        sys.exit("Not signed in: run  python tools/youtube.py login")
    c = client()
    refresh = json.loads(TOKEN.read_text(encoding="utf-8"))["refresh_token"]
    tok = post_form(
        "https://oauth2.googleapis.com/token",
        {
            "refresh_token": refresh,
            "client_id": c["client_id"],
            "client_secret": c.get("client_secret", ""),
            "grant_type": "refresh_token",
        },
    )
    _access.update(token=tok["access_token"], until=time.time() + int(tok.get("expires_in", 3600)))
    return str(_access["token"])


def call(
    method: str,
    path: str,
    params: dict | None = None,
    body: object | None = None,
    *,
    data: bytes | None = None,
    ctype: str | None = None,
    base: str = API,
) -> dict:
    url = base + path + ("?" + urllib.parse.urlencode(params) if params else "")
    if body is not None:
        data, ctype = json.dumps(body).encode(), "application/json"
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", f"Bearer {access_token()}")
    if ctype:
        req.add_header("Content-Type", ctype)
    try:
        with urllib.request.urlopen(req, timeout=120) as res:
            raw = res.read()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"{method} {path}: HTTP {e.code} {e.read().decode(errors='replace')[:500]}") from None


# ---------------------------------------------------------------- videos


def my_videos() -> list[dict]:
    """All videos of the channel with their file names (fileDetails is only visible to the owner)."""
    ch = call("GET", "/channels", {"part": "contentDetails", "mine": "true"})["items"][0]
    uploads = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    ids: list[str] = []
    token = None
    while True:
        params = {"part": "contentDetails", "playlistId": uploads, "maxResults": 50}
        if token:
            params["pageToken"] = token
        page = call("GET", "/playlistItems", params)
        ids += [i["contentDetails"]["videoId"] for i in page.get("items", [])]
        token = page.get("nextPageToken")
        if not token:
            break
    out = []
    for i in range(0, len(ids), 50):
        out += call(
            "GET", "/videos", {"part": "snippet,status,fileDetails,localizations", "id": ",".join(ids[i : i + 50])}
        ).get("items", [])
    return out


def list_videos() -> None:
    for v in my_videos():
        name = v.get("fileDetails", {}).get("fileName", "?")
        print(f"{name:28} {v['id']}  {v['status']['privacyStatus']:9} {v['snippet']['title']}")


def blocks(md: str) -> list[str]:
    return [b.strip("\n") for b in re.findall(r"```[a-z]*\n(.*?)```", md, flags=re.S)]


def read_upload(folder: Path) -> dict:
    md = (folder / "YouTube.md").read_text(encoding="utf-8")
    b = blocks(md)
    if len(b) < 5:
        raise RuntimeError(f"{folder}: YouTube.md has {len(b)} code blocks, expected 5 (titles, descriptions, tags)")
    video = next(folder.glob("*-de.mp4"), None)
    if not video:
        raise RuntimeError(f"{folder}: no *-de.mp4")
    stem = video.name[: -len("-de.mp4")]
    return {
        "file": video.name,
        "stem": stem,
        "title": b[0].strip(),
        "description": b[1],
        "title_en": b[2].strip(),
        "description_en": b[3],
        "tags": [t.strip() for t in b[4].split(",") if t.strip()],
        "srt_de": folder / f"{stem}.srt",
        "srt_en": folder / f"{stem}.en.srt",
    }


def ensure_playlist(dry: bool) -> str | None:
    page = call("GET", "/playlists", {"part": "snippet", "mine": "true", "maxResults": 50})
    for p in page.get("items", []):
        if p["snippet"]["title"] == PLAYLIST:
            return p["id"]
    if dry:
        print(f"  [dry] would create the playlist „{PLAYLIST}“ (private)")
        return None
    p = call(
        "POST",
        "/playlists",
        {"part": "snippet,status"},
        {
            "snippet": {
                "title": PLAYLIST,
                "defaultLanguage": "de",
                "description": "Schritt für Schritt: dein Zuhause in 3D mit NeonPlan 3D und Home Assistant.",
            },
            "status": {"privacyStatus": "private"},
        },
    )
    print(f"  playlist created: {PLAYLIST} (private - make it public in YouTube Studio when the first videos go live)")
    return p["id"]


def upload_caption(video_id: str, lang: str, name: str, srt: Path, existing: dict[str, str], dry: bool) -> None:
    if not srt.exists():
        print(f"  ! no {srt.name}")
        return
    if dry:
        print(f"  [dry] caption {lang} from {srt.name}{' (replace)' if lang in existing else ''}")
        return
    boundary = "np" + secrets.token_hex(8)
    meta = {"snippet": {"videoId": video_id, "language": lang, "name": name}}
    if lang in existing:
        meta["id"] = existing[lang]
    body = (
        (
            f"--{boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n{json.dumps(meta)}\r\n"
            f"--{boundary}\r\nContent-Type: application/octet-stream\r\n\r\n"
        ).encode()
        + srt.read_bytes()
        + f"\r\n--{boundary}--\r\n".encode()
    )
    method = "PUT" if lang in existing else "POST"
    call(
        method,
        "/captions",
        {"part": "snippet", "uploadType": "multipart"},
        data=body,
        ctype=f"multipart/related; boundary={boundary}",
        base="https://www.googleapis.com/upload/youtube/v3",
    )
    print(f"  caption {lang}: {'replaced' if lang in existing else 'added'}")


def apply(folders: list[Path], dry: bool, synthetic: bool | None) -> None:
    videos = {v.get("fileDetails", {}).get("fileName", ""): v for v in my_videos()}
    playlist = ensure_playlist(dry)
    items = [read_upload(f) for f in folders]
    for it in sorted(items, key=lambda x: x["stem"]):
        v = videos.get(it["file"])
        print(f"{it['file']}: {'found ' + v['id'] if v else 'NOT on YouTube yet - upload it in YouTube Studio first'}")
        if not v:
            continue
        vid = v["id"]
        status = {"privacyStatus": v["status"]["privacyStatus"], "selfDeclaredMadeForKids": False, "embeddable": True}
        if synthetic is not None:
            status["containsSyntheticMedia"] = synthetic
        body = {
            "id": vid,
            "snippet": {
                "title": it["title"],
                "description": it["description"],
                "tags": it["tags"],
                "categoryId": CATEGORY,
                "defaultLanguage": "de",
                "defaultAudioLanguage": "de",
            },
            "localizations": {"en": {"title": it["title_en"], "description": it["description_en"]}},
            "status": status,
        }
        if dry:
            print(
                f"  [dry] „{it['title']}“ / „{it['title_en']}“, {len(it['tags'])} tags, stays {status['privacyStatus']}"
            )
        else:
            call("PUT", "/videos", {"part": "snippet,localizations,status"}, body)
            print("  title, description, tags, English metadata set")
        caps = call("GET", "/captions", {"part": "snippet", "videoId": vid}).get("items", [])
        existing = {c["snippet"]["language"]: c["id"] for c in caps if c["snippet"].get("trackKind") != "asr"}
        upload_caption(vid, "de", "Deutsch", it["srt_de"], existing, dry)
        upload_caption(vid, "en", "English", it["srt_en"], existing, dry)
        if playlist:
            ordered = sorted(i["stem"] for i in items)
            in_list = call("GET", "/playlistItems", {"part": "snippet", "playlistId": playlist, "maxResults": 50}).get(
                "items", []
            )
            if any(p["snippet"]["resourceId"]["videoId"] == vid for p in in_list):
                print("  already in the playlist")
            elif dry:
                print(f"  [dry] add to the playlist at position {ordered.index(it['stem'])}")
            else:
                call(
                    "POST",
                    "/playlistItems",
                    {"part": "snippet"},
                    {
                        "snippet": {
                            "playlistId": playlist,
                            "resourceId": {"kind": "youtube#video", "videoId": vid},
                            "position": min(ordered.index(it["stem"]), len(in_list)),
                        }
                    },
                )
                print("  added to the playlist")


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    dry = "--dry-run" in sys.argv
    synthetic = None
    if "--synthetic" in sys.argv:
        synthetic = sys.argv[sys.argv.index("--synthetic") + 1] == "yes"
        args = [a for a in args if a not in ("yes", "no")]
    if not args:
        sys.exit(__doc__)
    cmd, rest = args[0], args[1:]
    if cmd == "login":
        login()
    elif cmd == "list":
        list_videos()
    elif cmd == "apply":
        apply([Path(r) for r in rest], dry, synthetic)
    elif cmd == "apply-all":
        apply(sorted(p.parent for p in Path(rest[0]).rglob("YouTube.md")), dry, synthetic)
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
