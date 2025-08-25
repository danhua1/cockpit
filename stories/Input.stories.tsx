import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number', 'tel', 'email', 'url', 'search'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
    },
    status: {
      control: { type: 'select' },
      options: ['error', 'warning'],
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    allowClear: {
      control: 'boolean',
    },
    showCount: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '请输入内容',
  },
};

export const WithLabel: Story = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名',
    required: true,
  },
};

export const Password: Story = {
  args: {
    label: '密码',
    type: 'password',
    placeholder: '请输入密码',
    helpText: '密码长度不少于6位',
  },
};

export const WithError: Story = {
  args: {
    label: '邮箱地址',
    placeholder: '请输入邮箱',
    status: 'error',
    errorMessage: '请输入正确的邮箱格式',
    value: 'invalid-email',
  },
};

export const WithWarning: Story = {
  args: {
    label: '手机号',
    placeholder: '请输入手机号',
    status: 'warning',
    helpText: '建议使用常用手机号',
    value: '123',
  },
};

export const Disabled: Story = {
  args: {
    label: '禁用输入框',
    placeholder: '禁用的输入框',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: '只读输入框',
    value: '只读内容',
    readOnly: true,
  },
};

export const WithCount: Story = {
  args: {
    label: '手机号',
    placeholder: '请输入手机号',
    maxLength: 11,
    showCount: true,
    type: 'tel',
  },
};

export const WithClear: Story = {
  args: {
    label: '搜索',
    placeholder: '搜索内容',
    allowClear: true,
    value: '可清除的内容',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', width: '300px' }}>
      <Input size="small" placeholder="小尺寸输入框" />
      <Input size="middle" placeholder="中等尺寸输入框" />
      <Input size="large" placeholder="大尺寸输入框" />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', width: '300px' }}>
      <Input type="text" label="文本" placeholder="文本输入" />
      <Input type="password" label="密码" placeholder="密码输入" />
      <Input type="number" label="数字" placeholder="数字输入" />
      <Input type="tel" label="电话" placeholder="电话输入" />
      <Input type="email" label="邮箱" placeholder="邮箱输入" />
      <Input type="search" label="搜索" placeholder="搜索输入" />
    </div>
  ),
};