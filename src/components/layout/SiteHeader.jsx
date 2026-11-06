import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';
import { navigationItems, navDropdowns, languageOptions, admissionsCta } from '@/data/school.js';

export function SiteHeader({ currentPath, onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLang, setActiveLang] = useState(languageOptions.find((l) => l.active) || languageOptions[0]);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setOpenDropdown(null);
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

  const headerClasses =
    'sticky top-0 z-50 bg-surface-white border-b border-border-soft shadow-sm';

  return (
    <header className={headerClasses}>
      <div className="container-wide flex items-center justify-between h-16 px-4 md:px-0">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-surface-white">
            <span className="text-xl font-bold tracking-tight">BBS</span>
          </div>
          <span className="hidden sm:block text-xs font-bold uppercase tracking-widest text-ink-deep">
            Bukana Brilliant Schools
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navigationItems.map((item) => {
            const dropdown = item.dropdown ? navDropdowns[item.dropdown] : null;
            const isActiveItem = isActive(item.href);
            return (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => dropdown && setOpenDropdown(item.href)}
                onMouseLeave={() => dropdown && setOpenDropdown(null)}
                onFocus={() => dropdown && setOpenDropdown(item.href)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(item.href);
                  }}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md transition-colors',
                    isActiveItem
                      ? 'bg-surface-warm text-brand-deep'
                      : 'text-ink hover:text-brand'
                  )}
                  aria-current={isActiveItem ? 'page' : undefined}
                >
                  {item.label}
                  {dropdown && <ChevronDown className="w-4 h-4 ml-1 text-ink-muted transition-transform group-hover:text-brand duration-200" />}
                </a>
                {dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.95 }}
                    animate={openDropdown === item.href ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -4, scale: 0.95 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    className="absolute left-0 top-full mt-2 w-56 rounded-lg border border-border-soft bg-surface-white shadow-lg py-2 z-50"
                  >
                    {dropdown.map((sub) => {
                      const isActiveSub = isActive(sub.href);
                      return (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLink(sub.href);
                          }}
                          className={cn(
                            'flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors rounded-md',
                            isActiveSub
                              ? 'bg-brand text-surface-white'
                              : 'text-ink-muted hover:bg-surface-warm hover:text-brand-deep'
                          )}
                          aria-current={isActiveSub ? 'page' : undefined}
                        >
                          {sub.label}
                          <ChevronRight className="w-3 h-3 ms-auto text-ink-muted" />
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" href={admissionsCta.href}>
            {admissionsCta.label}
          </Button>
          <div className="relative group">
            <Button variant="outline" size="sm" className="flex items-center gap-2 px-3">
              <Globe className="w-4 h-4" />
              <span>{activeLang.label}</span>
              <ChevronDown className="w-3 h-3" />
            </Button>
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.95 }}
              animate={openDropdown === 'language' ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -4, scale: 0.95 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              className="absolute right-0 top-full mt-2 w-20 rounded-lg border border-border-soft bg-surface-white shadow-lg py-2 z-50"
            >
              {languageOptions.map((lang) => {
                const isActiveLang = lang.value === activeLang.value;
                return (
                  <button
                    key={lang.value}
                    onClick={() => {
                      setActiveLang(lang);
                      setOpenDropdown(null);
                    }}
                    className={cn(
                      'flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors',
                      isActiveLang ? 'bg-surface-warm text-brand-deep font-semibold' : 'text-ink-muted hover:bg-surface-warm hover:text-brand-deep'
                    )}
                  >
                    {lang.label}
                    {isActiveLang && <span className="ml-auto text-xs font-bold text-brand">EN</span>}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-ink hover:text-brand"
          onClick={() => {
            setIsOpen(!isOpen);
            setOpenDropdown(null);
          }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="md:hidden overflow-hidden border-t border-border-soft bg-surface-white"
        style={{ overflow: 'hidden' }}
      >
        <div className="container-wide px-4 py-4 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between px-3 py-2 border-b border-border-soft mb-2"
          >
            <span className="text-sm font-medium text-ink">Menu</span>
            <button
              className="p-1 text-ink hover:text-brand"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>

          {navigationItems.map((item) => {
            const dropdown = item.dropdown ? navDropdowns[item.dropdown] : null;
            const isActiveItem = isActive(item.href);
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.12 }}
                className="group border-b border-border-soft pb-2 mb-2"
              >
                <button
                  onClick={() => {
                    if (dropdown) {
                      setOpenDropdown(openDropdown === item.href ? null : item.href);
                    } else {
                      handleLink(item.href);
                    }
                  }}
                  className={cn(
                    'flex w-full items-center justify-between px-3 py-3 text-sm font-medium transition-colors',
                    isActiveItem
                      ? 'bg-brand/10 text-brand-deep'
                      : 'text-ink hover:bg-surface-warm hover:text-brand'
                  )}
                >
                  {item.label}
                  {dropdown && (
                    <ChevronDown
                      className={cn('w-4 h-4 text-ink-muted transition-transform duration-200', openDropdown === item.href && 'rotate-180')}
                    />
                  )}
                </button>
                {openDropdown === item.href && dropdown && (
                  <div className="ml-4 space-y-2 border-l border-brand/20 pl-4 pt-2 pb-2">
                    {dropdown.map((sub) => {
                      const isActiveSub = isActive(sub.href);
                      return (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLink(sub.href);
                          }}
                          className={cn(
                            'block px-3 py-2 rounded-md text-sm transition-colors',
                            isActiveSub ? 'bg-brand text-surface-white font-medium' : 'text-ink-muted hover:bg-surface-warm hover:text-brand-deep'
                          )}
                          aria-current={isActiveSub ? 'page' : undefined}
                        >
                          {sub.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            );
          })}

          <div className="pt-3 border-t border-border-soft mt-2 flex items-center gap-3">
            <span className="text-xs font-medium text-ink-muted">Language</span>
            {languageOptions.map((lang) => (
              <button
                key={lang.value}
                onClick={() => setActiveLang(lang)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-sm transition-colors',
                  lang.active || lang.value === activeLang.value
                    ? 'bg-surface-warm text-brand-deep font-semibold'
                    : 'text-ink-muted hover:bg-surface-warm hover:text-brand-deep'
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
