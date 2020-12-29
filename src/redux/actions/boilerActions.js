import { ADD_BOILER, 
  DELETE_BOILER, 
  EDIT_BOILER, 
  GET_BOILERS_FETCHING, 
  GET_BOILERS_FULFILLED, 
  GET_BOILERS_REJECTED
 } from "../types/boilerTypes";

const URL = 'mongodb+srv://radium-rocket:radium1234@caldar-cluster.763oz.mongodb.net/CaldAR?retryWrites=true&w=majority'

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

export const addBoiler = content => ({
  type: ADD_BOILER,
  payload: {
    id: Math.floor(Math.random() * 101),
    ...content
  }
});

export const deleteBoiler = number => ({
  type: DELETE_BOILER,
  payload: number
})

export const editBoiler = content => ({
  type: EDIT_BOILER,
  payload: content
})