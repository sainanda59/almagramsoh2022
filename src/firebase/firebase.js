import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqhJprstlTWmUyX1OlJpX9oGukTOZhkbE",
    authDomain: "almagramsoh.firebaseapp.com",
    projectId: "almagramsoh",
    storageBucket: "almagramsoh.appspot.com",
    messagingSenderId: "48233935049",
    appId: "1:48233935049:web:c6b3f6a0351b76da0b5d18",
    measurementId: "G-0RNYEBQBLV"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

const db = getFirestore(app);

export { db };