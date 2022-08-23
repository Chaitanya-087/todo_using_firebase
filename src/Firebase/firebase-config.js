import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5BkOUSUvurFTw3m6zTyxfwvUajXOPv6M",
  authDomain: "todo-40437.firebaseapp.com",
  projectId: "todo-40437",
  storageBucket: "todo-40437.appspot.com",
  messagingSenderId: "675584021328",
  appId: "1:675584021328:web:a24e008a6ce950f2049255"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);