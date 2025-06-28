import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdF9ZjOC_IciPyFs4MK7_R3K3UK5RUoo8",
  authDomain: "movieapp-f1f7c.firebaseapp.com",
  projectId: "movieapp-f1f7c",
  storageBucket: "movieapp-f1f7c.firebasestorage.app",
  messagingSenderId: "440276123019",
  appId: "1:440276123019:web:7e47542ef54783f18a438e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);