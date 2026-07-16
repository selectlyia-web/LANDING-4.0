import { type ReactNode } from 'react';

import { cn } from '@utils/cn';

interface ContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
  /** Elemento HTML semântico a renderizar. Padrão: `div`. */
  readonly as?: 'div' | 'section' | 'main' | 'header' | 'footer';
}

/**
 * Container de largura máxima e centralização, com padding responsivo.
 *
 * Componente de layout puro e reutilizável — não conhece nenhuma página.
 * Centraliza a regra de "largura de conteúdo" do produto em um só lugar.
 */
export function Container({ children, className, as = 'div' }: ContainerProps): React.JSX.Element {
  const Element = as;
  return (
    <Element className={cn('mx-auto w-full max-w-6xl px-6 sm:px-8', className)}>{children}</Element>
  );
}
