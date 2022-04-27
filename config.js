import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD1AQpkJ82GEM2b2ye8WJlPtqUa785mthw",
  authDomain: "e-ride-c50ef.firebaseapp.com",
  projectId: "e-ride-c50ef",
  storageBucket: "e-ride-c50ef.appspot.com",
  messagingSenderId: "636322493767",
  appId: "1:636322493767:web:68903d9bfe77d89dddc862"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
