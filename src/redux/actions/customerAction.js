import {
  GET_CUSTOMER_FETCHING,
  GET_CUSTOMER_FULFILLED,
  GET_CUSTOMER_REJECTED,
  ADD_CUSTOMER_FETCHING,
  ADD_CUSTOMER_FULFILLED, 
  ADD_CUSTOMER_REJECTED,
  DEL_CUSTOMER_FETCHING,
  DEL_CUSTOMER_FULFILLED,
  DEL_CUSTOMER_REJECTED,
  UPD_CUSTOMER_FETCHING,
  UPD_CUSTOMER_FULFILLED,
  UPD_CUSTOMER_REJECTED
} from '../types/customerTypes';

const URL = "https://be-caldar.herokuapp.com/customers";

const getCustomerFetching = () => ({
  type: GET_CUSTOMER_FETCHING
});

const getCustomerFullfilled = list => ({
  type: GET_CUSTOMER_FULFILLED,
  payload: list
});

const getCustomerRejected = error => ({
  type: GET_CUSTOMER_REJECTED,
  payload: error
});

export const getCustomersAsync = () => dispatch => {
  dispatch(getCustomerFetching());
  return fetch(`${URL}`, { method: 'GET' })
      .then(data => data.json())
      .then(json => {
          dispatch(getCustomerFullfilled(json));
      })
      .catch(error => {
          dispatch(getCustomerRejected(error))
      });
}

const addCustomerFetching = () => ({
  type: ADD_CUSTOMER_FETCHING
});

const addCustomerFullfilled = content => ({
 type: ADD_CUSTOMER_FULFILLED,
 payload: content
});

const addCustomerRejected = error => ({
  type: ADD_CUSTOMER_REJECTED,
  payload: error
});

export const addCustomerAsync = content => dispatch => {
  dispatch(addCustomerFetching());
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
              dispatch(addCustomerFullfilled(json))
          }
          else 
          {
              dispatch(addCustomerRejected(json));
          }
      })
      .catch((error) => dispatch(addCustomerRejected(error)))
}

const deleteCustomerFetching = () => ({
  type: DEL_CUSTOMER_FETCHING
});

const deleteCustomerFullfilled = (payload) => ({
  type: DEL_CUSTOMER_FULFILLED,
  payload,
});

const deleteCustomerRejected = () => ({
  type: DEL_CUSTOMER_REJECTED,
});

export const deleteCustomerAsync = (id) => (dispatch) => {
  dispatch(deleteCustomerFetching());
  return fetch(`${URL}/${id}`, {method: 'DELETE'})
      .then(function(data){
        return data.json
      })
      .then(() => {
          dispatch(deleteCustomerFullfilled(id));
  })
  .catch(() => {
    dispatch(deleteCustomerRejected());
  })
};

const updateCustomerFetching = () => ({
  type: UPD_CUSTOMER_FETCHING
});

const updateCustomerFullfilled = content => ({
  type: UPD_CUSTOMER_FULFILLED,
  payload: content
})

const updateCustomerRejected = error => ({
  type: UPD_CUSTOMER_REJECTED,
  payload: error
})

export const updateCustomerAsync = content => dispatch => {
  dispatch(updateCustomerFetching());
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
              dispatch(updateCustomerFullfilled(content))
          }
          else
          {
              dispatch(updateCustomerRejected(json));
          }
      })
      .catch((error) => dispatch(updateCustomerRejected(error)))
}