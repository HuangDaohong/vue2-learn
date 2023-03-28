
// *  验证手机号
export const isPhoneNum = (phone) => {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(phone);
};

// *  验证邮箱
export const isEmail = (email) => {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return reg.test(email);
};