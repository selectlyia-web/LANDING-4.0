import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { cn } from '@utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'success';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600',
  secondary:
    'border border-border-strong bg-transparent text-content-primary hover:bg-surface-overlay',
  ghost: 'bg-transparent text-brand-400 hover:text-brand-300',
  success: 'bg-success text-content-inverted hover:opacity-90',
};

/** Botão do design system. Variantes mapeadas à identidade oficial. */
export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonProps): React.JSX.Element {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
