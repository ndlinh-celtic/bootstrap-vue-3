import {arrayIncludes, concat, from} from './array'
import BvEvent from './bvEvent'
import cssEscape from './cssEscape'
import {HAS_DOCUMENT_SUPPORT, HAS_NAVIGATOR_SUPPORT, HAS_WINDOW_SUPPORT, IS_BROWSER} from './env'
// For some reason the order of this matters
// Moving ./env lower than ./dom, causes it to have cannot use before init errors
// I couldn't manage to recreate it for a bug report to Vite/vue-tsc/"Someone"... It may be an issue with our config
// Perhaps someone in the future could solve the issue better, than my temporary solution of just moving the import up
import {
  attemptBlur,
  attemptFocus,
  contains,
  getActiveElement,
  getAttr,
  getBCR,
  getStyle,
  isActiveElement,
  isElement,
  isEmptySlot,
  isTag,
  isVisible,
  offset,
  removeAttr,
  requestAF,
  select,
  selectAll,
  setAttr,
} from './dom'
import getBreakpointProps from './getBreakpointProps'
import getClasses from './getClasses'
import getID from './getID'
import resolveAriaInvalid from './resolveAriaInvalid'
import {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isPlainObject,
  isString,
  isUndefined,
  isUndefinedOrNull,
  toType,
} from './inspect'
import mergeDeep from './mergeDeep'
import normalizeSlot from './normalizeSlot'
import {stringToInteger, toFloat, toInteger, toPercison} from './number'
import {assign, defineProperties, defineProperty, omit, readonlyDescriptor} from './object'
import {pluckProps, suffixPropName} from './props'
import {isBooleanish, resolveBooleanish} from './booleanish'
import isLink from './isLink'
import {startCase, toString, upperFirst} from './stringUtils'

export {
  arrayIncludes,
  concat,
  from,
  BvEvent,
  isBooleanish,
  cssEscape,
  attemptBlur,
  startCase,
  toString,
  upperFirst,
  attemptFocus,
  resolveAriaInvalid,
  contains,
  stringToInteger,
  toFloat,
  toInteger,
  pluckProps,
  isLink,
  suffixPropName,
  resolveBooleanish,
  toPercison,
  assign,
  defineProperties,
  defineProperty,
  omit,
  readonlyDescriptor,
  mergeDeep,
  normalizeSlot,
  getActiveElement,
  getAttr,
  getBCR,
  getStyle,
  isActiveElement,
  isElement,
  isEmptySlot,
  isTag,
  isVisible,
  offset,
  removeAttr,
  requestAF,
  select,
  selectAll,
  setAttr,
  HAS_DOCUMENT_SUPPORT,
  HAS_NAVIGATOR_SUPPORT,
  HAS_WINDOW_SUPPORT,
  IS_BROWSER,
  getBreakpointProps,
  getClasses,
  getID,
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isPlainObject,
  isString,
  isUndefined,
  isUndefinedOrNull,
  toType,
}

export default {
  arrayIncludes,
  concat,
  from,
  BvEvent,
  cssEscape,
  attemptBlur,
  startCase,
  toString,
  upperFirst,
  attemptFocus,
  contains,
  stringToInteger,
  toFloat,
  toInteger,
  pluckProps,
  isLink,
  suffixPropName,
  resolveBooleanish,
  toPercison,
  assign,
  defineProperties,
  defineProperty,
  omit,
  readonlyDescriptor,
  mergeDeep,
  normalizeSlot,
  getActiveElement,
  isBooleanish,
  resolveAriaInvalid,
  getAttr,
  getBCR,
  getStyle,
  isActiveElement,
  isElement,
  isEmptySlot,
  isTag,
  isVisible,
  offset,
  removeAttr,
  requestAF,
  select,
  selectAll,
  setAttr,
  HAS_DOCUMENT_SUPPORT,
  HAS_NAVIGATOR_SUPPORT,
  HAS_WINDOW_SUPPORT,
  IS_BROWSER,
  getBreakpointProps,
  getClasses,
  getID,
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isPlainObject,
  isString,
  isUndefined,
  isUndefinedOrNull,
  toType,
}
