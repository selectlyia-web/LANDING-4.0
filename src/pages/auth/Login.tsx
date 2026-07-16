import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BrandMark } from '@components/ui/BrandMark';
import { Button } from '@components/ui/Button';
import { Card } from '@components/ui/Card';
import { Input } from '@components/ui/Input';
import { ROUTES } from '@config/constants';
import { useAuth } from '@contexts/AuthContext';

/** Login do MVP. O Supabase Auth (Google + e-mail real) substitui o mock no Sprint 1. */
export function Login(): React.JSX.Element {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (email.trim().length === 0) return;
    signIn(email.trim());
    navigate(ROUTES.dashboard);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-base px-4">
      <Card className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <BrandMark />
          <h1 className="text-xl font-bold text-content-primary">Entrar na Selectly</h1>
          <p className="text-sm text-content-secondary">
            MVP de demonstração — qualquer e-mail funciona.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="E-mail"
            type="email"
            required
            autoComplete="email"
            placeholder="voce@exemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit" className="mt-2 w-full">
            Entrar
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-content-secondary">
          Ainda não tem conta?{' '}
          <Link to={ROUTES.signup} className="font-semibold text-brand-400 hover:text-brand-300">
            Cadastre-se
          </Link>
        </p>
      </Card>
    </main>
  );
}
