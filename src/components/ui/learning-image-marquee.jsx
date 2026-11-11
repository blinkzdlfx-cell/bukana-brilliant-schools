import { schoolImages } from '@/data/learning-images.js';

export function LearningImageMarquee({ eyebrow, title, description }) {
  const imageGroups = [false, true];

  return (
    <section className="overflow-hidden border-y border-border-soft bg-surface-warm py-14 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">{description}</p>
        </div>
      </div>
      <div className="bbs-image-marquee__viewport mt-8" role="region" aria-label="Photographs of Bukana Brilliant Schools" tabIndex={0}>
        <div className="bbs-image-marquee__track">
          {imageGroups.map((isDuplicate) => (
            <div key={isDuplicate ? 'duplicate-image-set' : 'primary-image-set'} className="flex shrink-0 gap-5 pr-5" aria-hidden={isDuplicate || undefined}>
              {schoolImages.map((image, index) => (
                <figure key={image.id} className="group w-[21rem] shrink-0 overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm sm:w-[25rem] lg:w-[28rem]">
                  <div className="grid grid-cols-[1fr_6.5rem] gap-1.5 bg-brand/5 p-1.5 sm:grid-cols-[1fr_7.5rem]">
                    <div className="aspect-video overflow-hidden rounded-xl bg-brand/10">
                      <img src={image.enhanced} alt={isDuplicate ? '' : image.alt} width="1280" height="720" loading={isDuplicate || index > 1 ? 'lazy' : 'eager'} decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    </div>
                    <div className="aspect-[9/16] overflow-hidden rounded-xl bg-brand/10">
                      <img src={image.original} alt="" width="360" height="640" loading="lazy" decoding="async" className="h-full w-full scale-[1.16] object-cover transition-transform duration-700 group-hover:scale-[1.23]" />
                    </div>
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-semibold text-ink-deep">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="container-wide mt-5 text-xs leading-6 text-ink-muted">Official school photographs supplied for Bukana Brilliant Schools. Original portraits are shown alongside their enhanced 16:9 versions.</p>
    </section>
  );
}
