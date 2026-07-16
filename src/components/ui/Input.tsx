import { useId, type InputHTMLAttributes } from 'react';

import { cn } from '@utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
}

/** Campo de texto com label acessível (identidade: labels uppercase discretas). */
export function Input({ label, className, id, ...rest }: InputProps): React.JSX.Element {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-[11px] font-bold uppercase tracking-wider text-content-tertiary"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          'w-full rounded-xl border border-border-default bg-surface-inset px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-500 focus:outline-none',
          className,
        )}
        {...rest}
      />
    </div>
  );
}
