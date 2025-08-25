import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'default', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'small', 'middle', 'large'],
    },
    block: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: '主要按钮',
  },
};

export const Default: Story = {
  args: {
    type: 'default',
    children: '默认按钮',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: '警告按钮',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    children: '危险按钮',
  },
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
    children: '小号按钮',
  },
};

export const Large: Story = {
  args: {
    type: 'primary',
    size: 'large',
    children: '大号按钮',
  },
};

export const Block: Story = {
  args: {
    type: 'primary',
    block: true,
    children: '块级按钮',
  },
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    disabled: true,
    children: '禁用按钮',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', width: '200px' }}>
      <Button type="primary" size="mini">迷你按钮</Button>
      <Button type="primary" size="small">小号按钮</Button>
      <Button type="primary" size="middle">中号按钮</Button>
      <Button type="primary" size="large">大号按钮</Button>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', width: '200px' }}>
      <Button type="primary">主要按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
  ),
};