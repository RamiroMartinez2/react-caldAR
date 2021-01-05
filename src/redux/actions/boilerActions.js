import {
  GET_BOILERS_FETCHING,
  GET_BOILERS_FULFILLED,
  GET_BOILERS_REJECTED,
  ADD_BOILER_FETCHING,
  ADD_BOILER_FULFILLED,
  ADD_BOILER_REJECTED,
  DELETE_BOILER_FETCHING,
  DELETE_BOILER_FULFILLED,
  DELETE_BOILER_REJECTED,
  EDIT_BOILER_FETCHING,
  EDIT_BOILER_FULFILLED,
  EDIT_BOILER_REJECTED,
} from "../types/boilerTypes";

const URL = "https://be-caldar.herokuapp.com/boilers";

export const getBoilersFetching = () => ({
  type: GET_BOILERS_FETCHING,
});

export const getBoilersFulfilled = (list) => ({
  type: GET_BOILERS_FULFILLED,
  payload: list,
});

export const getBoilersRejected = (error) => ({
  type: GET_BOILERS_REJECTED,
  payload: error,
});

export const getBoilers = () => (dispatch) => {
  dispatch(getBoilersFetching());
  return fetch(`${URL}`, { method: "GET" })
    .then((data) => data.json())
    .then((json) => {
      dispatch(getBoilersFulfilled(json));
    })
    .catch((error) => {
      dispatch(getBoilersRejected(error));
    });
};

export const addBoilerFetching = () => ({
  type: ADD_BOILER_FETCHING,
});

export const addBoilerFulfilled = content => ({
  type: ADD_BOILER_FULFILLED,
  payload: content,
});

export const addBoilerRejected = error => ({
  type: ADD_BOILER_REJECTED,
  payload: error,
});

export const addBoiler = content => dispatch => {
  dispatch(addBoilerFetching());
  const body = JSON.stringify(content);
  return fetch(`${URL}/`, {
    method: "POST",
    body: body,
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((json) => {
      if (!json.code) {
        dispatch(addBoilerFulfilled(json));
      } else {
        dispatch(addBoilerRejected(json));
      }
    })
    .catch((error) => dispatch(addBoilerRejected(error)));
};

export const deleteBoilerFetching = () => ({
  type: DELETE_BOILER_FETCHING,
});

export const deleteBoilerFulfilled = (payload) => ({
  type: DELETE_BOILER_FULFILLED,
  payload,
});

export const deleteBoilerRejected = () => ({
  type: DELETE_BOILER_REJECTED,
});

export const deleteBoiler = (id) => (dispatch) => {
  dispatch(deleteBoilerFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then(function (data) {
      console.log(data);
      return data.json;
    })
    .then(() => {
      dispatch(deleteBoilerFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteBoilerRejected());
    });
};

export const editBoilerFetching = () => ({
  type: EDIT_BOILER_FETCHING,
});

export const editBoilerFulfilled = (content) => ({
  type: EDIT_BOILER_FULFILLED,
  payload: content,
});

export const editBoilerRejected = (error) => ({
  type: EDIT_BOILER_REJECTED,
  payload: error,
});

export const editBoiler = (content) => (dispatch) => {
  dispatch(editBoilerFetching());
  return fetch(`${URL}/${content._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((data) => data.json())
    .then((json) => {
      if (!json.code) {
        dispatch(editBoilerFulfilled(content));
      } else {
        dispatch(editBoilerRejected(json));
      }
    })
    .catch((error) => dispatch(editBoilerRejected(error)));
};
