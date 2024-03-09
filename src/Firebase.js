
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you 
import { getStorage } from "firebase/storage";
import 'firebase/database';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFvKLRz52vSCRtOHBgWplg_oqGyMhjL38",
  authDomain: "books-app-3b6c7.firebaseapp.com",
  projectId: "books-app-3b6c7",
  storageBucket: "books-app-3b6c7.appspot.com",
  messagingSenderId: "997842433338",
  appId: "1:997842433338:web:cd91a7b5d70d9dee62cc03",
  measurementId: "G-Q34PBQ1H7X",
  databaseURL: "https://books-app-3b6c7-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const Database = getDatabase(app);

export default app