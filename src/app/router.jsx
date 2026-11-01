import { useState, useEffect, useCallback } from 'react';

export function navigate(pathname) {
  window.history.pushState(null, '', pathname);
}

export function Router({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopstate = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopstate);
    return () => window.removeEventListener('popstate', onPopstate);
  }, []);

  const link = useCallback(
    (nextPathname) => {
      if (nextPathname === window.location.pathname) return;
      navigate(nextPathname);
      setPathname(nextPathname);
    },
    []
  );

  return children({ pathname, link });
}
