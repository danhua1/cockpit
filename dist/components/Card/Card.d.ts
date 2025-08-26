import React from 'react';
import type { CardProps as AntdCardProps } from 'antd-mobile';
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
declare const Card: React.FC<CardProps>;
export default Card;
