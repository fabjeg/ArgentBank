import {
  ACCOUNT_USER,
  RESET_STATE,
  UPDATE_ACCOUNT_NOTE,
} from "../actions/index";
import { initialStates } from "./initialStates";

export default function accountReducer(state = initialStates.account, action) {
  switch (action.type) {
    case ACCOUNT_USER:
      return {
        ...state,
        accounts: action.payload,
      };
    case UPDATE_ACCOUNT_NOTE:
      return {
        ...state,
        note: action.payload,
      };
    case RESET_STATE:
      return initialStates.account;
    default:
      return state;
  }
}
