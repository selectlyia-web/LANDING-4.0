import { BrandMark } from '@components/ui/BrandMark';
import { Container } from '@components/ui/Container';
import { FadeIn } from '@components/marketing/FadeIn';

/** Ato 3 — a revelação. Mostra QUE a Selectly existe; não mostra COMO funciona. */
export function RevealSection(): React.JSX.Element {
  return (
    <section className="border-t border-border-subtle py-28 sm:py-36">
      <Container className="flex flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center gap-6">
          <BrandMark />
          <h2 className="text-3xl font-extrabold tracking-tight text-content-primary sm:text-5xl">
            Conheça a Selectly.
          </h2>
          <p className="max-w-xl text-balance text-lg text-content-secondary">
            Uma inteligência criada para um único propósito: a decisão de compra perfeita.
          </p>
          <p className="text-sm text-content-tertiary">
            Ela observa o mercado. Você vive a sua vida.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
