import { ADD_BOILER, DELETE_BOILER, EDIT_BOILER, GET_BOILERS_FETCHING, GET_BOILERS_FULFILLED, GET_BOILERS_REJECTED } from "../types/boilerTypes";
//import boilers from "../../mocks/mockBoilers.json";
const initialState = {
  isLoading, 
  list: [],
  error: false
}

const boilerReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BOILERS_FETCHING: {
      return {...state, isLoading: true,};
    };
    case GET_BOILERS_FULFILLED: {
      return {...state, isLoading: false, list: action.payload};
    };
    case GET_BOILERS_REJECTED: {
      return {...state, isLoading: false, error: true};
    };
    case ADD_BOILER: {
      return [...state, action.payload];
    }
    case DELETE_BOILER: {
      return [...state.filter(boiler => boiler.id !== action.payload)]
    }
    case EDIT_BOILER: {
      return [...state.map(boiler => {
        if(boiler.id === action.payload.id) {
          boiler = action.payload;
        }
        return boiler;
        })]
    }
    default: {
      return state;
    }
  }
}

export default boilerReducer;