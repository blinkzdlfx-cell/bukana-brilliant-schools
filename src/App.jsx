import { useState, useEffect, useCallback } from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader.jsx';
import { SiteFooter } from '@/components/layout/SiteFooter.jsx';
import { navigate } from '@/app/router.jsx';
import { HomePage } from '@/pages/HomePage.jsx';
import { AboutPage } from '@/pages/AboutPage.jsx';
import { AcademicsPage } from '@/pages/AcademicsPage.jsx';
import { EarlyYearsPage } from '@/pages/EarlyYearsPage.jsx';
import { PrimaryPage } from '@/pages/PrimaryPage.jsx';
import { AdmissionsPage } from '@/pages/AdmissionsPage.jsx';
import { SchoolLifePage } from '@/pages/SchoolLifePage.jsx';
import { GalleryPage } from '@/pages/GalleryPage.jsx';
import { ContactPage } from '@/pages/ContactPage.jsx';
import { NotFoundPage } from '@/pages/NotFoundPage.jsx';

const SITE_URL = 'https://bukanabrilliantschools.com';
const DEFAULT_DESCRIPTION =
  'Discover Bukana Brilliant Schools in Ijegun, Lagos. Explore Creche, Nursery, and Primary education and contact the school for admissions enquiries.';

const PAGE_META = {
  '/': {
    title: 'Bukana Brilliant Schools | Be a star @ BBS',
    description: DEFAULT_DESCRIPTION,
    canonicalPath: '/',
  },
  '/about': {
    title: 'About Bukana Brilliant Schools | BBS',
    description: 'Learn about Bukana Brilliant Schools and explore the questions families can ask as they consider Creche, Nursery, and Primary education.',
    canonicalPath: '/about',
  },
  '/academics': {
    title: 'Academics: Creche, Nursery & Primary | BBS',
    description: 'Explore Creche, Nursery, and Primary learning levels at Bukana Brilliant Schools and find useful questions to ask before enrolment.',
    canonicalPath: '/academics',
  },
  '/early-years': {
    title: 'Early Years (Pre-School & Nursery) | BBS',
    description: 'Early years care and learning at Bukana Brilliant Schools. Ask about age range, daily routine, and how children are supported.',
    canonicalPath: '/early-years',
  },
  '/primary': {
    title: 'Primary School | BBS',
    description: 'Primary classes and subjects at Bukana Brilliant Schools. Ask about class structure, curriculum, and progress.',
    canonicalPath: '/primary',
  },
  '/admissions': {
    title: 'Admissions Enquiries | Bukana Brilliant Schools',
    description: 'Contact Bukana Brilliant Schools for current admissions availability, requirements, fees, and next steps.',
    canonicalPath: '/admissions',
  },
  '/school-life': {
    title: 'School Life | Bukana Brilliant Schools',
    description: 'Learn what to ask about classrooms, learning activities, facilities, and school life at Bukana Brilliant Schools.',
    canonicalPath: '/school-life',
  },
  '/gallery': {
    title: 'Photo Gallery | Bukana Brilliant Schools',
    description: 'Explore a visual collection of learning, creativity, play and school environments at Bukana Brilliant Schools.',
    canonicalPath: '/gallery',
  },
  '/contact': {
    title: 'Contact Bukana Brilliant Schools | BBS',
    description: 'Contact Bukana Brilliant Schools in Ijegun, Lagos, using WhatsApp or ask about admissions and arranging a visit.',
    canonicalPath: '/contact',
  },
  '*': {
    title: 'Page Not Found | Bukana Brilliant Schools',
    description: 'The requested page could not be found on the Bukana Brilliant Schools website.',
    canonicalPath: null,
    noIndex: true,
  },
};

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const [key, keyValue] = selector.match(/\[(name|property)="([^"]+)"\]/)?.slice(1) || [];
    if (key && keyValue) element.setAttribute(key, keyValue);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function updatePageMetadata(pathname) {
  const page = PAGE_META[pathname] || PAGE_META['*'];
  document.title = page.title;
  setMeta('meta[name="description"]', 'content', page.description);
  setMeta('meta[property="og:title"]', 'content', page.title);
  setMeta('meta[property="og:description"]', 'content', page.description);
  setMeta('meta[property="og:url"]', 'content', page.canonicalPath ? `${SITE_URL}${page.canonicalPath}` : SITE_URL);
  setMeta('meta[name="robots"]', 'content', page.noIndex ? 'noindex, nofollow' : 'index, follow');

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  if (page.canonicalPath) {
    canonical.setAttribute('href', `${SITE_URL}${page.canonicalPath}`);
  } else {
    canonical.removeAttribute('href');
  }
}

const ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/academics', element: <AcademicsPage /> },
  { path: '/early-years', element: <EarlyYearsPage /> },
  { path: '/primary', element: <PrimaryPage /> },
  { path: '/admissions', element: <AdmissionsPage /> },
  { path: '/school-life', element: <SchoolLifePage /> },
  { path: '/gallery', element: <GalleryPage /> },
  { path: '/contact', element: <ContactPage /> },
];

export function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onNavigate = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onNavigate);
    return () => window.removeEventListener('popstate', onNavigate);
  }, []);

  useEffect(() => {
    updatePageMetadata(pathname);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  const handleLinkClick = useCallback((nextPathname) => {
    if (nextPathname === window.location.pathname) return;
    navigate(nextPathname);
    setPathname(nextPathname);
  }, []);

  const route = ROUTES.find((item) => item.path === pathname) || {
    path: '*',
    element: <NotFoundPage />,
  };

  return (
    <div className="text-ink antialiased">
      <SiteHeader currentPath={pathname} onLinkClick={handleLinkClick} />
      <main className="relative overflow-hidden">{route.element}</main>
      <SiteFooter currentPath={pathname} onLinkClick={handleLinkClick} />
    </div>
  );
}

export default App;
