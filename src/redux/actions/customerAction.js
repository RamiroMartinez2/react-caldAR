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
  EDIT_CUSTOMER_FETCHING,
  EDIT_CUSTOMER_FULFILLED,
  EDIT_CUSTOMER_REJECTED,
} from "../types/customerTypes";

const URL = "https://be-caldar.herokuapp.com/customers";

export const getCustomersFetching = () => ({
  type: GET_CUSTOMERS_FETCHING,
});

export const getCustomersFulfilled = (list) => ({
  type: GET_CUSTOMERS_FULFILLED,
  payload: list,
});

export const getCustomersRejected = (error) => ({
  type: GET_CUSTOMERS_REJECTED,
  payload: error,
});

export const getCustomers = () => (dispatch) => {
  dispatch(getCustomersFetching());
  return fetch(`${URL}`, { method: "GET" })
    .then((data) => data.json())
    .then((json) => {
      dispatch(getCustomersFulfilled(json));
    })
    .catch((error) => {
      dispatch(getCustomersRejected(error));
    });
};

export const addCustomerFetching = () => ({
  type: ADD_CUSTOMER_FETCHING,
});

export const addCustomerFulfilled = content => ({
  type: ADD_CUSTOMER_FULFILLED,
  payload: content,
});

export const addCustomerRejected = error => ({
  type: ADD_CUSTOMER_REJECTED,
  payload: error,
});

export const addCustomer = content => dispatch => {
  dispatch(addCustomerFetching());
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
        dispatch(addCustomerFulfilled(json));
      } else {
        dispatch(addCustomerRejected(json));
      }
    })
    .catch((error) => dispatch(addCustomerRejected(error)));
};

export const deleteCustomerFetching = () => ({
  type: DELETE_CUSTOMER_FETCHING,
});

export const deleteCustomerFulfilled = (payload) => ({
  type: DELETE_CUSTOMER_FULFILLED,
  payload,
});

export const deleteCustomerRejected = () => ({
  type: DELETE_CUSTOMER_REJECTED,
});

export const deleteCustomer = (id) => (dispatch) => {
  dispatch(deleteCustomerFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then(function (data) {
      return data.json;
    })
    .then(() => {
      dispatch(deleteCustomerFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteCustomerRejected());
    });
};

export const editCustomerFetching = () => ({
  type: EDIT_CUSTOMER_FETCHING,
});

export const editCustomerFulfilled = (content) => ({
  type: EDIT_CUSTOMER_FULFILLED,
  payload: content,
});

export const editCustomerRejected = (error) => ({
  type: EDIT_CUSTOMER_REJECTED,
  payload: error,
});

export const editCustomer = (content) => (dispatch) => {
  dispatch(editCustomerFetching());
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
        dispatch(editCustomerFulfilled(content));
      } else {
        dispatch(editCustomerRejected(json));
      }
    })
    .catch((error) => dispatch(editCustomerRejected(error)));
};
