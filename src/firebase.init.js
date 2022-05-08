import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeEdqHmypunSnOev4WuD2oPk0ehu5vHXk",
  authDomain: "ns-mobile-house.firebaseapp.com",
  projectId: "ns-mobile-house",
  storageBucket: "ns-mobile-house.appspot.com",
  messagingSenderId: "866637110355",
  appId: "1:866637110355:web:85930e4e4f384ee9d0baa6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
