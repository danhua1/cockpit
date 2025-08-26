# ty-ui-mobile-cockpit v1.1.2 修复版本发布说明

## 🐛 Bug 修复

### ✅ 修复依赖安装错误

**问题描述：**
- 用户在使用 v1.1.1 版本时遇到错误提示：需要安装 `antd-mobile/es/components/button` 等不存在的npm包
- 错误是由于 Rollup 配置中错误地将 antd-mobile 的具体组件路径设置为外部依赖导致的

**修复内容：**
- 移除了 Rollup 配置中错误的外部依赖路径：
  ```javascript
  // 已移除这些错误的配置
  // 'antd-mobile/es/components/button',
  // 'antd-mobile/es/components/nav-bar',
  // 'antd-mobile/es/components/popup',
  // 'antd-mobile/es/components/safe-area',
  // 'antd-mobile/es/components/tab-bar',
  ```

- 保留正确的外部依赖配置：
  ```javascript
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    'antd-mobile',           // 主包
    /^antd-mobile\//,       // 正则匹配所有子路径
  ]
  ```

### 📦 构建优化保持

- **包大小**：维持在 ~23KB（压缩后）
- **Tree-shaking**：继续有效，只打包用到的代码
- **CSS自动注入**：继续工作正常
- **兼容性**：所有框架（Umi、Next.js、Vite等）正常工作

## 🚀 使用方式

用户使用方式保持不变，依然非常简单：

```javascript
// 只需要导入组件，样式自动生效！
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';
```

## 📋 升级指南

### 从 v1.1.1 升级到 v1.1.2

```bash
# 更新到最新版本
npm update ty-ui-mobile-cockpit
# 或
yarn upgrade ty-ui-mobile-cockpit
```

**无需任何代码更改** - 这是一个纯修复版本，不影响 API 或使用方式。

## ✅ 验证

升级后不再会看到以下错误信息：
```
To install them, you can run: npm install --save antd-mobile/es/components/button antd-mobile/es/components/nav-bar...
```

## 📊 版本对比

| 版本 | 状态 | 说明 |
|------|------|------|
| v1.1.1 | ❌ 有问题 | 外部依赖配置错误 |
| v1.1.2 | ✅ 正常 | 修复依赖问题 |

## 🔍 技术细节

**问题原因：**
在实现 tree-shaking 优化时，错误地将 antd-mobile 的具体组件路径（如 `antd-mobile/es/components/button`）设置为外部依赖。这些路径在 npm 上并不是独立的包，导致用户在安装时收到错误提示。

**解决方案：**
只将 `antd-mobile` 主包和通过正则表达式匹配的路径设置为外部依赖，让 Rollup 正确处理 tree-shaking 而不产生错误的依赖引用。

---

**🎉 感谢使用 ty-ui-mobile-cockpit！现在可以放心使用了！**