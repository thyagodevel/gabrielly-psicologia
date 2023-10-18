import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BotaoWpp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5561998661441&text&type=phone_number&app_absent=0"
      className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default BotaoWpp;
