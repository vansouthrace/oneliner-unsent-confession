import { mkdirSync, writeFileSync } from "node:fs";

// A micro-confession in exactly two parts: a To: line and the unsent message itself, 260 characters or fewer in total.
const line =
  "To: my old landlord\nI never told you the leak in the bathroom was me testing whether the ceiling could hold a small indoor waterfall, and I am still sorry about the paint.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
