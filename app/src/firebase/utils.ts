import {signOut, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth, googleProvider, db} from "./firebase";
import {ref, set, onValue, off, remove } from "firebase/database";
import { HabitEntry, DbRefConfig } from "../tsc/types";

//auth
export const registerWithEmail = async (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const loginWithEmailAndPassword = async (email: string, password: string) => await signInWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = async () => await signInWithPopup(auth, googleProvider).catch(err => {
  console.log(err);
  return null;
});

export const logOut = async () => signOut(auth);

export const authObserver = (callback: any)  => onAuthStateChanged(auth, callback);


//database
const createDbRef = (config : DbRefConfig) => {
  const {userId, habit, entries, settings, key } = config;
  if(userId) {
    if(habit) {
      if(key) {
        return ref(db, `${userId}/habits/${habit}/entries/${key}`);
      }
      if(entries) {
        return ref(db, `${userId}/habits/${habit}/entries/`);
      }
      if(settings) {
        return ref(db, `${userId}/habits/${habit}/settings`);
      }
      return ref(db, `${userId}/habits/${habit}`);
    }
    return ref(db, `${userId}`);
  }
  return ref(db);
};
  
export const addHabitEntry = async ({userId, habit, entry} : {userId: string, habit: string, entry: HabitEntry}) => {

  const date = new Date();

  const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const path = createDbRef({userId, habit, key})//ref(db, `${userId}/habits/${habit}/entries/${key}`);

  return set(path, entry);
};

export const removeEntry = async ({userId, habit, key} : {userId: string, habit: string, key: string}) => remove(ref(db, `${userId}/habits/${habit}/entries/${key}`));

export const addNewHabit = (userId: string, habit: string, settings: Object) => {
    const path = createDbRef({userId, habit});//ref(db, `${userId}/habits/${habit}`);
    const entry = {
      settings,
      entries: {}
    };
    return set(path, entry);
};

export const removeHabit = ({userId, habit} : {userId: string, habit: string}) => remove(createDbRef({userId, habit}));

export const databaseObserver = (userId: string, callback: Function = console.log) => {

  const entriesPath = createDbRef({userId});

  onValue(entriesPath, (snapshot: any) => {
    callback(snapshot.val());
  });

  const turnOf = () => off(entriesPath);
  return turnOf;
}