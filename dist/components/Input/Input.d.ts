import React from 'react';
import { InputProps as AntdInputProps } from 'antd-mobile';
import './Input.css';
export interface InputProps extends Omit<AntdInputProps, 'type'> {
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
    prefix?: React.ReactNode;
    /** 后缀图标 */
    suffix?: React.ReactNode;
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
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** 获得焦点回调 */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
