# Selectly

> A inteligência por trás da melhor compra.

Plataforma inteligente de decisão de compra. Este repositório é o frontend +
camada de acesso a dados, construído sobre a arquitetura aprovada (ver Guia de
Arquitetura, Decision Log e Business Bible).

---

## Stack

- **React 18** + **Vite** + **TypeScript** (modo estrito)
- **TailwindCSS** com design tokens centralizados
- **React Router** para roteamento com lazy loading
- **Framer Motion** para animações
- **Supabase** (banco, auth, RLS) — acessado apenas pela camada `services/`

## Pré-requisitos

- Node.js `>= 18.18` (recomendado 20 — ver `.nvmrc`)
- Um projeto Supabase (para as variáveis de ambiente)

## Setup

```bash
# 1. Instalar dependências
npm install

# 2. Configurar ambiente
cp .env.example .env
# Preencha VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY com os valores do
# seu projeto Supabase (Project Settings > API).

# 3. Rodar em desenvolvimento
npm run dev
```

## Scripts

| Script                 | O que faz                                              |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Servidor de desenvolvimento                            |
| `npm run build`        | Build de produção (typecheck + bundle)                 |
| `npm run preview`      | Pré-visualiza o build                                  |
| `npm run lint`         | ESLint (barra `any` e maus padrões)                    |
| `npm run format`       | Formata com Prettier                                   |
| `npm run typecheck`    | Checagem de tipos sem emitir                           |
| `npm run test`         | Testes (Vitest)                                        |
| `npm run validate`     | typecheck + lint + format:check (roda antes de commit) |

## Estrutura de pastas

```
src/
├── assets/         Recursos estáticos (logos, fontes)
├── components/     UI pura e reutilizável (ui/, layout/)
├── config/         Ambiente validado (env) e constantes
├── contexts/       Contextos React (a partir do Sprint 1)
├── hooks/          Hooks reutilizáveis
├── lib/            Bibliotecas internas
├── pages/          Páginas e roteamento
├── providers/      Composição de providers globais
├── services/       ÚNICA camada que fala com Supabase/externos
├── styles/         Design tokens e CSS global
├── test/           Setup de testes
├── types/          Tipos compartilhados (events/ reservado — ver ADR-009)
└── utils/          Funções puras (cn, etc.)
```

## Regras de arquitetura (resumo)

- Componentes **apenas renderizam**. Lógica vive em `services`, `hooks`, `utils`, `contexts`.
- **Nenhum** componente acessa o Supabase direto — sempre via `services/`.
- **Nunca** `any`. Tipagem forte, imposta pelo lint.
- Nenhum segredo no frontend. Só variáveis `VITE_` (públicas).
- Estilos via design tokens — nunca valores de cor "à mão".

Referência completa: Guia de Arquitetura e Decision Log.

## Aliases de importação

Importações usam aliases (sem `../../..`):

```ts
import { supabase } from '@services/supabase';
import { cn } from '@utils/cn';
import { Container } from '@components/ui/Container';
```

## Banco de dados (Supabase)

O schema vive em migrações versionadas em `supabase/migrations/`.

Para ativar a lista de espera:

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Abra **SQL Editor** e execute o conteúdo de `supabase/migrations/0001_waitlist_table.sql`.
3. Em **Project Settings → API**, copie a `Project URL` e a `anon public key` para o seu `.env`.

Segurança: a tabela `waitlist` tem RLS com política **insert-only** para `anon` —
a chave pública consegue cadastrar e-mails, mas **nunca lê-los**. A leitura só
acontece pelo painel do Supabase ou pela service role (backend).
