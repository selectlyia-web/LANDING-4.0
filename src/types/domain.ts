/** Tipos de domínio do MVP. Espelharão o schema do banco a partir do Sprint 2. */

export type Verdict = 'buy' | 'wait' | 'fair';

export interface PricePoint {
  readonly date: string;
  readonly price: number;
}

export interface Decision {
  readonly score: number;
  readonly verdict: Verdict;
  readonly label: string;
  readonly reason: string;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly store: string;
  readonly category: string;
  readonly currency: 'BRL';
  readonly currentPrice: number;
  readonly previousPrice: number;
  readonly history: readonly PricePoint[];
  readonly decision: Decision;
}

export type AlertKind = 'drop' | 'confirmed' | 'stock' | 'increase';

export interface AlertItem {
  readonly id: string;
  readonly kind: AlertKind;
  readonly title: string;
  readonly message: string;
  readonly time: string;
}

export interface SavingsSummary {
  readonly total: number;
  readonly items: ReadonlyArray<{ readonly name: string; readonly amount: number }>;
}
