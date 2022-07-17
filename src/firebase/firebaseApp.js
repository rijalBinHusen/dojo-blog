import firebaseConfig from "./config";
import firebase from "firebase/app";
import "firebase/firestore";

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
