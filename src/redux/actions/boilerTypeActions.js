import { ADD_BOILER_TYPE, DELETE_BOILER_TYPE, EDIT_BOILER_TYPE } from "../types/boilerTypes-Types";

export const addBoilerType = content => ({
  type: ADD_BOILER_TYPE,
  payload: {
    id: Math.floor(Math.random() * 101),
    ...content
  }
});

export const deleteBoilerType = number => ({
  type: DELETE_BOILER_TYPE,
  payload: number
})

export const editBoilerType = content => ({
  type: EDIT_BOILER_TYPE,
  payload: content
})