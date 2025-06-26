// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCVuXF2NuuzJuoLKFrPm5Qq_aGi160pocc",
  authDomain: "ph-assignment-10-job-portal.firebaseapp.com",
  projectId: "ph-assignment-10-job-portal",
  storageBucket: "ph-assignment-10-job-portal.firebasestorage.app",
  messagingSenderId: "67159046680",
  appId: "1:67159046680:web:e222680ddf0d8a5feba16d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;