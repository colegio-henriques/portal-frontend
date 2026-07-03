import { 
  Users, 
  CreditCard, 
  FileText, 
  LogOut, 
  LayoutDashboard,
  GraduationCap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

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

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col backdrop-blur-xl">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="w-8 h-8 flex items-center justify-center mr-3">
          <img src="/logo.png" alt="Colégio Henriques Logo" className="w-full h-full object-contain" />
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
  );
}
