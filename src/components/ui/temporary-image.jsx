import { Image } from 'lucide-react';

export function TemporaryImage({ alt, category = 'image', width, height }) {
  return (
    <div
      role="img"
      aria-label={alt || `Temporary placeholder for ${category}`}
      className="flex flex-col items-center justify-center w-full h-full bg-surface-warm border border-border-soft rounded-card text-ink-muted text-xs font-medium uppercase tracking-wider overflow-hidden"
      style={{ width, height }}
    >
      <Image className="w-10 h-10 mb-2 opacity-40" />
      <p>Temporary design image &mdash; pending approved school photography</p>
    </div>
  );
}
