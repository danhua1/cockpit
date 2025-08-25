import * as React from 'react';
import React__default from 'react';
import { CardProps as CardProps$1, InputProps as InputProps$1, ButtonProps as ButtonProps$1 } from 'antd-mobile';

interface CardProps extends Omit<CardProps$1, 'title'> {
    /** 卡片标题 */
    title?: React__default.ReactNode;
    /** 副标题 */
    subtitle?: React__default.ReactNode;
    /** 卡片右上角的操作区域 */
    extra?: React__default.ReactNode;
    /** 卡片封面 */
    cover?: React__default.ReactNode;
    /** 卡片样式变体 */
    variant?: 'default' | 'outlined' | 'filled' | 'elevated';
    /** 卡片尺寸 */
    size?: 'small' | 'medium' | 'large';
    /** 是否可点击 */
    clickable?: boolean;
    /** 是否显示加载状态 */
    loading?: boolean;
    /** 是否显示分割线 */
    bordered?: boolean;
    /** 卡片内容 */
    children?: React__default.ReactNode;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React__default.CSSProperties;
    /** 点击事件 */
    onClick?: (event: React__default.MouseEvent<HTMLDivElement>) => void;
    /** 头部样式 */
    headerStyle?: React__default.CSSProperties;
    /** 内容样式 */
    bodyStyle?: React__default.CSSProperties;
}
declare const Card: React__default.FC<CardProps>;

interface InputProps extends Omit<InputProps$1, 'type'> {
    /** 输入框类型 */
    type?: 'text' | 'password' | 'number' | 'tel' | 'email' | 'url' | 'search';
    /** 输入框尺寸 */
    size?: 'small' | 'middle' | 'large';
    /** 输入框状态 */
    status?: 'error' | 'warning';
    /** 是否显示字数统计 */
    showCount?: boolean;
    /** 最大输入长度 */
    maxLength?: number;
    /** 是否允许清除 */
    allowClear?: boolean;
    /** 前缀图标 */
    prefix?: React__default.ReactNode;
    /** 后缀图标 */
    suffix?: React__default.ReactNode;
    /** 标题 */
    label?: string;
    /** 错误信息 */
    errorMessage?: string;
    /** 帮助信息 */
    helpText?: string;
    /** 是否必填 */
    required?: boolean;
    /** 自定义类名 */
    className?: string;
    /** 输入框占位符 */
    placeholder?: string;
    /** 输入框值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
    /** 值变化回调 */
    onChange?: (value: string) => void;
    /** 失去焦点回调 */
    onBlur?: (e: React__default.FocusEvent<HTMLInputElement>) => void;
    /** 获得焦点回调 */
    onFocus?: (e: React__default.FocusEvent<HTMLInputElement>) => void;
}
declare const Input: React__default.FC<InputProps>;

interface ButtonProps extends Omit<ButtonProps$1, 'color' | 'fill' | 'type'> {
    /** 按钮类型 */
    type?: 'primary' | 'default' | 'success' | 'warning' | 'danger';
    /** 按钮的原生 type 属性 */
    htmlType?: 'button' | 'submit' | 'reset';
    /** 按钮尺寸 */
    size?: 'mini' | 'small' | 'middle' | 'large';
    /** 是否为块级按钮 */
    block?: boolean;
    /** 是否显示加载状态 */
    loading?: boolean;
    /** 是否禁用按钮 */
    disabled?: boolean;
    /** 按钮形状 */
    shape?: 'default' | 'rounded' | 'rectangular';
    /** 自定义类名 */
    className?: string;
    /** 按钮内容 */
    children?: React__default.ReactNode;
    /** 点击事件 */
    onClick?: (event: React__default.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: React__default.FC<ButtonProps>;

declare const version = "1.0.0";
declare const _default: {
    Button: React.FC<ButtonProps>;
    Input: React.FC<InputProps>;
    Card: React.FC<CardProps>;
    version: string;
};

export { Button, Card, Input, _default as default, version };
export type { ButtonProps, CardProps, InputProps };
