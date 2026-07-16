-- Migração 0001 — Tabela waitlist (lista de espera)
-- Executar no SQL Editor do MESMO projeto Supabase que o Painel Admin usa.
-- Segura para rodar mesmo que a tabela já exista (IF NOT EXISTS).

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now()
);

-- E-mail único: quem se cadastra duas vezes recebe "lugar garantido", não duplica.
-- (Se sua tabela já tiver e-mails duplicados, esta linha falha — remova os
--  duplicados no Table Editor e rode de novo, ou pule esta linha.)
create unique index if not exists waitlist_email_unique on public.waitlist (lower(email));

-- SEGURANÇA (RLS):
-- anon (chave pública, usada pela landing) pode APENAS inserir.
-- Leitura NÃO é concedida ao anon — e-mails de leads nunca ficam públicos.
alter table public.waitlist enable row level security;

drop policy if exists "anon pode entrar na lista" on public.waitlist;
create policy "anon pode entrar na lista"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Leitura para o Painel Admin: SOMENTE usuários autenticados (Supabase Auth).
-- Só rode esta política quando o painel tiver login — nunca conceda SELECT ao anon.
-- drop policy if exists "admin autenticado pode ler" on public.waitlist;
-- create policy "admin autenticado pode ler"
--   on public.waitlist
--   for select
--   to authenticated
--   using (true);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);
