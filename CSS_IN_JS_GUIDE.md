# CSS-in-JS 使用指南

## 概述

从 v1.2.0 开始，组件库采用 CSS-in-JS 方案，所有样式都直接嵌入到 JavaScript 文件中。用户只需要导入组件，样式会自动注入到页面中，无需单独导入 CSS 文件。

## 主要优势

- ✅ **零配置使用**：无需单独导入 CSS 文件
- ✅ **避免样式冲突**：CSS 直接嵌入 JS 中，避免与外部样式冲突  
- ✅ **自动样式注入**：组件使用时自动将样式注入到 `<head>` 中
- ✅ **完全自包含**：一个 JS 文件包含所有功能
- ✅ **兼容所有构建工具**：支持 Webpack、Vite、Next.js、Umi 等

## 使用方式

### 基础使用

```javascript
// 只需要导入组件，样式会自动注入
import { Button, Card, Input, Cockpit } from 'ty-ui-mobile-cockpit';

function App() {
  return (
    <div>
      <Button type="primary">按钮</Button>
      <Input placeholder="输入框" />
      <Card title="卡片">卡片内容</Card>
      <Cockpit title="驾驶舱" />
    </div>
  );
}
```

### 完整示例

```javascript
import React from 'react';
import { Button, Input, Card, Cockpit } from 'ty-ui-mobile-cockpit';

function MyApp() {
  return (
    <div className="app">
      {/* 样式会自动注入，无需额外配置 */}
      <Cockpit 
        title="我的应用"
        headerActions={<Button size="small">设置</Button>}
        footerTabs={[
          { key: 'home', title: '首页', icon: '🏠' },
          { key: 'profile', title: '我的', icon: '👤' }
        ]}
      >
        <Card title="欢迎">
          <Input placeholder="请输入内容" />
          <Button type="primary" block>
            提交
          </Button>
        </Card>
      </Cockpit>
    </div>
  );
}

export default MyApp;
```

## 构建工具兼容性

### Vite 项目
```javascript
// vite.config.js - 无需额外配置
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // CSS-in-JS 会自动工作，无需配置
});
```

### Webpack 项目
```javascript
// webpack.config.js - 无需额外配置
module.exports = {
  // CSS-in-JS 会自动工作，无需配置 CSS loader
};
```

### Next.js 项目
```javascript
// next.config.js - 无需额外配置
module.exports = {
  // CSS-in-JS 会自动工作，无需配置
};
```

### Umi 项目
```javascript
// .umirc.js - 无需额外配置
export default {
  // CSS-in-JS 会自动工作，无需配置
};
```

## 样式注入机制

组件库使用智能的样式注入机制：

1. **自动检测**：当组件首次被使用时，自动检测页面中是否已存在对应样式
2. **动态注入**：如果样式不存在，自动将样式插入到 `<head>` 标签中
3. **避免重复**：相同样式只会注入一次，避免重复
4. **压缩优化**：所有 CSS 都经过压缩和优化

## 技术特性

- 📦 **包大小**：约 227KB（包含所有组件和样式）
- 🚀 **加载性能**：样式与 JS 一起加载，减少 HTTP 请求
- 🎨 **样式压缩**：CSS 经过 cssnano 压缩优化
- 🔧 **自动前缀**：通过 autoprefixer 自动添加浏览器前缀
- 📱 **移动端优化**：专为移动端场景优化

## 浏览器兼容性

- Chrome >= 60
- Firefox >= 60  
- Safari >= 12
- Edge >= 79
- iOS Safari >= 12
- Android Chrome >= 60

## 常见问题

### Q: 样式什么时候会被注入？
A: 当您首次导入并使用任何组件时，对应的样式会自动注入到页面的 `<head>` 中。

### Q: 会不会重复注入样式？
A: 不会。组件库有智能的重复检测机制，相同的样式只会注入一次。

### Q: 如何自定义主题？
A: 可以通过 CSS 变量覆盖或使用更高权重的 CSS 选择器：

```css
/* 全局样式文件中 */
.company-button--primary {
  background-color: #your-color !important;
}

/* 或使用 CSS 变量 */
:root {
  --primary-color: #your-color;
}
```

### Q: 与服务端渲染 (SSR) 兼容吗？
A: 完全兼容。样式会在客户端首次渲染时自动注入，不影响 SSR。

### Q: 包大小会不会太大？
A: 组件库经过深度优化：
- 使用 tree-shaking 移除未使用的代码
- CSS 经过压缩和优化
- 总包大小约 227KB，对于功能完整的组件库来说已经很轻量

### Q: 如何在开发环境中调试样式？
A: 注入的样式会出现在浏览器开发者工具的 `<head>` 部分，可以正常调试和修改。

## 升级说明

如果您之前使用的是需要单独导入 CSS 的版本，升级到 v1.2.0+ 后：

1. **移除 CSS 导入**：删除所有 `import 'xxx.css'` 语句
2. **保持组件导入**：组件的导入和使用方式保持不变
3. **享受零配置**：样式会自动注入，无需任何额外配置

```javascript
// 之前的用法 (需要删除)
// import 'ty-ui-mobile-cockpit/dist/index.css';

// 现在的用法 (保持不变)
import { Button, Input } from 'ty-ui-mobile-cockpit';
```

## 性能优化建议

1. **按需导入**：只导入需要的组件
2. **代码分割**：配合 React.lazy() 实现组件懒加载
3. **缓存策略**：合理配置 CDN 和浏览器缓存

```javascript
// 按需导入示例
import { Button } from 'ty-ui-mobile-cockpit';

// 懒加载示例
const Cockpit = React.lazy(() => 
  import('ty-ui-mobile-cockpit').then(module => ({ 
    default: module.Cockpit 
  }))
);
```