import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Search, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="docked full-width top-0 sticky z-50 bg-surface border-b border-outline-variant">
<div className="max-w-container-max-width mx-auto flex justify-between items-center px-6 md:px-margin-desktop py-4">
<div className="flex items-center gap-4">
<img alt="Colégio Henriques Logo" className="h-10 w-auto" src="/logo.png"/>
<span className="font-display-lg text-headline-md font-bold text-primary hidden sm:block">Colégio Henriques</span>
</div>
<nav className="hidden lg:flex items-center gap-8">
<Link className="text-primary border-b-2 border-primary font-semibold pb-1 font-label-md text-label-md" to="/">Início</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" to="/sobre-nos">Sobre Nós</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" to="/niveis-academicos">Níveis Académicos</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" to="/admissoes">Admissões</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" to="/contactos">Contactos</Link>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">
                    Student Portal
                </button>
<div className="flex items-center gap-2 text-on-surface-variant">
<Globe className="cursor-pointer hover:text-primary transition-colors" />
<Search className="cursor-pointer hover:text-primary transition-colors" />
<Menu className="lg:hidden cursor-pointer" />
</div>
</div>
</div>
</header>
  );
};

export default Navbar;
