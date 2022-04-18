// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJfNhskNslCXdcFYkIMCfj0tU2I8HzdVU",
    authDomain: "assignment-authentication.firebaseapp.com",
    projectId: "assignment-authentication",
    storageBucket: "assignment-authentication.appspot.com",
    messagingSenderId: "1041540898935",
    appId: "1:1041540898935:web:b534ad6bbcc08a2590a672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;