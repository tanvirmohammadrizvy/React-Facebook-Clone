import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBDoEUHkae_Y6eQKP-1jBO2SNHpibnzfLE",
    authDomain: "bd-book-4d019.firebaseapp.com",
    databaseURL: "https://bd-book-4d019.firebaseio.com",
    projectId: "bd-book-4d019",
    storageBucket: "bd-book-4d019.appspot.com",
    messagingSenderId: "279504704327",
    appId: "1:279504704327:web:298dbde0d3ad234e007262",
    measurementId: "G-SF0WG368RY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;