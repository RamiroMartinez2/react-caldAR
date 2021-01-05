import {
  GET_BUILDINGS_FETCHING,
  GET_BUILDINGS_FULLFILLED,
  GET_BUILDINGS_REJECTED,
  ADD_BUILDING_FETCHING,
  ADD_BUILDING_FULLFILLED,
  ADD_BUILDING_REJECTED,
  DELETE_BUILDING_FETCHING,
  DELETE_BUILDING_FULLFILLED,
  DELETE_BUILDING_REJECTED,
  UPDATE_BUILDING_FETCHING,
  UPDATE_BUILDING_FULLFILLED,
  UPDATE_BUILDING_REJECTED,
} from "../types/buildingTypes";

const URL = "http://localhost:4000/buildings";

const getBuildingsFetching = () => ({
  type: GET_BUILDINGS_FETCHING,
});

const getBuildingsFullfilled = (list) => ({
  type: GET_BUILDINGS_FULLFILLED,
  payload: list,
});

const getBuildingsRejected = (error) => ({
  type: GET_BUILDINGS_REJECTED,
  payload: error,
});

export const getBuildingsAsync = () => (dispatch) => {
  dispatch(getBuildingsFetching());
  return fetch(`${URL}`, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((json) => {
      dispatch(getBuildingsFullfilled(json));
    })
    .catch((error) => {
      dispatch(getBuildingsRejected(error));
    });
};

const addBuildingFetching = () => ({
  type: ADD_BUILDING_FETCHING,
});

const addBuildingFullfilled = (content) => ({
  type: ADD_BUILDING_FULLFILLED,
  payload: content,
});

const addBuildingRejected = (error) => ({
  type: ADD_BUILDING_REJECTED,
  payload: error,
});

export const addBuildingAsync = (content) => (dispatch) => {
  dispatch(addBuildingFetching());
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
        dispatch(addBuildingFullfilled(json));
      } else {
        dispatch(addBuildingRejected(json));
      }
    })
    .catch((error) => dispatch(addBuildingRejected(error)));
};

const deleteBuildingFetching = () => ({
  type: DELETE_BUILDING_FETCHING,
});

const deleteBuildingFullfilled = (payload) => ({
  type: DELETE_BUILDING_FULLFILLED,
  payload,
});

const deleteBuildingRejected = () => ({
  type: DELETE_BUILDING_REJECTED,
});

export const deleteBuildingAsync = (_id) => (dispatch) => {
  dispatch(deleteBuildingFetching());
  return (
    fetch(`${URL}/${_id}`, { method: "DELETE" })
      .then(function (data) {
        return data.json;
      })
      //.then((data) => data.json())
      .then(() => {
        dispatch(deleteBuildingFullfilled(_id));
      })
      .catch(() => {
        dispatch(deleteBuildingRejected());
      })
  );
};

const updateBuildingFetching = () => ({
  type: UPDATE_BUILDING_FETCHING,
});

const updateBuildingFullfilled = (content) => ({
  type: UPDATE_BUILDING_FULLFILLED,
  payload: content,
});

const updateBuildingRejected = (error) => ({
  type: UPDATE_BUILDING_REJECTED,
  payload: error,
});

export const updateBuildingAsync = (content) => (dispatch) => {
  dispatch(updateBuildingFetching());
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
        dispatch(updateBuildingFullfilled(content));
      } else {
        dispatch(updateBuildingRejected(json));
      }
    })
    .catch((error) => {
      dispatch(updateBuildingRejected(error));
    });
};
