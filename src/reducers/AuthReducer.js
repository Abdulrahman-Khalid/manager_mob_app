import { EMAIL_CHANGED } from "../actions/types";

const INTIAL_STATE = { email: "" };

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
