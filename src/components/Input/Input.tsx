import React from 'react';
import { Input as AntdInput } from 'antd-mobile';
import type { InputProps as AntdInputProps } from 'antd-mobile';
import classNames from 'classnames';
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

const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'middle',
  status,
  showCount = false,
  maxLength,
  allowClear = false,
  prefix,
  suffix,
  label,
  errorMessage,
  helpText,
  required = false,
  className,
  placeholder,
  value,
  defaultValue,
  disabled = false,
  readOnly = false,
  onChange,
  onBlur,
  onFocus,
  ...rest
}) => {
  const inputClassName = classNames(
    'company-input',
    `company-input--${size}`,
    {
      'company-input--error': status === 'error' || errorMessage,
      'company-input--warning': status === 'warning',
      'company-input--disabled': disabled,
      'company-input--readonly': readOnly,
      'company-input--with-prefix': prefix,
      'company-input--with-suffix': suffix,
    },
    className
  );

  const wrapperClassName = classNames('company-input-wrapper', {
    'company-input-wrapper--required': required,
  });

  return (
    <div className={wrapperClassName}>
      {label && (
        <div className="company-input-label">
          {label}
          {required && <span className="company-input-required">*</span>}
        </div>
      )}
      
      <div className="company-input-container">
        <AntdInput
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          className={inputClassName}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          {...rest}
        />
        
        {prefix && <div className="company-input-prefix">{prefix}</div>}
        {suffix && <div className="company-input-suffix">{suffix}</div>}
        {allowClear && value && !disabled && !readOnly && (
          <div 
            className="company-input-clear"
            onClick={() => onChange?.('')}
          >
            ✕
          </div>
        )}
      </div>

      {showCount && maxLength && (
        <div className="company-input-count">
          {(value || '').length}/{maxLength}
        </div>
      )}

      {errorMessage && (
        <div className="company-input-error-message">{errorMessage}</div>
      )}

      {helpText && !errorMessage && (
        <div className="company-input-help-text">{helpText}</div>
      )}
    </div>
  );
};

export default Input;