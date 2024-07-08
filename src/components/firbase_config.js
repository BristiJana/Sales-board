import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqnE5WwRJyovkdBKsI7OIBPvB0JzLgY9s",
  authDomain: "googy-396506.firebaseapp.com",
  projectId: "googy-396506",
  storageBucket: "googy-396506.appspot.com",
  messagingSenderId: "662948842625",
  appId: "1:662948842625:web:ff2268f88356bdd7925180",
  measurementId: "G-DDLMY126SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;