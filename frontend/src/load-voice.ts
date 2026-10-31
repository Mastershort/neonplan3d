// Voice (the microphone probe for now): its bundle loads only when it is asked for.

import type * as VoiceBundle from "./voice/entry.ts";

/** Content hash of the voice bundle, set by the build (see build.mjs). */
declare const __FP3D_VOICE_HASH__: string;

let loading: Promise<typeof VoiceBundle> | undefined;

export function loadVoice(): Promise<typeof VoiceBundle> {
  const url = new URL(`./neonplan3d-voice.js?v=${__FP3D_VOICE_HASH__}`, new URL(import.meta.url)).href;
  loading ??= (import(/* @vite-ignore */ url) as Promise<typeof VoiceBundle>).catch((err) => {
    loading = undefined;
    throw err;
  });
  return loading;
}

/**
 * Whether the microphone probe was asked for in the address ("?fp3d_mic=1", also after "#"). Remembered for this tab:
 * Home Assistant may drop the parameter when it forwards to a dashboard.
 */
export function micProbeAsked(): boolean {
  try {
    if (/[?&#]fp3d_mic=1\b/.test(location.href)) sessionStorage.setItem("neonplan3d.mic", "1");
    return sessionStorage.getItem("neonplan3d.mic") === "1";
  } catch {
    return false;
  }
}

/** Voice control on this device: the microphone button in the 3D view (the card has its option `voice`). */
export function voiceOnHere(): boolean {
  try {
    return localStorage.getItem("neonplan3d.voice") === "1";
  } catch {
    return false;
  }
}

export function setVoiceHere(on: boolean): void {
  try {
    if (on) localStorage.setItem("neonplan3d.voice", "1");
    else localStorage.removeItem("neonplan3d.voice");
  } catch {
    // private mode: nothing remembered
  }
}

/** This device's screen name for Assist and the service `neonplan3d.ask` ("Küche"); empty: reacts to every sentence. */
export function screenName(): string {
  try {
    return localStorage.getItem("neonplan3d.screen") ?? "";
  } catch {
    return "";
  }
}

export function setScreenName(name: string): void {
  try {
    if (name.trim()) localStorage.setItem("neonplan3d.screen", name.trim());
    else localStorage.removeItem("neonplan3d.screen");
  } catch {
    // private mode: nothing remembered
  }
}

/** The Assist pipeline chosen for this device (null: Home Assistant's preferred one). */
export function voicePipeline(): string | null {
  try {
    return localStorage.getItem("neonplan3d.voicePipeline");
  } catch {
    return null;
  }
}

export function setVoicePipeline(id: string | null): void {
  try {
    if (id) localStorage.setItem("neonplan3d.voicePipeline", id);
    else localStorage.removeItem("neonplan3d.voicePipeline");
  } catch {
    // private mode: nothing remembered
  }
}

/** The Home Assistant area this device hangs in, for sentences without a room ("Licht an"); null: none (as before). */
export function voiceArea(): string | null {
  try {
    return localStorage.getItem("neonplan3d.voiceArea");
  } catch {
    return null;
  }
}

export function setVoiceArea(id: string | null): void {
  try {
    if (id) localStorage.setItem("neonplan3d.voiceArea", id);
    else localStorage.removeItem("neonplan3d.voiceArea");
  } catch {
    // private mode: nothing remembered
  }
}

/** The probe closed: it does not open again in this tab. */
export function micProbeDone(): void {
  try {
    sessionStorage.removeItem("neonplan3d.mic");
  } catch {
    // private mode
  }
}
