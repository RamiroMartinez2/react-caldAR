import {
  ADD_BUILDING,
  DEL_BUILDING,
  UPD_BUILDING,
} from "../types/buildingTypes";
import { v4 as uuidv4 } from "uuid";

export const addBuilding = (content) => ({
  type: ADD_BUILDING,
  payload: {
    id: uuidv4(),
    ...content,
  },
});

export const delBuilding = (number) => ({
  type: DEL_BUILDING,
  payload: number,
});

export const updateBuilding = (content) => ({
  type: UPD_BUILDING,
  payload: content,
});
