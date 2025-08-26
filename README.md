# 公司内部移动端组件库

基于 Ant Design Mobile 5 封装的公司内部移动端组件库，提供统一的 UI 风格和交互体验。现已包含 Cockpit 驾驶舱组件！

**v1.2.0+ 重大升级**：采用 CSS-in-JS 方案，样式自动注入，无需单独导入 CSS 文件！

## ✨ 特性

- 🎯 基于 Ant Design Mobile 5 封装，保持设计一致性
- 📱 专为移动端优化的组件
- 🔧 TypeScript 支持，提供完整的类型定义
- 📚 完善的文档和示例
- 🎨 支持主题定制
- 📦 支持按需加载
- 🚀 **CSS-in-JS 自动注入**，零配置使用
- 🛡️ **避免样式冲突**，完全隔离外部样式
- 🔧 **兼容所有构建工具**，支持 Webpack、Vite、Next.js、Umi 等

## 📦 安装

```bash
npm install ty-ui-mobile-cockpit
# 或
yarn add ty-ui-mobile-cockpit
```

## 🔨 使用

### 基本使用

```tsx
import { Button, Input, Card, Cockpit } from 'ty-ui-mobile-cockpit';
// ✨ v1.2.0+: 无需导入 CSS 文件，样式自动注入！

function App() {
  const footerTabs = [
    { key: 'home', title: '首页', icon: <HomeIcon />, url: '/home' },
    { key: 'profile', title: '我的', icon: <UserIcon />, url: '/profile' },
  ];

  return (
    <Cockpit
      NavBarTitle="我的应用"
      footerTabs={footerTabs}
      onNavigate={(url) => console.log('跳转到:', url)}
    >
      <div>
        <Button type="primary">主要按钮</Button>
        <Input placeholder="请输入内容" />
        <Card title="卡片标题">
          卡片内容
        </Card>
      </div>
    </Cockpit>
  );
}
```

### 按需加载

```tsx
// 推荐方式：直接从主入口导入（支持 Tree Shaking）
import { Button, Input, Card } from 'ty-ui-mobile-cockpit';

// 或者单独导入组件（样式仍会自动注入）
import Button from 'ty-ui-mobile-cockpit/dist/components/Button';
import Input from 'ty-ui-mobile-cockpit/dist/components/Input';
import Card from 'ty-ui-mobile-cockpit/dist/components/Card';
// ✨ 无需手动导入 CSS，样式自动注入！
```

### CSS-in-JS 优势

- **零配置使用**：无需导入 CSS 文件或配置构建工具
- **避免样式冲突**：CSS 直接嵌入 JS 中，完全隔离外部样式
- **自动样式注入**：组件使用时自动将样式注入到页面 `<head>` 中
- **完全自包含**：一个 JS 文件包含所有功能和样式
- **兼容所有构建工具**：无需配置 CSS loader 或其他样式处理

## 🔗 组件

### Cockpit 驾驶舱组件 🊕
为移动端应用提供统一的页面布局和导航体验。

**功能特点：**
- 🗺️ 统一的页面布局和导航栏
- 🚀 响应式底部标签导航
- 📋 支持二级菜单显示
- 🎨 可自定义主题色
- 📱 安全区域适配
- 🔄 灵活的路由管理

### Button 按钮
基于 Ant Design Mobile Button 组件封装，支持公司内部的设计规范。

### Input 输入框
基于 Ant Design Mobile Input 组件封装，提供统一的输入体验。

### Card 卡片
基于 Ant Design Mobile Card 组件封装，支持多种布局和样式。

## 🖥 本地开发

```bash
# 安装依赖
npm install

# 启动开发模式
npm run dev

# 启动演示应用
npm run demo

# 启动 Storybook
npm run storybook

# 构建组件库
npm run build

# 代码检查
npm run lint
```

## 📁 目录结构

```
├── src/                 # 源代码
│   ├── components/      # 组件目录
│   │   ├── Button/     # 按钮组件
│   │   ├── Input/      # 输入框组件
│   │   ├── Card/       # 卡片组件
│   │   └── Cockpit/    # 驾驶舱组件
│   └── index.ts        # 入口文件
├── demo/               # 演示应用
├── stories/            # Storybook 文档
└── dist/               # 构建产物
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT License