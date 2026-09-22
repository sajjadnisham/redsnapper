// Scans /public/images and writes a manifest of available photographs so the
// site can swap placeholders for real photos automatically at build time.
import { readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, parse } from "node:path";

const dir = join(process.cwd(), "public", "images");
const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const manifest = {};

if (existsSync(dir)) {
  for (const f of readdirSync(dir)) {
    const { name, ext } = parse(f);
    if (exts.has(ext.toLowerCase())) manifest[name] = f;
  }
}

mkdirSync(join(process.cwd(), "src", "data"), { recursive: true });
writeFileSync(
  join(process.cwd(), "src", "data", "photo-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(`photos: ${Object.keys(manifest).length} photograph(s) found in public/images`);
