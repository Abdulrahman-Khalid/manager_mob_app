import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
