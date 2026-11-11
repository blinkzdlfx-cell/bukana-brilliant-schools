import { schoolImages } from '@/data/learning-images.js';

export function LearningImageMarquee({ eyebrow, title, description }) {
  return (
    <section className="border-y border-border-soft bg-surface-warm py-14 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">{description}</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schoolImages.map((image) => (
            <figure key={image.id} className="group overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm">
              <div className="aspect-video overflow-hidden bg-brand/5">
                <img src={image.enhanced} alt={image.alt} width="1280" height="720" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-ink-deep">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-ink-muted">Official school photographs supplied for Bukana Brilliant Schools. Images are presented in a simple gallery layout.</p>
      </div>
    </section>
  );
}
