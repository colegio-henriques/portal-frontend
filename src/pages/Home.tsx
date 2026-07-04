

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <main>
        
{/*  TopNavBar (Large)  */}
<header className="docked full-width top-0 sticky z-50 bg-surface border-b border-outline-variant">
<div className="max-w-container-max-width mx-auto flex justify-between items-center px-6 md:px-margin-desktop py-4">
<div className="flex items-center gap-4">
<img alt="Colégio Henriques Logo" className="h-10 w-auto" src="/logo.png"/>
<span className="font-display-lg text-headline-md font-bold text-primary hidden sm:block">Colégio Henriques</span>
</div>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-primary border-b-2 border-primary font-semibold pb-1 font-label-md text-label-md" href="#">Início</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#">Sobre Nós</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#">Níveis Académicos</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#">Admissões</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#">Contactos</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">
                    Student Portal
                </button>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">language</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">search</span>
<span className="material-symbols-outlined lg:hidden cursor-pointer" id="mobile-menu-toggle">menu</span>
</div>
</div>
</div>
</header>
{/*  Hero Section  */}
<section className="relative w-full h-[85vh] flex items-center overflow-hidden bg-surface-dim">
{/*  Background Image with Overlay  */}
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10"></div>
<img className="w-full h-full object-cover" data-alt="A cinematic, wide-angle shot of a bright, contemporary classroom at Colégio Henriques. Students are engaged in a collaborative project using high-end laptops and tactile learning tools. The architecture features large floor-to-ceiling windows letting in soft, natural daylight. The atmosphere is academic, professional, and inspiring, with a clean corporate aesthetic and high-key lighting." src="/logo.png"/>
</div>
{/*  Content  */}
<div className="relative z-20 max-w-container-max-width mx-auto px-6 md:px-margin-desktop w-full">
<div className="max-w-2xl text-on-primary animate-fade-in">
<h1 className="font-display-lg text-display-lg mb-6 leading-tight">
                    Tradição que Inspira,<br/><span className="text-secondary-fixed">Inovação</span> que Transforma.
                </h1>
<p className="font-body-lg text-body-lg mb-10 opacity-90 leading-relaxed">
                    No Colégio Henriques, preparamos mentes brilhantes para os desafios globais através de uma educação humanista e tecnológica de excelência.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md rounded font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2 group">
                        Conheça nosso Campus
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<button className="px-8 py-4 border border-on-primary text-on-primary font-label-md text-label-md rounded hover:bg-on-primary hover:text-primary transition-all flex items-center justify-center">
                        Processo Seletivo 2025
                    </button>
</div>
</div>
</div>
</section>
{/*  Nossos Valores (Bento-style Grid)  */}
<section className="py-24 bg-surface-bright">
<div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
<div className="text-center mb-16">
<span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Fundamentos</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Nossos Valores</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Excellence  */}
<div className="p-10 bg-white border border-outline-variant hover:border-primary transition-all duration-300 group">
<div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-primary">Excellence</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Compromisso com o rigor acadêmico e o desenvolvimento intelectual contínuo de cada estudante em todas as etapas escolares.
                    </p>
</div>
{/*  Innovation  */}
<div className="p-10 bg-white border border-outline-variant hover:border-primary transition-all duration-300 group">
<div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-primary">Innovation</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Metodologias ativas e tecnologia de ponta integradas ao currículo para fomentar a criatividade e a resolução de problemas reais.
                    </p>
</div>
{/*  Humanism  */}
<div className="p-10 bg-white border border-outline-variant hover:border-primary transition-all duration-300 group">
<div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-primary">Humanism</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Foco no desenvolvimento socioemocional, empatia e ética, formando cidadãos conscientes e responsáveis pela sociedade.
                    </p>
