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
        ? { email, password, first_name: firstName, last_name: lastName, role: 'admin' } // Default para testarmos como admin
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
        setSuccessMsg('Conta criada com sucesso! Faça login para continuar.');
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
    <div className="font-sans min-h-screen flex items-center justify-center bg-surface relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md">
        <ArrowLeft className="w-5 h-5" />
        Voltar ao Início
      </Link>

      <div className="relative w-full max-w-md p-8 bg-surface-container-lowest border border-outline-variant/30 shadow-2xl rounded-3xl z-10">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Colégio Henriques Logo" className="h-16 w-auto mx-auto mb-6" />
          <h2 className="text-3xl font-display-lg font-bold text-on-surface">
            {isRegistering ? 'Criar Conta' : 'Portal do Aluno'}
          </h2>
          <p className="mt-2 font-body-md text-on-surface-variant">
            {isRegistering ? 'Registe-se para aceder ao sistema administrativo.' : 'Aceda à sua área pessoal académica.'}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-xl font-body-md border border-error/20 text-center">
            {errorMsg}
          </div>
        )}
        
        {successMsg && (
          <div className="mb-6 p-4 bg-tertiary-container/30 text-on-surface rounded-xl font-body-md border border-tertiary/20 text-center">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-5">
          {isRegistering && (
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-label-md text-on-surface-variant mb-1" htmlFor="firstName">Nome</label>
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
                <label className="block font-label-md text-on-surface-variant mb-1" htmlFor="lastName">Apelido</label>
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
            <label className="block font-label-md text-on-surface-variant mb-1" htmlFor="email">
              Email Institucional
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="aluno@colegiohenriques.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md text-on-surface"
            />
          </div>

          <div>
            <label className="block font-label-md text-on-surface-variant mb-1" htmlFor="password">
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
             <div className="flex items-center justify-between mt-2 font-label-md">
             <div className="flex items-center gap-2">
               <input id="remember" type="checkbox" className="w-4 h-4 rounded border-outline text-primary focus:ring-primary accent-primary" />
               <label htmlFor="remember" className="text-on-surface-variant cursor-pointer">Lembrar-me</label>
             </div>
             <a href="#" className="font-semibold text-primary hover:text-primary-container transition-colors">Esqueceu a senha?</a>
           </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-xl font-label-md font-semibold transition-all transform active:scale-[0.98] shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'A processar...' : isRegistering ? 'Registar Conta' : 'Iniciar Sessão'}
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center font-body-md text-on-surface-variant">
          {isRegistering ? 'Já tem uma conta? ' : 'Não tem acesso? '}
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="font-semibold text-primary hover:text-primary-container underline transition-colors"
          >
            {isRegistering ? 'Faça Login aqui' : 'Solicitar acesso administrativo'}
          </button>
        </div>
      </div>
    </div>
  );
}
