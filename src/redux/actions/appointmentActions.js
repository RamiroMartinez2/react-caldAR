import {
  GET_APPOINTMENT_FETCHING,
  GET_APPOINTMENT_FULFILLED,
  GET_APPOINTMENT_REJECTED,
  ADD_APPOINTMENT_FETCHING,
  ADD_APPOINTMENT_FULFILLED,
  ADD_APPOINTMENT_REJECTED,
  DELETE_APPOINTMENT_FETCHING,
  DELETE_APPOINTMENT_FULFILLED,
  DELETE_APPOINTMENT_REJECTED,
  UPDATE_APPOINTMENT_FETCHING,
  UPDATE_APPOINTMENT_FULFILLED,
  UPDATE_APPOINTMENT_REJECTED,
} from "../types/appointmentTypes";

const URL = "https://be-caldar.herokuapp.com/appointments";

const getAppointmentsFetching = () => ({
  type: GET_APPOINTMENT_FETCHING,
});

const getAppointmentsFulfilled = (list) => ({
  type: GET_APPOINTMENT_FULFILLED,
  payload: list,
});

const getAppointmentsRejected = (error) => ({
  type: GET_APPOINTMENT_REJECTED,
  payload: error,
});

export const getAppointmentAsync = () => (dispatch) => {
  dispatch(getAppointmentsFetching());
  return fetch(`${URL}`, { method: "GET" })
    .then((data) => data.json())
    .then((json) => {
      dispatch(getAppointmentsFulfilled(json));
    })
    .catch((error) => {
      dispatch(getAppointmentsRejected(error));
    });
};

const addAppointmentsFetching = () => ({
  type: ADD_APPOINTMENT_FETCHING,
});

const addAppointmentsFulfilled = (content) => ({
  type: ADD_APPOINTMENT_FULFILLED,
  payload: content,
});

const addAppointmentsRejected = (error) => ({
  type: ADD_APPOINTMENT_REJECTED,
  payload: error,
});

export const addAppointmentAsync = (content) => (dispatch) => {
  dispatch(addAppointmentsFetching());
  const body = JSON.stringify(content);
  return fetch(`${URL}/`, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .then((json) => {
      if (!json.code) {
        dispatch(addAppointmentsFulfilled(json));
      } else {
        dispatch(addAppointmentsRejected(json));
      }
    })
    .catch((error) => dispatch(addAppointmentsRejected(error)));
};

const deleteAppointmentsFetching = () => ({
  type: DELETE_APPOINTMENT_FETCHING,
});

const deleteAppointmentsFulfilled = (payload) => ({
  type: DELETE_APPOINTMENT_FULFILLED,
  payload,
});

const deleteAppointmentsRejected = () => ({
  type: DELETE_APPOINTMENT_REJECTED,
});

export const deleteAppointmentAsync = (id) => (dispatch) => {
  dispatch(deleteAppointmentsFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then(function (data) {
      console.log(data);
      return data.json;
    })
    .then(() => {
      dispatch(deleteAppointmentsFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteAppointmentsRejected());
    });
};

const updateAppointmentsFetching = () => ({
  type: UPDATE_APPOINTMENT_FETCHING,
});

const updateAppointmentsFulfilled = (content) => ({
  type: UPDATE_APPOINTMENT_FULFILLED,
  payload: content,
});

const updateAppointmentsRejected = (error) => ({
  type: UPDATE_APPOINTMENT_REJECTED,
  payload: error,
});

export const updateAppointmentAsync = (content) => (dispatch) => {
  dispatch(updateAppointmentsFetching());
  return fetch(`${URL}/${content._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((data) => data.json())
    .then((json) => {
      if (!json.code) {
        dispatch(updateAppointmentsFulfilled(content));
      } else {
        dispatch(updateAppointmentsRejected(json));
      }
    })
    .catch((error) => dispatch(updateAppointmentsRejected(error)));
};
