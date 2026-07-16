/** Constantes globais. Strings mágicas centralizadas, tipadas e reutilizáveis. */

export const APP = {
  name: 'Selectly',
  tagline: 'A inteligência por trás da melhor compra.',
} as const;

export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/cadastro',
  dashboard: '/app',
  products: '/app/produtos',
  alerts: '/app/alertas',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
