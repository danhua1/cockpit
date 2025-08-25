import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd-mobile';
import classNames from 'classnames';

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

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  htmlType = 'button',
  size = 'middle',
  block = false,
  loading = false,
  disabled = false,
  shape = 'default',
  className,
  children,
  onClick,
  ...rest
}) => {
  // 映射公司内部类型到 antd-mobile 的 color 属性
  const getAntdColor = (buttonType: string) => {
    switch (buttonType) {
      case 'primary':
        return 'primary';
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'danger':
        return 'danger';
      default:
        return 'default';
    }
  };

  // 映射尺寸
  const getAntdSize = (buttonSize: string) => {
    switch (buttonSize) {
      case 'mini':
        return 'mini';
      case 'small':
        return 'small';
      case 'middle':
        return 'middle';
      case 'large':
        return 'large';
      default:
        return 'middle';
    }
  };

  const buttonClassName = classNames(
    'company-button',
    `company-button--${type}`,
    `company-button--${size}`,
    `company-button--${shape}`,
    {
      'company-button--block': block,
      'company-button--loading': loading,
      'company-button--disabled': disabled,
    },
    className
  );

  return (
    <AntdButton
      color={getAntdColor(type)}
      size={getAntdSize(size)}
      block={block}
      loading={loading}
      disabled={disabled}
      className={buttonClassName}
      onClick={onClick}
      {...rest}
    >
      {children}
    </AntdButton>
  );
};

export default Button;