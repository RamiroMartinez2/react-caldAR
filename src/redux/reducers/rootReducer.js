import { combineReducers } from "redux";
import techReducer from "./technicianReducer";
import customerReducer from "./customerReducer";
import boilerReducer from './boilerReducer';

const rootReducer = combineReducers({
  //here the reducers
  technicians: techReducer,
  customers: customerReducer,
  boilers: boilerReducer,
});

export default rootReducer;