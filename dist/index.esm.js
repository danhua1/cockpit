import * as React from 'react';
import React__default, { useContext, useRef, useMemo, useState, useCallback, useLayoutEffect, useEffect, forwardRef, memo, useImperativeHandle, isValidElement } from 'react';
import { unstable_batchedUpdates, createPortal } from 'react-dom';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$e = ":root{--adm-radius-s:4px;--adm-radius-m:8px;--adm-radius-l:12px;--adm-font-size-1:9px;--adm-font-size-2:10px;--adm-font-size-3:11px;--adm-font-size-4:12px;--adm-font-size-5:13px;--adm-font-size-6:14px;--adm-font-size-7:15px;--adm-font-size-8:16px;--adm-font-size-9:17px;--adm-font-size-10:18px;--adm-color-primary:#1677ff;--adm-color-success:#00b578;--adm-color-warning:#ff8f1f;--adm-color-danger:#ff3141;--adm-color-yellow:#ff9f18;--adm-color-orange:#ff6430;--adm-color-wathet:#e7f1ff;--adm-color-text:#333;--adm-color-text-secondary:#666;--adm-color-weak:#999;--adm-color-light:#ccc;--adm-color-border:#eee;--adm-color-background:#fff;--adm-color-highlight:var(--adm-color-danger);--adm-color-white:#fff;--adm-color-box:#f5f5f5;--adm-color-text-light-solid:var(--adm-color-white);--adm-color-text-dark-solid:#000;--adm-color-fill-content:var(--adm-color-box);--adm-font-size-main:var(--adm-font-size-5);--adm-font-family:-apple-system,blinkmacsystemfont,\"Helvetica Neue\",helvetica,segoe ui,arial,roboto,\"PingFang SC\",\"miui\",\"Hiragino Sans GB\",\"Microsoft Yahei\",sans-serif;--adm-border-color:var(--adm-color-border)}html[data-prefers-color-scheme=dark]{--adm-color-primary:#3086ff;--adm-color-success:#34b368;--adm-color-warning:#ffa930;--adm-color-danger:#ff4a58;--adm-color-yellow:#ffa930;--adm-color-orange:#e65a2b;--adm-color-wathet:#0d2543;--adm-color-text:#e6e6e6;--adm-color-text-secondary:#b3b3b3;--adm-color-weak:grey;--adm-color-light:#4d4d4d;--adm-color-border:#2b2b2b;--adm-color-box:#0a0a0a;--adm-color-background:#1a1a1a;--adm-color-background-body:var(--adm-color-background);--adm-border-color:var(--adm-color-border)}:root{-webkit-tap-highlight-color:rgba(0,0,0,0)}html{background-color:var(--adm-color-background-body)}body{color:var(--adm-color-text);font-family:var(--adm-font-family);font-size:var(--adm-font-size-main)}a,button{cursor:pointer}a{color:var(--adm-color-primary);transition:opacity .2s ease-in-out}a:active{opacity:.8}.adm-plain-anchor{color:unset;transition:none}.adm-plain-anchor:active{opacity:unset}body.adm-overflow-hidden{overflow:hidden!important}div.adm-px-tester{--size:1;height:calc(var(--size)/2*2px);left:-100vw;pointer-events:none;position:fixed;top:-100vh;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:0}";
styleInject(css_248z$e);

const canUseDom = !!(typeof window !== 'undefined' && typeof document !== 'undefined' && window.document && window.document.createElement);

if (canUseDom) {
  // Make sure the `:active` CSS selector of `button` and `a` take effect
  // See: https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
  document.addEventListener('touchstart', () => {}, true);
}
// Only for debugging. Must COMMENT this line before commit:
// import './css-vars-patch.less'

const typeTemplate = '${label}不是一个有效的${type}';
const zhCN = {
  locale: 'zh-CH',
  common: {
    confirm: '确定',
    cancel: '取消',
    loading: '加载中',
    close: '关闭'
  },
  Calendar: {
    title: '日期选择',
    confirm: '确认',
    start: '开始',
    end: '结束',
    today: '今日',
    markItems: ['一', '二', '三', '四', '五', '六', '日'],
    yearAndMonth: '${year}年${month}月'
  },
  Cascader: {
    placeholder: '请选择'
  },
  Dialog: {
    ok: '我知道了'
  },
  DatePicker: {
    tillNow: '至今'
  },
  ErrorBlock: {
    default: {
      title: '页面遇到一些小问题',
      description: '待会来试试'
    },
    busy: {
      title: '前方拥堵',
      description: '刷新试试'
    },
    disconnected: {
      title: '网络有点忙',
      description: '动动手指帮忙修复'
    },
    empty: {
      title: '没有找到你需要的东西',
      description: '找找其他的吧'
    }
  },
  Form: {
    required: '必填',
    optional: '选填',
    defaultValidateMessages: {
      default: '字段验证错误${label}',
      required: '请输入${label}',
      enum: '${label}必须是其中一个[${enum}]',
      whitespace: '${label}不能为空字符',
      date: {
        format: '${label}日期格式无效',
        parse: '${label}不能转换为日期',
        invalid: '${label}是一个无效日期'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label}须为${len}个字符',
        min: '${label}最少${min}个字符',
        max: '${label}最多${max}个字符',
        range: '${label}须在${min}-${max}字符之间'
      },
      number: {
        len: '${label}必须等于${len}',
        min: '${label}最小值为${min}',
        max: '${label}最大值为${max}',
        range: '${label}须在${min}-${max}之间'
      },
      array: {
        len: '须为${len}个${label}',
        min: '最少${min}个${label}',
        max: '最多${max}个${label}',
        range: '${label}数量须在${min}-${max}之间'
      },
      pattern: {
        mismatch: '${label}与模式不匹配${pattern}'
      }
    }
  },
  ImageUploader: {
    uploading: '上传中...',
    upload: '上传'
  },
  InfiniteScroll: {
    noMore: '没有更多了',
    failedToLoad: '加载失败',
    retry: '重新加载'
  },
  Input: {
    clear: '清除'
  },
  Mask: {
    name: '背景蒙层'
  },
  Modal: {
    ok: '我知道了'
  },
  PasscodeInput: {
    name: '密码输入框'
  },
  PullToRefresh: {
    pulling: '下拉刷新',
    canRelease: '释放立即刷新',
    complete: '刷新成功'
  },
  SearchBar: {
    name: '搜索框'
  },
  Slider: {
    name: '滑动输入条'
  },
  Stepper: {
    decrease: '减少',
    increase: '增加'
  },
  Switch: {
    name: '开关'
  },
  Selector: {
    name: '选择组'
  }
};

const defaultConfigRef = {
  current: {
    locale: zhCN
  }
};
function getDefaultConfig() {
  return defaultConfigRef.current;
}
const ConfigContext = React__default.createContext(null);
function useConfig() {
  var _a;
  return (_a = useContext(ConfigContext)) !== null && _a !== void 0 ? _a : getDefaultConfig();
}

function attachPropertiesToComponent(component, properties) {
  const ret = component;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function withNativeProps(props, element) {
  const p = Object.assign({}, element.props);
  if (props.className) {
    p.className = classNames(element.props.className, props.className);
  }
  if (props.style) {
    p.style = Object.assign(Object.assign({}, p.style), props.style);
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex;
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue;
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key];
    }
  }
  return React__default.cloneElement(element, p);
}

function mergeProps(...items) {
  const ret = {};
  items.forEach(item => {
    if (item) {
      Object.keys(item).forEach(key => {
        if (item[key] !== undefined) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}
/**
 * Merge props and return the first non-undefined value.
 * The later has higher priority. e.g. (10, 1, 5) => 5 wins.
 * This is useful with legacy props that have been deprecated.
 */
function mergeProp(defaultProp, ...propList) {
  for (let i = propList.length - 1; i >= 0; i -= 1) {
    if (propList[i] !== undefined) {
      return propList[i];
    }
  }
  return defaultProp;
}

var css_248z$d = ".adm-popup{--z-index:var(--adm-popup-z-index,1000);position:fixed;z-index:var(--z-index)}.adm-popup-body{background-color:var(--adm-color-background);position:fixed;z-index:calc(var(--z-index) + 10)}.adm-popup-body .adm-popup-close-icon{position:absolute;z-index:100}.adm-popup-body-position-bottom{bottom:0;left:0;width:100%}.adm-popup-body-position-bottom .adm-popup-close-icon{right:8px;top:8px}.adm-popup-body-position-top{left:0;top:0;width:100%}.adm-popup-body-position-top .adm-popup-close-icon{bottom:8px;right:8px}.adm-popup-body-position-left{height:100%;left:0;top:0}.adm-popup-body-position-left .adm-popup-close-icon{right:8px;top:8px}.adm-popup-body-position-right{height:100%;right:0;top:0}.adm-popup-body-position-right .adm-popup-close-icon{left:8px;top:8px}.adm-popup-close-icon{color:var(--adm-color-weak);cursor:pointer;font-size:18px;line-height:1;padding:4px}";
styleInject(css_248z$d);

var isFunction = function (value) {
    return typeof value === 'function';
};

var isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

var useMemoizedFn = function (fn) {
    if (isDev) {
        if (!isFunction(fn)) {
            console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof fn));
        }
    }
    var fnRef = useRef(fn);
    // why not write `fnRef.current = fn`?
    // https://github.com/alibaba/hooks/issues/728
    fnRef.current = useMemo(function () { return fn; }, [fn]);
    var memoizedFn = useRef(undefined);
    if (!memoizedFn.current) {
        memoizedFn.current = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fnRef.current.apply(this, args);
        };
    }
    return memoizedFn.current;
};

var isBrowser$1 = !!(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);

var useUpdate = function () {
    var _a = __read(useState({}), 2), setState = _a[1];
    return useCallback(function () { return setState({}); }, []);
};

var useIsomorphicLayoutEffect$1 = isBrowser$1 ? useLayoutEffect : useEffect;

var useUnmountedRef = function () {
    var unmountedRef = useRef(false);
    useEffect(function () {
        unmountedRef.current = false;
        return function () {
            unmountedRef.current = true;
        };
    }, []);
    return unmountedRef;
};

var css_248z$c = ".adm-mask{--z-index:var(--adm-mask-z-index,1000);display:block;position:fixed;z-index:var(--z-index)}.adm-mask,.adm-mask-aria-button{height:100%;left:0;top:0;width:100%}.adm-mask-aria-button{pointer-events:none;position:absolute;z-index:0}.adm-mask-content{z-index:1}";
styleInject(css_248z$c);

const MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}
function useTouch() {
  const startX = useRef(0);
  const startY = useRef(0);
  const deltaX = useRef(0);
  const deltaY = useRef(0);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const direction = useRef('');
  const isVertical = () => direction.current === 'vertical';
  const isHorizontal = () => direction.current === 'horizontal';
  const reset = () => {
    deltaX.current = 0;
    deltaY.current = 0;
    offsetX.current = 0;
    offsetY.current = 0;
    direction.current = '';
  };
  const start = event => {
    reset();
    startX.current = event.touches[0].clientX;
    startY.current = event.touches[0].clientY;
  };
  const move = event => {
    const touch = event.touches[0];
    // Fix: Safari back will set clientX to negative number
    deltaX.current = touch.clientX < 0 ? 0 : touch.clientX - startX.current;
    deltaY.current = touch.clientY - startY.current;
    offsetX.current = Math.abs(deltaX.current);
    offsetY.current = Math.abs(deltaY.current);
    if (!direction.current) {
      direction.current = getDirection(offsetX.current, offsetY.current);
    }
  };
  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal
  };
}

const defaultRoot = canUseDom ? window : undefined;
const overflowStylePatterns = ['scroll', 'auto', 'overlay'];
function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root;
    }
    const {
      overflowY
    } = window.getComputedStyle(node);
    if (overflowStylePatterns.includes(overflowY) && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}

let supportsPassive = false;
if (canUseDom) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

let totalLockCount = 0;
const BODY_LOCK_CLASS = 'adm-overflow-hidden';
function getScrollableElement(el) {
  let current = el === null || el === void 0 ? void 0 : el.parentElement;
  while (current) {
    if (current.clientHeight < current.scrollHeight) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
// 移植自vant：https://github.com/youzan/vant/blob/HEAD/src/composables/use-lock-scroll.ts
function useLockScroll(rootRef, shouldLock) {
  const touch = useTouch();
  const onTouchMove = event => {
    touch.move(event);
    const direction = touch.deltaY.current > 0 ? '10' : '01';
    const el = getScrollParent(event.target, rootRef.current);
    if (!el) return;
    // This has perf cost but we have to compatible with iOS 12
    if (shouldLock === 'strict') {
      const scrollableParent = getScrollableElement(event.target);
      if (scrollableParent === document.body || scrollableParent === document.documentElement) {
        event.preventDefault();
        return;
      }
    }
    const {
      scrollHeight,
      offsetHeight,
      scrollTop
    } = el;
    const {
      height
    } = el.getBoundingClientRect();
    let status = '11';
    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if (scrollHeight <= Math.round(height + scrollTop)) {
      status = '10';
    }
    if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      if (event.cancelable && supportsPassive) {
        // https://github.com/ant-design/ant-design-mobile/issues/6282
        event.preventDefault();
      }
    }
  };
  const lock = () => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener('touchmove', onTouchMove, supportsPassive ? {
      passive: false
    } : false);
    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }
    totalLockCount++;
  };
  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);
      totalLockCount--;
      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };
  useEffect(() => {
    if (shouldLock) {
      lock();
      return () => {
        unlock();
      };
    }
  }, [shouldLock]);
}

let updateQueue = makeQueue();
const raf = fn => schedule(fn, updateQueue);
let writeQueue = makeQueue();

raf.write = fn => schedule(fn, writeQueue);

let onStartQueue = makeQueue();

raf.onStart = fn => schedule(fn, onStartQueue);

let onFrameQueue = makeQueue();

raf.onFrame = fn => schedule(fn, onFrameQueue);

let onFinishQueue = makeQueue();

raf.onFinish = fn => schedule(fn, onFinishQueue);

let timeouts = [];

raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;

  let cancel = () => {
    let i = timeouts.findIndex(t => t.cancel == cancel);
    if (~i) timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };

  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};

let findTimeout = time => ~(~timeouts.findIndex(t => t.time > time) || ~timeouts.length);

raf.cancel = fn => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};

raf.sync = fn => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};

raf.throttle = fn => {
  let lastArgs;

  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }

  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }

  throttled.handler = fn;

  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };

  return throttled;
};

let nativeRaf = typeof window != 'undefined' ? window.requestAnimationFrame : () => {};

raf.use = impl => nativeRaf = impl;

raf.now = typeof performance != 'undefined' ? () => performance.now() : Date.now;

raf.batchedUpdates = fn => fn();

raf.catch = console.error;
raf.frameLoop = 'always';

raf.advance = () => {
  if (raf.frameLoop !== 'demand') ; else {
    update();
  }
};

let ts = -1;
let pendingCount = 0;
let sync = false;

function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}

function start() {
  if (ts < 0) {
    ts = 0;

    if (raf.frameLoop !== 'demand') {
      nativeRaf(loop);
    }
  }
}

function stop() {
  ts = -1;
}

function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}

function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);

  if (count) {
    eachSafely(timeouts.splice(0, count), t => t.handler());
    pendingCount -= count;
  }

  if (!pendingCount) {
    stop();
    return;
  }

  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}

function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },

    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },

    flush(arg) {
      if (current.size) {
        next = new Set();
        pendingCount -= current.size;
        eachSafely(current, fn => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }

  };
}

function eachSafely(values, each) {
  values.forEach(value => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

function noop$1() {}
const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
const is = {
  arr: Array.isArray,
  obj: a => !!a && a.constructor.name === 'Object',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === undefined
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  return a === b;
}
const each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }

    return;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}
const toArray = a => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
const flushCalls = (queue, ...args) => flush(queue, fn => fn(...args));
const isSSR = () => typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

let createStringInterpolator$1;
let to;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop$1;
const assign = globals => {
  if (globals.to) to = globals.to;
  if (globals.now) raf.now = globals.now;
  if (globals.colors !== undefined) colors$1 = globals.colors;
  if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
  if (globals.requestAnimationFrame) raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates) raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance) willAdvance = globals.willAdvance;
  if (globals.frameLoop) raf.frameLoop = globals.frameLoop;
};

var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get createStringInterpolator () { return createStringInterpolator$1; },
  get to () { return to; },
  get colors () { return colors$1; },
  get skipAnimation () { return skipAnimation; },
  get willAdvance () { return willAdvance; },
  assign: assign
});

const startQueue = new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
const frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },

  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },

  advance,

  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);

      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },

  clear() {
    currentFrame = [];
    startQueue.clear();
  }

};

