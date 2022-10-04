import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBksQUcqX1vxqu9I9_NAy3NA4zcYU2UDis",
  authDomain: "project-kitkat.firebaseapp.com",
  projectId: "project-kitkat",
  storageBucket: "project-kitkat.appspot.com",
  messagingSenderId: "514273087887",
  appId: "1:514273087887:web:24f5d5390a379c2abafbfa"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const allTasks = collection(db, 'toDoTasks');

export default { allTasks };
