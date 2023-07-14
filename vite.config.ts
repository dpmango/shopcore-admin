import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import mkcert from 'vite-plugin-mkcert'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    publicDir: 'public',
    plugins: [
      mkcert(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],
        imports: [
          'react',
          'react-router-dom',
          {
            classnames: [
              // default imports
              ['default', 'cns'], // import { default as axios } from 'axios',
            ],
          },
        ],
        dirs: [
          './src/core/**', // all nested modules
        ],
        dts: true,
        eslintrc: {
          enabled: true,
        },
      }),
      react(),
      eslintPlugin({
        failOnError: false,
        cache: false,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@c': fileURLToPath(new URL('./src/components', import.meta.url)),

        '@ui': fileURLToPath(new URL('./src/components/Ui', import.meta.url)),
        '@interface': fileURLToPath(new URL('./src/core/interface', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/core/utils', import.meta.url)),
        '@store': fileURLToPath(new URL('./src/core/store', import.meta.url)),
      },
    },

    server: {
      // host: 'local.shopcore.ru',
      https: true,
      // port: 443,
      // proxy: {
      //   '/api': {
      //     target: process.env.VITE_API_PROXY,
      //     changeOrigin: true,
      //     // rewrite: (path) => path.replace(/^\/api/, ''),
      //     // configure: (proxy, options) => {
      //     //   // proxy will be an instance of 'http-proxy'
      //     // },
      //   },
      // },
    },
    build: {
      outDir: 'build',
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@import "@/assets/styles/utils/index.scss";',
    //     },
    //   },
    // },
  })
}

// //@ts-ignore
// import { dependencies } from './package.json'
// function renderChunks(deps: Record<string, string>) {
//   const chunks = {}
//   Object.keys(deps).forEach((key) => {
//     if (['react', 'react-router-dom', 'react-dom'].includes(key)) return
//     chunks[key] = [key]
//   })
//   return chunks
// }
