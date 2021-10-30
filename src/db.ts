import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { getCandyMachineState } from "./candy-machine";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmAy1hvCxvOHgusRscfLbrm5yOfX2gdas",
  authDomain: "minty-8755c.firebaseapp.com",
  projectId: "minty-8755c",
  storageBucket: "minty-8755c.appspot.com",
  messagingSenderId: "788664120758",
  appId: "1:788664120758:web:37f72abf05d1321b0a7d17",
  measurementId: "G-KJN0N4NHZT",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const CANDY_MACHINE_COLLECTION_NAME = "candy-machines";

export const collections = {
  candyMachine: collection(db, CANDY_MACHINE_COLLECTION_NAME),
};

export const saveCandyMachineState = async (
  candyMachineId: string,
  candyMachineState: any
) => {
  console.log(candyMachineState);

  const candyMachineDocRef = doc(
    db,
    CANDY_MACHINE_COLLECTION_NAME,
    candyMachineId
  );
  return setDoc(
    candyMachineDocRef,
    {
      ...candyMachineState,
      upatedAt: Date.now(),
    },
    { merge: true }
  );
};
