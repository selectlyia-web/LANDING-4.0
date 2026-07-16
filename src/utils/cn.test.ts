import { describe, expect, it } from 'vitest';

import { cn } from '@utils/cn';

// Smoke test: valida que a infraestrutura de testes está operacional e que o
// utilitário base de composição de classes se comporta como esperado.
// (Sem lógica de negócio no Sprint 0 — este é o único teste, proposital.)
describe('cn', () => {
  it('combina classes simples', () => {
    expect(cn('px-2', 'py-1')).toBe('px-2 py-1');
  });

  it('resolve conflitos do Tailwind mantendo a última classe', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('aplica classes condicionais', () => {
    expect(cn('base', { active: true, hidden: false })).toBe('base active');
  });
});
