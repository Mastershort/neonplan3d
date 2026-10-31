// Listening: one sentence from the microphone, written down by Home Assistant's Assist (its pipeline stops after
// speech to text, so NeonPlan decides what the sentence means), and handing a sentence to Assist's conversation.

import type { HomeAssistant } from "../types.ts";
import { withoutHere } from "./commands.ts";

export interface Pipeline {
  id: string;
  name: string;
  language: string;
  stt_engine: string | null;
}

interface RunEvent {
  type: string;
  data?: { runner_data?: { stt_binary_handler_id?: number }; stt_output?: { text?: string }; code?: string; message?: string };
}

/** Speech goes to Assist as 16-bit mono at 16 kHz. */
const RATE = 16000;
/** The longest sentence recorded (ms); Assist usually ends earlier, at the first pause. */
const LONGEST = 7000;

/** Float samples at `from` Hz to 16-bit samples at 16 kHz (each output sample the mean of its input stretch). */
export function toPcm16(input: Float32Array, from: number): Int16Array {
  const ratio = from / RATE;
  const n = Math.floor(input.length / ratio);
  const out = new Int16Array(n);
  for (let i = 0; i < n; i++) {
    const a = Math.floor(i * ratio);
    const b = Math.max(a + 1, Math.floor((i + 1) * ratio));
    let sum = 0;
    for (let k = a; k < b && k < input.length; k++) sum += input[k];
    const v = Math.max(-1, Math.min(1, sum / (b - a)));
    out[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
  }
  return out;
}

/** Home Assistant's Assist pipelines and the preferred one (Settings → Voice assistants, the starred one). */
export function listPipelines(hass: HomeAssistant): Promise<{ pipelines: Pipeline[]; preferred_pipeline: string | null }> {
  return hass.callWS({ type: "assist_pipeline/pipeline/list" });
}

/** The Assist pipeline to use: the one chosen on this device, else the preferred one when it has speech to text, else the first that has. */
export async function findPipeline(hass: HomeAssistant, chosen?: string | null): Promise<Pipeline | null> {
  const res = await listPipelines(hass);
  const own = chosen ? res.pipelines.find((p) => p.id === chosen && p.stt_engine) : undefined;
  if (own) return own;
  const preferred = res.pipelines.find((p) => p.id === res.preferred_pipeline) ?? res.pipelines[0];
  return (preferred?.stt_engine ? preferred : res.pipelines.find((p) => p.stt_engine)) ?? null;
}

export function audioContext(): AudioContext {
  const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  return new Ctx();
}

export function openMicrophone(): Promise<MediaStream> {
  return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
}

/**
 * Stream the microphone to Assist until it has written down one sentence; the sentence ("" when nothing was heard).
 * Rejects with Assist's error.
 */
export async function transcribe(hass: HomeAssistant, ctx: AudioContext, source: MediaStreamAudioSourceNode, pipeline: string | null): Promise<string> {
  const socket = (hass.connection as unknown as { socket?: WebSocket }).socket;
  if (!socket) throw new Error("no connection");
  if (ctx.state === "suspended") await ctx.resume();
  let handler: number | null = null;
  const early: Int16Array[] = [];
  let done = false;
  const send = (pcm: Int16Array | null) => {
    if (handler === null) return;
    const bytes = pcm ? new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength) : new Uint8Array(0);
    const msg = new Uint8Array(1 + bytes.length);
    msg[0] = handler;
    msg.set(bytes, 1);
    socket.send(msg);
  };
  // ScriptProcessor: old, but every WebView of an old wall tablet has it (AudioWorklet not)
  const proc = ctx.createScriptProcessor(4096, 1, 1);
  let peak = 0;
  proc.onaudioprocess = (e) => {
    if (done) return;
    const input = e.inputBuffer.getChannelData(0);
    for (let i = 0; i < input.length; i += 16) peak = Math.max(peak, Math.abs(input[i]));
    const pcm = toPcm16(input, ctx.sampleRate);
    if (handler === null) early.push(pcm);
    else send(pcm);
  };
  source.connect(proc);
  proc.connect(ctx.destination);
  return new Promise<string>((resolve, reject) => {
    let unsub: (() => Promise<void>) | null = null;
    let text = "";
    const limit = setTimeout(() => send(null), LONGEST);
    // the whole run may not hang (no answer from Assist at all)
    const stall = setTimeout(() => finish(new Error("timeout")), LONGEST + 15000);
    const finish = (err?: Error) => {
      if (done) return;
      done = true;
      clearTimeout(limit);
      clearTimeout(stall);
      source.disconnect(proc);
      proc.disconnect();
      void unsub?.();
      // nothing but silence came in: the microphone is open but gives no sound (another app holds it, #579)
      if ((err || !text) && peak < 0.0005) reject(new Error("silent"));
      else if (err) reject(err);
      else resolve(text);
    };
    hass.connection
      .subscribeMessage<RunEvent>(
        (ev) => {
          if (ev.type === "run-start") {
            handler = ev.data?.runner_data?.stt_binary_handler_id ?? null;
            for (const pcm of early.splice(0)) send(pcm);
          } else if (ev.type === "stt-end") {
            text = ev.data?.stt_output?.text?.trim() ?? "";
            finish();
          } else if (ev.type === "error") {
            finish(new Error(`${ev.data?.code ?? ""} ${ev.data?.message ?? ""}`.trim()));
          } else if (ev.type === "run-end") {
            finish();
          }
        },
        // without a pipeline id Home Assistant takes its preferred one
        { type: "assist_pipeline/run", start_stage: "stt", end_stage: "stt", input: { sample_rate: RATE }, ...(pipeline ? { pipeline } : {}) },
      )
      .then((u) => {
        unsub = u;
        if (done) void u();
      })
      .catch((err) => finish(err instanceof Error ? err : new Error(String(err))));
  });
}

