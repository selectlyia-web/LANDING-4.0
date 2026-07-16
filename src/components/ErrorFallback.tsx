import { APP } from '@config/constants';

/**
 * UI exibida quando o ErrorBoundary captura um erro.
 *
 * Componente de apresentação puro (sem lógica de negócio). Sereno e claro,
 * conforme o tom de voz da marca — sem alarmismo. Acessível: usa role="alert"
 * para leitores de tela e oferece uma ação clara de recuperação.
 */
export function ErrorFallback(): React.JSX.Element {
  return (
    <main
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-500">
          {APP.name}
        </p>
        <h1 className="text-2xl font-semibold text-content-primary sm:text-3xl">
          Algo saiu do esperado
        </h1>
        <p className="mx-auto max-w-md text-content-secondary">
          Encontramos um problema ao carregar esta parte da aplicação. Tente novamente — se
          persistir, já estamos de olho.
        </p>
      </div>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-lg bg-brand-500 px-5 py-2.5 font-medium text-content-inverted transition-colors hover:bg-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        Recarregar
      </button>
    </main>
  );
}
