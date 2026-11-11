import { cloneElement, isValidElement } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils.js';

export const buttonVariants = cva('inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
  variants: {
    variant: {
      default: 'bg-brand text-white shadow-sm hover:bg-brand-deep',
      primary: 'bg-brand text-white shadow-sm hover:bg-brand-deep',
      destructive: 'bg-red-700 text-white hover:bg-red-800',
      outline: 'border border-border-soft bg-transparent text-ink-deep shadow-sm hover:bg-surface-warm',
      secondary: 'border border-white/50 bg-white/10 text-white hover:bg-white hover:text-brand-deep',
      ghost: 'text-ink-deep hover:bg-surface-warm hover:text-brand-deep',
      link: 'text-brand underline-offset-4 hover:underline',
      accent: 'bg-accent text-ink-deep shadow-sm hover:brightness-95'
    },
    size: { default: 'h-10 px-4 py-2', sm: 'h-9 rounded-md px-3', lg: 'h-11 rounded-md px-8', icon: 'size-10' }
  },
  defaultVariants: { variant: 'default', size: 'default' }
});
export function Button({ className, variant = 'default', size = 'default', asChild = false, href, children, disabled, type = 'button', ...props }) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (asChild) {
    if (!isValidElement(children)) throw new Error('Button with asChild requires exactly one valid child element.');
    return cloneElement(children, { ...props, ...children.props, className: cn(classes, children.props.className), href: href ?? children.props.href, disabled: disabled ?? children.props.disabled });
  }
  const Component = href ? 'a' : 'button';
  return <Component className={classes} {...props} {...(href ? { href, 'aria-disabled': disabled || undefined, tabIndex: disabled ? -1 : props.tabIndex } : { type, disabled })}>{children}</Component>;
}
