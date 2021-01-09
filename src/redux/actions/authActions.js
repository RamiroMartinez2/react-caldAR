import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  SET_AUTHENTICATION,
  SIGNOUT_FETCHING,
  SIGNOUT_FULFILLED,
  SIGNOUT_REJECTED
} from '../types/authTypes';
import { requestPost } from '../../utils/request'

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
  return requestPost(`${URL}/login`, { data: credentials })
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
  return requestPost(`${URL}/signout`)
    .then(() => {
      localStorage.removeItem('token');
      return dispatch(signoutFulfilled());
    })
    .catch(() => {
      return dispatch(signoutRejected());
    });
};