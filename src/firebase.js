import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEm2vmoZx12sbTLMDUBdLlQPY19AMmaGE",
  authDomain: "twitter-clone-c5449.firebaseapp.com",
  databaseURL: "https://twitter-clone-c5449.firebaseio.com",
  projectId: "twitter-clone-c5449",
  storageBucket: "twitter-clone-c5449.appspot.com",
  messagingSenderId: "159573123739",
  appId: "1:159573123739:web:d26d03e784730ea07f9c3e",
};

//Initialize firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Accessing firebase firestore database
const db = firebaseApp.firestore();

//Accesing auth
const auth = firebaseApp.auth();

//Accessing google auth provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
