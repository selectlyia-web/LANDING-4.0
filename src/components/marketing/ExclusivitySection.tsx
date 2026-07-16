import { Badge } from '@components/ui/Badge';
import { Container } from '@components/ui/Container';
import { FadeIn } from '@components/marketing/FadeIn';

/** Ato 6 — a exclusividade. Acesso em ondas: verdade operacional, não escassez falsa. */
export function ExclusivitySection(): React.JSX.Element {
  return (
    <section className="border-t border-border-subtle py-24">
      <Container className="flex flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center gap-5">
          <Badge variant="ai">Convites limitados</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-content-primary sm:text-4xl">
            Os primeiros entram na frente.
          </h2>
          <p className="max-w-lg text-balance text-content-secondary">
            O acesso será liberado em ondas. Quem chega antes, experimenta primeiro — e ajuda a
            definir o que vem depois.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
