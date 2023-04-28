export const emailValidation = (email) => {
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
};

export const passwordValidation = (password) => {
  // 8~15자 특수문자 / 문지/ 숫자 포함
  const regExp =
    /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*()+|=]).*$/;
  return regExp.test(password);
};

export const phoneValidation = (phone) => {
  const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  return regExp.test(phone);
};

export const birthValidation = (birth) => {
  const regExp =
    /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return regExp.test(birth);
};
