import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Admissions: React.FC = () => {
  return (
    <div className="font-sans text-on-surface bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative py-20 bg-primary text-on-primary overflow-hidden">
          <div className="absolute inset-0">
            <img className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1523240795639-2c65a4e37f2a?auto=format&fit=crop&q=80&w=1200" alt="Alunos na sala de aula" />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="relative z-10 max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center">
            <h1 className="text-4xl md:text-5xl font-display-lg font-bold mb-6 text-white">Processo de Admissão</h1>
            <p className="text-lg md:text-xl font-body-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
              Junte-se ao Colégio Henriques. Uma jornada de aprendizagem e crescimento, desde a infância até à vida adulta.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-margin-desktop max-w-container-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="font-label-md text-secondary font-semibold uppercase tracking-wider block mb-2">Candidatura 2026/2027</span>
              <h2 className="text-3xl font-display-lg font-bold text-primary mb-6">Etapas da Candidatura</h2>
              <ol className="space-y-6 font-body-lg text-on-surface-variant">
                <li className="flex gap-4 p-4 rounded-xl bg-surface border border-outline-variant/50">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <strong className="text-on-surface block text-base font-semibold mb-1">Submissão do Formulário:</strong>
                    <span>Preencha o formulário ao lado com os dados do encarregado de educação e do candidato.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-surface border border-outline-variant/50">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <strong className="text-on-surface block text-base font-semibold mb-1">Análise de Documentação:</strong>
                    <span>A nossa equipa analisará o perfil académico e contactará para agendar o teste de diagnóstico e entrevista.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-surface border border-outline-variant/50">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <strong className="text-on-surface block text-base font-semibold mb-1">Entrevista e Avaliação:</strong>
                    <span>Uma conversa para conhecermos a família e o aluno, avaliando o alinhamento com os nossos valores.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-surface border border-outline-variant/50">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">4</span>
                  <div>
                    <strong className="text-on-surface block text-base font-semibold mb-1">Confirmação e Matrícula:</strong>
                    <span>Receberá a confirmação da admissão e as instruções finais para efetuar a matrícula.</span>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-outline-variant/60">
              <h3 className="text-2xl font-headline-md font-bold mb-6 text-primary">Formulário de Interesse</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-label-md text-sm text-on-surface-variant mb-1.5 font-medium">Nome do Encarregado de Educação</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface font-body-md" placeholder="Ex: Manuel António" />
                </div>
                <div>
                  <label className="block font-label-md text-sm text-on-surface-variant mb-1.5 font-medium">Correio Eletrónico (Email)</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface font-body-md" placeholder="manuel.antonio@exemplo.ao" />
                </div>
                <div>
                  <label className="block font-label-md text-sm text-on-surface-variant mb-1.5 font-medium">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface font-body-md" placeholder="+244 923 000 000" />
                </div>
                <div>
                  <label className="block font-label-md text-sm text-on-surface-variant mb-1.5 font-medium">Ano Lectivo Pretendido</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface font-body-md">
                    <option>Selecione o nível académico</option>
                    <option>Iniciação &amp; Jardim de Infância</option>
                    <option>Ensino Primário (1ª à 6ª Classe)</option>
                    <option>Iº Ciclo do Ensino Secundário (7ª à 9ª Classe)</option>
                    <option>IIº Ciclo do Ensino Secundário (10ª à 12ª Classe)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-container text-on-primary py-4 rounded-xl font-label-md font-semibold transition-all shadow-md mt-4 active:scale-[0.99]">
                  Submeter Candidatura
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
