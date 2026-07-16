import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '@components/auth/ProtectedRoute';
import { AppLayout } from '@components/layout/AppLayout';
import { MarketingLayout } from '@components/layout/MarketingLayout';
import { ROUTES } from '@config/constants';

// Lazy loading + code splitting: cada página é um chunk carregado sob demanda.
const Landing = lazy(() =>
  import('@pages/marketing/Landing').then((m) => ({ default: m.Landing })),
);
const Login = lazy(() => import('@pages/auth/Login').then((m) => ({ default: m.Login })));
const Signup = lazy(() => import('@pages/auth/Signup').then((m) => ({ default: m.Signup })));
const Dashboard = lazy(() =>
  import('@pages/app/Dashboard').then((m) => ({ default: m.Dashboard })),
);
const Products = lazy(() => import('@pages/app/Products').then((m) => ({ default: m.Products })));
const Alerts = lazy(() => import('@pages/app/Alerts').then((m) => ({ default: m.Alerts })));

function RouteFallback(): React.JSX.Element {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[70vh] items-center justify-center">
      <span className="sr-only">Carregando</span>
      <span
        aria-hidden="true"
        className="h-6 w-6 animate-spin rounded-full border-2 border-border-strong border-t-brand-500"
      />
    </div>
  );
}

/** Árvore de rotas: pública (marketing), auth e área protegida da aplicação. */
export function AppRoutes(): React.JSX.Element {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path={ROUTES.home} element={<Landing />} />
        </Route>

        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.signup} element={<Signup />} />

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path={ROUTES.dashboard} element={<Dashboard />} />
          <Route path={ROUTES.products} element={<Products />} />
          <Route path={ROUTES.alerts} element={<Alerts />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
