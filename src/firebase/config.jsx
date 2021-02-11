import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
});

export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export default firebase;
