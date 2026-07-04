import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Admissions: React.FC = () => {
  return (
    <div className="font-sans text-on-surface bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative py-24 bg-primary text-on-primary">
          <div className="absolute inset-0 overflow-hidden">
            <img className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1523240795639-2c65a4e37f2a?auto=format&fit=crop&q=80&w=1200" alt="Alunos na sala de aula" />
          </div>
          <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-6 md:px-margin-desktop text-center">
            <h1 className="text-4xl md:text-5xl font-display-lg font-bold mb-6">Admissões</h1>
            <p className="text-lg md:text-xl font-body-lg max-w-2xl mx-auto">
              Junte-se ao Colégio Henriques. Uma jornada de aprendizagem e crescimento, desde a infância até à vida adulta.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 md:px-margin-desktop max-w-[var(--spacing-container-max-width)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display-lg font-bold text-primary mb-6">Processo de Candidatura</h2>
              <ol className="list-decimal pl-6 space-y-4 font-body-lg text-on-surface-variant">
                <li><strong className="text-on-surface">Submissão do Formulário:</strong> Preencha o formulário ao lado com os dados do encarregado de educação e do aluno.</li>
                <li><strong className="text-on-surface">Análise de Documentação:</strong> A nossa equipa analisará o perfil académico e contactará para agendar uma entrevista.</li>
                <li><strong className="text-on-surface">Entrevista:</strong> Uma conversa para conhecermos a família e o aluno, avaliando o alinhamento com os nossos valores.</li>
                <li><strong className="text-on-surface">Decisão e Matrícula:</strong> Receberá a confirmação da admissão e as instruções finais para a matrícula.</li>
              </ol>
            </div>
            
            <div className="bg-surface p-8 rounded-2xl shadow-lg border border-outline-variant/30">
              <h3 className="text-2xl font-headline-md font-bold mb-6">Formulário de Interesse</h3>
              <form className="space-y-4">
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-1">Nome do Encarregado de Educação</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-surface border border-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="João Silva" />
                </div>
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-surface border border-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="joao.silva@exemplo.pt" />
                </div>
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-1">Ano Escolar Pretendido</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-surface border border-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                    <option>Selecione um ano</option>
                    <option>Creche e Jardim de Infância</option>
                    <option>1º Ciclo do Ensino Básico</option>
                    <option>2º e 3º Ciclo</option>
                    <option>Ensino Secundário</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 rounded-lg font-label-md font-semibold transition-colors mt-4">Submeter Pedido</button>
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
