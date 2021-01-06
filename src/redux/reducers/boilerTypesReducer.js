import {  
  GET_BOILERS_TYPES_FETCHING, 
  GET_BOILERS_TYPES_FULFILLED, 
  GET_BOILERS_TYPES_REJECTED, 
  ADD_BOILER_TYPE_FETCHING, 
  ADD_BOILER_TYPE_FULFILLED, 
  ADD_BOILER_TYPE_REJECTED,
  DELETE_BOILER_TYPE_FETCHING,
  DELETE_BOILER_TYPE_FULFILLED,
  DELETE_BOILER_TYPE_REJECTED,
  EDIT_BOILER_TYPE_FETCHING,  
  EDIT_BOILER_TYPE_FULFILLED,
  EDIT_BOILER_TYPE_REJECTED, } from "../types/boilerTypes-Types";

const initialState = {
  isLoading: false, 
  list: [],
  error: false
}

const boilerTypeReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BOILERS_TYPES_FETCHING: {
      return {...state, isLoading: true,};
    }
    case GET_BOILERS_TYPES_FULFILLED: {
      return {...state, isLoading: false, list: action.payload};
    }
    case GET_BOILERS_TYPES_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case ADD_BOILER_TYPE_FETCHING: {
      return {...state, isLoading: true,};
    }
    case ADD_BOILER_TYPE_FULFILLED: {
      return {...state, isLoading: false, list: [...state.list, action.payload]};
    }
    case ADD_BOILER_TYPE_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case DELETE_BOILER_TYPE_FETCHING: {
      return {...state, isLoading: true,};
    }
    case DELETE_BOILER_TYPE_FULFILLED: {
      return {...state, isLoading: false, list: [...state.list.filter(boilerType => boilerType._id !== action.payload)]}
    }
    case DELETE_BOILER_TYPE_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    case EDIT_BOILER_TYPE_FETCHING: {
      return {...state, isLoading: true,};
    }
    case EDIT_BOILER_TYPE_FULFILLED: {
      return {
        ...state, 
        isLoading: false, 
        list: [...state.list.map(boilerType => { 
          if (boilerType._id === action.payload._id){
            boilerType = action.payload;
          }return boilerType;
        })]
      }
    }
    case EDIT_BOILER_TYPE_REJECTED: {
      return {...state, isLoading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default boilerTypeReducer;