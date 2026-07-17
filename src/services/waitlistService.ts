import { getSupabaseClient } from '@services/supabase';
import { err, ok, type Result } from '@app-types/index';

/**
 * Serviço da lista de espera — integração real com o Supabase.
 *
 * Grava na tabela `waitlist` (a mesma lida pelo Painel Administrativo).
 * Protegida por RLS: a anon key só INSERE; a leitura é restrita.
 * Retorna Result (nunca lança): a UI trata cada desfecho, inclusive
 * ambiente sem Supabase configurado (erro claro, sem crash).
 */

export type WaitlistOutcome = 'joined' | 'already_on_list';

const POSTGRES_UNIQUE_VIOLATION = '23505';

export async function joinWaitlist(rawEmail: string): Promise<Result<WaitlistOutcome>> {
  const email = rawEmail.trim().toLowerCase();

  try {
  const supabase = getSupabaseClient();

  const { error } = await supabase
    .from("waitlist")
    .insert({ email });

  if (error === null) {
    return ok("joined");
  }

  if (error.code === POSTGRES_UNIQUE_VIOLATION) {
    return ok("already_on_list");
  }

  return err(new Error(error.message));
} catch (cause) {
  console.error(cause);

  return err(
    cause instanceof Error
      ? cause
      : new Error("Falha ao entrar na lista.")
  );
}