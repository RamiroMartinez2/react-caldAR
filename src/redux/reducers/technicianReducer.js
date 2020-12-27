import { ADD_TECH, DEL_TECH, UPD_TECH } from "../types/technicianTypes";
import technicians from "../../mocks/mocksTechnician.json";

const techniciansReducer = (state = technicians, action) => {
  switch(action.type) {
    case ADD_TECH: {
      return [...state, action.payload];
    }
    case DEL_TECH: {
      return [...state.filter(tech => tech.number !== action.payload)]
    }
    case UPD_TECH: {
      return [...state.map(tech => {
        if(tech.number === action.payload.number) {
          tech = action.payload;
        }
        return tech;
        })]
    }
    default: {
      return state;
    }
  }
}

export default techniciansReducer;