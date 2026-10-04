// Line icons (24 × 24, drawn with stroke="currentColor") for device markers and the room panel.

import type { DeviceKind } from "./devices.ts";

const ICONS: Record<DeviceKind, string> = {
  light: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",
  switch: "M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",
  fan: "M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",
  cover: "M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",
  climate: "M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",
  media: "M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",
  lock: "M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",
  sensor: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  binary: "M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",
  camera: "M4 7h11v10H4zM15 10.5l5-3v9l-5-3",
  scene: "M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",
  script: "M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4",
};

export function iconPath(kind: DeviceKind): string {
  return ICONS[kind];
}

/** Markup for an own symbol: Home Assistant's icon element with a Material Design icon name. */
export function mdiIcon(name: string): string {
  const clean = name.replace(/^mdi:/, "").replace(/[^a-z0-9-]/gi, "");
  return `<ha-icon icon="mdi:${clean}" style="--mdc-icon-size:18px"></ha-icon>`;
}

/** Markup for an inline SVG icon (static strings only). */
export function iconSvg(kind: DeviceKind): string {
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[kind]}"/></svg>`;
}
