import React, { useState, useCallback, useLayoutEffect, useMemo } from 'react';
import './Cockpit.css';
import { TabBar, Badge, Popup, SafeArea, NavBar } from 'antd-mobile';
import { AppstoreOutline, LeftOutline } from 'antd-mobile-icons';
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

const Cockpit: FC<CockpitProps> = ({
  children,
  backTitle = '返回',
  backArrowContent = <LeftOutline color="#ffffff" />,
  rightContent,
  NavBarTitle = '测试标题',
  back,
  footerTabs,
  initKey,
  className,
  style,
  onNavigate,
  onTabChange,
}) => {
  const [tags, setTags] = useState<string>(initKey || footerTabs?.[0]?.key || 'home');
  const [visible2, setVisible2] = useState(false);
  const [childrenList, setChildrenList] = useState<Array<FooterTabChild>>([]);

  useLayoutEffect(() => {
    const themeColor = document.querySelector<HTMLElement>('.company-cockpit')!;
    if (themeColor) {
      themeColor.style.setProperty('--active-color', '#eb6e00');
    }
  }, []);

  const { getFooterTabs, extendMenuList } = useMemo(() => {
    const len = footerTabs?.length ?? 0;

    if (len <= 0) {
      console.warn('菜单参数异常');
      return { getFooterTabs: [], extendMenuList: [] };
    }

    if (len === 1) {
      // 只有一个标签时的处理逻辑
      return { getFooterTabs: footerTabs, extendMenuList: [] };
    }

    if (len >= 5) {
      return {
        getFooterTabs: [
          ...footerTabs.slice(0, 2),
          {
            key: 'showMore',
            title: '',
            icon: (
              <div className="company-cockpit-show-more-icon" onClick={() => setVisible2(true)}>
                <AppstoreOutline />
              </div>
            ),
            url: '',
          },
          ...footerTabs.slice(2, 4),
        ],
        extendMenuList: footerTabs.slice(4),
      };
    }

    return { getFooterTabs: footerTabs, extendMenuList: [] };
  }, [footerTabs]);

  const goTags = useCallback((val: string) => {
    if (val === 'showMore') return;
    
    const data = footerTabs.find(item => item.key === val);
    if (!data) {
      setChildrenList([]);
      return;
    }

    setChildrenList([]);
    if (data?.children) {
      setChildrenList(data.children);
    }
    setTags(val);
    
    // 调用外部回调函数
    if (onTabChange) {
      onTabChange(val, data);
    }
    
    if (data.url && onNavigate) {
      onNavigate(data.url);
    }
  }, [footerTabs, onNavigate, onTabChange]);

  const tagsItem = useCallback((
    title?: string,
    key?: string,
    icon?: ReactNode,
    url?: string,
  ) => {
    return (
      <div
        key={key}
        className="company-cockpit-tag-content"
        onClick={() => {
          if (url && onNavigate) {
            onNavigate(url);
          }
        }}
      >
        <div className="company-cockpit-tag-content-icon">
          {icon}
        </div>
        <p className="company-cockpit-tag-content-title">{title}</p>
      </div>
    );
  }, [onNavigate]);

  const renderMenuList = useCallback(() => {
    return extendMenuList.map((item) => {
      return (
        <div
          className="company-cockpit-menu-content-list"
          onClick={() => {
            if (item.url && onNavigate) {
              onNavigate(item.url);
            }
          }}
          key={item.key}
        >
          <div className="company-cockpit-menu-content-list-item">
            <div className="company-cockpit-menu-content-list-icon">
              {item.icon}
            </div>
            <span>{item.title}</span>
          </div>
        </div>
      );
    });
  }, [extendMenuList, onNavigate]);

  const innerBack = useCallback(() => {
    if (back) {
      back();
    } else {
      // 默认的返回行为，可以通过传入 back 函数来自定义
      console.warn('未提供 back回调函数');
    }
  }, [back]);

  const cockpitClassName = `company-cockpit ${className || ''}`.trim();

  return (
    <div className={cockpitClassName} style={style}>
      {/** 顶部安全区域 */}
      <div className="company-cockpit-top-safe-area">
        <SafeArea position="top" />
      </div>
      
      {/** 展示给用户的区域 */}
      <div className="company-cockpit-content">
        {/** 导航栏 */}
        <div className="company-cockpit-navbar">
          <NavBar
            back={<span className="company-cockpit-navbar-back-title">{backTitle}</span>}
            onBack={innerBack}
            backArrow={backArrowContent ? backArrowContent : false}
            right={rightContent ? rightContent : false}
          >
            <span className="company-cockpit-navbar-title">
              {NavBarTitle}
            </span>
          </NavBar>
        </div>
        
        {/** 当存在二级菜单 */}
        {childrenList && childrenList.length > 0 && (
          <div className="company-cockpit-list-tags">
            {childrenList.map((item) => {
              return tagsItem(
                item.title,
                item.key,
                item.icon,
                item.url,
              );
            })}
          </div>
        )}

        {/** 各个中台渲染的页面 */}
        <div className="company-cockpit-children-content">
          {children}
        </div>

        {/** 座舱底部tab */}
        <div className="company-cockpit-footer-tabbar">
          <TabBar onChange={value => goTags(value)} activeKey={tags}>
            {getFooterTabs && getFooterTabs.map((item: FooterTab) => (
              <TabBar.Item 
                className={`${item.disable ? "company-cockpit-disabled" : ""}`} 
                key={item.key} 
                icon={item.icon} 
                title={item.title} 
              />
            ))}
          </TabBar>
        </div>
      </div>
      
      {/**底部安全区域 */}
      <div className="company-cockpit-bottom-safe-area">
        <SafeArea position="bottom" />
      </div>
      
      <Popup
        visible={visible2}
        onMaskClick={() => {
          setVisible2(false);
        }}
        bodyClassName="company-cockpit-menu-popup"
        bodyStyle={{ height: '40vh' }}
      >
        <div className="company-cockpit-menu-popup-content">
          <div className="company-cockpit-menu-popup-grid">
            {renderMenuList()}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Cockpit;