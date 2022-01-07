import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCS3-z-kSofF1mX2tUFiKqGkKwdlcyD034",
  authDomain: "hacknroll2022-de3f4.firebaseapp.com",
  databaseURL: "https://hacknroll2022-de3f4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hacknroll2022-de3f4",
  storageBucket: "hacknroll2022-de3f4.appspot.com",
  messagingSenderId: "164996175108",
  appId: "1:164996175108:web:08ce24d6c98691b1126c51",
  measurementId: "G-E3SNLHK5XB"
};


const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);