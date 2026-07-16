import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

interface FadeInProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly className?: string;
}

/**
 * Animação padrão da landing: fade + leve subida ao entrar no viewport, uma vez.
 * Respeita prefers-reduced-motion (acessibilidade): sem movimento quando ativo.
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps): React.JSX.Element {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
