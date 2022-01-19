 import { initializeApp } from "firebase/app";
 import { getStorage } from "firebase/storage";
 import { getAuth, GoogleAuthProvider } from "firebase/auth";
 import { getFirestore } from "firebase/firestore/lite";
// import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB1tJWGomhgkWDHg81StXv7lt2hPNzFxIE",
  authDomain: "disneyplus-clone-38cf2.firebaseapp.com",
  projectId: "disneyplus-clone-38cf2",
  storageBucket: "disneyplus-clone-38cf2.appspot.com",
  messagingSenderId: "53003040980",
  appId: "1:53003040980:web:16ad0e58c195a73f09a341",
  measurementId: "G-3JY5YXQ841",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider =new GoogleAuthProvider()

export { db, auth, storage,provider };
// const firebaseApp =firebase.initializeApp(firebaseConfig);
// const db =firebaseApp.firebase;
// const auth =firebase.auth();
// const provider  =new firebase.auth.GoogleAuthProvider();
// const storage =firebase.storage();

// export {auth,provider,storage};
// export default db;


