import firebase from 'firebase';
import 'firebase/auth';
// import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyB6pX-3DSxC47xzLmbx2RhRNtitjxMWwWk",
  authDomain: "sisp-firebase-15206.firebaseapp.com",
  databaseURL: "https://sisp-firebase-15206.firebaseio.com",
  projectId: "sisp-firebase-15206",
  storageBucket: "sisp-firebase-15206.appspot.com",
  messagingSenderId: "794260495556",
  appId: "1:794260495556:web:32bde329256ccb05affd91"                
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
