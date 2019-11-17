import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllFriends = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_FRIENDS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_FRIENDS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_FRIENDS_FAILED,
      payload: err
    });
  }
};

export const fetchOneFriend = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_FRIEND_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_FRIEND_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_FRIEND_FAILED,
      payload: err
    });
  }
};

export const addFriend = newFriend => async dispatch => {
  dispatch({
    type: types.ADD_FRIEND_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newFriend);
    dispatch({
      type: types.ADD_FRIEND_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_FRIEND_FAILED,
      payload: err
    });
  }
};

export const removeFriend = id => async dispatch => {
  dispatch({
    type: types.REMOVE_FRIEND_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_FRIEND_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_FRIEND_FAILED,
      payload: err
    });
  }
};
