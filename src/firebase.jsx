import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKXhgH9VGWeiagxEnmPYcXQi79R3MnpyQ",
  authDomain: "tienda-react-99e2e.firebaseapp.com",
  projectId: "tienda-react-99e2e",
  storageBucket: "tienda-react-99e2e.firebasestorage.app",
  messagingSenderId: "311597492466",
  appId: "1:311597492466:web:6b0a120f2830f42d54486b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);