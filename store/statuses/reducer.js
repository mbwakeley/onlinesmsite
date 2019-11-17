import {
  FETCH_ALL_STATUSES_PENDING,
  FETCH_ALL_STATUSES_SUCCESS,
  ADD_STATUS_PENDING,
  REMOVE_STATUS_PENDING,
  ADD_STATUS_SUCCESS,
  REMOVE_STATUS_SUCCESS
} from "./constants";

const initialState = { all: [], err: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_STATUSES_PENDING:
    case ADD_STATUS_PENDING:
    case REMOVE_STATUS_PENDING:
      return state;

    case FETCH_ALL_STATUSES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_STATUS_SUCCESS:
      let newStatus = action.payload;
      return {
        state,
        all: [newStatus, ...state.all]
      };

    case REMOVE_STATUS_SUCCESS:
      return {
        ...state,
        all: state.all.filter(status => status.id === action.payload.id)
      };

    default:
      return state;
  }
};
