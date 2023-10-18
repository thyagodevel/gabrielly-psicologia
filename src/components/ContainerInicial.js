import React, { useEffect } from 'react';
import gabrielly from '../images/gabrielly.png';
import backgroundImage from '../images/folhas.png';

const ContainerInicial = () => {
  const containerStyle = {
    height: '80%',
  };

  useEffect(() => {
    const images = document.querySelectorAll('.responsive-image');

    images.forEach(img => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });
  }, []);

  return (
    <section className="flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="max-w-screen-xl mx-auto w-full" style={containerStyle}>
        <div className="flex items-center justify-center flex-col md:flex-row text-center md:text-left mb-8 p-4 rounded-lg mt-4">
          <div className='m-1 text-center'>
            <h1 className="text-textoPrincipal font-serif text-5xl mb-4 md:mb-0 sm:text-5xl lg:text-6xl">
              Gabrielly Psicologia
            </h1>
            <div className='h-3' />
            <h1 className="text-textoPrincipal font-merriLighItalic text-2xl mb-4 md:mb-0 sm:text-1xl lg:text-2xl pr-2">
              "Você é livre no momento em que não busca fora de si mesmo a solução para seus problemas"
            </h1>
          </div>
          <div className="w-48 sm:w-80 overflow-hidden border-4 border-bordaFoto rounded-full mx-2 md:mx-0">
            <img src={gabrielly} alt="Gabrielly Psicologa" className="max-w-full h-auto responsive-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerInicial;