function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}

function startSafely(animation) {
  if (!currentFrame.includes(animation)) startUnsafely(animation);
}

function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, other => other.priority > animation.priority), 0, animation);
}

function advance(dt) {
  const nextFrame = prevFrame;

  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;

    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);

      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }

  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}

function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call$1(...parts) {
  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call$1(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call$1(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call$1(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call$1(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  }

  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;

  if (colors$1 && colors$1[color] !== undefined) {
    return colors$1[color];
  }

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 0x000000ff) >>> 0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16) >>> 0;
  }

  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 0x000000ff) >>> 0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }

  if (is.arr(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
};

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

const easings = {
  linear: x => x};

function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$2.apply(this, arguments);
}

const $get = Symbol.for('FluidValue.get');
const $observers = Symbol.for('FluidValue.observers');

const hasFluidValue = arg => Boolean(arg && arg[$get]);

const getFluidValue = arg => arg && arg[$get] ? arg[$get]() : arg;

const getFluidObservers = target => target[$observers] || null;

function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}

function callFluidObservers(target, event) {
  let observers = target[$observers];

  if (observers) {
    observers.forEach(observer => {
      callFluidObserver(observer, event);
    });
  }
}

class FluidValue {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;

    if (!get && !(get = this.get)) {
      throw Error('Unknown getter');
    }

    setFluidGetter(this, get);
  }

}

const setFluidGetter = (target, get) => setHidden(target, $get, get);

function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];

    if (!observers) {
      setHidden(target, $observers, observers = new Set());
    }

    if (!observers.has(observer)) {
      observers.add(observer);

      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }

  return observer;
}

function removeFluidObserver(target, observer) {
  let observers = target[$observers];

  if (observers && observers.has(observer)) {
    const count = observers.size - 1;

    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }

    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}

const setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, 'i');
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

const variableToRgba = input => {
  const [token, fallback] = parseCSSVariable(input);

  if (!token || isSSR()) {
    return input;
  }

  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);

  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith('--')) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);

    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }

  return input;
};

const parseCSSVariable = current => {
  const match = cssVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};

let namedColorRegex;

const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;

const createStringInterpolator = config => {
  if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join('|')})(?!\\w)`, 'g') : /^\b$/;
  const output = config.output.map(value => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map(value => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map(values => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }

    return values[i];
  }));
  const interpolators = outputRanges.map(output => createInterpolator(_extends$2({}, config, {
    output
  })));
  return input => {
    var _output$find;

    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find(value => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ''));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ''}`).replace(rgbaRegex, rgbaRound);
  };
};

const prefix = 'react-spring: ';
const once = fn => {
  const func = fn;
  let called = false;

  if (typeof func != 'function') {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }

  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
const warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}

function isAnimatedString(value) {
  return is.str(value) && (value[0] == '#' || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}

const useIsomorphicLayoutEffect = isSSR() ? useEffect : useLayoutEffect;

const useIsMounted = () => {
  const isMounted = useRef(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

function useForceUpdate() {
  const update = useState()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update(Math.random());
    }
  };
}

function useMemoOne(getResult, inputs) {
  const [initial] = useState(() => ({
    inputs,
    result: getResult()
  }));
  const committed = useRef();
  const prevCache = committed.current;
  let cache = prevCache;

  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));

    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }

  useEffect(() => {
    committed.current = cache;

    if (prevCache == initial) {
      initial.inputs = initial.result = undefined;
    }
  }, [cache]);
  return cache.result;
}

function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }

  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }

  return true;
}

const useOnce = effect => useEffect(effect, emptyDeps);
const emptyDeps = [];

function usePrev(value) {
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

const $node = Symbol.for('Animated:node');
const isAnimated = value => !!value && value[$node] === value;
const getAnimated = owner => owner && owner[$node];
const setAnimated = (owner, node) => defineHidden(owner, $node, node);
const getPayload = owner => owner && owner[$node] && owner[$node].getPayload();
class Animated {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }

  getPayload() {
    return this.payload || [];
  }

}

class AnimatedValue extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;

    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }

  static create(value) {
    return new AnimatedValue(value);
  }

  getPayload() {
    return [this];
  }

  getValue() {
    return this._value;
  }

  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;

      if (step) {
        value = Math.round(value / step) * step;

        if (this.done) {
          this.lastPosition = value;
        }
      }
    }

    if (this._value === value) {
      return false;
    }

    this._value = value;
    return true;
  }

  reset() {
    const {
      done
    } = this;
    this.done = false;

    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done) this.lastVelocity = null;
      this.v0 = null;
    }
  }

}

class AnimatedString extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }

  static create(value) {
    return new AnimatedString(value);
  }

  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }

  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }

      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }

    return true;
  }

  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }

    this._value = 0;
    super.reset();
  }

}

const TreeContext = {
  dependencies: null
};

class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }

  getValue(animated) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }

  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }

  reset() {
    if (this.payload) {
      each(this.payload, node => node.reset());
    }
  }

  _makePayload(source) {
    if (source) {
      const payload = new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }

  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }

    const payload = getPayload(source);

    if (payload) {
      each(payload, node => this.add(node));
    }
  }

}

class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }

  static create(source) {
    return new AnimatedArray(source);
  }

  getValue() {
    return this.source.map(node => node.getValue());
  }

  setValue(source) {
    const payload = this.getPayload();

    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }

    super.setValue(source.map(makeAnimated));
    return true;
  }

}

function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}

function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$1.apply(this, arguments);
}

const withAnimated = (Component, host) => {
  const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return forwardRef((givenProps, givenRef) => {
    const instanceRef = useRef(null);
    const ref = hasInstance && useCallback(value => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = useForceUpdate();

    const callback = () => {
      const instance = instanceRef.current;

      if (hasInstance && !instance) {
        return;
      }

      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;

      if (didUpdate === false) {
        forceUpdate();
      }
    };

    const observer = new PropsObserver(callback, deps);
    const observerRef = useRef();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, dep => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(observerRef.current.deps, dep => removeFluidObserver(dep, observerRef.current));
          raf.cancel(observerRef.current.update);
        }
      };
    });
    useEffect(callback, []);
    useOnce(() => () => {
      const observer = observerRef.current;
      each(observer.deps, dep => removeFluidObserver(dep, observer));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return React.createElement(Component, _extends$1({}, usedProps, {
      ref: ref
    }));
  });
};

class PropsObserver {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }

  eventObserved(event) {
    if (event.type == 'change') {
      raf.write(this.update);
    }
  }

}

function getAnimatedState(props, host) {
  const dependencies = new Set();
  TreeContext.dependencies = dependencies;
  if (props.style) props = _extends$1({}, props, {
    style: host.createAnimatedStyle(props.style)
  });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}

function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref)) ref(value);else ref.current = value;
  }

  return value;
}

const cacheKey = Symbol.for('AnimatedComponent');
const createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = style => new AnimatedObject(style),
  getComponentProps: _getComponentProps = props => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };

  const animated = Component => {
    const displayName = getDisplayName(Component) || 'Anonymous';

    if (is.str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }

    Component.displayName = `Animated(${displayName})`;
    return Component;
  };

  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }

    animated[key] = animated(Component);
  });
  return {
    animated
  };
};

const getDisplayName = arg => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
const matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
const resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : undefined;

const noopTransform = value => value;

const getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;

  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }

  const defaults = {};

  for (const key of keys) {
    const value = transform(props[key], key);

    if (!is.und(value)) {
      defaults[key] = value;
    }
  }

  return defaults;
};
const DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
const RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};

function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });

  if (count) {
    return forward;
  }
}

function inferTo(props) {
  const to = getForwardProps(props);

  if (to) {
    const out = {
      to
    };
    eachProp(props, (val, key) => key in to || (out[key] = val));
    return out;
  }

  return _extends({}, props);
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props) return true;

  return false;
}
function isAsyncTo(to) {
  return is.fun(to) || is.arr(to) && is.obj(to[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;

  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;

    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

const config = {
  default: {
    tension: 170,
    friction: 26
  }};

const defaults = _extends({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});

class AnimationConfig {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }

}
function mergeConfig(config, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }

  sanitizeConfig(config, newConfig);
  Object.assign(config, newConfig);

  for (const key in defaults) {
    if (config[key] == null) {
      config[key] = defaults[key];
    }
  }

  let {
    mass,
    frequency,
    damping
  } = config;

  if (!is.und(frequency)) {
    if (frequency < 0.01) frequency = 0.01;
    if (damping < 0) damping = 0;
    config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config.friction = 4 * Math.PI * damping * mass / frequency;
  }

  return config;
}

function sanitizeConfig(config, props) {
  if (!is.und(props.decay)) {
    config.duration = undefined;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);

    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config.duration = undefined;
      config.decay = undefined;
    }

    if (isTensionConfig) {
      config.frequency = undefined;
    }
  }
}

const emptyArray = [];
class Animation {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }

}

function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;

    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }

      let pause = defaultProps == null ? void 0 : defaultProps.pause;

      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }

      delay = callProp(props.delay || 0, key);

      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }

    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }

    function onResume() {
      if (delay > 0 && !globals.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }

    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }

      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);

      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }

      try {
        actions.start(_extends({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some(result => result.cancelled) ? getCancelledResult(target.get()) : results.every(result => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(result => result.finished));
const getNoopResult = value => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
const getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
const getCancelledResult = value => ({
  value,
  cancelled: true,
  finished: false
});

function runAsync(to, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;

  if (!parentId && to === prevTo && !props.reset) {
    return prevPromise;
  }

  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to;
    const defaultProps = getDefaultProps(props, (value, key) => key === 'onRest' ? undefined : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));

    const bailIfEnded = bailSignal => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };

    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }

        bailIfEnded(bailSignal);
        const props = is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
          to: arg1
        });
        props.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props[key])) {
            props[key] = value;
          }
        });
        const result = await target.start(props);
        bailIfEnded(bailSignal);

        if (state.paused) {
          await new Promise(resume => {
            state.resumeQueue.add(resume);
          });
        }

        return result;
      })();
    };

    let result;

    if (globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }

    try {
      let animating;

      if (is.arr(to)) {
        animating = (async queue => {
          for (const props of queue) {
            await animate(props);
          }
        })(to);
      } else {
        animating = Promise.resolve(to(animate, target.stop.bind(target)));
      }

      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : undefined;
        state.promise = parentId ? prevPromise : undefined;
      }
    }

    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }

    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, t => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = undefined;
  if (cancelId) state.cancelId = cancelId;
}
class BailSignal extends Error {
  constructor() {
    super('An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
    this.result = void 0;
  }

}
class SkipAnimationSignal extends Error {
  constructor() {
    super('SkipAnimationSignal');
    this.result = void 0;
  }

}

const isFrameValue = value => value instanceof FrameValue;
let nextId$1 = 1;
class FrameValue extends FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;

      this._onPriorityChange(priority);
    }
  }

  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }

  to(...args) {
    return globals.to(this, args);
  }

  interpolate(...args) {
    deprecateInterpolate();
    return globals.to(this, args);
  }

  toJSON() {
    return this.get();
  }

  observerAdded(count) {
    if (count == 1) this._attach();
  }

  observerRemoved(count) {
    if (count == 0) this._detach();
  }

  _attach() {}

  _detach() {}

  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: 'change',
      parent: this,
      value,
      idle
    });
  }

  _onPriorityChange(priority) {
    if (!this.idle) {
      frameLoop.sort(this);
    }

    callFluidObservers(this, {
      type: 'priority',
      parent: this,
      priority
    });
  }

}

const $P = Symbol.for('SpringPhase');
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
const hasAnimated = target => (target[$P] & HAS_ANIMATED) > 0;
const isAnimating = target => (target[$P] & IS_ANIMATING) > 0;
const isPaused = target => (target[$P] & IS_PAUSED) > 0;
const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

class SpringValue extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._pendingCalls = new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;

    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });

      if (is.und(props.default)) {
        props.default = true;
      }

      this.start(props);
    }
  }

  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }

  get goal() {
    return getFluidValue(this.animation.to);
  }

  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map(node => node.lastVelocity || 0);
  }

  get hasAnimated() {
    return hasAnimated(this);
  }

  get isAnimating() {
    return isAnimating(this);
  }

  get isPaused() {
    return isPaused(this);
  }

  get isDelayed() {
    return this._state.delayed;
  }

  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config,
      toValues
    } = anim;
    const payload = getPayload(anim.to);

    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }

    anim.values.forEach((node, i) => {
      if (node.done) return;
      const to = node.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to;

      if (!finished) {
        position = node.lastPosition;

        if (config.tension <= 0) {
          node.done = true;
          return;
        }

        let elapsed = node.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node.v0 != null ? node.v0 : node.v0 = is.arr(config.velocity) ? config.velocity[i] : config.velocity;
        let velocity;
        const precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));

        if (!is.und(config.duration)) {
          let p = 1;

          if (config.duration > 0) {
            if (this._memoizedDuration !== config.duration) {
              this._memoizedDuration = config.duration;

              if (node.durationProgress > 0) {
                node.elapsedTime = config.duration * node.durationProgress;
                elapsed = node.elapsedTime += dt;
              }
            }

            p = (config.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node.durationProgress = p;
          }

          position = from + config.easing(p) * (to - from);
          velocity = (position - node.lastPosition) / dt;
          finished = p == 1;
        } else if (config.decay) {
          const decay = config.decay === true ? 0.998 : config.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node.lastPosition - position) <= precision;
          velocity = v0 * e;
        } else {
          velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
          const restVelocity = config.restVelocity || precision / 10;
          const bounceFactor = config.clamp ? 0 : config.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to ? node.v0 > 0 : from < to;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);

          for (let n = 0; n < numSteps; ++n) {
            isMoving = Math.abs(velocity) > restVelocity;

            if (!isMoving) {
              finished = Math.abs(to - position) <= precision;

              if (finished) {
                break;
              }
            }

            if (canBounce) {
              isBouncing = position == to || position > to == isGrowing;

              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to;
              }
            }

            const springForce = -config.tension * 0.000001 * (position - to);
            const dampingForce = -config.friction * 0.001 * velocity;
            const acceleration = (springForce + dampingForce) / config.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }

        node.lastVelocity = velocity;

        if (Number.isNaN(position)) {
          finished = true;
        }
      }

      if (payload && !payload[i].done) {
        finished = false;
      }

      if (finished) {
        node.done = true;
      } else {
        idle = false;
      }

      if (node.setValue(position, config.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();

    if (idle) {
      const finalVal = getFluidValue(anim.to);

      if ((currVal !== finalVal || changed) && !config.decay) {
        node.setValue(finalVal);

        this._onChange(finalVal);
      } else if (changed && config.decay) {
        this._onChange(currVal);
      }

      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }

  set(value) {
    raf.batchedUpdates(() => {
      this._stop();

      this._focus(value);

      this._set(value);
    });
    return this;
  }

  pause() {
    this._update({
      pause: true
    });
  }

  resume() {
    this._update({
      pause: false
    });
  }

  finish() {
    if (isAnimating(this)) {
      const {
        to,
        config
      } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();

        if (!config.decay) {
          this._set(to, false);
        }

        this._stop();
      });
    }

    return this;
  }

  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }

  start(to, arg2) {
    let queue;

    if (!is.und(to)) {
      queue = [is.obj(to) ? to : _extends({}, arg2, {
        to
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }

    return Promise.all(queue.map(props => {
      const up = this._update(props);

      return up;
    })).then(results => getCombinedResult(this, results));
  }

  stop(cancel) {
    const {
      to
    } = this.animation;

    this._focus(this.get());

    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to, cancel));
    return this;
  }

  reset() {
    this._update({
      reset: true
    });
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._start();
    } else if (event.type == 'priority') {
      this.priority = event.priority + 1;
    }
  }

  _prepareNode(props) {
    const key = this.key || '';
    let {
      to,
      from
    } = props;
    to = is.obj(to) ? to[key] : to;

    if (to == null || isAsyncTo(to)) {
      to = undefined;
    }

    from = is.obj(from) ? from[key] : from;

    if (from == null) {
      from = undefined;
    }

    const range = {
      to,
      from
    };

    if (!hasAnimated(this)) {
      if (props.reverse) [to, from] = [from, to];
      from = getFluidValue(from);

      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to);
      }
    }

    return range;
  }

  _update(_ref, isLoop) {
    let props = _extends({}, _ref);

    const {
      key,
      defaultProps
    } = this;
    if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, 'onProps');
    sendEvent(this, 'onProps', props, this);

    const range = this._prepareNode(props);

    if (Object.isFrozen(this)) {
      throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
    }

    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(this, 'onPause', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);

            if (isAnimating(this)) {
              this._resume();
            }

            flushCalls(state.resumeQueue);
            sendEvent(this, 'onResume', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then(result => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);

        if (nextProps) {
          return this._update(nextProps, true);
        }
      }

      return result;
    });
  }

  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }

    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);

    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }

    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to = prevTo,
      from = prevFrom
    } = range;

    if (hasFromProp && !hasToProp && (!props.default || is.und(to))) {
      to = from;
    }

    if (props.reverse) [to, from] = [from, to];
    const hasFromChanged = !isEqual(from, prevFrom);

    if (hasFromChanged) {
      anim.from = from;
    }

    from = getFluidValue(from);
    const hasToChanged = !isEqual(to, prevTo);

    if (hasToChanged) {
      this._focus(to);
    }

    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config
    } = anim;
    const {
      decay,
      velocity
    } = config;

    if (hasToProp || hasFromProp) {
      config.velocity = 0;
    }

    if (props.config && !hasAsyncTo) {
      mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }

    let node = getAnimated(this);

    if (!node || is.und(to)) {
      return resolve(getFinishedResult(this, true));
    }

    const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

    if (hasToChanged) {
      const nodeType = getAnimatedType(to);

      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }

    const goalType = node.constructor;
    let started = hasFluidValue(to);
    let finished = false;

    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }

      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config.decay, decay) || !isEqual(config.velocity, velocity)) {
        started = true;
      }
    }

    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }

    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }

      if (anim.immediate != immediate) {
        anim.immediate = immediate;

        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }

      if (started) {
        const {
          onRest
        } = anim;
        each(ACTIVE_EVENTS, type => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);

        this._pendingCalls.add(resolve);

        if (anim.changed) raf.batchedUpdates(() => {
          anim.changed = !reset;
          onRest == null ? void 0 : onRest(result, this);

          if (reset) {
            callProp(defaultProps.onRest, result);
          } else {
            anim.onStart == null ? void 0 : anim.onStart(result, this);
          }
        });
      }
    }

    if (reset) {
      this._set(value);
    }

    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }

  _focus(value) {
    const anim = this.animation;

    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }

      anim.to = value;

      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }

  _attach() {
    let priority = 0;
    const {
      to
    } = this.animation;

    if (hasFluidValue(to)) {
      addFluidObserver(to, this);

      if (isFrameValue(to)) {
        priority = to.priority + 1;
      }
    }

    this.priority = priority;
  }

  _detach() {
    const {
      to
    } = this.animation;

    if (hasFluidValue(to)) {
      removeFluidObserver(to, this);
    }
  }

  _set(arg, idle = true) {
    const value = getFluidValue(arg);

    if (!is.und(value)) {
      const oldNode = getAnimated(this);

      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);

        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }

        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }

    return getAnimated(this);
  }

  _onStart() {
    const anim = this.animation;

    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }

  _onChange(value, idle) {
    if (!idle) {
      this._onStart();

      callProp(this.animation.onChange, value, this);
    }

    callProp(this.defaultProps.onChange, value, this);

    super._onChange(value, idle);
  }

  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));

    if (!anim.immediate) {
      anim.fromValues = anim.values.map(node => node.lastPosition);
    }

    if (!isAnimating(this)) {
      setActiveBit(this, true);

      if (!isPaused(this)) {
        this._resume();
      }
    }
  }

  _resume() {
    if (globals.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }

  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, node => {
        node.done = true;
      });

      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = undefined;
      }

      callFluidObservers(this, {
        type: 'idle',
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      flushCalls(this._pendingCalls, result);

      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, 'onRest', result, this);
      }
    }
  }

}

