// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD0_cMB7x7pYTAsjBDjXtRcJq91SZODdLA",
//   authDomain: "insta-d70ee.firebaseapp.com",
//   projectId: "insta-d70ee",
//   storageBucket: "insta-d70ee.appspot.com",
//   messagingSenderId: "920831290200",
//   appId: "1:920831290200:web:0d1269f76b0c1d6afb132d"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfDf24PPq5qIYP6LXH8Y687TtJ9m2X2K4",
  authDomain: "fake-instagram-react-d3d06.firebaseapp.com",
  databaseURL: "https://fake-instagram-react-d3d06-default-rtdb.firebaseio.com",
  projectId: "fake-instagram-react-d3d06",
  storageBucket: "fake-instagram-react-d3d06.appspot.com",
  messagingSenderId: "191671822052",
  appId: "1:191671822052:web:bbe4343a2af81aef076ef1",
  measurementId: "G-32P7N9T7B5"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };