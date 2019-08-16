import * as actionNames from "./types";
import firebase from "firebase";

export const emailChanged = text => {
  //function call name in the component
  return {
    type: actionNames.EMAIL_CHANGED, // case (this type) in the reducer
    payload: text
  };
};

export const passwordChanged = text => {
  //function call name in the component
  return {
    type: actionNames.PASSWORD_CHANGED, // case (this type) in the reducer
    payload: text
  };
};

/*action creator which use redux thunk middle ware 
to return a function which called automaticlly
and pass dispatch to it to dispatch manually and I 
can dispatch many actions from this action creator*/
export const loginUser = ({ email, password }) => {
  const actionToDispatch = {
    tpye: actionNames.LOGIN_USER_SUCCESS,
    payload: user
  };

  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => dispatch(actionToDispatch));
  };
};
