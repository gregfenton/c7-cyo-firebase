import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'; 

import React from 'react';

export const FirebaseContext = React.createContext();

const FirebaseProvider = (props) => {
  const children = props.children;
  const firebaseConfig = {
    apiKey: 'AIzaSyDRgy8S2g2kRWGtYTVMIis-srtz9xePLuc',
    authDomain: 'c7-cyo-firebase-2-ea41c.firebaseapp.com',
    projectId: 'c7-cyo-firebase-2-ea41c',
    storageBucket: 'c7-cyo-firebase-2-ea41c.appspot.com',
    messagingSenderId: '307781570003',
    appId: '1:307781570003:web:382aec676939a92e2f7326',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const store = getStorage(app); 

  const theValues = { app, auth, db, store };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
