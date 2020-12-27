import { ADD_TECH, DEL_TECH, UPD_TECH } from "../types/technicianTypes";
import nextId from 'react-id-generator';

export const addTech = content => ({
  type: ADD_TECH,
  payload: {
    number: nextId(),
    ...content
  }
});

export const delTech = number => ({
  type: DEL_TECH,
  payload: number
})

export const updateTech = content => ({
  type: UPD_TECH,
  payload: content
})