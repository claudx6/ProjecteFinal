import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBNCXGU0CWDO53mt1leUULVNPV1L0AF_Q0",
    authDomain: "contact-form-fe6e1.firebaseapp.com",
    projectId: "contact-form-fe6e1",
    storageBucket: "contact-form-fe6e1.appspot.com",
    messagingSenderId: "828317235644",
    appId: "1:828317235644:web:a4b9f40dcf8ae62d9653b9",
    measurementId: "G-BJY0R2KS58"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  
export default fireDb.database().ref();

    