import { Link } from 'react-router-dom';
import { ArrowRight, Baby, BookOpen, Camera, Share2, FlaskConical, Globe, GraduationCap, Mail, Search } from 'lucide-react';


export default function AcademicLevels() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <main>
        
{/*  TopNavBar  */}
<nav className="docked full-width top-0 sticky z-50 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<div className="max-w-container-max-width mx-auto flex justify-between items-center px-6 md:px-margin-desktop py-4">
<div className="font-display-lg text-headline-md font-bold text-primary dark:text-inverse-primary">
                Colégio Henriques
            </div>
<div className="hidden md:flex items-center gap-8">
<Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" to="/">Início</Link>
<Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" to="/sobre-nos">Sobre Nós</Link>
<Link className="font-label-md text-label-md text-primary dark:text-inverse-primary border-b-2 border-primary font-semibold pb-1" to="/niveis-academicos">Níveis Académicos</Link>
<Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" to="/contactos">Admissões</Link>
<Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" to="/contactos">Contactos</Link>
</div>
<div className="flex items-center gap-4">
<Globe className="text-on-surface-variant cursor-pointer hover:text-primary" />
<Search className="text-on-surface-variant cursor-pointer hover:text-primary" />
<button className="hidden lg:block bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95">Portal do Aluno</button>
</div>
</div>
</nav>
<main className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop py-16 md:py-24">
{/*  Hero Section  */}
<header className="mb-16 md:mb-24">
<h1 className="font-display-lg text-display-lg mb-6 text-primary">Excelência Acadêmica</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                No Colégio Henriques, acreditamos que cada fase da vida escolar é uma oportunidade única para o desenvolvimento humano e intelectual. Nossa proposta pedagógica integra tradição e inovação.
            </p>
</header>
{/*  Academic Levels Grid (Bento Style)  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Educação Infantil  */}
<div className="academic-card group flex flex-col bg-surface-container-lowest border border-outline-variant p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,53,106,0.04)] hover:border-primary/20">
<div className="card-icon w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6 text-secondary transition-transform">
<Baby />
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Educação Infantil</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                    Um ambiente lúdico e seguro onde o brincar é a base para as primeiras descobertas. Focamos no desenvolvimento socioemocional e cognitivo por meio de projetos integrados.
                </p>
<Link className="inline-flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all" to="/">
                    Saiba Mais
                    <ArrowRight className="text-sm" />
</Link>
</div>
{/*  Ensino Fundamental I  */}
<div className="academic-card group flex flex-col bg-surface-container-lowest border border-outline-variant p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,53,106,0.04)] hover:border-primary/20">
<div className="card-icon w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-primary transition-transform">
<BookOpen />
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Ensino Fundamental I</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                    Consolidação da alfabetização e desenvolvimento do raciocínio lógico. Estimulamos a autonomia e a curiosidade intelectual em um currículo rico e diversificado.
                </p>
<Link className="inline-flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all" to="/">
                    Saiba Mais
                    <ArrowRight className="text-sm" />
</Link>
</div>
{/*  Ensino Fundamental II  */}
<div className="academic-card group flex flex-col bg-surface-container-lowest border border-outline-variant p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,53,106,0.04)] hover:border-primary/20">
<div className="card-icon w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center mb-6 text-tertiary transition-transform">
<FlaskConical />
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Ensino Fundamental II</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                    Fase de transição com foco no aprofundamento das competências críticas. Incentivamos a investigação científica e a construção de uma consciência social sólida.
                </p>
<Link className="inline-flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all" to="/">
                    Saiba Mais
                    <ArrowRight className="text-sm" />
</Link>
</div>
{/*  Ensino Médio  */}
<div className="academic-card group flex flex-col bg-surface-container-lowest border border-outline-variant p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,53,106,0.04)] hover:border-primary/20">
<div className="card-icon w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 text-on-secondary-fixed transition-transform">
<GraduationCap />
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Ensino Médio</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                    Preparação rigorosa para os desafios universitários e para a vida. Itinerários formativos flexíveis que permitem ao aluno protagonizar seu próprio futuro acadêmico.
                </p>
<Link className="inline-flex items-center gap-2 font-label-md text-secondary group-hover:gap-4 transition-all" to="/">
                    Saiba Mais
                    <ArrowRight className="text-sm" />
