// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhxP0O_Ofb9sFGvNjKAAkhAyO0-cd9aT0",
  authDomain: "portfolio-tracker-frontend.firebaseapp.com",
  projectId: "portfolio-tracker-frontend",
  storageBucket: "portfolio-tracker-frontend.firebasestorage.app",
  messagingSenderId: "870755688760",
  appId: "1:870755688760:web:7cce973f4e7aa0207021cd",
  measurementId: "G-1V471DT88B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics and get a reference to the service
const analytics: Analytics = getAnalytics(app);

export { analytics };
