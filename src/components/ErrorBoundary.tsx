import { Component, type ErrorInfo, type ReactNode } from 'react';

import { ErrorFallback } from '@components/ErrorFallback';

interface ErrorBoundaryProps {
  readonly children: ReactNode;
  /** UI de fallback opcional; se ausente, usa o ErrorFallback padrão. */
  readonly fallback?: ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
}

/**
 * Barreira de erros de renderização.
 *
 * Isola falhas de uma subárvore de componentes, evitando que um erro derrube a
 * aplicação inteira (tela branca). Precisa ser class component — é o único lugar
 * onde React exige classes (getDerivedStateFromError / componentDidCatch).
 *
 * Em produção, o hook `componentDidCatch` é o ponto natural para enviar o erro a
 * um serviço de observabilidade (Sentry) — a ser conectado quando a
 * observabilidade entrar no roadmap.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Placeholder de observabilidade. Integração real (Sentry) entra no
    // sprint de observabilidade — ver Guia de Arquitetura, seção Observabilidade.
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary]', error, errorInfo.componentStack);
  }

  public override render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? <ErrorFallback />;
    }
    return this.props.children;
  }
}
