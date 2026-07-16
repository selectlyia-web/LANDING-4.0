import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@config/constants';
import { useAuth } from '@contexts/AuthContext';

/** Redireciona visitantes não autenticados para o login. */
export function ProtectedRoute({ children }: { readonly children: ReactNode }): React.JSX.Element {
  const { user } = useAuth();
  if (user === null) {
    return <Navigate to={ROUTES.login} replace />;
  }
  return <>{children}</>;
}
