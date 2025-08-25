import React, { useState } from 'react';
import { Button, Input, Card, Cockpit } from '@company/ui-mobile';
import { AppOutline, UserOutline, SearchOutline, MoreOutline } from 'antd-mobile-icons';
import './App.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCockpit, setShowCockpit] = useState(false);

  const handleButtonClick = (type: string) => {
    console.log(`${type} 按钮被点击了`);
    if (type === 'loading') {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
    if (type === 'cockpit') {
      setShowCockpit(true);
    }
  };

  // Cockpit 组件演示数据
  const footerTabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      url: '/home',
    },
    {
      key: 'search',
      title: '搜索',
      icon: <SearchOutline />,
      url: '/search',
    },
    {
      key: 'search',
      title: '搜索',
      icon: <SearchOutline />,
      url: '/search',
    },
    {
      key: 'profile',
      title: '我的',
      icon: <UserOutline />,
      url: '/profile',
      children: [
        {
          key: 'settings',
          title: '设置',
          icon: <MoreOutline />,
          url: '/settings',
          backgroundColor: '#f0f0f0',
          textColor: '#333',
        },
        {
          key: 'help',
          title: '帮助',
          icon: <MoreOutline />,
          url: '/help',
          backgroundColor: '#f0f0f0',
          textColor: '#333',
        },
      ],
    },
     {
      key: 'search',
      title: '搜索',
      icon: <SearchOutline />,
      url: '/search',
    }
  ];

  const handleNavigate = (url: string) => {
    console.log('路由跳转到:', url);
  };

  const handleTabChange = (key: string, tab: any) => {
    console.log('切换到标签:', key, tab);
  };

  const handleBack = () => {
    setShowCockpit(false);
  };

  const handleCardClick = () => {
    console.log('卡片被点击了');
  };

  // 如果显示 Cockpit 演示，则返回 Cockpit 组件
  if (showCockpit) {
    return (
      <Cockpit
        NavBarTitle="Cockpit 组件演示"
        backTitle="返回"
        footerTabs={footerTabs}
        onNavigate={handleNavigate}
        onTabChange={handleTabChange}
        back={handleBack}
      >
        <div style={{ padding: '20px', height: '100vh', overflow: 'auto' }}>
          <h2>Cockpit 组件演示</h2>
          <p>这是一个基于 Ant Design Mobile 的驾驶舱组件演示。</p>
          
          <div style={{ 
            background: '#f5f5f5', 
            padding: '20px', 
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <h3>功能特点：</h3>
            <ul style={{margin: '8px 0', paddingLeft: '20px'}}>
              <li>统一的页面布局</li>
              <li>响应式底部导航</li>
              <li>支持二级菜单</li>
              <li>可自定义主题色</li>
              <li>安全区域适配</li>
              <li>灵活的路由管理</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>操作说明：</h3>
            <p>1. 点击底部标签可以切换页面</p>
            <p>2. 点击“我的”标签会显示二级菜单</p>
            <p>3. 点击左上角返回按钮可以返回主页面</p>
          </div>

          {/* 演示其他组件 */}
          <div style={{ marginTop: '30px' }}>
            <h3>在 Cockpit 中使用其他组件：</h3>
            <div style={{ marginTop: '16px' }}>
              <Button type="primary" style={{ marginRight: '8px', marginBottom: '8px' }}>
                主要按钮
              </Button>
              <Button type="default" style={{ marginBottom: '8px' }}>
                默认按钮
              </Button>
            </div>
            
            <div style={{ marginTop: '16px' }}>
              <Input
                label="输入框演示"
                placeholder="在 Cockpit 中使用输入框"
                allowClear
              />
            </div>

            <div style={{ marginTop: '16px' }}>
              <Card title="卡片演示" subtitle="在 Cockpit 中使用卡片">
                这是在 Cockpit 组件中使用的卡片组件。
              </Card>
            </div>
          </div>
        </div>
      </Cockpit>
    );
  }

  return (
    <div className="demo-container">
      {/* 头部 */}
      <div className="demo-header">
        <h1>公司内部移动端组件库</h1>
        <p>基于 Ant Design Mobile 5 封装</p>
      </div>

      <div className="demo-content">
        {/* Button 按钮演示 */}
        <div className="demo-section">
          <h2 className="demo-section-title">Button 按钮组件</h2>
          
          <div className="demo-group">
            <div className="demo-group-title">按钮类型</div>
            <div className="button-row">
              <Button type="default" onClick={() => handleButtonClick('default')}>
                默认按钮
              </Button>
              <Button type="primary" onClick={() => handleButtonClick('primary')}>
                主要按钮
              </Button>
            </div>
            <div className="button-row">
              <Button type="success" onClick={() => handleButtonClick('success')}>
                成功按钮
              </Button>
              <Button type="warning" onClick={() => handleButtonClick('warning')}>
                警告按钮
              </Button>
              <Button type="danger" onClick={() => handleButtonClick('danger')}>
                危险按钮
              </Button>
            </div>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">按钮尺寸</div>
            <div className="button-column">
              <Button size="mini" type="primary">迷你按钮</Button>
              <Button size="small" type="primary">小型按钮</Button>
              <Button size="middle" type="primary">中等按钮</Button>
              <Button size="large" type="primary">大型按钮</Button>
            </div>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">按钮形状</div>
            <div className="button-row">
              <Button shape="default" type="primary">默认形状</Button>
              <Button shape="rounded" type="primary">圆角按钮</Button>
              <Button shape="rectangular" type="primary">方角按钮</Button>
            </div>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">按钮状态</div>
            <div className="button-column">
              <Button type="primary" block>
                块级按钮
              </Button>
              <Button 
                type="primary" 
                loading={loading} 
                onClick={() => handleButtonClick('loading')}
              >
                {loading ? '加载中...' : '点击加载'}
              </Button>
              <Button type="primary" disabled>
                禁用按钮
              </Button>
              <Button 
                type="success" 
                onClick={() => handleButtonClick('cockpit')}
                style={{ marginTop: '8px' }}
              >
                🚀 查看 Cockpit 组件演示
              </Button>
            </div>
          </div>
        </div>

        {/* Input 输入框演示 */}
        <div className="demo-section">
          <h2 className="demo-section-title">Input 输入框组件</h2>
          
          <div className="demo-group">
            <div className="demo-group-title">基础输入框</div>
            <div className="input-demo">
              <Input
                label="用户名"
                placeholder="请输入用户名"
                value={inputValue}
                onChange={setInputValue}
                required
              />
              <Input
                label="密码"
                type="password"
                placeholder="请输入密码"
                helpText="密码长度不少于6位"
              />
            </div>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">输入框尺寸</div>
            <div className="input-demo">
              <Input size="small" placeholder="小尺寸输入框" />
              <Input size="middle" placeholder="中等尺寸输入框" />
              <Input size="large" placeholder="大尺寸输入框" />
            </div>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">输入框状态</div>
            <div className="input-demo">
              <Input
                label="错误状态"
                value={inputValue2}
                onChange={setInputValue2}
                status="error"
                errorMessage="请输入正确的邮箱格式"
                placeholder="error@example.com"
              />
              <Input
                label="警告状态"
                status="warning"
                placeholder="输入内容过短"
                helpText="建议输入更多内容"
              />
              <Input
                label="禁用状态"
                placeholder="禁用的输入框"
                disabled
              />
              <Input
                label="只读状态"
                value="只读内容"
                readOnly
              />
            </div>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">高级功能</div>
            <div className="input-demo">
              <Input
                label="手机号"
                type="tel"
                placeholder="请输入手机号"
                maxLength={11}
                showCount
                allowClear
              />
              <Input
                label="搜索"
                type="search"
                placeholder="搜索内容"
                prefix="🔍"
                allowClear
              />
            </div>
          </div>
        </div>

        {/* Card 卡片演示 */}
        <div className="demo-section">
          <h2 className="demo-section-title">Card 卡片组件</h2>
          
          <div className="demo-group">
            <div className="demo-group-title">基础卡片</div>
            <Card title="简单卡片" subtitle="这是一个基础卡片">
              卡片内容区域，可以放置任意的 React 组件和内容。
            </Card>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">带操作的卡片</div>
            <Card 
              title="功能卡片" 
              subtitle="点击右上角查看更多"
              extra={<span style={{color: '#1677ff'}}>更多</span>}
            >
              这是一个带有额外操作区域的卡片，可以在右上角添加操作按钮或链接。
            </Card>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">卡片样式变体</div>
            <Card title="默认卡片" variant="default" size="small">
              默认样式的卡片
            </Card>
            <Card title="轮廓卡片" variant="outlined" size="small">
              轮廓样式的卡片
            </Card>
            <Card title="填充卡片" variant="filled" size="small">
              填充样式的卡片
            </Card>
            <Card title="阴影卡片" variant="elevated" size="small">
              阴影样式的卡片
            </Card>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">可点击卡片</div>
            <Card 
              title="交互卡片" 
              subtitle="点击试试看"
              variant="elevated"
              clickable
              onClick={handleCardClick}
            >
              这是一个可以点击的卡片，具有悬浮和点击效果。
            </Card>
          </div>

          <div className="demo-group">
            <div className="demo-group-title">复杂内容卡片</div>
            <Card 
              title="产品信息" 
              subtitle="高质量的移动端组件"
              extra="💡"
              variant="elevated"
            >
              <div>
                <p><strong>主要特性：</strong></p>
                <ul style={{margin: '8px 0', paddingLeft: '20px'}}>
                  <li>基于 Ant Design Mobile 5</li>
                  <li>TypeScript 支持</li>
                  <li>移动端优化</li>
                  <li>主题定制</li>
                </ul>
                <div style={{marginTop: '16px'}}>
                  <Button size="small" type="primary" style={{marginRight: '8px'}}>
                    了解更多
                  </Button>
                  <Button size="small">
                    查看文档
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 使用说明 */}
        <div className="demo-section">
          <h2 className="demo-section-title">使用说明</h2>
          <div className="demo-tip">
            这是基于 Ant Design Mobile 5 封装的公司内部组件库演示。所有组件都支持 TypeScript，并针对移动端进行了优化。
          </div>
          
          <div className="code-block">
{`// 安装组件库
npm install @company/ui-mobile

// 使用组件
import { Button, Input, Card } from '@company/ui-mobile';
import '@company/ui-mobile/dist/style.css';`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;