import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import {  getFirestore, collection, getDocs } from 'firebase/firestore';

const base = initializeApp({
    apiKey: "AIzaSyD7Kw-ynvk7p8LzvBmvu2P6w7krcEZuKdM",
    authDomain: "chat-app-demo-12223.firebaseapp.com",
    databaseURL: "https://chat-app-demo-12223-default-rtdb.firebaseio.com",
    projectId: "chat-app-demo-12223",
    storageBucket: "chat-app-demo-12223.appspot.com",
    messagingSenderId: "671784459453",
    appId: "1:671784459453:web:139ed54fe36ea828db6bd4",
});

export const database = getDatabase(base);
export const dbRef = ref(database);
export const auth = getAuth(base);
