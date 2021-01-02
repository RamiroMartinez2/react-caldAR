import {  
  GET_BOILERS_FETCHING, 
  GET_BOILERS_FULFILLED, 
  GET_BOILERS_REJECTED, 
  ADD_BOILER_FETCHING, 
  ADD_BOILER_FULFILLED, 
  ADD_BOILER_REJECTED,
  DELETE_BOILER_FETCHING,
  DELETE_BOILER_FULFILLED,
  DELETE_BOILER_REJECTED,
  EDIT_BOILER_FETCHING,  
  EDIT_BOILER_FULFILLED,
  EDIT_BOILER_REJECTED, } from "../types/boilerTypes";

const initialState = {
  isLoading: false, 
  list: [],
  error: false
}

const boilerReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BOILERS_FETCHING: {
      return {...state, isLoading: true,};
    }
    case GET_BOILERS_FULFILLED: {
      return {...state, isLoading: false, list: action.payload};
    }
    case GET_BOILERS_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case ADD_BOILER_FETCHING: {
      return {...state, isLoading: true,};
    }
    case ADD_BOILER_FULFILLED: {
      return {...state, isLoading: false, list: [...state.list, action.payload]};
    }
    case ADD_BOILER_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case DELETE_BOILER_FETCHING: {
      return {...state, isLoading: true,};
    }
    case DELETE_BOILER_FULFILLED: {
      return {...state, isLoading: false, list: [...state.list.filter(boiler => boiler._id !== action.payload)]}
    }
    case DELETE_BOILER_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case EDIT_BOILER_FETCHING: {
      return {...state, isLoading: true,};
    }
    case EDIT_BOILER_FULFILLED: {
      return {
        ...state, 
        isLoading: false, 
        list: [...state.list.map(boiler => { 
          if (boiler._id === action.payload._id){
            boiler = action.payload;
          }return boiler;
        })]
      }
    }
    case EDIT_BOILER_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default boilerReducer;