import {
  ADD_BUILDING,
  DEL_BUILDING,
  UPD_BUILDING,
} from "../types/buildingTypes";
import buildingsBD from "../../mocks/buildings.json";

const buildingsReducer = (state = buildingsBD, action) => {
  switch (action.type) {
    case ADD_BUILDING: {
      return [...state, action.payload];
    }
    case DEL_BUILDING: {
      return [...state.filter((building) => building.id !== action.payload)];
    }
    case UPD_BUILDING: {
      return [
        ...state.map((building) => {
          if (building.id === action.payload.id) {
            building = action.payload;
          }
          return building;
        }),
      ];
    }
    default: {
      return state;
    }
  }
};

export default buildingsReducer;
