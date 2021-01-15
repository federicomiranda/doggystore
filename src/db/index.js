import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "doggystore-7e5f7.firebaseapp.com",
  projectId: "doggystore-7e5f7",
  storageBucket: "doggystore-7e5f7.appspot.com",
  messagingSenderId: "480548003225",
  appId: "1:480548003225:web:5e6de1db25ee3cb40ac708"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}