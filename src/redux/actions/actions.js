import {
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT,
} from "../types/types";

export const addAppointment = (content) => ({
  type: ADD_APPOINTMENT,
  payload: {
    id: Math.floor(Math.random() * 101),
    ...content
  }
});

export const deleteAppointment = (id) => ({
  type: DELETE_APPOINTMENT,
  payload: id,
});

export const updateAppointment = (content) => ({
  type: UPDATE_APPOINTMENT,
  payload: content,
});
