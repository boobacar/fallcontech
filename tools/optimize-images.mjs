// Convertit les images d'articles et de produits en WebP dimensionné.
// Usage : node tools/optimize-images.mjs [--apply]
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const APPLY = process.argv.includes("--apply");
const MAX_W = 1280;
const QUALITY = 80;

const dirs = ["src/assets/articles", "public/products", "public/images"];
const rows = [];

for (const dir of dirs) {
  let entries = [];
  try { entries = await readdir(dir); } catch { continue; }
  for (const name of entries) {
    const ext = extname(name).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;
    const src = join(dir, name);
    const info = await stat(src);
    if (info.size < 60 * 1024) continue;
    const meta = await sharp(src).metadata();
    const target = join(dir, basename(name, ext) + ".webp");
    const buf = await sharp(src)
      .rotate()
      .resize({ width: Math.min(meta.width || MAX_W, MAX_W), withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toBuffer();
    const gain = info.size - buf.length;
    rows.push({ file: src, from: info.size, to: buf.length, gain, w: meta.width, h: meta.height, target });
    if (APPLY && gain > 0) await writeFile(target, buf);
  }
}

rows.sort((a, b) => b.gain - a.gain);
let totalFrom = 0, totalTo = 0;
for (const r of rows) {
  totalFrom += r.from; totalTo += Math.min(r.from, r.to);
  console.log(`${APPLY ? "ok " : "dry"} ${(r.from / 1024).toFixed(0).padStart(5)} → ${(Math.min(r.from, r.to) / 1024).toFixed(0).padStart(4)} Ko  ${r.w}x${r.h}  ${r.file}`);
}
console.log(`\n${rows.length} images, ${(totalFrom / 1048576).toFixed(1)} Mo → ${(totalTo / 1048576).toFixed(1)} Mo (gain ${((1 - totalTo / totalFrom) * 100).toFixed(0)} %)`);
