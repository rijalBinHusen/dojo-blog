import firebaseConfig from "./config";
import firebase from "firebase/app";
import "firebase/firestore";

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

// export firestore
export { projectFirestore };
