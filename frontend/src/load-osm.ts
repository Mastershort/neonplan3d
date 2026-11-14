// The neighbourhood's map fetching: its bundle loads only when an admin fetches the map (⚙ Surroundings).

import type * as OsmBundle from "./surround-fetch.ts";

/** Content hash of the map bundle, set by the build (see build.mjs). */
declare const __FP3D_OSM_HASH__: string;

let loading: Promise<typeof OsmBundle> | undefined;

export function loadOsm(): Promise<typeof OsmBundle> {
  const url = new URL(`./neonplan3d-osm.js?v=${__FP3D_OSM_HASH__}`, new URL(import.meta.url)).href;
  loading ??= (import(/* @vite-ignore */ url) as Promise<typeof OsmBundle>).catch((err) => {
    loading = undefined;
    throw err;
  });
  return loading;
}
