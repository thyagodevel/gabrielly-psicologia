import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-coruja.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-0 pr-4 max-w-screen-xl mx-auto">
      <img className='h-20 mt-0' src={logo} />

      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="text-textoPrincipal font-merriRegular rounded px-2 py-1 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition">Início</Link>
        <Link to="/sobre" className="text-gray-800 rounded px-2 py-1 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition">Sobre mim</Link>
        <Link to="/servicos" className="text-gray-800 rounded px-2 py-1 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition">Serviços</Link>
        <Link to="/faq" className="text-gray-800 rounded px-2 py-1 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition">FAQ</Link>
        <Link to="/contato" className="text-gray-800 rounded px-2 py-1 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition">Contato</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-textoPrincipal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-fundoMenu w-1/2 rounded-md">
          <Link to="/" className="block text-center text-gray-800 py-2 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition" onClick={closeMenu}>Início</Link>
          <Link to="/sobre" className="block text-center text-gray-800 py-2 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition" onClick={closeMenu}>Sobre mim</Link>
          <Link to="/servicos" className="block text-center text-gray-800 py-2 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition" onClick={closeMenu}>Serviços</Link>
          <Link to="/faq" className="block text-center text-gray-800 py-2 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition" onClick={closeMenu}>FAQ</Link>
          <Link to="/contato" className="block text-center text-gray-800 py-2 hover:bg-gray-200 text-textoPrincipal font-merriRegular transition" onClick={closeMenu}>Contato</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
