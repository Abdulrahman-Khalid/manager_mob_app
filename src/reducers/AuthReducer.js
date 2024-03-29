import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../actions/types";

const INTIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INTIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      /* {
        ...state,
        user: action.payload,
        error: "",
        loading: false,
        email: "",
        password: ""
      } */
      return {
        ...state,
        ...INTIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: "Authentication Failed.",
        loading: false,
        password: ""
      };
    default:
      return state;
  }
};
