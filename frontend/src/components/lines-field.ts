// A list a module offers to edit line by line (its sentences, names): every line with ✕ to take it out, a field
// below to add one (Enter or the button). Drawn the same in the editor and in the ⚙ menu of the 3D view.

import { html } from "lit";

export interface LinesLabels {
  label: string;
  placeholder: string;
  add: string;
  remove: string;
}

export function linesField(value: string[], disabled: boolean, labels: LinesLabels, set: (v: string[]) => void, wide = false) {
  const add = (input: HTMLInputElement | null) => {
    const line = input?.value.trim();
    if (!input || !line) return;
    input.value = "";
    set([...value, line]);
  };
  return html`<div class="fp3d-lines ${wide ? "fp3d-wide" : ""}" role="group" aria-label=${labels.label}>
    ${labels.label}
    ${value.map(
      (line, i) => html`<div class="fp3d-lines-row">
        <span>${line}</span>
        <button type="button" title=${labels.remove} aria-label=${`${labels.remove}: ${line}`} ?disabled=${disabled} @click=${() => set(value.filter((_, j) => j !== i))}>✕</button>
      </div>`,
    )}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${labels.placeholder}
        aria-label=${labels.placeholder}
        ?disabled=${disabled}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key !== "Enter") return;
          e.preventDefault();
          add(e.target as HTMLInputElement);
        }}
      />
      <button type="button" class="fp3d-btn" ?disabled=${disabled} @click=${(e: Event) => add((e.currentTarget as HTMLElement).previousElementSibling as HTMLInputElement | null)}>
        ${labels.add}
      </button>
    </div>
  </div>`;
}
