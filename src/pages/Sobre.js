import React, { useState, useEffect } from 'react';
import gabrielly from '../images/gabrielly.png';
import ScrollTop from '../components/ScrollTop';
import BotaoWpp from '../components/BotaoWpp';
import LoadingScreen from '../components/LoadingScreen';

const Sobre = () => {
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

        <div className="flex flex-col bg-fundoMenu md:flex-row justify-center items-center p-4">
          <ScrollTop />
          <div className="w-48 sm:w-80 overflow-hidden border-4 border-bordaFoto rounded-full mb-4 md:mr-4">
            <img src={gabrielly} alt="Gabrielly Psicologa" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-textoPrincipal font-merriRegular text-5xl sm:text-5xl lg:text-6xl">Minha História</h2>
            <p className="text-fundoGeral font-merriRegular font-semibold text-2xl sm:text-1xl lg:text-2xl mb-4">
              Como você já viu, meu nome é Gabrielly, mas pode me chamar de Gaby! Se está aqui nessa página é por que quer saber um pouco mais sobre mim, então aí vai. Sou formada em Psicologia pela Universidade Católica de Brasília, especialista em Saúde Mental do Adolescente, e pós-graduanda em Terapia Psicanalítica, mas... Antes disso tudo, eu sou amante de ficção científica e uma leitora voraz nas horas vagas, (inclusive se você gosta de ler também pode me procurar no skoob depois), ah eu também amo animais e sou muito fã de Pokémon GO, sim, eu ainda jogo... Mudando de assunto, a minha trajetória na psicologia começou ainda adolescente, quando fui em busca da psicoterapia pela primeira vez, com quase 1 ano de tratamento percebi que tinha me encontrado para além do meu interior, eu tinha encontrado também o que gostaria de passar o resto da vida fazendo, tinha encontrado minha profissão, hoje, uns bons anos depois estou aqui escrevendo para você, meu futuro paciente, que não houve arrependimentos. Foram muitos anos de estudo e aperfeiçoamento para finalmente te receber aqui da melhor maneira possível.  A vida pode ser difícil e, às vezes, a ajuda de uma psicóloga profissional pode ser muito efetiva.
            </p>
            <div className=' pt-10' />
          </div>
          <BotaoWpp />
        </div>
      }
    </>
  );
};

export default Sobre;
