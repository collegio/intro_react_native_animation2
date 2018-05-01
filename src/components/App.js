import React from 'react';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import configStore from '../store/configStore';
import MainRouter from '../routes/MainRouter';

const store = configStore();

export default class App extends React.Component {

  componentDidMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAKFlDsOcP68wsKXJzZ3wT2bq40TWKseG8",
        authDomain: "freeagenttracker-78258.firebaseapp.com",
        databaseURL: "https://freeagenttracker-78258.firebaseio.com",
        projectId: "freeagenttracker-78258",
        storageBucket: "freeagenttracker-78258.appspot.com",
        messagingSenderId: "749917128497"
    });
  }


  render() {
      return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
      );
  }
}
