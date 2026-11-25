import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "To: My old lab partner, Sam\nI still rehearse the apology in the shower, six years later, because saying it out loud would mean admitting I chose the grade over you.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY);
