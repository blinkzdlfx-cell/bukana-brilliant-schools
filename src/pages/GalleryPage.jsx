import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { galleryCategories, galleryItems, galleryPendingNotice } from '@/data/gallery.js';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStart = useRef(null);
  const visibleItems = useMemo(() => activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory), [activeCategory]);
  const activeItem = activeIndex === null ? null : visibleItems[activeIndex];

  const closeViewer = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => setActiveIndex((index) => index === null ? null : (index - 1 + visibleItems.length) % visibleItems.length), [visibleItems.length]);
  const showNext = useCallback(() => setActiveIndex((index) => index === null ? null : (index + 1) % visibleItems.length), [visibleItems.length]);

  useEffect(() => {
    if (!activeItem) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeItem, closeViewer, showNext, showPrevious]);

  const handleTouchStart = (event) => { touchStart.current = event.touches[0]?.clientX ?? null; };
  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) (distance > 0 ? showPrevious : showNext)();
    touchStart.current = null;
  };

  return (
    <>
      <section className="bg-brand text-surface-white section-pad">
        <div className="container-wide grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">Photo gallery</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-balance md:text-5xl">A closer look at learning, discovery and growing.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#e4efe5]">Explore a collection of learning and school-life photographs. The current images are royalty-free visual references and will be replaced with approved photographs from Bukana Brilliant Schools.</p>
          </div>
          <div className="hidden h-20 w-20 items-center justify-center rounded-3xl bg-white/10 md:flex"><Images className="h-10 w-10 text-accent" /></div>
        </div>
      </section>
      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <div className="mb-8 rounded-2xl border border-brand/15 bg-brand/5 p-4 text-sm leading-relaxed text-ink-muted">
            <strong className="text-brand-deep">Illustrative photographs:</strong> {galleryPendingNotice} They do not represent the school’s actual premises, pupils, staff or facilities.
          </div>
          <SectionHeading eyebrow="Explore the collection" title="Moments and learning spaces" description="Choose a category or open any photograph to view it in full screen. Use the arrow controls, keyboard arrows or swipe gestures to move through the collection." />
          <div className="mt-8 flex gap-2 overflow-x-auto pb-3" role="group" aria-label="Filter gallery by category">
            {galleryCategories.map((category) => (
              <button key={category.id} type="button" onClick={() => { setActiveCategory(category.id); setActiveIndex(null); }} aria-pressed={activeCategory === category.id}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${activeCategory === category.id ? 'border-brand bg-brand text-white' : 'border-border-soft bg-white text-ink-muted hover:border-brand hover:text-brand'}`}>
                {category.label}
              </button>
            ))}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {visibleItems.map((item, index) => (
              <motion.button key={item.id} type="button" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.25 }}
                onClick={() => setActiveIndex(index)} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-warm text-left shadow-sm ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:rounded-2xl"
                aria-label={`View photograph: ${item.caption}`}>
                <img src={item.thumbnail} srcSet={`${item.thumbnail} 640w, ${item.src} 1100w`} sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  alt={item.alt} loading={index < 4 ? 'eager' : 'lazy'} decoding="async" fetchPriority={index === 0 ? 'high' : 'auto'}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-3 pt-10 text-xs font-semibold text-white sm:p-4 sm:pt-12 sm:text-sm">{item.caption}</span>
              </motion.button>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink-muted">{visibleItems.length} photographs · Select any image to enlarge</p>
        </div>
      </section>
      <AnimatePresence>
        {activeItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
            role="dialog" aria-modal="true" aria-label="Full-screen photograph viewer" onClick={closeViewer} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button type="button" onClick={closeViewer} aria-label="Close full-screen viewer" className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><X className="h-6 w-6" /></button>
            <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous photograph" className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:left-5 sm:p-3"><ChevronLeft className="h-7 w-7" /></button>
            <div className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-3" onClick={(event) => event.stopPropagation()}>
              <img key={activeItem.id} src={activeItem.src} alt={activeItem.alt} decoding="async" fetchPriority="high" className="max-h-[78vh] max-w-full rounded-lg object-contain" />
              <p className="max-w-3xl px-12 text-center text-sm text-white sm:text-base">{activeItem.caption}</p>
              <p className="text-xs text-white/60">{activeIndex + 1} of {visibleItems.length}</p>
            </div>
            <button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next photograph" className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-5 sm:p-3"><ChevronRight className="h-7 w-7" /></button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/50 sm:bottom-5 sm:text-xs">Swipe to navigate · Esc to close</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
