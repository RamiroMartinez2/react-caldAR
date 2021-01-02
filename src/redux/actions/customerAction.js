import {
  GET_CUSTOMERS_FETCHING,
  GET_CUSTOMERS_FULFILLED,
  GET_CUSTOMERS_REJECTED,
  ADD_CUSTOMER_FETCHING,
  ADD_CUSTOMER_FULFILLED,
  ADD_CUSTOMER_REJECTED,
  DELETE_CUSTOMER_FETCHING,
  DELETE_CUSTOMER_FULFILLED,
  DELETE_CUSTOMER_REJECTED,
  UPDATE_CUSTOMER_FETCHING,
  UPDATE_CUSTOMER_FULFILLED,
  UPDATE_CUSTOMER_REJECTED,
} from "../types/customerTypes";



const URL = "https://be-caldar.herokuapp.com/customers";

const getCustomersFetching = () => ({
  type: GET_CUSTOMERS_FETCHING,
});

const getCustomersFulfilled = (list) => ({
  type: GET_CUSTOMERS_FULFILLED,
  payload: list,
});

const getCustomersRejected = (error) => ({
  type: GET_CUSTOMERS_REJECTED,
  payload: error,
});

export const getCustomersAsync = (error) => (dispatch) => {
  dispatch(getCustomersFetching());
  return fetch(`${URL}`, { method: "GET" })
    .then((data) => data.json())
    .then((response) => {
      getCustomersFulfilled(response);
    })
    .catch(() => {
      dispatch(getCustomersRejected(error));
    });
};

const addCustomersFetching = () => ({
  type: ADD_CUSTOMER_FETCHING,
});

const addCustomersFullfilled = (content) => ({
  type: ADD_CUSTOMER_FULFILLED,
  payload: content,
});

const addCustomerRejected = (error) => ({
  type: ADD_CUSTOMER_REJECTED,
  payload: error,
});

export const addCustomerAsync = (content) => (dispatch) => {
  dispatch(addCustomersFetching());
  const body = JSON.stringify(content);
  return fetch(`${URL}/`, {
    method: "POST",
    body: body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((json) => {
      if (!json.code) {
        dispatch(addCustomersFullfilled(json));
      } else {
        dispatch(addCustomerRejected(json));
      }
    })
    .catch((error) => dispatch(addCustomerRejected(error)));
};

const deleteCustomersFetching = () => ({
  type: DELETE_CUSTOMER_FETCHING,
});

const deleteCustomersFulfilled = (payload) => ({
  type: DELETE_CUSTOMER_FULFILLED,
  payload,
});

const deleteCustomersRejected = () => ({
  type: DELETE_CUSTOMER_REJECTED,
});

export const deleteCustomerAsync = (id) => (dispatch) => {
  dispatch(deleteCustomersFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteCustomersFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteCustomersRejected());
    });
};

const updateCustomersFetching = () => ({
  type: UPDATE_CUSTOMER_FETCHING,
});

const updateCustomersFulfilled = (content) => ({
  type: UPDATE_CUSTOMER_FULFILLED,
  payload: content,
});

const updateCustomersRejected = (error) => ({
  type: UPDATE_CUSTOMER_REJECTED,
  payload: error,
});

export const updateCustomerAsync = (content) => (dispatch) => {
  dispatch(updateCustomersFetching());
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
        dispatch(updateCustomersFulfilled(content));
      } else {
        dispatch(updateCustomersRejected(json));
      }
    })
    .catch((error) => dispatch(updateCustomersRejected(error)));
};
