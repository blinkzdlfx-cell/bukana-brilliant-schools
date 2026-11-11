import { cn } from '@/lib/utils.js';
function Card({ className, ...props }) { return <div data-slot="card" className={cn('rounded-xl border border-border-soft bg-card text-card-foreground shadow-sm', className)} {...props} />; }
function CardHeader({ className, ...props }) { return <div data-slot="card-header" className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />; }
function CardTitle({ className, ...props }) { return <h3 data-slot="card-title" className={cn('font-semibold leading-none tracking-tight', className)} {...props} />; }
function CardDescription({ className, ...props }) { return <p data-slot="card-description" className={cn('text-sm text-ink-muted', className)} {...props} />; }
function CardContent({ className, ...props }) { return <div data-slot="card-content" className={cn('p-6 pt-0', className)} {...props} />; }
function CardFooter({ className, ...props }) { return <div data-slot="card-footer" className={cn('flex items-center p-6 pt-0', className)} {...props} />; }
const CardBody = CardContent;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardBody };
