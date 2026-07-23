import { ArrowRight, Eye, Quote, ShieldCheck, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/*  Hero Section  */}
        <section className="py-16 md:py-24 bg-surface-container-low border-b border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="max-w-3xl">
              <span className="font-label-md text-secondary tracking-widest uppercase mb-3 block font-semibold">Institucional</span>
              <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-bold mb-6">Sobre o Colégio Henriques</h1>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                Uma trajetória pautada pelo compromisso com o conhecimento, inovação pedagógica e formação humana integral em Angola.
              </p>
            </div>
          </div>
        </section>

        {/*  Nossa História Section  */}
        <section className="py-20 bg-white">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary font-bold mb-6">A Nossa História</h2>
                <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <p>Fundado em 1985 por visionários da educação, o Colégio Henriques nasceu do desejo de criar um ambiente de aprendizagem que unisse o rigor académico ao desenvolvimento humano integral.</p>
                  <p>Ao longo de quatro décadas, evoluímos para um centro de referência educacional em Angola, mantendo intactos os nossos princípios fundamentais de ética, respeito e curiosidade intelectual.</p>
                  <div className="flex items-center gap-4 py-4 border-l-4 border-secondary-fixed pl-6 bg-surface-container-low rounded-r-xl">
                    <span className="font-display-lg text-4xl md:text-display-lg text-primary font-bold">40+</span>
                    <span className="font-label-md text-label-md text-primary font-semibold leading-tight">Anos de compromisso<br/>com o ensino de elite.</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] border border-outline-variant/40">
                  <img className="w-full h-full object-cover" alt="História do Colégio Henriques" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Missão, Visão e Valores  */}
        <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary font-bold">Identidade Institucional</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">O que nos move e onde pretendemos chegar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/*  Missão  */}
              <div className="p-8 bg-white border border-outline-variant/60 rounded-2xl flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-6">
                  <Target className="text-primary" />
                </div>
                <h3 className="font-headline-md text-2xl text-primary font-bold mb-4">Missão</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Promover uma educação de excelência que potencialize as capacidades individuais, preparando estudantes para atuar com autonomia e responsabilidade na sociedade.</p>
              </div>
              {/*  Visão  */}
              <div className="p-8 bg-primary text-on-primary rounded-2xl flex flex-col h-full shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-on-primary-fixed flex items-center justify-center mb-6">
                  <Eye className="text-secondary-fixed" />
                </div>
                <h3 className="font-headline-md text-2xl text-white font-bold mb-4">Visão</h3>
                <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">Ser reconhecido como o colégio líder em inovação pedagógica e formação de lideranças éticas em Angola e na região até 2030.</p>
              </div>
              {/*  Valores  */}
              <div className="p-8 bg-secondary-container/40 border border-outline-variant/60 rounded-2xl flex flex-col h-full shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-on-secondary-fixed flex items-center justify-center mb-6">
                  <ShieldCheck className="text-secondary-fixed-dim" />
                </div>
                <h3 className="font-headline-md text-2xl text-on-secondary-fixed font-bold mb-4">Valores</h3>
                <ul className="space-y-3 font-body-md text-body-md text-on-secondary-fixed-variant">
                  <li className="flex items-center gap-2 font-medium"><span className="w-2 h-2 bg-primary rounded-full"></span> Integridade e Ética</li>
                  <li className="flex items-center gap-2 font-medium"><span className="w-2 h-2 bg-primary rounded-full"></span> Rigor Científico</li>
                  <li className="flex items-center gap-2 font-medium"><span className="w-2 h-2 bg-primary rounded-full"></span> Respeito à Diversidade</li>
                  <li className="flex items-center gap-2 font-medium"><span className="w-2 h-2 bg-primary rounded-full"></span> Inovação Constante</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  Mensagem da Direção  */}
        <section className="py-20 bg-white">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md mb-6 border border-outline-variant/40">
                  <img className="w-full h-full object-cover" alt="Diretor Geral" src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=1200"/>
                </div>
                <h4 className="font-headline-md text-xl font-bold text-primary">Dr. Henrique Silva</h4>
                <p className="font-label-md text-sm text-on-surface-variant font-medium">Director Geral &amp; Fundador</p>
              </div>
              <div className="lg:col-span-3">
                <Quote className="text-primary text-5xl opacity-20 block mb-4" />
                <h2 className="font-headline-lg text-3xl text-primary font-bold mb-6">Mensagem da Direcção</h2>
                <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 italic leading-relaxed">
                  <p>"Educar não é apenas transmitir conhecimento, mas despertar em cada aluno a vontade de aprender e a capacidade de transformar a sua realidade. No Colégio Henriques, acreditamos que cada criança e jovem carrega um potencial infinito."</p>
                  <p>"A nossa infraestrutura, o nosso corpo docente e a nossa metodologia são ferramentas para a construção de um percurso académico sólido que prepara não apenas para exames, mas para a vida."</p>
                  <p>"Sejam bem-vindos a uma instituição onde a excelência é o nosso ponto de partida, e o seu sucesso é o nosso maior objetivo."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Infrastructure Gallery  */}
        <section className="py-20 bg-background border-t border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-lg text-3xl text-primary font-bold">A Nossa Infraestrutura</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Espaços projetados para o máximo aproveitamento pedagógico.</p>
              </div>
              <Link to="/contactos" className="hidden md:flex items-center gap-2 text-primary font-label-md font-semibold hover:underline">
                Ver Campus Completo <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden relative group h-64 border border-outline-variant/40 shadow-sm">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Laboratório" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-label-md text-sm font-semibold">Laboratórios Multidisciplinares</div>
              </div>
              <div className="rounded-2xl overflow-hidden relative group h-64 border border-outline-variant/40 shadow-sm">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Biblioteca" src="https://images.unsplash.com/photo-1546410531-bea5a1de47d2?auto=format&fit=crop&q=80&w=1200"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-label-md text-sm font-semibold">Biblioteca Central</div>
              </div>
              <div className="rounded-2xl overflow-hidden relative group h-64 border border-outline-variant/40 shadow-sm">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Complexo Desportivo" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-label-md text-sm font-semibold">Complexo Desportivo</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
