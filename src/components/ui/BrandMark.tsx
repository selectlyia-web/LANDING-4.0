import { cn } from '@utils/cn';

interface BrandMarkProps {
  readonly size?: 'sm' | 'md';
  readonly className?: string;
}

/** Marca da Selectly: tile com "S" e ponto azul (identidade oficial do app icon). */
export function BrandMark({ size = 'md', className }: BrandMarkProps): React.JSX.Element {
  const dimensions = size === 'sm' ? 'h-7 w-7 text-sm' : 'h-9 w-9 text-lg';
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl bg-content-primary font-extrabold text-surface-base',
        dimensions,
        className,
      )}
    >
      S
      <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
    </span>
  );
}
