import { Badge } from '@components/ui/Badge';
import { Container } from '@components/ui/Container';
import { FadeIn } from '@components/marketing/FadeIn';

/** Ato 1 — a promessa. Headline da marca, suspense, um destino: #acesso. */
export function HeroSection(): React.JSX.Element {
  return (
    <section className="flex min-h-[88vh] items-center py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center gap-7">
          <Badge variant="ai">Acesso antecipado</Badge>
          <h1 className="max-w-4xl text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-content-primary sm:text-7xl">
            Não pesquise.
            <br className="sm:hidden" /> <span className="text-brand-500">Escolha.</span>
          </h1>
          <p className="max-w-md text-balance text-lg text-content-secondary sm:max-w-xl">
            Uma nova forma de comprar está chegando. Silenciosa, precisa — e feita para decidir
            por você.
          </p>
          <div className="mt-2 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#acesso"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
            >
              Pedir acesso
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-content-secondary transition-colors hover:text-content-primary sm:w-auto"
            >
              Como funciona
            </a>
          </div>
          <p className="text-xs text-content-tertiary">Convites limitados. Sem spam.</p>
        </FadeIn>
      </Container>
    </section>
  );
}
