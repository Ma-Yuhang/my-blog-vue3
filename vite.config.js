import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import visualizer from 'rollup-plugin-visualizer';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer(),
  ],
  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       visualizer(),
  //     ],
  //   },
  // },
  proxy: {
    'api': {
      target: 'http://test.my-site.com',
      changeOrigin: true,
      // pathRewrite: {
      //   ['^' + 'api']: ''
      // }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/var.scss";'
      }
    }
  }
})
