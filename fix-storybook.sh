#!/bin/bash

echo "🔧 修复 Storybook 启动问题..."

# 1. 修复 npm 缓存权限问题
echo "📁 修复 npm 缓存权限..."
sudo chown -R $(whoami) ~/.npm

# 2. 清理现有的 node_modules 和 package-lock.json
echo "🧹 清理现有依赖..."
rm -rf node_modules package-lock.json

# 3. 重新安装依赖
echo "📦 重新安装依赖..."
npm install --legacy-peer-deps

# 4. 启动 Storybook
echo "🚀 启动 Storybook..."
npm run storybook