let pipelineOf: { connection: unknown; chosen: string | null; id: Promise<string | null | undefined> } | null = null;

/**
 * One sentence: the microphone opens, Assist writes it down, the microphone closes again. The pipeline: the one chosen
 * on this device, else Home Assistant's preferred one (also when the list of pipelines cannot be read).
 */
export async function listenOnce(hass: HomeAssistant, onListening?: () => void, chosen: string | null = null, started?: AudioContext): Promise<string> {
  if (!pipelineOf || pipelineOf.connection !== hass.connection || pipelineOf.chosen !== chosen) {
    // undefined: the list could not be read – the run takes the preferred pipeline then; null: none has speech to text
    pipelineOf = { connection: hass.connection, chosen, id: findPipeline(hass, chosen).then((p) => p?.id ?? null, () => undefined) };
  }
  const found = await pipelineOf.id;
  if (found === null) {
    pipelineOf = null;
    void started?.close();
    throw new Error("no_pipeline");
  }
  if (found === undefined) pipelineOf = null;
  const pipeline = found ?? chosen;
  // the audio context made on the tap itself (`started`): one made after the awaits stays mute in Android WebViews (#579)
  const ctx = started ?? audioContext();
  let stream: MediaStream;
  try {
    stream = await openMicrophone();
  } catch (err) {
    void ctx.close();
    throw err;
  }
  try {
    const source = ctx.createMediaStreamSource(stream);
    onListening?.();
    return await transcribe(hass, ctx, source, pipeline);
  } finally {
    stream.getTracks().forEach((t) => t.stop());
    void ctx.close();
  }
}

/**
 * Speak a text through the Assist pipeline's text-to-speech on this device (the pipeline chosen here, else the
 * preferred one). Resolves when the sound starts; false when the pipeline has no speech or the browser will not play.
 */
export async function speak(hass: HomeAssistant, text: string, chosen: string | null = null): Promise<boolean> {
  const pipeline = await findSpeaking(hass, chosen);
  if (!pipeline) return false;
  const url = await new Promise<string | null>((resolve) => {
    let unsub: (() => Promise<void>) | null = null;
    const stop = setTimeout(() => resolve(null), 15000);
    const finish = (u: string | null) => {
      clearTimeout(stop);
      void unsub?.();
      resolve(u);
    };
    hass.connection
      .subscribeMessage<{ type: string; data?: { tts_output?: { url?: string } } }>(
        (ev) => {
          if (ev.type === "tts-end") finish(ev.data?.tts_output?.url ?? null);
          else if (ev.type === "error" || ev.type === "run-end") finish(null);
        },
        { type: "assist_pipeline/run", start_stage: "tts", end_stage: "tts", input: { text }, pipeline },
      )
      .then((u) => (unsub = u))
      .catch(() => finish(null));
  });
  if (!url) return false;
  try {
    const audio = new Audio(url.startsWith("http") ? url : new URL(url, location.origin).href);
    await audio.play();
    // resolves when the words are spoken (a tour waits for them); never hangs on a stalled stream
    await new Promise<void>((done) => {
      const stop = setTimeout(done, 20000);
      const end = () => {
        clearTimeout(stop);
        done();
      };
      audio.addEventListener("ended", end, { once: true });
      audio.addEventListener("error", end, { once: true });
    });
    return true;
  } catch {
    return false;
  }
}

/** The pipeline that can speak: the one chosen on this device when it has text-to-speech, else the preferred one that has. */
async function findSpeaking(hass: HomeAssistant, chosen: string | null): Promise<string | null> {
  try {
    const res = await hass.callWS<{ pipelines: (Pipeline & { tts_engine?: string | null })[]; preferred_pipeline: string | null }>({ type: "assist_pipeline/pipeline/list" });
    const own = chosen ? res.pipelines.find((p) => p.id === chosen && p.tts_engine) : undefined;
    if (own) return own.id;
    const preferred = res.pipelines.find((p) => p.id === res.preferred_pipeline);
    return (preferred?.tts_engine ? preferred : res.pipelines.find((p) => p.tts_engine))?.id ?? null;
  } catch {
    return null;
  }
}

type Conversed = { response?: { speech?: { plain?: { speech?: string } } } };

/**
 * Hand a sentence to Assist's conversation ("Licht im Flur an"); its spoken answer as text. `area`: the Home
 * Assistant area this device hangs in – "Licht an" and "Mach hier das Licht an" switch the lights there.
 */
export async function converse(hass: HomeAssistant, text: string, area: string | null = null): Promise<string> {
  if (area) {
    try {
      const res = await hass.callWS<Conversed>({ type: "neonplan3d/voice/converse", text: withoutHere(text, hass.language), area_id: area, language: hass.language });
      return res.response?.speech?.plain?.speech ?? "";
    } catch {
      // an older NeonPlan on the server (or Assist off): the sentence goes to Assist as it was said
    }
  }
  const res = await hass.callWS<Conversed>({ type: "conversation/process", text, language: hass.language });
  return res.response?.speech?.plain?.speech ?? "";
}