function checkFinished(target, to) {
  const goal = computeGoal(to);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}

function createLoopUpdate(props, loop = props.loop, to = props.to) {
  let loopRet = callProp(loop);

  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop,
      default: false,
      pause: undefined,
      to: !reverse || isAsyncTo(to) ? to : undefined,
      from: reset ? props.from : undefined,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to,
    from
  } = props = inferTo(props);
  const keys = new Set();
  if (is.obj(to)) findDefined(to, keys);
  if (is.obj(from)) findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update = createUpdate(props);

  if (is.und(update.default)) {
    update.default = getDefaultProps(update);
  }

  return update;
}

function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}

const ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}

function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}

const BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
let nextId = 1;
let Controller$1 = class Controller {
  constructor(props, flush) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);

    if (flush) {
      this._flush = flush;
    }

    if (props) {
      this.start(_extends({
        default: true
      }, props));
    }
  }

  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every(spring => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }

  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;
  }

  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }

  set(values) {
    for (const key in values) {
      const value = values[key];

      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }

  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }

    return this;
  }

  start(props) {
    let {
      queue
    } = this;

    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }

    if (this._flush) {
      return this._flush(this, queue);
    }

    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }

  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }

    if (keys) {
      const springs = this.springs;
      each(toArray(keys), key => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each(spring => spring.stop(!!arg));
    }

    return this;
  }

  pause(keys) {
    if (is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), key => springs[key].pause());
    }

    return this;
  }

  resume(keys) {
    if (is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), key => springs[key].resume());
    }

    return this;
  }

  each(iterator) {
    eachProp(this.springs, iterator);
  }

  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;

    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart, result]) => {
        result.value = this.get();
        onStart(result, this, this._item);
      });
    }

    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;

    if (changed && onChange.size) {
      flush(onChange, ([onChange, result]) => {
        result.value = values;
        onChange(result, this, this._item);
      });
    }

    if (idle) {
      this._started = false;
      flush(onRest, ([onRest, result]) => {
        result.value = values;
        onRest(result, this, this._item);
      });
    }
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._changed.add(event.parent);

      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else return;

    raf.onFrame(this._onFrame);
  }

};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map(props => flushUpdate(ctrl, props))).then(results => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to,
    from,
    loop,
    onRest,
    onResolve
  } = props;
  const defaults = is.obj(props.default) && props.default;

  if (loop) {
    props.loop = false;
  }

  if (to === false) props.to = null;
  if (from === false) props.from = null;
  const asyncTo = is.arr(to) || is.fun(to) ? to : undefined;

  if (asyncTo) {
    props.to = undefined;
    props.onRest = undefined;

    if (defaults) {
      defaults.onRest = undefined;
    }
  } else {
    each(BATCHED_EVENTS, key => {
      const handler = props[key];

      if (is.fun(handler)) {
        const queue = ctrl['_events'][key];

        props[key] = ({
          finished,
          cancelled
        }) => {
          const result = queue.get(handler);

          if (result) {
            if (!finished) result.finished = false;
            if (cancelled) result.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };

        if (defaults) {
          defaults[key] = props[key];
        }
      }
    });
  }

  const state = ctrl['_state'];

  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }

  const promises = (keys || Object.keys(ctrl.springs)).map(key => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
      props,
      state,
      actions: {
        pause: noop$1,
        resume: noop$1,

        start(props, resolve) {
          if (cancel) {
            stopAsync(state, ctrl['_lastAsyncId']);
            resolve(getCancelledResult(ctrl));
          } else {
            props.onRest = onRest;
            resolve(runAsync(asyncTo, props, state, ctrl));
          }
        }

      }
    }));
  }

  if (state.paused) {
    await new Promise(resume => {
      state.resumeQueue.add(resume);
    });
  }

  const result = getCombinedResult(ctrl, await Promise.all(promises));

  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to);

    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }

  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }

  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends({}, ctrl.springs);

  if (props) {
    each(toArray(props), props => {
      if (is.und(props.keys)) {
        props = createUpdate(props);
      }

      if (!is.obj(props.to)) {
        props = _extends({}, props, {
          to: undefined
        });
      }

      prepareSprings(springs, props, key => {
        return createSpring(key);
      });
    });
  }

  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}

function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;

  if (observer) {
    addFluidObserver(spring, observer);
  }

  return spring;
}

function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, key => {
      const spring = springs[key] || (springs[key] = create(key));
      spring['_prepareNode'](props);
    });
  }
}

function prepareKeys(ctrl, queue) {
  each(queue, props => {
    prepareSprings(ctrl.springs, props, key => {
      return createSpring(key, ctrl);
    });
  });
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded$6 = ["children"];
const SpringContext = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose$2(_ref, _excluded$6);

  const inherited = useContext(ctx);
  const pause = props.pause || !!inherited.pause,
        immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return React.createElement(Provider, {
    value: props
  }, children);
};
const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;

function makeContext(target, init) {
  Object.assign(target, React.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

const SpringRef = () => {
  const current = [];

  const SpringRef = function SpringRef(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = _getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.current = current;

  SpringRef.add = function (ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };

  SpringRef.delete = function (ctrl) {
    const i = current.indexOf(ctrl);
    if (~i) current.splice(i, 1);
  };

  SpringRef.pause = function () {
    each(current, ctrl => ctrl.pause(...arguments));
    return this;
  };

  SpringRef.resume = function () {
    each(current, ctrl => ctrl.resume(...arguments));
    return this;
  };

  SpringRef.set = function (values) {
    each(current, ctrl => ctrl.set(values));
  };

  SpringRef.start = function (props) {
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = this._getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.stop = function () {
    each(current, ctrl => ctrl.stop(...arguments));
    return this;
  };

  SpringRef.update = function (props) {
    each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };

  const _getProps = function _getProps(arg, ctrl, index) {
    return is.fun(arg) ? arg(index, ctrl) : arg;
  };

  SpringRef._getProps = _getProps;
  return SpringRef;
};

function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps) deps = [];
  const ref = useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = useRef(0);
  const forceUpdate = useForceUpdate();
  const state = useMemo(() => ({
    ctrls: [],
    queue: [],

    flush(ctrl, updates) {
      const springs = getSprings(ctrl, updates);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some(key => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise(resolve => {
        setSprings(ctrl, springs);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates));
        });
        forceUpdate();
      });
    }

  }), []);
  const ctrls = useRef([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  useMemo(() => {
    each(ctrls.current.slice(length, prevLength), ctrl => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  useMemo(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);

  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller$1(null, state.flush));
      const update = propsFn ? propsFn(i, ctrl) : props[i];

      if (update) {
        updates[i] = declareUpdate(update);
      }
    }
  }

  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = useContext(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;

    if (queue.length) {
      state.queue = [];
      each(queue, cb => cb());
    }

    each(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext) {
        ctrl.start({
          default: context
        });
      }

      const update = updates[i];

      if (update) {
        replaceRef(ctrl, update.ref);

        if (ctrl.ref) {
          ctrl.queue.push(update);
        } else {
          ctrl.start(update);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, ctrl => ctrl.stop(true));
  });
  const values = springs.map(x => _extends({}, x));
  return ref ? [values, ref] : values;
}

function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

let TransitionPhase;

(function (TransitionPhase) {
  TransitionPhase["MOUNT"] = "mount";
  TransitionPhase["ENTER"] = "enter";
  TransitionPhase["UPDATE"] = "update";
  TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));

class Interpolation extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = new Set();
    this.source = source;
    this.calc = createInterpolator(...args);

    const value = this._get();

    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }

  advance(_dt) {
    const value = this._get();

    const oldValue = this.get();

    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);

      this._onChange(value, this.idle);
    }

    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }

  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }

  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), node => {
        node.done = false;
      });

      if (globals.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }

  _attach() {
    let priority = 1;
    each(toArray(this.source), source => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }

      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }

        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;

    this._start();
  }

  _detach() {
    each(toArray(this.source), source => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });

    this._active.clear();

    becomeIdle(this);
  }

  eventObserved(event) {
    if (event.type == 'change') {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);

        this._start();
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else if (event.type == 'priority') {
      this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }

}

function isIdle(source) {
  return source.idle !== false;
}

function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}

function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), node => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: 'idle',
      parent: self
    });
  }
}

globals.assign({
  createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft", "viewBox"];
const isCustomPropRE = /^--/;

function dangerousStyleValue(name, value) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (typeof value === 'number' && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
  return ('' + value).trim();
}

const attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }

  const isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';

  const _ref = props,
        {
    style,
    children,
    scrollTop,
    scrollLeft,
    viewBox
  } = _ref,
        attributes = _objectWithoutPropertiesLoose$1(_ref, _excluded$2);

  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(name => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase())));

  if (children !== void 0) {
    instance.textContent = children;
  }

  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);

      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }

  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });

  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }

  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }

  if (viewBox !== void 0) {
    instance.setAttribute('viewBox', viewBox);
  }
}
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

const _excluded$1 = ["x", "y", "z"];
const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;

const addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;

const isValueIdentity = (value, id) => is.arr(value) ? value.every(v => isValueIdentity(v, id)) : is.num(value) ? value === id : parseFloat(value) === id;

