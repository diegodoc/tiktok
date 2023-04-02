import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDskqP9g4Kh5cD8BandVETVSjTFlwK89-k",
  authDomain: "tiktok-clone-f88d0.firebaseapp.com",
  projectId: "tiktok-clone-f88d0",
  storageBucket: "tiktok-clone-f88d0.appspot.com",
  messagingSenderId: "401879364081",
  appId: "1:401879364081:web:8571c751116d6a9fbf9450"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;