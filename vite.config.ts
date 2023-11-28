import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '192.168.100.78',
    port: 4100,
    proxy: {
      '/api': {
        target: 'http://192.168.100.114:4300',
        changeOrigin: true,
        ws: true,
        // only https
        // secure: false
      },
      '/oauth2': {
        target: 'http://192.168.100.114:4300',
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
