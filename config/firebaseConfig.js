// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9GeRcIHVGnBqp1ydiC5p77Z_GakVmYmI",
  authDomain: "myhoneytip-2a40c.firebaseapp.com",
  projectId: "myhoneytip-2a40c",
  storageBucket: "myhoneytip-2a40c.appspot.com",
  messagingSenderId: "771538371983",
  appId: "1:771538371983:web:98d3e0446e00fc4ab5f7fa",
  measurementId: "G-63CVFNV4SJ",
  databaseURL: "https://myhoneytip-2a40c-default-rtdb.firebaseio.com/",
};

// ======================== SCC-----
// imports
// import firebase from 'firebase/app';

// 사용할 서비스 주석 해제
// import 'firebase/auth';
import 'firebase/database';
// import 'firebase/firestore';
// import 'firebase/functions';
import 'firebase/storage';

// error 대처
// if (!firebase.app.length) { firebase.initializeApp(firebaseConfig); }

// export const firebase_db = firebase.database();
// ======================== SCC---END


// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebase_db = app.database();