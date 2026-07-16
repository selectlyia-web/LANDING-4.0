import { type ReactNode } from 'react';

import { cn } from '@utils/cn';

type BadgeVariant = 'ai' | 'success' | 'warning' | 'danger' | 'neutral';

const variantClasses: Record<BadgeVariant, string> = {
  ai: 'bg-brand-500/15 text-brand-400',
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-warning',
  danger: 'bg-danger/15 text-danger',
  neutral: 'bg-surface-overlay text-content-secondary',
};

interface BadgeProps {
  readonly variant?: BadgeVariant;
  readonly children: ReactNode;
  readonly className?: string;
}

/** Rótulo de status (AI PICK, BEST PRICE...) — identidade das badges oficiais. */
export function Badge({ variant = 'neutral', children, className }: BadgeProps): React.JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
