import { useState, useEffect } from 'react';
import { FileText, MoreVertical, Plus, Loader2 } from 'lucide-react';
import EnrollStudentModal from '../components/EnrollStudentModal';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
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
    { label: 'Total de Alunos', value: '1,248', trend: '+12%', color: 'from-primary to-primary-container' },
    { label: 'Propinas em Atraso', value: '€ 4,320', trend: '-5%', color: 'from-error to-error-container' },
    { label: 'Documentos Pendentes', value: '34', trend: '+2', color: 'from-secondary to-secondary-container' },
    { label: 'Avisos Enviados', value: '892', trend: '+14%', color: 'from-tertiary to-tertiary-container' }
  ];

  return (
    <div className="font-sans min-h-screen bg-surface-container-lowest text-on-surface flex">
      <Sidebar />

      {/* Área Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-surface">
        {/* Gradients de Fundo (Decorativos) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-tertiary-container/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        <Navbar />

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-auto p-8 z-10">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold font-display-lg text-on-surface tracking-tight">Visão Geral</h1>
              <p className="text-on-surface-variant font-body-md mt-1">Bem-vindo de volta ao painel de gestão do Colégio.</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2.5 bg-surface hover:bg-surface-variant text-on-surface text-sm font-label-md font-medium rounded-lg border border-outline-variant transition-colors flex items-center">
                <FileText size={16} className="mr-2" />
                Relatório
              </button>
              <button 
                onClick={() => setIsEnrollModalOpen(true)}
                className="px-4 py-2.5 bg-primary hover:bg-primary-container text-on-primary text-sm font-label-md font-medium rounded-lg shadow-md transition-all active:scale-95 flex items-center"
              >
                <Plus size={16} className="mr-2" />
                Nova Matrícula
              </button>
            </div>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500`} />
                <p className="text-sm text-on-surface-variant font-label-md font-medium mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-display-lg font-bold text-on-surface">{stat.value}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${stat.trend.startsWith('+') ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-error-container text-on-error-container'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tabelas Rápidas (Agregação Síncrona via Gateway mock) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold font-headline-md text-lg text-on-surface">Matrículas Recentes</h3>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                {isLoadingStudents ? (
                  <div className="flex justify-center p-8 text-primary font-body-md">
                    <Loader2 className="animate-spin mr-2" size={24} /> A carregar matrículas...
                  </div>
                ) : students.length === 0 ? (
                  <div className="text-center p-8 text-on-surface-variant bg-surface rounded-xl border border-outline-variant/50 font-body-md">
                    Não há matrículas recentes.
                  </div>
                ) : (
                  students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 rounded-xl bg-surface border border-outline-variant hover:bg-surface-variant transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center mr-4 text-on-primary-container font-medium border border-outline-variant">
                          {student.first_name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-label-md font-medium text-on-surface">{student.first_name} {student.last_name}</p>
                          <p className="text-xs font-body-md text-on-surface-variant">{student.grade_level} - {student.academic_year}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container border border-outline-variant/30">
                          Matriculado
                        </span>
                        <p className="text-[10px] font-body-md text-on-surface-variant mt-1">{new Date(student.created_at).toLocaleDateString('pt-PT')}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm">
              <h3 className="font-semibold font-headline-md text-lg text-on-surface mb-6">Alertas do Sistema</h3>
              <div className="space-y-5">
                <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-error before:rounded-full">
                  <p className="text-sm font-medium font-label-md text-on-surface">Falha de Integração Bancária</p>
                  <p className="text-xs font-body-md text-on-surface-variant mt-1">Finance Service • Há 10 min</p>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-secondary before:rounded-full">
                  <p className="text-sm font-medium font-label-md text-on-surface">Upload de Documento Suspenso</p>
                  <p className="text-xs font-body-md text-on-surface-variant mt-1">Document Service • Há 1 hora</p>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-tertiary before:rounded-full">
                  <p className="text-sm font-medium font-label-md text-on-surface">Sincronização Pub/Sub Concluída</p>
                  <p className="text-xs font-body-md text-on-surface-variant mt-1">Core • Há 2 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <EnrollStudentModal 
          isOpen={isEnrollModalOpen} 
          onClose={() => setIsEnrollModalOpen(false)} 
          onSuccess={() => {
            console.log("Matrícula concluída. O Gateway encaminhou, o Académico gravou, o Financeiro facturou e a Notificação foi disparada via Pub/Sub!");
          }} 
        />
      </main>
    </div>
  );
}
