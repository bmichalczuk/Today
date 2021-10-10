import {signOut, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {collection, setDoc, doc, getDocs} from "@firebase/firestore";
import {auth, googleProvider, db} from "./firebase";

//auth
export const registerWithEmail = async (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const loginWithEmailAndPassword = async (email: string, password: string) => await signInWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = async () => await signInWithPopup(auth, googleProvider);

export const logOut = async () => signOut(auth);

export const authObserver = (callback: any)  => onAuthStateChanged(auth, callback);


//firestore
export const readEntry = async (user: string) => {
    const querySnapshot = await getDocs(collection(db, user));
    console.log(querySnapshot);
  };
  
export const addEntry = (userId: string, entry: object) => {
    const date = `${Date.now()}`;
    return setDoc(doc(db, userId, `habits/cwiczenia/${date}`), entry, {merge: true});
}