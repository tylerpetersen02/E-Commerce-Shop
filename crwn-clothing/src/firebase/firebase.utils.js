import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBS7DYZZAzBptzK9h-Uf9wZiGbkqk1hFuo",
  authDomain: "crwn-db-b2b28.firebaseapp.com",
  projectId: "crwn-db-b2b28",
  storageBucket: "crwn-db-b2b28.appspot.com",
  messagingSenderId: "349263614564",
  appId: "1:349263614564:web:f52010ed4c94d36521c571",
  measurementId: "G-5VCETTNH2V"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
