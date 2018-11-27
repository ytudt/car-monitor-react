
export const isArray = Array.isArray;

export function isBoolean(value) {
  return typeof(value) === 'boolean';
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isDefined(value) {
  return typeof value !== 'undefined';
}

export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isString(value) {
  return typeof value === 'string';
}
export function isPromiseLike(obj) {
  return obj && isFunction(obj.then);
}

export function isObject(value) {
  return value && Object.prototype.toString.call(value) === '[object Object]';
}

export function isEmptyObject(value) {
  for (let key in value) {
    return false;
  }
  return true;
}

export function isDate(value) {
  return toString.call(value) === '[object Date]';
}

function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

export function isElement(node) {
  return !!(node && node.nodeName);
}

export function isTel(tel) {
  return (/^1[34578]\d{9}$/.test(tel));
}

export function isVoid(value) {
  return /^\s*$/.test(value);
}
export function baseExtend(dst, objs, deep = false) {
  objs.forEach((obj) => {
    if (!isObject(obj) && !isFunction(obj)) return;

    Object.keys(obj).forEach((key) => {
      const src = obj[key];

      if (deep && isObject(src)) {
        if (isDate(src)) {
          dst[key] = new Date(src.valueOf());
        } else if (isRegExp(src)) {
          dst[key] = new RegExp(src);
        } else if (isElement(src)) {
          dst[key] = src.cloneNode(true);
        } else {
          if (!isObject(dst[key])) dst[key] = isArray(src) ? [] : {};
          baseExtend(dst[key], [src], true);
        }
      } else {
        dst[key] = src;
      }
    });
  });

  return dst;
}

export function extend(dst, ...objs) {
  return baseExtend(dst, objs, false);
}


export function noop() {}

export function getYMD(data) {
  if(!data) return '';
  let y = data.getFullYear();
  let m = data.getMonth() + 1;
  let d = data.getDate();
  return `${y}-${m}-${d}`;
}


