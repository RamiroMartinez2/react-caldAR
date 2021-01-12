import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  SET_AUTHENTICATION,
  SIGNOUT_FETCHING,
  SIGNOUT_FULFILLED,
  SIGNOUT_REJECTED
} from '../types/authTypes';

const initialState = {
  isLoading: false,
  error: false,
  authenticated: false
};

const todosReducers = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_FETCHING: {
      return {...state, isLoading: true,};
    }
    case LOGIN_FULFILLED: {
      return {...state, isLoading: false, authenticated: true};
    }
    case LOGIN_REJECTED: {
      return {...state, isLoading: false, error: true};
    }
    case SIGNOUT_FETCHING: {
      return {...state, isLoading: true,};
    }
    case SIGNOUT_FULFILLED: {
      return {...state, isLoading: false, error: false, authenticated: false};
    }
    case SIGNOUT_REJECTED: {
      return {...state, isLoading: false, error: true};
    }
    case SET_AUTHENTICATION: {
      return {...state, authenticated: true,};
    }
    default:
      return state;
  }
}

export default todosReducers;
