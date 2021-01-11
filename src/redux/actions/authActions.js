import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  SET_AUTHENTICATION,
  SIGNOUT_FETCHING,
  SIGNOUT_FULFILLED,
  SIGNOUT_REJECTED
} from '../types/authTypes';

const URL = "https://be-caldar.herokuapp.com/";

const loginFetching = () => {
  return {
    type: LOGIN_FETCHING
  }
};

const loginFulfilled = () => {
  return {
    type: LOGIN_FULFILLED
  }
};

const loginRejected = () => {
  return {
    type: LOGIN_REJECTED
  }
};

export const loginAction = credentials => dispatch => {
  dispatch(loginFetching());
  return fetch(`${URL}/login`, { 
    data: credentials, 
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem('token')
    },
  })
    .then(data => data.json())
    .then(response => {
      localStorage.setItem('token', response.token);
      return dispatch(loginFulfilled());
    })
    .catch(() => {
      return dispatch(loginRejected());
    })
};

export const setAuthentication = () => {
  return ({
    type: SET_AUTHENTICATION
  })
};

const signoutFetching = () => {
  return {
    type: SIGNOUT_FETCHING
  }
};

const signoutFulfilled = () => {
  return {
    type: SIGNOUT_FULFILLED
  }
};

const signoutRejected = () => {
  return {
    type: SIGNOUT_REJECTED
  }
};

export const signoutAction = () => dispatch => {
  dispatch(signoutFetching());
  return fetch(`${URL}/signout`, {
    data: credentials, 
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem('token')
    },
  })
    .then(data => data.json())
    .then(() => {
      localStorage.removeItem('token');
      return dispatch(signoutFulfilled());
    })
    .catch(() => {
      return dispatch(signoutRejected());
    });
};