/* 校验规则 */

import {isPositiveInteger} from './util'

let validate = {}

// 经度： -180.0～+180.0（整数部分为0～180，必须输入6位小数），必填
validate.validateLongitude = (rule, value, callback) => {
  let reg = /^-?(180(\.0{0,6})?|(1[0-7][0-9]|[1-9]?[0-9])(\.[0-9]{0,6}))$/
  if (!reg.test(value)) {
    callback(new Error('请选择经度'))
  } else {
    callback()
  }
}
// 纬度： -90.0～+90.0（整数部分为0～90，必须输入6位小数），必填
validate.validateLatitude = (rule, value, callback) => {
  let reg = /^-?(90(\.0{0,6})?|[1-8]?[0-9](\.[0-9]{0,6})?)$/
  if (!reg.test(value)) {
    callback(new Error('请选择纬度'))
  } else {
    callback()
  }
}
// 校验手机号，非必填
validate.validatePhoneNumber = (rule, value, callback) => {
  let myreg = /^((0\d{2,3}-\d{7,8})|(1[1234567890]\d{9}))$/
  if (value && !myreg.test(value)) {
    callback(new Error('请输入正确的电话号码'))
  } else {
    callback()
  }
}
// 校验手机号,必填
validate.validateMustPhoneNumber = (rule, value, callback) => {
  let myreg = /^((0\d{2,3}-\d{7,8})|(1[1234567890]\d{9}))$/
  if (!myreg.test(value)) {
    callback(new Error('请输入正确的电话号码'))
  } else {
    callback()
  }
}
// 长度不能大于300个字符，非必填
validate.validateLengthFifty = (rule, value, callback) => {
  if (value && value.length > 300) {
    return callback(new Error('请输入300个字符内'))
  } else {
    callback()
  }
}
// 长度不能大于50个字符，必填
validate.validateMustLengthFifty = (rule, value, callback) => {
  if (!value || value.length > 50) {
    return callback(new Error('请输入50个字符内'))
  } else {
    callback()
  }
}
// 校验正整数，小于100万，非必填
validate.validateLessMillion = (rule, value, callback) => {
  if (value && !isPositiveInteger(value) || value > 99999) {
    return callback(new Error('应为不超过5位的正整数'))
  } else {
    callback()
  }
}
// 校验小数点位数（小数点前面最多8位数字，小数点后面最多2位数字），非必填
validate.validateDecimalsTwo = (rule, value, callback) => {
  let reg = /^\d{1,8}(\.\d{1,2})?$/
  if (value && !reg.test(value)) {
    callback(new Error('整数最多8位且小数最多2位'))
  } else {
    callback()
  }
}

// 校验负数
validate.validateTempAndKpa = (rule, value, callback) => {
  let reg = /^(-|\+)?\d{1,7}(\.\d{1,2})?$/
  if (value && !reg.test(value)) {
    callback(new Error('(整数7位，小数2位)'))
  } else {
    callback()
  }
}
// 校验小数点位数（小数点前面最多4位数字，小数点后面最多2位数字） 必填
validate.validateMustDecimalsTwo = (rule, value, callback) => {
  let reg = /^[1-9]{1}(\d{0,3})?(\.\d{1,2})?$|^[0](\.\d{1}[1-9]{1})$|^[0](\.[1-9]{1}(\d{1})?)$/
  if (!value || !reg.test(value)) {
    callback(new Error('大于0的数(整数4位，小数2位)'))
  } else {
    callback()
  }
}

// 大于0的整数(最多6位) 小于百万
validate.validateMustLessMillion = (rule, value, callback) => {
  let reg = /^[1-9][0-9]{0,5}$/
  if (!value || !reg.test(value)) {
    callback(new Error('大于0小于百万的数'))
  } else {
    callback()
  }
}
// 同时验证手机号和座机号 非必填
validate.isPhone = (rule, value, callback) => {
  let isTel = /^0\d{2,3}-?\d{7,8}$|^1[0-9]{10}$/
  if (value && !isTel.test(value)) {
    callback(new Error('请输入正确的座机号或手机号'))
  } else {
    callback()
  }
}
export default validate
