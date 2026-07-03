import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AcademicLevels from './pages/AcademicLevels';
import Contact from './pages/Contact';

// Função auxiliar simples para proteger rotas verificando o token
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem('ch_token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/niveis-academicos" element={<AcademicLevels />} />
        <Route path="/contactos" element={<Contact />} />
        
        <Route path="/login" element={<Login />} />
        
        {/* Protected Pages */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
