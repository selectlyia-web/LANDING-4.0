import { Container } from '@components/ui/Container';
import { FadeIn } from '@components/marketing/FadeIn';

const transforms = [
  { before: 'Você procura ofertas.', after: 'As ofertas encontram você.' },
  { before: 'Você compara por horas.', after: 'Você decide em segundos.' },
  { before: 'Você espera o desconto.', after: 'A Selectly avisa a hora exata.' },
] as const;

/** Ato 5 — o desejo. Transformações, não funcionalidades. */
export function TransformSection(): React.JSX.Element {
  return (
    <section id="beneficios" className="scroll-mt-20 border-t border-border-subtle py-24">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-extrabold tracking-tight text-content-primary sm:text-4xl">
            A diferença que você sente.
          </h2>
        </FadeIn>
        <div className="mt-12 flex flex-col gap-4">
          {transforms.map((item, index) => (
            <FadeIn key={item.before} delay={index * 0.08}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border-subtle bg-surface-raised px-6 py-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-content-tertiary">
                    Antes
                  </p>
                  <p className="mt-2 text-base font-semibold text-content-secondary">
                    {item.before}
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-500/30 bg-brand-500/5 px-6 py-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-400">
                    Depois
                  </p>
                  <p className="mt-2 text-base font-semibold text-content-primary">{item.after}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
