import { useState } from 'react';
import { X, UserPlus, Loader2, CheckCircle } from 'lucide-react';

interface EnrollStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EnrollStudentModal({ isOpen, onClose, onSuccess }: EnrollStudentModalProps) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    academic_year: '2026/2027',
    grade_level: '10º Ano',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nativeEvent = e.nativeEvent as SubmitEvent;
    nativeEvent.submitter?.blur();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/academic/students/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocorreu um erro na matrícula.');
      }

      setSuccess(`Matrícula de ${formData.first_name} efectuada! (ID: ${data.student_id})`);
      setTimeout(() => {
        onSuccess();
        onClose();
        setSuccess('');
        setFormData({ ...formData, first_name: '', last_name: '', date_of_birth: '' });
      }, 2500);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/50 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative">
        {/* Glow Decorativo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none" />

        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mr-4 border border-indigo-500/20">
              <UserPlus size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Nova Matrícula</h2>
              <p className="text-xs text-slate-400">Insira os dados do novo aluno</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 transition-colors p-2 rounded-full hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center">
              <CheckCircle size={18} className="mr-2" />
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nome Próprio</label>
                <input 
                  type="text" 
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Ex: João"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Apelido</label>
                <input 
                  type="text" 
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Ex: Silva"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Data de Nascimento</label>
              <input 
                type="date" 
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 text-slate-400 rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Ano Lectivo</label>
                <select 
                  name="academic_year"
                  value={formData.academic_year}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                >
                  <option value="2025/2026">2025/2026</option>
                  <option value="2026/2027">2026/2027</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Ano/Grau</label>
                <select 
                  name="grade_level"
                  value={formData.grade_level}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                >
                  <option value="10º Ano">10º Ano</option>
                  <option value="11º Ano">11º Ano</option>
                  <option value="12º Ano">12º Ano</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex justify-end space-x-3">
              <button 
                type="button" 
                onClick={onClose}
                disabled={isLoading}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                disabled={isLoading || !!success}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <><Loader2 size={16} className="animate-spin mr-2" /> A processar...</>
                ) : (
                  'Confirmar Matrícula'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
