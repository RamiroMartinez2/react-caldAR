import {
  GET_CUSTOMER_FETCHING,
  GET_CUSTOMER_FULFILLED,
  GET_CUSTOMER_REJECTED,
  ADD_CUSTOMER_FETCHING,
  ADD_CUSTOMER_FULFILLED, 
  ADD_CUSTOMER_REJECTED,
  DEL_CUSTOMER_FETCHING,
  DEL_CUSTOMER_FULFILLED,
  DEL_CUSTOMER_REJECTED,
  UPD_CUSTOMER_FETCHING,
  UPD_CUSTOMER_FULFILLED,
  UPD_CUSTOMER_REJECTED
} from '../types/customerTypes';

const initialState = {
  isLoading: false,
  error: false,
  list: []
}

const customerReducer = (state = initialState, action) => {
switch(action.type) {
  case GET_CUSTOMER_FETCHING: {
      return {
          ...state,
          isLoading: true,
          error: false
      }
  }
  case GET_CUSTOMER_FULFILLED: {
      return {
          ...state,
          isLoading: false,
          list: action.payload
      }
  }
  case GET_CUSTOMER_REJECTED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
  case ADD_CUSTOMER_FETCHING: {
    return {
        ...state,
        isLoading: true,
        error: false
    }
  }
  case ADD_CUSTOMER_FULFILLED: {
      return {
          ...state,
          isLoading: false,
          list: [...state.list, action.payload]
      }
  }
  case ADD_CUSTOMER_REJECTED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
  case DEL_CUSTOMER_FETCHING: {
      return {
          ...state,
          isLoading: true,
          error: false
      }
  }
  case DEL_CUSTOMER_FULFILLED: {
      return {
          ...state,
          isLoading: false,
          list: [...state.list.filter(customer => customer._id !== action.payload)]
      }
  }
  case DEL_CUSTOMER_REJECTED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
  case UPD_CUSTOMER_FETCHING: {
      return {
          ...state,
          isLoading: true,
          error: false,
      }
  }
  case UPD_CUSTOMER_FULFILLED: {
      return {
          ...state,
          isLoading: false,
          list: [...state.list.map(customer => {
              if (customer._id === action.payload._id) {
                customer = action.payload;
              }
              return customer;
          })]
      }
  }
  case UPD_CUSTOMER_REJECTED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
  default: {
    return state;
  }
}
}

export default customerReducer;