import { httpsCallable } from 'firebase/functions';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';

const HeroesCount = () => {
  const fbContext = useContext(FirebaseContext);
  const cloudFuncs = fbContext.cloudFuncs;
  const [count, setCount] = useState('n/a');

  const getHeroesCount = async (runHelloWorld = false) => {
    const getNumberOfHeroes = httpsCallable(
      cloudFuncs,
      runHelloWorld ? 'helloWorld2' : 'getNumberOfHeroes'
    );
    const result = await getNumberOfHeroes();
    const data = result.data;
    setCount(data.numHeroes);
  };

  return (
    <div>
      <span>Num of Heroes: {count}</span>
      <button onClick={() => getHeroesCount(true)}>HELLO WORLD</button>
      <button onClick={() => getHeroesCount(false)}>Fetch Count</button>
      <br />
    </div>
  );
};

export default HeroesCount;
