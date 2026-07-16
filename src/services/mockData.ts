import { type AlertItem, type PricePoint, type Product, type SavingsSummary } from '@app-types/domain';

/**
 * Dados de demonstração do MVP navegável.
 * Substituídos por dados reais do Supabase a partir do Sprint 2 — os serviços
 * que os consomem mantêm a mesma interface (swap de implementação).
 */

function series(values: readonly number[]): readonly PricePoint[] {
  return values.map((price, index) => ({ date: `2026-0${(index % 6) + 1}-15`, price }));
}

export const mockProducts: readonly Product[] = [
  {
    id: 'p1',
    name: 'Sony WH-1000XM5',
    store: 'Amazon',
    category: 'Eletrônicos',
    currency: 'BRL',
    currentPrice: 1399.9,
    previousPrice: 1999.9,
    history: series([1999.9, 1899.9, 1949.9, 1749.9, 1599.9, 1399.9]),
    decision: {
      score: 96,
      verdict: 'buy',
      label: 'Bom momento',
      reason: 'Menor preço em 12 meses — 30% abaixo da média histórica.',
    },
  },
  {
    id: 'p2',
    name: 'MacBook Air M3',
    store: 'Magalu',
    category: 'Computadores',
    currency: 'BRL',
    currentPrice: 8999.0,
    previousPrice: 8599.0,
    history: series([8599.0, 8699.0, 8499.0, 8799.0, 8899.0, 8999.0]),
    decision: {
      score: 41,
      verdict: 'wait',
      label: 'Espere',
      reason: 'Preço 6% acima da média — costuma cair a cada ~3 semanas.',
    },
  },
  {
    id: 'p3',
    name: 'AirPods Pro 2',
    store: 'Mercado Livre',
    category: 'Eletrônicos',
    currency: 'BRL',
    currentPrice: 1789.0,
    previousPrice: 1849.0,
    history: series([1849.0, 1899.0, 1799.0, 1829.0, 1810.0, 1789.0]),
    decision: {
      score: 72,
      verdict: 'fair',
      label: 'Preço justo',
      reason: 'Dentro da faixa histórica; sem sinal de queda relevante à vista.',
    },
  },
  {
    id: 'p4',
    name: 'Monitor LG UltraWide 34"',
    store: 'Kabum',
    category: 'Computadores',
    currency: 'BRL',
    currentPrice: 2249.9,
    previousPrice: 2599.9,
    history: series([2599.9, 2549.9, 2499.9, 2399.9, 2349.9, 2249.9]),
    decision: {
      score: 88,
      verdict: 'buy',
      label: 'Bom momento',
      reason: '13% abaixo da média e em tendência de queda contínua.',
    },
  },
];

export const mockAlerts: readonly AlertItem[] = [
  {
    id: 'a1',
    kind: 'drop',
    title: 'Queda de preço',
    message: 'Sony WH-1000XM5 caiu R$ 200 — agora no menor preço em 12 meses.',
    time: 'há 2 min',
  },
  {
    id: 'a2',
    kind: 'confirmed',
    title: 'Melhor compra confirmada',
    message: 'Analisamos 47 lojas. A Amazon tem o menor preço verificado hoje.',
    time: 'há 1 h',
  },
  {
    id: 'a3',
    kind: 'stock',
    title: 'Estoque baixo',
    message: 'Monitor LG UltraWide: poucas unidades neste preço.',
    time: 'há 3 h',
  },
  {
    id: 'a4',
    kind: 'increase',
    title: 'Preço subiu',
    message: 'MacBook Air M3 subiu R$ 400 desde sua última visita.',
    time: 'ontem',
  },
];

export const mockSavings: SavingsSummary = {
  total: 847,
  items: [
    { name: 'Sony WH-1000XM5', amount: 120 },
    { name: 'MacBook Pro M3', amount: 399 },
    { name: 'AirPods Pro 2', amount: 60 },
    { name: 'Outros itens (3)', amount: 268 },
  ],
};
