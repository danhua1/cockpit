# ty-ui-mobile-cockpit v1.1.0 发布说明

## 🎉 重大更新：CSS 自动注入

### ✨ 新特性

**🚀 零配置 CSS 导入**
- 采用类似 antd 5.x 的 CSS-in-JS 方案
- CSS 样式直接注入到 JS 文件中
- 用户无需手动导入任何 CSS 文件
- 支持所有主流框架：Umi、Next.js、Vite、CRA 等

### 📋 使用方式更新

#### ✅ 新的使用方式（推荐）
```javascript
// 只需要一行，样式自动生效！
import { Cockpit, Button, Input, Card } from 'ty-ui-mobile-cockpit';
```

#### ❌ 不再需要（旧方式）
```javascript
// 以下代码都不再需要了！
import 'ty-ui-mobile-cockpit/style';
import 'ty-ui-mobile-cockpit/dist/index.css';
// 不需要配置 chainWebpack
// 不需要配置 babel-plugin-import
```

### 🔧 技术改进

1. **构建优化**：
   - 修改 Rollup 配置，设置 `extract: false, inject: true`
   - CSS 自动注入到 JS 文件中
   - JS 文件大小：231KB（包含所有样式）

2. **包配置简化**：
   - 移除不必要的 CSS 导出配置
   - 简化 package.json exports 字段

3. **兼容性**：
   - 支持 SSR 场景
   - 支持静态导出
   - 支持所有现代构建工具

### 🆙 升级指南

#### 从 v1.0.x 升级到 v1.1.0

1. **更新版本**：
   ```bash
   npm update ty-ui-mobile-cockpit
   # 或
   yarn upgrade ty-ui-mobile-cockpit
   ```

2. **移除旧的 CSS 导入**：
   ```javascript
   // 删除这些行
   // import 'ty-ui-mobile-cockpit/style';
   // import 'ty-ui-mobile-cockpit/dist/index.css';
   ```

3. **移除构建配置**（如果有）：
   ```javascript
   // .umirc.ts 中可以删除这些配置
   // chainWebpack(config) {
   //   // 处理 ty-ui-mobile-cockpit CSS 的配置
   // }
   ```

4. **验证**：
   - 确保组件样式正常显示
   - 检查浏览器开发者工具中样式是否自动注入

### 📊 性能对比

| 版本 | 用户操作 | 配置复杂度 | 兼容性 |
|------|----------|------------|--------|
| v1.0.x | 导入组件 + 导入CSS + 配置构建工具 | 复杂 | 部分框架 |
| v1.1.0 | 导入组件 | 简单 | 所有框架 |

### 🐛 问题排查

如果升级后遇到样式问题：

1. **清除缓存**：
   ```bash
   # Umi
   rm -rf .umi && npm start
   
   # Next.js
   rm -rf .next && npm run dev
   
   # Vite
   rm -rf node_modules/.vite && npm run dev
   ```

2. **检查版本**：
   ```bash
   npm list ty-ui-mobile-cockpit
   ```

3. **验证导入**：
   ```javascript
   // 确保使用新的导入方式
   import { Button } from 'ty-ui-mobile-cockpit';
   ```

### 🚀 示例项目

查看各框架的使用示例：
- [Umi 示例](./umi-page-example.tsx)
- [完整使用指南](./SIMPLIFIED_USAGE.md)
- [CSS 自动注入测试](./css-auto-inject-test.html)

### 📞 技术支持

如有问题，请提供：
- 使用的框架和版本
- 具体错误信息
- 复现步骤

---

**🎊 感谢使用 ty-ui-mobile-cockpit！现在使用更简单，体验更流畅！**