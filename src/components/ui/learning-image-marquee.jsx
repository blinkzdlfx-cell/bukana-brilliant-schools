import { schoolImages } from '@/data/learning-images.js';
import { OptimizedImage } from '@/components/ui/optimized-image.jsx';

function ImageCard({ image }) {
  return (
    <figure className="w-[min(76vw,19rem)] shrink-0 overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm sm:w-[22rem]">
      <div className="aspect-video overflow-hidden bg-brand/5">
        <OptimizedImage src={image.enhanced} optimized={image.optimized.enhanced} alt={image.alt} width={1280} height={720} sizes="(max-width: 640px) 85vw, 24rem" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <figcaption className="px-4 py-3 text-sm font-semibold text-ink-deep">{image.caption}</figcaption>
    </figure>
  );
}

export function LearningImageMarquee({ eyebrow, title, description }) {
  const repeatedImages = [...schoolImages, ...schoolImages];

  return (
    <section className="overflow-hidden border-y border-border-soft bg-surface-warm py-14 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">{description}</p>
        </div>
      </div>
      <div className="bbs-image-marquee__viewport mt-8" tabIndex={0} role="region" aria-label="Scrolling gallery of Bukana Brilliant Schools photographs">
        <div className="bbs-image-marquee__track gap-4 px-4 sm:gap-5 sm:px-6">
          {repeatedImages.map((image, index) => (
            <div key={image.id + (index >= schoolImages.length ? '-duplicate' : '')} aria-hidden={index >= schoolImages.length || undefined}>
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      </div>
      <p className="container-wide mt-5 text-xs leading-6 text-ink-muted">Official school photographs supplied for Bukana Brilliant Schools. Pause the movement by hovering over the gallery or focusing it with the keyboard.</p>
    </section>
  );
}
