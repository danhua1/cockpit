import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'elevated'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    clickable: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '默认卡片',
    children: '这是卡片的内容区域，可以放置任意的内容。',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: '带副标题的卡片',
    subtitle: '这是卡片的副标题',
    children: '这是卡片的内容区域，副标题提供了额外的信息。',
  },
};

export const WithExtra: Story = {
  args: {
    title: '带额外内容的卡片',
    extra: '查看更多',
    children: '这是卡片的内容，右上角有额外的操作区域。',
  },
};

export const Outlined: Story = {
  args: {
    title: '轮廓卡片',
    subtitle: '突出的边框样式',
    variant: 'outlined',
    children: '这是一个轮廓样式的卡片，边框更加明显。',
  },
};

export const Filled: Story = {
  args: {
    title: '填充卡片',
    subtitle: '背景填充样式',
    variant: 'filled',
    children: '这是一个填充背景的卡片样式。',
  },
};

export const Elevated: Story = {
  args: {
    title: '阴影卡片',
    subtitle: '带有阴影效果',
    variant: 'elevated',
    children: '这是一个带有阴影效果的卡片，看起来像是浮起来的。',
  },
};

export const Clickable: Story = {
  args: {
    title: '可点击卡片',
    subtitle: '点击试试看',
    variant: 'elevated',
    clickable: true,
    children: '这是一个可以点击的卡片，具有交互效果。',
  },
};

export const Complex: Story = {
  args: {
    title: '复杂内容卡片',
    subtitle: '包含多种元素',
    extra: '💡',
    variant: 'elevated',
    children: (
      <div>
        <p>这是一个包含复杂内容的卡片示例：</p>
        <ul>
          <li>列表项目 1</li>
          <li>列表项目 2</li>
          <li>列表项目 3</li>
        </ul>
        <p><strong>重要提示：</strong>卡片可以包含任意的 React 组件。</p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Card title="默认卡片" variant="default">
        默认样式的卡片
      </Card>
      <Card title="轮廓卡片" variant="outlined">
        轮廓样式的卡片
      </Card>
      <Card title="填充卡片" variant="filled">
        填充样式的卡片
      </Card>
      <Card title="阴影卡片" variant="elevated">
        阴影样式的卡片
      </Card>
    </div>
  ),
};