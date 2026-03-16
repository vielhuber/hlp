import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: '',
        lib: {
            entry: './_js/script.ts',
            name: 'hlp',
            formats: ['iife', 'es'],
            fileName: (format) => (format === 'es' ? 'hlp.esm.js' : 'hlp.js'),
        },
        sourcemap: true,
        minify: false,
        emptyOutDir: false,
    },
});
