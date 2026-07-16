/**
 * Design Tokens — Selectly (identidade visual oficial)
 *
 * Fonte única de verdade da identidade. Consumidos pelo tailwind.config.ts.
 * Paleta: Onyx #0B0B0C · Electric Blue #2563EB · Slate #717182 · Manrope.
 */

export const colorTokens = {
  // Electric Blue — cor de ação e inteligência. 500 é a primária oficial.
  brand: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#2563EB',
    600: '#1D4ED8',
    700: '#1E40AF',
    800: '#1E3A8A',
    900: '#172554',
  },

  // Superfícies do tema escuro — Onyx como base.
  surface: {
    base: '#0B0B0C',
    raised: '#131316',
    overlay: '#1A1A1E',
    inset: '#050506',
  },

  border: {
    subtle: '#1F1F23',
    default: '#2A2A30',
    strong: '#3A3A42',
  },

  // Texto — Slate #717182 como secundário (identidade oficial).
  content: {
    primary: '#F5F5F7',
    secondary: '#A1A1AC',
    tertiary: '#717182',
    inverted: '#0B0B0C',
  },

  semantic: {
    success: '#22C55E',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#2563EB',
  },
} as const;

export const radiusTokens = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const fontFamilyTokens = {
  // Manrope — tipografia oficial da identidade.
  sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
} as const;
