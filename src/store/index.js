import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./users/reducer";
import statusesReducer from "./statuses/reducer";
import commentsReducer from "./comments/reducer";
import friendsReducer from "./friends/reducer";
import messagesReducer from "./messages/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  users: usersReducer,
  statuses: statusesReducer,
  comments: commentsReducer,
  friends: friendsReducer,
  messages: messagesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
