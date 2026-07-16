import { useState, type FormEvent } from 'react';

import { FadeIn } from '@components/marketing/FadeIn';
import { Container } from '@components/ui/Container';
import { joinWaitlist } from '@services/waitlistService';

type CaptureStatus = 'idle' | 'loading' | 'success' | 'invalid' | 'failed';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const successCopy: Record<'joined' | 'already_on_list', string> = {
  joined: 'Você está na lista. Em breve, seu convite.',
  already_on_list: 'Você já está na lista. Seu lugar está garantido.',
};

/**
 * Ato 7 — a única ação da página. Todos os CTAs convergem aqui (#acesso).
 * Persiste o lead na tabela `leads` do Supabase via waitlistService (RLS
 * insert-only). Desktop: input + botão inline. Mobile: largura total, empilhados.
 */
export function EmailCaptureSection(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<CaptureStatus>('idle');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (status === 'loading') return;

    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('invalid');
      return;
    }

    setStatus('loading');
    const result = await joinWaitlist(email);

    if (result.success) {
      setSuccessMessage(successCopy[result.data]);
      setStatus('success');
    } else {
      setStatus('failed');
    }
  }

  const hasInlineError = status === 'invalid' || status === 'failed';

  return (
    <section id="acesso" className="scroll-mt-20 border-t border-border-subtle py-28 sm:py-36">
      <Container className="flex max-w-2xl flex-col items-center text-center">
        <FadeIn className="flex w-full flex-col items-center gap-6">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-content-primary sm:text-5xl">
            O futuro das compras começa agora.
          </h2>
          <p className="text-content-secondary">Deixe seu e-mail. Nós cuidamos do resto.</p>

          <div aria-live="polite" className="w-full">
            {status === 'success' ? (
              <p className="rounded-2xl border border-success/30 bg-success/5 px-6 py-5 text-sm font-semibold text-success">
                {successMessage}
              </p>
            ) : (
              <form
                onSubmit={(event) => void handleSubmit(event)}
                noValidate
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1">
                  <label htmlFor="capture-email" className="sr-only">
                    Seu e-mail
                  </label>
                  <input
                    id="capture-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    aria-invalid={hasInlineError}
                    aria-describedby={hasInlineError ? 'capture-error' : undefined}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (hasInlineError) setStatus('idle');
                    }}
                    placeholder="voce@exemplo.com"
                    className="w-full min-h-[48px] rounded-full border border-border-default bg-surface-inset px-6 py-3.5 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'loading' ? 'Enviando…' : 'Seja um dos primeiros'}
                </button>
              </form>
            )}
            {status === 'invalid' && (
              <p id="capture-error" className="mt-3 text-sm font-semibold text-danger">
                Esse e-mail não parece válido. Confira e tente de novo.
              </p>
            )}
            {status === 'failed' && (
              <p id="capture-error" className="mt-3 text-sm font-semibold text-danger">
                Não conseguimos registrar agora. Tente novamente em instantes.
              </p>
            )}
          </div>

          <p className="text-xs text-content-tertiary">Sem spam. Só o essencial.</p>
        </FadeIn>
      </Container>
    </section>
  );
}
