 import firebase from 'firebase/app';
 import 'firebase/messaging';
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD1OE22Ip5iqaZSahsRbGOPKs9HDDRQe1Y",
  authDomain: "thanwar-covid-tracker.firebaseapp.com",
  projectId: "thanwar-covid-tracker",
  storageBucket: "thanwar-covid-tracker.appspot.com",
  messagingSenderId: "377005920701",
  appId: "1:377005920701:web:9fcaa840dc67c7a896c2d4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;