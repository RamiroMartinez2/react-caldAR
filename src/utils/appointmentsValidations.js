export const required = (value) => (value ? undefined : "Required");

export const number = (value) =>
  /^[0-9]+$/.test(value) ? undefined : "Must be a number";

export const hours = (value) =>
value <= 9 && value > 0 ? undefined : "Must be less than 9 hours";

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
