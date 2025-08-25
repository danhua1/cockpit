import React from 'react';
import type { FC, ReactNode } from 'react';
export interface FooterTabChild {
    /** 背景颜色 */
    backgroundColor: string;
    /** 文字颜色 */
    textColor: string;
    /** 标题 */
    title: string;
    /** 唯一标识 */
    key: string;
    /** 图标 */
    icon: ReactNode;
    /** 跳转链接 */
    url: string;
}
export interface FooterTab {
    /** 唯一标识 */
    key: string;
    /** 标题 */
    title: string;
    /** 跳转链接 */
    url?: string;
    /** 图标 */
    icon: ReactNode;
    /** 徽标 */
    badge?: string | number;
    /** 是否禁用 */
    disable?: boolean;
    /** 子菜单 */
    children?: FooterTabChild[];
}
export type FooterTabs = FooterTab[];
export interface CockpitProps {
    /** 子内容 */
    children?: ReactNode;
    /** 返回按钮文本 */
    backTitle?: string;
    /** 返回按钮图标 */
    backArrowContent?: ReactNode;
    /** 右侧内容 */
    rightContent?: ReactNode;
    /** 导航栏标题 */
    NavBarTitle?: ReactNode | string;
    /** 返回回调函数 */
    back?: () => void;
    /** 底部标签页配置 */
    footerTabs: FooterTabs;
    /** 初始激活的标签 */
    initKey?: string;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 路由跳转回调函数 */
    onNavigate?: (url: string) => void;
    /** 标签页切换回调函数 */
    onTabChange?: (key: string, tab: FooterTab) => void;
}
declare const Cockpit: FC<CockpitProps>;
export default Cockpit;
