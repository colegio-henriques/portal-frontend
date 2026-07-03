import { Search, Bell } from 'lucide-react';

interface NavbarProps {
  user: any;
}

export default function Navbar({ user }: NavbarProps) {
  return (
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
            <p className="text-sm font-medium text-slate-200">{user?.email || 'Admin'}</p>
            <p className="text-xs text-slate-500 capitalize">{user?.role || 'Direcção'}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 ring-2 ring-slate-800">
            {user?.email ? user.email.charAt(0).toUpperCase() : 'A'}
          </div>
        </div>
      </div>
    </header>
  );
}
