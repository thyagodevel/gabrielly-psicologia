import React from 'react';
import ajuda from '../images/ajudapsic.png';
import logo from '../images/logo-coruja.png';
import BotaoContato from '../components/BotaoContato';

const ContainerApresentacao = () => {
  return (
    <section className="bg-fundoContainerInicial flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-textoPrincipal font-merriRegular text-5xl sm:text-5xl lg:text-6xl">
          Um pouco sobre a terapia
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl w-full">
        <img src={ajuda} alt="Ilustração" className="max-w-full h-80 mt-4 md:mt-0 ml-20" />
        <div className="text-center md:text-left">
          <h1 className="text-fundoGeral font-merriRegular font-semibold text-2xl sm:text-1xl lg:text-2xl mb-4">
            Talvez você esteja abatido ou ansioso, talvez você não tenha certeza sobre o futuro de um relacionamento, ou simplesmente sente que não está vivendo a vida que gostaria de viver. Seja qual for sua necessidade, eu estou aqui para lhe compreender. A terapia é um processo de crescimento e autodescoberta e nas minhas sessões, trabalhamos com o método psicanalítico, que busca compreender o inconsciente através dos relatos trazidos pelo paciente, afinal, você é a peça principal para desvendar o seu íntimo.
          </h1>
        </div>
      </div>
      <div className='pt-12' />
      <BotaoContato />
      <div className='mt-10 px-4 lg:px-0'>
        <div className="text-center lg:text-left border-t border-b border-textoComplementar py-6 mt-10">
          <img className='h-20 mx-auto' src={logo} alt="Logo" />
          <h1 className="text-textoPrincipal text-center font-merriRegular text-4xl sm:text-4xl lg:text-5xl mb-5">
            Gabrielly Leal - CRP 01/26135
          </h1>
          <h1 className="text-fundoGeral text-center text-2xl lg:text-3xl font-merriRegular font-semibold">
            Psicóloga Especialista em Saúde Mental do Adolescente e Pós-Graduanda em Terapia Psicanalítica
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContainerApresentacao;
