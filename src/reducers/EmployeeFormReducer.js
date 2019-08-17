import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from "../actions/types";

const INTIAL_STATE = { name: "", phone: "", shift: "" }; //shift: "Monday"

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //[] is key interpolation
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INTIAL_STATE; //{ ...state, ...INTIAL_STATE } could be (reducers comibine the state they return together)
    case EMPLOYEE_SAVE_SUCCESS:
      return INTIAL_STATE;
    default:
      return state;
  }
};
