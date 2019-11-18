import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllStatuses = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_STATUSES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_STATUSES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_STATUSES_FAILED,
      payload: err
    });
  }
};

export const fetchOneStatus = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_STATUS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_STATUS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_STATUS_FAILED,
      payload: err
    });
  }
};

export const addStatus = newStatus => async dispatch => {
  dispatch({
    type: types.ADD_STATUS_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newStatus);
    dispatch({
      type: types.ADD_STATUS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_STATUS_FAILED,
      payload: err
    });
  }
};

export const removeStatus = id => async dispatch => {
  dispatch({
    type: types.REMOVE_STATUS_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_STATUS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_STATUS_FAILED,
      payload: err
    });
  }
};
