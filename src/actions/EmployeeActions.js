import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: "reset" });
      }); //{ type: "reset"} don't show back button
    //can not return action using redux thunk return ()=>{}
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        // if the employess fetch called once any time data is added to this ref automatically call the callback func and the data shows automatically
        //snapshot not the actual data it is object discribe it (data is snapshot.val())
        //on is called in lifecycle entire application, watch this data source
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: "reset" });
      }); //{ type: "reset"} don't show back button
    //can not return action using redux thunk return ()=>{}
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: "reset" });
      }); //{ type: "reset"} don't show back button
    //can not return action using redux thunk return ()=>{}
  };
};
