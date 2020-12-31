import {
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT,
} from "../types/appointmentTypes";
import appointment from "../../mocks/mocksAppointment.json";

const appointmentReducer = (state = appointment, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT: {
      return [...state, action.payload];
    }
    case DELETE_APPOINTMENT: {
      return [...state.filter((appoint) => appoint.id !== action.payload)];
    }
    case UPDATE_APPOINTMENT: {
      return [
        ...state.map((appoint) => {
          if (appoint.id === action.payload.id) {
            appoint = action.payload;
          }
          return appoint;
        }),
      ];
    }
    default: {
      return state;
    }
  }
};

export default appointmentReducer;
