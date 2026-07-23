import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  UserCheck, 
  Lock
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

interface UserItem {
  id: number;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  created_at: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const fetchUsers = async () => {
    try {
      const API_BASE = import.meta.env.VITE_API_URL || '';
      const token = localStorage.getItem('ch_token');

      const response = await fetch(`${API_BASE}/users`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data.users || []);
      } else {
        const err = await response.json();
        setFeedback({ type: 'error', message: err.error || 'Erro ao carregar utilizadores.' });
      }
    } catch (error) {
      console.error('Erro na ligação ao servidor:', error);
      setFeedback({ type: 'error', message: 'Falha na comunicação com o servidor IAM.' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: number, newRole: string) => {
    setUpdatingId(userId);
    setFeedback(null);
    try {
      const API_BASE = import.meta.env.VITE_API_URL || '';
      const token = localStorage.getItem('ch_token');

      const response = await fetch(`${API_BASE}/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ role: newRole })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Falha ao alterar papel do utilizador.');
      }

      setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
      setFeedback({ type: 'success', message: `Papel do utilizador atualizado para '${newRole.toUpperCase()}'.` });
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setUpdatingId(null);
    }
  };

  const handleStatusToggle = async (userId: number, currentStatus: boolean) => {
    setUpdatingId(userId);
    setFeedback(null);
    const newStatus = !currentStatus;

    try {
      const API_BASE = import.meta.env.VITE_API_URL || '';
      const token = localStorage.getItem('ch_token');

      const response = await fetch(`${API_BASE}/users/${userId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ is_active: newStatus })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Falha ao alterar estado do utilizador.');
      }

      setUsers(prev => prev.map(u => u.id === userId ? { ...u, is_active: newStatus } : u));
      setFeedback({ 
        type: 'success', 
        message: `Estado da conta ${newStatus ? 'ativado' : 'suspenso'} com sucesso.` 
      });
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredUsers = users.filter(u => 
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    `${u.first_name} ${u.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans min-h-screen bg-surface-container-lowest text-on-surface flex flex-col md:flex-row">
      <Sidebar />

      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative bg-surface">
        <Navbar />

        <div className="flex-1 overflow-auto p-6 md:p-8 z-10">
          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold font-display-lg text-primary tracking-tight">Gestão de Permissões (RBAC)</h1>
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                  admin.colegiohenriques.ao
                </span>
              </div>
              <p className="text-on-surface-variant font-body-md mt-1">
                Configure os papéis, autorizações e estado das contas da comunidade corporativa <strong className="text-primary">@colegiohenriques.ao</strong>.
              </p>
            </div>

            {/* Barra de Pesquisa */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-3 text-on-surface-variant" size={18} />
              <input
                type="text"
                placeholder="Pesquisar por nome, email..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/60 focus:outline-none focus:border-primary text-sm font-body-md"
              />
            </div>
          </div>

          {/* Alert Feedback */}
          {feedback && (
            <div className={`mb-6 p-4 rounded-xl font-body-md text-sm flex items-center justify-between ${
              feedback.type === 'success' ? 'bg-tertiary-container/40 text-on-surface border border-tertiary/20' : 'bg-error-container text-on-error-container border border-error/20'
            }`}>
              <span>{feedback.message}</span>
              <button onClick={() => setFeedback(null)} className="font-bold ml-4">✕</button>
            </div>
          )}

          {/* Tabela de Utilizadores */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-outline-variant/40 flex justify-between items-center">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                <ShieldCheck size={20} className="text-primary" />
                Utilizadores Registados ({filteredUsers.length})
              </h3>
            </div>

            {isLoading ? (
              <div className="flex justify-center p-12 text-primary font-body-md">
                <Loader2 className="animate-spin mr-2" size={24} /> A carregar utilizadores...
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center p-12 text-on-surface-variant font-body-md">
                Nenhum utilizador encontrado para a pesquisa.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container/50 border-b border-outline-variant/40 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                      <th className="p-4 pl-6">Utilizador</th>
                      <th className="p-4">Correio Eletrónico</th>
                      <th className="p-4">Papel / Função (RBAC)</th>
                      <th className="p-4">Estado da Conta</th>
                      <th className="p-4 pr-6 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/30 text-sm font-body-md">
                    {filteredUsers.map(user => (
                      <tr key={user.id} className="hover:bg-surface-variant/40 transition-colors">
                        <td className="p-4 pl-6 font-semibold text-on-surface">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container font-bold flex items-center justify-center border border-outline-variant/50 shrink-0">
                              {user.first_name?.charAt(0)?.toUpperCase() || 'U'}
                            </div>
                            <div>
                              <span>{user.first_name} {user.last_name}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-on-surface-variant font-mono text-xs">
                          {user.email}
                        </td>
                        <td className="p-4">
                          <select
                            disabled={updatingId === user.id}
                            value={user.role}
                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                            className="bg-surface border border-outline-variant rounded-lg px-3 py-1.5 text-xs font-semibold text-primary focus:outline-none focus:border-primary cursor-pointer disabled:opacity-50"
                          >
                            <option value="admin">Administrador (Admin)</option>
                            <option value="professor">Professor / Docente</option>
                            <option value="staff">Secretaria / Staff</option>
                            <option value="encarregado">Encarregado de Educação</option>
                            <option value="aluno">Estudante / Aluno</option>
                          </select>
                        </td>
                        <td className="p-4">
                          {user.is_active ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-tertiary-container text-on-tertiary-container border border-tertiary/20">
                              <CheckCircle2 size={14} /> Ativo
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-error-container text-on-error-container border border-error/20">
                              <XCircle size={14} /> Suspenso
                            </span>
                          )}
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <button
                            disabled={updatingId === user.id}
                            onClick={() => handleStatusToggle(user.id, user.is_active)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1.5 border shadow-sm ${
                              user.is_active
                                ? 'bg-surface hover:bg-error-container hover:text-on-error-container border-outline-variant text-on-surface-variant'
                                : 'bg-primary text-on-primary hover:bg-primary-container border-transparent'
                            }`}
                          >
                            {updatingId === user.id ? (
                              <Loader2 className="animate-spin" size={14} />
                            ) : user.is_active ? (
                              <><Lock size={14} /> Suspender</>
                            ) : (
                              <><UserCheck size={14} /> Ativar</>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
