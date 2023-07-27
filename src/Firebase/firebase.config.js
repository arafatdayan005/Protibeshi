// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpmZFnV2SEyfBly60xk4806tQrKZcCmlc",
    authDomain: "protybeshi.firebaseapp.com",
    projectId: "protybeshi",
    storageBucket: "protybeshi.appspot.com",
    messagingSenderId: "37763604401",
    appId: "1:37763604401:web:ba26a1bc68f4c202996790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;