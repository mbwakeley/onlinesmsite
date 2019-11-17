import {
  FETCH_ALL_COMMENTS_PENDING,
  FETCH_ALL_COMMENTS_SUCCESS,
  ADD_COMMENT_PENDING,
  REMOVE_COMMENT_PENDING,
  ADD_COMMENT_SUCCESS,
  REMOVE_COMMENT_SUCCESS
} from "./constants";

const initialState = { all: [], err: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS_PENDING:
    case ADD_COMMENT_PENDING:
    case REMOVE_COMMENT_PENDING:
      return state;

    case FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_COMMENT_SUCCESS:
      let newComment = action.payload;
      return {
        state,
        all: [newComment, ...state.all]
      };

    case REMOVE_COMMENT_SUCCESS:
      return {
        ...state,
        all: state.all.filter(comment => comment.id === action.payload.id)
      };

    default:
      return state;
  }
};
