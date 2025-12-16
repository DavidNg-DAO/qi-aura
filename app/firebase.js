import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9T4vjc4QMABRmGFT5blsh9HrUKZSB6S0",
  authDomain: "qimenlovesaviour.firebaseapp.com",
  projectId: "qimenlovesaviour",
  storageBucket: "qimenlovesaviour.firebasestorage.app",
  messagingSenderId: "476727884380",
  appId: "1:476727884380:web:6d078aecb723c640118499",
  measurementId: "G-9YT0DTL90C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
