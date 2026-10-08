// Time travel: blinds that report their position only at the start and end of a run move smoothly in
// between, as long as the run was short (a blind takes seconds to a minute, not an hour).

/** Longest run that is filled in; anything longer was a blind standing still that reported late. */
export const COVER_RUN_MS = 3 * 60000;

/**
 * The blind's position (0–100) at t: the row's position, or – while the row says it is opening or closing
 * and the next row follows within a short time – the way between both positions, in whole percent.
 */
export function coverPosition(t: number, row: { t: number; state: string; pos: number | null }, next: { t: number; pos: number | null } | null): number | null {
  const moving = row.state === "opening" || row.state === "closing";
  if (!moving || row.pos === null || !next || next.pos === null) return row.pos;
  const span = next.t - row.t;
  if (!(span > 0) || span > COVER_RUN_MS || t <= row.t) return row.pos;
  if (t >= next.t) return next.pos;
  return Math.round(row.pos + ((next.pos - row.pos) * (t - row.t)) / span);
}
