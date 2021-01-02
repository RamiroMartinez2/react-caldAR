import {
  GET_BOILERS_TYPES_FETCHING,
  GET_BOILERS_TYPES_FULFILLED,
  GET_BOILERS_TYPES_REJECTED,
  ADD_BOILER_TYPE_FETCHING,
  ADD_BOILER_TYPE_FULFILLED,
  ADD_BOILER_TYPE_REJECTED,
  DELETE_BOILER_TYPE_FETCHING,
  DELETE_BOILER_TYPE_FULFILLED,
  DELETE_BOILER_TYPE_REJECTED,
  EDIT_BOILER_TYPE_FETCHING,
  EDIT_BOILER_TYPE_FULFILLED,
  EDIT_BOILER_TYPE_REJECTED,
} from "../types/boilerTypes-Types";

const URL = "https://be-caldar.herokuapp.com/boilersTypes";

export const getBoilersTypesFetching = () => ({
  type: GET_BOILERS_TYPES_FETCHING,
});

export const getBoilersTypesFulfilled = (list) => ({
  type: GET_BOILERS_TYPES_FULFILLED,
  payload: list,
});

export const getBoilersTypesRejected = (error) => ({
  type: GET_BOILERS_TYPES_REJECTED,
  payload: error,
});

export const getBoilersTypes = () => (dispatch) => {
  dispatch(getBoilersTypesFetching());
  return fetch(`${URL}`, { method: "GET" })
    .then((data) => data.json())
    .then((json) => {
      dispatch(getBoilersTypesFulfilled(json));
    })
    .catch((error) => {
      dispatch(getBoilersTypesRejected(error));
    });
};

export const addBoilerTypeFetching = () => ({
  type: ADD_BOILER_TYPE_FETCHING,
});

export const addBoilerTypeFulfilled = content => ({
  type: ADD_BOILER_TYPE_FULFILLED,
  payload: content,
});

export const addBoilerTypeRejected = error => ({
  type: ADD_BOILER_TYPE_REJECTED,
  payload: error,
});

export const addBoilerType = content => dispatch => {
  dispatch(addBoilerTypeFetching());
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
        dispatch(addBoilerTypeFulfilled(json));
      } else {
        dispatch(addBoilerTypeRejected(json));
      }
    })
    .catch((error) => dispatch(addBoilerTypeRejected(error)));
};

export const deleteBoilerTypeFetching = () => ({
  type: DELETE_BOILER_TYPE_FETCHING,
});

export const deleteBoilerTypeFulfilled = (payload) => ({
  type: DELETE_BOILER_TYPE_FULFILLED,
  payload,
});

export const deleteBoilerTypeRejected = () => ({
  type: DELETE_BOILER_TYPE_REJECTED,
});

export const deleteBoilerType = (id) => (dispatch) => {
  dispatch(deleteBoilerTypeFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then(function (data) {
      return data.json;
    })
    .then(() => {
      dispatch(deleteBoilerTypeFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteBoilerTypeRejected());
    });
};

export const editBoilerTypeFetching = () => ({
  type: EDIT_BOILER_TYPE_FETCHING,
});

export const editBoilerTypeFulfilled = (content) => ({
  type: EDIT_BOILER_TYPE_FULFILLED,
  payload: content,
});

export const editBoilerTypeRejected = (error) => ({
  type: EDIT_BOILER_TYPE_REJECTED,
  payload: error,
});

export const editBoilerType = (content) => (dispatch) => {
  dispatch(editBoilerTypeFetching());
  return fetch(`${URL}/${content._id}`, {
    method: "PUT",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((data) => data.json())
    .then((json) => {
      if (!json.code) {
        dispatch(editBoilerTypeFulfilled(content));
      } else {
        dispatch(editBoilerTypeRejected(json));
      }
    })
    .catch((error) => dispatch(editBoilerTypeRejected(error)));
};
