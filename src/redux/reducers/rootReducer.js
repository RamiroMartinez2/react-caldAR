import { combineReducers } from "redux";
import techReducer from "./technicianReducer";

const rootReducer = combineReducers({
  //here the reducers
  technicians: techReducer,
});

export default rootReducer;
