import firebase from "firebase/app";
import "firebase/firestore"; // for db
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDOAIxE_RmJbDRJAzZj2Z6FFEkyFXdUcGk",
  authDomain: "mario-plan-kbdrreddy7.firebaseapp.com",
  databaseURL: "https://mario-plan-kbdrreddy7.firebaseio.com",
  projectId: "mario-plan-kbdrreddy7",
  storageBucket: "mario-plan-kbdrreddy7.appspot.com",
  messagingSenderId: "258213941857"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
