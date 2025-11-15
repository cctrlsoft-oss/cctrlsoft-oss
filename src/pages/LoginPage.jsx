import LoginForm from "../components/LoginForm/LoginForm";

export default function LoginPage({ onBackClick, onLoginSuccess }) {
  return (
    <div>
      <LoginForm onLogin={onLoginSuccess} />
      <button
        className="btn btn-secondary mt-3"
        onClick={onBackClick}
      >
        Volver al inicio
      </button>
    </div>
  );
}
