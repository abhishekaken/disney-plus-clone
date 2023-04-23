import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAuD_PsXFvzuQtxdYGA5iAn-dFoEbOmgIY",
    authDomain: "disney-plus-clone-6ddbc.firebaseapp.com",
    projectId: "disney-plus-clone-6ddbc",
    storageBucket: "disney-plus-clone-6ddbc.appspot.com",
    messagingSenderId: "283480809985",
    appId: "1:283480809985:web:0e11c3d0f5450da8ccd600",
    measurementId: "G-1QDQSZTVPF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
