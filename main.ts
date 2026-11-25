import { mkdirSync, writeFileSync } from "node:fs";

// One autocorrect fail.
const text = "Landed safe! Give the kids a big hug and a kidney from me ❤️ see you Sunday";

const chars = [...text].length;
if (chars < 1 || chars > 199) throw new Error(`text is ${chars} characters; the limit is 199`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text);
