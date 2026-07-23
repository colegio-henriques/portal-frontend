import { Link } from 'react-router-dom';
import { ArrowRight, Baby, BookOpen, FlaskConical, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AcademicLevels() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/*  Hero Section  */}
        <section className="py-16 md:py-20 bg-surface-container-low border-b border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center max-w-3xl">
            <span className="font-label-md text-secondary tracking-widest uppercase mb-3 block font-semibold">Oferta Pedagógica</span>
            <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-bold mb-6">Níveis Académicos</h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              Oferecemos uma formação integral desde a infância até à preparação para o ensino superior, adaptada ao sistema educativo nacional e internacional.
            </p>
          </div>
        </section>

        {/*  Academic Levels Grid (Bento Style)  */}
        <section className="py-20 max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/*  Educação Infantil  */}
            <div className="group flex flex-col bg-surface-container-lowest border border-outline-variant/60 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6 text-secondary transition-transform group-hover:scale-110">
                <Baby size={24} />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary mb-4">Iniciação &amp; Infantil</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Um ambiente lúdico e seguro onde o brincar é a base para as primeiras descobertas. Focamos no desenvolvimento socioemocional e cognitivo.
              </p>
              <Link className="inline-flex items-center gap-2 font-label-md font-semibold text-secondary group-hover:gap-3 transition-all" to="/admissoes">
                Candidatura <ArrowRight size={16} />
              </Link>
            </div>

            {/*  Ensino Primário  */}
            <div className="group flex flex-col bg-surface-container-lowest border border-outline-variant/60 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-6 text-primary transition-transform group-hover:scale-110">
                <BookOpen size={24} />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary mb-4">Ensino Primário</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Consolidação da alfabetização e desenvolvimento do raciocínio lógico. Estimulamos a autonomia e a curiosidade intelectual num currículo diversificado.
              </p>
              <Link className="inline-flex items-center gap-2 font-label-md font-semibold text-secondary group-hover:gap-3 transition-all" to="/admissoes">
                Candidatura <ArrowRight size={16} />
              </Link>
            </div>

            {/*  Iº Ciclo do Ensino Secundário  */}
            <div className="group flex flex-col bg-surface-container-lowest border border-outline-variant/60 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center mb-6 text-tertiary transition-transform group-hover:scale-110">
                <FlaskConical size={24} />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary mb-4">Iº Ciclo Secundário</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Fase de transição com foco no aprofundamento das competências críticas. Incentivamos a investigação científica e a consciência social sólida.
              </p>
              <Link className="inline-flex items-center gap-2 font-label-md font-semibold text-secondary group-hover:gap-3 transition-all" to="/admissoes">
                Candidatura <ArrowRight size={16} />
              </Link>
            </div>

            {/*  IIº Ciclo do Ensino Secundário  */}
            <div className="group flex flex-col bg-surface-container-lowest border border-outline-variant/60 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center mb-6 text-on-secondary-fixed transition-transform group-hover:scale-110">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary mb-4">IIº Ciclo Secundário</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Preparação rigorosa para os exames de acesso universitário e para o futuro profissional. Cursos de Ciências Físicas e Biológicas, Económico-Jurídicas e Tecnologia.
              </p>
              <Link className="inline-flex items-center gap-2 font-label-md font-semibold text-secondary group-hover:gap-3 transition-all" to="/admissoes">
                Candidatura <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/*  Featured Curriculum Image  */}
        <section className="py-12 max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="relative overflow-hidden rounded-3xl min-h-[380px] flex items-center shadow-xl">
            <img className="absolute inset-0 w-full h-full object-cover" alt="Metodologia de Aprendizagem" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200"/>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
            <div className="relative z-10 max-w-md text-on-primary p-8 md:p-12">
              <h2 className="font-headline-lg text-3xl font-bold mb-4">A Nossa Metodologia</h2>
              <p className="font-body-md text-body-md mb-8 opacity-90 leading-relaxed">Aprendizado centrado no estudante, onde a tecnologia é ferramenta e o conhecimento é a ponte para um futuro promissor.</p>
              <Link to="/contactos" className="inline-block bg-secondary-fixed text-on-secondary-fixed px-8 py-3.5 rounded-xl font-label-md font-bold hover:bg-secondary hover:text-white transition-all shadow-md">
                Agende uma Visita
              </Link>
            </div>
          </div>
        </section>

        {/*  Values Section  */}
        <section className="py-20 border-t border-outline-variant/40 mt-12 bg-white">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-label-md text-sm font-bold text-secondary uppercase tracking-wider mb-4">Tradição</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Desde 1985, mantendo os mais altos padrões de ensino e ética, formando gerações de cidadãos exemplares.</p>
              </div>
              <div>
                <h4 className="font-label-md text-sm font-bold text-secondary uppercase tracking-wider mb-4">Inovação</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Currículo reforçado, laboratórios modernos e preparação focada nos desafios contemporâneos.</p>
              </div>
              <div>
                <h4 className="font-label-md text-sm font-bold text-secondary uppercase tracking-wider mb-4">Comunidade</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Uma escola feita por pessoas e para pessoas. Valorizamos a proximidade entre a família e a instituição.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
