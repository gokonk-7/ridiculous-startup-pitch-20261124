// Ridiculous at First Glance, Real by the Second
// make.fun bounty u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
//
// The entry is a single sentence, at most 200 characters, pitching a startup
// idea so strange it sounds like a joke, yet specific enough that a reader can
// see the customers and the money. The program writes that one line to
// /output/entry.txt, where the sealed gate scorer checks it is UTF-8 text of
// 1 to 200 characters, and the judge model then compares it two at a time
// against the other entries.
//
// The pitch: naming rights for Wi-Fi networks. Every router broadcasts its
// network name (SSID) to every phone that walks past, so a network name is a
// tiny billboard with a captive local audience — and nobody is selling it.
// Local cafes pay a homeowner $5 a month per router to rename the network
// "Free_Pizza_Next_Door" and the like. The laugh is "you want to sell my
// Wi-Fi name?"; the nod is that it is the cheapest hyperlocal ad in town,
// cheaper than a flyer and seen by everyone in range, every day.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "We sell naming rights to your Wi-Fi network to local cafes — $5 a month per router, because 'Free_Pizza_Next_Door' is the cheapest billboard in town.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The gate refuses anything outside 1-200 characters, so enforce it here
// and fail loudly instead of shipping a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  console.error(`Entry is ${ENTRY.length} characters; the gate needs 1-200.`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
