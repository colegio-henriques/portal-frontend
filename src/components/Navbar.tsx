import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="top-0 sticky z-50 bg-surface border-b border-outline-variant shadow-sm">
      <div className="max-w-container-max-width mx-auto flex justify-between items-center px-6 md:px-margin-desktop py-4">
        <Link to="/" className="flex items-center gap-3">
          <img alt="Colégio Henriques Logo" className="h-10 w-auto" src="/logo.png"/>
          <span className="font-display-lg text-headline-md font-bold text-primary hidden sm:block">Colégio Henriques</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            className={`font-label-md text-label-md font-medium transition-colors duration-200 ${
              isActive('/') ? 'text-primary border-b-2 border-primary font-semibold pb-1' : 'text-on-surface-variant hover:text-primary'
            }`} 
            to="/"
          >
            Início
          </Link>
          <Link 
            className={`font-label-md text-label-md font-medium transition-colors duration-200 ${
              isActive('/sobre-nos') ? 'text-primary border-b-2 border-primary font-semibold pb-1' : 'text-on-surface-variant hover:text-primary'
            }`} 
            to="/sobre-nos"
          >
            Sobre Nós
          </Link>
          <Link 
            className={`font-label-md text-label-md font-medium transition-colors duration-200 ${
              isActive('/niveis-academicos') ? 'text-primary border-b-2 border-primary font-semibold pb-1' : 'text-on-surface-variant hover:text-primary'
            }`} 
            to="/niveis-academicos"
          >
            Níveis Académicos
          </Link>
          <Link 
            className={`font-label-md text-label-md font-medium transition-colors duration-200 ${
              isActive('/admissoes') ? 'text-primary border-b-2 border-primary font-semibold pb-1' : 'text-on-surface-variant hover:text-primary'
            }`} 
            to="/admissoes"
          >
            Admissões
          </Link>
          <Link 
            className={`font-label-md text-label-md font-medium transition-colors duration-200 ${
              isActive('/contactos') ? 'text-primary border-b-2 border-primary font-semibold pb-1' : 'text-on-surface-variant hover:text-primary'
            }`} 
            to="/contactos"
          >
            Contactos
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/login"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold hover:opacity-90 transition-all active:scale-95 shadow-sm"
          >
            Portal do Estudante
          </Link>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Globe className="cursor-pointer hover:text-primary transition-colors hidden sm:block" size={20} />
            <Search className="cursor-pointer hover:text-primary transition-colors hidden sm:block" size={20} />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-surface-variant transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-surface border-b border-outline-variant px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-label-md ${isActive('/') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} 
            to="/"
          >
            Início
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-label-md ${isActive('/sobre-nos') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} 
            to="/sobre-nos"
          >
            Sobre Nós
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-label-md ${isActive('/niveis-academicos') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} 
            to="/niveis-academicos"
          >
            Níveis Académicos
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-label-md ${isActive('/admissoes') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} 
            to="/admissoes"
          >
            Admissões
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-label-md ${isActive('/contactos') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} 
            to="/contactos"
          >
            Contactos
          </Link>
          <div className="pt-2 border-t border-outline-variant/50">
            <Link 
              onClick={() => setMobileMenuOpen(false)}
              to="/login"
              className="w-full inline-flex justify-center items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold"
            >
              Portal do Estudante
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
