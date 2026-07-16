import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { BrandMark } from '@components/ui/BrandMark';
import { APP, ROUTES } from '@config/constants';
import { useAuth } from '@contexts/AuthContext';
import { cn } from '@utils/cn';

const navItems = [
  { to: ROUTES.dashboard, label: 'Dashboard', end: true },
  { to: ROUTES.products, label: 'Produtos', end: false },
  { to: ROUTES.alerts, label: 'Alertas', end: false },
] as const;

/** Layout autenticado: sidebar (desktop) / topo (mobile), conteúdo via Outlet. */
export function AppLayout(): React.JSX.Element {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut(): void {
    signOut();
    navigate(ROUTES.home);
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface-base md:flex-row">
      <aside className="flex items-center justify-between border-b border-border-subtle px-4 py-3 md:w-60 md:flex-col md:items-stretch md:justify-start md:border-b-0 md:border-r md:px-4 md:py-6">
        <div className="flex items-center gap-3 md:mb-8 md:px-2">
          <BrandMark size="sm" />
          <span className="text-base font-bold tracking-tight text-content-primary">
            {APP.name}
          </span>
        </div>

        <nav aria-label="Aplicação" className="flex gap-1 md:flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-brand-500/15 text-brand-400'
                    : 'text-content-secondary hover:bg-surface-overlay hover:text-content-primary',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:mt-auto md:border-t md:border-border-subtle md:pt-4">
          <p className="hidden truncate px-2 text-xs text-content-tertiary md:block">
            {user?.email}
          </p>
          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-content-secondary hover:text-danger md:mt-1"
          >
            Sair
          </button>
        </div>
      </aside>

      <main className="flex-1 px-4 py-8 sm:px-8">
        <Outlet />
      </main>
    </div>
  );
}
