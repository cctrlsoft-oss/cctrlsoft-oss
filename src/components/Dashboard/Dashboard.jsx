import { useState, useEffect } from "react";
import { authService } from "../../services/authService";
import "./Dashboard.css";

export default function Dashboard({ onLogout }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
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
    <div className="dashboard-container bg-dark">
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className={`dashboard-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <button className="sidebar-toggle-btn" onClick={toggleSidebar} title={isSidebarCollapsed ? "Expandir sidebar" : "Minimizar sidebar"}>
            <span className="material-symbols-outlined">
              {isSidebarCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
          
          {!isSidebarCollapsed && (
            <>
              <div className="sidebar-profile">
                <div className="profile-avatar">
                  <i className="bi bi-person-circle"></i>
                </div>
                <h2 className="profile-name">{user?.username?.toUpperCase() || 'USER'}</h2>
                <p className="profile-email">{user?.email || 'user@company.com'}</p>
              </div>
              
              <nav className="sidebar-nav">
                <a href="#" className="nav-item active">
                  <span className="material-symbols-outlined">home</span>
                  <span>home</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="material-symbols-outlined">folder</span>
                  <span>file</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="material-symbols-outlined">mail</span>
                  <span>messages</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="material-symbols-outlined">notifications</span>
                  <span>notification</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>location</span>
                </a>
                <a href="#" className="nav-item">
                  <span className="material-symbols-outlined">show_chart</span>
                  <span>graph</span>
                </a>
              </nav>
            </>
          )}
          
          {isSidebarCollapsed && (
            <nav className="sidebar-nav collapsed-nav">
              <a href="#" className="nav-item active" title="home">
                <span className="material-symbols-outlined">home</span>
              </a>
              <a href="#" className="nav-item" title="file">
                <span className="material-symbols-outlined">folder</span>
              </a>
              <a href="#" className="nav-item" title="messages">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a href="#" className="nav-item" title="notification">
                <span className="material-symbols-outlined">notifications</span>
              </a>
              <a href="#" className="nav-item" title="location">
                <span className="material-symbols-outlined">location_on</span>
              </a>
              <a href="#" className="nav-item" title="graph">
                <span className="material-symbols-outlined">show_chart</span>
              </a>
            </nav>
          )}
          
          {/* Logout Button */}
          <div className="sidebar-footer">
            <button className="logout-btn" onClick={handleLogout} title="Cerrar Sesión">
              <span className="material-symbols-outlined">logout</span>
              {!isSidebarCollapsed && <span>Cerrar Sesión</span>}
            </button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="dashboard-main">
          {/* Header */}
          <header className="dashboard-header">
            <h1 className="dashboard-title">Dashboard User</h1>
            <button className="menu-toggle" onClick={handleLogout}>
              <i className="bi bi-list"></i>
            </button>
          </header>

          {/* Statistics Cards */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon earning">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-title">Earning</h3>
                <p className="stat-value">$ 628</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon share">
                <i className="bi bi-share"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-title">Share</h3>
                <p className="stat-value">2434</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon likes">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-title">Likes</h3>
                <p className="stat-value">1259</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon rating">
                <i className="bi bi-star"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-title">Rating</h3>
                <p className="stat-value">8,5</p>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="charts-row">
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Result</h3>
                <button className="btn-check">Check Now</button>
              </div>
              <div className="chart-content">
                <div className="bar-chart-placeholder">
                  <p className="chart-placeholder-text">Bar Chart - Result</p>
                  <div className="chart-legend">
                    <span className="legend-item">
                      <span className="legend-color blue"></span>
                      2019
                    </span>
                    <span className="legend-item">
                      <span className="legend-color orange"></span>
                      2020
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Progress</h3>
                <button className="btn-check">Check Now</button>
              </div>
              <div className="chart-content">
                <div className="donut-chart-placeholder">
                  <div className="donut-center">45%</div>
                  <p className="chart-placeholder-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Analytics</h3>
              </div>
              <div className="chart-content">
                <div className="area-chart-placeholder">
                  <div className="chart-legend">
                    <span className="legend-item">
                      <span className="legend-color orange"></span>
                      Lorem Ipsum
                    </span>
                    <span className="legend-item">
                      <span className="legend-color blue"></span>
                      Dolor Amet
                    </span>
                  </div>
                  <p className="chart-placeholder-text">Area Chart</p>
                </div>
              </div>
            </div>
            
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Calendar</h3>
              </div>
              <div className="chart-content">
                <div className="calendar-placeholder">
                  <div className="calendar-grid">
                    <div className="calendar-weekdays">
                      <span>S</span>
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                    </div>
                    <div className="calendar-days">
                      {Array.from({ length: 29 }, (_, i) => {
                        const day = i + 1;
                        const isHighlighted = (day >= 11 && day <= 19) || day === 24 || day === 25;
                        const highlightClass = day >= 11 && day <= 19 ? 'highlight-blue' : 
                                             (day === 24 || day === 25) ? 'highlight-orange' : '';
                        return (
                          <span key={day} className={`calendar-day ${highlightClass}`}>
                            {day}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}