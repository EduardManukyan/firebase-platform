import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCr6oKeQnJjg1K06fFr_67qtY4e9JYexT0",
    authDomain: "fir-platform-bd024.firebaseapp.com",
    databaseURL: "https://fir-platform-bd024-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-platform-bd024",
    storageBucket: "fir-platform-bd024.appspot.com",
    messagingSenderId: "544464854089",
    appId: "1:544464854089:web:2ddac0573ef8feb1b2b398"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;