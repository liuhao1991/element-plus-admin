/*
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:39:54
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-09 17:44:09
 * @Description: ...
 */
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';
import { createHtmlPlugin } from 'vite-plugin-html';
// import Unocss from 'unocss/vite';

// https://vitejs.dev/config/

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: [
      vue(),
      eslintPlugin(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[name]',
      }),
      Components({
        // 按需引入组件
        dirs: ['src/components'], // 该目录下的组件可以直接用，不需要import，但是不要重名
        resolvers: [ElementPlusResolver()],
      }),
      createStyleImportPlugin({
        // 引入部分ui样式(按需引入时漏掉的)
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/theme-chalk/${name}.css`;
            },
          },
        ],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
      // Unocss(),
    ],
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      sourcemap: process.env.NODE_ENV === 'development',
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/style/index.less";',
        },
      },
    },
  });
};


