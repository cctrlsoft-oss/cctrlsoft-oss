import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import personLaptopImg from "../assets/images/person-laptop.jpg";
import whatsappIcon from "../assets/images/WhatsApp_icon.png";

export default function Home({ onLoginSuccess }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="bg-dark text-white min-vh-100" id="home-section" style={{ position: "relative" }}>
      {/* Login Form - Top Center */}
      {showLogin && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-start justify-content-center"
          style={{ 
            zIndex: 1050, 
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            paddingTop: "2rem"
          }}
        >
          <div className="position-relative">
            <button
              onClick={() => setShowLogin(false)}
              className="btn-close btn-close-white position-absolute top-0 end-0"
              style={{ transform: "translate(50%, -50%)" }}
              aria-label="Cerrar"
            ></button>
            <LoginForm 
              onLogin={(data) => {
                onLoginSuccess(data);
                setShowLogin(false);
              }} 
            />
          </div>
        </div>
      )}

      {/* Login Button - Top Center */}
      <div className="container-fluid py-3">
        <div className="row justify-content-center">
          <div className="col-auto">
            <button
              onClick={() => setShowLogin(true)}
              className="btn btn-outline-light px-4"
              style={{ borderRadius: "20px" }}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4">
        <div className="row align-items-start justify-content-between g-4">

          {/* Panel Izquierdo - animacion 3D */}
          <div className="col-12 col-lg-3 col-xl-2">
            <div 
              className="rounded-4 p-4 text-center h-100 d-flex align-items-center justify-content-center"
              style={{ 
                backgroundColor: "#2a2838",
                minHeight: "clamp(300px, 40vh, 400px)",
                position: "relative"
              }}
            >
              <span 
                className="fw-bold"
                style={{ 
                  color: "#ff0000",
                  fontSize: "1.5rem"
                }}
              >
                animación 3D
              </span>
              {/* Línea vertical púrpura */}
              <div 
                className="position-absolute end-0 top-0"
                style={{ 
                  width: "3px",
                  height: "100%",
                  backgroundColor: "#e2a9f1"
                }}
              ></div>
            </div>
          </div>

          {/* Centro - Desarrollo Web y CtrlSoft */}
          <div className="col-12 col-lg-6 col-xl-7 text-center text-lg-start">
            <div className="d-flex align-items-center gap-3 mb-3">
              <h3 className="color-pink-ctrlsoft fw-semibold mb-0" style={{ fontSize: "1.5rem" }}>
                Desarrollo Web
              </h3>
              <hr 
                className="flex-grow-1 m-0" 
                style={{ 
                  border: "none", 
                  borderTop: "2px solid #e2a9f1", 
                  opacity: "1" 
                }}
              />
            </div>
            
            <h1 
              className="fw-bold text-white mb-4"
              style={{ 
                fontSize: "clamp(3rem, 8vw, 8rem)",
                lineHeight: "1.1"
              }}
            >
              CtrlSoft
            </h1>
            
            <p className="text-light mb-4 font-open-sans" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              Tu negocio tiene potencial para llegar más lejos. Con un sitio web
              profesional, conecta con más personas, expande tus oportunidades y haz
              que tu marca trascienda fronteras en el universo digital.
            </p>

            {/* Botones 24/7 Soporte y Personalizado */}
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mb-4">
              <div className="btn-purple-ctrlsoft rounded-pill shadow-sm p-1" style={{ width: "fit-content" }}>
                <div className="bg-transparent border border-2 border-purple rounded-pill px-4 py-2 position-relative d-flex align-items-center justify-content-center">
                  <span className="text-white fw-medium" style={{ paddingRight: "30px" }}>
                    24/7 Soporte
                  </span>
                  <div 
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center position-absolute"
                    style={{ 
                      right: "2px",
                      width: "28px",
                      height: "28px"
                    }}
                  >
                    <span className="material-symbols-outlined check-icon" style={{ fontSize: "18px" }}>
                      check
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="btn-purple-ctrlsoft rounded-pill shadow-sm p-1" style={{ width: "fit-content" }}>
                <div className="bg-transparent border border-2 border-purple rounded-pill px-4 py-2 position-relative d-flex align-items-center justify-content-center">
                  <span className="text-white fw-medium" style={{ paddingRight: "30px" }}>
                    Personalizado
                  </span>
                  <div 
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center position-absolute"
                    style={{ 
                      right: "2px",
                      width: "28px",
                      height: "28px"
                    }}
                  >
                    <span className="material-symbols-outlined check-icon" style={{ fontSize: "18px" }}>
                      check
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Derecha - Imagen con laptop y smartphone */}
          <div className="col-12 col-lg-3 col-xl-3 position-relative">
            <div 
              className="position-relative d-flex justify-content-end"
              style={{ 
                height: "clamp(300px, 50vh, 500px)",
                overflow: "hidden"
              }}
            >
              <img
                src={personLaptopImg}
                alt="Persona usando laptop"
                className="rounded-3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
                }}
              />
              
              {/* Smartphone overlay - solo visible en pantallas grandes */}
              <div 
                className="position-absolute d-none d-lg-block"
                style={{
                  top: "10%",
                  right: "-10%",
                  width: "120px",
                  height: "200px",
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  padding: "8px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  transform: "rotate(-5deg)",
                  zIndex: 1
                }}
              >
                <div 
                  className="w-100 h-100 rounded"
                  style={{
                    backgroundColor: "#f0f0f0",
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                  }}
                ></div>
              </div>
            </div>
            
            {/* WhatsApp Icon */}
            <div
              className="position-absolute"
              style={{
                bottom: "5%",
                right: "5%",
                width: "60px",
                height: "60px",
                backgroundColor: "#25D366",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)",
                cursor: "pointer",
                transition: "transform 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <img 
                src={whatsappIcon} 
                alt="WhatsApp" 
                style={{ width: "35px", height: "35px" }} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
