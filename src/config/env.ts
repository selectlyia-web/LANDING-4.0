/**
 * Validação de ambiente — tipada, com fail-fast LAZY.
 *
 * O MVP navegável roda 100% sobre dados mock e não exige Supabase configurado.
 * Por isso a validação acontece no PRIMEIRO USO do Supabase (getSupabaseEnv),
 * não na inicialização — o app abre sem .env, mas qualquer código que tente
 * usar o Supabase sem configuração falha imediatamente com mensagem clara.
 *
 * SEGURANÇA: apenas variáveis `VITE_` (públicas). A anon key é protegida por
 * RLS. Chaves secretas JAMAIS entram no frontend — ver ADR-012.
 */

interface SupabaseEnv {
  readonly supabaseUrl: string;
  readonly supabaseAnonKey: string;
}

class EnvironmentValidationError extends Error {
  constructor(missingKeys: readonly string[]) {
    super(
      `Configuração de ambiente inválida. Variáveis ausentes: ${missingKeys.join(', ')}. ` +
        'Copie .env.example para .env e preencha os valores do seu projeto Supabase.',
    );
    this.name = 'EnvironmentValidationError';
  }
}

function readOptional(raw: string | undefined): string | null {
  return typeof raw === 'string' && raw.trim().length > 0 ? raw : null;
}

/** Valida e retorna as variáveis do Supabase. Lança erro claro se ausentes. */
export function getSupabaseEnv(): SupabaseEnv {
  const supabaseUrl = readOptional(import.meta.env.VITE_SUPABASE_URL);
  const supabaseAnonKey = readOptional(import.meta.env.VITE_SUPABASE_ANON_KEY);

  const missing: string[] = [];
  if (supabaseUrl === null) missing.push('VITE_SUPABASE_URL');
  if (supabaseAnonKey === null) missing.push('VITE_SUPABASE_ANON_KEY');

  if (supabaseUrl === null || supabaseAnonKey === null) {
    throw new EnvironmentValidationError(missing);
  }

  return { supabaseUrl, supabaseAnonKey };
}

export const appEnv: 'development' | 'production' | 'test' =
  import.meta.env.MODE === 'production'
    ? 'production'
    : import.meta.env.MODE === 'test'
      ? 'test'
      : 'development';
