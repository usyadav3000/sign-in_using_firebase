import firebase from "firebase";
require('@firebase/auth');
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyB2GM7vqKJPKppYG5GgjBOHuKKst-c1ijs",
    authDomain: "sign-4ad7b.firebaseapp.com",
    projectId: "sign-4ad7b",
    storageBucket: "sign-4ad7b.appspot.com",
    messagingSenderId: "960225584534",
    appId: "1:960225584534:web:775d7fe600f903427ea9b7"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;