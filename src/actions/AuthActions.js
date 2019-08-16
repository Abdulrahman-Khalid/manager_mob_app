import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux"; //navigation method

export const emailChanged = text => {
  //function call name in the component
  return {
    type: EMAIL_CHANGED, // case (this type) in the reducer
    payload: text
  };
};

export const passwordChanged = text => {
  //function call name in the component
  return {
    type: PASSWORD_CHANGED, // case (this type) in the reducer
    payload: text
  };
};

/*action creator which use redux thunk middle ware 
to return a function which called automaticlly
and pass dispatch to it to dispatch manually and I 
can dispatch many actions from this action creator*/
export const loginUser = ({ email, password }) => {
  return dispatch => {
    //then is with success, catch if not success
    dispatch({
      type: LOGIN_USER
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user)) //login if exist
      .catch(
        //create if not exist
        () => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user)) //login if exist
            .catch(() => loginUserFail(dispatch)); //fail if not exist and not created
        }
      );
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main(); //employeeList is the key of the scene want to navigate to
};

const loginUserFail = dispatch => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};
