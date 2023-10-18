import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQItem = ({ pergunta, resposta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center bg-fundoContainerInicial p-3 cursor-pointer" onClick={toggleAccordion}>
        <h3 className="font-bold text-textoPrincipal font-merriRegular">{pergunta}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="ml-auto text-fundoGeral" />
      </div>
      {isOpen && <div className="p-3 bg-white text-fundoGeral font-merriRegular font-semibold ">{resposta}</div>}
    </div>
  );
};

export default FAQItem;
