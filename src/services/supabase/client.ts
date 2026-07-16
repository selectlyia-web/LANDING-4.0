import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { getSupabaseEnv } from '@config/env';

/**
 * Cliente Supabase — singleton LAZY.
 *
 * REGRA (ADR-012): único ponto do frontend que instancia o Supabase; todo
 * acesso passa pela camada services/. Instanciação lazy: o MVP mock não exige
 * .env; o cliente só é criado (e o ambiente validado) no primeiro uso real —
 * a partir do Sprint 1 (auth) em diante.
 */
let instance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (instance === null) {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseEnv();
    instance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return instance;
}
