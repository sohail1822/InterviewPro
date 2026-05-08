import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewpro-a679e.firebaseapp.com",
    projectId: "interviewpro-a679e",
    storageBucket: "interviewpro-a679e.firebasestorage.app",
    messagingSenderId: "187145862346",
    appId: "1:187145862346:web:772659c2383a0870fa8833"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };