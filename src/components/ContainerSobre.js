import React from 'react';
import terapia from '../images/terapia.jpg';
import apoio from '../images/apoio.jpg';
import orientacao from '../images/orientacao.jpg';
import BotaoContato from './BotaoContato';

const ContainerSobre = () => {
  return (
    <section className="pt-16 pb-16 flex flex-col items-center justify-center bg-fundoContainerInicial">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
          <img
            src={terapia}
            alt="Imagem 1"
            className="w-44 h-44 object-cover rounded-full mb-4"
          />
          <h2 className="text-textoPrincipal font-merriLighItalic text-xl font-bold mb-2">
            Terapia Individual
          </h2>
          <p className="text-textoComplementar font-sans text-center font-semibold">Adolescentes e Adultos</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
          <img
            src={orientacao}
            alt="Imagem 3"
            className="w-44 h-44 object-cover rounded-full mb-4"
          />
          <h2 className="text-textoPrincipal font-merriLighItalic text-xl font-bold mb-2">
            Serviço de Orientação
          </h2>
          <p className=" text-textoComplementar font-sans font-semibold text-center">Voltado a parentalidade</p>
        </div>
      </div>
      <div className='pt-16' />
      <BotaoContato />
    </section>
  );
};

export default ContainerSobre;
