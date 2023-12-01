// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC-xS4QK43li5zgqijQ8722pxJVd30Udeg",
  authDomain: "chat-application-790f4.firebaseapp.com",
  projectId: "chat-application-790f4",
  storageBucket: "chat-application-790f4.appspot.com",
  messagingSenderId: "167784150276",
  appId: "1:167784150276:web:c2c8f1fc777c4681b4cc51",
  measurementId: "G-14627S86MB",
  databaseURL:
    "https://chat-application-790f4-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export { provider, auth, storage, db };
