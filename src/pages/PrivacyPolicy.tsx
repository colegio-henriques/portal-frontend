import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-surface-container-low border-b border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center max-w-3xl">
            <span className="font-label-md text-secondary tracking-widest uppercase mb-3 block font-semibold">Legal &amp; Privacidade</span>
            <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-bold mb-4">Política de Privacidade</h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              Última atualização: 23 de Julho de 2026 • Colégio Henriques (Luanda, Angola)
            </p>
          </div>
        </section>

        <section className="py-16 max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-outline-variant/60 shadow-sm space-y-8 font-body-md text-on-surface-variant leading-relaxed">
            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">1. Introdução</h2>
              <p>
                O <strong>Colégio Henriques</strong> (disponível através do domínio oficial <code>colegiohenriques.ao</code>) compromete-se a proteger a privacidade e os dados pessoais dos seus alunos, encarregados de educação, corpo docente e visitantes do portal institucional. Esta política descreve como recolhemos, utilizamos e salvaguardamos a sua informação pessoal, em conformidade com a legislação aplicável na República de Angola.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">2. Dados Pessoais Recolhidos</h2>
              <p className="mb-3">Recolhemos informação pessoal apenas para fins educacionais, administrativos e operacionais legítimos, incluindo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados de Identificação:</strong> Nome completo, data de nascimento, género, número de documento de identificação (BI/Passaporte).</li>
                <li><strong>Dados de Contacto:</strong> Correio eletrónico (email), número de telefone/WhatsApp, endereço residencial.</li>
                <li><strong>Dados de Autenticação Corporativa:</strong> Credenciais do Google Workspace (contas <code>@colegiohenriques.ao</code>) utilizadas no SSO.</li>
                <li><strong>Dados Académicos e de Frequência:</strong> Notas, pautas, histórico escolar, assiduidade e declarações oficiais.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">3. Finalidade do Tratamento dos Dados</h2>
              <p className="mb-3">A informação recolhida é utilizada estritamente para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestão do processo de candidaturas, admissões e matrículas escolares.</li>
                <li>Prestação de serviços educativos, acompanhamento pedagógico e emissão de documentos oficiais.</li>
                <li>Processamento de pagamentos de propinas e taxas académicas.</li>
                <li>Envio de notificações de emergência, avisos pedagógicos e boletins informativos.</li>
                <li>Garantia da segurança da comunidade e gestão de acessos à plataforma digital.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">4. Partilha e Proteção de Informação</h2>
              <p>
                O Colégio Henriques não vende, aluga ou cede dados pessoais a terceiros para fins comerciais. A informação poderá ser partilhada apenas com entidades governamentais do sector da educação (quando exigido por lei) ou com fornecedores de infraestrutura tecnológica (como a Google Cloud Platform para suporte ao ecossistema digital da instituição), sob rigorosos acordos de confidencialidade e segurança.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais elevadas, como encriptação de dados em trânsito (HTTPS/TLS), autenticação federada com suporte Google OAuth2 restrito e permissões baseadas em funções (RBAC), prevenindo acessos não autorizados, perdas ou alterações dos dados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">6. Direitos do Titular dos Dados</h2>
              <p>
                Os encarregados de educação e utilizadores registados têm o direito de aceder, retificar ou solicitar a atualização dos seus dados pessoais. Para exercer estes direitos, entre em contacto com a nossa Secretaria Geral através do correio eletrónico <code>privacidade@colegiohenriques.ao</code>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
