import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Compõe classes Tailwind de forma segura.
 *
 * - `clsx` resolve condicionais (`{ 'text-red': isError }`).
 * - `twMerge` resolve conflitos (`px-2 px-4` → `px-4`), permitindo que
 *   componentes recebam overrides via prop `className` sem duplicar estilo.
 *
 * É a base de todo componente de UI: nenhum estilo é repetido, e a
 * customização por consumidor é previsível.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
