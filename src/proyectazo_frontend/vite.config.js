import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        rollupOptions: {
            external: [
                '/src/main.jsx',  // Agrega la ruta aquí si es necesario
            ],
        },
    },
    resolve: {
        alias: [
            {
                find: "declarations",
                replacement: fileURLToPath(
                    new URL("../declarations", import.meta.url)
                ),
            }
        ],
    }
});
