import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils.js';
const badgeVariants = cva('inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&>svg]:size-3', {
  variants: {
    variant: {
      default: 'border-transparent bg-brand text-white',
      secondary: 'border-transparent bg-surface-warm text-ink-deep',
      outline: 'border-border-soft text-ink-deep',
      accent: 'border-transparent bg-accent/25 text-ink-deep'
    }
  },
  defaultVariants: { variant: 'default' }
});
function Badge({ className, variant = 'default', ...props }) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}
export { Badge, badgeVariants };
