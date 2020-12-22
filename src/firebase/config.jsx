import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAvwkVHWNH7NrK-2GQuaCqt66G8TtgBz8w",
  authDomain: "twitter-dep.firebaseapp.com",
  databaseURL: "https://twitter-dep.firebaseio.com",
  projectId: "twitter-dep",
  storageBucket: "twitter-dep.appspot.com",
  messagingSenderId: "293972267591",
  appId: "1:293972267591:web:220f2b5f00d3d4fe5dd762",
});

export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export default firebase;
