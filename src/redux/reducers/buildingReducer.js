import {
  GET_BUILDINGS_FETCHING,
  GET_BUILDINGS_FULLFILLED,
  GET_BUILDINGS_REJECTED,
  ADD_BUILDING_FETCHING,
  ADD_BUILDING_FULLFILLED,
  ADD_BUILDING_REJECTED,
  DELETE_BUILDING_FETCHING,
  DELETE_BUILDING_FULLFILLED,
  DELETE_BUILDING_REJECTED,
  UPDATE_BUILDING_FETCHING,
  UPDATE_BUILDING_FULLFILLED,
  UPDATE_BUILDING_REJECTED,
} from "../types/buildingTypes";

const initialState = {
  isLoading: false,
  error: false,
  list: [],
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUILDINGS_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case GET_BUILDINGS_FULLFILLED: {
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    }
    case GET_BUILDINGS_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case ADD_BUILDING_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case ADD_BUILDING_FULLFILLED: {
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    }
    case ADD_BUILDING_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case DELETE_BUILDING_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case DELETE_BUILDING_FULLFILLED: {
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list.filter((building) => building._id !== action.payload),
        ],
      };
    }
    case DELETE_BUILDING_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case UPDATE_BUILDING_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case UPDATE_BUILDING_FULLFILLED: {
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list.map((building) => {
            if (building._id === action.payload._id) {
              building = action.payload;
            }
            return building;
          }),
        ],
      };
    }
    case UPDATE_BUILDING_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default buildingsReducer;
