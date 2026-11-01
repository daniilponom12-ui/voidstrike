import * as esbuild from 'esbuild';
import fs from 'node:fs';
import http from 'node:http';
const serve = process.argv.includes('--serve');
fs.rmSync('dist', { recursive: true, force: true }); fs.mkdirSync('dist', { recursive: true });
for (const f of ['index.html', 'config.js']) fs.copyFileSync('public/' + f, 'dist/' + f);
await esbuild.build({ entryPoints: ['src/main.js'], bundle: true, minify: !serve, sourcemap: serve, outfile: 'dist/game.js', format: 'iife', target: 'es2019', legalComments: 'none' });
console.log('built dist/', (fs.statSync('dist/game.js').size / 1024 | 0) + ' KB');
if (serve) {
  const mime = { html: 'text/html', js: 'text/javascript', css: 'text/css' };
  http.createServer((q, r) => { const p = q.url === '/' ? '/index.html' : q.url.split('?')[0]; const f = 'dist' + p; if (!fs.existsSync(f)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': mime[f.split('.').pop()] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); }).listen(8080, () => console.log('http://localhost:8080'));
}
