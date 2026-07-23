import { Link } from 'react-router-dom';
import { ArrowRight, Award, Calendar, Lightbulb, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/*  Hero Section  */}
        <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-surface-dim">
          {/*  Background Image with Overlay  */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10"></div>
            <img className="w-full h-full object-cover" alt="Alunos do Colégio Henriques" src="https://images.unsplash.com/photo-1427504361089-06b943849749?auto=format&fit=crop&q=80&w=1200"/>
          </div>
          {/*  Content  */}
          <div className="relative z-20 max-w-container-max-width mx-auto px-6 md:px-margin-desktop w-full py-20">
            <div className="max-w-2xl text-on-primary">
              <span className="inline-block px-3.5 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                Aplicação Oficial • Colégio Henriques
              </span>
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-display-lg mb-6 leading-tight font-bold">
                Plataforma de Gestão Escolar do Colégio Henriques
              </h1>
              <p className="font-body-lg text-lg md:text-body-lg mb-8 opacity-90 leading-relaxed">
                Este portal público permite consultar notícias institucionais, informações de admissão, oferta formativa e aceder ao sistema de gestão escolar integrado com autenticação corporativa Google Workspace (exclusivo para contas @colegiohenriques.ao).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/sobre-nos" className="px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md rounded-lg font-bold hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group shadow-md">
                  Conheça o nosso Campus
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/admissoes" className="px-8 py-4 border-2 border-on-primary text-on-primary font-label-md text-label-md rounded-lg font-bold hover:bg-on-primary hover:text-primary transition-all flex items-center justify-center">
                  Processo Seletivo 2026/2027
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*  Nossos Valores (Bento-style Grid)  */}
        <section className="py-24 bg-surface-bright">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="text-center mb-16">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block font-semibold">Fundamentos</span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary font-bold">Os Nossos Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/*  Excellence  */}
              <div className="p-8 md:p-10 bg-white border border-outline-variant/60 rounded-2xl hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform">
                  <Award className="text-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary font-bold">Excelência</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Compromisso com o rigor académico e o desenvolvimento intelectual contínuo de cada estudante em todas as etapas escolares.
                </p>
              </div>
              {/*  Innovation  */}
              <div className="p-8 md:p-10 bg-white border border-outline-variant/60 rounded-2xl hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform">
                  <Lightbulb className="text-secondary" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary font-bold">Inovação</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Metodologias ativas e tecnologia de ponta integradas ao currículo para fomentar a criatividade e a resolução de problemas reais.
                </p>
              </div>
              {/*  Humanism  */}
              <div className="p-8 md:p-10 bg-white border border-outline-variant/60 rounded-2xl hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform">
                  <Users className="text-tertiary" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary font-bold">Humanismo</h3>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/*  Latest News  */}
              <div className="lg:col-span-2">
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-2 block font-semibold">Atualidades</span>
                    <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary font-bold">Últimas Notícias</h2>
                  </div>
                  <Link className="text-primary font-semibold flex items-center gap-1 group" to="/sobre-nos">
                    Ver tudo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="space-y-6">
                  {/*  Main News Item  */}
                  <div className="group cursor-pointer bg-white p-6 rounded-2xl border border-outline-variant/50 shadow-sm">
                    <div className="overflow-hidden rounded-xl mb-4 h-[260px]">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Olimpíada de Robótica" src="https://images.unsplash.com/photo-1523240795639-2c65a4e37f2a?auto=format&fit=crop&q=80&w=1200"/>
                    </div>
                    <span className="font-label-md text-xs font-bold text-secondary uppercase tracking-wider">Competição Académica</span>
                    <h4 className="font-headline-md text-xl md:text-headline-md font-bold mt-2 group-hover:text-primary transition-colors">Alunos do Henriques conquistam ouro na Olimpíada Nacional de Robótica</h4>
                    <p className="mt-2 text-on-surface-variant text-sm md:text-base leading-relaxed">Pelo terceiro ano consecutivo, a nossa equipa de tecnologia destaca-se no cenário nacional com projetos inovadores...</p>
                  </div>
                  {/*  List News Item  */}
                  <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-outline-variant/50 group cursor-pointer">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Biblioteca Central" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"/>
                    </div>
                    <div>
                      <span className="font-caption text-xs text-on-surface-variant">12 de Outubro, 2025</span>
                      <h5 className="font-label-md text-base font-bold group-hover:text-primary transition-colors leading-snug mt-1">Novas obras de referência chegam à nossa biblioteca central</h5>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Events Column  */}
              <div className="bg-primary p-8 md:p-10 rounded-2xl text-on-primary shadow-xl">
                <h3 className="font-headline-md text-2xl font-bold mb-8 flex items-center gap-3">
                  <Calendar className="text-secondary-fixed" />
                  Próximos Eventos
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 border-b border-on-primary/20 pb-6">
                    <div className="flex flex-col items-center justify-center bg-white text-primary px-3 py-2 rounded-xl min-w-[64px]">
                      <span className="text-xl font-bold">25</span>
                      <span className="text-xs font-bold uppercase">OUT</span>
                    </div>
                    <div>
                      <h5 className="font-label-md font-bold mb-1 text-white">Dia Aberto (Open Day)</h5>
                      <p className="text-xs opacity-80 leading-relaxed">Visita guiada para encarregados de educação e novos alunos.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-on-primary/20 pb-6">
                    <div className="flex flex-col items-center justify-center bg-white text-primary px-3 py-2 rounded-xl min-w-[64px]">
                      <span className="text-xl font-bold">03</span>
                      <span className="text-xs font-bold uppercase">NOV</span>
                    </div>
                    <div>
                      <h5 className="font-label-md font-bold mb-1 text-white">Workshop: IA na Educação</h5>
                      <p className="text-xs opacity-80 leading-relaxed">Palestra com docentes sobre o futuro da aprendizagem.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center justify-center bg-white text-primary px-3 py-2 rounded-xl min-w-[64px]">
                      <span className="text-xl font-bold">15</span>
                      <span className="text-xs font-bold uppercase">NOV</span>
                    </div>
                    <div>
                      <h5 className="font-label-md font-bold mb-1 text-white">Festival Cultural</h5>
                      <p className="text-xs opacity-80 leading-relaxed">Apresentações de arte, música e teatro dos nossos alunos.</p>
                    </div>
                  </div>
                </div>
                <Link to="/contactos" className="w-full mt-8 py-3.5 border border-on-primary/60 rounded-xl font-label-md text-sm font-semibold hover:bg-on-primary hover:text-primary transition-all inline-block text-center">
                  Ver Calendário Completo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*  Final CTA Section  */}
        <section className="py-24 bg-surface overflow-hidden relative border-t border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10 text-center">
            <h2 className="font-display-lg text-3xl md:text-headline-lg font-bold mb-6 text-primary">Inicie a Jornada do seu Filho Connosco</h2>
            <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-on-surface-variant mb-10">
              As candidaturas para o processo seletivo de 2026/2027 já se encontram abertas. Venha fazer parte de uma comunidade educativa de excelência.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/admissoes" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-all shadow-md">
                Candidatar Agora
              </Link>
              <Link to="/contactos" className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-all">
                Agendar Visita ao Campus
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
