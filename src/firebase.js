import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
        apiKey: "AIzaSyDQIxp9uYwxT1HGBFh2xGYZvrKWSZ2xnRY",
        authDomain: "facebook-messenger-clone-e4f4a.firebaseapp.com",
        projectId: "facebook-messenger-clone-e4f4a",
        storageBucket: "facebook-messenger-clone-e4f4a.appspot.com",
        messagingSenderId: "361119924814",
        appId: "1:361119924814:web:322a0ae7458c3813e4b91f",
        measurementId: "G-9PKZHCFRW8"
      });

const db = firebaseapp.firestore()

export default db;