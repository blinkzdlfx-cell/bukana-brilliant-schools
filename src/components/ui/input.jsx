import { cn } from '@/lib/utils.js';
function Input({ className, type = 'text', ...props }) {
  return <input type={type} data-slot="input" className={cn('file:text-foreground placeholder:text-ink-muted selection:bg-brand selection:text-white border-border-soft h-12 w-full min-w-0 rounded-md border bg-white px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-brand focus-visible:ring-brand/30 focus-visible:ring-[3px] aria-invalid:border-red-700 aria-invalid:ring-red-700/20', className)} {...props} />;
}
export { Input };
