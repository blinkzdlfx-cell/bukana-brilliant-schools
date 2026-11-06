import { cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils.js';

export const buttonVariants = {
  primary:
    'bg-brand text-surface-white px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand-deep transition-all duration-200 active:translate-y-px focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2',
  secondary:
    'bg-surface-white text-brand border border-brand px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand hover:text-surface-white transition-all duration-200 active:translate-y-px focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'bg-transparent text-brand border border-brand px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand hover:text-surface-white transition-all duration-200 active:translate-y-px focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2',
  accent:
    'bg-accent text-ink-deep px-5 py-3 rounded-button font-semibold text-base shadow-sm hover:bg-brand-deep hover:text-surface-white transition-all duration-200 active:translate-y-px focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2',
};

export function Button({ variant = 'primary', className, disabled, asChild = false, href, children, ...props }) {
  const classes = cn('inline-flex items-center justify-center gap-2 text-center align-middle', buttonVariants[variant], className);

  if (asChild) {
    if (!isValidElement(children)) {
      throw new Error('Button with asChild requires exactly one valid child element.');
    }

    return cloneElement(children, {
      ...props,
      ...children.props,
      className: cn(classes, children.props.className),
      href: href ?? children.props.href,
      disabled: disabled ?? children.props.disabled,
    });
  }

  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      className={classes}
      {...props}
      {...(href ? { href } : { disabled })}
      aria-disabled={disabled && href ? true : undefined}
    >
      {children}
    </Comp>
  );
}
