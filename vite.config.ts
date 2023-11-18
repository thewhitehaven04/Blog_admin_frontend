import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: 'Components',
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: 'Pages',
        replacement: path.resolve(__dirname, './src/components/pages')
      },
      {
        find: 'Client',
        replacement: path.resolve(__dirname, './src/client')
      },
      {
        find: 'Hooks',
        replacement: path.resolve(__dirname, './src/hooks')
      },
      {
        find: 'Service',
        replacement: path.resolve(__dirname, './src/service')
      },
      {
        find: 'Utils',
        replacement: path.resolve(__dirname, './src/utils')
      }
    ]
  }
})
