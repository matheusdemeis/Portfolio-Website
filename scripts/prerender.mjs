import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-prerender.js';
const pages = JSON.parse(await readFile('src/data/seo.json', 'utf8'));
const origin = 'https://www.matheusdemeis.com';
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
for (const path of [...Object.keys(pages), '/404']) {
  const { markup, metadata: m } = render(path);
  const tags = { description: m.description, robots: m.robots, 'og:type': 'website', 'og:site_name': 'Matheus Demeis', 'og:title': m.title, 'og:description': m.description, 'og:url': m.canonical ?? origin + '/404', 'og:image': origin + m.image, 'og:image:alt': m.imageAlt, 'twitter:card': 'summary_large_image', 'twitter:title': m.title, 'twitter:description': m.description, 'twitter:image': origin + m.image, 'twitter:image:alt': m.imageAlt };
  let head = `<title>${escape(m.title)}</title>\n` + Object.entries(tags).map(([key,value]) => `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escape(value)}" />`).join('\n');
  if (m.canonical) head += `\n<link rel="canonical" href="${m.canonical}" />`;
  if (path === '/') head += `\n<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Matheus Demeis', url: origin + '/', jobTitle: 'Full-Stack Developer', sameAs: ['https://github.com/MatheusDemeis', 'https://linkedin.com/in/matheus-demeis'] })}</script>`;
  const html = template.replace(/<title>.*?<\/title>/, head).replace('<div id="root"></div>', `<div id="root" data-route="${path}">${markup}</div>`);
  const output = path === '/' ? 'dist/index.html' : path === '/404' ? 'dist/404.html' : `dist${path}/index.html`;
  await mkdir(output.slice(0, output.lastIndexOf('/')), { recursive: true });
  await writeFile(output, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(path => `<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await rm('dist-ssr', { recursive: true });
console.log('Prerendered four public routes and the noindex fallback; generated sitemap and robots.txt.');
