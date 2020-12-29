import { ADD_CUSTOMER, DEL_CUSTOMER, UPD_CUSTOMER } from "../types/customerTypes";
import customersBD from "../../mocks/customers-data.json";

const customersReducer = (state = customersBD, action) => {
  switch(action.type) {
    case ADD_CUSTOMER: {
      return [...state, action.payload];
    }
    case DEL_CUSTOMER: {
      return [...state.filter(customer => customer.id !== action.payload)]
    }
    case UPD_CUSTOMER: {
      return [...state.map(customer => {
        if(customer.id === action.payload.id) {
          customer = action.payload;
        }
        return customer;
        })]
    }
    default: {
      return state;
    }
  }
}

export default customersReducer;