import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
// Estrutura de testes preparada para os próximos sprints.
// No Sprint 0 não há lógica de negócio a testar; esta config existe para que
// o primeiro teste do Sprint 1 rode sem nenhuma configuração adicional.
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.ts'],
        css: false,
    },
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
});
