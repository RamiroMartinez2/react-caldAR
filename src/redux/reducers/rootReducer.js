import { combineReducers } from "redux";
import techReducer from "./technicianReducer";
import customerReducer from "./customerReducer";
import boilerReducer from "./boilerReducer";
import buildingReducer from "./buildingReducer";
import boilerTypesReducer from './boilerTypesReducer'
import appointmentReducer from "./appointmentsReducer";

const rootReducer = combineReducers({
  //here the reducers
  technicians: techReducer,
  customers: customerReducer,
  boilers: boilerReducer,
  buildings: buildingReducer,
  boilerTypes: boilerTypesReducer,
  appointments: appointmentReducer,
});

export default rootReducer;
