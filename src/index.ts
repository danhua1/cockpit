// 导入组件及其样式
import ButtonComponent from './components/Button';
import InputComponent from './components/Input';
import CardComponent from './components/Card';
import CockpitComponent from './components/Cockpit';

// 显式导入CSS确保样式被包含（副作用导入）
import './components/Button/Button.css';
import './components/Input/Input.css';
import './components/Card/Card.css';
import './components/Cockpit/Cockpit.css';

// 导出组件
export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Card } from './components/Card';
export { default as Cockpit } from './components/Cockpit';

// 导出类型
export type { ButtonProps } from './components/Button';
export type { InputProps } from './components/Input';
export type { CardProps } from './components/Card';
export type { CockpitProps, FooterTab, FooterTabChild, FooterTabs } from './components/Cockpit';

// 版本信息
export const version = '1.2.0';

// 默认导出（支持全量导入）
export default {
  Button: ButtonComponent,
  Input: InputComponent,
  Card: CardComponent,
  Cockpit: CockpitComponent,
  version,
};