# 公司内部移动端组件库

基于 Ant Design Mobile 5 封装的公司内部移动端组件库，提供统一的 UI 风格和交互体验。

## ✨ 特性

- 🎯 基于 Ant Design Mobile 5 封装，保持设计一致性
- 📱 专为移动端优化的组件
- 🔧 TypeScript 支持，提供完整的类型定义
- 📚 完善的文档和示例
- 🎨 支持主题定制
- 📦 支持按需加载

## 📦 安装

```bash
npm install @company/ui-mobile
# 或
yarn add @company/ui-mobile
```

## 🔨 使用

### 基本使用

```tsx
import { Button, Input, Card } from '@company/ui-mobile';
import '@company/ui-mobile/dist/style.css';

function App() {
  return (
    <div>
      <Button type="primary">主要按钮</Button>
      <Input placeholder="请输入内容" />
      <Card title="卡片标题">
        卡片内容
      </Card>
    </div>
  );
}
```

### 按需加载

```tsx
import Button from '@company/ui-mobile/lib/Button';
import Input from '@company/ui-mobile/lib/Input';
import Card from '@company/ui-mobile/lib/Card';
```

## 🔗 组件

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
│   │   └── Card/       # 卡片组件
│   └── index.ts        # 入口文件
├── demo/               # 演示应用
├── stories/            # Storybook 文档
└── dist/               # 构建产物
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT License