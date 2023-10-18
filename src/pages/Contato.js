import React, { useState, useEffect } from 'react';
import ScrollTop from '../components/ScrollTop';
import BotaoWpp from '../components/BotaoWpp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import LoadingScreen from '../components/LoadingScreen';

const Contato = () => {
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
          <section className="mt-10 mb-12 flex items-center justify-center bg-fundoContainerContato">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto p-4">
              <div className="bg-white rounded-lg shadow-lg p-4 md:col-span-2">
                {/* Conteúdo do bloco esquerdo */}
                <h2 className="text-textoPrincipal font-merriLighItalic text-2xl font-bold mb-4">Informações de Contato</h2>
                <p className='text-fundoGeral font-merriLighItalic text-xl font-bold'>Email: <a href="mailto:gabrielly.psicoterapia@gmail.com" target="_blank">gabrielly.psicoterapia@gmail.com</a></p>
                <p className='text-fundoGeral font-merriLighItalic text-xl font-bold'>Telefone: (61) 99866-1441</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                {/* Conteúdo do bloco direito */}
                <div className="text-center mb-4">
                  <h2 className="text-textoPrincipal font-merriLighItalic text-2xl font-bold">Redes Sociais</h2>
                </div>
                <div className="flex pt-3 justify-center">
                  <a href="https://api.whatsapp.com/send/?phone=5561998661441&text&type=phone_number&app_absent=0" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="text-fundoGeral text-2xl mb-2 mx-2" /></a>
                  <a href="https://www.instagram.com/gabrielly.psicologia/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="text-fundoGeral text-2xl mb-2 mx-2" /></a>
                  <a href="https://open.spotify.com/playlist/1814ZkM423w61RxC1zx0bX?si=20aa6e66ee7247d6&nd=1" target="_blank"><FontAwesomeIcon icon={faSpotify} className="text-fundoGeral text-2xl mb-2 mx-2" /></a>
                </div>
              </div>
            </div>
          </section>
          <BotaoWpp />
        </div>
      }
    </>
  );
};

export default Contato;
