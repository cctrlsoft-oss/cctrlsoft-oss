import { useEffect, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import AnimatedLetterC from "./AnimatedLetterC";
import "./Home.css";

const WHATSAPP_URL = `https://wa.me/573105260916?text=${encodeURIComponent(
  "Vengo desde la web, quiero más información."
)}`;

const solutions = [
  {
    id: "sitios",
    icon: "language",
    title: "Sitios web",
    text: "Páginas y sitios que presentan tu empresa con claridad y convierten una visita en una conversación.",
  },
  {
    id: "software",
    icon: "terminal",
    title: "Software a la medida",
    text: "Sistemas, paneles y herramientas pensados para tu operación, no para un flujo genérico.",
  },
  {
    id: "soporte",
    icon: "support_agent",
    title: "Soporte y evolución",
    text: "Después del lanzamiento seguimos: ajustes, mejoras y funciones nuevas cuando el negocio cambia.",
  },
];

const projects = [
  {
    icon: "web",
    title: "Presencia digital",
    text: "Sitios corporativos y landings con una historia clara, pensados para que te encuentren y te escriban.",
  },
  {
    icon: "dashboard",
    title: "Sistemas internos",
    text: "Paneles y herramientas para pedidos, clientes, inventario o el proceso que hoy vive en hojas y chats.",
  },
  {
    icon: "hub",
    title: "Productos conectados",
    text: "Aplicaciones que unen lo que ya usas —pagos, mensajería, datos— en un solo lugar de trabajo.",
  },
];

const steps = [
  {
    index: "01",
    title: "Escuchamos",
    text: "Entendemos el negocio, quién lo usa y qué tiene que quedar resuelto.",
  },
  {
    index: "02",
    title: "Definimos",
    text: "Acordamos alcance, pantallas y la forma más simple de construir la primera versión.",
  },
  {
    index: "03",
    title: "Construimos",
    text: "Diseñamos y desarrollamos el producto, con avances que puedes ver y probar.",
  },
  {
    index: "04",
    title: "Acompañamos",
    text: "Lo publicamos, lo ajustamos y seguimos cuando aparezcan nuevas necesidades.",
  },
];

export default function Home({ onLoginSuccess }) {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [effectsPaused, setEffectsPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      {showLogin && (
        <div className="login-overlay">
          <LoginForm
            onLogin={(data) => {
              onLoginSuccess(data);
              setShowLogin(false);
            }}
            onClose={() => setShowLogin(false)}
          />
        </div>
      )}

      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="logo" href="#inicio" onClick={closeMenu}>
            <span className="logo-mark">C</span>TRLSOFT
          </a>

          <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Principal">
            <div className="nav-drop">
              <button type="button" aria-haspopup="true">
                Soluciones <span className="chevron">▾</span>
              </button>
              <div className="nav-menu">
                <a href="#sitios" onClick={closeMenu}>Sitios web</a>
                <a href="#software" onClick={closeMenu}>Software a la medida</a>
                <a href="#soporte" onClick={closeMenu}>Soporte y evolución</a>
              </div>
            </div>
            <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
            <a href="#proceso" onClick={closeMenu}>Cómo trabajamos</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <button
              type="button"
              className="cs-btn-text nav-mobile-login"
              onClick={() => {
                closeMenu();
                setShowLogin(true);
              }}
            >
              Clientes
            </button>
          </nav>

          <div className="header-actions">
            <button type="button" className="cs-btn-text" onClick={() => setShowLogin(true)}>
              Clientes
            </button>
            <a className="cs-btn cs-btn-solid cs-btn-sm" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Hablemos <span aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className={`hero ${effectsPaused ? "is-paused" : ""}`} id="inicio">
          <div className="hero-bg" />
          <div className="hero-floor" />

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line">Desarrollo web</span>
                <span className="eyebrow-line">Software a la medida</span>
              </p>
              <h1>
                Tecnología que
                <span>impulsa negocios.</span>
              </h1>
              <p>
                Diseñamos y desarrollamos sitios web y software a la medida.
                Construimos la herramienta alrededor de cómo trabaja tu empresa
                y la dejamos lista para usarse.
              </p>
              <div className="hero-actions">
                <a className="cs-btn cs-btn-solid cs-btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Cuéntanos qué quieres construir <span aria-hidden="true">→</span>
                </a>
                <a className="cs-btn cs-btn-ghost cs-btn-lg" href="#soluciones">
                  Explorar soluciones <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="visual">
              <div className="visual-glow" />
              <div className="visual-letter">
                <AnimatedLetterC paused={effectsPaused} />
              </div>

              <div className="flow">
                <article className="flow-card">
                  <header>
                    <span className="material-symbols-outlined">lightbulb</span>
                    <h3>Idea</h3>
                  </header>
                  <ul>
                    <li>Negocio</li>
                    <li>Usuarios</li>
                    <li>Procesos</li>
                    <li>Objetivo</li>
                  </ul>
                </article>
                <span className="material-symbols-outlined flow-arrow" aria-hidden="true">arrow_forward</span>
                <article className="flow-card flow-card--focus">
                  <header>
                    <span className="material-symbols-outlined">code</span>
                    <h3>Desarrollo</h3>
                  </header>
                  <ul>
                    <li>Diseñar</li>
                    <li>Construir</li>
                    <li>Integrar</li>
                    <li>Probar</li>
                  </ul>
                </article>
                <span className="material-symbols-outlined flow-arrow" aria-hidden="true">arrow_forward</span>
                <article className="flow-card">
                  <header>
                    <span className="material-symbols-outlined">rocket_launch</span>
                    <h3>Producto</h3>
                  </header>
                  <ul>
                    <li>Sitio web</li>
                    <li>Sistema propio</li>
                    <li>A tu medida</li>
                    <li>Listo para usar</li>
                  </ul>
                </article>
              </div>

              <p className="visual-caption">De tu idea a un producto real</p>
              <button type="button" className="pause-btn" onClick={() => setEffectsPaused((paused) => !paused)}>
                {effectsPaused ? "Reanudar efectos" : "Pausar efectos"}
              </button>
            </div>
          </div>

          <div className="hero-indicator" aria-hidden="true" />
        </section>

        <section className="section" id="soluciones">
          <div className="section-inner">
            <p className="eyebrow">Soluciones</p>
            <h2>Lo que construimos contigo.</h2>
            <p className="section-lead">
              No vendemos un paquete cerrado. Partimos de lo que tu empresa necesita
              y lo convertimos en un sitio o un sistema propio.
            </p>
            <div className="cards">
              {solutions.map((item) => (
                <article className="info-card" id={item.id} key={item.id}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="proyectos">
          <div className="section-inner">
            <p className="eyebrow">Proyectos</p>
            <h2>Tipos de producto que desarrollamos.</h2>
            <p className="section-lead">
              Cada encargo es distinto. Estos son los formatos con los que más
              trabajamos cuando una empresa pide algo a su medida.
            </p>
            <div className="cards">
              {projects.map((item) => (
                <article className="info-card" key={item.title}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="section-inner">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>De la conversación al producto en uso.</h2>
            <div className="steps">
              {steps.map((step) => (
                <article className="step" key={step.index}>
                  <span className="step-index">{step.index}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="section-inner">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">Contacto</p>
                <h2>Cuéntanos qué quieres construir.</h2>
                <p>
                  Una idea, un proceso que hoy se hace a mano o un sitio que ya no
                  representa a tu empresa. Escríbenos y te decimos cómo lo haríamos.
                </p>
              </div>
              <a className="cs-btn cs-btn-solid cs-btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Escribir por WhatsApp <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
