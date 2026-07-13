import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const dir = "src/assets/logos";
const files = readdirSync(dir).filter((f) => /\.png$/i.test(f));

for (const f of files) {
  const p = path.join(dir, f);
  const before = statSync(p).size;
  const buf = await sharp(p)
    .resize({ height: 320, withoutEnlargement: true }) // exibida ~96px; 320px cobre telas retina
    .png({ compressionLevel: 9, quality: 90, palette: true })
    .toBuffer();
  await sharp(buf).toFile(p);
  const after = statSync(p).size;
  console.log(
    `${f.padEnd(48)} ${(before / 1024).toFixed(0).padStart(6)} KB -> ${(after / 1024).toFixed(0).padStart(5)} KB`
  );
}
