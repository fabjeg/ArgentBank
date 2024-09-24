import {
  CHOOSE_CATEGORY,
  SELECT_CATEGORY_ITEM,
  RESET_STATE,
} from "../actions/index";
import { initialStates } from "./initialStates";

export default function categoryReducer(
  state = initialStates.category,
  action
) {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return {
        ...state,
        items: action.payload,
      };
    case SELECT_CATEGORY_ITEM:
      return {
        ...state,
        selectCategory: action.payload,
      };
    case RESET_STATE:
      return initialStates.category;
    default:
      return state;
  }
}