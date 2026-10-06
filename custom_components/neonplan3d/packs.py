"""Furniture packs: signed files with furniture models built from boxes and cylinders.

A pack is JSON: the payload (format, id, name, publisher, items) plus a signature. Only packs signed
with a publisher key listed in PACK_PUBLIC_KEYS are accepted. The signature covers the payload in a
canonical form (sorted keys, no whitespace, UTF-8), so any change to the file invalidates it.

This module only depends on voluptuous and cryptography, so tools/fp3dpack.py (which signs packs)
uses the same schema and canonical form.
"""

from __future__ import annotations

import base64
import hashlib
import json
from typing import Any

from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
import voluptuous as vol

PACK_FORMAT = "fp3dpack"
PACK_VERSION = 1
# largest pack file accepted (characters of JSON)
MAX_PACK_SIZE = 1_000_000

# Publisher keys whose packs are accepted: key id -> raw Ed25519 public key (base64).
PACK_PUBLIC_KEYS: dict[str, str] = {
    # Mastershort (master key, kept offline)
    "62863e45df5a": "D3sbiEQibaCVm1OWcYUrQc424c2t+pmSQqWg6l6fNSE=",
    # Mastershort shop (signs purchased packs with the buyer's name; revocable by removing it here)
    "867371cc70e6": "uP74xZzFJ2yysjdIZVq5q9G/yn5hVX4HJ6wHv7pqqwo=",
}

_ID = vol.All(str, vol.Match(r"^[a-z0-9][a-z0-9_.-]{0,39}$"))
_TEXT = vol.All(str, vol.Length(min=1, max=80))
# a colour: "#rrggbb" or a role of the built-in palette (so packs follow the look of the plan)
_COLOR = vol.Any(
    vol.Match(r"^#[0-9a-fA-F]{6}$"),
    vol.In(["body", "fabric", "cushion", "wood", "white", "metal", "dark", "glass", "plant", "pot", "accent"]),
)
_FRACTION = vol.All(vol.Coerce(float), vol.Range(min=-0.5, max=0.5))
_SPAN = vol.All(vol.Coerce(float), vol.Range(min=0.001, max=1))
_LEVEL = vol.All(vol.Coerce(float), vol.Range(min=0, max=1))
_METRES = vol.All(vol.Coerce(float), vol.Range(min=0.01, max=10))

# Parts in fractions of the item's size: x/z centre (-0.5..0.5, front at +z), w/d extent, y/h bottom
# and height of the item height. A cylinder's diameter is the smaller of w and d.
PART_SCHEMA = vol.Schema(
    {
        vol.Required("shape"): vol.In(["box", "cyl", "loft"]),
        vol.Required("x"): _FRACTION,
        vol.Required("z"): _FRACTION,
        vol.Required("w"): _SPAN,
        vol.Required("d"): _SPAN,
        vol.Required("y"): _LEVEL,
        vol.Required("h"): _SPAN,
        vol.Required("color"): _COLOR,
        vol.Optional("top"): _COLOR,
        # outline: True (soft blue), "glow" (cyan like the walls) or "faint"
        vol.Optional("edges", default=False): vol.Any(bool, vol.In(["glow", "faint"])),
        # lamps: the part shines in the colour and brightness of the linked light
        vol.Optional("glow", default=False): bool,
        # a screen (TV, monitor): shows the linked media player's app colour and picture on its front (+z)
        vol.Optional("screen", default=False): bool,
        # loft: centre and extent of the top rectangle (default: the same as the bottom)
        vol.Optional("tx"): _FRACTION,
        vol.Optional("tz"): _FRACTION,
        vol.Optional("tw"): _SPAN,
        vol.Optional("td"): _SPAN,
        # cylinder axis: upright (default) or lying along x or z (wheels, rollers)
        vol.Optional("axis"): vol.In(["x", "y", "z"]),
        # turn of the part around its own centre (degrees around the vertical axis): spiral steps, diagonals
        vol.Optional("rot"): vol.All(vol.Coerce(float), vol.Range(min=-360, max=360)),
    }
)

# Plan symbol in the same fractions (optional: without it the parts are drawn from above).
SYMBOL_SCHEMA = vol.Any(
    vol.Schema(
        {
            vol.Required("shape"): "rect",
            "x": _FRACTION,
            "z": _FRACTION,
            "w": _SPAN,
            "d": _SPAN,
            vol.Optional("fill", default=False): bool,
        }
    ),
    vol.Schema({vol.Required("shape"): "circle", "x": _FRACTION, "z": _FRACTION, "r": _SPAN}),
    vol.Schema({vol.Required("shape"): "line", "x1": _FRACTION, "z1": _FRACTION, "x2": _FRACTION, "z2": _FRACTION}),
)

ITEM_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        # names by language ("de", "en", …); "en" or the first one is the fallback
        vol.Required("name"): vol.All({vol.All(str, vol.Length(min=2, max=5)): _TEXT}, vol.Length(min=1, max=10)),
        vol.Required("size"): vol.All([_METRES], vol.Length(min=3, max=3)),
        vol.Optional("electric", default=False): bool,
        # where it stands: on the floor, on the furniture below it, on a wall (bottom at wall_y) or
        # hanging from the ceiling
        vol.Optional("mount", default="floor"): vol.In(["floor", "surface", "wall", "ceiling"]),
        vol.Optional("wall_y", default=1.0): vol.All(vol.Coerce(float), vol.Range(min=0, max=3)),
        # its top carries other items (like a table or a worktop)
        vol.Optional("surface", default=False): bool,
        # a vehicle: offered for parking spots
        vol.Optional("vehicle", default=False): bool,
        # stairs: when it reaches the floor above, it cuts a stairwell opening into that floor
        vol.Optional("hole", default=False): bool,
        # a lamp: how its light spreads (like the built-in lamp of that kind)
        vol.Optional("light"): vol.In(
            [
                "ceiling",
                "downlight",
                "spot",
                "panel",
                "pendant",
                "floor",
                "uplight",
                "table",
                "wall",
                "strip",
                "bollard",
                "garden",
            ]
        ),
        vol.Required("parts"): vol.All([PART_SCHEMA], vol.Length(min=1, max=60)),
        vol.Optional("symbol"): vol.All([SYMBOL_SCHEMA], vol.Length(max=40)),
    }
)

