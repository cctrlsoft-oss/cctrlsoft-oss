import { useState } from "react";
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { authService } from "../../services/authService";

export default function LoginForm({ onLogin }) {
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
      setError("Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="p-4 bg-dark text-white rounded" onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2 className="text-center mb-4">Iniciar sesión</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <button type="submit" className="btn login-btn w-100" disabled={loading}>
        {loading ? "Cargando..." : "Entrar"}
      </button>
    </form>
  );
}