</div>
</div>
</div>
</section>
{/*  News & Events (Asymmetric Layout)  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
<div className="asymmetric-grid">
{/*  Latest News  */}
<div>
<div className="flex justify-between items-end mb-10">
<div>
<span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-2 block">Atualidades</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Últimas Notícias</h2>
</div>
<a className="text-primary font-semibold flex items-center gap-1 group" href="#">
                            Ver tudo
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
<div className="space-y-6">
{/*  Main News Item  */}
<div className="group cursor-pointer">
<div className="overflow-hidden rounded-lg mb-4">
<img className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-quality editorial photograph showing students participating in a national robotics competition. The focus is on a group of young learners collaborating over a complex mechanical project with expressions of concentration and joy. The lighting is crisp and modern, reflecting the technological theme. The background is a blurred high-tech lab environment." src="/logo.png"/>
</div>
<span className="font-label-md text-label-md text-secondary uppercase">Competição Acadêmica</span>
<h4 className="font-headline-md text-headline-md mt-2 group-hover:text-primary transition-colors">Alunos do Henriques conquistam ouro na Olimpíada Nacional de Robótica</h4>
<p className="mt-2 text-on-surface-variant">Pelo terceiro ano consecutivo, nossa equipe de tecnologia destaca-se no cenário nacional com projetos inovadores...</p>
</div>
{/*  List News Item  */}
<div className="flex gap-4 items-start border-t border-outline-variant pt-6 group cursor-pointer">
<div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden">
<img className="w-full h-full object-cover" data-alt="An atmospheric photo of the school library during a quiet study session. Warm lighting highlights neat rows of academic books and students reading at ergonomic wooden tables. The professional and serene mood emphasizes intellectual focus and academic excellence in a corporate-educational setting." src="/logo.png"/>
</div>
<div>
<span className="font-caption text-caption text-on-surface-variant">12 de Outubro, 2024</span>
<h5 className="font-label-md text-label-md font-bold group-hover:text-primary transition-colors leading-snug">Novas obras raras chegam à nossa biblioteca central</h5>
</div>
</div>
</div>
</div>
{/*  Events (Stick Column)  */}
<div className="bg-primary p-10 rounded-xl text-on-primary self-start">
<h3 className="font-headline-md text-headline-md mb-8 flex items-center gap-2">
<span className="material-symbols-outlined">calendar_month</span>
                        Próximos Eventos
                    </h3>
<div className="space-y-8">
<div className="flex gap-6 border-b border-on-primary/20 pb-6">
<div className="flex flex-col items-center justify-center bg-white text-primary px-4 py-2 rounded min-w-[70px]">
<span className="text-[20px] font-bold">25</span>
<span className="text-[12px] font-bold uppercase">OUT</span>
</div>
<div>
<h5 className="font-label-md text-label-md font-bold mb-1">Open Day 2025</h5>
<p className="text-[14px] opacity-80">Visita guiada para novos pais e alunos das 09h às 17h.</p>
</div>
</div>
<div className="flex gap-6 border-b border-on-primary/20 pb-6">
<div className="flex flex-col items-center justify-center bg-white text-primary px-4 py-2 rounded min-w-[70px]">
<span className="text-[20px] font-bold">03</span>
<span className="text-[12px] font-bold uppercase">NOV</span>
</div>
<div>
<h5 className="font-label-md text-label-md font-bold mb-1">Workshop: IA na Educação</h5>
<p className="text-[14px] opacity-80">Palestra com Dr. Marcus Silva sobre o futuro do aprendizado.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex flex-col items-center justify-center bg-white text-primary px-4 py-2 rounded min-w-[70px]">
<span className="text-[20px] font-bold">15</span>
<span className="text-[12px] font-bold uppercase">NOV</span>
</div>
<div>
<h5 className="font-label-md text-label-md font-bold mb-1">Festival Cultural</h5>
<p className="text-[14px] opacity-80">Apresentações de arte, música e teatro dos nossos alunos.</p>
</div>
</div>
</div>
<button className="w-full mt-10 py-3 border border-on-primary rounded font-label-md text-label-md hover:bg-on-primary hover:text-primary transition-all">
                        Ver Calendário Completo
                    </button>
