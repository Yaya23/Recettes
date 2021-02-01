import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// State
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';

// Firestore
import {FirestoreProvider} from '@react-firebase/firestore';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHJ9GViZCH3Gj6bKGrzsLFay9pJuChFvg",
  authDomain: "recettes-2da6d.firebaseapp.com",
  projectId: "recettes-2da6d",
  storageBucket: "recettes-2da6d.appspot.com",
  messagingSenderId: "264142346798",
  appId: "1:264142346798:web:172d7a7cd818b68bfcddbf"
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider {...firebaseConfig} firebase={firebase}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
