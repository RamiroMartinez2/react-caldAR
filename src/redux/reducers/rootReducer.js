import { combineReducers } from "redux";
import techReducer from "./technicianReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
  //here the reducers
  technicians: techReducer,
  customers: customerReducer,
});

export default rootReducer;
