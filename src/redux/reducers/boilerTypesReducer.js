import { ADD_BOILER_TYPE, DELETE_BOILER_TYPE, EDIT_BOILER_TYPE } from "../types/boilerTypes-Types";
import boilerTypes from "../../mocks/mocksBoilerType.json";

const boilerTypesReducer = (state = boilerTypes, action) => {
  switch(action.type) {
    case ADD_BOILER_TYPE: {
      return [...state, action.payload];
    }
    case DELETE_BOILER_TYPE: {
      return [...state.filter(boilerType => boilerType.id !== action.payload)]
    }
    case EDIT_BOILER_TYPE: {
      return [...state.map(boilerType => {
        if(boilerType.id === action.payload.id) {
          boilerType = action.payload;
        }
        return boilerType;
        })]
    }
    default: {
      return state;
    }
  }
}

export default boilerTypesReducer;