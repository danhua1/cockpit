import type { Meta, StoryObj } from '@storybook/react';
import { Cockpit } from '../src/components/Cockpit';
import { AppOutline, UserOutline, SearchOutline, MoreOutline, AppstoreOutline } from 'antd-mobile-icons';

const meta: Meta<typeof Cockpit> = {
  title: 'Components/Cockpit',
  component: Cockpit,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '基于 Ant Design Mobile 的驾驶舱组件，提供统一的页面布局和底部导航。'
      }
    }
  },
  argTypes: {
    children: {
      description: '页面内容',
      control: false,
    },
    backTitle: {
      description: '返回按钮文本',
      control: 'text',
    },
    NavBarTitle: {
      description: '导航栏标题',
      control: 'text',
    },
    footerTabs: {
      description: '底部标签页配置',
      control: false,
    },
    onNavigate: {
      description: '路由跳转回调函数',
      action: 'navigate',
    },
    onTabChange: {
      description: '标签页切换回调函数',
      action: 'tabChange',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockFooterTabs = [
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
    key: 'profile',
    title: '我的',
    icon: <UserOutline />,
    url: '/profile',
    children: [
      {
        key: 'settings',
        title: '设置',
        icon: <AppstoreOutline />,
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
];

const mockContent = (
  <div style={{ padding: '20px', height: '500px' }}>
    <h2>页面内容区域</h2>
    <p>这里是驾驶舱组件的内容区域，可以放置任何页面内容。</p>
    <div style={{ 
      background: '#f5f5f5', 
      padding: '20px', 
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h3>功能特点:</h3>
      <ul>
        <li>统一的页面布局</li>
        <li>响应式底部导航</li>
        <li>支持二级菜单</li>
        <li>可自定义主题色</li>
        <li>安全区域适配</li>
      </ul>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    NavBarTitle: '驾驶舱组件',
    backTitle: '返回',
    footerTabs: mockFooterTabs,
    children: mockContent,
  },
};

export const WithManyTabs: Story = {
  args: {
    NavBarTitle: '多标签示例',
    backTitle: '返回',
    footerTabs: [
      ...mockFooterTabs,
      {
        key: 'tab4',
        title: '标签4',
        icon: <MoreOutline />,
        url: '/tab4',
      },
      {
        key: 'tab5',
        title: '标签5',
        icon: <AppstoreOutline />,
        url: '/tab5',
      },
      {
        key: 'tab6',
        title: '标签6',
        icon: <AppOutline />,
        url: '/tab6',
      },
    ],
    children: (
      <div style={{ padding: '20px' }}>
        <h2>多标签示例</h2>
        <p>当标签数量超过4个时，会自动显示"更多"按钮。</p>
      </div>
    ),
  },
};

export const CustomInitialTab: Story = {
  args: {
    NavBarTitle: '自定义初始标签',
    backTitle: '返回',
    footerTabs: mockFooterTabs,
    initKey: 'profile',
    children: (
      <div style={{ padding: '20px' }}>
        <h2>自定义初始标签</h2>
        <p>可以通过 initKey 属性设置初始激活的标签页。</p>
      </div>
    ),
  },
};