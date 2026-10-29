// A safety net for graphics chips whose driver fails on the newer 3D effects (#827): when the WebGL context is
// lost right after the 3D view starts, this browser remembers it for the NeonPlan version in use, and the next
// load starts without the sun's arc, the house shadow and the window light at night. A new version tries again
// once. A context lost later on (a tablet sending the page to the background) never counts.

const KEY = "neonplan3d.gpu_lost";

declare const __FP3D_VERSION__: string;
/** The NeonPlan version the memory is kept for. */
export const GUARD_VERSION = typeof __FP3D_VERSION__ === "string" ? __FP3D_VERSION__ : "dev";

/** A context lost this soon after the 3D view started counts as the effects' fault. */
export const EARLY_MS = 20000;

/** What the guard reads and writes (localStorage, or a stand-in in tests). */
export interface GuardStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

function store(): GuardStore | null {
  try {
    return typeof localStorage === "undefined" ? null : localStorage;
  } catch {
    return null;
  }
}

/** Whether this version lost its context at the start before in this browser: then the effects stay off. */
export function gpuSafeMode(version: string, storage: GuardStore | null = store()): boolean {
  try {
    return !!storage && storage.getItem(KEY) === version;
  } catch {
    return false;
  }
}

/**
 * A lost context: remembered for this version when it came within EARLY_MS of the start while the page was
 * shown. Returns whether it was remembered.
 */
export function noteContextLost(version: string, startedAt: number, now: number, hidden: boolean, storage: GuardStore | null = store()): boolean {
  if (hidden || now - startedAt > EARLY_MS || now < startedAt || !storage) return false;
  try {
    storage.setItem(KEY, version);
    return true;
  } catch {
    return false;
  }
}
