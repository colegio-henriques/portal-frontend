import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    setIsLoading(true);
    setErrorMsg('');

    try {
      if (!credentialResponse.credential) {
        throw new Error('Não foi possível obter a credencial do Google.');
      }

      const API_BASE = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_BASE}/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: credentialResponse.credential })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Acesso negado.');
      }

      localStorage.setItem('ch_token', data.token);
      localStorage.setItem('ch_user', JSON.stringify(data.user));
      navigate('/dashboard');

    } catch (err: any) {
      setErrorMsg(err.message || 'Erro ao autenticar com o Google.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    setErrorMsg('Falha ao comunicar com os serviços de autenticação do Google.');
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

      <div className="relative w-full max-w-md p-8 md:p-10 bg-surface-container-lowest border border-outline-variant/60 shadow-2xl rounded-3xl z-10 my-12 text-center">
        <img src="/logo.png" alt="Colégio Henriques Logo" className="h-16 w-auto mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-display-lg font-bold text-primary mb-2">
          Portal do Estudante
        </h2>
        <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
          Autenticação exclusiva via Google Workspace para contas do domínio <strong className="text-primary">@colegiohenriques.ao</strong>
        </p>

        {errorMsg && (
          <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-2xl font-body-md border border-error/20 text-center text-sm flex items-center gap-3">
            <ShieldAlert size={20} className="shrink-0 text-error" />
            <span className="text-left">{errorMsg}</span>
          </div>
        )}

        <div className="my-8 flex flex-col items-center justify-center min-h-[50px]">
          {isLoading ? (
            <div className="text-primary font-body-md text-sm animate-pulse">A validar a conta...</div>
          ) : (
            <div className="w-full flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
                auto_select
                allowed_parent_origin={window.location.origin}
                hosted_domain="colegiohenriques.ao"
                theme="filled_blue"
                shape="pill"
                size="large"
                text="signin_with"
                width="320"
              />
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-outline-variant/40 text-xs text-on-surface-variant leading-relaxed">
          <p className="font-semibold text-primary mb-1">Nota de Segurança:</p>
          Apenas contas de correio eletrónico com a extensão <strong>@colegiohenriques.ao</strong> possuem permissão de acesso ao sistema de gestão.
        </div>
      </div>
    </div>
  );
}
