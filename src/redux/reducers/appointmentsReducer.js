import {
  GET_APPOINTMENT_FETCHING,
  GET_APPOINTMENT_FULFILLED,
  GET_APPOINTMENT_REJECTED,
  ADD_APPOINTMENT_FETCHING,
  ADD_APPOINTMENT_FULFILLED,
  ADD_APPOINTMENT_REJECTED,
  DELETE_APPOINTMENT_FETCHING,
  DELETE_APPOINTMENT_FULFILLED,
  DELETE_APPOINTMENT_REJECTED,
  UPDATE_APPOINTMENT_FULFILLED,
  UPDATE_APPOINTMENT_REJECTED,
  UPDATE_APPOINTMENT_FETCHING,
} from "../types/appointmentTypes";

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENT_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case GET_APPOINTMENT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_APPOINTMENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_APPOINTMENT_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ADD_APPOINTMENT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    case ADD_APPOINTMENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_APPOINTMENT_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case DELETE_APPOINTMENT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list.filter(
            (appointments) => appointments._id !== action.payload
          ),
        ],
      };
    case DELETE_APPOINTMENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_APPOINTMENT_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case UPDATE_APPOINTMENT_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list.map((appointments) => {
            if (appointments._id === action.payload._id) {
              appointments = action.payload;
            }
            return appointments;
          }),
        ],
      };
    }
    case UPDATE_APPOINTMENT_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default appointmentReducer;
