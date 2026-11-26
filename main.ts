// Deadpan Forecasts for Cities That Do Not Exist — entry program (Node 22, stdlib only).
// Writes one forecast line (at most 160 characters) to <output>/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'In Varnwick, a high of 19 degrees with rain falling upward from 2pm, as it does every third Tuesday. Locals advise a hat, a coat, and no questions.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (ENTRY.trim().length === 0) {
  throw new Error('entry is only whitespace');
}
const line = ENTRY.trim();
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry is ${line.length} characters, outside the 1-160 gate`);
}

// The gate counts the file's characters, so the written text must itself stay
// inside 1-160 characters and hold more than whitespace; a trailing newline
// is the file's line ending, not part of the forecast.
const text = line + '\n';
if (text.length > 161) {
  throw new Error(`entry file would be ${text.length} characters, over the gate`);
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text, 'utf8');
