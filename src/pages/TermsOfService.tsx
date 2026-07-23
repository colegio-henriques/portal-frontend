import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-surface-container-low border-b border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center max-w-3xl">
            <span className="font-label-md text-secondary tracking-widest uppercase mb-3 block font-semibold">Legal &amp; Termos</span>
            <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-bold mb-4">Termos de Serviço</h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              Última atualização: 23 de Julho de 2026 • Colégio Henriques (Luanda, Angola)
            </p>
          </div>
        </section>

        <section className="py-16 max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-outline-variant/60 shadow-sm space-y-8 font-body-md text-on-surface-variant leading-relaxed">
            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar o portal institucional e os serviços online do <strong>Colégio Henriques</strong> (acessíveis através do domínio <code>colegiohenriques.ao</code>), o utilizador concorda expressamente em cumprir e vincular-se aos presentes Termos de Serviço e a todas as leis e regulamentos aplicáveis na República de Angola.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">2. Condições de Acesso ao Portal do Estudante</h2>
              <p className="mb-3">
                O acesso à área reservada e ao painel de gestão do portal exige autenticação obrigatória via <strong>Google Workspace</strong> corporativo do colégio:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Apenas contas autorizadas com o domínio <code>@colegiohenriques.ao</code> têm permissão para iniciar sessão.</li>
                <li>O utilizador é inteiramente responsável pela salvaguarda e utilização correta da sua conta e acesso.</li>
                <li>Qualquer tentativa de acesso não autorizado, manipulação de dados ou uso indevido resultará na suspensão imediata da conta e em medidas disciplinares ou legais.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo disponibilizado neste portal, incluindo marcas, logótipos, textos, imagens, vídeos, elementos gráficos e código-fonte, é propriedade exclusiva do Colégio Henriques ou de terceiros devidamente licenciados. É estritamente proibida a cópia, reprodução ou distribuição não autorizada do material sem consentimento prévio por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">4. Utilização Aceitável</h2>
              <p className="mb-3">Os utilizadores comprometem-se a não utilizar a plataforma para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publicar ou transmitir conteúdos ilegais, difamatórios, ofensivos ou que violem os direitos de terceiros.</li>
                <li>Interferir na integridade ou no desempenho dos servidores e serviços do ecossistema tecnológico do colégio.</li>
                <li>Submeter formulários de candidatura com dados falsos ou fraudulentos.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">5. Limitação de Responsabilidade</h2>
              <p>
                O Colégio Henriques envida todos os esforços para manter a plataforma continuamente operacional e atualizada. No entanto, não se responsabiliza por eventuais interrupções temporárias decorrentes de manutenção técnica, falhas de conectividade externas ou eventos de força maior.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-4">6. Alterações aos Termos</h2>
              <p>
                O Colégio Henriques reserva-se o direito de atualizar ou modificar estes Termos de Serviço a qualquer momento. As alterações entram em vigor imediatamente após a sua publicação nesta página. Recomenda-se a revisão periódica deste documento.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
