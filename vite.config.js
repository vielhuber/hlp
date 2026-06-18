import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    if (mode === 'package') {
        return {
            build: {
                outDir: '_js/_build',
                lib: {
                    entry: './_js/script.ts',
                    formats: ['cjs'],
                    fileName: () => 'script.js',
                },
                rollupOptions: {
                    output: {
                        exports: 'named',
                    },
                },
                sourcemap: false,
                minify: false,
                emptyOutDir: false,
            },
        };
    }

    return {
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
    };
});
