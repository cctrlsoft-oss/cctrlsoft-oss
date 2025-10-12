import { useState } from "react";
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form className="p-4 bg-dark text-white rounded" onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2 className="text-center mb-4">Iniciar sesión</h2>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
        />
      </div>

      <button type="submit" className="btn login-btn w-100">
        Entrar
      </button>
    </form>
  );
}
