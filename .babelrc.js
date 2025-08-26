module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'ie >= 9'],
          node: '12'
        },
        modules: false, // 保持 ES 模块格式，让 Rollup 处理
      }
    ],
    [
      '@babel/preset-react',
      {
        pragma: 'React.createElement', // 确保 JSX 转换为 React.createElement
        pragmaFrag: 'React.Fragment',
        development: false,
        useBuiltIns: false
      }
    ]
  ]
};