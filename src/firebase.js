import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCyAM7DqhUwvf3NB4cMu-0bWMXw4p4e6o",
  authDomain: "clone-3f97f.firebaseapp.com",
  projectId: "clone-3f97f",
  storageBucket: "clone-3f97f.appspot.com",
  messagingSenderId: "532144777256",
  appId: "1:532144777256:web:39d16024f6f8e41991ed1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
