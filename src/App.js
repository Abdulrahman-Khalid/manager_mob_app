import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
//handle asynchronous action creator after action finished return the action object
import ReduxThunk from "redux-thunk"; //middleware
import RouterComponent from "./Router";

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCESiQ2QlQvNPlwzko3yTLbTVCIzNJWM4U",
      authDomain: "manager-3c079.firebaseapp.com",
      databaseURL: "https://manager-3c079.firebaseio.com",
      projectId: "manager-3c079",
      storageBucket: "",
      messagingSenderId: "863651575873",
      appId: "1:863651575873:web:247092532aa216a8"
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); //{} for any intial state want to pass to the application
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
