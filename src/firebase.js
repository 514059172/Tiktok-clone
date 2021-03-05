import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBLTPfRmIBZPm6rQ9CJ229pu-Qxu3Wd2tw',
  authDomain: 'tiktok-clone-c130b.firebaseapp.com',
  projectId: 'tiktok-clone-c130b',
  storageBucket: 'tiktok-clone-c130b.appspot.com',
  messagingSenderId: '272497456656',
  appId: '1:272497456656:web:895aff7371b25a34bc7c95',
  measurementId: 'G-PH3TXYCG6P',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
