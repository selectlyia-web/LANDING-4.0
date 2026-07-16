import { AppRoutes } from '@pages/AppRoutes';
import { AppProviders } from '@providers/AppProviders';

/**
 * Raiz da aplicação. Mantida deliberadamente mínima: providers globais
 * envolvendo a árvore de rotas. Toda complexidade vive em módulos dedicados.
 */
export function App(): React.JSX.Element {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}
