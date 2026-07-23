import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Send, Share2, PlayCircle, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-on-primary-fixed w-full py-16 px-6 md:px-margin-desktop">
      <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary">
        {/*  Brand Column  */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img alt="Footer Logo" className="h-10 w-auto invert brightness-0" src="/logo.png"/>
            <span className="font-display-lg text-headline-md font-bold">Colégio Henriques</span>
          </div>
          <p className="font-body-md text-body-md opacity-80 leading-relaxed mb-6">
            Proporcionando excelência em educação desde 1985. Formando líderes com base sólida e valores humanos.
          </p>
          <div className="flex gap-4">
            <Share2 className="cursor-pointer hover:text-secondary-fixed transition-colors" />
            <PlayCircle className="cursor-pointer hover:text-secondary-fixed transition-colors" />
            <MessageSquare className="cursor-pointer hover:text-secondary-fixed transition-colors" />
          </div>
        </div>
        {/*  Links Column 1  */}
        <div>
          <h6 className="font-label-md text-label-md font-bold mb-6 uppercase tracking-wider">Institucional</h6>
          <ul className="space-y-4">
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/sobre-nos">Sobre Nós</Link></li>
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/politica-de-privacidade">Política de Privacidade</Link></li>
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/termos-de-servico">Termos de Serviço</Link></li>
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/admissoes">Admissões</Link></li>
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/contactos">Localização do Campus</Link></li>
          </ul>
        </div>
        {/*  Links Column 2  */}
        <div>
          <h6 className="font-label-md text-label-md font-bold mb-6 uppercase tracking-wider">Académico</h6>
          <ul className="space-y-4">
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/niveis-academicos">Ensino Primário</Link></li>
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/niveis-academicos">Ensino Secundário</Link></li>
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/niveis-academicos">Atividades Extracurriculares</Link></li>
            <li><Link className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" to="/admissoes">Processo de Admissão</Link></li>
          </ul>
        </div>
        {/*  Contact/Newsletter Column  */}
        <div>
          <h6 className="font-label-md text-label-md font-bold mb-6 uppercase tracking-wider">Contacto</h6>
          <p className="font-body-md text-body-md opacity-80 mb-4 flex items-start gap-2">
            <MapPin className="text-[20px] shrink-0 mt-1" />
            <span>Avenida da Educação, Talatona<br/>Luanda, Angola</span>
          </p>
          <p className="font-body-md text-body-md opacity-80 mb-6 flex items-center gap-2">
            <Phone className="text-[20px] shrink-0" />
            <span>+244 923 000 000 / 912 000 000</span>
          </p>
          <div className="mt-4">
            <p className="text-[12px] font-bold mb-2 uppercase">Boletim Informativo</p>
            <div className="flex">
              <input className="bg-primary-container border-none text-white placeholder-on-primary-container px-4 py-2 rounded-l w-full focus:ring-1 focus:ring-secondary-fixed focus:outline-none" placeholder="O seu e-mail" type="email"/>
              <button className="bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-r hover:bg-secondary transition-colors" aria-label="Subscrever">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-container-max-width mx-auto border-t border-on-primary/10 mt-16 pt-8 text-center text-on-primary-container text-[14px]">
        © 2026 Colégio Henriques. Todos os direitos reservados. Proporcionando excelência em educação.
      </div>
    </footer>
  );
};

export default Footer;
