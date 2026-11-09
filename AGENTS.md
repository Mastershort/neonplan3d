# AGENTS.md – Raffstore slats in 3D and "Invert slats" (#971)

Notes for AI coding agents (and humans) who pick up, review or extend this change. They describe what was
changed, why, and how it was verified. The general project rules are in [CLAUDE.md](CLAUDE.md): code,
identifiers and comments in English, frontend in Lit 3 + TypeScript without decorators, committed bundles
rebuilt with `npm run build`.

## The request

[Discussion #971](https://github.com/Mastershort/neonplan3d/discussions/971): venetian blinds and Raffstores
showed only the blind's height (`current_position`) in 3D. The slat tilt (`current_tilt_position`) was
already a slider in the quick menu and the room panel, but the blind looked the same whether its slats were
open or shut. Wanted:

1. Slats turn in 3D with `current_tilt_position` (100 = horizontal/open, 0 = closed).
2. Sun patches in the room and the window light outside follow the slats.
3. A window option "Invert slats" (like "Invert contact") for integrations that report the tilt the other way
   round. It applies to 3D, the quick menu and the room panel.

## Decisions

- **Light model: linear.** The lowered part of the blind lets light through in proportion to the slat tilt:
  `passage = 1 − cover × (1 − slats)`. Horizontal slats pass everything, closed slats nothing. There was no
  reliable source for real Raffstore transmission, so the simplest model that fits the stylised look was
  chosen together with the requester.
- **Only covers that report a tilt get slats.** No `current_tilt_position` → `slats` is absent and the blind
  stays the flat striped panel. Garage doors and door covers never get slats.
- **Slat geometry:** the pitch is the stripe pitch of the existing blind texture (`SLAT_PITCH = 0.045` m), each
  slat is 1.15 × the pitch wide so closed slats overlap. A slat turns linearly from 0° (open) to 90° (closed),
  with the outer edge down. Each slat samples the texture once (v 0 … 1), so closed slats look like the old
  flat blind. The slats go into the existing blinds buffer, so there are no extra draw calls.
- **Invert slats** is stored per opening (`slat_invert`). A cover can serve several windows: the quick menu
  and the room panel invert a cover when any of its openings has the option set (same pattern as
  `confirmEntities`). The same function maps the shown value back to the one sent (`100 − x`).
- **Not inverted on purpose:** the "slats open/close" buttons (`open_cover_tilt` / `close_cover_tilt`) and the
  tilt fallback in `coverCall` for slat-only covers. They read no value, and it is unknown whether an
  integration that reports the other way round also inverts those services.
- No version bump: the maintainer sets the version at release.

## Changes, file by file

| File | Change |
| --- | --- |
| `frontend/src/model.ts` | `Opening.slat_invert?: boolean`. |
| `frontend/src/devices.ts` | `OpeningEntities.slatInvert`; `openingState()` returns `slats` (0 … 1) only when the cover reports a tilt (windows and doors with a blind, not garages or door covers); new `slatTilt(value, invert)` (clamp + optional `100 − x`) and `slatInvertEntities(hass, floors)`. |
| `frontend/src/viewer/openings.ts` | `OpeningState.slats?: number \| null`; `SLAT_PITCH`; `slats()` draws the single turned slats; `blindPassage()` (light share through a blind). The flat `panel()` stays for blinds without a tilt. |
| `frontend/src/viewer/viewer3d.ts` | `slats` glides like `cover` (`stepOpenings`), counts for time-travel jumps (`setOpeningStates`); sun patches (`buildSun`) and the window light outside (spill) use the slats, and their rebuild signatures include them. |
| `frontend/src/components/quick-menu.ts` | Property `slatInvert`; the tilt slider and the centre of a slat-only blind show and send `slatTilt(…)`. |
| `frontend/src/components/room-panel.ts` | Property `slatInvertEntities`; the tilt slider shows and sends `slatTilt(…)`. |
| `frontend/src/components/view3d.ts`, `panel.ts`, `card.ts` | Wire `slatInvertEntities` into the quick menu and the room panel. |
| `frontend/src/components/editor.ts` | Checkbox "Invert slats" under the blind's options; shown when the window's cover reports a tilt, or when the option is already set (so it can be cleared). |
| `frontend/src/i18n.ts`, `frontend/lang/*.json` | `slat_invert`, `slat_invert_hint` in German, English and all 17 further languages. |
| `custom_components/neonplan3d/schema.py` | `vol.Optional("slat_invert", default=False): bool` in the opening schema (without it the backend would drop the field on save). |
| `tests/test_schema.py`, `tests/test_init.py` | The new field and its default. |
| `frontend/src/devices.test.ts`, `frontend/src/viewer/openings.test.ts` | Slat state and inversion, `slatTilt`, `slatInvertEntities`, slat geometry (count, flat when open, upright when closed, outer edge down), `blindPassage`. |
| `docs/anleitung.md`, `docs/manual.md`, `CHANGELOG.md` | The option and the 3D/light behaviour; changelog entry under "Unreleased". |
| `custom_components/neonplan3d/frontend/**` | Rebuilt bundles and language files (`npm run build`). |

## Verification

```bash
cd frontend
npm ci
npm run typecheck
npm test            # 603 tests, 6 of them new
npm run build       # all bundles within their budgets
cd ..
ruff check custom_components tests && ruff format --check custom_components tests
pytest -q           # 154 passed
```

- Node 24 (as in CI) runs the `.ts` tests natively. A Node 22 built without TypeScript support needs a small
  loader hook (for example one that passes `.ts` files through esbuild's `transform`), registered with
  `node --import`.
- The bundles are reproducible: a clean build of the base branch gives no diff, so the CI check "committed
  bundles are up to date" holds.
- `mypy` reports the same errors before and after this change with a newer local Home Assistant; it is not
  affected by it.

### In a real Home Assistant (README: "Deploy to a test instance")

A throwaway instance in Docker, with template covers standing in for real Raffstores:

```bash
docker run -d --name neonplan3d-testha -e TZ=Europe/Berlin \
  -v "$PWD/ha-config:/config" -p 8123:8123 ghcr.io/home-assistant/home-assistant:stable
echo '{"target": "'"$PWD"'/ha-config/custom_components/neonplan3d"}' > deploy.local.json   # untracked
(cd frontend && npm run deploy)
```

`ha-config/configuration.yaml` (Home Assistant 2026.11, modern template syntax):

```yaml
default_config:

input_number:
  raff_pos: { name: Raffstore position, min: 0, max: 100, step: 1 }
  raff_tilt: { name: Raffstore slats, min: 0, max: 100, step: 1 }
  raff_inv_pos: { name: Inverted Raffstore position, min: 0, max: 100, step: 1 }
  raff_inv_tilt_real: { name: Inverted Raffstore real slats, min: 0, max: 100, step: 1 }

template:
  - cover:
      - name: Raffstore Test           # reports the tilt the usual way
        unique_id: raffstore_test
        device_class: blind
        position: "{{ states('input_number.raff_pos') | int(0) }}"
        tilt: "{{ states('input_number.raff_tilt') | int(0) }}"
        set_cover_position:
          - action: input_number.set_value
            target: { entity_id: input_number.raff_pos }
            data: { value: "{{ position }}" }
        set_cover_tilt_position:
          - action: input_number.set_value
            target: { entity_id: input_number.raff_tilt }
            data: { value: "{{ tilt }}" }
      - name: Raffstore invertiert     # an integration that reports and takes the tilt the other way round
        unique_id: raffstore_invertiert
        device_class: blind
        position: "{{ states('input_number.raff_inv_pos') | int(0) }}"
        tilt: "{{ 100 - states('input_number.raff_inv_tilt_real') | int(0) }}"
        set_cover_position:
          - action: input_number.set_value
            target: { entity_id: input_number.raff_inv_pos }
            data: { value: "{{ position }}" }
        set_cover_tilt_position:
          - action: input_number.set_value
            target: { entity_id: input_number.raff_inv_tilt_real }
            data: { value: "{{ 100 - tilt }}" }
```

Plus a roller shutter template cover without `tilt`, as the counter-check. After onboarding, add the
integration and draw a room with three windows, one per cover, with "Invert slats" on the inverted one
(in the editor, or with `neonplan3d/building/save` over the websocket API, which also exercises
`BUILDING_SCHEMA`). Checked there, with the panel driven by Puppeteer:

- The backend stores `slat_invert` (default `false`).
- 3D: tilt 100 / 50 / 0 → `slats` 1 / 0.5 / 0. The inverted cover reports 70 → shows 0.3. The roller shutter
  has no slats.
- Quick menu: the normal cover shows and sets its reported tilt. The inverted one shows 30 (the real
  position), and the slider at 80 sets the real slats to 80 (the cover receives 20).
- Room panel: the same both ways. No tilt slider for the roller shutter.
- Sun patches, in the preview with a fixed sun: tilt 50 gives the mean of open and closed (linear).

## Extending it

- **Inverting the slat buttons too:** `coverTiltButtons` / the `open_cover_tilt` and `close_cover_tilt` calls
  in `quick-menu.ts` and `room-panel.ts`, and `coverCall` in `devices.ts`. Only do this once it is known how
  such integrations treat those services.
- **A geometric light model** (gap width in the sun's direction, depending on sun elevation) would replace
  `blindPassage()` and the `through` factor in `buildSun`.
- **Interior blinds:** PR #904 ("Blinds inside the room") also changes `openings.ts`, `model.ts`, `editor.ts`
  and `schema.py`. If both land, the slats should follow the blind wherever it hangs.
