import { cn } from '@/lib/utils.js';

export function SectionHeading({ title, eyebrow, description, className }) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>}
      {description && (
        <p className="text-lg text-ink-muted text-balance max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
