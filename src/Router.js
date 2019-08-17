import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

export default (RouterComponent = () => {
  return (
    /*one signal Router Scene */
    //by default first scene in the big scene will be the initial
    /* each of auth and main is a different flow as 
    I don't want a back button when I navigate from one flow to another*/
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            rightButtonStyle={styles.rightButtonEmployeeListStyle}
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employee"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
});

const styles = {
  rightButtonEmployeeListStyle: {
    backgroundColor: "#DCDCDC",
    borderWidth: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    marginTop: 10,
    borderColor: "#A9A9A9",
    borderRadius: 20
  }
};
