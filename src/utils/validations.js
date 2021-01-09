export const required = (value) => (value ? undefined : "Required");

export const fullName = (value) =>
  /^(?=.{6,})([a-zA-Z]+\s{1}[a-zA-Z]+)$/.test(value)
    ? undefined
    : "Invalid Full Name";

export const address = (value) =>
  /^(?=.{5,})([a-zA-Z0-9]+\s{1}[0-9]+)$/.test(value)
    ? undefined
    : "Invalid Address";

export const phone = (value) =>
  /^(?=.{7,})([0-9])+$/.test(value)
    ? undefined
    : "Must have at least 7 numbers";

  export const clients = (value) =>
  /^[0-9]+$/.test(value) ? undefined : "Must be a number";

export const hours = (value) =>
  value <= 8 ? undefined : "Must be a number between 0-8";

export const email = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(value)
    ? undefined
    : "Invalid Email";

export const skill = (value) =>
  value <= 10 && value >= 1 ? undefined : "Must be a number between 1-10";

export const stock = (value) =>
  value <= 20 && value >= 0 ? undefined : "Must be a number between 0-20";
export const hour_maintaince_cost = (value) =>
  /^[0-9]+(\.[0-9]{1,2})?$/.test(value)
    ? undefined
    : "The decimal number is incorrect, it must be separated by .";

export const hour_eventual_cost = (value) =>
  /^[0-9]+(\.[0-9]{1,2})?$/.test(value)
    ? undefined
    : "The decimal number is incorrect, it must be separated by .";

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
