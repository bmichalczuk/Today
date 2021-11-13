import { initializeApp } from '@firebase/app';
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
};

const app = initializeApp(firebaseConfig);

//firestore

export const db = getDatabase(app);

//auth
export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();

export default app;



