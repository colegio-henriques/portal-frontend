import { useState, useEffect } from 'react';
import { 
  FileText, 
  MoreVertical,
  Plus,
  Loader2
} from 'lucide-react';
import EnrollStudentModal from '../components/EnrollStudentModal';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('ch_user') || '{}');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [isLoadingStudents, setIsLoadingStudents] = useState(true);

  const fetchStudents = async () => {
    try {
      const API_BASE = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_BASE}/academic/students`);
      if (response.ok) {
        const data = await response.json();
        setStudents(data.students || []);
      }
    } catch (error) {
      console.error('Erro ao buscar matrículas recentes', error);
    } finally {
      setIsLoadingStudents(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const stats = [
    { label: 'Total de Alunos', value: '1,248', trend: '+12%', color: 'from-blue-500 to-indigo-600' },
    { label: 'Propinas em Atraso', value: '€ 4,320', trend: '-5%', color: 'from-rose-500 to-pink-600' },
    { label: 'Documentos Pendentes', value: '34', trend: '+2', color: 'from-amber-500 to-orange-600' },
    { label: 'Avisos Enviados', value: '892', trend: '+14%', color: 'from-emerald-500 to-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex selection:bg-indigo-500/30">
      <Sidebar />

      {/* Área Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Gradients de Fundo (Decorativos) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <Navbar user={user} />

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
                {isLoadingStudents ? (
                  <div className="flex justify-center p-8 text-indigo-400">
                    <Loader2 className="animate-spin mr-2" size={24} /> A carregar matrículas...
                  </div>
                ) : students.length === 0 ? (
                  <div className="text-center p-8 text-slate-500 bg-slate-900/30 rounded-xl border border-slate-800/50">
                    Não há matrículas recentes.
                  </div>
                ) : (
                  students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:bg-slate-800/80 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-indigo-400 font-medium border border-slate-700">
                          {student.first_name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-200">{student.first_name} {student.last_name}</p>
                          <p className="text-xs text-slate-500">{student.grade_level} - {student.academic_year}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          Matriculado
                        </span>
                        <p className="text-[10px] text-slate-600 mt-1">{new Date(student.created_at).toLocaleDateString('pt-PT')}</p>
                      </div>
                    </div>
                  ))
                )}
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
