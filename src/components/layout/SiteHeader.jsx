import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';
import { navigationItems, navDropdowns, admissionsCta } from '@/data/school.js';

export function SiteHeader({ currentPath, onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onKeydown = (event) => {
      if (event.key === 'Escape') {
        const mobileMenuWasOpen = menuButtonRef.current?.getAttribute('aria-expanded') === 'true';
        setIsOpen(false);
        setOpenDropdown(null);
        if (mobileMenuWasOpen) menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  const handleLink = (href) => {
    setIsOpen(false);
    setOpenDropdown(null);
    onLinkClick(href);
  };

  const isActive = (href) => currentPath === href || currentPath.startsWith(href + '#');
  const headerClasses = 'sticky top-0 z-50 border-b border-border-soft bg-surface-white/95 shadow-sm backdrop-blur-md';

  return (
    <header className={headerClasses}>
      <div className="container-wide flex h-[4.5rem] items-center justify-between gap-4">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            handleLink('/');
          }}
          className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="Bukana Brilliant Schools home"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-bold tracking-tight text-white shadow-sm">
            BBS
          </span>
          <span className="hidden max-w-[12rem] text-xs font-bold uppercase leading-snug tracking-[0.14em] text-ink-deep sm:block">
            Bukana Brilliant Schools
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => {
            const dropdown = item.dropdown ? navDropdowns[item.dropdown] : null;
            const isActiveItem =
              isActive(item.href) ||
              Boolean(dropdown?.some((sub) => currentPath === sub.href.split('#')[0]));
            const submenuId = 'desktop-submenu-' + (item.dropdown || item.label.toLowerCase());

            return (
              <div
                key={item.href}
                className="group relative"
                onMouseEnter={() => dropdown && setOpenDropdown(item.href)}
                onMouseLeave={() => dropdown && setOpenDropdown(null)}
                onFocus={() => dropdown && setOpenDropdown(item.href)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
                }}
              >
                <a
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleLink(item.href);
                  }}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors',
                    isActiveItem
                      ? 'bg-brand/8 text-brand-deep'
                      : 'text-ink hover:bg-surface-warm hover:text-brand'
                  )}
                  aria-current={isActiveItem ? 'page' : undefined}
                  aria-haspopup={dropdown ? 'true' : undefined}
                  aria-expanded={dropdown ? openDropdown === item.href : undefined}
                  aria-controls={dropdown ? submenuId : undefined}
                >
                  {item.label}
                  {dropdown && (
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'h-4 w-4 text-ink-muted transition-transform duration-200',
                        openDropdown === item.href && 'rotate-180'
                      )}
                    />
                  )}
                </a>

                {dropdown && (
                  <div
                    className={cn(
                      'absolute left-0 top-full z-50 pt-2',
                      openDropdown === item.href ? 'pointer-events-auto' : 'pointer-events-none'
                    )}
                  >
                    <motion.div
                      id={submenuId}
                      initial={false}
                      animate={
                        openDropdown === item.href
                          ? { opacity: 1, y: 0, scale: 1 }
                          : { opacity: 0, y: -5, scale: 0.98 }
                      }
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      aria-hidden={openDropdown !== item.href}
                      inert={openDropdown !== item.href}
                      className="w-64 origin-top-left rounded-xl border border-border-soft bg-white p-2 shadow-xl"
                    >
                      {dropdown.map((sub) => {
                        const isActiveSub = isActive(sub.href);
                        return (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={(event) => {
                              event.preventDefault();
                              handleLink(sub.href);
                            }}
                            className={cn(
                              'flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors',
                              isActiveSub
                                ? 'bg-brand/8 text-brand-deep'
                                : 'text-ink-muted hover:bg-surface-warm hover:text-brand-deep'
                            )}
                            aria-current={isActiveSub ? 'page' : undefined}
                          >
                            {sub.label}
                            <ChevronRight aria-hidden="true" className="ml-auto h-4 w-4 opacity-60" />
                          </a>
                        );
                      })}
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button
            variant="primary"
            href={admissionsCta.href}
            onClick={(event) => {
              event.preventDefault();
              handleLink(admissionsCta.href);
            }}
            className="min-h-11 px-5 text-sm"
          >
            Enquire about admission
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-white text-ink transition-colors hover:border-brand/30 hover:bg-surface-warm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          onClick={() => {
            setIsOpen((open) => !open);
            setOpenDropdown(null);
          }}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <motion.nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="overflow-hidden border-t border-border-soft bg-white lg:hidden"
      >
        <div className="container-wide space-y-2 py-4">
          {navigationItems.map((item) => {
            const dropdown = item.dropdown ? navDropdowns[item.dropdown] : null;
            const isActiveItem =
              isActive(item.href) ||
              Boolean(dropdown?.some((sub) => currentPath === sub.href.split('#')[0]));
            const submenuId = 'mobile-submenu-' + (item.dropdown || item.label.toLowerCase());

            return (
              <div key={item.href} className="border-b border-border-soft pb-2 last:border-b-0">
                {dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                      className={cn(
                        'flex min-h-12 w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors',
                        isActiveItem ? 'bg-brand/8 text-brand-deep' : 'text-ink hover:bg-surface-warm'
                      )}
                      aria-expanded={openDropdown === item.href}
                      aria-controls={submenuId}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          'h-4 w-4 text-ink-muted transition-transform duration-200',
                          openDropdown === item.href && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      id={submenuId}
                      hidden={openDropdown !== item.href}
                      className="ml-3 space-y-1 border-l-2 border-brand/15 py-2 pl-3"
                    >
                      {dropdown.map((sub) => {
                        const isActiveSub = isActive(sub.href);
                        return (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={(event) => {
                              event.preventDefault();
                              handleLink(sub.href);
                            }}
                            className={cn(
                              'block rounded-lg px-3 py-3 text-sm transition-colors',
                              isActiveSub
                                ? 'bg-brand/8 font-semibold text-brand-deep'
                                : 'text-ink-muted hover:bg-surface-warm hover:text-brand-deep'
                            )}
                            aria-current={isActiveSub ? 'page' : undefined}
                          >
                            {sub.label}
                          </a>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleLink(item.href);
                    }}
                    className={cn(
                      'flex min-h-12 items-center rounded-lg px-3 py-3 text-sm font-semibold transition-colors',
                      isActiveItem ? 'bg-brand/8 text-brand-deep' : 'text-ink hover:bg-surface-warm'
                    )}
                    aria-current={isActiveItem ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            );
          })}

          <div className="pt-2">
            <Button
              variant="primary"
              href={admissionsCta.href}
              onClick={(event) => {
                event.preventDefault();
                handleLink(admissionsCta.href);
              }}
              className="min-h-12 w-full"
            >
              Enquire about admission
            </Button>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
