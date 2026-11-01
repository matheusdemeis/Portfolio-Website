// Local static-artifact preview. Mirrors the committed Vercel route table;
// it is a QA helper, not a deployed application server.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
const root = resolve('dist');
const { routes } = JSON.parse(await readFile('vercel.json', 'utf8'));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webp': 'image/webp', '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml' };
const routedFiles = new Set(routes.filter(route => route.dest).map(route => route.dest));
async function file(path) {
  // macOS may have a case-insensitive filesystem; hosting paths are exact.
  if (/^\/projects(?:\/|$)/i.test(path) && !routedFiles.has(path)) return null;
  let full = resolve(root, '.' + path);
  if (!full.startsWith(root + '/') && full !== root) return null;
  try { if ((await stat(full)).isDirectory()) full = resolve(full, 'index.html'); return { content: await readFile(full), type: types[extname(full)] ?? 'application/octet-stream' }; } catch { return null; }
}
const portArg = process.argv.indexOf('--port');
const port = portArg >= 0 ? Number(process.argv[portArg + 1]) : 4173;
createServer(async (request, response) => {
  try {
    const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    for (const route of routes) {
      if (route.handle) { const found = await file(path); if (found) { response.writeHead(200, { 'Content-Type': found.type }); response.end(found.content); return; } }
      else if (new RegExp('^' + route.src + '$').test(path)) {
        if (route.headers) { response.writeHead(route.status, route.headers); response.end(); return; }
        const found = await file(route.dest);
        if (!found) { response.writeHead(404); response.end('Not found'); return; }
        response.writeHead(route.status ?? 200, { 'Content-Type': found.type }); response.end(found.content); return;
      }
    }
  } catch { response.writeHead(400); response.end('Bad request'); }
}).listen(port, '127.0.0.1', () => console.log(`Local artifact preview: http://127.0.0.1:${port}`));
