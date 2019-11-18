import {
  FETCH_ALL_MESSAGES_PENDING,
  FETCH_ALL_MESSAGES_SUCCESS,
  ADD_MESSAGE_PENDING,
  REMOVE_MESSAGE_PENDING,
  ADD_MESSAGE_SUCCESS,
  REMOVE_MESSAGE_SUCCESS
} from "./constants";

const initialState = { all: [], err: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MESSAGES_PENDING:
    case ADD_MESSAGE_PENDING:
    case REMOVE_MESSAGE_PENDING:
      return state;

    case FETCH_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_MESSAGE_SUCCESS:
      let newMessage = action.payload;
      return {
        ...state,
        all: [...state.all, newMessage]
      };

    case REMOVE_MESSAGE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(message => message.id === action.payload.id)
      };

    default:
      return state;
  }
};
