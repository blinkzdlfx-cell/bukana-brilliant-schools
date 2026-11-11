import { learningImages } from '@/data/learning-images.js';

export function LearningImageMarquee({ eyebrow, title, description }) {
  const imageGroups = [false, true];

  return (
    <section className="overflow-hidden border-y border-border-soft bg-surface-warm py-14 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">
            {description}
          </p>
        </div>
      </div>

      <div
        className="bbs-image-marquee__viewport mt-8"
        role="region"
        aria-label="Illustrative learning photographs moving from right to left"
        tabIndex={0}
      >
        <div className="bbs-image-marquee__track">
          {imageGroups.map((isDuplicate) => (
            <div
              key={isDuplicate ? 'duplicate-image-set' : 'primary-image-set'}
              className="flex shrink-0 gap-5 pr-5"
              aria-hidden={isDuplicate || undefined}
            >
              {learningImages.map((image, index) => (
                <figure
                  key={image.id}
                  className="group w-[16.5rem] shrink-0 overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm sm:w-[19rem] lg:w-[21rem]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-brand/5">
                    <img
                      src={image.src}
                      alt={isDuplicate ? '' : image.alt}
                      width="1200"
                      height="900"
                      loading={isDuplicate || index > 1 ? 'lazy' : 'eager'}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-sm font-semibold text-ink-deep">{image.caption}</span>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                      Illustrative
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide mt-5 flex flex-col gap-2 text-xs leading-6 text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
        <p className="font-semibold text-ink-deep">
          Illustrative stock photography only. These images do not depict Bukana Brilliant Schools.
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Photo credits:</span>
          {learningImages
            .filter((image, index, images) => images.findIndex((item) => item.photographer === image.photographer) === index)
            .map((image) => (
              <a
                key={image.photographer}
                href={image.creditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline underline-offset-2 hover:text-brand-deep"
              >
                {image.photographer}
              </a>
            ))}
          <a
            href="https://www.pexels.com/license/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand underline underline-offset-2 hover:text-brand-deep"
          >
            Pexels
          </a>
        </div>
      </div>
    </section>
  );
}
