import { mockAlerts, mockProducts, mockSavings } from '@services/mockData';
import { type AlertItem, type Product, type SavingsSummary } from '@app-types/domain';

/**
 * Serviço de dados do MVP.
 *
 * REGRA DE ARQUITETURA: componentes consomem ESTA interface, nunca a origem do
 * dado. Hoje a implementação é mock; nos Sprints 1–2 ela passa a consultar o
 * Supabase (via @services/supabase) sem que nenhum componente mude.
 */

const NETWORK_DELAY_MS = 350;

function respond<T>(data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), NETWORK_DELAY_MS));
}

export function getProducts(): Promise<readonly Product[]> {
  return respond(mockProducts);
}

export function getAlerts(): Promise<readonly AlertItem[]> {
  return respond(mockAlerts);
}

export function getSavings(): Promise<SavingsSummary> {
  return respond(mockSavings);
}
