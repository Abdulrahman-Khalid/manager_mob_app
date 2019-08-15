import * as actionNames from "./types";

export const emailChanged = text => {
  //function call name in the component
  return {
    type: actionNames.EMAIL_CHANGED, // case (this type) in the reducer
    payload: text
  };
};
