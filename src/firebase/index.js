import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCzmCVTqU1AbX9pmXcNYiGZMgA1A8oFnAA",
  authDomain: "vue-authentication-app-3bc0b.firebaseapp.com",
  projectId: "vue-authentication-app-3bc0b",
  storageBucket: "vue-authentication-app-3bc0b.appspot.com",
  messagingSenderId: "719984117633",
  appId: "1:719984117633:web:11010bc8467ff04ae08a80"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth};
