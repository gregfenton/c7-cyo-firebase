import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FirebaseContext } from '../providers/FirebaseProvider';
import LoginForm from './LoginForm';

const RestOfApp = () => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  return (
    <div className='App'>
      <LoginForm/>
      {user ? `you are logged in! (${user.uid})` : 'not logged in 😔'}
    </div>
  );
};

export default RestOfApp;
