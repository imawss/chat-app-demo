import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const base = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "chatapp-bb289.firebaseapp.com",
    projectId: "chatapp-bb289",
    storageBucket: "chatapp-bb289.appspot.com",
    messagingSenderId: "550254131008",
    appId: "1:550254131008:web:cd87466ec30f6131a26ca5",
    measurementId: "G-PEG2KKHRN3"
});

export const database = getDatabase(base);
export const dbRef = ref(database);
export const auth = getAuth(base);
