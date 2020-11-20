import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAxI9YLFiiWcGMio39M1Zi8L7F9lhN-XNE",
    authDomain: "cloudcar-4aec3.firebaseapp.com",
    databaseURL: "https://cloudcar-4aec3.firebaseio.com",
    projectId: "cloudcar-4aec3",
    storageBucket: "cloudcar-4aec3.appspot.com",
    messagingSenderId: "210914126529",
    appId: "1:210914126529:web:164be6857d20667659c240",
    measurementId: "G-YJF3W251MC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;