import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBkzBcvog1cAU20K1NUv663JfSy9P3Yx54",
  authDomain: "cart-35f98.firebaseapp.com",
  projectId: "cart-35f98",
  storageBucket: "cart-35f98.appspot.com",
  messagingSenderId: "971804855895",
  appId: "1:971804855895:web:8bdcb06493a81fe3415d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
