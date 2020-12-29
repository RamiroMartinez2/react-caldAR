import { combineReducers } from "redux";
import techReducer from "./technicianReducer";
import customerReducer from "./customerReducer";
import boilerReducer from "./boilerReducer";
import buildingReducer from "./buildingReducer";
const rootReducer = combineReducers({
  //here the reducers
  technicians: techReducer,
  customers: customerReducer,
  boilers: boilerReducer,
  buildings: buildingReducer,
});

export default rootReducer;
