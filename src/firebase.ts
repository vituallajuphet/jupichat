// Import the functions you need from the SDKs you need

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, initializeFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyAm1eBYGwYo4Q-qMlVqs7j_XSOvIuBnYx8',
  authDomain: 'jupichat-dc489.firebaseapp.com',
  projectId: 'jupichat-dc489',
  storageBucket: 'jupichat-dc489.appspot.com',
  messagingSenderId: '584965853181',
  appId: '1:584965853181:web:dd67c5a367480402669394',
  measurementId: 'G-KVKCWPFNRC',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
