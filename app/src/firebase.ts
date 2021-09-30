import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const registerWithEmail = async (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

const loginWithEmailAndPassword = async (email: string, password: string) => {
  return await await signInWithEmailAndPassword(auth, email, password);
}

const loginWithGoogle = async () => {
  return await signInWithPopup(auth, provider);
}

const logOut = async () => signOut(auth);

export default {registerWithEmail ,loginWithGoogle, loginWithEmailAndPassword, logOut};



