import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import AddHeroForm from './AddHeroForm';
import HeroesList from './HeroesList';
import LoginForm from './LoginForm';

const RestOfApp = () => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  return (
    <div className='App'>
      <LoginForm />
      {user ? `you are logged in! (${user.uid})` : 'not logged in 😔'}
      <hr />
      <AddHeroForm />
      <HeroesList />
    </div>
  );
};

export default RestOfApp;
