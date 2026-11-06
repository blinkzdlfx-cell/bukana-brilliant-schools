import { cn } from '@/lib/utils.js';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'card-elevated bg-surface-white border border-border-soft rounded-card shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({ className, children }) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardHeader({ className, children }) {
  return <div className={cn('p-6 pb-4', className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return <div className={cn('p-6 pt-4', className)}>{children}</div>;
}
