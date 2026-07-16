import { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { AuthProvider } from '@contexts/AuthContext';

interface AppProvidersProps {
  readonly children: ReactNode;
}

/** Composição central de providers globais (ordem: erros → auth → rotas). */
export function AppProviders({ children }: AppProvidersProps): React.JSX.Element {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}
