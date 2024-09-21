import { ACCOUNT_USER } from "../actions/index";
import { initialStates } from "./initialStates";

const accountReducer = (state = initialStates.account, action) => {
  switch (action.type) {
    case ACCOUNT_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
