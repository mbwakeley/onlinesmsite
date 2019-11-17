import {
  FETCH_ALL_FRIENDS_PENDING,
  FETCH_ALL_FRIENDS_SUCCESS,
  ADD_FRIEND_PENDING,
  REMOVE_FRIEND_PENDING,
  ADD_FRIEND_SUCCESS,
  REMOVE_FRIEND_SUCCESS
} from "./constants";

const initialState = { all: [], err: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_FRIENDS_PENDING:
    case ADD_FRIEND_PENDING:
    case REMOVE_FRIEND_PENDING:
      return state;

    case FETCH_ALL_FRIENDS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_FRIEND_SUCCESS:
      let newFriend = action.payload;
      return {
        state,
        all: [newFriend, ...state.all]
      };

    case REMOVE_FRIEND_SUCCESS:
      return {
        ...state,
        all: state.all.filter(friend => friend.id === action.payload.id)
      };

    default:
      return state;
  }
};