</Link>
</div>
</section>
{/*  Featured Curriculum Image (Editorial Feel)  */}
<section className="mt-24">
<div className="relative overflow-hidden rounded-xl aspect-[21/9]">
<img className="w-full h-full object-cover" data-alt="A bright and airy classroom scene in an elite academic institution. Natural sunlight pours through large windows onto modern minimalist furniture. A small group of diverse students in professional school uniforms are engaged in a collaborative project using high-end technology and traditional books. The color palette is dominated by professional navy and warm gold accents, reflecting a sense of stability, focus, and premium educational quality." src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent flex items-center px-12">
<div className="max-w-md text-on-primary">
<h2 className="font-headline-lg text-headline-lg mb-4">Nossa Metodologia</h2>
<p className="font-body-md text-body-md mb-6">Aprendizado centrado no aluno, onde a tecnologia é ferramenta e o conhecimento é a ponte para o amanhã.</p>
<button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-lg font-label-md hover:opacity-90 transition-all">Agende uma Visita</button>
</div>
</div>
</div>
</section>
{/*  Values Section (Modern Layout)  */}
<section className="mt-24 border-t border-outline-variant pt-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div>
<h4 className="font-label-md text-label-md text-secondary uppercase mb-6">Tradição</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Desde 1985, mantendo os mais altos padrões de ensino e ética, formando gerações de cidadãos exemplares.</p>
</div>
<div>
<h4 className="font-label-md text-label-md text-secondary uppercase mb-6">Inovação</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Currículo bilíngue, laboratórios de última geração e parcerias com as principais universidades globais.</p>
</div>
<div>
<h4 className="font-label-md text-label-md text-secondary uppercase mb-6">Comunidade</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Uma escola feita por pessoas e para pessoas. Valorizamos a proximidade entre família e instituição.</p>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full bg-primary dark:bg-on-primary-fixed text-on-primary py-16">
<div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-1">
<div className="font-display-lg text-headline-md text-on-primary dark:text-inverse-primary mb-6">
                    Colégio Henriques
                </div>
<p className="font-body-md text-body-md text-on-primary-container dark:text-surface-variant opacity-80">
                    Proporcionando excelência em educação desde 1985.
                </p>
</div>
<div>
<h5 className="font-label-md text-label-md text-secondary-fixed mb-6">Institucional</h5>
<ul className="space-y-4 font-body-md text-body-md text-on-primary-container dark:text-surface-variant">
<li><Link className="hover:text-secondary-fixed transition-colors duration-200" to="/">Institutional Privacy</Link></li>
<li><Link className="hover:text-secondary-fixed transition-colors duration-200" to="/">Term of Use</Link></li>
<li><Link className="hover:text-secondary-fixed transition-colors duration-200" to="/">Campus Map</Link></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md text-secondary-fixed mb-6">Explore</h5>
<ul className="space-y-4 font-body-md text-body-md text-on-primary-container dark:text-surface-variant">
<li><Link className="hover:text-secondary-fixed transition-colors duration-200" to="/">Accessibility</Link></li>
<li><Link className="hover:text-secondary-fixed transition-colors duration-200" to="/">Work with Us</Link></li>
<li><Link className="hover:text-secondary-fixed transition-colors duration-200" to="/">Admission Process</Link></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md text-secondary-fixed mb-6">Contato</h5>
<p className="font-body-md text-body-md text-on-primary-container dark:text-surface-variant mb-4">
                    Av. da Educação, 1200<br/>
                    São Paulo, SP
                </p>
<div className="flex gap-4">
<Share2 className="cursor-pointer hover:text-secondary-fixed transition-colors" />
<Camera className="cursor-pointer hover:text-secondary-fixed transition-colors" />
<Mail className="cursor-pointer hover:text-secondary-fixed transition-colors" />
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop mt-16 pt-8 border-t border-on-primary/10">
<p className="font-label-md text-label-md text-on-primary-container dark:text-surface-variant text-center md:text-left">
                © 2024 Colégio Henriques. All rights reserved. Providing excellence in education since 1985.
            </p>
</div>
</footer>


      </main>
    </div>
  );
}
