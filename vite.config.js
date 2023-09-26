import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: [ 'src/css/tailwind.css','src/js/app.js'],
            output: {
                dir: 'assets',
                assetFileNames: 'style.css',
            }
        }
    }
});