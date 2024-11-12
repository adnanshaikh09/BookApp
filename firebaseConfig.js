// firebaseConfig.js

// Import Firebase and Firestore
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration from your Firebase project settings
const firebaseConfig = {
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };