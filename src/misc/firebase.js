import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBlEwTL-pSq52NM2e9C6mmEtardwW5xrCU",
  authDomain: "chatz-app-d246e.firebaseapp.com",
  databaseURL: "https://chatz-app-d246e-default-rtdb.firebaseio.com",
  projectId: "chatz-app-d246e",
  storageBucket: "chatz-app-d246e.appspot.com",
  messagingSenderId: "187755948034",
  appId: "1:187755948034:web:d6295801e2a99a2a9f9f1b"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
