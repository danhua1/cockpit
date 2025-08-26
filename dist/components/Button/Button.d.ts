import React from 'react';
import type { ButtonProps as AntdButtonProps } from 'antd-mobile';
import './Button.css';
export interface ButtonProps extends Omit<AntdButtonProps, 'color' | 'fill' | 'type'> {
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
    children?: React.ReactNode;
    /** 点击事件 */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
