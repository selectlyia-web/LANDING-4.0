import type { Config } from 'tailwindcss';

import {
  colorTokens,
  fontFamilyTokens,
  radiusTokens,
} from './src/styles/tokens';

// O Tailwind é apenas o "consumidor" dos tokens. Toda a identidade vive em
// src/styles/tokens.ts (fonte única de verdade). Aqui só mapeamos.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class', // tema escuro é o padrão da app (classe aplicada no <html>)
  theme: {
    extend: {
      colors: {
        brand: colorTokens.brand,
        surface: colorTokens.surface,
        border: colorTokens.border,
        content: colorTokens.content,
        success: colorTokens.semantic.success,
        warning: colorTokens.semantic.warning,
        danger: colorTokens.semantic.danger,
        info: colorTokens.semantic.info,
      },
      borderRadius: radiusTokens,
      fontFamily: {
        sans: [...fontFamilyTokens.sans],
        mono: [...fontFamilyTokens.mono],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
