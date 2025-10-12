import { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {showLogin ? (
        <LoginPage onBackClick={() => setShowLogin(false)} />
      ) : (
        <HelloWorld onLoginClick={() => setShowLogin(true)} />
      )}
    </div>
  );
}
