import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
const directory = 'public/images/projects';
const manifest = {};
for (const name of (await readdir(directory)).filter(name => name.endsWith('.png'))) {
  const source = `${directory}/${name}`;
  const { width, height } = await sharp(source).metadata();
  const widths = [...new Set([640, 1280, width].filter(size => size <= width))].sort((a, b) => a - b);
  const variants = [];
  for (const size of widths) {
    const output = name.replace('.png', `-${size}.webp`);
    await sharp(source).resize({ width: size, withoutEnlargement: true }).webp({ lossless: true, effort: 6 }).toFile(`${directory}/${output}`);
    variants.push(`/images/projects/${output} ${size}w`);
  }
  manifest[`/images/projects/${name}`] = { width, height, srcSet: variants.join(', ') };
}
await writeFile('src/data/imageSources.json', JSON.stringify(manifest, null, 2) + '\n');
await sharp('public/favicon.png').resize(32, 32).png().toFile('public/favicon-32.png');
await sharp('public/favicon.png').resize(180, 180).png().toFile('public/apple-touch-icon.png');
await mkdir('public/images/social', { recursive: true });
// Text-only sharing artwork; never used as a fictional project screenshot.
const card = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#10151c"/><path d="M80 100H1120" stroke="#383d44"/><text x="80" y="275" font-family="sans-serif" font-size="80" fill="#edece8">Matheus Demeis</text><text x="80" y="370" font-family="sans-serif" font-size="42" fill="#cbb48a">Full-Stack Developer</text><text x="80" y="530" font-family="sans-serif" font-size="26" fill="#bcc1c8">matheusdemeis.com</text></svg>';
await sharp(Buffer.from(card)).png().toFile('public/images/social/portfolio.png');
console.log(`Generated lossless WebP variants for ${Object.keys(manifest).length} authentic images, browser icons, and a text-only sharing card.`);
