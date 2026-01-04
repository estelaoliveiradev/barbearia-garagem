
import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Nossa Equipe', href: '#equipe' },
    { name: 'Consultor IA', href: '#ia' },
    { name: 'Localização', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-600 p-2 rounded-lg">
            <Scissors className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white font-serif">
            BARBER<span className="text-yellow-600">STUDIO</span> PRO
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#agendar"
            className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            AGENDAR AGORA
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 absolute top-full left-0 w-full p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-slate-300 border-b border-slate-800 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#agendar"
            className="bg-yellow-600 text-white p-4 rounded-lg text-center font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            AGENDAR AGORA
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
