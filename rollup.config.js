import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import analyzer from 'rollup-plugin-analyzer';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default [
  // 主构建配置
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      // 只保持 React 相关依赖为外部依赖，避免版本冲突
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
        // 加强 tree-shaking，只解析需要的模块
        exportConditions: ['es2015', 'module'],
      }),
      commonjs({
        include: /node_modules/,
        // 最小化 commonjs 转换
        transformMixedEsModules: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        jsx: 'react',
        target: 'es5',
        module: 'esnext',
      }),
      babel({
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'ie >= 9']
            },
            modules: false,
          }],
          ['@babel/preset-react', {
            pragma: 'React.createElement',
            pragmaFrag: 'React.Fragment'
          }]
        ],
        babelHelpers: 'bundled'
      }),
      postcss({
        extract: false, // 关键：不提取CSS，直接注入到JS中
        inject: true,   // 自动注入样式到页面
        minimize: true, // 启用CSS压缩
        modules: false,
        // 确保处理所有CSS文件
        include: /\.(css|less|sass|scss)$/,
        exclude: [],
        // 启用更详细的配置
        config: {
          path: './postcss.config.cjs'
        },
      }),
      // 添加打包分析工具
      analyzer({
        summaryOnly: true,
        limit: 10,
      }),
    ],
    // 启用最强 tree-shaking，但保留CSS导入
    treeshake: {
      moduleSideEffects: (id) => {
        // 保留所有CSS文件的副作用
        return id.includes('.css');
      },
      propertyReadSideEffects: false,
      unknownGlobalSideEffects: false,
      // 新增：更强的优化
      preset: 'smallest',
      manualPureFunctions: ['console.log', 'console.warn'],
    },
  },
  // 类型声明文件构建
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];