class AnimatedStyle extends AnimatedObject {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref,
        style = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);

    const inputs = [];
    const transforms = [];

    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push(xyz => [`translate3d(${xyz.map(v => addUnit(v, 'px')).join(',')})`, isValueIdentity(xyz, 0)]);
    }

    eachProp(style, (value, key) => {
      if (key === 'transform') {
        inputs.push([value || '']);
        transforms.push(transform => [transform, transform === '']);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value)) return;
        const unit = pxTransforms.test(key) ? 'px' : degTransforms.test(key) ? 'deg' : '';
        inputs.push(toArray(value));
        transforms.push(key === 'rotate3d' ? ([x, y, z, deg]) => [`rotate3d(${x},${y},${z},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : input => [`${key}(${input.map(v => addUnit(v, unit)).join(',')})`, isValueIdentity(input, key.startsWith('scale') ? 1 : 0)]);
      }
    });

    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }

    super(style);
  }

}

class FluidTransform extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }

  get() {
    return this._value || (this._value = this._get());
  }

  _get() {
    let transform = '';
    let identity = true;
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0]);
      const [t, id] = this.transforms[i](is.arr(arg1) ? arg1 : input.map(getFluidValue));
      transform += ' ' + t;
      identity = identity && id;
    });
    return identity ? 'none' : transform;
  }

  observerAdded(count) {
    if (count == 1) each(this.inputs, input => each(input, value => hasFluidValue(value) && addFluidObserver(value, this)));
  }

  observerRemoved(count) {
    if (count == 0) each(this.inputs, input => each(input, value => hasFluidValue(value) && removeFluidObserver(value, this)));
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._value = null;
    }

    callFluidObservers(this, event);
  }

}

const primitives = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

const _excluded$3 = ["scrollTop", "scrollLeft"];
globals.assign({
  batchedUpdates: unstable_batchedUpdates,
  createStringInterpolator,
  colors
});
const host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: _ref => {
    let props = _objectWithoutPropertiesLoose$1(_ref, _excluded$3);

    return props;
  }
});
const animated = host.animated;

function resolveContainer(getContainer) {
  const container = typeof getContainer === 'function' ? getContainer() : getContainer;
  return container || document.body;
}

function renderToContainer(getContainer, node) {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer);
    return createPortal(node, container);
  }
  return node;
}

function useInitialized(check) {
  const initializedRef = useRef(check);
  if (check) {
    initializedRef.current = true;
  }
  return !!initializedRef.current;
}

const ShouldRender = props => {
  const shouldRender = useShouldRender(props.active, props.forceRender, props.destroyOnClose);
  return shouldRender ? props.children : null;
};
function useShouldRender(active, forceRender, destroyOnClose) {
  const initialized = useInitialized(active);
  if (forceRender) return true;
  if (active) return true;
  if (!initialized) return false;
  return !destroyOnClose;
}

const eventToPropRecord = {
  'click': 'onClick',
  'touchstart': 'onTouchStart'
};
function withStopPropagation(events, element) {
  const props = Object.assign({}, element.props);
  for (const key of events) {
    const prop = eventToPropRecord[key];
    props[prop] = function (e) {
      var _a, _b;
      e.stopPropagation();
      (_b = (_a = element.props)[prop]) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    };
  }
  return React__default.cloneElement(element, props);
}

const classPrefix$9 = `adm-mask`;
const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
};
const colorRecord$1 = {
  black: '0, 0, 0',
  white: '255, 255, 255'
};
const defaultProps$5 = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ['click']
};
const Mask = p => {
  const props = mergeProps(defaultProps$5, p);
  const {
    locale
  } = useConfig();
  const ref = useRef(null);
  useLockScroll(ref, props.visible && props.disableBodyScroll);
  const background = useMemo(() => {
    var _a;
    const opacity = (_a = opacityRecord[props.opacity]) !== null && _a !== void 0 ? _a : props.opacity;
    const rgb = colorRecord$1[props.color];
    return rgb ? `rgba(${rgb}, ${opacity})` : props.color;
  }, [props.color, props.opacity]);
  const [active, setActive] = useState(props.visible);
  const unmountedRef = useUnmountedRef();
  const {
    opacity
  } = useSpring({
    opacity: props.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 250,
      friction: 30,
      clamp: true
    },
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      var _a, _b;
      if (unmountedRef.current) return;
      setActive(props.visible);
      if (props.visible) {
        (_a = props.afterShow) === null || _a === void 0 ? void 0 : _a.call(props);
      } else {
        (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    }
  });
  const node = withStopPropagation(props.stopPropagation, withNativeProps(props, React__default.createElement(animated.div, {
    className: classPrefix$9,
    ref: ref,
    "aria-hidden": true,
    style: Object.assign(Object.assign({}, props.style), {
      background,
      opacity,
      display: active ? undefined : 'none'
    }),
    onClick: e => {
      var _a;
      if (e.target === e.currentTarget) {
        (_a = props.onMaskClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
      }
    }
  }, props.onMaskClick && React__default.createElement("div", {
    className: `${classPrefix$9}-aria-button`,
    role: 'button',
    "aria-label": locale.Mask.name,
    onClick: props.onMaskClick
  }), React__default.createElement("div", {
    className: `${classPrefix$9}-content`
  }, props.children))));
  return React__default.createElement(ShouldRender, {
    active: active,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose
  }, renderToContainer(props.getContainer, node));
};

function AppstoreOutline(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props, {
    style: Object.assign({
      verticalAlign: '-0.125em'
    }, props.style),
    className: ['antd-mobile-icon', props.className].filter(Boolean).join(' ')
  }), /*#__PURE__*/React.createElement("g", {
    id: "AppstoreOutline-AppstoreOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "AppstoreOutline-\u7F16\u7EC4"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "AppstoreOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17,25 C20.3137085,25 23,27.6862915 23,31 L23,38 C23,41.3137085 20.3137085,44 17,44 L10,44 C6.6862915,44 4,41.3137085 4,38 L4,31 C4,27.6862915 6.6862915,25 10,25 L17,25 Z M38,25 C41.3137085,25 44,27.6862915 44,31 L44,38 C44,41.3137085 41.3137085,44 38,44 L31,44 C27.6862915,44 25,41.3137085 25,38 L25,31 C25,27.6862915 27.6862915,25 31,25 L38,25 Z M17,28 L10,28 C8.40231912,28 7.09633912,29.24892 7.00509269,30.8237272 L7,31 L7,38 C7,39.5976809 8.24891996,40.9036609 9.82372721,40.9949073 L10,41 L17,41 C18.5976809,41 19.9036609,39.75108 19.9949073,38.1762728 L20,38 L20,31 C20,29.4023191 18.75108,28.0963391 17.1762728,28.0050927 L17,28 Z M38,28 L31,28 C29.4023191,28 28.0963391,29.24892 28.0050927,30.8237272 L28,31 L28,38 C28,39.5976809 29.24892,40.9036609 30.8237272,40.9949073 L31,41 L38,41 C39.5976809,41 40.9036609,39.75108 40.9949073,38.1762728 L41,38 L41,31 C41,29.4023191 39.75108,28.0963391 38.1762728,28.0050927 L38,28 Z M17,4 C20.3137085,4 23,6.6862915 23,10 L23,17 C23,20.3137085 20.3137085,23 17,23 L10,23 C6.6862915,23 4,20.3137085 4,17 L4,10 C4,6.6862915 6.6862915,4 10,4 L17,4 Z M38,4 C41.3137085,4 44,6.6862915 44,10 L44,17 C44,20.3137085 41.3137085,23 38,23 L31,23 C27.6862915,23 25,20.3137085 25,17 L25,10 C25,6.6862915 27.6862915,4 31,4 L38,4 Z M17,7 L10,7 C8.40231912,7 7.09633912,8.24891996 7.00509269,9.82372721 L7,10 L7,17 C7,18.5976809 8.24891996,19.9036609 9.82372721,19.9949073 L10,20 L17,20 C18.5976809,20 19.9036609,18.75108 19.9949073,17.1762728 L20,17 L20,10 C20,8.40231912 18.75108,7.09633912 17.1762728,7.00509269 L17,7 Z M38,7 L31,7 C29.4023191,7 28.0963391,8.24891996 28.0050927,9.82372721 L28,10 L28,17 C28,18.5976809 29.24892,19.9036609 30.8237272,19.9949073 L31,20 L38,20 C39.5976809,20 40.9036609,18.75108 40.9949073,17.1762728 L41,17 L41,10 C41,8.40231912 39.75108,7.09633912 38.1762728,7.00509269 L38,7 Z",
    id: "AppstoreOutline-\u5F62\u72B6\u7ED3\u5408",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

function CloseCircleFill(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props, {
    style: Object.assign({
      verticalAlign: '-0.125em'
    }, props.style),
    className: ['antd-mobile-icon', props.className].filter(Boolean).join(' ')
  }), /*#__PURE__*/React.createElement("g", {
    id: "CloseCircleFill-CloseCircleFill",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "CloseCircleFill-\u7F16\u7EC4"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "CloseCircleFill-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M18.6753876,16 L15.5637812,16 C15.4576916,16 15.3559474,16.0421451 15.2809323,16.1171635 C15.124726,16.2733766 15.1247316,16.5266426 15.2809447,16.6828489 L15.2809447,16.6828489 L22.299066,23.7006641 L14.6828159,31.3171619 C14.6078042,31.3921761 14.5656632,31.4939157 14.5656632,31.6 C14.5656632,31.8209139 14.7447493,32 14.9656632,32 L14.9656632,32 L18.0753284,32 C18.1814068,32 18.2831412,31.9578638 18.3581544,31.8828594 L18.3581544,31.8828594 L24.420066,25.8216641 L30.4818451,31.8828564 C30.5568585,31.9578626 30.6585942,32 30.7646741,32 L30.7646741,32 L33.8763476,32 C33.9824309,32 34.0841695,31.9578599 34.1591835,31.8828496 C34.315397,31.7266436 34.3154031,31.4733776 34.1591972,31.3171641 L34.1591972,31.3171641 L26.542066,23.6996641 L33.5591874,16.6828489 C33.6342057,16.6078338 33.6763508,16.5060896 33.6763508,16.4 C33.6763508,16.1790861 33.4972647,16 33.2763508,16 L33.2763508,16 L30.1637654,16 C30.0576705,16 29.9559218,16.0421493 29.8809058,16.1171741 L29.8809058,16.1171741 L24.420066,21.5786641 L18.9582218,16.1171488 C18.883208,16.0421394 18.7814701,16 18.6753876,16 L18.6753876,16 Z",
    id: "CloseCircleFill-\u5F62\u72B6\u7ED3\u5408",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

function CloseOutline(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props, {
    style: Object.assign({
      verticalAlign: '-0.125em'
    }, props.style),
    className: ['antd-mobile-icon', props.className].filter(Boolean).join(' ')
  }), /*#__PURE__*/React.createElement("g", {
    id: "CloseOutline-CloseOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "CloseOutline-\u7F16\u7EC4"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "CloseOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.6085104,8.11754663 L24.1768397,21.8195031 L24.1768397,21.8195031 L37.7443031,8.1175556 C37.8194278,8.04168616 37.9217669,7.999 38.0285372,7.999 L41.1040268,7.999 C41.3249407,7.999 41.5040268,8.1780861 41.5040268,8.399 C41.5040268,8.50440471 41.4624226,8.60554929 41.3882578,8.68044752 L26.2773302,23.9408235 L26.2773302,23.9408235 L41.5021975,39.3175645 C41.65763,39.4745475 41.6563731,39.7278104 41.4993901,39.8832429 C41.4244929,39.9574004 41.3233534,39.999 41.2179546,39.999 L38.1434012,39.999 C38.0366291,39.999 37.9342885,39.9563124 37.8591634,39.8804408 L24.1768397,26.0621438 L24.1768397,26.0621438 L10.4936501,39.8804497 C10.4185257,39.9563159 10.3161889,39.999 10.2094212,39.999 L7.13584526,39.999 C6.91493136,39.999 6.73584526,39.8199139 6.73584526,39.599 C6.73584526,39.4936017 6.77744443,39.3924627 6.85160121,39.3175656 L22.0763492,23.9408235 L22.0763492,23.9408235 L6.96554081,8.68044639 C6.81010226,8.52346929 6.81134951,8.27020637 6.9683266,8.11476782 C7.04322474,8.04060377 7.14436883,7.999 7.24977299,7.999 L10.3242852,7.999 C10.4310511,7.999 10.5333863,8.04168267 10.6085104,8.11754663 Z",
    id: "CloseOutline-\u8DEF\u5F84",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

function LeftOutline(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props, {
    style: Object.assign({
      verticalAlign: '-0.125em'
    }, props.style),
    className: ['antd-mobile-icon', props.className].filter(Boolean).join(' ')
  }), /*#__PURE__*/React.createElement("g", {
    id: "LeftOutline-LeftOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "LeftOutline-\u7F16\u7EC4"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "LeftOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31.7053818,5.11219264 L13.5234393,22.6612572 L13.5234393,22.6612572 C12.969699,23.2125856 12.9371261,24.0863155 13.4257204,24.6755735 L13.5234393,24.7825775 L31.7045714,42.8834676 C31.7795345,42.9580998 31.8810078,43 31.9867879,43 L35.1135102,43 C35.3344241,43 35.5135102,42.8209139 35.5135102,42.6 C35.5135102,42.4936115 35.4711279,42.391606 35.3957362,42.316542 L16.7799842,23.7816937 L16.7799842,23.7816937 L35.3764658,5.6866816 C35.5347957,5.53262122 35.5382568,5.27937888 35.3841964,5.121049 C35.3088921,5.04365775 35.205497,5 35.0975148,5 L31.9831711,5 C31.8795372,5 31.7799483,5.04022164 31.7053818,5.11219264 Z",
    id: "LeftOutline-\u8DEF\u5F84",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

const defaultPopupBaseProps = {
  closeOnMaskClick: false,
  closeIcon: React__default.createElement(CloseOutline, null),
  destroyOnClose: false,
  disableBodyScroll: true,
  forceRender: false,
  getContainer: () => document.body,
  mask: true,
  showCloseButton: false,
  stopPropagation: ['click'],
  visible: false
};

function useInnerVisible(outerVisible) {
  const [innerVisible, setInnerVisible] = useState(outerVisible);
  useIsomorphicLayoutEffect$1(() => {
    setInnerVisible(outerVisible);
  }, [outerVisible]);
  return innerVisible;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(v, max));
}
const V = {
  toVector(v, fallback) {
    if (v === undefined) v = fallback;
    return Array.isArray(v) ? v : [v, v];
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },
  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },
  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }
};
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
  if (constant === 0) return clamp(position, min, max);
  if (position < min) return -rubberband(min - position, max - min, constant) + min;
  if (position > max) return +rubberband(position - max, max - min, constant) + max;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

const EVENT_TYPE_MAP = {
  pointer: {
    start: 'down',
    change: 'move',
    end: 'up'
  },
  mouse: {
    start: 'down',
    change: 'move',
    end: 'up'
  },
  touch: {
    start: 'start',
    change: 'move',
    end: 'end'
  },
  gesture: {
    start: 'start',
    change: 'change',
    end: 'end'
  }
};
function capitalize(string) {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}
const actionsWithoutCaptureSupported = ['enter', 'leave'];
function hasCapture(capture = false, actionKey) {
  return capture && !actionsWithoutCaptureSupported.includes(actionKey);
}
function toHandlerProp(device, action = '', capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return 'on' + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? 'Capture' : '');
}
const pointerCaptureEvents = ['gotpointercapture', 'lostpointercapture'];
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase();
  const passive = !!~eventKey.indexOf('passive');
  if (passive) eventKey = eventKey.replace('passive', '');
  const captureKey = pointerCaptureEvents.includes(eventKey) ? 'capturecapture' : 'capture';
  const capture = !!~eventKey.indexOf(captureKey);
  if (capture) eventKey = eventKey.replace('capture', '');
  return {
    device: eventKey,
    capture,
    passive
  };
}
function toDomEventType(device, action = '') {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return device + actionKey;
}
function isTouch(event) {
  return 'touches' in event;
}
function getPointerType(event) {
  if (isTouch(event)) return 'touch';
  if ('pointerType' in event) return event.pointerType;
  return 'mouse';
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter(e => {
    var _event$currentTarget, _event$currentTarget$;
    return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
  });
}
function getTouchList(event) {
  return event.type === 'touchend' || event.type === 'touchcancel' ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map(touch => touch.identifier);
}
function pointerId(event) {
  const valueEvent = getValueEvent(event);
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event);
  return [valueEvent.clientX, valueEvent.clientY];
}
function getEventDetails(event) {
  const payload = {};
  if ('buttons' in event) payload.buttons = event.buttons;
  if ('shiftKey' in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }
  return payload;
}

function call(v, ...args) {
  if (typeof v === 'function') {
    return v(...args);
  } else {
    return v;
  }
}
function noop() {}
function chain(...fns) {
  if (fns.length === 0) return noop;
  if (fns.length === 1) return fns[0];
  return function () {
    let result;
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}

const BEFORE_LAST_KINEMATICS_DELAY = 32;
class Engine {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init) this.init();
      this.reset();
    }
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(state) {
    this.ctrl.state[this.key] = state;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._direction = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = undefined;
    state.memo = undefined;
    state.elapsedTime = state.timeDelta = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.overflow = [0, 0];
    state._movementBound = [false, false];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }
  start(event) {
    const state = this.state;
    const config = this.config;
    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
      state.startTime = state.timeStamp = event.timeStamp;
    }
  }
  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }
  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }
  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;
    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable) state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }
    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);
      V.addTo(state._distance, _absoluteDelta);
    }
    if (this.axisIntent) this.axisIntent(event);
    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;
    if (config.hasCustomTransform) {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }
    state.intentional = _step[0] !== false || _step[1] !== false;
    if (!state.intentional) return;
    const movement = [0, 0];
    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }
    if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement);
    const previousOffset = state.offset;
    const gestureIsActive = state._active && !state._blocked || state.active;
    if (gestureIsActive) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;
      if (event) {
        if (state.first) {
          if ('bounds' in config) state._bounds = call(config.bounds, state);
          if (this.setup) this.setup();
        }
        state.movement = movement;
        this.computeOffset();
      }
    }
    const [ox, oy] = state.offset;
    const [[x0, x1], [y0, y1]] = state._bounds;
    state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];
    state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
    state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
    const rubberband = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = computeRubberband(state._bounds, state.offset, rubberband);
    state.delta = V.sub(state.offset, previousOffset);
    this.computeMovement();
    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = V.sub(state.offset, previousOffset);
      const absoluteDelta = state.delta.map(Math.abs);
      V.addTo(state.distance, absoluteDelta);
      state.direction = state.delta.map(Math.sign);
      state._direction = state._delta.map(Math.sign);
      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
        state.timeDelta = dt;
      }
    }
  }
  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active) this.clean();
    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents) return;
    const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo !== undefined) state.memo = memo;
  }
  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }
}

function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx > absDy && absDx > threshold) {
    return 'x';
  }
  if (absDy > absDx && absDy > threshold) {
    return 'y';
  }
  return undefined;
}
class CoordinatesEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "aliasKey", 'xy');
  }
  reset() {
    super.reset();
    this.state.axis = undefined;
  }
  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = V.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(event) {
    const state = this.state;
    const config = this.config;
    if (!state.axis && event) {
      const threshold = typeof config.axisThreshold === 'object' ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
      state.axis = selectAxis(state._movement, threshold);
    }
    state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
  }
  restrictToAxis(v) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case 'x':
          v[1] = 0;
          break;
        case 'y':
          v[0] = 0;
          break;
      }
    }
  }
}

const identity = v => v;
const DEFAULT_RUBBERBAND = 0.15;
const commonConfigResolver = {
  enabled(value = true) {
    return value;
  },
  eventOptions(value, _k, config) {
    return _objectSpread2(_objectSpread2({}, config.shared.eventOptions), value);
  },
  preventDefault(value = false) {
    return value;
  },
  triggerAllEvents(value = false) {
    return value;
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
      case false:
        return [0, 0];
      default:
        return V.toVector(value);
    }
  },
  from(value) {
    if (typeof value === 'function') return value;
    if (value != null) return V.toVector(value);
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;
    if (process.env.NODE_ENV === 'development') {
      const originalTransform = transform || identity;
      return v => {
        const r = originalTransform(v);
        return r;
      };
    }
    return transform || identity;
  },
  threshold(value) {
    return V.toVector(value, 0);
  }
};
if (process.env.NODE_ENV === 'development') {
  Object.assign(commonConfigResolver, {
    domTarget(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
      }
      return NaN;
    },
    lockDirection(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
      }
      return NaN;
    },
    initial(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
      }
      return NaN;
    }
  });
}

const DEFAULT_AXIS_THRESHOLD = 0;
const coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === 'lock';
    if (!this.lockDirection) return axis;
  },
  axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
    return value;
  },
  bounds(value = {}) {
    if (typeof value === 'function') {
      return state => coordinatesConfigResolver.bounds(value(state));
    }
    if ('current' in value) {
      return () => value.current;
    }
    if (typeof HTMLElement === 'function' && value instanceof HTMLElement) {
      return value;
    }
    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }
});

const KEYS_DELTA_MAP = {
  ArrowRight: (displacement, factor = 1) => [displacement * factor, 0],
  ArrowLeft: (displacement, factor = 1) => [-1 * displacement * factor, 0],
  ArrowUp: (displacement, factor = 1) => [0, -1 * displacement * factor],
  ArrowDown: (displacement, factor = 1) => [0, displacement * factor]
};
class DragEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", 'dragging');
  }
  reset() {
    super.reset();
    const state = this.state;
    state._pointerId = undefined;
    state._pointerActive = false;
    state._keyboardActive = false;
    state._preventScroll = false;
    state._delayed = false;
    state.swipe = [0, 0];
    state.tap = false;
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
  }
  setup() {
    const state = this.state;
    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect();
      const targetRect = state.currentTarget.getBoundingClientRect();
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
      };
      state._bounds = coordinatesConfigResolver.bounds(_bounds);
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    state.canceled = true;
    state._active = false;
    setTimeout(() => {
      this.compute();
      this.emit();
    }, 0);
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean();
    this.state._pointerActive = false;
    this.state._keyboardActive = false;
    super.clean();
  }
  pointerDown(event) {
    const config = this.config;
    const state = this.state;
    if (event.buttons != null && (Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)) return;
    const ctrlIds = this.ctrl.setEventIds(event);
    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId);
    }
    if (ctrlIds && ctrlIds.size > 1 && state._pointerActive) return;
    this.start(event);
    this.setupPointer(event);
    state._pointerId = pointerId(event);
    state._pointerActive = true;
    this.computeValues(pointerValues(event));
    this.computeInitial();
    if (config.preventScrollAxis && getPointerType(event) !== 'mouse') {
      state._active = false;
      this.setupScrollPrevention(event);
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event);
      if (config.triggerAllEvents) {
        this.compute(event);
        this.emit();
      }
    } else {
      this.startPointerDrag(event);
    }
  }
  startPointerDrag(event) {
    const state = this.state;
    state._active = true;
    state._preventScroll = true;
    state._delayed = false;
    this.compute(event);
    this.emit();
  }
  pointerMove(event) {
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== undefined && id !== state._pointerId) return;
    const _values = pointerValues(event);
    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY];
    } else {
      state._delta = V.sub(_values, state._values);
      this.computeValues(_values);
    }
    V.addTo(state._movement, state._delta);
    this.compute(event);
    if (state._delayed && state.intentional) {
      this.timeoutStore.remove('dragDelay');
      state.active = false;
      this.startPointerDrag(event);
      return;
    }
    if (config.preventScrollAxis && !state._preventScroll) {
      if (state.axis) {
        if (state.axis === config.preventScrollAxis || config.preventScrollAxis === 'xy') {
          state._active = false;
          this.clean();
          return;
        } else {
          this.timeoutStore.remove('startPointerDrag');
          this.startPointerDrag(event);
          return;
        }
      } else {
        return;
      }
    }
    this.emit();
  }
  pointerUp(event) {
    this.ctrl.setEventIds(event);
    try {
      if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
        event.target.releasePointerCapture(event.pointerId);
      }
    } catch (_unused) {
    }
    const state = this.state;
    const config = this.config;
    if (!state._active || !state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== undefined && id !== state._pointerId) return;
    this.state._pointerActive = false;
    this.setActive();
    this.compute(event);
    const [dx, dy] = state._distance;
    state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold;
    if (state.tap && config.filterTaps) {
      state._force = true;
    } else {
      const [_dx, _dy] = state._delta;
      const [_mx, _my] = state._movement;
      const [svx, svy] = config.swipe.velocity;
      const [sx, sy] = config.swipe.distance;
      const sdt = config.swipe.duration;
      if (state.elapsedTime < sdt) {
        const _vx = Math.abs(_dx / state.timeDelta);
        const _vy = Math.abs(_dy / state.timeDelta);
        if (_vx > svx && Math.abs(_mx) > sx) state.swipe[0] = Math.sign(_dx);
        if (_vy > svy && Math.abs(_my) > sy) state.swipe[1] = Math.sign(_dy);
      }
    }
    this.emit();
  }
  pointerClick(event) {
    if (!this.state.tap && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  setupPointer(event) {
    const config = this.config;
    const device = config.device;
    if (process.env.NODE_ENV === 'development') {
      try {
        if (device === 'pointer' && config.preventScrollDelay === undefined) {
          const currentTarget = 'uv' in event ? event.sourceEvent.currentTarget : event.currentTarget;
          window.getComputedStyle(currentTarget);
        }
      } catch (_unused2) {}
    }
    if (config.pointerLock) {
      event.currentTarget.requestPointerLock();
    }
    if (!config.pointerCapture) {
      this.eventStore.add(this.sharedConfig.window, device, 'change', this.pointerMove.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, 'end', this.pointerUp.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, 'cancel', this.pointerUp.bind(this));
    }
  }
  pointerClean() {
    if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
      document.exitPointerLock();
    }
  }
  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault();
    }
  }
  setupScrollPrevention(event) {
    this.state._preventScroll = false;
    persistEvent(event);
    const remove = this.eventStore.add(this.sharedConfig.window, 'touch', 'change', this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, 'touch', 'end', remove);
    this.eventStore.add(this.sharedConfig.window, 'touch', 'cancel', remove);
    this.timeoutStore.add('startPointerDrag', this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
  }
  setupDelayTrigger(event) {
    this.state._delayed = true;
    this.timeoutStore.add('dragDelay', () => {
      this.state._step = [0, 0];
      this.startPointerDrag(event);
    }, this.config.delay);
  }
  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key];
    if (deltaFn) {
      const state = this.state;
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
      this.start(event);
      state._delta = deltaFn(this.config.keyboardDisplacement, factor);
      state._keyboardActive = true;
      V.addTo(state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
  }
  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP)) return;
    this.state._keyboardActive = false;
    this.setActive();
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    bindFunction(device, 'start', this.pointerDown.bind(this));
    if (this.config.pointerCapture) {
      bindFunction(device, 'change', this.pointerMove.bind(this));
      bindFunction(device, 'end', this.pointerUp.bind(this));
      bindFunction(device, 'cancel', this.pointerUp.bind(this));
      bindFunction('lostPointerCapture', '', this.pointerUp.bind(this));
    }
    if (this.config.keys) {
      bindFunction('key', 'down', this.keyDown.bind(this));
      bindFunction('key', 'up', this.keyUp.bind(this));
    }
    if (this.config.filterTaps) {
      bindFunction('click', '', this.pointerClick.bind(this), {
        capture: true,
        passive: false
      });
    }
  }
}
function persistEvent(event) {
  'persist' in event && typeof event.persist === 'function' && event.persist();
}

const isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;
function supportsTouchEvents() {
  return isBrowser && 'ontouchstart' in window;
}
function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
  return isBrowser && 'onpointerdown' in window;
}
function supportsPointerLock() {
  return isBrowser && 'exitPointerLock' in window.document;
}
function supportsGestureEvents() {
  try {
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}
const SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: supportsTouchEvents(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};

const DEFAULT_PREVENT_SCROLL_DELAY = 250;
const DEFAULT_DRAG_DELAY = 180;
const DEFAULT_SWIPE_VELOCITY = 0.5;
const DEFAULT_SWIPE_DISTANCE = 50;
const DEFAULT_SWIPE_DURATION = 250;
const DEFAULT_KEYBOARD_DISPLACEMENT = 10;
const DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8
};
const dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  device(_v, _k, {
    pointer: {
      touch = false,
      lock = false,
      mouse = false
    } = {}
  }) {
    this.pointerLock = lock && SUPPORT.pointerLock;
    if (SUPPORT.touch && touch) return 'touch';
    if (this.pointerLock) return 'mouse';
    if (SUPPORT.pointer && !mouse) return 'pointer';
    if (SUPPORT.touch) return 'touch';
    return 'mouse';
  },
  preventScrollAxis(value, _k, {
    preventScroll
  }) {
    this.preventScrollDelay = typeof preventScroll === 'number' ? preventScroll : preventScroll || preventScroll === undefined && value ? DEFAULT_PREVENT_SCROLL_DELAY : undefined;
    if (!SUPPORT.touchscreen || preventScroll === false) return undefined;
    return value ? value : preventScroll !== undefined ? 'y' : undefined;
  },
  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1,
      keys = true
    } = {}
  }) {
    this.pointerButtons = buttons;
    this.keys = keys;
    return !this.pointerLock && this.device === 'pointer' && capture;
  },
  threshold(value, _k, {
    filterTaps = false,
    tapsThreshold = 3,
    axis = undefined
  }) {
    const threshold = V.toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    this.tapsThreshold = tapsThreshold;
    return threshold;
  },
  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(V.toVector(velocity)),
      distance: this.transform(V.toVector(distance)),
      duration
    };
  },
  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  },
  axisThreshold(value) {
    if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD;
    return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
  },
  keyboardDisplacement(value = DEFAULT_KEYBOARD_DISPLACEMENT) {
    return value;
  }
});
if (process.env.NODE_ENV === 'development') {
  Object.assign(dragConfigResolver, {
    useTouch(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
      }
      return NaN;
    },
    experimental_preventWindowScrollY(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
      }
      return NaN;
    },
    swipeVelocity(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
      }
      return NaN;
    },
    swipeDistance(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
      }
      return NaN;
    },
    swipeDuration(value) {
      if (value !== undefined) {
        throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
      }
      return NaN;
    }
  });
}

_objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  device(_v, _k, {
    shared,
    pointer: {
      touch = false
    } = {}
  }) {
    const sharedConfig = shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture) return 'gesture';
    if (SUPPORT.touch && touch) return 'touch';
    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer) return 'pointer';
      if (SUPPORT.touch) return 'touch';
    }
  },
  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = state => {
      const D = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };
    const _angleBounds = state => {
      const A = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };
    if (typeof scaleBounds !== 'function' && typeof angleBounds !== 'function') return [_scaleBounds(), _angleBounds()];
    return state => [_scaleBounds(state), _angleBounds(state)];
  },
  threshold(value, _k, config) {
    this.lockDirection = config.axis === 'lock';
    const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  },
  modifierKey(value) {
    if (value === undefined) return 'ctrlKey';
    return value;
  },
  pinchOnWheel(value = true) {
    return value;
  }
});

_objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});

_objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});

const EngineMap = new Map();
const ConfigResolverMap = new Map();
function registerAction(action) {
  EngineMap.set(action.key, action.engine);
  ConfigResolverMap.set(action.key, action.resolver);
}
const dragAction = {
  key: 'drag',
  engine: DragEngine,
  resolver: dragConfigResolver
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

const sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => 'current' in value ? value.current : value;
    }
    return undefined;
  },
  enabled(value = true) {
    return value;
  },
  window(value = SUPPORT.isBrowser ? window : undefined) {
    return value;
  },
  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },
  transform(value) {
    return value;
  }
};

const _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};
  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case 'function':
        if (process.env.NODE_ENV === 'development') {
          const r = resolver.call(result, config[key], key, config);
          if (!Number.isNaN(r)) result[key] = r;
        } else {
          result[key] = resolver.call(result, config[key], key, config);
        }
        break;
      case 'object':
        result[key] = resolveWith(config[key], resolver);
        break;
      case 'boolean':
        if (resolver) result[key] = config[key];
        break;
    }
  }
  return result;
}
function parse(newConfig, gestureKey, _config = {}) {
  const _ref = newConfig,
    {
      target,
      eventOptions,
      window,
      enabled,
      transform
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  _config.shared = resolveWith({
    target,
    eventOptions,
    window,
    enabled,
    transform
  }, sharedConfigResolver);
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey);
    _config[gestureKey] = resolveWith(_objectSpread2({
      shared: _config.shared
    }, rest), resolver);
  } else {
    for (const key in rest) {
      const resolver = ConfigResolverMap.get(key);
      if (resolver) {
        _config[key] = resolveWith(_objectSpread2({
          shared: _config.shared
        }, rest[key]), resolver);
      } else if (process.env.NODE_ENV === 'development') {
        if (!['drag', 'pinch', 'scroll', 'wheel', 'move', 'hover'].includes(key)) {
          if (key === 'domTarget') {
            throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
          }
        }
      }
    }
  }
  return _config;
}

class EventStore {
  constructor(ctrl, gestureKey) {
    _defineProperty(this, "_listeners", new Set());
    this._ctrl = ctrl;
    this._gestureKey = gestureKey;
  }
  add(element, device, action, handler, options) {
    const listeners = this._listeners;
    const type = toDomEventType(device, action);
    const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
    const eventOptions = _objectSpread2(_objectSpread2({}, _options), options);
    element.addEventListener(type, handler, eventOptions);
    const remove = () => {
      element.removeEventListener(type, handler, eventOptions);
      listeners.delete(remove);
    };
    listeners.add(remove);
    return remove;
  }
  clean() {
    this._listeners.forEach(remove => remove());
    this._listeners.clear();
  }
}

class TimeoutStore {
  constructor() {
    _defineProperty(this, "_timeouts", new Map());
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key);
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }
  remove(key) {
    const timeout = this._timeouts.get(key);
    if (timeout) window.clearTimeout(timeout);
  }
  clean() {
    this._timeouts.forEach(timeout => void window.clearTimeout(timeout));
    this._timeouts.clear();
  }
}

class Controller {
  constructor(handlers) {
    _defineProperty(this, "gestures", new Set());
    _defineProperty(this, "_targetEventStore", new EventStore(this));
    _defineProperty(this, "gestureEventStores", {});
    _defineProperty(this, "gestureTimeoutStores", {});
    _defineProperty(this, "handlers", {});
    _defineProperty(this, "config", {});
    _defineProperty(this, "pointerIds", new Set());
    _defineProperty(this, "touchIds", new Set());
    _defineProperty(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    resolveGestures(this, handlers);
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event));
      return this.touchIds;
    } else if ('pointerId' in event) {
      if (event.type === 'pointerup' || event.type === 'pointercancel') this.pointerIds.delete(event.pointerId);else if (event.type === 'pointerdown') this.pointerIds.add(event.pointerId);
      return this.pointerIds;
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }
  applyConfig(config, gestureKey) {
    this.config = parse(config, gestureKey, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }
  effect() {
    if (this.config.shared.target) this.bind();
    return () => this._targetEventStore.clean();
  }
  bind(...args) {
    const sharedConfig = this.config.shared;
    const props = {};
    let target;
    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target) return;
    }
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        const gestureConfig = this.config[gestureKey];
        const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
        if (gestureConfig.enabled) {
          const Engine = EngineMap.get(gestureKey);
          new Engine(this, args, gestureKey).bind(bindFunction);
        }
      }
      const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
      for (const eventKey in this.nativeHandlers) {
        nativeBindFunction(eventKey, '', event => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
          event,
          args
        })), undefined, true);
      }
    }
    for (const handlerProp in props) {
      props[handlerProp] = chain(...props[handlerProp]);
    }
    if (!target) return props;
    for (const handlerProp in props) {
      const {
        device,
        capture,
        passive
      } = parseProp(handlerProp);
      this._targetEventStore.add(target, device, '', props[handlerProp], {
        capture,
        passive
      });
    }
  }
}
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag) setupGesture(ctrl, 'drag');
  if (internalHandlers.wheel) setupGesture(ctrl, 'wheel');
  if (internalHandlers.scroll) setupGesture(ctrl, 'scroll');
  if (internalHandlers.move) setupGesture(ctrl, 'move');
  if (internalHandlers.pinch) setupGesture(ctrl, 'pinch');
  if (internalHandlers.hover) setupGesture(ctrl, 'hover');
}
const bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;
  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
  if (withPassiveOption && passive) handlerProp += 'Passive';
  props[handlerProp] = props[handlerProp] || [];
  props[handlerProp].push(handler);
};

function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = React__default.useMemo(() => new Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  React__default.useEffect(ctrl.effect.bind(ctrl));
  React__default.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);
  if (config.target === undefined) {
    return ctrl.bind.bind(ctrl);
  }
  return undefined;
}

function useDrag(handler, config) {
  registerAction(dragAction);
  return useRecognizers({
    drag: handler
  }, config || {}, 'drag');
}

const classPrefix$8 = `adm-popup`;
const defaultProps$4 = Object.assign(Object.assign({}, defaultPopupBaseProps), {
  closeOnSwipe: false,
  position: 'bottom'
});
const Popup = p => {
  const {
    locale,
    popup: componentConfig = {}
  } = useConfig();
  const props = mergeProps(defaultProps$4, componentConfig, p);
  const bodyCls = classNames(`${classPrefix$8}-body`, props.bodyClassName, `${classPrefix$8}-body-position-${props.position}`);
  const [active, setActive] = useState(props.visible);
  const ref = useRef(null);
  useLockScroll(ref, props.disableBodyScroll && active ? 'strict' : false);
  useIsomorphicLayoutEffect$1(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);
  const unmountedRef = useUnmountedRef();
  const {
    percent
  } = useSpring({
    percent: props.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30
    },
    onRest: () => {
      var _a, _b;
      if (unmountedRef.current) return;
      setActive(props.visible);
      if (props.visible) {
        (_a = props.afterShow) === null || _a === void 0 ? void 0 : _a.call(props);
      } else {
        (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    }
  });
  const bind = useDrag(({
    swipe: [, swipeY]
  }) => {
    var _a;
    if (!props.closeOnSwipe) return;
    if (swipeY === 1 && props.position === 'bottom' || swipeY === -1 && props.position === 'top') {
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, {
    axis: 'y',
    enabled: ['top', 'bottom'].includes(props.position)
  });
  const maskVisible = useInnerVisible(active && props.visible);
  const node = withStopPropagation(props.stopPropagation, withNativeProps(props, React__default.createElement("div", Object.assign({
    className: classPrefix$8,
    onClick: props.onClick,
    style: {
      display: active ? undefined : 'none',
      touchAction: ['top', 'bottom'].includes(props.position) ? 'none' : 'auto'
    }
  }, bind()), props.mask && React__default.createElement(Mask, {
    visible: maskVisible,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose,
    onMaskClick: e => {
      var _a, _b;
      (_a = props.onMaskClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (props.closeOnMaskClick) {
        (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    },
    className: props.maskClassName,
    style: props.maskStyle,
    disableBodyScroll: false,
    stopPropagation: props.stopPropagation
  }), React__default.createElement(animated.div, {
    className: bodyCls,
    style: Object.assign(Object.assign({}, props.bodyStyle), {
      pointerEvents: percent.to(v => v === 0 ? 'unset' : 'none'),
      transform: percent.to(v => {
        if (props.position === 'bottom') {
          return `translate(0, ${v}%)`;
        }
        if (props.position === 'top') {
          return `translate(0, -${v}%)`;
        }
        if (props.position === 'left') {
          return `translate(-${v}%, 0)`;
        }
        if (props.position === 'right') {
          return `translate(${v}%, 0)`;
        }
        return 'none';
      })
    }),
    ref: ref
  }, props.showCloseButton && React__default.createElement("a", {
    className: classNames(`${classPrefix$8}-close-icon`, 'adm-plain-anchor'),
    onClick: () => {
      var _a;
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    },
    role: 'button',
    "aria-label": locale.common.close
  }, props.closeIcon), props.children))));
  return React__default.createElement(ShouldRender, {
    active: active,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose
  }, renderToContainer(props.getContainer, node));
};

var css_248z$b = ".adm-safe-area{--multiple:var(--adm-safe-area-multiple,1);display:block;width:100%}.adm-safe-area-position-top{padding-top:calc(env(safe-area-inset-top)*var(--multiple))}.adm-safe-area-position-bottom{padding-bottom:calc(env(safe-area-inset-bottom)*var(--multiple))}";
styleInject(css_248z$b);

const classPrefix$7 = 'adm-safe-area';
const SafeArea = props => {
  return withNativeProps(props, React__default.createElement("div", {
    className: classNames(classPrefix$7, `${classPrefix$7}-position-${props.position}`)
  }));
};

var css_248z$a = ".adm-badge-wrapper{display:inline-block;position:relative}.adm-badge{--right:0;--top:0;--color:var(--adm-badge-color,var(--adm-color-highlight));background-color:var(--color);border-radius:100px;box-sizing:content-box;display:inline-flex;vertical-align:middle}.adm-badge-content{box-sizing:border-box;color:var(--adm-color-text-light-solid);font-size:var(--adm-font-size-1);font-weight:400;line-height:12px;min-width:8px;padding:1px 4px;text-align:center;white-space:nowrap}.adm-badge-fixed{position:absolute;right:var(--right);top:var(--top);transform:translate(50%,-50%)}.adm-badge-dot{border-radius:5px;height:10px;min-width:10px;width:10px}.adm-badge-bordered{border:1px solid var(--adm-color-text-light-solid)}";
styleInject(css_248z$a);

const classPrefix$6 = `adm-badge`;
const dot = React__default.createElement(React__default.Fragment, null);
const Badge$1 = props => {
  const {
    content,
    color,
    children
  } = props;
  const isDot = content === dot;
  const badgeClass = classNames(classPrefix$6, {
    [`${classPrefix$6}-fixed`]: !!children,
    [`${classPrefix$6}-dot`]: isDot,
    [`${classPrefix$6}-bordered`]: props.bordered
  });
  const element = content || content === 0 ? withNativeProps(props, React__default.createElement("div", {
    className: badgeClass,
    style: {
      '--color': color
    }
  }, !isDot && React__default.createElement("div", {
    className: `${classPrefix$6}-content`
  }, content))) : null;
  return children ? React__default.createElement("div", {
    className: classNames(`${classPrefix$6}-wrapper`, props.wrapperClassName),
    style: props.wrapperStyle
  }, children, element) : element;
};

var Badge = attachPropertiesToComponent(Badge$1, {
  dot
});

var css_248z$9 = ".adm-button{--color:var(--adm-color-text-light-solid);--text-color:var(--adm-button-text-color,var(--adm-color-text));--background-color:var(--adm-button-background-color,var(--adm-color-background));--border-radius:var(--adm-button-border-radius,4px);--border-width:var(--adm-button-border-width,1px);--border-style:var(--adm-button-border-style,solid);--border-color:var(--adm-button-border-color,var(--adm-color-border));background-color:var(--background-color);border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);box-sizing:border-box;color:var(--text-color);cursor:pointer;display:inline-block;font-size:var(--adm-font-size-9);height:auto;line-height:1.4;margin:0;padding:7px 12px;position:relative;text-align:center;transition:opacity .15s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.adm-button:focus{outline:none}.adm-button:before{background-color:var(--adm-color-text-dark-solid);border:var(--border-width) var(--border-style) var(--adm-color-text-dark-solid);border-radius:var(--border-radius);box-sizing:content-box;content:\" \";height:100%;left:0;opacity:0;position:absolute;top:0;transform:translate(calc(var(--border-width)*-1),calc(var(--border-width)*-1));width:100%}.adm-button:active:before{opacity:.08}.adm-button-default.adm-button-fill-outline{--background-color:transparent;--border-color:var(--adm-color-text)}.adm-button-default.adm-button-fill-none{--background-color:transparent;--border-width:0px}.adm-button:not(.adm-button-default){--text-color:var(--adm-color-text-light-solid);--background-color:var(--color);--border-color:var(--color)}.adm-button:not(.adm-button-default).adm-button-fill-outline{--text-color:var(--color);--background-color:transparent}.adm-button:not(.adm-button-default).adm-button-fill-none{--text-color:var(--color);--background-color:transparent;--border-width:0px}.adm-button-primary{--color:var(--adm-color-primary)}.adm-button-success{--color:var(--adm-color-success)}.adm-button-danger{--color:var(--adm-color-danger)}.adm-button-warning{--color:var(--adm-color-warning)}.adm-button-block{display:block;width:100%}.adm-button-disabled{cursor:not-allowed;opacity:.4}.adm-button-disabled:active:before{display:none}.adm-button.adm-button-mini{font-size:var(--adm-font-size-main);padding-bottom:3px;padding-top:3px}.adm-button.adm-button-mini.adm-button-shape-rounded{padding-left:9px;padding-right:9px}.adm-button.adm-button-small{font-size:var(--adm-font-size-7);padding-bottom:3px;padding-top:3px}.adm-button.adm-button-large{font-size:var(--adm-font-size-10);padding-bottom:11px;padding-top:11px}.adm-button.adm-button-shape-rounded{--border-radius:1000px}.adm-button.adm-button-shape-rectangular{--border-radius:0}.adm-button-loading{vertical-align:bottom}.adm-button-loading-wrapper{align-items:center;display:flex;height:1.4em;justify-content:center}.adm-button-loading-wrapper>.adm-loading{opacity:.6}";
styleInject(css_248z$9);

var css_248z$8 = ".adm-dot-loading{display:inline-block}";
styleInject(css_248z$8);

const classPrefix$5 = `adm-dot-loading`;
const colorRecord = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)'
};
const defaultProps$3 = {
  color: 'default'
};
const DotLoading = memo(p => {
  var _a;
  const props = mergeProps(defaultProps$3, p);
  return withNativeProps(props, React__default.createElement("div", {
    style: {
      color: (_a = colorRecord[props.color]) !== null && _a !== void 0 ? _a : props.color
    },
    className: classNames('adm-loading', classPrefix$5)
  }, React__default.createElement("svg", {
    height: '1em',
    viewBox: '0 0 100 40',
    style: {
      verticalAlign: '-0.125em'
    }
  }, React__default.createElement("g", {
    stroke: 'none',
    strokeWidth: '1',
    fill: 'none',
    fillRule: 'evenodd'
  }, React__default.createElement("g", {
    transform: 'translate(-100.000000, -71.000000)'
  }, React__default.createElement("g", {
    transform: 'translate(95.000000, 71.000000)'
  }, React__default.createElement("g", {
    transform: 'translate(5.000000, 0.000000)'
  }, [0, 1, 2].map(i => React__default.createElement("rect", {
    key: i,
    fill: 'currentColor',
    x: 20 + i * 26,
    y: '16',
    width: '8',
    height: '8',
    rx: '2'
  }, React__default.createElement("animate", {
    attributeName: 'y',
    from: '16',
    to: '16',
    dur: '2s',
    begin: `${i * 0.2}s`,
    repeatCount: 'indefinite',
    values: '16; 6; 26; 16; 16',
    keyTimes: '0; 0.1; 0.3; 0.4; 1'
  }))))))))));
});

function isPromise(obj) {
  return !!obj && typeof obj === 'object' && typeof obj.then === 'function';
}
function isIOS() {
  return canUseDom ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
}

const classPrefix$4 = `adm-button`;
const defaultProps$2 = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  loadingIcon: React__default.createElement(DotLoading, {
    color: 'currentColor'
  }),
  type: 'button',
  shape: 'default',
  size: 'middle'
};
const Button$1 = forwardRef((p, ref) => {
  const props = mergeProps(defaultProps$2, p);
  const [innerLoading, setInnerLoading] = useState(false);
  const nativeButtonRef = useRef(null);
  const loading = props.loading === 'auto' ? innerLoading : props.loading;
  const disabled = props.disabled || loading;
  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current;
    }
  }));
  const handleClick = e => __awaiter(void 0, void 0, void 0, function* () {
    if (!props.onClick) return;
    const promise = props.onClick(e);
    if (isPromise(promise)) {
      try {
        setInnerLoading(true);
        yield promise;
        setInnerLoading(false);
      } catch (e) {
        setInnerLoading(false);
        throw e;
      }
    }
  });
  return withNativeProps(props, React__default.createElement("button", {
    ref: nativeButtonRef,
    type: props.type,
    onClick: handleClick,
    className: classNames(classPrefix$4, {
      [`${classPrefix$4}-${props.color}`]: props.color,
      [`${classPrefix$4}-block`]: props.block,
      [`${classPrefix$4}-disabled`]: disabled,
      [`${classPrefix$4}-fill-outline`]: props.fill === 'outline',
      [`${classPrefix$4}-fill-none`]: props.fill === 'none',
      [`${classPrefix$4}-mini`]: props.size === 'mini',
      [`${classPrefix$4}-small`]: props.size === 'small',
      [`${classPrefix$4}-large`]: props.size === 'large',
      [`${classPrefix$4}-loading`]: loading
    }, `${classPrefix$4}-shape-${props.shape}`),
    disabled: disabled,
    onMouseDown: props.onMouseDown,
    onMouseUp: props.onMouseUp,
    onTouchStart: props.onTouchStart,
    onTouchEnd: props.onTouchEnd
  }, loading ? React__default.createElement("div", {
    className: `${classPrefix$4}-loading-wrapper`
  }, props.loadingIcon, props.loadingText) : React__default.createElement("span", null, props.children)));
});

function usePropsValue(options) {
  const {
    value,
    defaultValue,
    onChange
  } = options;
  const update = useUpdate();
  const stateRef = useRef(value !== undefined ? value : defaultValue);
  if (value !== undefined) {
    stateRef.current = value;
  }
  const setState = useMemoizedFn((v, forceTrigger = false) => {
    // `forceTrigger` means trigger `onChange` even if `v` is the same as `stateRef.current`
    const nextValue = typeof v === 'function' ? v(stateRef.current) : v;
    if (!forceTrigger && nextValue === stateRef.current) return;
    stateRef.current = nextValue;
    update();
    return onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
  });
  return [stateRef.current, setState];
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=g;reactIs_production_min.Element=b;reactIs_production_min.ForwardRef=l;reactIs_production_min.Fragment=d;reactIs_production_min.Lazy=q;reactIs_production_min.Memo=p;reactIs_production_min.Portal=c;reactIs_production_min.Profiler=f;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m;
	reactIs_production_min.SuspenseList=n;reactIs_production_min.isAsyncMode=function(){return  false};reactIs_production_min.isConcurrentMode=function(){return  false};reactIs_production_min.isContextConsumer=function(a){return v(a)===h};reactIs_production_min.isContextProvider=function(a){return v(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return v(a)===l};reactIs_production_min.isFragment=function(a){return v(a)===d};reactIs_production_min.isLazy=function(a){return v(a)===q};reactIs_production_min.isMemo=function(a){return v(a)===p};
	reactIs_production_min.isPortal=function(a){return v(a)===c};reactIs_production_min.isProfiler=function(a){return v(a)===f};reactIs_production_min.isStrictMode=function(a){return v(a)===e};reactIs_production_min.isSuspense=function(a){return v(a)===m};reactIs_production_min.isSuspenseList=function(a){return v(a)===n};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?true:false};reactIs_production_min.typeOf=v;
	return reactIs_production_min;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;

	function isAsyncMode(object) {

	  return false;
	}
	function isConcurrentMode(object) {

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.SuspenseList = SuspenseList;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isSuspenseList = isSuspenseList;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = requireReactIs_production_min();
} else {
  reactIs.exports = requireReactIs_development();
}

var reactIsExports = reactIs.exports;

function bound(position, min, max) {
  let ret = position;
  if (min !== undefined) {
    ret = Math.max(position, min);
  }
  if (max !== undefined) {
    ret = Math.min(ret, max);
  }
  return ret;
}

function traverseReactNode(children, fn) {
  let i = 0;
  function handle(target) {
    React__default.Children.forEach(target, child => {
      if (!reactIsExports.isFragment(child)) {
        fn(child, i);
        i += 1;
      } else {
        handle(child.props.children);
      }
    });
  }
  handle(children);
}

var css_248z$7 = ".adm-card{background:var(--adm-color-background);border-radius:var(--adm-card-border-radius,8px);padding:0 var(--adm-card-padding-inline,12px)}.adm-card-header{align-items:center;box-sizing:border-box;display:flex;gap:var(--adm-card-header-gap,8px);justify-content:space-between;padding:var(--adm-card-header-padding-block,12px) 0;position:relative}.adm-card-header:not(:last-child){border-bottom:solid var(--adm-card-header-border-width,.5px) var(--adm-card-header-border-color,var(--adm-color-border))}.adm-card-header-title{font-size:var(--adm-font-size-7);font-weight:700;line-height:1.4}.adm-card-body{padding:var(--adm-card-body-padding-block,12px) 0}";
styleInject(css_248z$7);

const classPrefix$3 = `adm-card`;
const Card$1 = props => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null;
    }
    return React__default.createElement("div", {
      className: classNames(`${classPrefix$3}-header`, props.headerClassName),
      style: props.headerStyle,
      onClick: props.onHeaderClick
    }, props.icon && React__default.createElement("div", {
      className: `${classPrefix$3}-header-icon`
    }, props.icon), React__default.createElement("div", {
      className: `${classPrefix$3}-header-title`
    }, props.title), props.extra && React__default.createElement("div", {
      className: `${classPrefix$3}-header-extra`
    }, props.extra));
  };
  const renderBody = () => {
    if (!props.children) {
      return null;
    }
    return React__default.createElement("div", {
      className: classNames(`${classPrefix$3}-body`, props.bodyClassName),
      style: props.bodyStyle,
      onClick: props.onBodyClick
    }, props.children);
  };
  return withNativeProps(props, React__default.createElement("div", {
    className: classPrefix$3,
    onClick: props.onClick
  }, renderHeader(), renderBody()));
};

var css_248z$6 = ".adm-input{--font-size:var(--adm-font-size-9);--color:var(--adm-color-text);--placeholder-color:var(--adm-color-light);--text-align:left;--background-color:transparent;align-items:center;background-color:var(--background-color);display:flex;justify-content:flex-start;max-height:100%;max-width:100%;min-height:24px;width:100%}.adm-input-disabled{cursor:not-allowed;opacity:.4}.adm-input-element{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;box-sizing:border-box;color:var(--color);display:inline-block;flex:auto;font-size:var(--font-size);line-height:1.5;margin:0;max-height:100%;max-width:100%;min-height:1.5em;outline:none;padding:0;text-align:var(--text-align);width:100%}.adm-input-element::-moz-placeholder{color:var(--placeholder-color);font-family:inherit}.adm-input-element::placeholder{color:var(--placeholder-color);font-family:inherit}.adm-input-element:-webkit-autofill{background-color:transparent}.adm-input-element:-moz-read-only{cursor:default}.adm-input-element:read-only{cursor:default}.adm-input-element:invalid{box-shadow:none}.adm-input-element::-ms-clear,.adm-input-element::-ms-reveal{display:none}.adm-input-element::-webkit-search-cancel-button,.adm-input-element::-webkit-search-decoration{display:none}.adm-input-element:disabled{opacity:1}.adm-input-element[type=date],.adm-input-element[type=datetime-local],.adm-input-element[type=time]{min-height:1.5em}.adm-input-element[type=search]{-webkit-appearance:none}.adm-input-element[readonly]{pointer-events:none}.adm-input-clear{color:var(--adm-color-light);cursor:pointer;flex:none;margin-left:8px;padding:4px}.adm-input-clear:active{color:var(--adm-color-weak)}.adm-input-clear .antd-mobile-icon{display:block;font-size:var(--adm-font-size-7)}";
styleInject(css_248z$6);

function useInputHandleKeyDown({
  onEnterPress,
  onKeyDown,
  nativeInputRef,
  enterKeyHint
}) {
  const handleKeydown = e => {
    if (onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      onEnterPress(e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };
  useIsomorphicLayoutEffect$1(() => {
    const ele = nativeInputRef.current;
    if (!enterKeyHint || !ele) return;
    ele.setAttribute('enterkeyhint', enterKeyHint);
    return () => {
      ele.removeAttribute('enterkeyhint');
    };
  }, [enterKeyHint]);
  return handleKeydown;
}

const classPrefix$2 = `adm-input`;
const defaultProps$1 = {
  defaultValue: '',
  clearIcon: React__default.createElement(CloseCircleFill, null),
  onlyShowClearWhenFocus: true
};
const Input$1 = forwardRef((props, ref) => {
  const {
    locale,
    input: componentConfig = {}
  } = useConfig();
  const mergedProps = mergeProps(defaultProps$1, componentConfig, props);
  const [value, setValue] = usePropsValue(mergedProps);
  const [hasFocus, setHasFocus] = useState(false);
  const compositionStartRef = useRef(false);
  const nativeInputRef = useRef(null);
  const handleKeydown = useInputHandleKeyDown({
    onEnterPress: mergedProps.onEnterPress,
    onKeyDown: mergedProps.onKeyDown,
    nativeInputRef,
    enterKeyHint: mergedProps.enterKeyHint
  });
  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      var _a;
      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;
      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    },
    get nativeElement() {
      return nativeInputRef.current;
    }
  }));
  function checkValue() {
    let nextValue = value;
    if (mergedProps.type === 'number') {
      const boundValue = nextValue && bound(parseFloat(nextValue), mergedProps.min, mergedProps.max).toString();
      // fix the display issue of numbers starting with 0
      if (Number(nextValue) !== Number(boundValue)) {
        nextValue = boundValue;
      }
    }
    if (nextValue !== value) {
      setValue(nextValue);
    }
  }
  const shouldShowClear = (() => {
    if (!mergedProps.clearable || !value || mergedProps.readOnly) return false;
    if (mergedProps.onlyShowClearWhenFocus) {
      return hasFocus;
    } else {
      return true;
    }
  })();
  return withNativeProps(mergedProps, React__default.createElement("div", {
    className: classNames(`${classPrefix$2}`, mergedProps.disabled && `${classPrefix$2}-disabled`)
  }, React__default.createElement("input", {
    ref: nativeInputRef,
    className: `${classPrefix$2}-element`,
    value: value,
    onChange: e => {
      setValue(e.target.value);
    },
    onFocus: e => {
      var _a;
      setHasFocus(true);
      (_a = mergedProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(mergedProps, e);
    },
    onBlur: e => {
      var _a;
      setHasFocus(false);
      checkValue();
      (_a = mergedProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(mergedProps, e);
    },
    onPaste: mergedProps.onPaste,
    id: mergedProps.id,
    placeholder: mergedProps.placeholder,
    disabled: mergedProps.disabled,
    readOnly: mergedProps.readOnly,
    maxLength: mergedProps.maxLength,
    minLength: mergedProps.minLength,
    max: mergedProps.max,
    min: mergedProps.min,
    autoComplete: mergedProps.autoComplete,
    enterKeyHint: mergedProps.enterKeyHint,
    autoFocus: mergedProps.autoFocus,
    pattern: mergedProps.pattern,
    inputMode: mergedProps.inputMode,
    type: mergedProps.type,
    name: mergedProps.name,
    autoCapitalize: mergedProps.autoCapitalize,
    autoCorrect: mergedProps.autoCorrect,
    onKeyDown: handleKeydown,
    onKeyUp: mergedProps.onKeyUp,
    onCompositionStart: e => {
      var _a;
      compositionStartRef.current = true;
      (_a = mergedProps.onCompositionStart) === null || _a === void 0 ? void 0 : _a.call(mergedProps, e);
    },
    onCompositionEnd: e => {
      var _a;
      compositionStartRef.current = false;
      (_a = mergedProps.onCompositionEnd) === null || _a === void 0 ? void 0 : _a.call(mergedProps, e);
    },
    onClick: mergedProps.onClick,
    step: mergedProps.step,
    role: mergedProps.role,
    "aria-valuenow": mergedProps['aria-valuenow'],
    "aria-valuemax": mergedProps['aria-valuemax'],
    "aria-valuemin": mergedProps['aria-valuemin'],
    "aria-label": mergedProps['aria-label']
  }), shouldShowClear && React__default.createElement("div", {
    className: `${classPrefix$2}-clear`,
    onMouseDown: e => {
      e.preventDefault();
    },
    onClick: () => {
      var _a, _b;
      setValue('');
      (_a = mergedProps.onClear) === null || _a === void 0 ? void 0 : _a.call(mergedProps);
      // https://github.com/ant-design/ant-design-mobile/issues/5212
      if (isIOS() && compositionStartRef.current) {
        compositionStartRef.current = false;
        (_b = nativeInputRef.current) === null || _b === void 0 ? void 0 : _b.blur();
      }
    },
    "aria-label": locale.Input.clear
  }, mergedProps.clearIcon)));
});

var css_248z$5 = ".adm-nav-bar{--height:45px;--border-bottom:none;align-items:center;border-bottom:var(--border-bottom);display:flex;height:var(--height);padding:0 12px;white-space:nowrap}.adm-nav-bar-left,.adm-nav-bar-right{flex:1}.adm-nav-bar-title{flex:auto;overflow:hidden;text-align:center;text-overflow:ellipsis}.adm-nav-bar-back{align-items:center;cursor:pointer;display:flex;margin-right:16px;padding:6px 0}.adm-nav-bar-back-arrow{font-size:24px;margin-right:4px}.adm-nav-bar-left{align-items:center;display:flex;font-size:var(--adm-font-size-7);justify-content:flex-start}.adm-nav-bar-title{font-size:var(--adm-font-size-10);justify-content:center;padding:0 12px;white-space:nowrap}.adm-nav-bar-right{text-align:right}";
styleInject(css_248z$5);

const classPrefix$1 = `adm-nav-bar`;
const defaultBackIcon = React__default.createElement(LeftOutline, null);
const NavBar = props => {
  const {
    navBar: componentConfig = {}
  } = useConfig();
  const mergedProps = mergeProps(componentConfig, props);
  const {
    back,
    backIcon,
    backArrow
  } = mergedProps;
  const mergedDefaultBackIcon = componentConfig.backIcon || defaultBackIcon;
  const mergedBackIcon = mergeProp(defaultBackIcon, componentConfig.backIcon, backArrow === true ? mergedDefaultBackIcon : backArrow, backIcon === true ? mergedDefaultBackIcon : backIcon);
  return withNativeProps(mergedProps, React__default.createElement("div", {
    className: classNames(classPrefix$1)
  }, React__default.createElement("div", {
    className: `${classPrefix$1}-left`,
    role: 'button'
  }, back !== null && React__default.createElement("div", {
    className: `${classPrefix$1}-back`,
    onClick: mergedProps.onBack
  }, mergedBackIcon && React__default.createElement("span", {
    className: `${classPrefix$1}-back-arrow`
  }, mergedBackIcon), React__default.createElement("span", {
    "aria-hidden": 'true'
  }, back)), mergedProps.left), React__default.createElement("div", {
    className: `${classPrefix$1}-title`
  }, mergedProps.children), React__default.createElement("div", {
    className: `${classPrefix$1}-right`
  }, mergedProps.right)));
};

var css_248z$4 = ".adm-tab-bar-wrap{align-items:stretch;display:flex;flex-wrap:nowrap;justify-content:flex-start;min-height:48px;overflow:hidden}.adm-tab-bar-item{align-items:center;color:var(--adm-color-text-secondary);cursor:pointer;display:flex;flex:1;flex-direction:column;justify-content:center;padding:4px 8px;position:relative;white-space:nowrap;width:-moz-min-content;width:min-content}.adm-tab-bar-item-icon{font-size:24px;height:24px;line-height:1}.adm-tab-bar-item-title{font-size:var(--adm-font-size-2);line-height:15px}.adm-tab-bar-item-title-with-icon{margin-top:2px}.adm-tab-bar-item-active{color:var(--adm-color-primary)}.adm-tab-bar-icon-badge{--top:6px}.adm-tab-bar-title-badge{--right:-2px;--top:-2px}";
styleInject(css_248z$4);

/* istanbul ignore next */
const TabBarItem = () => {
  return null;
};
const classPrefix = `adm-tab-bar`;
const defaultProps = {
  safeArea: false
};
const TabBar$1 = p => {
  var _a;
  const props = mergeProps(defaultProps, p);
  let firstActiveKey = null;
  const items = [];
  traverseReactNode(props.children, (child, index) => {
    if (!isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;
    if (index === 0) {
      firstActiveKey = key;
    }
    items.push(child);
  });
  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : firstActiveKey,
    onChange: v => {
      var _a;
      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  return withNativeProps(props, React__default.createElement("div", {
    className: classPrefix
  }, React__default.createElement("div", {
    className: `${classPrefix}-wrap`
  }, items.map(item => {
    const active = item.key === activeKey;
    function renderContent() {
      const iconElement = item.props.icon && React__default.createElement("div", {
        className: `${classPrefix}-item-icon`
      }, typeof item.props.icon === 'function' ? item.props.icon(active) : item.props.icon);
      const titleElement = item.props.title && React__default.createElement("div", {
        className: classNames(`${classPrefix}-item-title`, Boolean(iconElement) && `${classPrefix}-item-title-with-icon`)
      }, typeof item.props.title === 'function' ? item.props.title(active) : item.props.title);
      if (iconElement) {
        return React__default.createElement(React__default.Fragment, null, React__default.createElement(Badge, {
          content: item.props.badge,
          className: `${classPrefix}-icon-badge`
        }, iconElement), titleElement);
      } else if (titleElement) {
        return React__default.createElement(Badge, {
          content: item.props.badge,
          className: `${classPrefix}-title-badge`
        }, titleElement);
      }
      return null;
    }
    return withNativeProps(item.props, React__default.createElement("div", {
      key: item.key,
      onClick: () => {
        var _a, _b;
        const {
          key
        } = item;
        if (key === undefined || key === null) return;
        setActiveKey(key.toString());
        (_b = (_a = item.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
      },
      className: classNames(`${classPrefix}-item`, {
        [`${classPrefix}-item-active`]: active
      })
    }, renderContent()));
  })), props.safeArea && React__default.createElement(SafeArea, {
    position: 'bottom'
  })));
};

var TabBar = attachPropertiesToComponent(TabBar$1, {
  Item: TabBarItem
});

var css_248z$3 = ".company-button{position:relative;transition:all .2s ease}.company-button--mini{border-radius:4px}.company-button--small{border-radius:6px}.company-button--middle{border-radius:8px}.company-button--large{border-radius:10px}.company-button--rounded{border-radius:50px!important}.company-button--rectangular{border-radius:4px!important}.company-button--block{width:100%}.company-button--loading{cursor:not-allowed;opacity:.6}.company-button--disabled{cursor:not-allowed;opacity:.4}.company-button:not(.company-button--disabled):not(.company-button--loading):hover{box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.company-button:not(.company-button--disabled):not(.company-button--loading):active{transform:translateY(0);transition:transform .1s}.company-button:after{background:hsla(0,0%,100%,.3);border-radius:50%;content:\"\";height:0;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:width .3s,height .3s;width:0}.company-button:active:after{height:120%;width:120%}";
styleInject(css_248z$3);

var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b, _d = _a.size, size = _d === void 0 ? 'middle' : _d, _e = _a.block, block = _e === void 0 ? false : _e, _f = _a.loading, loading = _f === void 0 ? false : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.shape, shape = _h === void 0 ? 'default' : _h, className = _a.className, children = _a.children, onClick = _a.onClick, rest = __rest(_a, ["type", "htmlType", "size", "block", "loading", "disabled", "shape", "className", "children", "onClick"]);
    // 映射公司内部类型到 antd-mobile 的 color 属性
    var getAntdColor = function (buttonType) {
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
    var getAntdSize = function (buttonSize) {
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
    var buttonClassName = classNames('company-button', "company-button--".concat(type), "company-button--".concat(size), "company-button--".concat(shape), {
        'company-button--block': block,
        'company-button--loading': loading,
        'company-button--disabled': disabled,
    }, className);
    return (React__default.createElement(Button$1, __assign({ color: getAntdColor(type), size: getAntdSize(size), block: block, loading: loading, disabled: disabled, className: buttonClassName, onClick: onClick }, rest), children));
};

var css_248z$2 = ".company-input-wrapper{margin-bottom:16px;width:100%}.company-input-label{align-items:center;color:#333;display:flex;font-size:14px;font-weight:500;margin-bottom:4px}.company-input-required{color:#ff4d4f;font-size:14px;margin-left:4px}.company-input-container{align-items:center;display:flex;position:relative}.company-input{background-color:#fff;border:1px solid #d9d9d9;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;transition:all .2s cubic-bezier(.645,.045,.355,1);width:100%}.company-input--small{font-size:12px;height:32px;padding:6px 12px}.company-input--middle{font-size:14px;height:40px;padding:8px 16px}.company-input--large{font-size:16px;height:48px;padding:12px 20px}.company-input:focus{border-color:#1677ff;box-shadow:0 0 0 2px rgba(22,119,255,.2);outline:none}.company-input--error{border-color:#ff4d4f!important}.company-input--error:focus{box-shadow:0 0 0 2px rgba(255,77,79,.2)!important}.company-input--warning{border-color:#faad14!important}.company-input--warning:focus{box-shadow:0 0 0 2px rgba(250,173,20,.2)!important}.company-input--disabled{background-color:#f5f5f5;color:#bfbfbf;cursor:not-allowed}.company-input--readonly{background-color:#fafafa}.company-input-prefix,.company-input-suffix{color:#8c8c8c;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%)}.company-input-prefix{left:12px}.company-input-suffix{right:12px}.company-input--with-prefix{padding-left:36px}.company-input--with-suffix{padding-right:36px}.company-input-clear{align-items:center;background-color:#bfbfbf;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:12px;height:16px;justify-content:center;position:absolute;right:12px;top:50%;transform:translateY(-50%);transition:background-color .2s;width:16px}.company-input-clear:hover{background-color:#8c8c8c}.company-input-count{color:#8c8c8c;font-size:12px;margin-top:4px;text-align:right}.company-input-error-message{align-items:center;color:#ff4d4f;display:flex;font-size:12px;margin-top:4px}.company-input-error-message:before{content:\"⚠\";margin-right:4px}.company-input-help-text{color:#8c8c8c;font-size:12px;margin-top:4px}@media (max-width:768px){.company-input-label{font-size:13px}.company-input--small{height:36px;padding:8px 12px}.company-input--middle{height:44px;padding:10px 16px}.company-input--large{height:52px;padding:14px 20px}}";
styleInject(css_248z$2);

var Input = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.size, size = _c === void 0 ? 'middle' : _c, status = _a.status, _d = _a.showCount, showCount = _d === void 0 ? false : _d, maxLength = _a.maxLength, _e = _a.allowClear, allowClear = _e === void 0 ? false : _e, prefix = _a.prefix, suffix = _a.suffix, label = _a.label, errorMessage = _a.errorMessage, helpText = _a.helpText, _f = _a.required, required = _f === void 0 ? false : _f, className = _a.className, placeholder = _a.placeholder, value = _a.value, defaultValue = _a.defaultValue, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.readOnly, readOnly = _h === void 0 ? false : _h, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, rest = __rest(_a, ["type", "size", "status", "showCount", "maxLength", "allowClear", "prefix", "suffix", "label", "errorMessage", "helpText", "required", "className", "placeholder", "value", "defaultValue", "disabled", "readOnly", "onChange", "onBlur", "onFocus"]);
    var inputClassName = classNames('company-input', "company-input--".concat(size), {
        'company-input--error': status === 'error' || errorMessage,
        'company-input--warning': status === 'warning',
        'company-input--disabled': disabled,
        'company-input--readonly': readOnly,
        'company-input--with-prefix': prefix,
        'company-input--with-suffix': suffix,
    }, className);
    var wrapperClassName = classNames('company-input-wrapper', {
        'company-input-wrapper--required': required,
    });
    return (React__default.createElement("div", { className: wrapperClassName },
        label && (React__default.createElement("div", { className: "company-input-label" },
            label,
            required && React__default.createElement("span", { className: "company-input-required" }, "*"))),
        React__default.createElement("div", { className: "company-input-container" },
            React__default.createElement(Input$1, __assign({ type: type, placeholder: placeholder, value: value, defaultValue: defaultValue, disabled: disabled, readOnly: readOnly, maxLength: maxLength, className: inputClassName, onChange: onChange, onBlur: onBlur, onFocus: onFocus }, rest)),
            prefix && React__default.createElement("div", { className: "company-input-prefix" }, prefix),
            suffix && React__default.createElement("div", { className: "company-input-suffix" }, suffix),
            allowClear && value && !disabled && !readOnly && (React__default.createElement("div", { className: "company-input-clear", onClick: function () { return onChange === null || onChange === void 0 ? void 0 : onChange(''); } }, "\u2715"))),
        showCount && maxLength && (React__default.createElement("div", { className: "company-input-count" },
            (value || '').length,
            "/",
            maxLength)),
        errorMessage && (React__default.createElement("div", { className: "company-input-error-message" }, errorMessage)),
        helpText && !errorMessage && (React__default.createElement("div", { className: "company-input-help-text" }, helpText))));
};

var css_248z$1 = ".company-card{background:#fff;border-radius:12px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;overflow:hidden;position:relative;transition:all .2s cubic-bezier(.645,.045,.355,1)}.company-card--default{border:1px solid #f0f0f0}.company-card--outlined{border:2px solid #d9d9d9}.company-card--filled{background:#fafafa;border:1px solid #f0f0f0}.company-card--elevated{border:1px solid #f0f0f0;box-shadow:0 2px 8px rgba(0,0,0,.1)}.company-card--small{padding:12px}.company-card--medium{padding:16px}.company-card--large{padding:24px}.company-card--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.company-card--clickable:hover{box-shadow:0 4px 16px rgba(0,0,0,.15);transform:translateY(-2px)}.company-card--clickable:active{transform:translateY(0);transition:transform .1s}.company-card--bordered{border:1px solid #f0f0f0}.company-card--loading{pointer-events:none}.company-card-loading-overlay{align-items:center;background:hsla(0,0%,100%,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:10}.company-card-loading-spinner{display:flex;gap:4px}.company-card-loading-dot{animation:company-card-loading 1.4s ease-in-out infinite both;background:#1677ff;border-radius:50%;height:8px;width:8px}.company-card-loading-dot:first-child{animation-delay:-.32s}.company-card-loading-dot:nth-child(2){animation-delay:-.16s}@keyframes company-card-loading{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.company-card-cover{margin:-16px -16px 16px;overflow:hidden}.company-card--small .company-card-cover{margin:-12px -12px 12px}.company-card--large .company-card-cover{margin:-24px -24px 24px}.company-card-cover img{display:block;height:auto;width:100%}.company-card-header{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:12px;min-height:24px}.company-card-header-content{flex:1;min-width:0}.company-card-title{word-wrap:break-word;color:#262626;font-size:16px;font-weight:600;line-height:1.5;margin:0}.company-card-subtitle{word-wrap:break-word;color:#8c8c8c;font-size:14px;line-height:1.4;margin:4px 0 0}.company-card-extra{color:#1677ff;cursor:pointer;flex-shrink:0;font-size:14px;margin-left:16px}.company-card-body{word-wrap:break-word;color:#595959;font-size:14px;line-height:1.6}.company-card--no-header .company-card-body{margin-top:0}.company-card--small .company-card-title{font-size:14px}.company-card--small .company-card-body,.company-card--small .company-card-extra,.company-card--small .company-card-subtitle{font-size:12px}.company-card--large .company-card-title{font-size:18px}.company-card--large .company-card-body,.company-card--large .company-card-extra,.company-card--large .company-card-subtitle{font-size:16px}@media (max-width:768px){.company-card{border-radius:8px}.company-card--small{padding:8px}.company-card--medium{padding:12px}.company-card--large{padding:16px}.company-card-header{margin-bottom:8px}.company-card-extra{margin-left:8px}}@media (prefers-color-scheme:dark){.company-card{background:#141414;border-color:#303030}.company-card--filled{background:#1f1f1f}.company-card-title{color:#fff}.company-card-subtitle{color:#bfbfbf}.company-card-body{color:#d9d9d9}.company-card-loading-overlay{background:hsla(0,0%,8%,.8)}}";
styleInject(css_248z$1);

var Card = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, extra = _a.extra, cover = _a.cover, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.clickable, clickable = _d === void 0 ? false : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, _f = _a.bordered, bordered = _f === void 0 ? true : _f, children = _a.children, className = _a.className, style = _a.style, onClick = _a.onClick, headerStyle = _a.headerStyle, bodyStyle = _a.bodyStyle, rest = __rest(_a, ["title", "subtitle", "extra", "cover", "variant", "size", "clickable", "loading", "bordered", "children", "className", "style", "onClick", "headerStyle", "bodyStyle"]);
    var cardClassName = classNames('company-card', "company-card--".concat(variant), "company-card--".concat(size), {
        'company-card--clickable': clickable,
        'company-card--loading': loading,
        'company-card--bordered': bordered,
        'company-card--no-header': !title && !subtitle && !extra,
    }, className);
    var handleClick = function (event) {
        if (clickable && onClick && !loading) {
            onClick(event);
        }
    };
    var renderHeader = function () {
        if (!title && !subtitle && !extra)
            return null;
        return (React__default.createElement("div", { className: "company-card-header", style: headerStyle },
            React__default.createElement("div", { className: "company-card-header-content" },
                title && React__default.createElement("div", { className: "company-card-title" }, title),
                subtitle && React__default.createElement("div", { className: "company-card-subtitle" }, subtitle)),
            extra && React__default.createElement("div", { className: "company-card-extra" }, extra)));
    };
    var renderCover = function () {
        if (!cover)
            return null;
        return (React__default.createElement("div", { className: "company-card-cover" }, cover));
    };
    var renderBody = function () {
        if (!children)
            return null;
        return (React__default.createElement("div", { className: "company-card-body", style: bodyStyle }, children));
    };
    var renderLoading = function () {
        if (!loading)
            return null;
        return (React__default.createElement("div", { className: "company-card-loading-overlay" },
            React__default.createElement("div", { className: "company-card-loading-spinner" },
                React__default.createElement("div", { className: "company-card-loading-dot" }),
                React__default.createElement("div", { className: "company-card-loading-dot" }),
                React__default.createElement("div", { className: "company-card-loading-dot" }))));
    };
    return (React__default.createElement(Card$1, __assign({ className: cardClassName, style: style, onClick: handleClick }, rest),
        renderCover(),
        renderHeader(),
        renderBody(),
        renderLoading()));
};

var css_248z = ".company-cockpit{height:100%;position:fixed;width:100%}.company-cockpit-content{display:flex;flex-direction:column;height:100%;width:100%}.company-cockpit-top-safe-area{background:#ace0ff}.company-cockpit-bottom-safe-area{background:#ffcfac}.company-cockpit-navbar{background-color:#eb6e00}.company-cockpit-navbar-back-title{color:#fff}.company-cockpit-navbar-title{color:#fff;font-size:15px}.company-cockpit-children-content{flex-grow:1;overflow:auto;padding-bottom:50px}.company-cockpit-list-tags{-webkit-overflow-scrolling:touch;background:#f6f6f6;box-shadow:0 6px 9px 0 rgba(0,0,0,.1);display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;padding:10px 5px}.company-cockpit-tag-content{align-items:center;box-sizing:border-box;display:flex;flex:0 0 25%;flex-direction:column;font-size:12px;justify-content:center}.company-cockpit-tag-content-icon{display:flex;font-size:24px}.company-cockpit-tag-content-title{margin:0;text-align:center}.company-cockpit-footer-tabbar{background-color:#f5f5f5;bottom:0;height:50px;left:0;position:fixed;width:100%}.company-cockpit-footer-tabbar .adm-tab-bar-item-active{color:var(--active-color)}.company-cockpit-show-more-icon{border:1px solid;border-radius:50%;color:#ff9c47;font-size:30px;margin-top:-21px;padding:5px}.company-cockpit-menu-popup{border-top-left-radius:10px;border-top-right-radius:10px}.company-cockpit-menu-popup-content{padding:24px}.company-cockpit-menu-popup-grid{display:flex;flex-wrap:wrap}.company-cockpit-menu-content-list{background-color:#f0f8ff;border-radius:5px;box-sizing:border-box;display:flex;flex:0 0 45%;font-size:5.33333vw;margin-bottom:2.66667vw;margin-right:10px;padding:0 10px}.company-cockpit-menu-content-list-item{align-items:center;display:flex}.company-cockpit-menu-content-list-icon{align-items:center;display:flex;height:40px;width:40px}.company-cockpit-disabled{color:#00000040;pointer-events:none}";
styleInject(css_248z);

var Cockpit = function (_a) {
    var _b;
    var children = _a.children, _c = _a.backTitle, backTitle = _c === void 0 ? '返回' : _c, _d = _a.backArrowContent, backArrowContent = _d === void 0 ? React__default.createElement(LeftOutline, { color: "#ffffff" }) : _d, rightContent = _a.rightContent, _e = _a.NavBarTitle, NavBarTitle = _e === void 0 ? '测试标题' : _e, back = _a.back, footerTabs = _a.footerTabs, initKey = _a.initKey, className = _a.className, style = _a.style, onNavigate = _a.onNavigate, onTabChange = _a.onTabChange;
    var _f = useState(initKey || ((_b = footerTabs === null || footerTabs === void 0 ? void 0 : footerTabs[0]) === null || _b === void 0 ? void 0 : _b.key) || 'home'), tags = _f[0], setTags = _f[1];
    var _g = useState(false), visible2 = _g[0], setVisible2 = _g[1];
    var _h = useState([]), childrenList = _h[0], setChildrenList = _h[1];
    useLayoutEffect(function () {
        var themeColor = document.querySelector('.company-cockpit');
        if (themeColor) {
            themeColor.style.setProperty('--active-color', '#eb6e00');
        }
    }, []);
    var _j = useMemo(function () {
        var _a;
        var len = (_a = footerTabs === null || footerTabs === void 0 ? void 0 : footerTabs.length) !== null && _a !== void 0 ? _a : 0;
        if (len <= 0) {
            return { getFooterTabs: [], extendMenuList: [] };
        }
        if (len === 1) {
            // 只有一个标签时的处理逻辑
            return { getFooterTabs: footerTabs, extendMenuList: [] };
        }
        if (len >= 5) {
            return {
                getFooterTabs: __spreadArray(__spreadArray(__spreadArray([], footerTabs.slice(0, 2), true), [
                    {
                        key: 'showMore',
                        title: '',
                        icon: (React__default.createElement("div", { className: "company-cockpit-show-more-icon", onClick: function () { return setVisible2(true); } },
                            React__default.createElement(AppstoreOutline, null))),
                        url: '',
                    }
                ], false), footerTabs.slice(2, 4), true),
                extendMenuList: footerTabs.slice(4),
            };
        }
        return { getFooterTabs: footerTabs, extendMenuList: [] };
    }, [footerTabs]), getFooterTabs = _j.getFooterTabs, extendMenuList = _j.extendMenuList;
    var goTags = useCallback(function (val) {
        if (val === 'showMore')
            return;
        var data = footerTabs.find(function (item) { return item.key === val; });
        if (!data) {
            setChildrenList([]);
            return;
        }
        setChildrenList([]);
        if (data === null || data === void 0 ? void 0 : data.children) {
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
    var tagsItem = useCallback(function (title, key, icon, url) {
        return (React__default.createElement("div", { key: key, className: "company-cockpit-tag-content", onClick: function () {
                if (url && onNavigate) {
                    onNavigate(url);
                }
            } },
            React__default.createElement("div", { className: "company-cockpit-tag-content-icon" }, icon),
            React__default.createElement("p", { className: "company-cockpit-tag-content-title" }, title)));
    }, [onNavigate]);
    var renderMenuList = useCallback(function () {
        return extendMenuList.map(function (item) {
            return (React__default.createElement("div", { className: "company-cockpit-menu-content-list", onClick: function () {
                    if (item.url && onNavigate) {
                        onNavigate(item.url);
                    }
                }, key: item.key },
                React__default.createElement("div", { className: "company-cockpit-menu-content-list-item" },
                    React__default.createElement("div", { className: "company-cockpit-menu-content-list-icon" }, item.icon),
                    React__default.createElement("span", null, item.title))));
        });
    }, [extendMenuList, onNavigate]);
    var innerBack = useCallback(function () {
        if (back) {
            back();
        }
    }, [back]);
    var cockpitClassName = "company-cockpit ".concat(className || '').trim();
    return (React__default.createElement("div", { className: cockpitClassName, style: style },
        React__default.createElement("div", { className: "company-cockpit-top-safe-area" },
            React__default.createElement(SafeArea, { position: "top" })),
        React__default.createElement("div", { className: "company-cockpit-content" },
            React__default.createElement("div", { className: "company-cockpit-navbar" },
                React__default.createElement(NavBar, { back: React__default.createElement("span", { className: "company-cockpit-navbar-back-title" }, backTitle), onBack: innerBack, backArrow: backArrowContent ? backArrowContent : false, right: rightContent ? rightContent : false },
                    React__default.createElement("span", { className: "company-cockpit-navbar-title" }, NavBarTitle))),
            childrenList && childrenList.length > 0 && (React__default.createElement("div", { className: "company-cockpit-list-tags" }, childrenList.map(function (item) {
                return tagsItem(item.title, item.key, item.icon, item.url);
            }))),
            React__default.createElement("div", { className: "company-cockpit-children-content" }, children),
            React__default.createElement("div", { className: "company-cockpit-footer-tabbar" },
                React__default.createElement(TabBar, { onChange: function (value) { return goTags(value); }, activeKey: tags }, getFooterTabs && getFooterTabs.map(function (item) { return (React__default.createElement(TabBar.Item, { className: "".concat(item.disable ? "company-cockpit-disabled" : ""), key: item.key, icon: item.icon, title: item.title })); })))),
        React__default.createElement("div", { className: "company-cockpit-bottom-safe-area" },
            React__default.createElement(SafeArea, { position: "bottom" })),
        React__default.createElement(Popup, { visible: visible2, onMaskClick: function () {
                setVisible2(false);
            }, bodyClassName: "company-cockpit-menu-popup", bodyStyle: { height: '40vh' } },
            React__default.createElement("div", { className: "company-cockpit-menu-popup-content" },
                React__default.createElement("div", { className: "company-cockpit-menu-popup-grid" }, renderMenuList())))));
};

// 导入组件及其样式
// 版本信息
var version = '1.2.0';
// 默认导出（支持全量导入）
var index = {
    Button: Button,
    Input: Input,
    Card: Card,
    Cockpit: Cockpit,
    version: version,
};

export { Button, Card, Cockpit, Input, index as default, version };
//# sourceMappingURL=index.esm.js.map
