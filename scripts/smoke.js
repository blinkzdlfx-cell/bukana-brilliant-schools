import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const dist = path.join(projectRoot, 'dist');
let failed = 0;

function check(condition, message) {
  if (condition) {
    console.log('PASS:', message);
  } else {
    console.error('FAIL:', message);
    failed += 1;
  }
}

const indexPath = path.join(dist, 'index.html');
const assetsDir = path.join(dist, 'assets');
const homePagePath = path.join(projectRoot, 'src/pages/HomePage.jsx');
const distExists = fs.existsSync(dist);
const indexExists = fs.existsSync(indexPath);
const assetsExists = fs.existsSync(assetsDir);

check(distExists, 'dist directory exists');
check(indexExists, 'dist/index.html exists');
check(assetsExists, 'dist/assets directory exists');

const html = indexExists ? fs.readFileSync(indexPath, 'utf8') : '';
check(html.includes('Bukana Brilliant Schools'), 'index.html contains school name');
check(html.includes('Be a star @ BBS'), 'index.html contains tagline');
check(/<meta[^>]+name=["']description["']/i.test(html), 'index.html contains meta description');

// The homepage renders these icons in its always-visible contact section.
// Missing imports cause a runtime ReferenceError and a completely blank page.
const homePage = fs.existsSync(homePagePath)
  ? fs.readFileSync(homePagePath, 'utf8')
  : '';
const lucideImport = homePage.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/);
const importedIcons = lucideImport ? lucideImport[1].split(',').map((name) => name.trim()) : [];
check(importedIcons.includes('Mail'), 'homepage imports the Mail icon used by its contact section');
check(importedIcons.includes('MessageCircle'), 'homepage imports the MessageCircle icon used by its contact section');

if (assetsExists) {
  const assetFiles = fs.readdirSync(assetsDir);
  const jsFiles = assetFiles.filter((file) => file.endsWith('.js'));
  const cssFiles = assetFiles.filter((file) => file.endsWith('.css'));

  check(jsFiles.length > 0, 'at least one JavaScript bundle is emitted');
  check(cssFiles.length > 0, 'at least one CSS bundle is emitted');

  const referencedJs = jsFiles.some((file) => html.includes(file));
  const referencedCss = cssFiles.some((file) => html.includes(file));
  check(referencedJs, 'index.html references a generated JavaScript bundle');
  check(referencedCss, 'index.html references a generated CSS bundle');
}

if (failed > 0) {
  console.error(`\n${failed} smoke check(s) failed.`);
  process.exit(1);
}

console.log('\nAll smoke checks passed.');
