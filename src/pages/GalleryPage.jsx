import { useEffect, useMemo, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { schoolImages } from '@/data/learning-images.js';

const CATEGORY_ORDER = ['Campus', 'Classrooms', 'Learning', 'Activities', 'Students', 'Teachers'];

function getImageCategory(caption) {
  if (/building|grounds|environment|interior/i.test(caption)) return 'Campus';
  if (/classroom/i.test(caption)) return 'Classrooms';
  if (/computer/i.test(caption)) return 'Learning';
  if (/play/i.test(caption)) return 'Activities';
  if (/teacher/i.test(caption)) return 'Teachers';
  return 'Students';
}

const galleryImages = schoolImages.map((image) => ({
  ...image,
  category: getImageCategory(image.caption),
}));

const IMAGE_SHAPES = [
  'aspect-[4/3]',
  'aspect-[5/4]',
  'aspect-[3/2]',
  'aspect-[4/5]',
  'aspect-square',
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = useMemo(
    () => ['All', ...CATEGORY_ORDER.filter((category) => galleryImages.some((image) => image.category === category))],
    []
  );

  const visibleImages = useMemo(
    () => activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event) {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current + 1) % visibleImages.length);
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (current - 1 + visibleImages.length) % visibleImages.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, visibleImages.length]);

  const selectedImage = selectedIndex === null ? null : visibleImages[selectedIndex];

  function changeCategory(category) {
    setActiveCategory(category);
    setSelectedIndex(null);
  }

  function showPrevious() {
    setSelectedIndex((current) => (current - 1 + visibleImages.length) % visibleImages.length);
  }

  function showNext() {
    setSelectedIndex((current) => (current + 1) % visibleImages.length);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:py-24">
          <div>
            <Badge variant="accent" className="mb-5 gap-2 border border-white/15 bg-white/10 text-[#F2D98C]"><span className="h-2 w-2 rounded-full bg-accent" /> Official school gallery</Badge>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">A closer look at life at Bukana Brilliant Schools.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">Explore photographs of the school environment, learning spaces, teachers and students.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" href="/contact" className="min-h-12 px-6">Ask about a school visit</Button>
              <Button variant="secondary" href="/school-life" className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep">Explore school life</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-[1.5rem] border border-white/15 bg-white/8 p-6 backdrop-blur-sm sm:p-8">
            <Camera aria-hidden="true" className="h-6 w-6 text-[#E8D28C]" />
            <p className="mt-8 text-lg font-semibold text-white">Real school moments</p>
            <p className="mt-2 text-sm leading-6 text-white/75">Browse the original school photographs alongside their enhanced landscape versions.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-warm">
        <div className="container-wide">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">The BBS photo collection</p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">Real moments. Real learning.</h2>
              <p className="mt-4 leading-7 text-ink-muted">Browse the collection at your own pace. Select any photograph to view its original and enhanced versions.</p>
            </div>
            <p className="text-sm font-semibold text-ink-muted" aria-live="polite">{visibleImages.length} {visibleImages.length === 1 ? 'photo' : 'photos'}</p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter gallery by category">
            {categories.map((category) => {
              const count = category === 'All'
                ? galleryImages.length
                : galleryImages.filter((image) => image.category === category).length;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => changeCategory(category)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${isActive ? 'border-brand bg-brand text-white' : 'border-border-soft bg-white text-ink hover:border-brand hover:text-brand'}`}
                >
                  {category}
                  <span className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${isActive ? 'bg-white/15 text-white' : 'bg-surface-warm text-ink-muted'}`}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
            {visibleImages.map((image, index) => (
              <article key={image.id} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open photo: ${image.caption}`}
                  className="group relative block w-full overflow-hidden bg-brand/5 text-left"
                >
                  <div className={`relative overflow-hidden ${IMAGE_SHAPES[index % IMAGE_SHAPES.length]}`}>
                    <img
                      src={image.enhanced || image.original}
                      alt={image.alt}
                      width="1280"
                      height="720"
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <span className="absolute bottom-3 right-3 block h-28 w-[4.5rem] overflow-hidden rounded-xl border-2 border-white shadow-lg sm:h-32 sm:w-20">
                      <img
                        src={image.original || image.enhanced}
                        alt=""
                        width="360"
                        height="640"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full scale-110 object-cover"
                      />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center bg-brand-deep/0 text-white opacity-0 transition-all duration-200 group-hover:bg-brand-deep/20 group-hover:opacity-100">
                      <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-brand-deep shadow">View photograph</span>
                    </span>
                  </div>
                </button>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-ink-deep">{image.caption}</h3>
                    <p className="mt-1 text-xs text-ink-muted">{image.category}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-surface-warm px-2.5 py-1 text-[11px] font-semibold text-ink-muted">BBS photo</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand"><ShieldCheck aria-hidden="true" className="h-6 w-6" /></span>
            <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-ink-deep sm:text-3xl">Respect, authenticity and pupil privacy come first.</h2>
            <p className="mt-4 leading-7 text-ink-muted">Photographs are presented as supplied by the school. Identifiable pupil images should only be published with school approval and appropriate parent or guardian consent.</p>
            <a href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-brand hover:text-brand-deep">Contact the school <MessageCircle aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/95 p-4 sm:p-8"
          role="presentation"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Photograph viewer: ${selectedImage.caption}`}
            className="relative my-auto w-full max-w-6xl rounded-2xl border border-white/15 bg-[#111711] p-4 text-white shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D8B85B]">{selectedImage.category}</p>
                <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">{selectedImage.caption}</h2>
                <p className="mt-1 text-xs text-white/60">{selectedIndex + 1} of {visibleImages.length}</p>
              </div>
              <button type="button" autoFocus onClick={() => setSelectedIndex(null)} aria-label="Close photograph viewer" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X aria-hidden="true" className="h-5 w-5" /></button>
            </div>
            <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_14rem]">
              <div className="flex min-h-56 items-center justify-center overflow-hidden rounded-xl bg-black/40">
                <img src={selectedImage.enhanced || selectedImage.original} alt={selectedImage.alt} className="max-h-[62vh] w-full object-contain" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">Original photograph</p>
                <img src={selectedImage.original || selectedImage.enhanced} alt={selectedImage.alt} className="max-h-[48vh] w-auto max-w-full rounded-lg object-contain" />
                <p className="text-center text-xs text-white/55">Enhanced landscape version and original frame</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <button type="button" onClick={showPrevious} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronLeft aria-hidden="true" className="h-4 w-4" /> Previous</button>
              <button type="button" onClick={showNext} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Next <ChevronRight aria-hidden="true" className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
