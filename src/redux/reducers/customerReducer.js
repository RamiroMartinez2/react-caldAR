import {  
  GET_CUSTOMERS_FETCHING, 
  GET_CUSTOMERS_FULFILLED, 
  GET_CUSTOMERS_REJECTED, 
  ADD_CUSTOMER_FETCHING, 
  ADD_CUSTOMER_FULFILLED, 
  ADD_CUSTOMER_REJECTED,
  DELETE_CUSTOMER_FETCHING,
  DELETE_CUSTOMER_FULFILLED,
  DELETE_CUSTOMER_REJECTED,
  EDIT_CUSTOMER_FETCHING,  
  EDIT_CUSTOMER_FULFILLED,
  EDIT_CUSTOMER_REJECTED, } from "../types/customerTypes";

const initialState = {
  isLoading: false, 
  list: [],
  error: false
}

const customerReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CUSTOMERS_FETCHING: {
      return {...state, isLoading: true,};
    }
    case GET_CUSTOMERS_FULFILLED: {
      return {...state, isLoading: false, list: action.payload};
    }
    case GET_CUSTOMERS_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case ADD_CUSTOMER_FETCHING: {
      return {...state, isLoading: true,};
    }
    case ADD_CUSTOMER_FULFILLED: {
      return {...state, isLoading: false, list: [...state.list, action.payload]};
    }
    case ADD_CUSTOMER_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case DELETE_CUSTOMER_FETCHING: {
      return {...state, isLoading: true,};
    }
    case DELETE_CUSTOMER_FULFILLED: {
      return {...state, isLoading: false, list: [...state.list.filter(boiler => boiler._id !== action.payload)]}
    }
    case DELETE_CUSTOMER_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case EDIT_CUSTOMER_FETCHING: {
      return {...state, isLoading: true,};
    }
    case EDIT_CUSTOMER_FULFILLED: {
      return {
        ...state, 
        isLoading: false, 
        list: [...state.list.map(customer => { 
          if (customer._id === action.payload._id){
            customer = action.payload;
          }return customer;
        })]
      }
    }
    case EDIT_CUSTOMER_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default customerReducer;