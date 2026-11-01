import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';
import { navigationItems, admissionsCta } from '@/data/school.js';

export function SiteHeader({ currentPath, onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  const activeClass =
    'bg-surface-white text-brand-deep shadow-sm border-b border-border-soft';

  return (
    <header className="sticky top-0 z-50 bg-surface-white/95 backdrop-blur supports-[backdrop-filter]:bg-surface-white/80 border-b border-border-soft">
      <div className="container-wide flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand tracking-tight">
            BBS
          </span>
          <span className="hidden sm:block text-xs font-semibold text-ink-deep uppercase tracking-widest">
            Bukana Brilliant Schools
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigationItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(item.href);
                }}
                className={cn(
                  'transition-colors px-3 py-2 rounded-md',
                  isActive ? activeClass : 'text-ink hover:text-brand'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => onLinkClick(admissionsCta.href)}>
            {admissionsCta.label}
          </Button>
          <button
            className="md:hidden p-2 text-ink hover:text-brand"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="md:hidden overflow-hidden border-t border-border-soft bg-surface-white"
        style={{ overflow: 'hidden' }}
      >
        <div className="container-wide px-4 py-4 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between px-3 py-2 border-b border-border-soft mb-3"
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
            const isActive = currentPath === item.href;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.15 }}
                className="group"
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    onLinkClick(item.href);
                  }}
                  className={cn(
                    'flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand/10 text-brand-deep'
                      : 'text-ink hover:bg-surface-warm hover:text-brand'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4 text-ink-muted group-hover:text-brand transition-colors" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>
    </header>
  );
}
