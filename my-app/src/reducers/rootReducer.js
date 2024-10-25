import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import accountsReducer from "../features/accountSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  accounts: accountsReducer,
});

export default rootReducer;
