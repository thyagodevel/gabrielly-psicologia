import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BotaoContato = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5561998661441&text&type=phone_number&app_absent=0" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-green-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-green-600"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
      <span>Entre em Contato</span>
    </a>
  );
};

export default BotaoContato;
