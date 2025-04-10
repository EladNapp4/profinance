// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8-oo9PJIQx6AlTiwV0w0YQg1ILHbW3yk",
  authDomain: "profinance-c076f.firebaseapp.com",
  projectId: "profinance-c076f",
  storageBucket: "profinance-c076f.firebasestorage.app",
  messagingSenderId: "969416592773",
  appId: "1:969416592773:web:1d39535980c5ca614248ec",
  measurementId: "G-PSHBM5MZRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);