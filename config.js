// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Ie4hIuV9ZqU3E5gZG1YXrbY6wEyH9ic",
  authDomain: "votingapp-88598.firebaseapp.com",
  databaseURL: "https://votingapp-88598-default-rtdb.firebaseio.com",
  projectId: "votingapp-88598",
  storageBucket: "votingapp-88598.appspot.com",
  messagingSenderId: "726660856827",
  appId: "1:726660856827:web:c7c4ddd735273db33fe95e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();
