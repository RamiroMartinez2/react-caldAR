import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULLFILLED,
  GET_TECHNICIANS_REJECTED,
  ADD_TECH_FETCHING, 
  ADD_TECH_FULLFILLED,
  ADD_TECH_REJECTED, 
  DELETE_TECH_FETCHING,
  DELETE_TECH_FULLFILLED,
  DELETE_TECH_REJECTED,
  UPDATE_TECH_FETCHING,
  UPDATE_TECH_FULLFILLED,
  UPDATE_TECH_REJECTED } from '../types/technicianTypes';

const URL = "https://localhost:4000/technicians";

const getTechniciansFetching = () => ({
  type: GET_TECHNICIANS_FETCHING
});

const getTechniciansFullfilled = list => ({
  type: GET_TECHNICIANS_FULLFILLED,
  payload: list
});

const getTechniciansRejected = error => ({
  type: GET_TECHNICIANS_REJECTED,
  payload: error
});

export const getTechniciansAsync = () => dispatch => {
  dispatch(getTechniciansFetching());
  return fetch(`${URL}`, { method: 'GET' })
      .then(data => data.json())
      .then(json => {
          dispatch(getTechniciansFullfilled(json));
      })
      .catch(error => {
          dispatch(getTechniciansRejected(error))
      });
}

const addTechFetching = () => ({
  type: ADD_TECH_FETCHING
});

const addTechFullfilled = content => ({
 type: ADD_TECH_FULLFILLED,
 payload: content
});

const addTechRejected = error => ({
  type: ADD_TECH_REJECTED,
  payload: error
});

export const addTechAsync = content => dispatch => {
  dispatch(addTechFetching());
  const body = JSON.stringify(content);
  return fetch(`${URL}/`, 
      {
          method: 'POST',
          body: body,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then(data => data.json())
      .then((json) => 
      {
          if (!json.code) 
          {
              dispatch(addTechFullfilled(json))
          }
          else 
          {
              dispatch(addTechRejected(json));
          }
      })
      .catch((error) => dispatch(addTechRejected(error)))
}

const deleteTechFetching = () => ({
  type: DELETE_TECH_FETCHING
});

const deleteTechFullfilled = (payload) => ({
  type: DELETE_TECH_FULLFILLED,
  payload,
});

const deleteTechRejected = () => ({
  type: DELETE_TECH_REJECTED,
});

export const deleteTechAsync = (id) => (dispatch) => {
  dispatch(deleteTechFetching());
  return fetch(`${URL}/${id}`, {method: 'DELETE'})
      .then((data) => data.json())
      .then(() => {
          dispatch(deleteTechFullfilled(id));
  })
  .catch(() => {
    dispatch(deleteTechRejected());
  });
};

const updateTechFetching = () => ({
  type: UPDATE_TECH_FETCHING
});

const updateTechFullfilled = content => ({
  type: UPDATE_TECH_FULLFILLED,
  payload: content
})

const updateTechRejected = error => ({
  type: UPDATE_TECH_REJECTED,
  payload: error
})

export const updateTechAsync = content => dispatch => {
  dispatch(updateTechFetching());
  return fetch(`${URL}/${content._id}`, 
      {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(content)
      })
      .then(data => data.json())
      .then((json) => 
      {
          if (!json.code)
          {
              dispatch(updateTechFullfilled(content))
          }
          else
          {
              dispatch(updateTechRejected(json));
          }
      })
      .catch((error) => dispatch(updateTechRejected(error)))
}