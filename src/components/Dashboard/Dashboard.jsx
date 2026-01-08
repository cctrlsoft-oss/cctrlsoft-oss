import { useState, useEffect } from "react";
import { authService } from "../../services/authService";
import "./Dashboard.css";

export default function Dashboard({ onLogout }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = authService.getToken();
      const response = await fetch('http://localhost:8000/core/perfil/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.error('Error al obtener perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    onLogout();
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <i className="bi bi-speedometer2 me-2"></i>
            CtrlSoft Dashboard
          </span>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">
              <i className="bi bi-person-circle me-2"></i>
              {user?.username}
            </span>
            <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-1"></i>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">
                  <i className="bi bi-person-badge me-2"></i>
                  Bienvenido, {user?.username}!
                </h3>
                <p className="card-text text-muted">
                  Has iniciado sesión correctamente en el sistema
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}