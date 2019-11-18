import {
  FETCH_ALL_USERS_PENDING,
  ADD_USER_PENDING,
  REMOVE_USER_PENDING,
  FETCH_ALL_USERS_FAILED,
  ADD_USER_FAILED,
  REMOVE_USER_FAILED,
  ADD_USER_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  REMOVE_USER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_PENDING
} from "./constants";

// const initialState = { all: [], err: {}, loggedInUser: {} };
const initialState = {
  all: [],
  err: {},
  loggedInUser: {
    name: "Shawn Wyatt",
    company: "Accidency",
    email: "shawnwyatt@accidency.com",
    phone: "+1 (996) 585-3589",
    address: "813 Kings Place, Dunlo, Palau, 71499",
    photo_url: "http://placehold.it/32x32",
    password: "hello",
    id: 46
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_PENDING:
    case ADD_USER_PENDING:
    case REMOVE_USER_PENDING:
    case USER_LOGIN_PENDING:
      return state;

    case FETCH_ALL_USERS_FAILED:
    case ADD_USER_FAILED:
    case REMOVE_USER_FAILED:
    case USER_LOGIN_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id === action.payload.id)
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload
      };

    default:
      return state;
  }
};
