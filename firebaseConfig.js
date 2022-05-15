import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQQ-XKR-_krDCYF0JyebEQcVkFkGlDZA0",
  authDomain: "react-admin-dashboard-a9ca6.firebaseapp.com",
  projectId: "react-admin-dashboard-a9ca6",
  storageBucket: "react-admin-dashboard-a9ca6.appspot.com",
  messagingSenderId: "95863358873",
  appId: "1:95863358873:web:6a548fb7875bc4d25cff08",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
