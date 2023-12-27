import React, { useState, useEffect } from 'react';
import ScrollTop from '../components/ScrollTop';
import BotaoWpp from '../components/BotaoWpp';
import terapia from '../images/terapia.jpg';
import orientacao from '../images/orientacao.jpg';
import LoadingScreen from '../components/LoadingScreen';

const Servicos = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ?
        <LoadingScreen /> :
        <div className="flex flex-col items-center justify-center bg-fundoMenu p-4">
          <ScrollTop />
          <h2 className="text-textoPrincipal font-merriRegular text-5xl sm:text-5xl lg:text-6xl mb-8">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <img
                src={terapia}
                alt="Imagem 1"
                className="w-72 h-72 object-cover rounded-full mb-4"
              />
              <h2 className="text-textoPrincipal text-center font-merriLighItalic text-xl font-bold mb-2">
                Psicoterapia individual de orientação psicanalítica
              </h2>
              <p className="text-fundoGeral font-sans text-center font-semibold">Com o objetivo de explorar o inconsciente, emoções e experiências, além de promover o autoconhecimento, lidar conflitos e favorecer mudanças.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <img
                src={orientacao}
                alt="Imagem 3"
                className="w-72 h-72 object-cover rounded-full mb-4"
              />
              <h2 className="text-textoPrincipal text-center font-merriLighItalic text-xl font-bold mb-2">
                Orientação parental
              </h2>
              <p className=" text-fundoGeral font-sans font-semibold text-center">Visando oferecer suporte e orientação para pais, mães e responsáveis compreenderem assuntos como educação, comportamento e desenvolvimento dos filhos.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mt-6">
              <h2 className="text-fundoGeral text-center font-merriLighItalic text-xl font-bold">
                Atendimento remoto e presencial em Brasília - DF
              </h2>
            </div>
          <div className='pt-24' />
          <BotaoWpp />
        </div>
      }
    </>
  );
};

export default Servicos;
