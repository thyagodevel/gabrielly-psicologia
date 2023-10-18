import React, {useEffect, useState} from 'react';
import ScrollTop from '../components/ScrollTop';
import BotaoWpp from '../components/BotaoWpp';
import FAQItem from '../components/FAQItem';
import LoadingScreen from '../components/LoadingScreen';

const FAQ = () => {
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
    <div className="flex flex-col items-center bg-fundoMenu p-4">
      <ScrollTop />
      <h2 className="text-textoPrincipal font-merriRegular text-5xl sm:text-5xl lg:text-6xl mb-4">FAQ</h2>
      <div className="w-full md:w-1/2">
        <FAQItem
          pergunta="QUAL TÉCNICA VOCÊ UTILIZA NAS SESSÕES?"
          resposta="Eu trabalho com o método psicanalítico, majoritariamente utilizo dos estudos e do pensamento de Winnicott para entender meu paciente.  Para Winnicott todos nós temos potencial para nos desenvolver de forma saudável, basta que o ambiente propicie isso, em nosso atendimentos, busco proporcionar um lugar de escuta, acolhimento e sustentação para você."
        />
        <FAQItem
          pergunta="VOCÊ É ESPECIALISTA EM ALGO?"
          resposta="Sim! Sou especialista em Saúde Mental de Adolescentes e Jovens Adultos, eventualmente trabalho também com famílias e pais devido a demanda com os adolescentes em sua maioria envolverem o meio familiar. Além disso, realizo atendimentos para adultos."
        />
        <FAQItem
          pergunta="VOCÊ ATENDE CRIANÇAS?"
          resposta="Não atendo crianças, somente adolescentes a partir de 14 anos."
        />
        <FAQItem
          pergunta="QUANTO TEMPO DURA CADA SESSÃO?"
          resposta='As sessões em geral duram 50 minutos, mas como você já deve ter ouvido por aí, "cada caso é um caso", as vezes precisamos de mais que 50 minutos, as vezes menos. De qualquer forma saiba que o horário acordado será somente seu, posteriormente conversaremos sobre isso.'
        />
        <FAQItem
          pergunta="VOCÊ TRABALHA COM TABELAS DE PREÇOS ESPECIAIS?"
          resposta='A discussão sobre valores especiais ou não, acontece de forma pessoal comigo, para isso, recomendo que entre em contato. Mais informações na aba "Contato".'
        />
        <FAQItem
          pergunta="O QUE É O SERVIÇO DE ORIENTAÇÃO?"
          resposta="O serviço de orientação é voltado a pais que queiram ter um espaço de troca e acolhimento comigo e com outros pais. Sabemos que a parentalidade não é algo fácil e que além disso, não nascemos sabendo de tudo, então eventualmente surgem dúvidas e desafios,  portanto ofereço esse serviço no intuito de promover um local de fala e escuta entre pais que estejam precisando de apoio em qualquer questão relacionada a seus filhos ou família, além disso, esse serviço conta com apoio psicopedagógico também, para que possamos pensar de uma forma interdisciplinar. "
        />
      </div>
      <BotaoWpp />
    </div>
      }
    </>
  );
};

export default FAQ;
