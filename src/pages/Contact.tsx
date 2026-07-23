import { Mail, Map, MapPin, Phone, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/*  Hero Section  */}
        <section className="relative py-16 md:py-20 bg-surface-container-low border-b border-outline-variant/40">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10">
            <div className="max-w-2xl">
              <span className="text-secondary font-label-md text-sm font-semibold tracking-widest uppercase mb-3 block">Fale Connosco</span>
              <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-bold mb-6">Contactos e Localização</h1>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                Quer seja um encarregado de educação, um futuro estudante ou um parceiro institucional, estamos à disposição para esclarecer as suas dúvidas.
              </p>
            </div>
          </div>
        </section>

        {/*  Content Grid  */}
        <section className="py-16 md:py-24">
          <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/*  Contact Form Column  */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-outline-variant/60 rounded-2xl shadow-sm">
                <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-bold mb-8">Envie-nos uma Mensagem</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-md text-sm text-on-surface-variant font-medium" htmlFor="name">Nome Completo</label>
                      <input className="w-full bg-surface border border-outline-variant px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" id="name" placeholder="Manuel António" required type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-sm text-on-surface-variant font-medium" htmlFor="email">Correio Eletrónico (Email)</label>
                      <input className="w-full bg-surface border border-outline-variant px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" id="email" placeholder="manuel.antonio@exemplo.ao" required type="email"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-sm text-on-surface-variant font-medium" htmlFor="subject">Assunto</label>
                    <select className="w-full bg-surface border border-outline-variant px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" id="subject">
                      <option>Informações Gerais</option>
                      <option>Admissões &amp; Matrículas</option>
                      <option>Secretaria Académica</option>
                      <option>Apoio Financeiro &amp; Propinas</option>
                      <option>Recrutamento &amp; Carreiras</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-sm text-on-surface-variant font-medium" htmlFor="message">A Sua Mensagem</label>
                    <textarea className="w-full bg-surface border border-outline-variant px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" id="message" placeholder="Como o podemos ajudar hoje?" required rows={5}></textarea>
                  </div>
                  <button className="bg-primary text-on-primary px-8 py-4 font-label-md font-semibold rounded-xl hover:bg-primary-container transition-all flex items-center gap-3 shadow-md active:scale-[0.99]" type="submit">
                    Enviar Mensagem
                    <Send size={18} />
                  </button>
                </form>
              </div>

              {/*  Info Column  */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-surface p-8 border border-outline-variant/60 rounded-2xl group hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl mb-6 text-on-primary">
                    <MapPin />
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-primary mb-2">O Nosso Campus</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">Avenida da Educação, Talatona<br/>Luanda, Angola</p>
                </div>

                <div className="bg-surface p-8 border border-outline-variant/60 rounded-2xl group hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl mb-6 text-on-primary">
                    <Phone />
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-primary mb-2">Atendimento Telefónico</h3>
                  <div className="space-y-1">
                    <p className="font-body-md text-on-surface-variant">Recepção: +244 923 000 000</p>
                    <p className="font-body-md text-on-surface-variant">Admissões: +244 912 000 000</p>
                  </div>
                </div>

                <div className="bg-surface p-8 border border-outline-variant/60 rounded-2xl group hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl mb-6 text-on-primary">
                    <Mail />
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-primary mb-2">Endereço Eletrónico</h3>
                  <p className="font-body-md text-on-surface-variant">geral@colegiohenriques.ao</p>
                  <p className="font-body-md text-on-surface-variant">admissoes@colegiohenriques.ao</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Map Section  */}
        <section className="w-full h-[400px] bg-surface-container relative border-t border-outline-variant/40">
          <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-high">
            <Map className="text-primary text-6xl mb-4 opacity-70" size={56} />
            <p className="font-headline-md text-xl font-bold text-primary">Mapa Interativo do Campus</p>
            <p className="font-body-md text-on-surface-variant mt-1">Localização: Talatona, Luanda, Angola</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
