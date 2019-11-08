import firebase, { firestore } from 'firebase-admin';
import serviceAccount from '~/firebase-service-account.json';


export default () => {
  try {
    firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccount),
      databaseURL: 'https://dungeons-and-dragons-dfe38.firebaseio.com'
    });
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return{
    auth: firebase.auth(),
    firestore: firebase.firestore()
  } ;
};
