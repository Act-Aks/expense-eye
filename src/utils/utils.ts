export const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

export const validateEmail = (email: string) => {
  return emailRegex.test(email);
};

export const validatePassword = (passwd: string) => {
  return passwd.length >= 6;
};
