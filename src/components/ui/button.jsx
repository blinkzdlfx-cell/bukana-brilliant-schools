import { cn } from '@/lib/utils.js';

export const buttonVariants = {
  primary:
    'bg-brand text-surface-white px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand-deep transition-colors focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2',
  secondary:
    'bg-surface-white text-brand border border-brand px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand hover:text-surface-white transition-colors focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'bg-transparent text-brand border border-brand px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand hover:text-surface-white transition-colors focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2',
  accent:
    'bg-accent text-ink-deep px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand-deep hover:text-surface-white transition-colors focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2',
};

export function Button({ variant = 'primary', className, disabled, asChild, href, ...props }) {
  const Comp = asChild || href ? 'a' : 'button';
  return (
    <Comp
      className={cn(buttonVariants[variant], className)}
      disabled={disabled}
      href={href}
      {...props}
    />
  );
}
