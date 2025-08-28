import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBpI2I0vNB0G2JPYU579tZ6D52ikdJzpeQ",
  authDomain: "plataforma-react-819a1.firebaseapp.com",
  projectId: "plataforma-react-819a1",
  storageBucket: "plataforma-react-819a1.firebasestorage.app",
  messagingSenderId: "605357703836",
  appId: "1:605357703836:web:e736e6c476e67a2b6fe359"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

export { auth, googleProvider, db, signOut };