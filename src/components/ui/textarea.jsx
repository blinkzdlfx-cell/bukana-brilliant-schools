import { cn } from '@/lib/utils.js';
function Textarea({ className, ...props }) {
  return <textarea data-slot="textarea" className={cn('border-border-soft placeholder:text-ink-muted focus-visible:border-brand focus-visible:ring-brand/30 aria-invalid:border-red-700 aria-invalid:ring-red-700/20 flex min-h-28 w-full min-w-0 rounded-md border bg-white px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className)} {...props} />;
}
export { Textarea };
