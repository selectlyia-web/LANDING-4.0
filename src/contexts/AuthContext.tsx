import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

/**
 * Autenticação do MVP (mock).
 *
 * Mesma interface pública que o Supabase Auth assumirá no Sprint 1
 * (signIn/signOut/user) — as telas não mudarão quando o auth real chegar.
 * Sessão vive em memória: recarregar a página encerra a sessão (esperado no MVP).
 */

interface AuthUser {
  readonly email: string;
}

interface AuthContextValue {
  readonly user: AuthUser | null;
  readonly signIn: (email: string) => void;
  readonly signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { readonly children: ReactNode }): React.JSX.Element {
  const [user, setUser] = useState<AuthUser | null>(null);

  const signIn = useCallback((email: string) => setUser({ email }), []);
  const signOut = useCallback(() => setUser(null), []);

  const value = useMemo(() => ({ user, signIn, signOut }), [user, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth deve ser usado dentro de <AuthProvider>.');
  }
  return context;
}
