import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDunGGr2LS4hQbUXrzou5g0sf5rJ7XCWos",
  authDomain: "netflix-clone-7f4ca.firebaseapp.com",
  projectId: "netflix-clone-7f4ca",
  storageBucket: "netflix-clone-7f4ca.appspot.com",
  messagingSenderId: "559133305885",
  appId: "1:559133305885:web:a0a184399201b327c5eaf4",
  measurementId: "G-Z0KHJTE5D3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
