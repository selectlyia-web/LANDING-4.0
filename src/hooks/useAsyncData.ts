import { useEffect, useState } from 'react';

interface AsyncState<T> {
  readonly data: T | null;
  readonly loading: boolean;
}

/**
 * Carrega dados assíncronos de um serviço com estado de loading.
 * Mantém componentes livres de lógica de busca (regra: componentes só renderizam).
 */
export function useAsyncData<T>(loader: () => Promise<T>): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ data: null, loading: true });

  useEffect(() => {
    let active = true;
    void loader().then((data) => {
      if (active) setState({ data, loading: false });
    });
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
