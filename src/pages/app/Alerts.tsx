import { useAsyncData } from '@hooks/useAsyncData';
import { getAlerts } from '@services/dataService';
import { type AlertKind } from '@app-types/domain';
import { cn } from '@utils/cn';

const kindStyles: Record<AlertKind, { container: string; title: string }> = {
  drop: { container: 'border-brand-500/30 bg-brand-500/5', title: 'text-brand-400' },
  confirmed: { container: 'border-success/30 bg-success/5', title: 'text-success' },
  stock: { container: 'border-warning/30 bg-warning/5', title: 'text-warning' },
  increase: { container: 'border-danger/30 bg-danger/5', title: 'text-danger' },
};

/** Central de alertas e notificações, com cores semânticas da identidade. */
export function Alerts(): React.JSX.Element {
  const { data, loading } = useAsyncData(getAlerts);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <header>
        <h1 className="text-2xl font-extrabold text-content-primary">Alertas</h1>
        <p className="mt-1 text-sm text-content-secondary">
          O que mudou nos produtos que você acompanha.
        </p>
      </header>

      <div className="flex flex-col gap-3" role="list">
        {loading && <p className="text-sm text-content-tertiary">Carregando alertas…</p>}
        {data?.map((alert) => {
          const style = kindStyles[alert.kind];
          return (
            <article
              key={alert.id}
              role="listitem"
              className={cn('rounded-2xl border px-6 py-4', style.container)}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className={cn('text-sm font-bold', style.title)}>{alert.title}</h2>
                <span className="shrink-0 text-xs text-content-tertiary">{alert.time}</span>
              </div>
              <p className="mt-1 text-sm text-content-secondary">{alert.message}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
