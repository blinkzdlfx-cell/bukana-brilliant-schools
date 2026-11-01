import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, '..', 'dist');
let failed = 0;

function check(condition, message) {
  if (condition) {
    console.log('PASS:', message);
  } else {
    console.error('FAIL:', message);
    failed += 1;
  }
}

check(fs.existsSync(dist), 'dist directory exists');
check(fs.existsSync(path.join(dist, 'index.html')), 'dist/index.html exists');

const assetsDir = path.join(dist, 'assets');
if (fs.existsSync(assetsDir)) {
  const jsFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.js'));
  check(jsFiles.length > 0, 'at least one JS bundle emitted in dist/assets');
}

const html = fs.existsSync(path.join(dist, 'index.html'))
  ? fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
  : '';

check(html.includes('Bukana Brilliant Schools'), 'index.html contains school name');
check(html.includes('Be a star @ BBS'), 'index.html contains tagline');
check(html.includes('description'), 'index.html contains meta description');

if (failed > 0) {
  console.error(`\n${failed} smoke check(s) failed.`);
  process.exit(1);
}
console.log('\nAll smoke checks passed.');
