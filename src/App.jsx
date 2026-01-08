import { useState, useEffect } from "react";
import './App.css';
import Home from "./components/home";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import { authService } from "./services/authService";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay token al cargar
    const token = authService.getToken();
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLoginSuccess = (data) => {
    console.log('Login exitoso:', data);
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogin(false);
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Si está autenticado, mostrar Dashboard
  if (isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  // Si no está autenticado
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {showLogin ? (
        <LoginPage 
          onBackClick={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <Home onLoginClick={() => setShowLogin(true)} />
      )}
    </div>
  );
}
