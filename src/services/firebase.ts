import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBATujBMcU-jzvHSNVekrrQnnvKhaQl8LM",
  authDomain: "awesome-places-cbcd0.firebaseapp.com",
  projectId: "awesome-places-cbcd0",
  storageBucket: "awesome-places-cbcd0.appspot.com",
  messagingSenderId: "840142208625",
  appId: "1:840142208625:web:d077a9178a148662af25d0"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)