export default function HelloWorld({ onLoginClick }) {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <button
        onClick={onLoginClick}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Ir al Login
      </button>
    </div>
  );
}
