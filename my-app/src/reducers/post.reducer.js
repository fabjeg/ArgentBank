import { GET_LOGIN, LOGOUT } from "../actions/fetch.action";
import { initialStates } from "./initialStates";

export default function postReducer(state = initialStates.auth, action) {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...state,
        accessToken: action.payload,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
}
