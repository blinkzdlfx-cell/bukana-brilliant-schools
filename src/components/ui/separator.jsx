import { cn } from '@/lib/utils.js';
function Separator({ className, orientation = 'horizontal', decorative = true, ...props }) {
  return <div data-slot="separator" role={decorative ? 'none' : 'separator'} aria-orientation={decorative ? undefined : orientation} data-orientation={orientation} className={cn('shrink-0 bg-border-soft', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)} {...props} />;
}
export { Separator };
