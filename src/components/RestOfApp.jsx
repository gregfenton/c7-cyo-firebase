import React, { useContext } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';

const RestOfApp = () => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  return (
    <div className='App'>
      <p>
        Firebase app info:
        <br />
        <br />
        {JSON.stringify(app)}
      </p>
    </div>
  );
};

export default RestOfApp;
