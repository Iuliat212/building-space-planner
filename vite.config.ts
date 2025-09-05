import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: 'https://Iuliat212.github.io/building-space-planner', // Replace '/your-base-path/' with your desired base URL
  // Other configurations
});
