import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOXWIGrTu-wVPwmFARfHZ0hetHrRpUqzU",
  authDomain: "calculadora-impostos-e4c60.firebaseapp.com",
  projectId: "calculadora-impostos-e4c60",
  storageBucket: "calculadora-impostos-e4c60.appspot.com",
  messagingSenderId: "508064829858",
  appId: "1:508064829858:web:7c4e3445a6605b9effe2fb",
  measurementId: "G-7W6RJT79DT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
