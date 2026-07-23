import { 
  Users, 
  CreditCard, 
  FileText, 
  LogOut, 
  LayoutDashboard,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('ch_token');
    localStorage.removeItem('ch_user');
    navigate('/login');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Painel Geral', path: '/dashboard' },
    { icon: ShieldCheck, label: 'Permissões (RBAC)', path: '/admin/users' },
    { icon: GraduationCap, label: 'Académico', path: '/dashboard' },
    { icon: Users, label: 'Alunos & Turmas', path: '/dashboard' },
    { icon: CreditCard, label: 'Financeiro', path: '/dashboard' },
    { icon: FileText, label: 'Documentos', path: '/dashboard' },
  ];

  return (
    <aside className="w-64 border-r border-outline-variant bg-surface-container-lowest flex flex-col font-sans">
      <div className="h-[72px] flex items-center px-6 border-b border-outline-variant">
        <div className="w-8 h-8 flex items-center justify-center mr-3">
          <img src="/logo.png" alt="Colégio Henriques Logo" className="w-full h-full object-contain" />
        </div>
        <span className="font-display-lg font-bold text-lg text-primary tracking-wide">C. Henriques</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-label-md ${
                isActive 
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm border border-outline-variant/50' 
                  : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-outline-variant">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 text-on-surface-variant hover:bg-error-container hover:text-on-error-container rounded-xl transition-colors font-label-md font-medium"
        >
          <LogOut size={20} className="mr-3" />
          Terminar Sessão
        </button>
      </div>
    </aside>
  );
}
