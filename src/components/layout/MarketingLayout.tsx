import { Link, Outlet } from 'react-router-dom';

import { BrandMark } from '@components/ui/BrandMark';
import { Container } from '@components/ui/Container';
import { APP, ROUTES } from '@config/constants';

/** Layout público: header mínimo convergindo para #acesso + footer discreto. */
export function MarketingLayout(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-surface-base">
      <header className="sticky top-0 z-10 border-b border-border-subtle bg-surface-base/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link to={ROUTES.home} className="flex items-center gap-3">
            <BrandMark size="sm" />
            <span className="text-base font-bold tracking-tight text-content-primary">
              {APP.name}
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            <a
              href="#como-funciona"
              className="text-sm text-content-secondary transition-colors hover:text-content-primary"
            >
              Como funciona
            </a>
            <a
              href="#beneficios"
              className="text-sm text-content-secondary transition-colors hover:text-content-primary"
            >
              Benefícios
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to={ROUTES.login}
              className="text-sm font-semibold text-content-secondary transition-colors hover:text-content-primary"
            >
              Entrar
            </Link>
            <a
              href="#acesso"
              className="hidden min-h-[40px] items-center justify-center rounded-full bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 md:inline-flex"
            >
              Acesso antecipado
            </a>
          </div>
        </Container>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border-subtle py-10">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <BrandMark size="sm" />
            <span className="text-sm text-content-tertiary">
              © 2026 {APP.name}. {APP.tagline}
            </span>
          </div>
          <a
            href="#acesso"
            className="text-sm text-content-tertiary transition-colors hover:text-content-secondary"
          >
            Acesso antecipado
          </a>
        </Container>
      </footer>
    </div>
  );
}