</div>
</div>
</div>
</section>
{/*  Final CTA Section  */}
<section className="py-24 bg-surface overflow-hidden relative">
<div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10 text-center">
<h2 className="font-display-lg text-headline-lg mb-6 text-primary">Inicie a Jornada do seu Filho Conosco</h2>
<p className="max-w-2xl mx-auto font-body-lg text-body-lg text-on-surface-variant mb-12">
                As inscrições para o processo seletivo de 2025 já estão abertas. Venha fazer parte de uma comunidade educativa de elite.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="px-10 py-4 bg-primary text-on-primary rounded font-bold hover:bg-on-primary-fixed transition-all shadow-sm">
                    Agendar Visita
                </button>
<button className="px-10 py-4 border-2 border-primary text-primary rounded font-bold hover:bg-primary hover:text-on-primary transition-all">
                    Baixar Edital 2025
                </button>
</div>
</div>
{/*  Decorative subtle pattern  */}
<div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
<img className="w-[600px] h-auto" src="/logo.png"/>
</div>
</section>
{/*  Footer  */}
<footer className="bg-primary dark:bg-on-primary-fixed w-full py-16 px-6 md:px-margin-desktop">
<div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary">
{/*  Brand Column  */}
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<img alt="Footer Logo" className="h-10 w-auto invert brightness-0" src="/logo.png"/>
<span className="font-display-lg text-headline-md">Henriques</span>
</div>
<p className="font-body-md text-body-md opacity-80 leading-relaxed mb-6">
                    Proporcionando excelência em educação desde 1985. Formando líderes com base sólida e valores humanos.
                </p>
<div className="flex gap-4">
<span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed transition-colors">face_nod</span>
<span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed transition-colors">play_circle</span>
<span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed transition-colors">share</span>
</div>
</div>
{/*  Links Column 1  */}
<div>
<h6 className="font-label-md text-label-md font-bold mb-6 uppercase tracking-wider">Institucional</h6>
<ul className="space-y-4">
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Institutional Privacy</a></li>
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Term of Use</a></li>
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Campus Map</a></li>
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Accessibility</a></li>
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Work with Us</a></li>
</ul>
</div>
{/*  Links Column 2  */}
<div>
<h6 className="font-label-md text-label-md font-bold mb-6 uppercase tracking-wider">Acadêmico</h6>
<ul className="space-y-4">
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Ensino Fundamental</a></li>
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Ensino Médio</a></li>
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Atividades Extracurriculares</a></li>
<li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors font-body-md text-body-md" href="#">Intercâmbio</a></li>
</ul>
</div>
{/*  Contact/Newsletter Column  */}
<div>
<h6 className="font-label-md text-label-md font-bold mb-6 uppercase tracking-wider">Contato</h6>
<p className="font-body-md text-body-md opacity-80 mb-4 flex items-start gap-2">
<span className="material-symbols-outlined text-[20px]">location_on</span>
                    Av. da Educação, 1985<br/>Bairro Acadêmico, SP
                </p>
<p className="font-body-md text-body-md opacity-80 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">phone</span>
                    +55 (11) 3456-7890
                </p>
<div className="mt-4">
<p className="text-[12px] font-bold mb-2">NEWSLETTER</p>
<div className="flex">
<input className="bg-primary-container border-none text-white placeholder-on-primary-container px-4 py-2 rounded-l w-full focus:ring-1 focus:ring-secondary-fixed" placeholder="Seu e-mail" type="email"/>
<button className="bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-r">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto border-t border-on-primary/10 mt-16 pt-8 text-center text-on-primary-container text-[14px]">
            © 2024 Colégio Henriques. All rights reserved. Providing excellence in education since 1985.
        </div>
</footer>


      </main>
    </div>
  );
}
