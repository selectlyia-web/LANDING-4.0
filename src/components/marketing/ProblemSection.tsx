import { Container } from '@components/ui/Container';
import { FadeIn } from '@components/marketing/FadeIn';

const frictions = [
  'Dezenas de grupos de ofertas.',
  'Centenas de notificações.',
  'Cupons que expiram sem aviso.',
  'A compra feita na hora errada.',
] as const;

/** Ato 2 — o reconhecimento. O esforço atual, dito com elegância, sem drama. */
export function ProblemSection(): React.JSX.Element {
  return (
    <section className="border-t border-border-subtle py-24">
      <Container>
        <FadeIn>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-content-primary sm:text-4xl">
            Comprar bem virou trabalho.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {frictions.map((friction, index) => (
            <FadeIn key={friction} delay={index * 0.08}>
              <div className="rounded-2xl border border-border-subtle bg-surface-raised px-6 py-8">
                <p className="text-base font-semibold text-content-secondary">{friction}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="mt-12 text-lg font-semibold text-content-primary">
            Não deveria ser assim.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
