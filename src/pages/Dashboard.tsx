import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  FileText, 
  Bell, 
  LogOut, 
  LayoutDashboard,
  Search,
  MoreVertical,
  Plus
} from 'lucide-react';
import EnrollStudentModal from '../components/EnrollStudentModal';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('ch_user') || '{}');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('ch_token');
    localStorage.removeItem('ch_user');
    navigate('/login');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Painel Geral', active: true },
    { icon: GraduationCap, label: 'Académico', active: false },
    { icon: Users, label: 'Alunos & Turmas', active: false },
    { icon: CreditCard, label: 'Financeiro', active: false },
    { icon: FileText, label: 'Documentos', active: false },
  ];

  const stats = [
    { label: 'Total de Alunos', value: '1,248', trend: '+12%', color: 'from-blue-500 to-indigo-600' },
    { label: 'Propinas em Atraso', value: '€ 4,320', trend: '-5%', color: 'from-rose-500 to-pink-600' },
    { label: 'Documentos Pendentes', value: '34', trend: '+2', color: 'from-amber-500 to-orange-600' },
    { label: 'Avisos Enviados', value: '892', trend: '+14%', color: 'from-emerald-500 to-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex selection:bg-indigo-500/30">
      {/* Sidebar de Navegação */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col backdrop-blur-xl">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
            <GraduationCap size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-wide">C. Henriques</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-indigo-500/10 text-indigo-400 font-medium' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 rounded-xl transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            Terminar Sessão
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Gradients de Fundo (Decorativos) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-md z-10">
          <div className="flex items-center w-96">
            <div className="relative w-full">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                placeholder="Pesquisar alunos, turmas, faturas..." 
                className="w-full bg-slate-800/50 border border-slate-700/50 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder-slate-500 text-slate-200"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative text-slate-400 hover:text-slate-200 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            </button>
            <div className="flex items-center pl-6 border-l border-slate-800">
              <div className="text-right mr-3 hidden md:block">
                <p className="text-sm font-medium text-slate-200">{user.email || 'Admin'}</p>
                <p className="text-xs text-slate-500 capitalize">{user.role || 'Direcção'}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 ring-2 ring-slate-800">
                {user.email ? user.email.charAt(0).toUpperCase() : 'A'}
              </div>
            </div>
          </div>
        </header>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-auto p-8 z-10">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Visão Geral</h1>
              <p className="text-slate-400 text-sm mt-1">Bem-vindo de volta ao painel de gestão do Colégio.</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg shadow border border-slate-700 transition-all flex items-center">
                <FileText size={16} className="mr-2" />
                Relatório
              </button>
              <button 
                onClick={() => setIsEnrollModalOpen(true)}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-lg shadow-indigo-500/25 transition-all active:scale-95 flex items-center"
              >
                <Plus size={16} className="mr-2 text-indigo-100" />
                Nova Matrícula
              </button>
            </div>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden group hover:border-slate-600 transition-colors">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500`} />
                <p className="text-sm text-slate-400 font-medium mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-md ${stat.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tabelas Rápidas (Agregação Síncrona via Gateway mock) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg text-white">Matrículas Recentes</h3>
                <button className="text-slate-400 hover:text-slate-200">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:bg-slate-800/80 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-indigo-400 font-medium border border-slate-700">
                        A
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">Aluno Exemplo {item}</p>
                        <p className="text-xs text-slate-500">10º Ano - Ciências e Tecnologias</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        Matriculado
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="font-semibold text-lg text-white mb-6">Alertas do Sistema</h3>
              <div className="space-y-5">
                <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-rose-500 before:rounded-full">
                  <p className="text-sm font-medium text-slate-300">Falha de Integração Bancária</p>
                  <p className="text-xs text-slate-500 mt-1">Finance Service • Há 10 min</p>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-amber-500 before:rounded-full">
                  <p className="text-sm font-medium text-slate-300">Upload de Documento Suspenso</p>
                  <p className="text-xs text-slate-500 mt-1">Document Service • Há 1 hora</p>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-500 before:rounded-full">
                  <p className="text-sm font-medium text-slate-300">Sincronização Pub/Sub Concluída</p>
                  <p className="text-xs text-slate-500 mt-1">Core • Há 2 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <EnrollStudentModal 
          isOpen={isEnrollModalOpen} 
          onClose={() => setIsEnrollModalOpen(false)} 
          onSuccess={() => {
            // Em cenários reais, aqui faríamos fetch à lista de alunos novamente
            console.log("Matrícula concluída. O Gateway encaminhou, o Académico gravou, o Financeiro facturou e a Notificação foi disparada via Pub/Sub!");
          }} 
        />
      </main>
    </div>
  );
}
