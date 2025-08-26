# 简化 CSS 导入方案（参考 antd）

## 🎯 问题分析

参考 antd 等主流组件库的做法，有两种简单的解决方案：

### 方案 1: 自动导入 CSS（推荐 - 像 antd 4.x）

修改主入口文件，让组件库自动导入样式，用户无需手动导入：

```typescript
// src/index.ts
import './styles/index.css'; // 自动导入所有样式

export { default as Cockpit } from './components/Cockpit';
export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Card } from './components/Card';

export type { CockpitProps } from './components/Cockpit';
export type { ButtonProps } from './components/Button';
export type { InputProps } from './components/Input';
export type { CardProps } from './components/Card';
```

这样用户只需要：
```javascript
// 用户项目中只需要这一行，样式自动加载
import { Button, Input } from 'ty-ui-mobile-cockpit';
```

### 方案 2: CSS-in-JS（像 antd 5.x）

将样式直接嵌入到组件中，完全不需要单独的 CSS 文件：

```typescript
// 组件内部直接包含样式
const buttonStyles = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    // ... 其他样式
  },
  primary: {
    backgroundColor: '#1677ff',
    color: '#fff',
  },
  // ...
};
```

### 方案 3: 使用 babel-plugin-import（最简单）

为组件库配置自动导入插件，让用户可以像使用 antd 一样：

```javascript
// .babelrc.js 或 babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'ty-ui-mobile-cockpit',
      style: true, // 自动导入样式
    }]
  ]
};
```

## 🚀 立即实施方案

### 立即可用的解决方案：修改 Rollup 配置

修改 rollup.config.js，让 CSS 自动注入到 JS 中：

```javascript
// rollup.config.js
import postcss from 'rollup-plugin-postcss';

export default {
  // ...
  plugins: [
    postcss({
      extract: false, // 关键：不提取 CSS，直接注入到 JS 中
      inject: true,   // 自动注入样式到页面
      minimize: true,
    }),
    // ... 其他插件
  ],
};
```

这样：
1. CSS 会被打包到 JS 中
2. 用户导入组件时样式自动生效
3. 不需要单独导入 CSS 文件

### 对于 Umi 用户的即时解决方案

在组件的主入口文件中自动导入样式：

```typescript
// src/index.ts
// 自动导入样式，用户无需手动导入
import './components/Button/Button.css';
import './components/Input/Input.css';
import './components/Card/Card.css';
import './components/Cockpit/Cockpit.css';

// 导出组件
export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Card } from './components/Card';
export { default as Cockpit } from './components/Cockpit';
```

## 📋 实施步骤

1. **修改 Rollup 配置**（推荐）
2. **或者修改主入口文件自动导入样式**
3. **重新构建组件库**
4. **用户侧无需任何配置**

## ✅ 用户使用方式

修改后，用户在任何框架中都可以这样使用：

```javascript
// Umi 项目
import { Button, Input } from 'ty-ui-mobile-cockpit';
// 样式自动生效，无需额外配置

// Next.js 项目  
import { Button, Input } from 'ty-ui-mobile-cockpit';
// 样式自动生效

// Vite 项目
import { Button, Input } from 'ty-ui-mobile-cockpit';
// 样式自动生效
```

这就是 antd 等现代组件库的做法 - 让用户使用更简单！