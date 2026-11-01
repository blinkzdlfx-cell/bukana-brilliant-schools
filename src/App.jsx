import { useState, useEffect, useCallback } from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader.jsx';
import { SiteFooter } from '@/components/layout/SiteFooter.jsx';
import { Router, navigate } from '@/app/router.jsx';
import { HomePage } from '@/pages/HomePage.jsx';
import { AboutPage } from '@/pages/AboutPage.jsx';
import { AcademicsPage } from '@/pages/AcademicsPage.jsx';
import { AdmissionsPage } from '@/pages/AdmissionsPage.jsx';
import { SchoolLifePage } from '@/pages/SchoolLifePage.jsx';
import { ContactPage } from '@/pages/ContactPage.jsx';
import { NotFoundPage } from '@/pages/NotFoundPage.jsx';

const ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/academics', element: <AcademicsPage /> },
  { path: '/admissions', element: <AdmissionsPage /> },
  { path: '/school-life', element: <SchoolLifePage /> },
  { path: '/gallery', element: <SchoolLifePage /> },
  { path: '/contact', element: <ContactPage /> },
];

export function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onNavigate = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onNavigate);
    return () => window.removeEventListener('popstate', onNavigate);
  }, []);

  const handleLinkClick = useCallback(
    (nextPathname) => {
      if (nextPathname === window.location.pathname) return;
      navigate(nextPathname);
      setPathname(nextPathname);
    },
    []
  );

  const route = ROUTES.find((r) => r.path === pathname) || {
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
