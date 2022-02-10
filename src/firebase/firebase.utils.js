import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsNQYI4pQ27yCn-kxjWSwCw9pd-OuAt1w",
    authDomain: "crwn-db-fda23.firebaseapp.com",
    projectId: "crwn-db-fda23",
    storageBucket: "crwn-db-fda23.appspot.com",
    messagingSenderId: "390370069845",
    appId: "1:390370069845:web:0a4cd5a3df12f7175ab3dc"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;