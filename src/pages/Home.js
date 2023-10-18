import React, { useState, useEffect } from 'react';
import ContainerInicial from '../components/ContainerInicial';
import ContainerApresentacao from '../components/ContainerApresentacao';
import ContainerSobre from '../components/ContainerSobre';
import ContainerContato from '../components/ContainerContato';
import BotaoWpp from '../components/BotaoWpp';
import ScrollTop from '../components/ScrollTop';
import LoadingScreen from '../components/LoadingScreen';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div>
      {loading ? 
      <LoadingScreen />  :
      <>
        <ScrollTop />
        <ContainerInicial />
        <ContainerApresentacao />
        <ContainerSobre />
        <ContainerContato />
        <BotaoWpp />
      </>
    }
    </div>
  );
};

export default Home;
