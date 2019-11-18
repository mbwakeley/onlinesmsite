import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllMessages = () => async dispatch => {
  console.log("here?");
  dispatch({
    type: types.FETCH_ALL_MESSAGES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    console.log("response", response.data);
    dispatch({
      type: types.FETCH_ALL_MESSAGES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_MESSAGES_FAILED,
      payload: err
    });
  }
};

export const fetchOneMessage = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_MESSAGE_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_MESSAGE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_MESSAGE_FAILED,
      payload: err
    });
  }
};

export const addMessage = newMessage => async dispatch => {
  dispatch({
    type: types.ADD_MESSAGE_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newMessage);
    dispatch({
      type: types.ADD_MESSAGE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_MESSAGE_FAILED,
      payload: err
    });
  }
};

export const removeMessage = id => async dispatch => {
  dispatch({
    type: types.REMOVE_MESSAGE_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_MESSAGE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_MESSAGE_FAILED,
      payload: err
    });
  }
};
