import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULLFILLED,
  GET_TECHNICIANS_REJECTED,
  ADD_TECH_FETCHING, 
  ADD_TECH_FULLFILLED,
  ADD_TECH_REJECTED, 
  DELETE_TECH_FETCHING,
  DELETE_TECH_FULLFILLED,
  DELETE_TECH_REJECTED,
  UPDATE_TECH_FETCHING,
  UPDATE_TECH_FULLFILLED,
  UPDATE_TECH_REJECTED } from "../types/technicianTypes";

const initialState = {
  isLoading: false,
  error: false,
  list: []
}

const techniciansReducer = (state = initialState, action) => {
switch(action.type) {
  case GET_TECHNICIANS_FETCHING: {
      return {
          ...state,
          isLoading: true,
          error: false
      }
  }
  case GET_TECHNICIANS_FULLFILLED: {
      return {
          ...state,
          isLoading: false,
          list: action.payload
      }
  }
  case GET_TECHNICIANS_REJECTED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
  case ADD_TECH_FETCHING: {
    return {
        ...state,
        isLoading: true,
        error: false
    }
  }
  case ADD_TECH_FULLFILLED: {
      return {
          ...state,
          isLoading: false,
          list: [...state.list, action.payload]
      }
  }
  case ADD_TECH_REJECTED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
  case DELETE_TECH_FETCHING: {
      return {
          ...state,
          isLoading: true,
          error: false
      }
  }
  case DELETE_TECH_FULLFILLED: {
      return {
          ...state,
          isLoading: false,
          list: [...state.list.filter(technician => technician._id !== action.payload)]
      }
  }
  case DELETE_TECH_REJECTED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
  case UPDATE_TECH_FETCHING: {
      return {
          ...state,
          isLoading: true,
          error: false,
      }
  }
  case UPDATE_TECH_FULLFILLED: {
      return {
          ...state,
          isLoading: false,
          list: [...state.list.map(technician => {
              if (technician._id === action.payload._id) {
                technician = action.payload;
              }
              return technician;
          })]
      }
  }
  case UPDATE_TECH_REJECTED: {
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

export default techniciansReducer;