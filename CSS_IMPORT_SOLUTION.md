# ty-ui-mobile-cockpit CSS 导入解决方案

## 问题描述
用户在导入 `import 'ty-ui-mobile-cockpit/dist/index.css';` 时遇到报错，但组件元素存在正确的 `company-` 前缀类名，打包后的 CSS 也存在 `company-` 前缀类名。

## 解决方案

### 1. 确认 package.json 配置正确 ✅

当前配置已经正确：

```json
{
  "style": "dist/index.css",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./dist/index.css": "./dist/index.css",
    "./style": "./dist/index.css"
  }
}
```

### 2. CSS 导入方式

**推荐的导入方式：**

```javascript
// 方法 1: 使用简短路径（推荐）
import 'ty-ui-mobile-cockpit/style';

// 方法 2: 使用完整路径
import 'ty-ui-mobile-cockpit/dist/index.css';
```

**在 HTML 中直接引用：**

```html
<link rel="stylesheet" href="node_modules/ty-ui-mobile-cockpit/dist/index.css">
```

### 3. 验证 CSS 是否正确加载

**检查方法：**

1. 打开浏览器开发者工具
2. 在 Elements 面板中检查组件是否有 `company-` 前缀的类名
3. 在 Network 面板中确认 CSS 文件已成功加载
4. 在 Console 中运行以下代码检测：

```javascript
// 检查是否有 company- 前缀的样式规则
const companyRules = Array.from(document.styleSheets)
  .flatMap(sheet => {
    try {
      return Array.from(sheet.cssRules || []);
    } catch (e) {
      return [];
    }
  })
  .filter(rule => rule.selectorText && rule.selectorText.includes('.company-'));

console.log(`找到 ${companyRules.length} 个 company- 前缀的样式规则`);
```

### 4. 常见问题排查

#### 问题 1: 模块路径找不到
**错误信息：** `Cannot resolve module 'ty-ui-mobile-cockpit/dist/index.css'`

**解决方案：**
```bash
# 确保正确安装了组件库
npm install ty-ui-mobile-cockpit@latest

# 或者使用 yarn
yarn add ty-ui-mobile-cockpit@latest
```

#### 问题 2: CSS 文件加载但样式不生效
**可能原因：**
- CSS 被其他样式覆盖
- CSS 选择器优先级不够

**解决方案：**
```css
/* 在你的全局 CSS 中增加优先级 */
.company-button {
  /* 确保样式生效 */
}

/* 或者使用 !important（不推荐，但紧急情况可用） */
.company-button {
  background-color: #1677ff !important;
}
```

#### 问题 3: 在 Next.js 中导入 CSS
```javascript
// 在 _app.js 或 _app.tsx 中导入
import 'ty-ui-mobile-cockpit/style';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

#### 问题 4: 在 Vite 中导入 CSS
```javascript
// 在 main.js 或 main.tsx 中导入
import 'ty-ui-mobile-cockpit/style';
import { createApp } from 'vue'; // 或其他框架
```

### 5. 完整使用示例

```jsx
import React from 'react';
// 导入组件
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';
// 导入样式
import 'ty-ui-mobile-cockpit/style';

function App() {
  return (
    <Cockpit title="我的应用">
      <div style={{ padding: '20px' }}>
        <Card>
          <Card.Header title="测试卡片" />
          <Card.Body>
            <Input placeholder="请输入内容" />
            <Button type="primary" style={{ marginTop: '10px' }}>
              提交
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Cockpit>
  );
}

export default App;
```

### 6. 验证安装

运行以下命令验证组件库是否正确安装：

```bash
# 检查包是否存在
ls node_modules/ty-ui-mobile-cockpit/dist/

# 应该看到：
# index.css
# index.d.ts
# index.esm.js
# index.esm.js.map
# index.js
# index.js.map
```

### 7. CSS 内容验证

正确的 CSS 文件应该包含大量 `.company-` 前缀的类名，例如：

```css
.company-button { /* ... */ }
.company-input { /* ... */ }
.company-card { /* ... */ }
.company-cockpit { /* ... */ }
/* 等等... */
```

### 8. 构建工具配置

如果你使用的构建工具不支持直接导入 CSS，可以考虑以下配置：

**Webpack 配置：**
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

**Rollup 配置：**
```javascript
import postcss from 'rollup-plugin-postcss';

export default {
  plugins: [
    postcss({
      extract: false,
      inject: true
    })
  ]
};
```

## 总结

通过以上步骤，CSS 导入问题应该已经解决。关键点：

1. ✅ package.json 配置正确
2. ✅ CSS 文件存在且包含正确的类名
3. ✅ 提供了多种导入方式
4. ✅ 提供了完整的排查指南

如果仍然遇到问题，请提供具体的错误信息和项目配置，以便进一步排查。