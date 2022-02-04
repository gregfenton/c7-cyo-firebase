import functions from 'firebase-functions';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRgy8S2g2kRWGtYTVMIis-srtz9xePLuc',
  authDomain: 'c7-cyo-firebase-2-ea41c.firebaseapp.com',
  projectId: 'c7-cyo-firebase-2-ea41c',
  storageBucket: 'c7-cyo-firebase-2-ea41c.appspot.com',
  messagingSenderId: '307781570003',
  appId: '1:307781570003:web:382aec676939a92e2f7326',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const getNumberOfHeroes = functions.https.onCall(
  async (data, context) => {
    try {
      let heroCollRef = collection(firestore, 'heroes');
      let querySnap = await getDocs(heroCollRef);
      functions.logger.log(`request from: ${context.auth.token.email}`);
      functions.logger.log(`num of heroes: ${querySnap.size}`);
      return { numHeroes: querySnap.size };
    } catch (ex) {
      functions.logger.info(`ERROR: ${ex.message}`);
      throw ex;
    }
  }
);

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.log('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
