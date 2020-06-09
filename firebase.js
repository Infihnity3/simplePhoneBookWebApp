import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBOEuEclwly_k3kspLUyQ0Oy4zCv9t7Ay8",
    authDomain: "phone-book-web-app.firebaseapp.com",
    databaseURL: "https://phone-book-web-app.firebaseio.com",
    projectId: "phone-book-web-app",
    storageBucket: "phone-book-web-app.appspot.com",
    messagingSenderId: "867248608880",
    appId: "1:867248608880:web:a17097855e0325343f46b5",
    measurementId: "G-J4C557R6YW"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;