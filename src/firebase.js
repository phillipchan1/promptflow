// import firebase from "firebase/app"
import "firebase/auth"
import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import "firebase/firestore"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgI1vXRv4bpPp7su0Zk4ih6jHoPBjrALc",
  authDomain: "promptflow-3957d.firebaseapp.com",
  projectId: "promptflow-3957d",
  storageBucket: "promptflow-3957d.appspot.com",
  messagingSenderId: "384163400756",
  appId: "1:384163400756:web:e2827be9c13ed13f754e61",
  measurementId: "G-FWZ4PK08XV",
}

const app = initializeApp(firebaseConfig)
// app.firestore()
const db = getFirestore()

export { db }
export const auth = getAuth(app)
