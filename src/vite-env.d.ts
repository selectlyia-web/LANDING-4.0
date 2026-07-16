/// <reference types="vite/client" />

// Tipagem das variáveis de ambiente do Vite. Dá autocomplete e checagem de tipo
// em `import.meta.env`, evitando acesso a variáveis inexistentes.
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
