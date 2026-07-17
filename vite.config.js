import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// Os aliases espelham exatamente os definidos em tsconfig.json.
// Fonte única de verdade conceitual: se um alias muda, muda nos dois lugares.
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
            '@contexts': fileURLToPath(new URL('./src/contexts', import.meta.url)),
            '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
            '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@providers': fileURLToPath(new URL('./src/providers', import.meta.url)),
            '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
            '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
            '@app-types': fileURLToPath(new URL('./src/types', import.meta.url)),
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        },
    },
    build: {
        target: 'es2022',
        sourcemap: true,
    },
});
