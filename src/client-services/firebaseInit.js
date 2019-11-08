import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

export default () => {
  try {
    var config = {
      apiKey: 'AIzaSyBeDGH-cUx_v4j1wse8dNIdsVkb1L8nqrc',
      authDomain: 'dungeons-and-dragons-dfe38.firebaseapp.com',
      databaseURL: 'https://dungeons-and-dragons-dfe38.firebaseio.com',
      projectId: 'dungeons-and-dragons-dfe38',
      storageBucket: 'dungeons-and-dragons-dfe38.appspot.com',
      messagingSenderId: '5831976520',
      appId: '1:5831976520:web:b870408034b2cbe8c89a7d'
    };
    firebase.initializeApp(config);
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
