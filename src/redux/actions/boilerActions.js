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

const URL = 'https://be-caldar.herokuapp.com/boilers'

export const getBoilersFetching = () => ({
  type: GET_BOILERS_FETCHING
});

export const getBoilersFulfilled = (payload) => ({
  type: GET_BOILERS_FULFILLED,
  payload
});

export const getBoilersRejected = () => ({
  type: GET_BOILERS_REJECTED
});

export const getBoilers = () => dispatch => {
  dispatch(getBoilersFetching());
  return fetch(URL)
  .then(data => data.json())
  .then(response => {
    dispatch(getBoilersFulfilled(response));
  }) 
  .catch(() => {
    dispatch(getBoilersRejected());
  });
};

export const addBoilerFetching = () => ({
  type: ADD_BOILER_FETCHING
});

export const addBoilerFulfilled = (payload) => ({
  type: ADD_BOILER_FULFILLED,
  payload
});

export const addBoilerRejected = () => ({
  type: ADD_BOILER_REJECTED
});

export const addBoiler = content => dispatch => {
  dispatch(addBoilerFetching());
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  })
    .then(data => data.json())
    .then (response => {
      dispatch(addBoilerFulfilled(response))
    })
    .catch(() => {
      dispatch(addBoilerRejected())
    })
}

export const deleteBoilerFetching = () => ({
  type: DELETE_BOILER_FETCHING
});

export const deleteBoilerFulfilled = (payload) => ({
  type: DELETE_BOILER_FULFILLED,
  payload
});

export const deleteBoilerRejected = () => ({
  type: DELETE_BOILER_REJECTED
});

export const deleteBoiler = id => dispatch => {
  dispatch(deleteBoilerFetching());
  return fetch(`${URL}/${id}`, {method: 'DELETE'})
  .then(data => data.json())
  .then(() => {
    dispatch(deleteBoilerFulfilled(id))
  })
  .catch(() => {
    dispatch(deleteBoilerRejected())
  })
};

export const editBoilerFetching = () => ({
  type: EDIT_BOILER_FETCHING
});

export const editBoilerFulfilled = (payload) => ({
  type: EDIT_BOILER_FULFILLED,
  payload
});

export const editBoilerRejected = () => ({
  type: EDIT_BOILER_REJECTED
});

export const editBoiler = content => dispatch => {
  dispatch(editBoilerFetching());
  return fetch(`${URL}/${content._id}`, {method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(content)
}).then(data => data.json())
  .then(() => {
    dispatch(editBoilerFulfilled(content))
  })
  .catch(() => {
    dispatch(editBoilerRejected())
  })
}