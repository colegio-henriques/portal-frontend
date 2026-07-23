import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const endpoint = isRegistering ? '/auth/register' : '/auth/login';
      const body = isRegistering 
        ? { email, password, first_name: firstName, last_name: lastName, role: 'admin' }
        : { email, password };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocorreu um erro no servidor.');
      }

      if (isRegistering) {
        setSuccessMsg('Conta criada com sucesso! Inicie sessão para continuar.');
        setIsRegistering(false);
        setPassword('');
      } else {
        localStorage.setItem('ch_token', data.token);
        localStorage.setItem('ch_user', JSON.stringify(data.user));
        navigate('/dashboard');
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-surface relative overflow-hidden px-4">
      {/* Background Decorative Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm font-semibold">
        <ArrowLeft className="w-5 h-5" />
        Voltar ao Início
      </Link>

      <div className="relative w-full max-w-md p-8 md:p-10 bg-surface-container-lowest border border-outline-variant/60 shadow-2xl rounded-3xl z-10 my-12">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Colégio Henriques Logo" className="h-14 w-auto mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-display-lg font-bold text-primary">
            {isRegistering ? 'Criar Conta' : 'Portal do Estudante'}
          </h2>
          <p className="mt-2 font-body-md text-sm text-on-surface-variant">
            {isRegistering ? 'Registe-se para aceder à plataforma do colégio.' : 'Aceda à sua área pessoal de gestão académica.'}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-xl font-body-md border border-error/20 text-center text-sm">
            {errorMsg}
          </div>
        )}
        
        {successMsg && (
          <div className="mb-6 p-4 bg-tertiary-container/30 text-on-surface rounded-xl font-body-md border border-tertiary/20 text-center text-sm">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-5">
          {isRegistering && (
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="firstName">Nome Próprio</label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md text-on-surface"
                />
              </div>
              <div className="flex-1">
                <label className="block font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="lastName">Apelido</label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md text-on-surface"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="email">
              Correio Eletrónico Institucional
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="estudante@colegiohenriques.ao"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md text-on-surface"
            />
          </div>

          <div>
            <label className="block font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="password">
              Palavra-passe
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md text-on-surface"
            />
          </div>

          {!isRegistering && (
            <div className="flex items-center justify-between mt-2 font-label-md text-xs">
              <div className="flex items-center gap-2">
                <input id="remember" type="checkbox" className="w-4 h-4 rounded border-outline text-primary focus:ring-primary accent-primary" />
                <label htmlFor="remember" className="text-on-surface-variant cursor-pointer">Lembrar-me</label>
              </div>
              <a href="#" className="font-semibold text-primary hover:text-primary-container transition-colors">Esqueceu a palavra-passe?</a>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-xl font-label-md font-semibold transition-all transform active:scale-[0.98] shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'A processar...' : isRegistering ? 'Registar Conta' : 'Iniciar Sessão'}
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center font-body-md text-sm text-on-surface-variant">
          {isRegistering ? 'Já possui conta? ' : 'Não tem acesso? '}
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="font-semibold text-primary hover:text-primary-container underline transition-colors"
          >
            {isRegistering ? 'Iniciar sessão aqui' : 'Solicitar acesso administrativo'}
          </button>
        </div>
      </div>
    </div>
  );
}
