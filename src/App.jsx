import { useState } from "react";
import './App.css'
import Home from "./components/home"; // aquí renombramos HelloWorld a Home
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {showLogin ? (
        <LoginPage onBackClick={() => setShowLogin(false)} />
      ) : (
        <Home onLoginClick={() => setShowLogin(true)} />
      )}
    </div>
  );
}
