import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ0gzuFcnn_rWdhe3g6pKTs527GMF6P60",
  authDomain: "e-learning-website-331bb.firebaseapp.com",
  projectId: "e-learning-website-331bb",
  storageBucket: "e-learning-website-331bb.appspot.com",
  messagingSenderId: "721978149675",
  appId: "1:721978149675:web:0698db14c23ab893e8536e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
