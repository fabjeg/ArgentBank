import { combineReducers } from "redux";
import getReducer from "./user.reducer";
import postReducer from "./post.reducer";

export default combineReducers({
  get: getReducer,
  post: postReducer,
  put: getReducer,
});
