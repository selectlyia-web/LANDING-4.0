import { getSupabaseClient } from '@services/supabase';
import { err, ok, type Result } from '@app-types/index';

/**
 * Serviço da lista de espera.
 */
export type WaitlistOutcome = 'joined' | 'already_on_list';

const POSTGRES_UNIQUE_VIOLATION = '23505';

export async function joinWaitlist(
  rawEmail: string
): Promise<Result<WaitlistOutcome>> {
  const email = rawEmail.trim().toLowerCase();

  try {
    const supabase = getSupabaseClient();

    const { error } = await supabase
      .from('waitlist')
      .insert({ email });

    if (!error) {
      return ok('joined');
    }

    if (error.code === POSTGRES_UNIQUE_VIOLATION) {
      return ok('already_on_list');
    }

    return err(new Error(error.message));
  } catch (cause) {
    console.error(cause);

    return err(
      cause instanceof Error
        ? cause
        : new Error('Falha ao entrar na lista.')
    );
  }
}