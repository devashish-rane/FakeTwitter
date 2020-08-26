import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCW-59yYBKQJkypw7sJu41Tl4SHhpWrA0M",
    authDomain: "twitter-clone-2ec4d.firebaseapp.com",
    databaseURL: "https://twitter-clone-2ec4d.firebaseio.com",
    projectId: "twitter-clone-2ec4d",
    storageBucket: "twitter-clone-2ec4d.appspot.com",
    messagingSenderId: "268499613726",
    appId: "1:268499613726:web:74ce688b3bf40a2607160f",
    measurementId: "G-86JTVMK5JG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export default db;