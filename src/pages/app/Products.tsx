import { useState, type FormEvent } from 'react';

import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { Card } from '@components/ui/Card';
import { Sparkline } from '@components/ui/Sparkline';
import { useAsyncData } from '@hooks/useAsyncData';
import { getProducts } from '@services/dataService';
import { type Verdict } from '@app-types/domain';
import { formatBRL } from '@utils/currency';

const verdictBadge: Record<Verdict, { variant: 'success' | 'warning' | 'neutral'; text: string }> =
  {
    buy: { variant: 'success', text: 'Bom momento' },
    wait: { variant: 'warning', text: 'Espere' },
    fair: { variant: 'neutral', text: 'Preço justo' },
  };

/** Lista de produtos monitorados + adição por URL (persistência real no Sprint 2). */
export function Products(): React.JSX.Element {
  const { data, loading } = useAsyncData(getProducts);
  const [url, setUrl] = useState('');
  const [added, setAdded] = useState(false);

  function handleAdd(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (url.trim().length === 0) return;
    setAdded(true);
    setUrl('');
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <header>
        <h1 className="text-2xl font-extrabold text-content-primary">Produtos</h1>
        <p className="mt-1 text-sm text-content-secondary">
          Tudo o que a Selectly está monitorando por você.
        </p>
      </header>

      <Card>
        <form onSubmit={handleAdd} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="product-url" className="sr-only">
            URL do produto
          </label>
          <input
            id="product-url"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Cole a URL do produto — ex.: amazon.com.br/…"
            className="flex-1 rounded-xl border border-border-default bg-surface-inset px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-500 focus:outline-none"
          />
          <Button type="submit">Adicionar produto</Button>
        </form>
        {added && (
          <p role="status" className="mt-3 text-sm text-success">
            Produto recebido. No MVP a coleta real entra no Sprint 3 — por enquanto, demonstração.
          </p>
        )}
      </Card>

      <div className="flex flex-col gap-4">
        {loading && <p className="text-sm text-content-tertiary">Carregando produtos…</p>}
        {data?.map((product) => {
          const badge = verdictBadge[product.decision.verdict];
          const changePercent =
            ((product.currentPrice - product.previousPrice) / product.previousPrice) * 100;
          const isDown = changePercent < 0;
          return (
            <Card key={product.id} className="flex flex-wrap items-center gap-6">
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-base font-bold text-content-primary">
                  {product.name}
                </h2>
                <p className="mt-0.5 text-xs text-content-tertiary">
                  {product.store} · {product.category}
                </p>
                <p className="mt-2 text-xs text-content-secondary">{product.decision.reason}</p>
              </div>

              <Sparkline values={product.history.map((point) => point.price)} />

              <div className="text-right">
                <p className="text-lg font-extrabold text-content-primary">
                  {formatBRL(product.currentPrice)}
                </p>
                <p className={isDown ? 'text-xs font-bold text-success' : 'text-xs font-bold text-danger'}>
                  {isDown ? '' : '+'}
                  {changePercent.toFixed(0)}%
                </p>
              </div>

              <Badge variant={badge.variant}>{badge.text}</Badge>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
