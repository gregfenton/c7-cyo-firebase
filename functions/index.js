import functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.log('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
