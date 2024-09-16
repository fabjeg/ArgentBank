import { GET_USER, UPDATE_USER } from "../actions/index";
import { initialStates } from "./initialStates";

export default function getReducer(state = initialStates.auth, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case UPDATE_USER:
      return {
        ...state,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };

    default:
      return state;
  }
}
