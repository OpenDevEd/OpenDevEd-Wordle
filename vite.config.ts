import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      name: 'tailwindcss', // Add the name property with a value
    }) as unknown as Plugin, // Convert the expression to 'unknown' first
  ],
});