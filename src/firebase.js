import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// import {getfirestore} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCbYPqPdODWzMzIKdJLESzqhlCKF4Yqwtc",
  authDomain: "whatsapp-1aac7.firebaseapp.com",
  projectId: "whatsapp-1aac7",
  storageBucket: "whatsapp-1aac7.appspot.com",
  messagingSenderId: "243925008996",
  appId: "1:243925008996:web:49d343b7091a78b5999571",
  measurementId: "G-9586PBWGBC"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  // const provider = new firebaseApp.auth.GoogleAuthProvider();


  export {auth};
  export default db;