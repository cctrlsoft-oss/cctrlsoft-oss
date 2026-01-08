import { useState } from "react";
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { authService } from "../../services/authService";

export default function LoginForm({ onLogin, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await authService.login(username, password);
      onLogin(data);
    } catch (err) {
      setError(err.message || "Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form 
      className="p-4 bg-dark text-white rounded shadow-lg position-relative"
      onSubmit={handleSubmit} 
      style={{ 
        maxWidth: "400px", 
        width: "90%",
        border: "1px solid rgba(226, 169, 241, 0.3)"
      }}
    >
      
      <button
        type="button"
        className="btn-close btn-close-white position-absolute"
        style={{ top: "15px", right: "15px", zIndex: 10 }}
        aria-label="Cerrar"
        onClick={onClose}
      ></button>

      <h2 className="text-center mb-4 color-pink-ctrlsoft">Iniciar sesión</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading}
          style={{ 
            borderRadius: "8px",
            padding: "10px"
          }}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
          style={{ 
            borderRadius: "8px",
            padding: "10px"
          }}
        />
      </div>

      <button 
        type="submit" 
        className="btn login-btn w-100" 
        disabled={loading}
        style={{ 
          borderRadius: "8px",
          padding: "10px",
          fontWeight: "500"
        }}
      >
        {loading ? "Cargando..." : "Entrar"}
      </button>
    </form>
  );
}
