/** Formatação de moeda. Centralizada para consistência e futura i18n (multi-moeda). */
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export function formatBRL(value: number): string {
  return brl.format(value);
}
