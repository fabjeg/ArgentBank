import { TOGGLE_COLLAPSE } from "../actions";
import { initialStates } from "./initialStates";

export default function toggleReducer(state = initialStates, action) {
  switch (action.type) {
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        collapse: {
          ...state.collapse,
          [action.payload]: !state.collapse[action.payload],
        },
      };

    default:
      return state;
  }
}
