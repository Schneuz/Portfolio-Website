import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'project-agent-zero': 'project-agent-zero.html',
        'project-echtzeit-sportanalyse': 'project-echtzeit-sportanalyse.html',
        'project-gamehub': 'project-gamehub.html',
      },
    },
  },
  base:
    process.env.VITE_BASE ||
    (process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
      : '/'),
})
