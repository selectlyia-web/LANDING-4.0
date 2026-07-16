/**
 * Tipos compartilhados da aplicação.
 *
 * Contratos reutilizáveis usados por várias camadas. Tipos específicos de um
 * domínio vivem junto do seu módulo; aqui ficam apenas os transversais.
 */

/**
 * Resultado de uma operação que pode falhar, sem lançar exceção.
 * Padrão discriminado para tratamento de erro explícito e tipado — a alternativa
 * a try/catch espalhado. Serviços da camada `services/` devem preferir retornar
 * `Result<T>` a lançar erros silenciosos.
 */
export type Result<TData, TError = Error> =
  | { readonly success: true; readonly data: TData }
  | { readonly success: false; readonly error: TError };

export function ok<TData>(data: TData): Result<TData, never> {
  return { success: true, data };
}

export function err<TError>(error: TError): Result<never, TError> {
  return { success: false, error };
}

/** Torna todas as propriedades de T profundamente imutáveis. */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
