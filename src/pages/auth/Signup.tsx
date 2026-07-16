import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BrandMark } from '@components/ui/BrandMark';
import { Button } from '@components/ui/Button';
import { Card } from '@components/ui/Card';
import { Input } from '@components/ui/Input';
import { ROUTES } from '@config/constants';
import { useAuth } from '@contexts/AuthContext';

/** Cadastro do MVP (mock). Confirmação de e-mail e Google entram no Sprint 1. */
export function Signup(): React.JSX.Element {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
          <h1 className="text-xl font-bold text-content-primary">Criar sua conta</h1>
          <p className="text-sm text-content-secondary">Comece a comprar melhor em minutos.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            label="E-mail"
            type="email"
            required
            autoComplete="email"
            placeholder="voce@exemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button type="submit" className="mt-2 w-full">
            Criar conta
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-content-secondary">
          Já tem conta?{' '}
          <Link to={ROUTES.login} className="font-semibold text-brand-400 hover:text-brand-300">
            Entrar
          </Link>
        </p>
      </Card>
    </main>
  );
}
