import { type ReactNode } from 'react';

import { cn } from '@utils/cn';

interface CardProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/** Superfície elevada padrão (surface.raised + borda sutil). */
export function Card({ children, className }: CardProps): React.JSX.Element {
  return (
    <div className={cn('rounded-2xl border border-border-subtle bg-surface-raised p-6', className)}>
      {children}
    </div>
  );
}
