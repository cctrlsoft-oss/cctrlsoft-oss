import LoginForm from "../components/LoginForm/LoginForm";

export default function LoginPage({ onBackClick }) {
  const handleLogin = (credentials) => {
    alert(`Usuario: ${credentials.email}`);
  };

  return (
    <div>
      <h2>CTRLSOFT</h2>
      <LoginForm onLogin={handleLogin} />

      <button
        onClick={onBackClick}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Volver
      </button>
    </div>
  );
}
