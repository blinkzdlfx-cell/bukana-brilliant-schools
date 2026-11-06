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
const appPath = path.join(projectRoot, 'src/App.jsx');
const galleryDataPath = path.join(projectRoot, 'src/data/gallery.js');
const galleryPagePath = path.join(projectRoot, 'src/pages/GalleryPage.jsx');
const navigationPath = path.join(projectRoot, 'src/data/school.js');
const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');
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

const appSource = fs.existsSync(appPath) ? fs.readFileSync(appPath, 'utf8') : '';
const galleryData = fs.existsSync(galleryDataPath) ? fs.readFileSync(galleryDataPath, 'utf8') : '';
const galleryPage = fs.existsSync(galleryPagePath) ? fs.readFileSync(galleryPagePath, 'utf8') : '';
const navigation = fs.existsSync(navigationPath) ? fs.readFileSync(navigationPath, 'utf8') : '';
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
check(appSource.includes("{ path: '/gallery', element: <GalleryPage /> }"), 'gallery route renders the dedicated gallery page');
check((galleryData.match(/gallery-[0-9]{2}/g) || []).length === 30, 'gallery contains 30 image entries');
const galleryPhotoIds = [...galleryData.matchAll(/'photo-([a-zA-Z0-9-]+)'/g)].map((match) => match[1]);
check(new Set(galleryPhotoIds).size === 30, 'gallery entries use 30 distinct image sources');
check(galleryPage.includes('role="dialog"') && galleryPage.includes('aria-modal="true"'), 'gallery includes an accessible full-screen image viewer');
check(galleryPage.includes('loading={index < 4 ? \'eager\' : \'lazy\'}') && galleryPage.includes('decoding="async"'), 'gallery uses lazy loading and asynchronous image decoding');
check(!appSource.includes("'/career'") && !appSource.includes('CareerPage'), 'careers route and page import are removed');
check(!navigation.includes("href: '/career'") && !sitemap.includes('/career'), 'careers page is removed from navigation and sitemap');

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
