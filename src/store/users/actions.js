import axios from "axios";
import {
  BASE_URL,
  FETCH_ALL_USERS_PENDING,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  FETCH_ONE_USER_PENDING,
  FETCH_ONE_USER_FAILED,
  FETCH_ONE_USER_SUCCESS,
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  REMOVE_USER_PENDING,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_PENDING,
  USER_LOGIN_FAILED
} from "./constants";

export const fetchAllUsers = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_USERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_USERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_USERS_FAILED,
      payload: err
    });
  }
};

export const FetchOneUser = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_USER_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_USER_FAILED,
      payload: err
    });
  }
};

export const addUser = newUser => async dispatch => {
  dispatch({
    type: ADD_USER_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newUser);
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_USER_FAILED,
      payload: err
    });
  }
};

export const removeUser = id => async dispatch => {
  dispatch({
    type: REMOVE_USER_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_USER_FAILED,
      payload: err
    });
  }
};

export const userLogin = (creds, history) => dispatch => {
  dispatch({
    type: USER_LOGIN_PENDING
  });
  axios
    .post("http://localhost:8082/api/users", creds)
    .then(res => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data
      });
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      });
    });
};
