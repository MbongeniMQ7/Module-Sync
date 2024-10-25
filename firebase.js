
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_B1N3RbVF57IkOrdD6U0aW_-KIapbJkw',
  authDomain: 'modulesync.firebaseapp.com',
  projectId: 'modulesync',
  storageBucket: 'modulesync.appspot.com',
  messagingSenderId: '832811138868',
  appId: '1:832811138868:android:1814d299429a3c546eaf61',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
