import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllComments = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_COMMENTS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_COMMENTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_COMMENTS_FAILED,
      payload: err
    });
  }
};

export const fetchOneComment = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_COMMENT_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_COMMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_COMMENT_FAILED,
      payload: err
    });
  }
};

export const addComment = newComment => async dispatch => {
  dispatch({
    type: types.ADD_COMMENT_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newComment);
    dispatch({
      type: types.ADD_COMMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_COMMENT_FAILED,
      payload: err
    });
  }
};

export const removeComment = id => async dispatch => {
  dispatch({
    type: types.REMOVE_COMMENT_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_COMMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_COMMENT_FAILED,
      payload: err
    });
  }
};
