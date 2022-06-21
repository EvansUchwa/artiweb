import { setDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyCdkbA1ToapV_psJEJPQ2YKPfmxxpqOk4c",
    authDomain: "arti-web-2d07a.firebaseapp.com",
    projectId: "arti-web-2d07a",
    storageBucket: "arti-web-2d07a.appspot.com",
    messagingSenderId: "597521570942",
    appId: "1:597521570942:web:cab4784657f391b8a70c2f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

//Initialize Firestore
const db = getFirestore(firebase);
export function fireStoreShit() {
    console.log('okkkk boomer')
    setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    }).then(() => {
        console.log("token saved")
    }).catch((err) => {
        console.log(err);
    });
} 