# Pro features this version knows; a pack with a newer one needs a newer NeonPlan 3D
KNOWN_FEATURES = ["camera_cockpit", "weather", "screens", "fridge_smart", "energy_pro", "sound", "auto_pro"]

PAYLOAD_SCHEMA = vol.Schema(
    {
        vol.Required("format"): PACK_FORMAT,
        vol.Required("version"): PACK_VERSION,
        vol.Required("id"): _ID,
        vol.Required("name"): _TEXT,
        vol.Required("publisher"): _TEXT,
        # buyer the pack was signed for (shown on import)
        vol.Optional("licensee", default=None): vol.Any(None, _TEXT),
        # release number of the pack (a newer release of the same id replaces an installed one)
        vol.Optional("release", default=1): vol.All(int, vol.Range(min=1, max=100000)),
        # fingerprint of the installation the pack is bound to (None = any installation)
        vol.Optional("instance", default=None): vol.Any(None, vol.Match(r"^[0-9a-f]{16}$")),
        vol.Optional("description", default=""): vol.All(str, vol.Length(max=400)),
        # Pro features the pack unlocks (a feature pack may carry no furniture at all)
        vol.Optional("features", default=[]): vol.All(
            [vol.In(KNOWN_FEATURES)],
            vol.Length(max=10),
        ),
        vol.Required("items"): vol.All([ITEM_SCHEMA], vol.Length(min=0, max=200)),
    }
)


class PackError(Exception):
    """A pack that cannot be imported; `code` says why."""

    def __init__(self, code: str, detail: str = "") -> None:
        """Keep the reason."""
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


def canonical(payload: dict[str, Any]) -> bytes:
    """Bytes the signature covers."""
    return json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=False).encode("utf-8")


def key_id(public_raw: bytes) -> str:
    """Short name of a public key."""
    return hashlib.sha256(public_raw).hexdigest()[:12]


def fingerprint(instance_id: str) -> str:
    """An installation's fingerprint, as bound packs carry it: a hash, so the file does not reveal the id."""
    return hashlib.sha256(f"neonplan3d:{instance_id}".encode()).hexdigest()[:16]


def parts_of(text: str) -> tuple[dict[str, Any], dict[str, str]]:
    """The payload exactly as signed and the signature of a pack file that verify_pack accepted; both are
    kept with the pack so a backup can carry it and a restore can check it again (the validated payload
    has defaults filled in, so its bytes no longer match the signature)."""
    data = json.loads(text)
    sig = data["signature"]
    return data["payload"], {"key": sig["key"], "sig": sig["sig"]}


def validate_payload(payload: Any) -> dict[str, Any]:
    """Check the content of a pack (without its signature); raises PackError."""
    features = payload.get("features") if isinstance(payload, dict) else None
    if isinstance(features, list):
        unknown = [f for f in features if isinstance(f, str) and f not in KNOWN_FEATURES]
        if unknown:
            # a Pro add-on newer than this installation (#218): ask for an update, not a cryptic error
            raise PackError("needs_update", ", ".join(unknown))
    try:
        clean = PAYLOAD_SCHEMA(payload)
    except vol.Invalid as err:
        # a value this version does not know yet (a new item kind of a newer pack release)
        if "value must be one of" in str(err):
            raise PackError("needs_update", str(err)) from err
        raise PackError("invalid_content", str(err)) from err
    ids = [item["id"] for item in clean["items"]]
    if len(ids) != len(set(ids)):
        raise PackError("invalid_content", "item ids must be unique")
    if not ids and not clean["features"]:
        raise PackError("invalid_content", "a pack needs items or features")
    return clean


def verify_pack(text: str, keys: dict[str, str] | None = None, instance: str | None = None) -> dict[str, Any]:
    """Parse a pack file, check its signature against the publisher keys and return its payload.

    A pack bound to an installation (payload "instance") is only accepted when `instance` is that
    fingerprint; with instance=None the binding is not checked (tools)."""
    keys = PACK_PUBLIC_KEYS if keys is None else keys
    if len(text) > MAX_PACK_SIZE:
        raise PackError("too_large")
    try:
        data = json.loads(text)
    except ValueError as err:
        raise PackError("not_a_pack", "not JSON") from err
    if (
        not isinstance(data, dict)
        or not isinstance(data.get("payload"), dict)
        or data["payload"].get("format") != PACK_FORMAT
    ):
        raise PackError("not_a_pack")
    signature = data.get("signature")
    if (
        not isinstance(signature, dict)
        or not isinstance(signature.get("key"), str)
        or not isinstance(signature.get("sig"), str)
    ):
        raise PackError("unsigned")
    public = keys.get(signature["key"])
    if public is None:
        raise PackError("unknown_publisher")
    try:
        Ed25519PublicKey.from_public_bytes(base64.b64decode(public)).verify(
            base64.b64decode(signature["sig"], validate=True), canonical(data["payload"])
        )
    except (InvalidSignature, ValueError) as err:
        raise PackError("bad_signature") from err
    payload = validate_payload(data["payload"])
    if instance is not None and payload["instance"] is not None and payload["instance"] != instance:
        raise PackError("wrong_instance", "the pack is bound to another installation")
    return payload
