import firebase from 'firebase'
require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNMjp2tBaYHwPUUR0Qd0xof1zGQlT6HY0",
    authDomain: "book-santa-66927.firebaseapp.com",
    projectId: "book-santa-66927",
    storageBucket: "book-santa-66927.appspot.com",
    messagingSenderId: "33260680965",
    appId: "1:33260680965:web:8c95291b93501c1e15e96c",
    measurementId: "G-7E0Y600GW5"
    
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()