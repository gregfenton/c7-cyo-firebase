import functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = initializeApp(); // uses current Firebase project’s config
const firestore = getFirestore(app);

export const getNumberOfHeroes = functions.https.onCall(
  async (data, context) => {
    try {
      let heroCollRef = firestore.collection('heroes');
      let querySnap = await heroCollRef.get();
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
