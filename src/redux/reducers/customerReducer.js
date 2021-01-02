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
  UPDATE_CUSTOMER_FETCHING,
  UPDATE_CUSTOMER_FULFILLED,
  UPDATE_CUSTOMER_REJECTED,
} from "../types/customerTypes";

const initialState = {
  isLoading: false,
  error: false,
  list: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case GET_CUSTOMERS_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    }
    case GET_CUSTOMERS_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case ADD_CUSTOMER_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case ADD_CUSTOMER_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    }

    case ADD_CUSTOMER_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case UPDATE_CUSTOMER_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case UPDATE_CUSTOMER_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list.map((customer) => {
            if (customer._id === action.payload._id) {
              customer = action.payload;
            }
            return customer;
          }),
        ],
      };
    }

    case UPDATE_CUSTOMER_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    case DELETE_CUSTOMER_FETCHING: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case DELETE_CUSTOMER_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list.filter((customer) => customer._id !== action.payload),
        ],
      };
    }
    case DELETE_CUSTOMER_REJECTED: {
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

export default customerReducer;
