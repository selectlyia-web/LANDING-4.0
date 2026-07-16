import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { Card } from '@components/ui/Card';
import { useAuth } from '@contexts/AuthContext';
import { useAsyncData } from '@hooks/useAsyncData';
import { getProducts, getSavings } from '@services/dataService';
import { formatBRL } from '@utils/currency';

/** Visão geral: economia, produtos monitorados e a recomendação do momento. */
export function Dashboard(): React.JSX.Element {
  const { user } = useAuth();
  const products = useAsyncData(getProducts);
  const savings = useAsyncData(getSavings);

  const featured = products.data?.find((product) => product.decision.verdict === 'buy') ?? null;
  const buyCount = products.data?.filter((p) => p.decision.verdict === 'buy').length ?? 0;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <header>
        <h1 className="text-2xl font-extrabold text-content-primary">Dashboard</h1>
        <p className="mt-1 text-sm text-content-secondary">
          Olá, {user?.email}. Aqui está o resumo das suas compras inteligentes.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-[11px] font-bold uppercase tracking-wider text-success">
            Economia total
          </p>
          <p className="mt-2 text-3xl font-extrabold text-content-primary">
            {savings.loading ? '—' : formatBRL(savings.data?.total ?? 0)}
          </p>
          <p className="mt-1 text-xs text-content-tertiary">Neste mês, em 6 compras</p>
        </Card>
        <Card>
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-400">
            Produtos monitorados
          </p>
          <p className="mt-2 text-3xl font-extrabold text-content-primary">
            {products.loading ? '—' : products.data?.length}
          </p>
          <p className="mt-1 text-xs text-content-tertiary">Atualizados continuamente</p>
        </Card>
        <Card>
          <p className="text-[11px] font-bold uppercase tracking-wider text-content-tertiary">
            Bons momentos agora
          </p>
          <p className="mt-2 text-3xl font-extrabold text-content-primary">
            {products.loading ? '—' : buyCount}
          </p>
          <p className="mt-1 text-xs text-content-tertiary">Produtos com veredito de compra</p>
        </Card>
      </div>

      {featured !== null && (
        <Card>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="ai">Recomendação da IA</Badge>
                <Badge variant="success">Melhor valor</Badge>
              </div>
              <h2 className="mt-4 text-xl font-bold text-content-primary">{featured.name}</h2>
              <p className="mt-1 text-sm text-content-secondary">{featured.store}</p>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-content-primary">
                  {formatBRL(featured.currentPrice)}
                </span>
                <span className="text-sm text-content-tertiary line-through">
                  {formatBRL(featured.previousPrice)}
                </span>
              </div>
              <p className="mt-3 text-sm text-content-secondary">{featured.decision.reason}</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-brand-500 text-white">
                <span className="text-3xl font-extrabold leading-none">
                  {featured.decision.score}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider">score</span>
              </div>
              <span className="text-[10px] text-content-tertiary">Selectly Decision</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="flex-1 sm:flex-none">Selecionar — comprar na {featured.store}</Button>
            <Button variant="secondary">Comparar</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
