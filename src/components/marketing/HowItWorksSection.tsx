import { Container } from '@components/ui/Container';
import { FadeIn } from '@components/marketing/FadeIn';

const steps = [
  { title: 'Diga o que deseja comprar.', description: 'Em linguagem natural. Como falaria com alguém de confiança.' },
  { title: 'A IA analisa milhares de sinais.', description: 'Preços, histórico, lojas, cupons e o momento do mercado.' },
  { title: 'Você recebe o momento certo.', description: 'Uma decisão clara. Não uma lista de links.' },
] as const;

/** Ato 4 — o alívio. Três passos, zero jargão. */
export function HowItWorksSection(): React.JSX.Element {
  return (
    <section id="como-funciona" className="scroll-mt-20 border-t border-border-subtle py-24">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-extrabold tracking-tight text-content-primary sm:text-4xl">
            Simples assim.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-raised p-8">
                <span className="text-sm font-extrabold text-brand-500">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-content-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
