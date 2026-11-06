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
const galleryPagePath = path.join(projectRoot, 'src/pages/GalleryPage.jsx');
const navigationPath = path.join(projectRoot, 'src/data/school.js');
const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');
const buttonPath = path.join(projectRoot, 'src/components/ui/button.jsx');
const workerPath = path.join(projectRoot, 'src/worker.js');
const footerPath = path.join(projectRoot, 'src/components/layout/SiteFooter.jsx');
const headerPath = path.join(projectRoot, 'src/components/layout/SiteHeader.jsx');
const distExists = fs.existsSync(dist);
const indexExists = fs.existsSync(indexPath);
const assetsExists = fs.existsSync(assetsDir);

const appSource = fs.existsSync(appPath) ? fs.readFileSync(appPath, 'utf8') : '';
const galleryPage = fs.existsSync(galleryPagePath) ? fs.readFileSync(galleryPagePath, 'utf8') : '';
const navigation = fs.existsSync(navigationPath) ? fs.readFileSync(navigationPath, 'utf8') : '';
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const buttonSource = fs.existsSync(buttonPath) ? fs.readFileSync(buttonPath, 'utf8') : '';
const workerSource = fs.existsSync(workerPath) ? fs.readFileSync(workerPath, 'utf8') : '';
const contactSource = fs.existsSync(contactPagePath) ? fs.readFileSync(contactPagePath, 'utf8') : '';
const footerSource = fs.existsSync(footerPath) ? fs.readFileSync(footerPath, 'utf8') : '';
const headerSource = fs.existsSync(headerPath) ? fs.readFileSync(headerPath, 'utf8') : '';
const routerPath = path.join(projectRoot, 'src/app/router.jsx');
const routerSource = fs.existsSync(routerPath) ? fs.readFileSync(routerPath, 'utf8') : '';
const wranglerPath = path.join(projectRoot, 'wrangler.toml');
const wranglerSource = fs.existsSync(wranglerPath) ? fs.readFileSync(wranglerPath, 'utf8') : '';

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
check(importedIcons.includes('ArrowRight'), 'homepage imports the ArrowRight icon used by its calls to action');
check(importedIcons.includes('MessageCircle'), 'homepage imports the MessageCircle icon used by its contact section');
check(homePage.includes('href={admissionsCta.href}') && homePage.includes('href={academicsCta.href}'), 'homepage hero actions have working destinations');
check(!homePage.includes('<motion.button') && !homePage.includes('asChild'), 'homepage hero actions do not use invalid nested button composition');
check(buttonSource.includes('cloneElement') && buttonSource.includes('asChild requires exactly one valid child'), 'Button asChild correctly forwards styling and behavior to its child');
check(workerSource.includes("url.pathname === '/favicon.ico'") && workerSource.includes("'/favicon.svg'"), 'worker redirects automatic favicon.ico requests to the existing SVG');
check(workerSource.includes('SPA document fallback failed') && workerSource.includes('status: 503'), 'worker catches static asset and SPA fallback exceptions');
check(contactSource.includes('id="contact-form"') && contactSource.includes('encodeURIComponent(body)'), 'contact form has an anchor target and safely encodes its email body');
check(headerSource.includes('onMouseEnter={() => dropdown && setOpenDropdown(item.href)}'), 'desktop navigation dropdowns open on hover');
check(headerSource.includes("aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}") && headerSource.includes('aria-expanded={isOpen}') && headerSource.includes('aria-controls="mobile-navigation"'), 'mobile navigation exposes an accessible open/close toggle');
check(!headerSource.includes('>Menu</span>'), 'mobile navigation does not render a duplicate Menu heading or close control');
check(homePage.includes('href={admissionsCta.href}') && homePage.includes('href={academicsCta.href}'), 'homepage hero actions link to the configured internal routes');
check(homePage.includes('border-white/50 bg-white/8') && homePage.includes('text-white'), 'homepage secondary hero action has visible contrast on the dark hero background');
check(!headerSource.includes('activeLang') && !headerSource.includes('languageOptions'), 'header does not expose a non-functional language switcher');

check(appSource.includes("{ path: '/gallery', element: <GalleryPage /> }"), 'gallery route renders the dedicated gallery page');
check(appSource.includes('new URL(nextPathname, window.location.origin)') && appSource.includes('target.hash'), 'SPA navigation supports dropdown section anchors');
check(appSource.includes('const currentPathname = window.location.pathname') && appSource.includes('target.pathname !== currentPathname'), 'SPA navigation compares the destination against the pre-navigation route');
check(buttonSource.includes('inline-flex items-center justify-center'), 'shared buttons render as aligned flex controls');
check(homePage.includes('min-h-14 px-7') && homePage.includes('flex-col gap-3 sm:flex-row'), 'homepage hero actions use readable mobile-first sizing');
check(wranglerSource.includes('binding = "ASSETS"'), 'Cloudflare Worker has an explicit static assets binding');
const stylesPath = path.join(projectRoot, 'src/styles/index.css');
const stylesSource = fs.existsSync(stylesPath) ? fs.readFileSync(stylesPath, 'utf8') : '';
check(stylesSource.includes('--color-brand: #176B3A') && stylesSource.includes('--color-accent: #D8B85B'), 'site uses the restrained evergreen and muted-gold design palette');
check(stylesSource.includes('.scroll-reveal.is-visible') && stylesSource.includes('prefers-reduced-motion: reduce'), 'scroll reveal animations support reduced-motion preferences');
check(appSource.includes('new IntersectionObserver') && appSource.includes('scroll-reveal'), 'page sections and content groups reveal smoothly on scroll');
check(routerSource.includes('window.history.pushState'), 'router updates browser history for internal navigation');
check(!galleryPage.includes('unsplash.com') && !galleryPage.includes('galleryItems'), 'school gallery does not present unrelated stock photos as school imagery');
check(galleryPage.includes('Official BBS photography') && galleryPage.includes('pupil privacy'), 'gallery explains the approved-photo policy and privacy standard');
check(!appSource.includes("'/career'") && !appSource.includes('CareerPage'), 'careers route and page import are removed');
check(!navigation.includes("href: '/career'") && !sitemap.includes('/career'), 'careers page is removed from navigation and sitemap');

check(!footerSource.includes('<Phone') && footerSource.includes('contactData.address && !contactData.addressPending'), 'footer hides unconfirmed address details and uses the correct location icon');
check(contactSource.includes('aria-invalid={Boolean(error)}') && contactSource.includes('htmlFor={id}'), 'contact form fields expose accessible labels and validation state');
check(headerSource.includes('inert={!isOpen}') && headerSource.includes('aria-hidden={!isOpen}'), 'closed mobile navigation is removed from keyboard interaction');
check(appSource.includes('className="skip-link"') && appSource.includes('id="main-content"'), 'site provides a keyboard skip link and main content landmark');
check(stylesSource.includes('.skip-link:focus'), 'skip link becomes visible when keyboard-focused');

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
