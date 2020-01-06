import firebase from 'firebase-admin';
import serviceAccount from '~/firebase-service-account.json';


try {
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://mermaid-v1.firebaseio.com'
  });
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();