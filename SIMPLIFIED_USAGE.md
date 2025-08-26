# ty-ui-mobile-cockpit 简化使用指南

## 🎉 重大更新：CSS 自动注入

参考 antd 等主流组件库的做法，我们已经将 CSS 样式直接注入到 JS 文件中。现在使用组件库变得非常简单！

## 🚀 使用方式

### 在任何框架中都只需要一行代码：

```javascript
// 只需要导入组件，样式自动生效！
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';
```

**不再需要：**
- ❌ `import 'ty-ui-mobile-cockpit/style';`
- ❌ `import 'ty-ui-mobile-cockpit/dist/index.css';`
- ❌ 配置 chainWebpack
- ❌ 配置 babel-plugin-import
- ❌ 任何额外的构建配置

## 📋 框架支持

### Umi 项目
```javascript
// pages/index.tsx
import React from 'react';
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';

export default function HomePage() {
  return (
    <Cockpit title="我的应用">
      <div style={{ padding: '20px' }}>
        <Card>
          <Card.Header title="欢迎" />
          <Card.Body>
            <Input placeholder="请输入内容" />
            <Button type="primary" style={{ marginTop: '15px' }}>
              提交
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Cockpit>
  );
}
```

### Next.js 项目
```javascript
// pages/index.js
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';

export default function Home() {
  return (
    <Cockpit title="Next.js Demo">
      <Button type="primary">按钮</Button>
    </Cockpit>
  );
}
```

### Vite + React 项目
```javascript
// src/App.jsx
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';

function App() {
  return (
    <Cockpit title="Vite Demo">
      <Button type="primary">按钮</Button>
    </Cockpit>
  );
}

export default App;
```

### Create React App 项目
```javascript
// src/App.js
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';

function App() {
  return (
    <Cockpit title="CRA Demo">
      <Button type="primary">按钮</Button>
    </Cockpit>
  );
}

export default App;
```

## 🎯 安装

```bash
# 使用 npm
npm install ty-ui-mobile-cockpit

# 使用 yarn
yarn add ty-ui-mobile-cockpit

# 使用 pnpm
pnpm add ty-ui-mobile-cockpit
```

## 📦 组件列表

### Cockpit 驾驶舱组件
```javascript
import { Cockpit } from 'ty-ui-mobile-cockpit';

<Cockpit 
  title="应用标题"
  backArrow={true}
  onBack={() => history.goBack()}
>
  {/* 页面内容 */}
</Cockpit>
```

### Button 按钮组件
```javascript
import { Button } from 'ty-ui-mobile-cockpit';

<Button type="primary" size="large" onClick={handleClick}>
  点击按钮
</Button>
```

### Input 输入框组件
```javascript
import { Input } from 'ty-ui-mobile-cockpit';

<Input 
  placeholder="请输入内容"
  value={value}
  onChange={setValue}
/>
```

### Card 卡片组件
```javascript
import { Card } from 'ty-ui-mobile-cockpit';

<Card>
  <Card.Header title="卡片标题" extra="额外内容" />
  <Card.Body>
    卡片内容
  </Card.Body>
</Card>
```

## ⚡ 优势

1. **零配置**：无需任何构建工具配置
2. **通用性**：支持所有主流前端框架
3. **现代化**：采用与 antd 5.x 相同的 CSS-in-JS 理念
4. **轻量级**：自动按需加载，只打包使用的组件
5. **兼容性**：支持 SSR、静态导出等场景

## 🔧 TypeScript 支持

组件库完全使用 TypeScript 编写，提供完整的类型定义：

```typescript
import { Button, ButtonProps } from 'ty-ui-mobile-cockpit';

const MyButton: React.FC<{ customProp: string }> = ({ customProp }) => {
  const buttonProps: ButtonProps = {
    type: 'primary',
    size: 'large',
    onClick: () => console.log(customProp)
  };
  
  return <Button {...buttonProps}>按钮</Button>;
};
```

## 🐛 问题排查

如果遇到样式问题，请检查：

1. **确保版本正确**：
   ```bash
   npm list ty-ui-mobile-cockpit
   ```

2. **清除缓存重启**：
   ```bash
   # Umi 项目
   rm -rf .umi && npm start
   
   # Next.js 项目
   rm -rf .next && npm run dev
   
   # Vite 项目
   rm -rf node_modules/.vite && npm run dev
   ```

3. **检查浏览器开发者工具**：
   - 确认组件有正确的 `company-` 前缀类名
   - 确认样式已自动注入到页面

## 📞 技术支持

如果遇到问题，请提供：
- 使用的框架和版本
- 具体的错误信息
- 复现步骤

---

**🎉 现在就开始使用吧！简单到只需要一行 import 语句！**