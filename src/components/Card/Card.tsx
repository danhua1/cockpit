import React from 'react';
import { Card as AntdCard } from 'antd-mobile';
import type { CardProps as AntdCardProps } from 'antd-mobile';
import classNames from 'classnames';
import './Card.css';

export interface CardProps extends Omit<AntdCardProps, 'title'> {
  /** 卡片标题 */
  title?: React.ReactNode;
  /** 副标题 */
  subtitle?: React.ReactNode;
  /** 卡片右上角的操作区域 */
  extra?: React.ReactNode;
  /** 卡片封面 */
  cover?: React.ReactNode;
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
  children?: React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** 头部样式 */
  headerStyle?: React.CSSProperties;
  /** 内容样式 */
  bodyStyle?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  extra,
  cover,
  variant = 'default',
  size = 'medium',
  clickable = false,
  loading = false,
  bordered = true,
  children,
  className,
  style,
  onClick,
  headerStyle,
  bodyStyle,
  ...rest
}) => {
  const cardClassName = classNames(
    'company-card',
    `company-card--${variant}`,
    `company-card--${size}`,
    {
      'company-card--clickable': clickable,
      'company-card--loading': loading,
      'company-card--bordered': bordered,
      'company-card--no-header': !title && !subtitle && !extra,
    },
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (clickable && onClick && !loading) {
      onClick(event);
    }
  };

  const renderHeader = () => {
    if (!title && !subtitle && !extra) return null;

    return (
      <div className="company-card-header" style={headerStyle}>
        <div className="company-card-header-content">
          {title && <div className="company-card-title">{title}</div>}
          {subtitle && <div className="company-card-subtitle">{subtitle}</div>}
        </div>
        {extra && <div className="company-card-extra">{extra}</div>}
      </div>
    );
  };

  const renderCover = () => {
    if (!cover) return null;

    return (
      <div className="company-card-cover">
        {cover}
      </div>
    );
  };

  const renderBody = () => {
    if (!children) return null;

    return (
      <div className="company-card-body" style={bodyStyle}>
        {children}
      </div>
    );
  };

  const renderLoading = () => {
    if (!loading) return null;

    return (
      <div className="company-card-loading-overlay">
        <div className="company-card-loading-spinner">
          <div className="company-card-loading-dot"></div>
          <div className="company-card-loading-dot"></div>
          <div className="company-card-loading-dot"></div>
        </div>
      </div>
    );
  };

  return (
    <AntdCard
      className={cardClassName}
      style={style}
      onClick={handleClick}
      {...rest}
    >
      {renderCover()}
      {renderHeader()}
      {renderBody()}
      {renderLoading()}
    </AntdCard>
  );
};

export default Card;