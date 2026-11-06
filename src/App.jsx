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
    description: 'Learn about the admissions process, prepare the required documents and contact Bukana Brilliant Schools for enrolment guidance.',
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
    if (window.location.hash) {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return undefined;

    let observer;
    let frame = window.requestAnimationFrame(() => {
      const targets = new Set(
        main.querySelectorAll(
          'section > .container-wide, section > .container-wide > .grid > *, section > .container-wide > .mt-12.grid > *, section > .container-wide > .mt-10.grid > *, section > .container-wide > .mt-8.grid > *, section > .container-wide > .mt-12.space-y-10 > *'
        )
      );

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        targets.forEach((target) => target.classList.add('is-visible'));
        return;
      }

      if (!('IntersectionObserver' in window)) {
        targets.forEach((target) => target.classList.add('is-visible'));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
      );

      targets.forEach((target, index) => {
        target.classList.add('scroll-reveal');
        if (target.parentElement?.classList.contains('grid')) {
          target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 75}ms`);
        }
        observer.observe(target);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      main.querySelectorAll('.scroll-reveal').forEach((target) => {
        target.classList.remove('scroll-reveal', 'is-visible');
        target.style.removeProperty('--reveal-delay');
      });
    };
  }, [pathname]);

  const handleLinkClick = useCallback((nextPathname) => {
    const target = new URL(nextPathname, window.location.origin);
    const currentPathname = window.location.pathname;
    const currentUrl = window.location.pathname + window.location.search + window.location.hash;
    const nextUrl = target.pathname + target.search + target.hash;
    if (nextUrl === currentUrl) return;

    navigate(nextUrl);
    if (target.pathname !== currentPathname) {
      setPathname(target.pathname);
    } else if (target.hash) {
      const targetId = decodeURIComponent(target.hash.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
